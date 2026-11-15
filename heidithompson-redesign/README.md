# Heidi Thompson Contemporary Fine Art — Website Redesign & Collector Experience

A luxury digital gallery and archive engineered for renowned Canadian abstract painter and author **Heidi Thompson** ([heidithompson.ca](https://heidithompson.ca/)).

---

## 🌟 Key Features

1. **Dual-Theme Gallery Environment (White Gallery / Dark Museum Vault)**
   - **White Gallery Mode:** Mimics natural daylight exhibition space, ideal for viewing high-key canvases such as *Peaceful Movement in White*.
   - **Dark Museum Mode:** Obsidian-black backdrop with warm gold radiance highlights, emphasizing the optical vibration of deep pigments and luminous fields.
   - Preserves user preference in `localStorage`.

2. **Full Bilingual Localization (English & French — EN / FR)**
   - Instant language switching across all navigation, artist statements, John Ruskin quotes, series details, John K. Grande's critical essay, and interactive contact forms.
   - Crucial for Canadian patrons (Montreal's Senvest Collection) and European collectors (Switzerland, France, Germany).

3. **Curated Gallery & Dynamic Series Filter**
   - Direct filtering for *Color Energy Fields*, *Veil Paintings*, *Colorful Patina*, and *Architectural Installations*.
   - High-resolution artwork images downloaded from the studio archives.
   - Fullscreen Lightbox Modal with zoom, complete provenance specs, and direct "Inquire to Acquire" action.

4. **Architectural Interior Room Visualizer**
   - Visualizes large-scale masterworks (66" × 90", 50" × 60", 48" × 64") in authentic spaces:
     - Minimalist Collector's Loft
     - High-Ceiling Penthouse
     - Vernon Public Art Gallery Exhibition Suite
     - Private Architectural Dining Salon

5. **Art Advisory & Commission Estimator**
   - Real-time transparent pricing calculator for private collectors and interior architects:
     - Dimensions: Small (36"×48"), Medium (48"×64"), Large (60"×72"), Monumental (66"×90"), Architectural Triptych.
     - Series Language multipliers (Color Energy, Delicate Veils, Patina, Bespoke Commission).
     - Museum float framing options (Gallery wrap, Natural Maple float, Archival American Walnut, Antiqued Champagne Gold).
     - Insured art transport (Canada, Continental US, Europe/UK, Global Air Freight).
     - One-click handoff pre-filling the inquiry form with selected specs.

6. **Curatorial & Literary Archives**
   - **Critical Essay:** Full spotlight on distinguished art critic John K. Grande's essay *"There Is No Answer — The Physics of Nature"*, drawing parallels to Mark Tobey, Jackson Pollock, Mark Rothko, and Natvar Bhavsar.
   - **Sveva Caetani Heritage:** Dedicated section for the award-winning monograph *Recapitulation: Life and Art of Sveva Caetani* (VanCity Book of Excellence Winner) and documentary film trailer.
   - **Mindfulness Handbook:** Information on Heidi's publication *Calm Focus Joy*.

7. **Bespoke Branding & Favicon**
   - Custom SVG monogram featuring `HT` ligature surrounded by a warm luminous energy aura, replacing the default registrar icon (`enomcentral.com`).

8. **Direct Coldstream Studio Inquiry & Map**
   - Direct telephone, email, and interactive Google Maps embed for 9905 Coldstream Creek Road, Coldstream, BC.

---

## 📁 Project Structure

```
heidithompson-redesign/
├── index.html              # Core bilingual portfolio & interactive gallery application
├── styles.css              # Editorial fine-art styling with dual-theme CSS variables & typography
├── script.js               # Bilingual i18n engine, theme switcher, gallery filter, room visualizer, estimator
├── favicon.svg             # Custom luxury SVG artist monogram with gold radiance
├── promotional-email.html  # Responsive HTML email pitch with audit teardown & redesign preview
├── EMAIL_OFFER.md          # Complete sales proposal with 4 targeted pitch angles & follow-up cadence
├── README.md               # Project documentation & feature index
└── images/                 # 20 authentic high-resolution artwork and installation photographs
    ├── breathing-green.jpg
    ├── brilliant-autumn-afternoon.jpg
    ├── deep-blue-infinity.jpg
    ├── earth-energy.jpg
    ├── grey-blue-veils.jpg
    ├── heidi-portrait.jpg
    ├── installation-collector-loft.jpg
    ├── installation-montreal.jpg
    ├── installation-penthouse.jpg
    ├── installation-vernon-gallery.jpg
    ├── peaceful-mind-gold.jpg
    ├── peaceful-movement-white.jpg
    ├── river-descending.jpg
    ├── silver-over-light.jpg
    ├── sky-aura.jpg
    ├── sky-veils.jpg
    ├── sunset-radiance.jpg
    ├── tapestry-grey-white.jpg
    ├── white-energy-ascending.jpg
    └── white-grey-blue-patina.jpg
```

---

## 🚀 Running the Project

Open `index.html` in any modern web browser or serve via a lightweight HTTP server:

```powershell
# Using Python
python -m http.server 8080

# Or using Node.js / npx serve
npx serve .
```

Navigate to `http://localhost:8080` to experience the live gallery, switch between English and French, and toggle between the White Gallery and Dark Museum modes.
