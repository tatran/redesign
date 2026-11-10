# Redizajn webu KOVO SERVICE s.r.o. (https://www.kovo-service.sk/)

Tento projekt predstavuje moderný, vysoko funkčný a prémiový redizajn webovej prezentácie spoločnosti **KOVO SERVICE s.r.o.** — univerzálnej kovovýroby a zámočníctva so sídlom a prevádzkou v Pezinku.

Projekt prenáša pôvodnú statickú stránku z prelomu tisícročí (HTML 4.01, tabuľkový/fontový layout, Windows-1250 kódovanie) do moderného štandardu digitálnej identity priemyselného remesla pre rok 2026.

---

## 🎨 Vizuálna a technologická identita

- **Industriálna estetika & remeselná precíznosť**:
  - Hlboký bridlicový/titánový základ (`slate-950` / `slate-900`) doplnený o teplú oranžovú farbu vyhne a zváračského oblúka (`#ea580c`, `#f97316`) a technickú oceľ.
  - Prémiová typografia: **Plus Jakarta Sans** pre dokonalú čitateľnosť a **Space Grotesk** pre technické nadpisy a čísla.
- **Plná podpora Svetlého (Light) aj Tmavého (Dark) režimu**:
  - Okamžitý prepínač slnko/mesiac v záhlaví.
  - Automatické ukladanie preferencie do `localStorage`.
  - Svetlý režim: Čisté, technické, snehovo biele a svetlosivé pozadie s vysokým kontrastom.
  - Tmavý režim: Industriálny workshop look so svetelnými radiálnymi efektmi a akcentmi zvarov.
- **Bilingválna podpora (Slovenčina 🇸🇰 / Nemčina 🇦🇹 🇩🇪)**:
  - Pôvodný web obsahoval podstránku `deutch.html` zameranú na rakúskych a nemeckých klientov (Pezinok leží len 40 minút od rakúskych hraníc).
  - Redizajn prináša integrovaný prepínač jazykov SK / DE bez nutnosti opustiť stránku.

---

## 🚀 Porovnanie: Pôvodný web vs. Nový moderný redizajn

| Parameter | Pôvodný web (HTML 4.01) | Nový moderný redizajn (2026) |
| :--- | :--- | :--- |
| **Dizajn & Layout** | Čierne pozadie, modrý text, `<font face="Tahoma">`, nezarovnané obrázky | Moderný responzívny layout, flexbox/grid, jemné tiene a zaoblenia, svetlý & tmavý režim |
| **Responzivita** | Žiadna (desktop-only, fixná šírka, nutnosť zoomovania na mobile) | 100% responzívny pre mobily, tablety, laptopy aj 4K monitory |
| **Kódovanie & SEO** | Windows-1250 s diakritickými chybami, chýbajúce OpenGraph a meta tagy | Moderné UTF-8, sémantický HTML5, OpenGraph meta dáta pre sociálne siete, schema.org štruktúra |
| **Cenotvorba & Dopyt** | Len pasívny textový oznam a emailový odkaz | **Interaktívny cenový konfigurátor** s okamžitým prepočtom ceny podľa rozmeru, materiálu a povrchovej úpravy |
| **Galéria výrobkov** | 82 jednotlivých HTML súborov pre každý jeden obrázok zvlášť | **Jednotná filtrovateľná galéria** (Brány, Zábradlia, Schody, Markízy, Atyp) s detailným modálom / lightboxom |
| **Katalógy na stiahnutie** | Obyčajné modré hypertextové odkazy | Prehľadné moderné karty s ikonami, veľkosťou súboru a tlačidlami na stiahnutie všetkých 5 PDF katalógov |
| **Architektúra služieb** | Zmiešané účtovníctvo na konci stránky | Jasne oddelená **Ekonomická divízia** s vlastnou kartou, zoznamom služieb a dedikovaným kontaktom |
| **Kontakt a lokalita** | Statický text a obrázok výrezu z mapy | Klikateľné volania, WhatsApp chat, vstavaná Google Mapa s navigáciou do dielne na Šenkvickej ceste |

