/**
 * Neon DB Access Logger for Just For You Spa & Salon Redesign
 * 
 * Requirement: Log time, IP address, and domain URL when page is accessed to Neon DB.
 * 
 * Architecture:
 * - Direct HTTP SQL Execution with Neon Serverless API (Zero npm dependencies required!)
 * - Connection via DATABASE_URL / NEON_DATABASE_URL
 * - Auto-initializes `page_access_logs` table with proper indexes
 * - Standalone CLI runner + importable module for serverless / Express APIs
 */

const fs = require('fs');
const path = require('path');

// Extract connection string from environment
const DATABASE_URL = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '';

/**
 * Parse a postgres:// connection string into parts
 * e.g. postgresql://user:password@ep-cold-breeze-12345.us-east-2.aws.neon.tech/neondb?sslmode=require
 */
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

/**
 * Execute SQL against Neon via Neon's Serverless HTTP API
 * POST https://<host>/sql
 */
async function executeNeonSql(sql, params = []) {
  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not configured in environment variables.');
  }

  const dbConfig = parseNeonUrl(DATABASE_URL);
  if (!dbConfig) {
    throw new Error('Invalid PostgreSQL / Neon connection string.');
  }

  // Parameter substitution for SQL
  let query = sql;
  params.forEach((val, idx) => {
    const placeholder = `$${idx + 1}`;
    let formattedVal;
    if (val === null || val === undefined) {
      formattedVal = 'NULL';
    } else if (typeof val === 'number') {
      formattedVal = val;
    } else {
      // Escape single quotes
      formattedVal = `'${String(val).replace(/'/g, "''")}'`;
    }
    query = query.replace(placeholder, formattedVal);
  });

  const endpointUrl = `https://${dbConfig.host}/sql`;

  const response = await fetch(endpointUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${dbConfig.password}`,
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

/**
 * Ensure the table exists in Neon DB
 */
async function initNeonTable() {
  const ddl = `
    CREATE TABLE IF NOT EXISTS page_access_logs (
      id BIGSERIAL PRIMARY KEY,
      access_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      ip_address VARCHAR(45) NOT NULL,
      domain_url TEXT NOT NULL,
      user_agent TEXT,
      referrer TEXT,
      language VARCHAR(10) DEFAULT 'en-CA',
      theme VARCHAR(10) DEFAULT 'light',
      screen_resolution VARCHAR(30),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_page_access_logs_time ON page_access_logs (access_time DESC);
    CREATE INDEX IF NOT EXISTS idx_page_access_logs_domain ON page_access_logs (domain_url);
  `;

  if (DATABASE_URL) {
    await executeNeonSql(ddl);
    console.log('✅ Neon DB table `page_access_logs` verified / created.');
  }
}

/**
 * Core logging function: Log page access to Neon DB
 * @param {Object} data { timestamp, ip_address, domain_url, user_agent, referrer, language, theme, screen_resolution }
 */
async function logAccess(data) {
  const accessTime = data.timestamp || new Date().toISOString();
  const ipAddress = data.ip_address || '127.0.0.1';
  const domainUrl = data.domain_url || 'https://www.justforyouspaandsalon.ca/';
  const userAgent = data.user_agent || 'Unknown Client';
  const referrer = data.referrer || '';
  const language = data.language || 'en-CA';
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
      // Fallback to local storage
      return fallbackLocalLog(data, err.message);
    }
  } else {
    // DATABASE_URL not yet configured; log to local cache
    return fallbackLocalLog(data, 'DATABASE_URL environment variable is not set.');
  }
}

/**
 * Fallback local file logger when DATABASE_URL is not yet set
 */
function fallbackLocalLog(data, reason) {
  const logFile = path.join(__dirname, '.access_logs.json');
  let logs = [];
  try {
    if (fs.existsSync(logFile)) {
      logs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
    }
  } catch (e) {
    logs = [];
  }

  const record = {
    ...data,
    logged_at_local: new Date().toISOString(),
    neon_status: 'pending_db_url',
    note: reason
  };

  logs.unshift(record);
  if (logs.length > 100) logs.pop();

  try {
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2), 'utf8');
  } catch (err) {}

  return { success: true, mode: 'local_fallback', record, reason };
}

// CLI Testing Support
if (require.main === module) {
  (async () => {
    console.log('--- Testing Neon DB Access Logger ---');
    console.log('DATABASE_URL present:', Boolean(DATABASE_URL));

    const sample = {
      timestamp: new Date().toISOString(),
      ip_address: '142.59.18.24', // Sample BC Canada IP
      domain_url: 'https://www.justforyouspaandsalon.ca/',
      language: 'en-CA',
      theme: 'light',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0',
      screen_resolution: '1920x1080'
    };

    const res = await logAccess(sample);
    console.log('Log result:', JSON.stringify(res, null, 2));
  })();
}

module.exports = {
  logAccess,
  initNeonTable,
  executeNeonSql,
  parseNeonUrl
};
