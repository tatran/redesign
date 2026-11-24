/**
 * Neon DB Telemetry Configuration
 * Just For You Day Spa & Salon Redesign
 * 
 * Instructions:
 * In your Neon Console (as seen in your screenshot):
 * 1. Click the green "Connect" button in the left sidebar.
 * 2. Select "Connection string" and copy the PostgreSQL URL:
 *    (e.g., postgresql://neondb_owner:npg_xxxx@ep-aged-feather-baf52e41.us-east-2.aws.neon.tech/neondb?sslmode=require)
 * 3. Paste it into `DATABASE_URL` below.
 * 
 * Once added, EVERY visitor opening the website will immediately execute
 * an INSERT into your `page_access_logs` table via Neon's Serverless HTTP API!
 */

window.NEON_CONFIG = {
  // Paste your Neon Connection String here to enable direct real-time logging from any browser:
  DATABASE_URL: "postgresql://upc_telemetry_writer:VaseNoveBezpecneHeslo123%21@ep-broad-mode-ba2zewd1-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",

  // Optional custom proxy endpoint (e.g. /api/log on Vercel/Netlify)
  API_ENDPOINT: "/api/log"
};
