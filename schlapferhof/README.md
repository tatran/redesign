# Schlapferhof – Modern Website Redesign
**Ramsau am Dachstein (1.100 m Seehöhe) • Steiermark, Österreich**  
Original Source: [https://www.schlapferhof.at/](https://www.schlapferhof.at/)  
Hosts: **Familie Kunigunde & Bernhard Fuchs**

---

## 🏔️ Overview & Concept

The **Schlapferhof** is a traditional, family-friendly farm and guesthouse ("Urlaub am Bauernhof") situated in a sunny, peaceful plateau location in **Vorberg 34, 8972 Ramsau am Dachstein** in the Austrian Alps.

The original Jimdo website (from ~2010–2014) lacked modern responsiveness, international language support, intuitive booking workflows, and an engaging visual hierarchy.

This project delivers a **premium, responsive redesign** with **quad-lingual localization (German, English, Czech, Hungarian)** tailored to the primary visitor demographics of the Schladming-Dachstein region.

---

## 🌐 Quad-Lingual Localization (4 Languages)

The website features an instantaneous client-side language switcher with **237 translation keys per language** without page reload, syncing automatically with the URL query (`?lang=cs`, `?lang=hu`, `?lang=en`, `?lang=de`) and `localStorage`:

1. **Deutsch (DE)** – Primary Austrian German with regional terminology (*Seehöhe, Urlaub am Bauernhof, Etagendusche, Nächtigungsabgabe, Topfen, Loipen, Norikerpferde*).
2. **English (EN)** – Natural, engaging international travel and alpine hospitality copy.
3. **Čeština (CS)** – Complete and culturally attuned Czech translation, addressing one of the largest tourist demographics in Ramsau am Dachstein.
4. **Magyar (HU)** – Rich, idiomatic Hungarian translation, addressing the vast number of Hungarian skiers, hikers, and families visiting Styria.

---

## ✨ Key Features & Interactive Modules

### 1. 🧮 Interactive Holiday Price Calculator (`Urlaubsrechner`)
- **Configurable parameters**:
  - Room category: *Komfort-Doppelzimmer mit Dusche/WC* (€30 / €32) or *Gemütliches Zimmer mit Etagendusche* (€26 / €28)
  - Season: *Sommersaison* (June – Oct) or *Wintersaison* (Dec – April)
  - Number of adults (15+ years)
  - Number of children (under 15 years, includes 50% discount & tax exemption)
  - Number of nights
  - Optional *Noriker Pferdeschlittenfahrt* around Mount Kulmberg (11 km)
- **Real-time outputs**:
  - Accommodation subtotal including rich farm breakfast
  - Statutory Austrian local visitor tax (*Nächtigungsabgabe* €3.50 per adult/night)
  - Sleigh ride fee calculation (flat minimum €125 up to 4 persons, €25 per extra adult, €15 per child)
  - Total estimated price and cost per adult per night
- **1-Click Transfer**: "Diesen Richtpreis in Anfrage übernehmen" pre-fills the booking inquiry form and smooth-scrolls the user to the form.

### 2. 🛷 Signature Horse Sleigh & Carriage Rides (*Pferdeschlittenfahrten*)
- Dedicated spotlight on the famous romantic **11 km horse sleigh tour** around the Kulmberg, driven by Willi Royer & Bernhard Fuchs with magnificent Noriker draft horses.
- Includes route details, stopping at a rustic alpine hut for mulled wine, hot tea, and hearty Styrian snacks (duration 2–3 hours).
- Summer horse-drawn carriage tours through mountain meadows.

### 3. 🥛 100% Farm-Fresh Breakfast (*Bauernfrühstück*)
- Highlighted breakfast feature showcasing products directly from the farm: fresh whole milk, homemade quark/curd (*Topfen*), fruit yogurt, and free-range farm eggs.

### 4. 🐴 Animals & Riding Paradise for Children
- Resident animals: Noriker and Haflinger horses, gentle ponies, donkeys, cows & calves, pygmy goats, rabbits, ducks, geese, peacocks, and farm dogs.
- Guided forest pony rides & donkey treks for young children.
- Horse breeding and animal sales (*Verkaufstiere*).

### 5. ❄️ / ☀️ Interactive Summer & Winter Guide
- **Winter**: Direct step-in access to Ramsau's 220 km cross-country skiing trail network (Loipen), 70 km of designated traffic-free winter walking paths groomed across open meadows with snowcats, and the free ski bus connecting to the 4-Mountain Ski Area (Planai, Hauser Kaibling) and Dachstein Glacier.
- **Summer**: 1,000 km of hiking trails, Dachstein via ferrata routes, mountain bike circuits, and the "Ramsau Beach" leisure lake.

### 6. 🗺️ Interactive Leaflet.js Alpine Map
- Interactive map centered on **Vorberg 34, 8972 Ramsau am Dachstein** (47.40386° N, 13.66528° E).
- Custom markers for Schlapferhof, Kulmberg Sleigh Route, Cross-Country Trail Access, Ramsau Beach, and the Dachstein Glacier Cable Car.
- Driving directions for visitors arriving from Germany/Salzburg, Vienna/Graz/Hungary, and the Czech Republic.

### 7. 📸 Authentic Photo Gallery with Fullscreen Lightbox
- 15+ curated high-resolution original photographs from the farm.
- Filter tabs: *All*, *Hof & Zimmer*, *Pferdeschlitten*, *Tiere & Reiten*, *Sommer & Winter*.
- Keyboard navigation (Escape, Left, Right) and mobile touch-friendly navigation.

### 8. 📝 Booking Inquiry Form
- Direct, friendly inquiry form with arrival/departure dates, room selection, guest counts, and personal requests.
- Client-side validation, anti-spam honeypot, and friendly confirmation modal.

### 9. 📱 Mobile Bottom Quick-Action Bar
- Sticky bar on smartphones for instantaneous 1-tap phone calls (`tel:+43368781838`) or opening the inquiry form.

---

## 📁 Project Structure

```text
schlapferhof-redesign/
├── css/
│   └── style.css            # Custom Alpine hospitality design system (responsive, CSS custom properties)
├── js/
│   ├── app.js               # Core application logic (calculator, map, gallery lightbox, modals, tabs)
│   └── translations.js      # Quad-lingual dictionary (DE, EN, CS, HU) with 237 keys per language
├── images/                  # Real authentic farm photography (high-resolution original assets)
│   ├── hero-farm.jpg
│   ├── farm-house-summer.jpg
│   ├── farm-room-double.jpg
│   ├── sleigh-winter-noriker.jpg
│   ├── sleigh-winter-panoramic.jpg
│   ├── sleigh-winter-group.jpg
│   ├── pony-riding-forest.jpg
│   ├── donkey-riding.jpg
│   ├── farm-animals-calf.jpg
│   ├── farm-animals-horse.jpg
│   ├── farm-animals-goats.jpg
│   ├── farm-animals-rabbits.jpg
│   ├── farm-animals-peacock.jpg
│   ├── winter-crosscountry-loipe.jpg
│   ├── winter-snow-plateau.jpg
│   ├── winter-panorama-mountains.jpg
│   ├── summer-dachstein-panorama.jpg
│   ├── summer-hiking-meadow.jpg
│   ├── summer-trail-view.jpg
│   ├── hosts-fuchs-portrait.jpg
│   └── ... (60+ total original images)
├── raw_data/                # Scraped original HTML, extracted text, and conversion scripts
├── favicon.svg              # Custom Alpine farm emblem favicon
├── index.html               # Semantic HTML5 master document
└── README.md                # Project documentation
```

---

## 🚀 How to Run / Preview Locally

To preview the website in any browser:

```powershell
# Using Python's built-in HTTP server:
cd C:\VS\AI\AI_School\schlapferhof-redesign
python -m http.server 8080

# Or using Node.js http-server:
npx serve .
```

Then navigate to `http://localhost:8080` in your web browser.

You can also test the different language views directly via URL parameters:
- `http://localhost:8080/?lang=de` (Deutsch)
- `http://localhost:8080/?lang=en` (English)
- `http://localhost:8080/?lang=cs` (Čeština)
- `http://localhost:8080/?lang=hu` (Magyar)