---

## 🛠️ Kľúčové moduly a funkcie redizajnu

### 1. Interaktívny cenový konfigurátor (Price Estimator)
- Umožňuje zákazníkovi nakonfigurovať svoj dopyt v 5 jednoduchých krokoch:
  1. **Typ výrobku**: Posuvná samonosná brána, krídlová brána, zábradlie, točené schody, markíza/strieška, mreže a atypické výrobky.
  2. **Materiál**: Konštrukčná oceľ S235, brúsená nerezová oceľ AISI 304, kombinácia s drevom/lamelami, kombinácia s bezpečnostným kaleným sklom (VSG/ESG).
  3. **Rozmery**: Plynulý posuvník od 1 m do 15 m s okamžitým zobrazením.
  4. **Povrchová úprava**: Základný náter, žiarové zinkovanie v kúpeli, práškový komaxit RAL, prémiový duplexný systém (zinok + prášok), saténový nerez.
  5. **Doplnky**: Montáž na kľúč, automatický pohon s diaľkovým ovládaním, zameranie technikom, doprava.
- Generuje okamžitý realistický cenový odhad s možnosťou prekliku a predvyplnenia kontaktného formulára.

### 2. Filtrovateľná galéria realizácií & Detailný Lightbox
- Okamžité filtrovanie podľa kategórií:
  - *Všetko*, *Brány & Vstupy*, *Zábradlia & Schody*, *Markízy & Mreže*, *Iné výrobky na mieru*.
- Karty obsahujú materiálové tagy (Oceľ, Nerez, Komaxit, Sklo) a kliknutím otvárajú modálne okno s technickým popisom a preklikom do kalkulačky.

### 3. Technológie & Povrchové úpravy
- Samostatný vzdelávací blok pre zákazníkov vysvetľujúci dôležitosť antikoróznej ochrany:
  - Pieskovanie a tryskanie na Sa 2.5
  - Žiarové zinkovanie pri 450 °C (životnosť 30–50 rokov)
  - Práškové lakovanie KOMAXIT (kompletný vzorkovník RAL)
  - Brúsenie a leštenie nerezu (K240/K320 a zrkadlový lesk)

### 4. PDF Katalógové centrum (Download Center)
- Integrované priame odkazy na oficiálne firemné katalógy:
  - Kompletný katalóg výrobkov (4.88 MB)
  - Katalóg kovovýroba brán (2.16 MB)
  - Katalóg zábradlia a schody (1.21 MB)
  - Katalóg markízy a mreže (412 KB)
  - Katalóg iné výrobky a atypy (1.11 MB)

### 5. Doplnková divízia: Účtovníctvo & Mzdy
- Zohľadňuje špecifickú organizačnú štruktúru KOVO SERVICE s.r.o. — popri zámočníctve poskytuje vedenie účtovníctva (Martina Toráčová, 0905 381 669). Táto služba je prezentovaná profesionálne v samostatnom elegantnom bloku.

### 6. Kontaktné centrum & Geonutnosť
- Zreteľné rozdelenie kontaktov:
  - **Dielňa a kovovýroba**: Peter Hrachovský (+421 905 764 251, priamy WhatsApp a volanie)
  - **Sídlo spoločnosti**: L. Novomeského 13, 902 01 Pezinok
  - **Dielňa & prevádzka**: Šenkvická cesta 11, 902 01 Pezinok
  - **IČO**: 46 082 395 | **DIČ**: 2023227756
- Plne funkčná interaktívna Google Mapa s navigáciou priamo pred bránu prevádzky.

---

## 💻 Spustenie a lokálny náhľad

Web nevyžaduje žiadny zložitý build proces ani inštaláciu balíčkov. Stačí otvoriť `index.html` v ľubovoľnom modernom prehliadači:

```bash
# Otvorenie v prehliadači cez PowerShell
Start-Process .\kovo-service-redesign\index.html
```

Alebo cez lokálny HTTP server (napríklad pomocou Node.js npx serve alebo VS Code Live Server):

```bash
cd kovo-service-redesign
npx serve .
```
