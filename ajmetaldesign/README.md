# Redizajn webu AJ Metal Design a.s. (https://www.ajmetaldesign.sk/)

Tento projekt predstavuje moderný, prémiový a vysoko funkčný redizajn digitálnej prezentácie akciovej spoločnosti **AJ Metal Design a.s.** — popredného stredoeurópskeho výrobcu kovového nábytku, šatňových systémov, dielenského vybavenia a priemyselných skladových regálov so sídlom a výrobným areálom v **Hrnčiarovciach nad Parnou** pri Trnave.

Spoločnosť je kľúčovým výrobným závodom a členom nadnárodnej švédskej skupiny **AJ Produkter AB** (AJ Group), ktorá pôsobí v 20 krajinách Európy.

---

## 🎨 Vizuálna a technologická identita

- **Industriálna precíznosť & škandinávsky minimalizmus**:
  - Hlboký bridlicovo-titánový základ (`steel-950` / `steel-900`) v kombinácii s energickou švédskou korporátnou oranžovou farbou (`#f97316`, `#ea580c`), chladnou technickou oceľou a moderným skleneným efektom (glassmorphism).
  - Prémiová typografia: **Plus Jakarta Sans** pre dokonalú ergonómiu čítania na displejoch a **Space Grotesk** pre technické nadpisy a kľúčové čísla.
- **Svetlý (Light) aj Tmavý (Dark) industriálny režim**:
  - **Predvolený svetlý režim (Light mode)**: Čisté, presvetlené technické prostredie s vysokým kontrastom.
  - Okamžitý prepínač slnko / mesiac v záhlaví pre prechod do grafitového tmavého režimu (Dark mode).
  - Automatické ukladanie preferencie používateľa do `localStorage`.
- **Bilingválna podpora (Slovenčina 🇸🇰 / English 🇬🇧)**:
  - Kompletné preklady celého obsahu, nadpisov, benefitov, produktov, kalkulátora aj kontaktov bez nutnosti znovunačítania stránky.

---

## 🚀 Porovnanie: Pôvodný web vs. Nový moderný redizajn (2026)

| Parameter | Pôvodný web (Umbraco / .NET) | Nový moderný redizajn (2026) |
| :--- | :--- | :--- |
| **Dizajn & UI/UX** | Zastaraný layout, strohý textový obsah, minimálna interaktivita | Prémiový industriálny dizajn, mikrointerakcie, plynulé animácie, 3D hover karty |
| **Responzivita** | Základná responzivita, neoptimálne zobrazenie tabuliek a fotografií | 100% mobilná adaptácia s vysúvacím bočným drawer menu a optimalizovanými dotykovými prvkami |
| **Prezentácia produktov** | Žiadny produktový katalóg (iba všeobecné zmienky v texte) | **Interaktívny B2B katalóg produktov** s filtrami (Šatne, Kancelária, Dielňa, Sklad & Regály) a technickými parametrami |
| **Cenotvorba & Dopyt** | Len statické telefónne čísla a email | **Interaktívny B2B cenový konfigurátor** s okamžitým prepočtom ceny podľa počtu kusov, zámkov, RAL farieb a montáže |
| **Kariéra a nábor (HR)** | Statický dlhý text bez možnosti priameho odoslania žiadosti | **Interaktívne kariérne centrum** s prehľadnými benefitmi, kartami pozícií a modálnym oknom na odoslanie žiadosti/CV |
| **História firmy** | Suchý odrážkový zoznam od roku 1955 | **Interaktívna vizuálna časová os (1955–2026)** s archívnymi logami ROZVOJ VD, metal design slovakia a AJ Group |
| **Výrobné technológie** | Iba stručný zoznam značiek bez fotiek a detailov | **Prehliadka Priemyslu 4.0**: CNC vysekávanie Trumpf, ohýbanie Salvagnini, zváracie roboty ABB/FANUC a linky KOMAXIT |
| **Certifikácie a normy** | Malé ikony bez kontextu | **Karty medzinárodných ISO certifikátov** (9001, 14001, 45001, 50001) a vyhlásení o zhode s auditnými známkami 3EC IMS |
| **Multimédiá a galéria** | Iba 3 obrázky v galérii | **Filtrovateľná galéria s fullscreen Lightboxom** a autentickými fotografiami výrobného závodu a strojov |
| **Kontaktné centrum** | Zmiešané kontakty bez rozdelenia procesov | **Prehľadný adresár 6 oddelení** (Obchod, Nákup, Sklad, Fakturácia, HR, Whistleblowing), fakturačné údaje a Google Mapa |

---

## 🛠️ Kľúčové moduly a funkcie redizajnu

### 1. Interaktívny B2B konfigurátor vybavenia (Price Estimator)
Umožňuje firemným zákazníkom, facility manažérom a architektom nakonfigurovať dopyt v 5 krokoch:
1. **Produktová rada**: Šatňové skrine, kancelársky nábytok, dielenské ponky alebo certifikované regály ZU-4.
2. **Rozsah / Počet modulov**: Plynulý posuvník od 1 do 100+ kusov s automatickými objemovými zľavami (5% pri 20+ ks, 10% pri 50+ ks, 18% pri 100+ ks).
3. **Uzamykací systém**: Cylindrický zámok, mechanický kódový zámok alebo bezkontaktný RFID Smart čip.
4. **Povrchová úprava**: Práškový lak KOMAXIT (RAL 7035 svetlosivá, RAL 7016 antracit, RAL 5010 modrá, RAL 3020 červená).
5. **Doplnkové služby**: Doprava priamo do objektu a odborná montáž na kľúč vrátane nivelácie a revízie.
- Vypočítava okamžitý odhad celkovej ceny a jednotkovej ceny za kus.
- Tlačidlo *„Vyžiadať oficiálnu ponuku“* otvorí predvyplnený dopytový formulár.

