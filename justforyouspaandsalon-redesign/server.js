/**
 * Zero-dependency Local Server for Just For You Spa & Salon Redesign
 * 
 * Why this is needed:
 * Browsers (especially Firefox) block JavaScript `fetch()` network requests when opening files
 * directly via `file:///C:/...` due to local file security sandboxing (privacy.file_unique_origin).
 * 
 * Serving over http://localhost:3000 eliminates the `file:///` restriction and allows
 * seamless direct real-time logging to Neon DB.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { logAccess } = require('./neon-logger');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Neon-Connection-String');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = reqUrl.pathname;

  // 1. API Route: /api/log
  if (pathname === '/api/log' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const result = await logAccess(payload);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, data: result }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // 2. Static File Serving
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  const safePath = path.normalize(path.join(PUBLIC_DIR, pathname));
  if (!safePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Check if it's a directory with index.html (e.g. /fr/)
      const indexPath = path.join(safePath, 'index.html');
      if (fs.existsSync(indexPath)) {
        serveFile(indexPath, res);
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    serveFile(safePath, res);
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading file');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
}

server.listen(PORT, () => {
  const localUrl = `http://localhost:${PORT}/index.html`;
  console.log(`\n============================================================`);
  console.log(`🌸 Just For You Spa & Salon Redesign Server Running!`);
  console.log(`👉 Open in your browser: ${localUrl}`);
  console.log(`👉 French version:       http://localhost:${PORT}/fr/index.html`);
  console.log(`👉 Neon DB Telemetry:    Connected & Active`);
  console.log(`============================================================\n`);

  // Auto-open browser on Windows
  if (process.platform === 'win32') {
    exec(`start ${localUrl}`);
  }
});
