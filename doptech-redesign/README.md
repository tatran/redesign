# DOPTECH, s.r.o. — Modern Quad-Lingual Heavy Transport & Hydraulic Crane Portal

Modern, responsive B2B web redesign and interactive transport/crane configurator for **DOPTECH, s.r.o.** (*„NAŠA PRÁCA NÁS BAVÍ“*), located at Kráľová pri Senci 1516, 900 50 Kráľová pri Senci, Slovakia.

## 🚛 Project Overview

- **Client:** DOPTECH, s.r.o. (IČO: 47 592 877, DIČ: 2023969409, IČ DPH: SK2023969409)
- **Managing Director:** Miroslav Latinák (`+421 911 108 191`, `+421 2/222 009 29`, `latinak@doptech.sk`)
- **Original Website:** [doptech.sk](http://www.doptech.sk/)
- **Business Profile:** Specialized road freight transport, oversized cargo transport, and high-reach hydraulic crane (HR) loading, unloading, and rooftop rigging across Slovakia and neighboring Central European countries since 2013 (PERI tender winner since 2014).

---

## 🚀 Key Redesign Features

1. **Quad-Lingual Architecture (4 Languages)**
   - 🇸🇰 **Slovak (SK)** — Domestic construction companies, site managers, and private investors.
   - 🇩🇪 **German (DE)** — Austrian/German contractors and forwarding partners (*LKW-Krantransporte & Schwerlastlogistik*).
   - 🇬🇧 **English (EN)** — International industrial and logistics clients.
   - 🇭🇺 **Hungarian (HU)** — Southern Slovakia and Hungarian construction partners (*Önrakodó darus fuvarozás és nehézgépszállítás*).
   - Instant client-side switcher with `localStorage` persistence.

2. **High-Visibility Light & Night-Dispatch Dark Theme**
   - **Light Mode:** High-contrast industrial daylight surfaces (`#f8fafc`), DOPTECH safety orange (`#ea580c`), and slate typography.
   - **Dark Mode:** Deep highway-asphalt navy (`#070d17`) and illuminated amber/orange accents (`#fb923c`) for early-morning and night dispatchers.

3. **Interactive 2025 Price List & Hydraulic Crane Load-Check Calculator**
   - Converts the scanned image (`CENNIK-2025-.jpg`) into an interactive calculator.
   - Verifies lifting capacity at any outreach radius (from 2.0 m up to **25.6 m**) against the exact load charts for **Palfinger PK 42502**, **HMF 5020-K4**, and **MKG 195 HP**.
   - Calculates estimated mileage (`1.60 € / km` solo or `1.80 € / km` truck + trailer), crane hours (`40 € / 50 € / 60–80 € / h`), and waiting time (`30 € / h`), transferring the quote into the booking form with one click.

4. **Structured Fleet Showcase & Categorized Project Chronicle (2013–2025)**
   - Dedicated specification cards for all 4 combinations (*VOLVO FH 16 + HMF 5020*, *VOLVO FM 9 + Palfinger 42502*, *DAF XF 105 + MKG 195*, *DAF CF 85*).
   - Filterable project portfolio highlighting landmark builds (*Národná banka Slovenska 25 m terrace lift, Nemocnica Bory, PERI Senec, Bratislavský hrad, SNG, Mlynské Nivy, D1/D4R7, Komárno Bridge, IKEA Malacky, Pohoda Festival*).

5. **Promotional Outreach Offer (`promotional-email.html` & `.txt`)**
   - Ready-to-send responsive HTML and plain-text outreach emails addressed to `latinak@doptech.sk`.

---

## 📁 Directory Structure

```text
doptech-redesign/
├── index.html               # Main responsive quad-lingual portal
├── favicon.svg              # Custom hydraulic crane truck SVG favicon
├── README.md                # Project documentation & overview
├── promotional-email.html   # Responsive HTML outreach email offer
├── promotional-email.txt    # Plain-text version of the email offer
├── css/
│   └── style.css            # Light & Dark mode industrial design system
├── js/
│   ├── app.js               # Interactive engine: i18n, theme, calculator, portfolio
│   ├── fleet-data.js        # Fleet specs, crane load charts & project database
│   └── translations.js      # Quad-lingual dictionaries (SK, DE, EN, HU)
└── images/
    ├── logo-doptech.jpg     # Official DOPTECH s.r.o. logo
    ├── redesign-preview.jpg # Visual preview screenshot for email offer
    ├── cennik-2025.jpg      # Official 2025 rate card & load chart sheet
    ├── volvo-fh16-hmf5020.jpg
    ├── nbs-bratislava-25m.jpg
    ├── nemocnica-bory.jpg
    ├── vyroba-peri.jpg
    ├── nadrozmer-2024.jpg
    ├── prevoz-plosin.jpg
    ├── ikea-malacky-plosina.jpg
    ├── hrad-bratislava.jpg
    ├── skala-senec.jpg
    └── frantiskanske-namestie-2024.jpg
```
