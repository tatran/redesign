# BUGÁR, s.r.o. – Website & Social Media Audit

- **Original URL**: https://bugarsro.sk/
- **Social Sources**:
  - Facebook: https://www.facebook.com/bugarsro
  - Instagram: https://www.instagram.com/bugarsro/
  - YouTube: https://www.youtube.com/@bugar_sro
- **Company**: BUGÁR, s.r.o.
- **Heritage**: Sme tu pre vás už 33 rokov (*Water · Heating · Gas*)
- **Showroom, Store & Warehouse (Šamorín)**: Bratislavská 89/21, 931 01 Šamorín (`48.03195° N, 17.30710° E`)
- **Registered HQ (Dunajská Streda)**: Hlavná 1538/31, 929 01 Dunajská Streda (`47.98962° N, 17.62856° E`)
- **Phone**: +421 910 144 022
- **Email**: eshop@bugarsro.sk
- **Opening Hours (Šamorín)**:
  - Warehouse (*Sklad*): Mon–Fri 07:00–18:00 | Sat 08:00–12:00 | Sun Closed
  - Store & Bathroom Studio (*Predajňa*): Mon–Fri 08:00–18:00 | Sat 08:00–12:00 | Sun Closed
- **Legal Identifiers**: IČO 36264482 | DIČ 2021905039 | IČ DPH SK2021905039 | OR Okresný súd Trnava, oddiel Sro, vložka č. 15306/T

## Issues Observed on Original Site (`bugarsro.sk`) & Social Audit
1. **Broken Backend APIs (502 Bad Gateway)**: `/topBanner-api`, `/pages-api`, `/products-api`, `/gallery-api` fail to load on the live SvelteKit frontend, leaving `SLUŽBY`, `TOP PRODUKTY`, `NOVINKY`, and `AKCIE` completely blank white space.
2. **Slovak-Only UI**: No German (`de`), English (`en`), or Hungarian (`hu`) localization despite operating in Šamorín & Dunajská Streda (Žitný ostrov / Csallóköz, tri-border proximity to Bratislava, Győr, and Vienna).
3. **Disconnected Social Proof**: Rich recent work on Facebook (`@bugarsro`, 950 followers) and Instagram (`@bugarsro`, 136 followers — walk-in showers, underfloor heating manifolds, stone vessel sinks, 45° mitered Geberit installations, showroom exhibitions) is absent from the website.
4. **UI Typos & UX Friction**: Typo `"Registácia"` in registration link, `"Súhrn ojednávky"` in checkout, `"IČDIČ"` typo in billing form, dead contact/about CMS links returning empty containers, and no interactive heating or bathroom renovation estimator.

## Redesign Solutions Implemented
1. **Quad-Lingual Localization (`SK` / `DE` / `EN` / `HU`)**: Instant zero-reload switching synced with `?lang=` URL query and `localStorage`.
2. **Dual Architectural Theme (Light & Dark Mode)**: Crisp architectural daylight mode with optional Charcoal Engineering dark mode, anchored around BUGÁR's water cyan (`#0ea5e9`), heating ember (`#ef4444`), and gas amber (`#f59e0b`) palette.
3. **Complete 5 Service Pillars + Interactive Estimators**: Covers *Montážne služby*, *Servisné služby*, *Kúpeľňové štúdio & 3D vizualizácie*, *Realizácie na kľúč*, and *Nehnuteľnosti*, paired with live Heating & Bathroom Turnkey Calculators.
4. **Authentic Social Craftsmanship Portfolio + Lightbox**: 15 real cropped photographs from Facebook & Instagram with category filters and full captions.
5. **14-Category E-Shop & Quick-Quote Basket Drawer**: All official BUGÁR category icons, 6 verified partner brand logos, search/filter, and persistent quote cart with B2B `IČO / DIČ / IČ DPH` support.
6. **Dual-Branch Interactive Map**: Leaflet map marking Šamorín Showroom & Dunajská Streda HQ with exact warehouse & store hours.
