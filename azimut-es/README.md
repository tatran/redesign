# Azimut ES, s.r.o. — Modern Quad-Lingual Backup Power, UPS & Generator Portal

Modern, responsive B2B/B2C web redesign and interactive backup power configurator for **Azimut ES, s.r.o.** (*„Sme stále plní energie. Buďte aj Vy.“ / STILL FULL OF ENERGY*), headquartered at Šamorínska 10, 903 01 Senec with operations/warehouse at Čakany 10, 930 40 Čakany, Slovakia.

## ⚡ Project Overview

- **Client:** Azimut ES, s.r.o. (IČO: 45284563, DIČ: 2022924640, IČ DPH: SK2022924640)
- **Contacts:** `+421 944 315 478` (Projects, Rental & Service), `+421 948 700 540` (Sales & Promotional CGM Generators), `azimut@azimut-es.com`, `info@azimut-es.com`
- **Original Website:** [azimut-es.com](https://www.azimut-es.com/)
- **Business Profile:** Turnkey backup power solutions, diesel generating sets, uninterruptible power supply (UPS) systems, power automation (ATS & synchronization switchgear), short/long-term generator rental, and warranty/post-warranty service & electrical revisions. Authorized partner for **ELCOS**, **CGM**, **HIMOINSA**, and **GTEC**. Certified **ISO 9001:2015** quality management system.

---

## 🚀 Key Redesign Features

1. **Quad-Lingual Architecture (4 Languages)**
   - 🇸🇰 **Slovak (SK)** — Domestic B2B industrial clients, municipalities, and residential homeowners.
   - 🇩🇪 **German (DE)** — Austrian/German industrial and logistics facilities (*Notstromaggregate, USV-Systeme & Generatorvermietung*).
   - 🇬🇧 **English (EN)** — International corporations, data centers, and production plants.
   - 🇭🇺 **Hungarian (HU)** — Southern Slovakia (Dunajská Streda / Čakany region) and Hungarian partners (*Tartalék áramforrások, dízel aggregátorok, UPS és bérlés*).
   - Instant client-side switcher with `localStorage` persistence.

2. **High-Contrast Light & Power-Grid Dark Theme**
   - **Light Mode:** Clean technical daylight surfaces (`#f5f8f3`), Azimut ES signature lime-green (`#a3d060` / `#5b9118`), and crisp typography.
   - **Dark Mode:** Deep control-room carbon green (`#09100b`) with glowing lime-green (`#a3d060`) accents matching the brand's *HYBRID EPH 24/25/13-T* visual identity.

3. **Interactive Promotional CGM Generator Catalog (`Akciová ponuka`)**
   - Filterable showcase (All / Single-Phase 230 V / Inverter / Three-Phase 400 V) for all 4 promotional models:
     - **CGM 3000SE** (230 V, 3.0 kW, `377 € excl. VAT / 463,71 € incl. VAT`)
     - **CGM 3300IE Inverter** (230 V Inverter AVR, 3.3 kVA / 3.0 kW, `824 € excl. VAT / 1 013,52 € incl. VAT`)
     - **CGM 9000STE** (400 V, 9.5 kVA / 7.6 kW, `694 € excl. VAT / 853,62 € incl. VAT`)
     - **CGM C13000TE Briggs & Stratton** (400 V, 12.0 kVA / 9.6 kW, `2 588 € excl. VAT / 3 183,24 € incl. VAT`)
   - Highlights the **5 L Alkylate Petrol Free Gift** and pre-fills the order form with one click.

4. **Interactive Backup Power Sizing (kVA) & Generator Rental Calculator**
   - Calculates recommended apparent power (`kVA`) and continuous active power (`kW`) based on facility load profile (+25% residential, +30% IT/server room, +35% commercial, +60% industrial heavy motor starting) and switches between **Purchase / Turnkey Project** and **Generator Rental Fleet** modes.

5. **Promotional Outreach Offer (`promotional-email.html` & `.txt`)**
   - Ready-to-send responsive HTML and plain-text outreach emails addressed to `azimut@azimut-es.com` and `info@azimut-es.com`.

---

## 📁 Directory Structure

```text
azimut-es-redesign/ (and /azimut-es/)
├── index.html               # Main responsive quad-lingual portal
├── favicon.svg              # Custom Azimut ES energy arc + bolt SVG favicon
├── README.md                # Project documentation & overview
├── promotional-email.html   # Responsive HTML outreach email offer
├── promotional-email.txt    # Plain-text version of the email offer
├── css/
│   └── style.css            # Light & Dark mode design system
├── js/
│   ├── app.js               # Interactive engine: i18n, theme, catalog, kVA calculator
│   └── translations.js      # Quad-lingual dictionaries (SK, DE, EN, HU) & CGM catalog data
└── images/
    ├── logo-h60.png         # Official Azimut ES header logo
    ├── logo-azimut.png      # Official Azimut ES compact logo
    ├── redesign-preview.jpg # Visual preview screenshot for email offer
    ├── hero-cgm-hybrid.png  # Official HYBRID EPH 24/25/13-T hero visual
    ├── cgm-3000se.jpg       # CGM 3000SE generator
    ├── cgm-3300ie.jpg       # CGM 3300IE inverter generator
    ├── cgm-9000ste.jpg      # CGM 9000STE 3-phase generator
    ├── cgm-c13000te.jpg     # CGM C13000TE Briggs & Stratton generator
    ├── brand-elcos.jpg      # ELCOS Generating Sets logo
    ├── brand-cgm.jpg        # CGM Gruppi Elettrogeni logo
    ├── brand-himoinsa.jpg   # HIMOINSA (A Yanmar Company) logo
    ├── brand-gtec.jpg       # GTEC Smart Energy Solutions UPS logo
    ├── iso-9001-preview.jpg # ISO 9001:2015 Quality Policy preview
    ├── Politika-kvality-Azimut_ES_ISO9001.pdf
    ├── cert-2017.jpg        # Trusted Company 2017 certificate
    ├── cert-2018.jpg        # Trusted Company 2018 certificate
    ├── cert-elite-2018.jpg  # Trusted Company ELITE / GOLD certificate
    └── badge-elite.png      # Trusted Company ELITE badge
```
