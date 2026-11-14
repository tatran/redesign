# Môj včelár (mojvcelar.sk) — Modern Quad-Lingual Apiary & Honey Catalog Redesign

Modern, responsive 4-language web redesign and interactive honey & apitherapy portal for **Môj včelár – Včelárenie rodina Kaplánová** (*Ing. Lukáš Kaplán, Ing. Daniel Kaplán & Marek Kaplán*), located at Agátová 144, 900 83 Čataj (Senec District), Slovakia.

## 🐝 Project Overview

- **Client:** Včelárenie rodina Kaplánová (Ing. Lukáš Kaplán, Ing. Daniel Kaplán – Chairman of ZO SZV Senec, and Marek Kaplán)
- **Address:** Agátová 144, 900 83 Čataj (8 km from Senec, 18 km from Trnava, ~30 km from Bratislava)
- **Contacts:**
  - `+421 949 657 020` (Honey, Bee Pollen, Propolis & Beeswax Sales)
  - `+421 949 657 019` (Ing. Lukáš Kaplán — Straw-Mulched Garlic Mojmír, Agria Potatoes & Nectar Trees)
  - `+421 949 695 101` (Ing. Daniel Kaplán — Chairman of the Slovak Beekeepers Association ZO SZV Senec)
  - `vcelarenie1@gmail.com`
- **Original Website:** [mojvcelar.sk](https://www.mojvcelar.sk/)
- **Core Differentiator:** Started from scratch in late spring 2007 by capturing a wild swarm into a cardboard box while still students; evolved into an internationally awarded family apiary winning **1st & 3rd Place at the 21st APISLAVIA Congress 2016 (Almaty, Kazakhstan)**, **Gold & Silver Medals at AGRA 2022 & 2018 (Gornja Radgona, Slovenia)**, **Silver at APISLAVIA 2012 (Pszczela Wola, Poland)**, **1st, 2nd & 3rd Places at Agrokomplex Nitra**, and the **Slovenský med** quality trademark.

---

## 🚀 Key Redesign Features

1. **Quad-Lingual Architecture (4 Languages)**
   - 🇸🇰 **Slovak (SK)** — Domestic customers across Bratislava, Senec, Trnava, Pezinok, and local SZV beekeepers.
   - 🇩🇪 **German (DE)** — Austrian/German cross-border customers (*Slowakischer Bienenhonig direkt vom Imker*).
   - 🇬🇧 **English (EN)** — International expats in the Bratislava/Senec region and international congress visitors.
   - 🇭🇺 **Hungarian (HU)** — Bilingual communities in the Senec/Galanta/Dunajská Streda region (*Kaplán családi méhészet – Csataj*).
   - Instant client-side switcher with `localStorage` persistence.

2. **Golden Honeycomb Light & Midnight Apiary Dark Theme**
   - **Light Mode:** Warm beeswax cream surfaces (`#fdfaf3`), golden amber accents (`#c87a08`), and botanical meadow green (`#2c6e49`).
   - **Dark Mode:** Deep propolis-mahogany (`#110d07`) with luminous golden honey highlights (`#f59e0b`).

3. **Interactive 2026 Honey, Apitherapy & Straw-Mulch Harvest Catalog (`Ponuka medu 2026`)**
   - Filterable showcase (All / In Stock with Price / Slovak Honeys / Pollen, Propolis & Wax / Straw-Mulched Garlic & Potatoes):
     - **Agátový med (Acacia Honey):** `10 € / 900 g` (In stock)
     - **Jemne skryštalizovaný med – Lúčne kvety (Meadow Flower Honey, AGRA 2022 Gold):** `10 € / 900 g` (In stock)
     - **Obnôžkový včelí peľ sušený (Dried Bee Pollen, 27 trace elements):** `3 € / 100 g` (In stock)
     - **Propolisová tinktúra (Propolis Tincture):** `4 € / 30 ml`, `6 € / 50 ml`, `10 € / 100 ml` (In stock)
     - **Pravý včelí vosk & Odviečkovance (Pure Beeswax):** `4 € / 70 g` (In stock)
     - **Sušené cesnakové plátky – Cesnak Mojmír spod slamy:** `2 € / 45 g` or `14 € / 300 g` (In stock)
     - **Seasonal Honeys (Availability Inquiry):** Lipový med (AGRA 2018 & 2022 Silver), Slnečnicový med (AGRA 2018 Gold, rich in Selenium), Repkový pastovaný med (creamed 3× daily), Skryštalizovaný med Ovocné stromy, Lipovo-medovicový & Ďatelinový med, and Zemiaky Agria spod slamy.

4. **Interactive Bundle & Free Delivery Calculator + Natural Apitherapy Advisor**
   - Live basket calculator with free delivery route selector (*Čataj personal pickup, Senec/Pezinok/Šenkvice, Bratislava/Trnava, Žilina route, or Cash-on-Delivery post*).
   - Interactive **"Med je lekáreň, ktorá je vždy po ruke"** symptom selector (*Colds & Throat, Stomach & Gut Flora, Heart & Selenium, Sleep & Prostate, Teeth & Skin Healing*) displaying authentic dosage recipes from Lukáš Kaplán's articles.

5. **Promotional Outreach Offer (`promotional-email.html` & `.txt`)**
   - Ready-to-send responsive HTML and plain-text outreach emails addressed to `vcelarenie1@gmail.com`.

---

## 📁 Directory Structure

```text
mojvcelar-redesign/ (and /mojvcelar/)
├── index.html               # Main responsive quad-lingual portal
├── favicon.svg              # Custom golden honeycomb & bee SVG favicon
├── README.md                # Project documentation & overview
├── promotional-email.html   # Responsive HTML outreach email offer
├── promotional-email.txt    # Plain-text version of the email offer
├── css/
│   └── style.css            # Light & Dark mode design system
├── js/
│   ├── app.js               # Interactive engine: i18n, theme, catalog, bundle calculator, apitherapy advisor
│   └── translations.js      # Quad-lingual dictionaries (SK, DE, EN, HU) & 2026 product database
└── images/                  # 35+ authentic images from mojvcelar.sk
```
