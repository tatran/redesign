# VRBA, s.r.o. — Modern Web Redesign & B2B Portal

Modern, responsive web redesign and B2B wholesale partner portal for **VRBA, s.r.o.** (Okrasná škôlka & výroba okrasných rastlín), situated in Kráľovianky 28, 931 01 Šamorín, Slovakia.

## 🌿 Project Overview

- **Client:** VRBA, s.r.o.
- **Original Website:** [vrbazahrady.sk](https://vrbazahrady.sk/)
- **Business Profile:** Specialized 17-hectare wholesale ornamental tree and plant nursery with 20+ years of cultivation tradition, 12,000 m² container yards, and 3,000 m² greenhouses in the Danubian Lowland (Žitný ostrov).
- **Core Offering:** Acclimatized woody plants, conifers, deciduous trees, perennials, and ornamental grasses (over 1,500 taxons) supplied to landscape architects, contractors, garden centers, and developers across Slovakia, Austria, and Hungary.

---

## 🚀 Key Redesign Features

1. **Multilingual Architecture (4 Languages)**
   - 🇸🇰 **Slovak (SK)** — Local domestic market and public tenders.
   - 🇩🇪 **German (DE)** — Targeting Austrian landscape contractors (GaLaBau) and nursery centers (Vienna, Kittsee, Burgenland only 35 min away).
   - 🇬🇧 **English (EN)** — International trade and expatriate residential communities.
   - 🇭🇺 **Hungarian (HU)** — Native bilingual region (Csallóköz) and cross-border nursery buyers from Győr and Mosonmagyaróvár.
   - Seamless client-side i18n switcher with persistent language state.

2. **Botanical Light & Dark Theme**
   - **Light Mode:** Crisp organic linen background (`#f8faf7`), deep forest emerald typography (`#112217`), and sage borders.
   - **Dark Mode (Botanical Midnight):** Luxurious deep slate palette (`#0a130e`), bright mint accents (`#52b788`), and eye-friendly contrast for outdoor mobile use.
   - Automatic OS preference detection + interactive toggle switch with localStorage persistence.

3. **Interactive Plant Explorer & Live Search (1,500+ Taxons)**
   - Overcomes the major limitation of the original website (which had plain text lists without search or photos).
   - Instant search across 448 woody plants and 1,121 perennials and grasses.
   - Dynamic filtering by category, sun requirements (Full Sun, Partial Shade, Shade), winter hardiness, and container size.
   - Detailed modal card with botanical specifications, soil preferences, and 1-click quantity inquiry button.

4. **B2B Wholesale Portal & Price List Access**
   - Value-focused explanation for landscape contractors, garden retail centers, and municipalities.
   - Simulated password gate mechanism (`vrba` / any password) to protect wholesale pricing margins.
   - Download links and trade benefits breakdown.

5. **Interactive Plant Volume & Freight Calculator**
   - Select volume brackets: K9 propagation plugs, 1L–3L containers, 5L–10L shrubs, and root-balled mature trees.
   - Live pallet / CC trolley capacity estimator.
   - One-click transfer to inquiry form with pre-filled logistics and destination specifications.

6. **Authentic 17-Hectare Nursery Photo Gallery**
   - High-resolution authentic imagery of container yards, greenhouses, and specimen crops.
   - Category filter pills (Nursery & Greenhouses, Conifers & Shrubs, Perennials & Grasses).
   - Fullscreen keyboard-accessible modal lightbox.

7. **Visit Planner & Cross-Border Logistics Navigation**
   - Direct road guidance from Bratislava (R7 expressway), Dunajská Streda, Vienna/Kittsee, and Győr.
   - Distance indicators and embedded map.

8. **Promotional Outreach Offer (`promotional-email.html` & `.txt`)**
   - Bulletproof HTML email template ready to send to `vrba@vrbazahrady.sk`.
   - Clear technical audit of `vrbazahrady.sk`, presenting value propositions, live demo links, and next steps.

---

## 📁 Directory Structure

```text
vrbazahrady-redesign/
├── index.html               # Main responsive landing page & application
├── favicon.svg              # Botanical sprout SVG favicon
├── README.md                # Project documentation & business overview
├── promotional-email.html   # Responsive HTML cold/warm outreach email
├── promotional-email.txt    # Plain text version of outreach email
├── css/
│   └── style.css            # Complete botanical design system (Light + Dark mode)
├── js/
│   ├── app.js               # Interactive engine: i18n, search, modal, calc, lightbox
│   ├── plants-data.js       # Curated and taxonomy database (1,500+ species)
│   └── translations.js      # Complete multilingual dictionaries (SK, DE, EN, HU)
└── images/
    ├── logo.png             # Official VRBA nursery logo
    ├── favicon.png          # Fallback raster favicon
    ├── home_left.jpg        # Hero nursery overview photograph
    ├── Vrba-001.jpg .. 038  # High-res authentic photographs of nursery stock
    └── gallerybg.jpg        # Decorative nursery background
```

---

## 💻 Tech Stack

- **HTML5 & CSS3** with modern CSS custom properties and Grid/Flexbox layouts.
- **Pure Modern Vanilla JavaScript (ES6+)** with zero external dependencies, zero bloat, and sub-second load times.
- Accessible ARIA semantics, mobile-first responsiveness, and smooth micro-interactions.
