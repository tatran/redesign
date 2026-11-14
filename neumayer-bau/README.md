# Neumayer BAU Ges.m.b.H. – Multilingual Website Redesign

Interactive static web redesign prototype for **Neumayer BAU Ges.m.b.H.** (Fellnergasse 101a, A-7083 Purbach am Neusiedler See, Austria), replacing `https://www.neumayer-bau.at/`.

## Key Features Implemented

- **4 Full Languages (`DE` / `EN` / `HU` / `CS`)**: German default plus English, Hungarian, and Czech covering all 224 UI dictionary keys, 11 projects, 9 history milestones, 5 team members, 3 job postings, map popups, contact forms, and legal modals.
- **Light (Default) + Dark Theme**: Instant toggle persisted in `localStorage`, engineered with architectural blueprint grid, brand emerald (`#0f5c3e`), brickwork accent (`#c94426`), and crisp logo framing in Dark Mode.
- **Accessible Semantics Instead of Flattened Images**: Replaces static text-in-image graphics from the live site (`eigenschaft.jpg`, `eigenschaft3.jpg`, `Leistungen.jpg`, `timeline-1..3-h.png`) with clean, indexable, translatable HTML sections.
- **Interactive Construction Cost Estimator (`#estimator`)**: Configurable category, completion scope (`Rohbau`, `Belagsfertig`, `Schlüsselfertig`), area (`40–1200 m²`), region (`Burgenland`, `NÖ`, `Wien`), and optional add-ons with non-binding budget/timeline guidance and 1-click transfer into the inquiry form.
- **Filterable Reference Portfolio + Lightbox (`#projects`)**: All 11 verified company projects filterable across Residential, Commercial, Public, and Hospitality, each opening in an interactive modal to toggle between clean photo and project collage.
- **Interactive Map & Careers (`#careers`, `#contact`)**: Leaflet map centered on Purbach with clickable service-area pins (Eisenstadt, Neusiedl/See, Bruck/Leitha, Fischamend, Himberg, Vienna), expandable KV-salary job cards (`Techniker`, `Bauleiter`, `Maurer`), dual-tab Inquiry/Application form, and full Austrian ECG/WKO `Impressum` + `DSGVO` modals.

## Verification

- `node scripts/verify_site.js` — checks 100% translation key parity across `de/en/hu/cs`, HTML `data-i18n*` bindings, and presence of all local image assets (`images/`).
- Email proposal template prepared in `promotional-email.html` (German, tailored to `office@neumayer-bau.at`).
