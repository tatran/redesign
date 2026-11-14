# Alexandru Bialis Photography – Modern Quad-Lingual Website Redesign

A luxury, high-performance editorial redesign of **[https://bialisphotography.at/](https://bialisphotography.at/)** for **Alexandru Bialis Photography** (*Alexandru Bialis e.U.*, Feuerwehrgasse 12/13, 7083 Purbach am Neusiedler See, Burgenland, Austria).

---

## 🌐 Quad-Lingual Support (DE / EN / HU / CS)

Positioned directly in the Central European tri-border region (Lake Neusiedl, Vienna, Sopron/Hungary, Bratislava/Slovakia & Czech border), this redesign provides authentic, native copy across four languages:

1. **Deutsch (DE)** – Primary Austrian business and photography terminology (*Berufsfotograf & Werbegrafikdesigner*, *WKO Burgenland*, *Kleinunternehmer gem. § 6 Abs. 1 Z 27 UStG*).
2. **English (EN)** – Complete English translations catering to international destination wedding couples, expats, and multinational corporate clients.
3. **Magyar (HU)** – Hungarian translations serving the immediately adjacent Sopron, Fertő-táj, and Győr regions (~25 minutes from Purbach).
4. **Čeština (CS)** – Czech translations addressing the high volume of Czech wedding tourism, Lake Neusiedl vacationers, and regional business partners.

Every text string, form label, placeholder, filter tab, case study, and legal modal translates instantaneously without page reload, syncing via URL parameter (`?lang=de|en|hu|cs`) and `localStorage`.

---

## 🌓 Light & Dark Theme Modes

- **Light Mode (Default)**: Editorial gallery aesthetic featuring creamy warm canvas (`#FAF9F6`), crisp charcoal typography (`#18191C`), and brushed gold/bronze accents (`#B88E3E`).
- **Dark Mode (Cinematic)**: Obsidian and deep slate canvas (`#0C0D0F`) engineered to make vivid photography and black & white fine art imagery pop with luminous gold highlights (`#D4AF37`).
- Includes smooth transitions, accessibility `aria-label` controls, system preference detection, and persistent storage.

---

## 🛠️ Audit Fixes Over Original WordPress / Elementor Site

1. **Eliminated Password-Gated Pricing Friction**: The original site featured a password-protected `/preise/` page that turned away interested visitors. This redesign replaces it with a transparent, interactive **Shooting-Konfigurator** that calculates estimated ranges and transfers choices directly into the inquiry form.
2. **Cleaned Unfinished Test Pages**: The live WordPress installation exposes empty/draft pages such as `/ygstesten/` ("diverse teste"). The redesign consolidates all content into clean, focused sections.
3. **Massive Performance Boost**: Replaced heavy Elementor and Astra overhead (multiple conditional CSS/JS bundles, jQuery Fancybox, MediaBoxes) with ultra-light native vanilla JavaScript and modern CSS grid.
4. **Interactive Studio Location**: Embedded a live Leaflet.js map centered on Feuerwehrgasse 12/13, 7083 Purbach am Neusiedler See (`47.9140, 16.6948`) with light/dark tile switching and direct Google Maps route planning.
5. **Full Legal Compliance**: Incorporates full Austrian disclosures pursuant to § 5 ECG, § 14 UGB, § 63 GewO, § 25 Mediengesetz, and DSGVO privacy standards.

---

## ✨ Key Modules & Features

- **Hero & Trust Showcase**: Experience counter highlighting 30+ years of mastery, 500+ weddings and sessions, 100% handcrafted albums, and local studio roots in Purbach am Neusiedler See.
- **Interactive Portfolio Gallery**: Instant category filtering across *Wedding & Reportage*, *Corporate & Industry*, *Studio & Portrait*, *Albums & Products*, and *Graphic Design*.
- **Full-Screen Lightbox Modal**: High-resolution image viewing with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`), captions, and a 1-click "Inquire About This Style" action.
- **5 Core Service Disciplines**: In-depth feature breakdown for Weddings, Corporate/Industrial (e.g. Bauder GmbH), Studio/Outdoor Portraits, Handcrafted Heirloom Albums, and Graphic/Print Design.
- **Interactive Photography Investment Estimator**: Dynamic real-time calculation based on session type, duration, and optional add-ons (drone, luxury 30x30 album, 48h express retouching, second photographer).
- **About Alexandru Bialis**: Authentic biographical narrative tracing 30+ years of dedication from analog darkroom roots in the 1990s to modern digital excellence.
- **Client Stories & Case Studies**: Features 4 verified projects (*Winterzauber in Wien*, *Renate & Erich Hochzeit in Göttlesbrunn*, *Bauder Bitumenwerk*, *Vintage Hundestudio-Shooting*).
- **Interactive Studio Map**: Leaflet.js interactive map centered on Feuerwehrgasse 12/13, Purbach.
- **Contact & Inquiry Booking Form**: Complete validation, date picker, budget estimator sync, and instant confirmation toast.

---

## 📁 Project Structure

```text
bialisphotography-redesign/
├── index.html                  # Main responsive HTML5 single-page application
├── favicon.svg                 # Custom SVG camera aperture / AB monogram icon
├── promotional-email.html      # Ready-to-send rich HTML client offer pitch
├── promotional-email.txt       # Plain-text version for email clients
├── README.md                   # Complete documentation
├── css/
│   └── style.css               # Light & Dark themes, responsive layout, glassmorphism
├── js/
│   ├── app.js                  # Theme engine, i18n switcher, calculator, map, lightbox
│   └── translations.js         # 159 verified keys across DE, EN, HU, and CS
├── images/                     # Curated high-resolution photography assets
│   ├── logo-alexandru-bialis.png
│   ├── alexandru-bialis.jpg
│   ├── wedding-hero-sunset.jpg
│   ├── wedding-couple-sunglasses.jpg
│   ├── wedding-reportage-oesterreich.jpg
│   ├── industry-bauder-facility.jpg
│   ├── corporate-worker-production.jpg
│   ├── portrait-studio-lady.jpg
│   ├── portrait-art-bw.jpg
│   ├── portrait-vintage-dog.jpg
│   ├── wedding-album-leather.jpg
│   ├── album-taufe-box.jpg
│   └── design-branding-showcase.jpg
├── raw_data/                   # Scraped WP REST API JSON and extracted markdown
└── scripts/                    # Node.js data extraction and verification scripts
```

---

## 🚀 Preview Locally

To launch a local web server and preview the redesign:

```powershell
cd c:\VS\AI\AI_School\bialisphotography-redesign
npx --yes serve -l 8094 .
```

Then open `http://localhost:8094` in your browser.
Test languages directly with URL parameters:
- German: `http://localhost:8094/?lang=de`
- English: `http://localhost:8094/?lang=en`
- Hungarian: `http://localhost:8094/?lang=hu`
- Czech: `http://localhost:8094/?lang=cs`
