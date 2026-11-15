# Reale Landscape Inc. — Modern Light + Dark Theme Redesign (Kelowna, BC)

Complete responsive website redesign, technical audit resolution, interactive Okanagan project estimator, and client outreach offer for **Reale Landscape Inc.** (`https://realelandscape.com/`), a premier landscape design, hardscaping, irrigation, and grounds maintenance company based in Kelowna, British Columbia, Canada.

## 🍁 Business & Audit Summary

- **Company Name:** Reale Landscape Inc. (also historically known on yard signage as *The Italian Landscape*)
- **Founders / Leadership:** Fratelli Pizzoleo (Angelo & Sal Pizzoleo) — Italian horticultural and stonework heritage rooted in Grottaglie (Puglia, Italy)
- **Headquarters & Yard:** `755 Sparrow Rd, Kelowna, BC V1X 4E3, Canada`
- **Service Areas:** Kelowna (Lower & Upper Mission, Glenmore, Dilworth), West Kelowna, Lake Country, Peachland, and Vernon (Okanagan Valley)
- **Contact:** `(+1) 250-575-8511` (Phone & WhatsApp) · `realelandscape@gmail.com`
- **Social Channels:** [Instagram (`@reale_landscape`)](https://www.instagram.com/reale_landscape/)

### 🔍 Key Technical & Design Bugs Resolved from the Current Live Site (`realelandscape.com`)
1. **CSS Text & Button Collisions Fixed:** On the live Elementor site, giant display headings (`ABOUT US`, `OUR FEATURED PROJECTS`) and buttons overlap directly onto body paragraphs, and pale peach subheadings (`#D27D7D` on `#F7F7F2`) fail WCAG AA contrast checks.
2. **Mixed-Content Staging Font Errors Eliminated:** The live site attempts to load `Cormorant Garamond` over insecure HTTP from a leftover developer staging host (`http://alessandrop87.sg-host.com/...`), which browsers block.
3. **Broken Google Reviews Widget Restored:** The live site's Trustindex widget fails with `ERR_CONNECTION_RESET`, rendering an empty white box under "Real Reviews". Our redesign embeds their real 5-star Google reviews (Dr. Harmony Mir, Kinga Gortel, Leanna W., John Cook, Mike Anderson, Antonio A.) natively for instant, reliable display.
4. **Broken Contact Map Fixed:** The live Contact page Google Map fails with `PLACES_GET_PLACE: PERMISSION_DENIED`. Replaced with a working interactive map centered on `755 Sparrow Rd, Kelowna, BC`.
5. **Deduplicated 12-Project Lightbox Portfolio:** Removed duplicate gallery entries (*Relaxing Spot* / *Serene Walkway* and double *Green Impact* cards) and organized 12 authentic high-resolution Kelowna project photos with category filters (*Hardscape & Patios*, *Retaining Walls & Stairs*, *Design & Lakeview Builds*, *Irrigation & Curb Appeal*).
6. **Removed Unfinished Fitness Demo Leaks:** Eliminated references to the leftover `?page_id=149` ("Brandon Smith" personal trainer demo page) and updated the outdated `© 2022` copyright and missing business hours.

---

## ✨ Key Redesign Features

1. **Botanical Light + Dark Theme (`light` / `dark`)**
   - **Light Mode:** Warm Italian Travertine limestone (`#faf8f4`), Okanagan Pine green (`#165b31`), and Canadian Maple crimson (`#b82937`).
   - **Dark Mode:** Midnight Garden slate (`#0b1610`), luminous emerald (`#38b868`), and warm travertine gold accents (`#e5a94c`).
   - Automatic OS preference detection + persistent header toggle.

2. **Trilingual Localization (`EN` / `FR` / `IT`)**
   - 🇨🇦 **English (`en`)** — Primary Okanagan Valley residential and commercial market.
   - 🇫🇷 **French (`fr`)** — Official Canadian bilingual accessibility.
   - 🇮🇹 **Italian (`it`)** — Authentic tribute to the Fratelli Pizzoleo family heritage from Grottaglie, Puglia.

3. **Interactive Okanagan Landscape & Hardscape Estimator**
   - Scope selection (*Paver/Flagstone Patio*, *Retaining Wall & Slope Terracing*, *Complete Yard Design & Build*, *Irrigation & Grounds Refresh*).
   - Square footage slider (`150 – 3,500 sq.ft` / `14 – 325 m²`) and Kelowna topography selector (*Flat*, *Moderate Slope*, *Steep Lakeview Hillside*).
   - Optional enhancements (*Custom Cedar Pergola*, *Stone Fire Pit Lounge*, *Smart Wi-Fi Irrigation*, *Low-Voltage LED Lighting*).
   - Calculates estimated CAD investment range, aggregate/stone tonnage, and on-site crew duration, with 1-click transfer to the consultation form.

4. **Client Outreach Email Offer (`promotional-email.html` & `promotional-email.txt`)**
   - Ready-to-send HTML and plain-text email pitch addressed to Angelo & Sal Pizzoleo (`realelandscape@gmail.com`) detailing the 6 technical bugs found on `realelandscape.com` and linking to the live prototype.

---

## 📁 Folder Structure

```text
realelandscape-redesign/
├── index.html               # Main responsive website (Light + Dark mode, EN / FR / IT)
├── favicon.svg              # Custom vector Reale Landscape tree & maple leaf emblem
├── promotional-email.html   # Responsive HTML outreach email offer for the client
├── promotional-email.txt    # Plain-text version of the outreach email offer
├── README.md                # Project & audit documentation
├── css/
│   └── style.css            # Light & Dark mode design system
├── js/
│   ├── translations.js      # Full EN, FR, IT localization dictionaries
│   └── app.js               # Theme toggle, language switcher, estimator, lightbox, FAQ
└── images/
    ├── logo-header.png      # Official Reale Landscape Inc. header logo
    ├── logo-footer.png      # Official Reale Landscape Inc. tree & maple leaf emblem
    ├── hero-1..4.jpg        # Featured Kelowna pergola, flagstone, paver & lakefront photos
    ├── about-heritage.jpg   # Grottaglie (Puglia, Italy) heritage imagery
    ├── about-team.jpg       # Authentic Reale Landscape Kelowna project & yard sign photo
    ├── service-*.jpg        # 4 core service pillar visuals
    └── project-003..038.jpg # 12 deduplicated authentic Kelowna project photos
```
