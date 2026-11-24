/**
 * Neon DB Telemetry Configuration
 * TRAVELFUN.SK Redesign
 * 
 * Direct real-time telemetry logging from any browser to Neon PostgreSQL Serverless API.
 */

window.NEON_CONFIG = {
  // Paste your Neon Connection String here to enable direct real-time logging from any browser:
  DATABASE_URL: "postgresql://upc_telemetry_writer:VaseNoveBezpecneHeslo123%21@ep-broad-mode-ba2zewd1-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",

  // Optional custom proxy endpoint (e.g. /api/log on Vercel/Netlify)
  API_ENDPOINT: "/api/log"
};
