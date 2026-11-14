# BUGÁR, s.r.o. – Quad-Lingual Website Redesign

**Voda · Kúrenie · Plyn · Kúpeľňové štúdio Šamorín & Dunajská Streda**  
Original Website: [https://bugarsro.sk/](https://bugarsro.sk/)  
Social Sources: [Facebook (@bugarsro)](https://www.facebook.com/bugarsro) · [Instagram (@bugarsro)](https://www.instagram.com/bugarsro/)

---

## Overview & Audit Summary

BUGÁR, s.r.o. is a family-rooted Slovak HVAC, plumbing, gas, and bathroom design business operating for **33 years** across **Šamorín** (*Bratislavská 89/21*) and **Dunajská Streda** (*Hlavná 1538/31*).

On the live `bugarsro.sk` site, core microservice endpoints (`/topBanner-api`, `/pages-api`, `/products-api`, `/gallery-api`) return `502 Bad Gateway`, leaving dynamic product listings, banners, and CMS pages empty, while active showroom updates and recent installations live exclusively on Facebook and Instagram in Slovak only.

This redesign unifies all authentic brand assets, service pillars, and social media craftsmanship into a resilient, zero-backend-dependency static web platform localized in **Slovak, German, English, and Hungarian**.

---

## Key Features

### 1. Quad-Lingual Localization (`SK` / `DE` / `EN` / `HU`)
- Instantaneous switching without reload, synced with `?lang=sk|de|en|hu` URL query parameters and `localStorage`:
  - **Slovenčina (`sk`)** — Primary Slovak terminology (*Voda · Kúrenie · Plyn*).
  - **Deutsch (`de`)** — Austrian/German HKLS & Bäderstudio terminology (*Wasser · Heizung · Gas*) serving nearby Bratislava/Vienna/Burgenland clients.
  - **English (`en`)** — Crisp architectural & MEP engineering copy.
  - **Magyar (`hu`)** — Idiomatic Hungarian copy (*Víz · Fűtés · Gáz*) serving Šamorín (*Somorja*), Dunajská Streda (*Dunaszerdahely*), and cross-border homeowners.

### 2. Dual Architectural Theme (Daylight + Charcoal Dark Mode)
- Crisp daylight palette (`#f6f8fb` / `#ffffff`) paired with an optional Charcoal Engineering Dark Mode (`#0c1017` / `#161e2b`) echoing `bugarsro.sk`'s original dark aesthetic, anchored by BUGÁR's water cyan (`#0284c7`), heating ember (`#dc2626`), and action amber (`#ffb506`) accents.

### 3. 5 Official Service Pillars
- **01 · Montážne služby** (*Installation Services*)
- **02 · Servisné služby** (*Service & Maintenance*)
- **03 · Kúpeľňové štúdio & 3D vizualizácie** (*3D Bathroom Studio*)
- **04 · Realizácie na kľúč** (*Turnkey Renovations*)
- **05 · Nehnuteľnosti & Projekty** (*Real Estate & Developments*)

### 4. Interactive Heating & Turnkey Bathroom Estimator
- **Heating & Boiler Room Mode**: Computes estimated thermal load (kW), heating loops/radiators, timeline, and indicative EUR range for heat pumps, gas condensing boilers, or electric systems + optional solar DHW.
- **Turnkey Bath & 3D Studio Mode**: Configures floor area, finish tier (*Standard*, *Comfort*, *Premium*), and 3D visualization in Šamorín.
- **1-Click Quote Transfer**: Copies the full configuration into the contact inquiry form.

### 5. Authentic Facebook & Instagram Craftsmanship Portfolio (15 Projects)
- Filterable showcase (*All*, *Bathrooms & Showers*, *Underfloor Heating*, *Šamorín Showroom*, *Build Details*) with fullscreen keyboard-navigable Lightbox (`←`, `→`, `Esc`) featuring real showroom and installation photos captured from `@bugarsro` on Facebook and Instagram.

### 6. 14-Category Supply Catalog & Quote Basket Drawer
- Uses all 14 official category icons and 6 partner brand logos (`Protherm`, `Korado`, `Airfel`, `ELÍZ`, `Stelrad`, `Thermal Trend`) extracted from `bugarsro.sk`.
- Slide-over Quote Basket Drawer with quantity adjustments and optional B2B company billing fields (`IČO`, `DIČ`, `IČ DPH`).

### 7. Dual-Branch Interactive Leaflet Map & Verified Hours
- Interactive OpenStreetMap markers for **Šamorín** (`48.03195° N, 17.30710° E`) and **Dunajská Streda** (`47.98962° N, 17.62856° E`).
- Verified operating hours: Warehouse (*Sklad*) Mon–Fri `07:00 – 18:00`, Store & 3D Studio (*Predajňa*) Mon–Fri `08:00 – 18:00`, Saturday `08:00 – 12:00`, Sunday Closed.

---

## Project Structure

```text
bugarsro-redesign/
├── index.html                  # Semantic HTML5 document + JSON-LD schema
├── favicon.svg                 # Custom SVG water + flame emblem
├── css/
│   └── style.css               # Responsive architectural design system (Light + Dark)
├── js/
│   ├── data.js                 # Services, 14 categories, catalog, partners, 15 FB/IG projects
│   ├── translations.js         # Complete SK / DE / EN / HU dictionary
│   └── app.js                  # Language engine, estimator, lightbox, quote drawer, Leaflet map
├── images/
│   ├── bugar-emblem.png        # Extracted circular crest
│   ├── bugar-logo.png          # Full transparent logo from bugarsro.sk
│   ├── favicon.png             # Original site favicon
│   ├── banners/                # 5 official service banners
│   ├── icons/                  # 14 official category icons
│   ├── partners/               # 6 official partner logos
│   └── portfolio/              # 15 cropped showroom & job-site photos from FB & IG
├── raw_data/                   # Captured original HTML, JS bundle, CSS, sitemap & audit notes
└── README.md                   # Documentation
```

---

## Preview Locally

```powershell
cd c:\VS\AI\AI_School\bugarsro-redesign
npx serve . -p 8095
```

Then open `http://localhost:8095/?lang=sk`, `?lang=de`, `?lang=en`, or `?lang=hu`.
