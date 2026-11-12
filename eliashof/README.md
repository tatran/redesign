# 🏔️ Biobauernhof Eliashof – Website Redesign

> Modern, responsive, and bilingual redesign of [https://eliashof.at/](https://eliashof.at/) with Alpine aesthetic, interactive live price calculator, authentic imagery, and seamless **German + English** and **Light (default) + Dark mode** support.

---

## 🌟 Key Highlights

- **Bilingual (German + English)**: Instant, in-place language switcher toggling all 209 text nodes, badges, interactive components, form fields, and FAQ items without page reloads. Persisted via `localStorage`.
- **Dual Theme (Light [Default] & Dark Mode)**: Crafted with an organic Alpine palette (Alpine Pine greens, natural solid-wood earth tones, crisp snow ivory, and deep twilight slate). Light mode is active by default, switchable anytime.
- **Authentic Farm Imagery & Assets**: Downloaded 50 high-resolution original photos directly from the Eliashof site, showcasing the panoramic Dachstein views, rooms, renovated 200-year-old farmhouse apartments, farm animals (goats, cats, rabbits, ducks), traditional sheep drive (*Almabtrieb*), and the family-owned **Waldhornalm** in Untertal.
- **Interactive Live Price & Booking Calculator**: Real-time rate estimator honoring official pricing tables (Doppelzimmer from €45/person, Appartements from €100-€250 depending on season and occupancy). Automatically highlights included benefits (local taxes, final cleaning, free Sommercard worth > €70/day) and features a 1-click **"Transfer to Inquiry Form"** button.
- **Fast Availability Finder**: Hero-integrated quick finder bar for arrival, departure, accommodation preference, and guest count with instant transfer to the booking section.
- **Interactive Alpine Map**: Leaflet.js-powered custom map featuring interactive markers for **Biobauernhof Eliashof (1.000m)**, **Hochwurzen Bergbahn (Ski-in / Ski-out & 7km Rodelbahn)**, **Planai Schladming**, and **Waldhornalm (Klafferkessel hike)**.
- **Farm Life & Nature Gallery**: Filterable photo showcase (*All, Animals, Farm & Nature, Tradition*) with full-screen lightbox modal.
- **Waldhornalm Feature**: Dedicated showcase for the family's catered mountain refuge in Untertal at the Klafferkessel loop hike, serving homemade Steirerkas, churned butter, and offering overnight dormitory stays (*Hüttenlager*).
- **FAQ Accordion**: Instant answers to common questions regarding check-in/out (15:00 / 10:00), cash-only payment, pet policies, non-smoking terms, ski storage with boot dryers, and cancellation terms (AGBH 2006).
- **Non-Binding Inquiry Form**: Mobile-friendly booking request form with live validation and success feedback state.

---

## 📂 Project Structure

```
eliashof-redesign/
├── index.html               # Main semantic HTML5 single-page application
├── favicon.png              # High-res Eliashof favicon
├── css/
│   └── style.css            # Alpine Design System tokens (Light & Dark mode, responsive)
├── js/
│   ├── i18n.js              # Complete bilingual dictionary (DE / EN, 209 keys)
│   └── app.js               # Interactive controller (Theme, i18n, Calculator, Map, Lightbox)
├── images/
│   ├── all/                 # Brand emblems, certification badges, partner logos
│   │   ├── logo-eliashof.png
│   │   ├── logo-urlaub-am-bauernhof.png
│   │   ├── drei-margeriten.png
│   │   ├── logo-schladming-dachstein.png
│   │   ├── logo-ski-amade.png
│   │   └── icon-facebook.svg
│   ├── startseite/          # Slideshow & hero images (1920w panorama, Dachstein)
│   ├── zimmer/              # Double rooms, bathrooms, view of the Dachstein
│   ├── appartement/         # 200y farmhouse apartments (OG 90m² & DG 70m²), floorplans
│   └── bauernhof/           # Farm animals, playground, Waldhornalm & traditional sheep drive
├── raw_data/                # Archived original website pages & assets
└── scripts/
    └── check_i18n.js        # Automated i18n key coverage validation script
```

---

## 🎨 Color Palette & Design Tokens

### Light Theme (Default)
| Token | Value | Description |
|---|---|---|
| `--primary` | `#1b4d36` | Alpine Pine Green (Tannengrün) |
| `--accent` | `#b0723a` | Warm Austrian Timber & Gold |
| `--bg-body` | `#f8f9f7` | Crisp Alpine Linen |
| `--bg-surface` | `#ffffff` | Pure White Surface |
| `--text-primary`| `#152219` | Deep Forest Charcoal |
| `--badge-bg` | `#e8f4ed` | Soft Herbal Sage |

### Dark Theme
| Token | Value | Description |
|---|---|---|
| `--primary` | `#52b788` | Luminous Forest Emerald |
| `--accent` | `#d89f66` | Alpine Sunrise Amber |
| `--bg-body` | `#0d1512` | Deep Alpine Night Slate |
| `--bg-surface` | `#14201a` | Elevated Spruce Dark Surface |
| `--text-primary`| `#f2f7f4` | Snow White Readable Text |

---

## 🚀 How to Run Locally

1. Open `eliashof-redesign/index.html` directly in any modern web browser:
   ```powershell
   Start-Process .\eliashof-redesign\index.html
   ```
2. Or serve via any local HTTP server:
   ```powershell
   npx serve .\eliashof-redesign
   ```

---

## 🏆 Key Information Preserved & Enhanced from eliashof.at

- **Hosts**: Familie Höflehner
- **Address**: Reiterkreuzweg 13, 8971 Schladming (Rohrmoos), Styria, Austria
- **Elevation**: 1,000 meters above sea level
- **Ski Access**: Direct ski trail to 4-Berge-Skischaukel (Hochwurzen, Planai, Reiteralm, Hauser Kaibling) & ski-in back to the farm
- **Summer Perk**: Free Schladming-Dachstein Sommercard included with every summer stay
- **Special Attraction**: Waldhornalm mountain hut in Untertal with homemade Steirerkas and dormitory accommodation
- **Accreditation**: "Urlaub am Bauernhof" – 3 Margeriten
