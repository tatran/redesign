# ARKTIS s.r.o. — Modern Quad-Lingual B2B Web Redesign & HVAC/R Portal

Modern, responsive B2B web redesign and interactive refrigeration & air conditioning portal for **ARKTIS s.r.o.** (*Veľkoobchod chladenie a klimatizácia*), located at Staviteľská 3, 831 04 Bratislava, Slovakia.

## ❄️ Project Overview

- **Client:** ARKTIS s.r.o. (IČO: 45432805, DIČ: 2022979684, IČ DPH: SK2022979684)
- **Original Website:** [arktis.sk](http://arktis.sk/)
- **Business Profile:** Specialized B2B wholesaler supplying refrigeration and air conditioning components, spare parts, installation materials, refrigerants, oils, and service tools to HVAC/R technicians and contractors.
- **Core Differentiator:** Immediate over-the-counter technical and engineering advisory backed by **66 years of combined team experience** (20 yrs Electrical Engineer, 16 yrs 2nd-generation Refrigeration Mechanic, 30 yrs Instrumentation & Controls Specialist) and an extensive archive of legacy controller manuals.

---

## 🚀 Key Redesign Features

1. **Quad-Lingual Architecture (4 Languages)**
   - 🇸🇰 **Slovak (SK)** — Domestic HVAC/R service technicians and contractors.
   - 🇩🇪 **German (DE)** — Cross-border Austrian/German HVAC/R partners and suppliers (*Kälte- und Klimatechnik*).
   - 🇬🇧 **English (EN)** — International manufacturers and industrial clients.
   - 🇭🇺 **Hungarian (HU)** — Southern Slovakia and Hungarian refrigeration contractors (*Hűtés- és klímatechnika*).
   - Instant client-side language switcher with `localStorage` persistence.

2. **Arctic Cryo-Slate Light & Dark Theme**
   - **Light Mode:** High-contrast ice-white and technical slate surfaces (`#f6f9fc`), ARKTIS cyan (`#0093c9`), and copper piping accents (`#d97706`).
   - **Dark Mode (Machine Room Mode):** Deep cryo-navy (`#07111e`) and frosty cyan (`#38bdf8`) engineered for technicians inspecting schematics and part numbers in low-light compressor rooms.

3. **Interactive 16-Category HVAC/R Product Catalog & Search**
   - Replaces the legacy 2013 jQuery UI hover menu (`#menu_products`) with an instant, mobile-friendly searchable grid covering all 16 product categories and 40+ global brands (*Bitzer, Copeland, Danfoss, Embraco Aspera, Tecumseh, Frascold, GEA Bock, ECO/Luvata, Güntner, LU-VE, Carel, Dixell, Alco, Castel, Antifrogen*, etc.).
   - One-click **"Overiť dostupnosť & cenu"** button pre-fills the technical inquiry form.

4. **Cooling Capacity ($Q_0$) & Copper Line Sizing Calculator**
   - Interactive engineering estimator for cold rooms, freezer boxes, wine storage, and blast freezers.
   - Calculates estimated cooling duty in kW, recommends compressor technology (hermetic reciprocating, Scroll, or semi-hermetic), suggests suction/liquid copper tube diameters, and transfers all parameters directly into the inquiry form.

5. **Legacy Controller Manuals Archive Finder**
   - Searchable database of all 35+ discontinued and active controller families listed by ARKTIS (*Carel IR32 / Microchiller, Dixell XR/XT/XW/XV/XJP, Elreha TAR 1370, Tecnologic TDF/TDR/THP/TC48, HANSA HERG 22.4*) plus the automotive A/C refrigerant & oil charge database (models up to 2008).

6. **Promotional Outreach Offer (`promotional-email.html` & `.txt`)**
   - Ready-to-send responsive HTML and plain-text outreach emails addressed to `arktis@arktis.sk` highlighting the audit of `arktis.sk` and presenting the live interactive prototype.

---

## 📁 Directory Structure

```text
arktis-redesign/
├── index.html               # Main responsive quad-lingual B2B portal
├── favicon.svg              # Custom snowflake + engineering gauge SVG favicon
├── README.md                # Project documentation & technical overview
├── promotional-email.html   # Responsive HTML outreach email offer
├── promotional-email.txt    # Plain-text version of the email offer
├── css/
│   └── style.css            # Light & Dark mode design system
├── js/
│   ├── app.js               # Interactive engine: i18n, theme, catalog, calculator, manuals
│   ├── catalog-data.js      # Complete 16-category product & 35-series manual database
│   └── translations.js      # Quad-lingual dictionaries (SK, DE, EN, HU)
└── images/
    ├── logo_arktis.png      # Official ARKTIS header logo
    ├── logo_arktis_footer.png # Official ARKTIS footer emblem
    ├── kontakt.jpg          # Staviteľská 3 Bratislava headquarters entrance
    ├── teaser_podpora2.jpg  # Copeland Scroll compressor rack
    ├── teaser_produkty1.jpg # Pressure gauge & compressor detail
    ├── teaser_podpora.jpg   # Industrial turbine fan blades
    └── logo_*.png           # Official partner logos (EKOTEZ, DSTECH, BUČO, KALTING, PATCONTROLS)
```
