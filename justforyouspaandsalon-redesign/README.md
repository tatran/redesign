# Just For You Day Spa & Salon — Modern Redesign Concept

A modern, high-converting, bilingual (English & Canadian French) responsive website redesign for **Just For You Day Spa & Salon** located in Vernon, British Columbia, Canada.

Live Preview Intended URL: `https://livingpixelstudios.com/redesign/justforyouspaandsalon-redesign/`  
French Version: `https://livingpixelstudios.com/redesign/justforyouspaandsalon-redesign/fr/`  
Original Website: `https://www.justforyouspaandsalon.ca/`  

---

## 🌸 Key Features

1. **Bilingual English & Canadian French (EN / FR):**
   - Seamless language toggle between English (`index.html`) and French (`fr/index.html` and `index-fr.html`).
   - Authentic, idiomatic Canadian French translation covering all treatments, packages, policies, hours, reviews, and interactive modals.
   - Reciprocal `<link rel="alternate" hreflang="...">` tags for both locales.

2. **Light & Dark Theme Switcher:**
   - Luxurious, calming aesthetic with two handcrafted color schemes:
     - **Light Theme:** Warm alabaster, rose gold, champagne, and soft ivory.
     - **Dark Theme:** Deep velvet obsidian, warm champagne gold, and soft candlelit tones.
   - Automatic OS preference detection (`prefers-color-scheme: dark`) with manual persistence in `localStorage`.
   - Full keyboard accessibility and ARIA state announcements.

3. **Interactive Custom Spa Package Estimator & Builder:**
   - Allows guests to select multiple personalized treatments (e.g. HydraFacial MD, Dermalogica Facial, Deluxe Spa Pedicure, Full-Body Massage, Haircut & Blowout).
   - Real-time dynamic calculation of total duration (hours & minutes) and estimated package price.
   - One-click transfer of the customized package into the Appointment Booking Request Modal.

4. **Service Categorization & Filtering:**
   - Filter treatments by category: *All*, *Facials & Medi-Spa*, *Massages & Body*, *Hair Salon*, *Nails & Pedicures*, *Laser & Waxing*.

5. **Appointment Booking Request Modal:**
   - Accessible modal dialog for reserving dates, preferred timeframes (morning/afternoon/evening), service selection, and specialist notes.
   - Instant toast notification feedback upon submission.

6. **Seasonal Hours & Sanitation Transparency:**
   - Interactive toggle between *Winter Hours (Nov – Mar 1)* and *Spring / Summer / Fall Hours*.
   - Clear hygiene disclosures regarding hospital-grade sterilization and pipe-free pedicure chairs.

7. **Interactive Google Maps Embed:**
   - Verified location at `#301 - 2520 53rd Ave, Vernon, BC, V1T 9W8`.

8. **Digital e-Gift Card Selector:**
   - Interactive amount selector ($50, $100, $150, $225, $300) with dynamic live card preview.

---

## 🗄️ Neon DB Access Telemetry Integration

Per requirements: **"log time, ip address and domain url when page is accessed to neon db"**

### Architecture:
- **Client Logger (`script.js`):** On every page load, gathers timestamp (`ISO 8601`), domain URL (`window.location.href`), and resolves client IP (via fast fallback-resilient HTTPS IP lookup).
- **Backend API (`api/log.js`):** Serverless HTTP endpoint that extracts client headers (`x-forwarded-for`), timestamp, and domain URL.
- **Neon Database Script (`neon-logger.js`):** Directly queries Neon's Serverless HTTP API (`https://<endpoint>.neon.tech/sql`) with zero npm dependencies required.
- **Database Schema (`database/schema.sql`):** Provides production-ready DDL for table `page_access_logs`, performance indexes, and analytical views (`view_daily_traffic`, `view_user_preferences`, `view_top_accessed_urls`).
- **Telemetry UI Widget in Footer:** Displays live access logging status, client IP, timestamp, and connection health directly to the user/developer.

### Setup Instructions for Neon DB:
1. Create a project at [Neon](https://neon.tech).
2. Copy your PostgreSQL connection string:
   ```bash
   DATABASE_URL="postgres://user:password@ep-sample-12345.us-east-2.aws.neon.tech/neondb?sslmode=require"
   ```
3. Initialize the table schema by running `database/schema.sql` in the Neon SQL Editor or running:
   ```bash
   node neon-logger.js
   ```
4. Deploy the site on Vercel, Netlify, or your preferred Node.js host with `DATABASE_URL` set in environment variables.

---

## 🚀 SEO Highlights

- **Metadata:** Unique title tags, meta descriptions, viewport, keywords, and theme colors.
- **Hreflang Tags:** Explicit `en-CA`, `fr-CA`, and `x-default` canonical mappings.
- **Social Tags:** OpenGraph and Twitter Cards with luxury branding previews.
- **Structured Data (JSON-LD):**
  - `DaySpa`, `BeautySalon`, `HairSalon` schema with geo-coordinates, telephone, hours, and catalog offers.
  - `FAQPage` schema with questions on cancellation, sanitized chairs, couples suites, and gift cards.
  - `BreadcrumbList` schema.
- **Crawlers:** `sitemap.xml` and `robots.txt` included.

---

## 📧 Promotional Email Pitch

Included in the project:
- `promotional-email.html`: Responsive HTML email featuring modern layout, dark velvet card styling, technical audit, and CTA.
- `promotional-email-fr.html`: Canadian French localized responsive HTML email.
- `promotional-email.txt`: Plain-text email copy for outreach.

---

## 🛠️ Verification & Testing

- Tested with Node.js v20.19.0.
- Ran `node neon-logger.js` to verify database abstraction, schema initialization, and local fallback behavior.
- Validated HTML and JSON-LD schema syntax.
- Verified responsive layouts, theme toggles, and modal interactions.