### 2. B2B Katalóg produktov & Riešení
- Filtrovanie podľa kategórií: *Všetky*, *Šatňové skrine & Boxy*, *Kancelársky nábytok*, *Dielňa & Ponky*, *Skladové & Paletové regály*.
- Karty obsahujú technické špecifikácie (rozmery, nosnosť police, odolnosť, typy dvierok).
- Každá karta umožňuje jedným kliknutím preniesť produkt do konfigurátora.

### 3. Priemysel 4.0 & Strojový park
- Detailná prezentácia špičkového technologického vybavenia:
  - Valcovacie a profilovacie linky **SWAH / DIBALEX / GASPARINI**
  - Pozdĺžne a priečne delenie zvitkov **IMAL**
  - Automatické CNC ohýbacie centrum **Salvagnini** (panel bender)
  - CNC vysekávacie a formátovacie centrum **Trumpf**
  - Robotické zváracie bunky **ABB** a **FANUC**
  - 2 kontinuálne linky práškového nanášania KOMAXIT s nanokeramickou predúpravou

### 4. Vizuálna história spoločnosti (1955 – 2026)
- 70+ rokov strojárskej tradície v trnavskom regióne:
  - **1955**: Založenie výrobného družstva ROZVOJ VD
  - **1964**: Začiatok výroby kovového nábytku (obrat 1,6 mil. €, 186 zamestnancov)
  - **1994**: Začiatok strategickej spolupráce so švédskou AJ Produkter AB
  - **2000**: Investícia 8,7 mil. € a vybudovanie moderného areálu v Hrnčiarovciach nad Parnou
  - **2004**: Zmena mena na metal design slovakia a.s. a investície ďalších 10 mil. €
  - **2016**: Transformácia na AJ Metal Design a.s.
  - **Súčasnosť (2026)**: Areál 22 000 m², obrat 16+ mil. €, spracovanie 9 000 ton ocele ročne a export do 20 krajín.
- Prezentácia historických logotypov ilustrujúcich kontinuitu značky.

### 5. Medzinárodné certifikáty (Kvalita, Ekológia, BOZP, Energetika)
- **ISO 9001 : 2015** — Systém manažérstva kvality
- **ISO 14001 : 2015** — Systém environmentálneho manažmentu
- **ISO 45001 : 2018** — Manažérstvo bezpečnosti a ochrany zdravia pri práci
- **ISO 50001 : 2018** — Systém energetického manažérstva
- Oficiálne vyhlásenia o zhode pre kancelársky nábytok, policové a konzolové regály ZU-4.

### 6. Kariérne centrum & Employer Branding
- Dôraz na stabilitu, kmeňový stav a moderné pracovné prostredie (žiadna monotónna pásová práca).
- Zoznam firemných benefitov: 13./14. plat, stravné 6,60 €, príspevok na 3. pilier DDS, vernostné bonusy, jubileá, vitamínové balíčky a športové dni.
- Aktuálne otvorené pozície:
  1. **Strojárenský pracovník – oddelenie montáže** (3 zmeny, vhodné na zaškolenie)
  2. **Údržbár – elektrikár / mechatronik** (Vyhl. §21 / §22, vhodné aj pre absolventov)
- Interaktívne modálne okno pre odoslanie žiadosti s kontaktnými údajmi a popisom praxe priamo na HR úsek.

### 7. Kontaktné centrum & Logistika
- Prehľadný adresár 6 firemných divízií s priamymi telefónnymi linkami a emailami:
  - **Zákaznícky servis & Predaj**: +421 915 300 998, sales@ajmetaldesign.sk
  - **Nákup & Dodávatelia**: +421 905 248 199, dodavatelia@ajmetaldesign.sk
  - **Oddelenie ľudských zdrojov (HR)**: +421 907 333 553, praca@ajmetaldesign.sk
  - **Príjem tovaru & Sklad**: +421 918 491 824
  - **Fakturácia**: dodavatelia@ajmetaldesign.sk, IBAN: SK53 0200 0000 0032 7667 6259
  - **Oznamovanie protispoločenskej činnosti**: podnety@ajmetaldesign.sk
- Kompletné identifikačné údaje: IČO: 31449557, DIČ: 2020392308, IČ DPH: SK2020392308.
- Integrovaná interaktívna Google Mapa so sídlom v Hrnčiarovciach nad Parnou (Dlhé lúky 2).

---

## 💻 Spustenie a lokálny náhľad

Webová stránka je kompletne pripravená na okamžité spustenie. Nevyžaduje žiadne komplikované buildovacie nástroje ani inštaláciu závislostí.

### Otvorenie priamo v prehliadači:
```powershell
Start-Process .\ajmetaldesign-redesign\index.html
```

### Spustenie cez lokálny web server:
```powershell
cd ajmetaldesign-redesign
npx serve .
```
Alebo cez VS Code rozšírenie **Live Server**.
