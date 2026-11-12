# Búvís ehf. - Modern Agricultural Web Platform Redesign

A high-performance, modern, accessible, and responsive redesign of **[buvis.is](https://buvis.is/)** — Iceland's pioneering agricultural machinery, fertilizer, and farm supply company based in Akureyri since January 2006.

---

## 🌟 Highlights & Key Enhancements

### 1. Dual Theme System (Light + Dark Mode)
- **Nordic Daylight Light Mode**: Crisp, lush agricultural tones featuring rich meadow green (`#196939`), warm harvest amber (`#d97706`), clean polar white surfaces, and deep basalt text.
- **Volcanic Basalt Dark Mode**: High-contrast, low-eye-strain dark interface (`#070d13`, `#0f1823`, `#162232`) with luminous emerald green (`#22c55e`) and glowing amber accents, specifically designed for early morning or dark winter night operations by farmers and machine operators.
- **Persistent State**: Theme choice automatically saves to `localStorage` and respects the visitor's OS preference (`prefers-color-scheme`).

### 2. Dual Language Architecture (Íslenska 🇮🇸 + English 🇬🇧)
- Complete reactive translation engine covering all headlines, navigation menus, product badges, feature pillars, interactive calculators, modal dialogs, and contact forms.
- Switches instantaneously without page reloads and persists preference in `localStorage`.

### 3. Interactive Agricultural Calculators (Unique Value Add)
- **🌾 Silage Wrap & Net Calculator (Reiknivél fyrir rúlluplast & net)**:
  - Input planned bales (50 to 3,000 bales).
  - Select layers (4, 6, or 8 layers).
  - Select bale diameter (120 cm standard vs 130 cm heavy).
  - Outputs exact spools of **ASPLA / Barbier 750mm stretch film** and rolls of **Tama 3000m Netwrap** needed, with direct quote integration.
- **🌱 2026 Fertilizer Demand Planner (Áburðaráætlun)**:
  - Input cultivated area in hectares (5 to 250 ha).
  - Select crop/land use: *Hay/Silage (2 cuts)*, *Pasture grazing*, or *Cereals/Barley*.
  - Choose application intensity (*Moderate* vs *Intensive*).
  - Calculates total metric tons, required 600 kg big bags, and recommends optimal blends like **YaraBela KRAFTUR 27** or **YaraMila Opti-Grass**.
- **🏷️ Official Sheep Ear Tag Order Form & Live Preview (Panta Lambamerki)**:
  - Reactive visual preview of sheep ear tags with holding code (Búsnúmer), barcode, and sequential numbering.
  - Interactive color picker (Yellow, Green, Blue, Red, White).
  - Tag type selector with dynamic **RFID chip** indicator.

### 4. Interactive Product Catalog (120 Authentic Products)
- Comprehensive catalog extracted directly from Búvís live database across 8 core categories:
  - **Áburður** (Mineral Fertilizers)
  - **Rúlluplast & Net** (Stretch Film & Netwrap)
  - **Hey- og jarðvinnsla** (Mowers, Tedders, Rakes, Harrows)
  - **Vagnar og kerrur** (Dump trailers, machine haulers, utility trailers)
  - **Haugtæki** (Slurry pumps, mixers, separators)
  - **Háþrýstidælur** (Official Kränzle Germany Washers)
  - **Sauðfjárbúnaður** (Ear tags, lamb milk, hurdles)
  - **Rekstrarvörur** (Chains, tires, Morris oils, Bekina boots)
- **Live Search**: Instant debounced filtering with `/` keyboard shortcut.
- **Brand Filtering**: Filter by Kränzle, SaMASZ, Palmse, TIKI, Bauer, Aspla, Barbier, Tama, Rauch, Metal-Fach, Morris Lubricants, etc.
- **Quick View Modal**: Side-by-side technical specs, delivery status, and one-click quote requests.

### 5. Slide-Out Quote Basket Drawer (Tilboðskarfa)
- Allows farmers and contractors to build a custom list of machinery, implements, and bulk supplies.
- Persists across sessions in `localStorage`.
- Direct quote request submission with farm name and telephone contact.

### 6. Interactive Leaflet Map
- Embedded OpenStreetMap Leaflet map centered directly on Búvís headquarters at **Grímseyjargata 1, 600 Akureyri, Iceland** (`[65.6888, -18.0878]`).
- Includes branded marker, opening hours, direct phone dialing, and email links.

---

## 📁 Project Structure

```
buvis-redesign/
├── index.html              # Main application page
├── README.md               # Documentation and technical guide
├── css/
│   └── style.css           # Modern design system & responsive layout
├── js/
│   ├── main.js             # Theme, language, catalog, calculator logic
│   ├── products-data.js    # 120 authentic products with localized metadata
│   └── translations.js     # Complete IS / EN bilingual dictionary
├── images/                 # 70+ downloaded high-resolution images & logos
├── raw_data/               # Scraped original HTML and JSON files
└── scripts/                # Node.js data extraction & verification utilities
```

---

## 🚀 Verification & Testing

To test the redesign locally:
1. Open `buvis-redesign/index.html` in any modern web browser, or serve via any static HTTP server (e.g. `npx serve buvis-redesign`).
2. Test Theme Toggle: Click the moon/sun button in the header. Verify all surfaces, text colors, and contrast shift seamlessly.
3. Test Language Toggle: Click `IS 🇮🇸` / `EN 🇬🇧`. Verify all sections, labels, calculators, and product descriptions update immediately.
4. Test Calculators: Adjust the sliders on the Wrap, Fertilizer, and Ear Tag tabs to verify real-time recalculations.
5. Test Product Explorer: Filter by brand or category, type in the search bar, click "Skoða nánar" (Quick View), and click "Bæta í tilboð" to populate the Quote Basket.
