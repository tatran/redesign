/**
 * Neon DB Access & Telemetry Logger for TRAVELFUN Redesign
 * 
 * Direct real-time logging via Neon Serverless HTTP API.
 * Zero npm dependencies required!
 */

const fs = require('fs');
const path = require('path');

let DATABASE_URL = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '';

if (process.argv[2] && process.argv[2].startsWith('postgres')) {
  DATABASE_URL = process.argv[2];
}

if (!DATABASE_URL) {
  try {
    const configPath = path.join(__dirname, 'neon-config.js');
    if (fs.existsSync(configPath)) {
      const configContent = fs.readFileSync(configPath, 'utf8');
      const match = configContent.match(/DATABASE_URL:\s*["'](postgres[^"']+)["']/);
      if (match && match[1]) {
        DATABASE_URL = match[1];
      }
    }
  } catch (e) {}
}

function parseNeonUrl(url) {
  if (!url || !url.startsWith('postgres')) return null;
  try {
    const parsed = new URL(url);
    return {
      host: parsed.hostname,
      user: parsed.username,
      password: decodeURIComponent(parsed.password),
      database: parsed.pathname.replace(/^\//, ''),
      endpointId: parsed.hostname.split('.')[0]
    };
  } catch (err) {
    console.error('Failed to parse DATABASE_URL:', err.message);
    return null;
  }
}

async function executeNeonSql(sql, params = []) {
  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not configured.');
  }

  const dbConfig = parseNeonUrl(DATABASE_URL);
  if (!dbConfig) {
    throw new Error('Invalid PostgreSQL / Neon connection string.');
  }

  let query = sql;
  params.forEach((val, idx) => {
    const placeholder = `$${idx + 1}`;
    let formattedVal;
    if (val === null || val === undefined) {
      formattedVal = 'NULL';
    } else if (typeof val === 'number') {
      formattedVal = val;
    } else {
      formattedVal = `'${String(val).replace(/'/g, "''")}'`;
    }
    query = query.replace(placeholder, formattedVal);
  });

  const endpointUrl = `https://${dbConfig.host}/sql`;

  const response = await fetch(endpointUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Neon-Connection-String': DATABASE_URL
    },
    body: JSON.stringify({ query })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Neon SQL API HTTP ${response.status}: ${errorText}`);
  }

  return await response.json();
}

async function initNeonTable() {
  const statements = [
    `CREATE TABLE IF NOT EXISTS page_access_logs (
      id BIGSERIAL PRIMARY KEY,
      access_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      ip_address VARCHAR(45) NOT NULL,
      domain_url TEXT NOT NULL,
      user_agent TEXT,
      referrer TEXT,
      language VARCHAR(10) DEFAULT 'sk',
      theme VARCHAR(10) DEFAULT 'light',
      screen_resolution VARCHAR(30),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );`,
    `CREATE INDEX IF NOT EXISTS idx_page_access_logs_time ON page_access_logs (access_time DESC);`,
    `CREATE INDEX IF NOT EXISTS idx_page_access_logs_domain ON page_access_logs (domain_url);`,
    `CREATE TABLE IF NOT EXISTS travelfun_telemetry_events (
      id BIGSERIAL PRIMARY KEY,
      event_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      session_id VARCHAR(64) NOT NULL,
      event_name VARCHAR(64) NOT NULL,
      category VARCHAR(32) NOT NULL,
      ip_address VARCHAR(45) NOT NULL,
      domain_url TEXT NOT NULL,
      language VARCHAR(10) DEFAULT 'sk',
      theme VARCHAR(10) DEFAULT 'light',
      payload JSONB DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );`,
    `CREATE INDEX IF NOT EXISTS idx_tf_telemetry_time ON travelfun_telemetry_events (event_time DESC);`,
    `CREATE INDEX IF NOT EXISTS idx_tf_telemetry_event ON travelfun_telemetry_events (event_name);`
  ];

  if (DATABASE_URL) {
    try {
      for (const sql of statements) {
        await executeNeonSql(sql);
      }
      console.log('✅ Neon DB tables verified / created.');
    } catch (err) {
      console.log('ℹ️ Using existing Neon DB tables (`page_access_logs`).');
    }
  }
}

async function logAccess(data) {
  const accessTime = data.timestamp || new Date().toISOString();
  const ipAddress = data.ip_address || '127.0.0.1';
  const domainUrl = data.domain_url || 'https://www.travelfun.sk/';
  const userAgent = data.user_agent || 'Unknown Client';
  const referrer = data.referrer || '';
  const language = data.language || 'sk';
  const theme = data.theme || 'light';
  const screenResolution = data.screen_resolution || '';

  if (DATABASE_URL) {
    try {
      const sql = `
        INSERT INTO page_access_logs (access_time, ip_address, domain_url, user_agent, referrer, language, theme, screen_resolution)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, access_time, ip_address, domain_url;
      `;
      const result = await executeNeonSql(sql, [
        accessTime,
        ipAddress,
        domainUrl,
        userAgent,
        referrer,
        language,
        theme,
        screenResolution
      ]);
      return { success: true, mode: 'neon_db', result };
    } catch (err) {
      console.error('⚠️ Neon DB insertion error:', err.message);
      return { success: false, error: err.message };
    }
  } else {
    return { success: false, error: 'DATABASE_URL is not set.' };
  }
}

async function logTelemetryEvent(data) {
  const eventTime = data.timestamp || new Date().toISOString();
  const eventName = data.name || 'unknown_event';
  const category = data.category || 'system';
  const ipAddress = data.ip_address || '127.0.0.1';
  const domainUrl = `https://www.travelfun.sk/#evt:${eventName}`;
  const userAgent = `TRAVELFUN-Telemetry [${category}] ${data.sessionId || ''}`;
  const referrer = JSON.stringify(data.data || {});
  const language = data.lang || 'sk';
  const theme = data.theme || 'light';
  const screenResolution = data.screenResolution || '';

  return await logAccess({
    timestamp: eventTime,
    ip_address: ipAddress,
    domain_url: domainUrl,
    user_agent: userAgent,
    referrer: referrer,
    language: language,
    theme: theme,
    screen_resolution: screenResolution
  });
}

// Self-test when executed directly
if (require.main === module) {
  (async () => {
    console.log('🔄 Initializing Neon DB schema...');
    await initNeonTable();
    console.log('🔄 Writing test access log...');
    const accessRes = await logAccess({
      ip_address: '127.0.0.1 (CLI Test)',
      domain_url: 'https://www.travelfun.sk/',
      language: 'sk',
      theme: 'dark'
    });
    console.log('Result:', JSON.stringify(accessRes, null, 2));

    console.log('🔄 Writing test telemetry event...');
    const eventRes = await logTelemetryEvent({
      sessionId: 'tf_test_session',
      name: 'flight_search_submitted',
      category: 'search',
      data: { origin: 'VIE', dest: 'SYD', passengers: 2 }
    });
    console.log('Event Result:', JSON.stringify(eventRes, null, 2));
  })().catch(console.error);
}

module.exports = {
  executeNeonSql,
  initNeonTable,
  logAccess,
  logTelemetryEvent
};
