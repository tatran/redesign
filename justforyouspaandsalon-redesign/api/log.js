/**
 * Serverless / Express API Endpoint: /api/log
 * Automatically captures request IP, timestamp, and domain URL, and saves to Neon DB.
 */

const { logAccess } = require('../neon-logger');

module.exports = async (req, res) => {
  // CORS Headers
  if (res.setHeader) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  }

  if (req.method === 'OPTIONS') {
    if (res.status) res.status(200).end();
    return;
  }

  // Extract client IP address from proxy / edge headers
  const forwarded = req.headers['x-forwarded-for'];
  const clientIp = forwarded 
    ? (typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : forwarded[0])
    : (req.socket?.remoteAddress || req.connection?.remoteAddress || '127.0.0.1');

  let body = {};
  if (typeof req.body === 'string') {
    try {
      body = JSON.parse(req.body);
    } catch (e) {
      body = {};
    }
  } else if (req.body) {
    body = req.body;
  }

  const payload = {
    timestamp: body.timestamp || new Date().toISOString(),
    ip_address: body.ip_address || clientIp,
    domain_url: body.domain_url || req.headers['referer'] || req.headers['host'] || 'https://www.justforyouspaandsalon.ca/',
    user_agent: body.user_agent || req.headers['user-agent'] || '',
    referrer: body.referrer || req.headers['referer'] || '',
    language: body.language || 'en-CA',
    theme: body.theme || 'light',
    screen_resolution: body.screen_resolution || ''
  };

  try {
    const result = await logAccess(payload);
    if (res.status) {
      res.status(200).json({
        success: true,
        message: 'Page access logged successfully to Neon DB',
        data: result
      });
    }
  } catch (error) {
    if (res.status) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
};
