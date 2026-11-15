# Orchard Roofing Kelowna (`orchardroofing.ca`) — Modern Light + Dark Website Redesign

Modern, high-converting residential & strata roofing website redesign and interactive estimate calculator for **Orchard Roofing** (*Christopher Schmidt*), serving Kelowna and the Okanagan Valley from Vernon to Summerland, British Columbia.

## 🍎 Client & Research Overview

- **Business Name:** Orchard Roofing
- **Owner & Lead Estimator:** Christopher (Chris) Schmidt
- **Service Corridor:** Vernon to Summerland, BC (*Kelowna, West Kelowna, Lake Country, Vernon, Peachland, Summerland*)
- **Direct Contacts:**
  - **Phone:** `+1 (250) 681-1891`
  - **Email:** `sales@orchardroofing.ca`
  - **Original Website:** [orchardroofing.ca](https://www.orchardroofing.ca/)
  - **Social & Reviews:** [Facebook (`@orchardroofs`)](https://www.facebook.com/orchardroofs) · [Google Business Profile](https://g.page/orchardroofs?gm)
- **Credentials & Guarantees:**
  - **CertainTeed ShingleMaster™ Certified Installer** — Top-level CertainTeed credential unlocking up to **50-year Landmark® manufacturer warranties**.
  - **10-Year Written Workmanship Guarantee** included on every invoice.
  - **Up-to-Date WorkSafeBC (WCB) & Commercial Liability Insurance** attached to every quote with **zero hidden fees**.
  - **15+ Years of Okanagan Leadership** & **60+ Years of Combined Team Roofing Experience**.
  - **Finished Photo Documentation** provided to homeowners on every completed roof.

---

## ✨ Key Redesign Features

1. **Architectural Light + Dark Theme (`light` / `dark`)**
   - **Light Mode:** Warm Okanagan Limestone (`#fbf9f6`), Crisp Alabaster cards (`#ffffff`), Signature Orchard Crimson (`#822433`), and Warm Cedar Gold (`#b46926`).
   - **Dark Mode:** Deep Charcoal Shingle Slate (`#100e10`), Elevated Obsidian Slate (`#1f1b1f`), and Luminous Orchard Crimson (`#c93b52`).
   - Automatically swaps between the authentic crimson Orchard Apple logo (`logo.png`) and the crisp white Orchard Apple logo (`logo-white.png`), with `localStorage` persistence.

2. **Interactive Okanagan Roof Replacement & Conversion Calculator**
   - Supports all core Orchard Roofing scopes:
     - **Asphalt Shingle Re-Roof** (*CertainTeed Landmark® architectural system*)
     - **Tar-and-Gravel to Shingle Conversion** (*2/12 to 3/12 low-slope pitch using Polyglass® Self-Adhered 2-Ply Membrane + architectural shingles*)
     - **Cedar Shake Conversion** (*Complete tear-off, deck inspection & dimensional shingles*)
     - **Targeted Skylight Flashing / Sunken Roof Deck Repair**
   - Configurable roof area (`900 – 5,000 sq ft` / squares), pitch selector (`2/12–3/12 Low Slope`, `4/12–6/12 Walkable`, `7/12+ Steep`), and optional upgrades (*Skylight Flashing/Replacement, Rotten Plywood Deck Allowance, Colour-Matched Gutters, WCB Roof Safety Anchors*).
   - One-click transfer of the calculated specification directly into the Free Onsite Estimate form.

3. **Consolidation of All 4 Original Pages + Removal of Divi Errors**
   - Merges `Home`, `Re-Roofs`, `Roofing Repairs`, and `FAQs` into a seamless, ultra-fast experience.
   - Fixes the live Divi placeholder bug on `orchardroofing.ca/faqs/` (*"Your Title Goes Here — Your content goes here..."*).
   - Includes a filterable **Okanagan Project Portfolio Gallery** with modal lightbox and all **9 verified homeowner & strata testimonials**.
   - Full Canadian bilingual support (**English `EN-CA`** + **French `FR-CA`**).

4. **Client Outreach Email Offer (`promotional-email.html` & `promotional-email.txt`)**
   - Ready-to-send HTML and plain-text outreach email addressed to **Chris Schmidt (`sales@orchardroofing.ca`)** detailing the technical audit findings and linking to the live interactive prototype.

---

## 📁 Directory Structure

```text
orchardroofing-redesign/ (and /orchardroofing/)
├── index.html               # Main responsive Light + Dark redesign & interactive estimator
├── favicon.svg              # Custom vector Orchard Apple & Roofline SVG favicon
├── README.md                # Project documentation & technical overview
├── promotional-email.html   # Responsive HTML outreach email offer for Chris Schmidt
├── promotional-email.txt    # Plain-text version of the outreach email offer
├── css/
│   └── style.css            # Complete Light & Dark mode architectural design system
├── js/
│   ├── app.js               # Theme switcher, EN/FR i18n, roof calculator, gallery lightbox, FAQ
│   └── translations.js      # Bilingual English & French dictionaries
└── images/                  # 25 authentic logos & Okanagan project photos from orchardroofing.ca
```
