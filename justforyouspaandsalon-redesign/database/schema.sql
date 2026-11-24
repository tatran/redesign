-- ==========================================================================
-- Neon DB PostgreSQL Schema: Just For You Day Spa & Salon Access Telemetry
-- Database: Neon Serverless PostgreSQL
-- Description: Stores timestamp, client IP address, and domain URL for every page access.
-- ==========================================================================

-- 1. Create table for page access logs
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

-- 2. Performance Indexes for Analytical Queries
CREATE INDEX IF NOT EXISTS idx_page_access_logs_time 
    ON page_access_logs (access_time DESC);

CREATE INDEX IF NOT EXISTS idx_page_access_logs_ip 
    ON page_access_logs (ip_address);

CREATE INDEX IF NOT EXISTS idx_page_access_logs_domain 
    ON page_access_logs (domain_url);

-- 3. Useful Analytical Views

-- Daily Traffic Aggregations
CREATE OR REPLACE VIEW view_daily_traffic AS
SELECT 
    DATE(access_time) AS log_date,
    COUNT(*) AS total_pageviews,
    COUNT(DISTINCT ip_address) AS unique_visitors,
    COUNT(DISTINCT domain_url) AS unique_pages
FROM page_access_logs
GROUP BY DATE(access_time)
ORDER BY log_date DESC;

-- Language & Theme Preferences
CREATE OR REPLACE VIEW view_user_preferences AS
SELECT 
    language,
    theme,
    COUNT(*) AS total_hits,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) AS percentage
FROM page_access_logs
GROUP BY language, theme
ORDER BY total_hits DESC;

-- Top Referrers and URLs
CREATE OR REPLACE VIEW view_top_accessed_urls AS
SELECT 
    domain_url,
    COUNT(*) AS visit_count,
    COUNT(DISTINCT ip_address) AS unique_ips,
    MAX(access_time) AS latest_visit
FROM page_access_logs
GROUP BY domain_url
ORDER BY visit_count DESC;

-- 4. Sample Verification Insert
INSERT INTO page_access_logs (access_time, ip_address, domain_url, language, theme)
VALUES (NOW(), '127.0.0.1', 'https://www.justforyouspaandsalon.ca/', 'en-CA', 'light');
