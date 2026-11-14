# FEROLL GRASS s.r.o. — Modern Trilingual Website Redesign (SK / EN / HU)

Complete responsive website redesign and interactive quote platform for **FEROLL GRASS s.r.o.**, a Slovak grower and installer of cultivated turf rolls (rolované trávniky / trávnikové koberce / gyepszőnyeg) based in Reca (Senec district), Slovakia.

## 🌿 Business & Research Summary

- **Company Name:** FEROLL GRASS s. r. o.
- **Managing Director (Konateľ):** František Gyurcsi
- **Registered Seat & Turf Plantation:** Reca 54 (Farm/Operations: Reca 587), 925 26 Reca, Senec District, Slovakia
- **Company IDs:** IČO: `47 126 337` · DIČ: `2023760508` · IČ DPH: `SK2023760508` (Incorporated in April/May 2013)
- **Contact:** `+421 910 466 999` (Direct – František Gyurcsi), `+421 905 820 319`, `gyufe@azet.sk`
- **Social Channels:** [Facebook (`Feroll Grass sro`)](https://www.facebook.com/FerollGrass) · [Instagram (`@ferollgrass`)](https://www.instagram.com/ferollgrass/)
- **Domain Status (`ferollgrass.sk`):** The original domain `www.ferollgrass.sk` currently does not resolve (`ERR_NAME_NOT_RESOLVED`). This redesign restores a complete, fast, high-converting digital presence using authentic photos and data from their Facebook, Instagram, and official Slovak business registries.

---

## ✨ Key Features

1. **Trilingual Localization (`SK` / `EN` / `HU`)**
   - 🇸🇰 **Slovak (`sk`)** — Primary domestic market across Senec, Bratislava, Pezinok, and Trnava.
   - 🇬🇧 **English (`en`)** — International homeowners and commercial clients in the Bratislava metropolitan area.
   - 🇭🇺 **Hungarian (`hu`)** — Native regional support for Reca (Réte), Senec (Szenc), Šamorín (Somorja), Galanta, and Dunajská Streda.
   - Instant client-side language switching with URL parameter (`?lang=sk|en|hu`) and `localStorage` persistence.

2. **Botanical Light & Dark Mode (`light` / `dark`)**
   - Inspired by the official **FEROLL GRASS** circular emblem (`#23531f` deep turf green, `#76a829` fresh lime accent on the "LL" letters, and `#8c5a2b` soil brown from their `🟫🟫 Úprava terénu` / `🟩🟩 Položenie rolovanej trávy` identity).
   - Automatic OS preference detection plus header toggle button.

3. **Interactive Turf Roll, Pallet & Logistics Calculator**
   - Calculates required turf rolls (`1 m² = 40 × 250 cm`) with automatic **5% trimming buffer**.
   - Estimates total shipment weight (`~20 kg/roll`), required **EUR pallets** (`~50 m²/pallet`), and installation duration.
   - Scope selector (*Turf Rolls Only*, *Rolls + Laying*, *Turnkey with Ground Prep*) and optional extras (*Hidden Edging*, *Starter Fertilizer*, *3.5 t Truck Delivery*).
   - One-click transfer of the calculated specification directly into the quote request form.

4. **Authentic Portfolio Gallery with Lightbox**
   - Real photos from FEROLL GRASS's turf fields in Reca and residential garden installations (`@ferollgrass`).
   - Category filtering (*All*, *Turf Farm & Harvest*, *Laying & Edging*, *Finished Lawns & Irrigation*) and modal lightbox.

5. **Promotional Outreach Email (`promotional-email.html` & `promotional-email.txt`)**
   - Tailored outreach email addressed to Managing Director František Gyurcsi (`gyufe@azet.sk`) highlighting the offline status of `ferollgrass.sk` and presenting the live interactive prototype.

---

## 📁 Folder Structure

```text
ferollgrass-redesign/
├── index.html               # Main trilingual responsive website (SK / EN / HU)
├── favicon.svg              # Custom vector FEROLL GRASS badge favicon
├── promotional-email.html   # Responsive HTML outreach email for the client
├── promotional-email.txt    # Plain-text version of the outreach email
├── README.md                # Project documentation
├── css/
│   └── style.css            # Light & Dark mode design system
├── js/
│   ├── translations.js      # Full SK, EN, HU dictionaries
│   └── app.js               # Language switcher, theme toggle, calculator, lightbox, FAQ
└── images/
    ├── logo-avatar.jpg      # Official FEROLL GRASS circular emblem
    ├── logo.svg             # Vector FEROLL GRASS wordmark & emblem
    ├── brand-mark.jpg       # FEROLL GRASS typography mark
    ├── hero-turf-farm.jpg   # Authentic photo of turf roll harvesting on the field in Reca
    └── project-01..08.jpg   # Authentic lawn laying, edging, and irrigation project photos
```
