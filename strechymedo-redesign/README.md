# 🏠 Strechy Medo (strechymedo.com) — 5-Language Redesign (SK, EN, DE, PL, HU)

A modern, high-conversion, responsive redesign for **Strechy Medo** (led by master tinsmith and roofer **Miroslav Medvec**), utilizing authentic high-resolution project photography sourced directly from Instagram [@strechy_medo](https://www.instagram.com/strechy_medo/).

---

## 🌟 Key Highlights & Innovations

### 1. 🌐 5-Language Comprehensive Localization with 100% Text Parity
- **Slovak (SK 🇸🇰)**: Primary native local dialect and terminology tailored for the High Tatras, Poprad, Spiš, and Slovak clients.
- **English (EN 🇬🇧)**: Complete professional English translation for foreign cottage owners, international architects, and investors.
- **German (DE 🇩🇪)**: Precise technical German terminology (*Stehfalzdeckung, Bauwerksabdichtung, Spenglerei, Schneefangsysteme*) for German and Austrian clients active in the Tatra region.
- **Polish (PL 🇵🇱)**: Authentic Polish dekarstwo & blacharstwo terminology (*blacha na rąbek stojący, gonty syntetyczne, obróbki komina*) for Polish clients across Zakopane, Podhale, and Małopolska.
- **Hungarian (HU 🇭🇺)**: Precise Hungarian terminology (*korcolt lemezfedés, cserépfedés, bádogosipar, lapostető szigetelés*) for Hungarian property owners and cross-border projects in the Tatras and Spiš.
- Seamless, instantaneous language switcher with persistent memory (`localStorage`) and URL hash support (`#sk`, `#en`, `#de`, `#pl`, `#hu`).

### 2. 📸 Featured Hero Picture Showcase Card
- High-impact visual centerpiece on the right side of the Hero section.
- Displays real high-res project photography (*Levoča, Prešov, Lopušná Dolina, Hôrka*).
- Features floating trust tags (*100% Tesnosť & Záruka*, location pins), 1-click lightbox expansion, and quick interactive thumbnail switching.

### 3. 📷 Authentic Instagram Jobsite Photography Integration
- **58 real, high-resolution photographs** downloaded directly from `@strechy_medo` posts and carousels, categorized by real projects:
  - **Levoča**: Premium clay tile installation on modern residential new-build.
  - **Hôrka - Primovce**: Architectural pitched roof profile and water drainage.
  - **Poprad - Veľká**: Asphalt shingle reroofing with solid wood decking and heavy flashings.
  - **Smižany**: Complete roof and truss renewal on family house.
  - **Spišské Bystré**: Large-scale residential roofing with integrated skylights and snow stops.
  - **Lopušná Dolina**: Mountain log chalet with synthetic maintenance-free shingles (*Ekoternit*).
  - **Svit - Podskalka**: Family home roof renovation and valley flashing.
  - **Poprad Workshop**: Artisanal custom-built chimney caps and aerodynamic flashings.
  - **Norwit Poprad**: Commercial ventilation and large-scale architectural titanzinc flashing.
  - **Prešov (Kuzmastrechy collaboration)**: Master double standing seam titanzinc roof craft.
  - **Miro Medvec Profile Avatar**: Verified craftsman portrait.

### 4. 🧮 Interactive Roof Cost Calculator
- **Step 1: Roof Architecture**: Pitched/Gable, Hipped/Complex, Flat Membrane, or Log Cabin.
- **Step 2: Area Slider**: Smooth interactive range slider from 50 m² to 450 m².
- **Step 3: Materials**: Clay/Concrete Tiles, Standing Seam Titanzinc/Alu, Synthetic/Bitumen Shingle, Flat PVC Membrane, or Metal Profile Sheet.
- **Step 4: Add-ons**: Gutters & Downspouts, Alpine Snow Retainers, Chimney Cladding & Cap, Thermal Insulation, and Old Roof Disposal.
- **Real-Time Dynamic Pricing Breakdown**: Calculates indicative material & labor costs.
- **1-Click Pre-fill Inquiry Button**: Automatically populates the contact message in the user's active language (SK, EN, DE, PL, HU), pre-selects the right service dropdown option, and scrolls smoothly to the contact form.

### 5. 🖼️ Filterable Portfolio & Custom Lightbox Modal
- Category tabs: *All Projects*, *Pitched & Tile*, *Titanzinc & Seam*, *Shingles & Chalets*, *Tinsmith & Chimneys*.
- Touch-friendly, accessible lightbox with:
  - Next / Previous buttons
  - Keyboard arrow navigation (Left, Right, Escape)
  - Image counter (e.g. `1 / 8`)
  - Active project description, location, and materials tag translated in all 5 languages
  - Interactive thumbnail strip for quick jumping between images.
- Direct Instagram callout banner with follower counter and link to `@strechy_medo`.

### 6. ⬌ Interactive Before / After Roof Restoration Slider
- Visual side-by-side comparison of a weathered, compromised roof transformed into a modern, leak-tight roof.
- Smooth mouse drag and mobile touch slider.

### 7. 📋 Step-by-Step Transparent Workflow & FAQ Accordion
- 4-step client roadmap: Free On-Site Inspection ➔ Itemized Fixed-Price Quote ➔ Clean & Rapid Execution ➔ Handover & Multi-Decade Warranty.
- 5 comprehensive accordion answers addressing region coverage, execution timelines, material comparisons, leak repairs, and warranty policies.

### 8. 📬 Responsive Promotional Email Template
- `promotional-email.html`: Responsive, email-client-tested template ready for sending quotes, seasonal checkup offers, and portfolio previews to prospective clients.

---

## 📁 Project Structure

```text
strechymedo-redesign/
├── index.html                   # Main single-page application with full trilingual support
├── favicon.svg                  # Custom vector icon (Roof peak, standing seam, mountain silhouette)
├── promotional-email.html       # Responsive client proposal & seasonal email template
├── README.md                    # Comprehensive documentation
├── css/
│   └── styles.css               # Modern styling, responsive grid, glassmorphism, animations
├── js/
│   ├── translations.js          # Complete dictionary for SK, EN, and DE
│   ├── gallery.js               # Portfolio filtering, project datasets, Lightbox logic
│   ├── calculator.js            # Real-time parametric roof price estimator
│   └── main.js                  # Language routing, before/after slider, accordion, form validation
└── images/
    ├── miro_medvec_avatar.jpg   # Master craftsman portrait
    ├── project_01_levoca_1.jpg to project_03_levoca_3.jpg
    ├── project_04_horka_primovce_1.jpg to project_08_horka_primovce_5.jpg
    ├── project_09_poprad_velka_sindel_1.jpg to project_14_poprad_velka_sindel_6.jpg
    ├── project_15_smizany_1.jpg to project_19_smizany_5.jpg
    ├── project_20_poprad_velka_sindel_1.jpg to project_24_poprad_velka_sindel_5.jpg
    ├── project_25_spisske_bystre_1.jpg to project_33_spisske_bystre_9.jpg
    ├── project_34_lopusna_dolina_1.jpg to project_41_lopusna_dolina_8.jpg
    ├── project_42_svit_podskalka_1.jpg to project_45_svit_podskalka_4.jpg
    ├── project_46_ciapka_komina_1.jpg to project_47_ciapka_komina_2.jpg
    ├── project_48_norwit_poprad_1.jpg to project_53_norwit_poprad_6.jpg
    └── project_54_presov_titanzinok_1.jpg to project_58_presov_titanzinok_5.jpg
```

---

## 🚀 How to Run Locally

You can run this project locally without any dependencies or build steps:

### Option A: Using Node.js HTTP Server
```bash
npx serve c:/VS/AI/AI_School/strechymedo-redesign
```

### Option B: Using Node's built-in HTTP server or opening directly
Simply double-click or open `index.html` in Chrome, Firefox, Safari, or Edge. All styles, fonts, and images load locally and seamlessly.

---

## 🛠️ Tech Stack
- **HTML5 & Modern Semantic Elements**
- **CSS3 with CSS Variables, Flexbox, CSS Grid & Backdrop Filters**
- **Vanilla JavaScript (ES6+) — Zero external runtime dependencies**
- **Google Fonts (Outfit & Plus Jakarta Sans)**
- **Authentic high-resolution photography from Instagram @strechy_medo**
