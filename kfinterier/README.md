# Redizajn kontaktnej stránky KF-interiér s.r.o.
**Pôvodná stránka:** [https://vyroba-nabytku-bratislava-kfinterier.sk/kontakt/](https://vyroba-nabytku-bratislava-kfinterier.sk/kontakt/)

Tento projekt prináša moderný, vysoko konverzný a remeselne ladený redizajn kontaktnej a dopytovej stránky pre slovenskú stolársku spoločnosť **KF-interiér s.r.o.** so sídlom a vlastnou dielňou v Limbachu (Bratislavský kraj).

---

## 🌍 Multijazyčná podpora (5 jazykových verzií)

Stránka je plne lokalizovaná a umožňuje okamžité prepínanie medzi 5 jazykmi priamo v hlavičke (desktopové dropdown menu s vlajkami a skratkami) aj v mobilnom menu:

1. 🇸🇰 **Slovenčina (SK)** – Predvolený jazyk
2. 🇬🇧 **English (EN)** – Pre medzinárodných klientov, expatov a architektov
3. 🇩🇪 **Deutsch (DE)** – Pre klientov z Rakúska, Nemecka a prihraničných oblastí (Hainburg, Kittsee, Wolfsthal, Viedeň)
4. 🇭🇺 **Magyar (HU)** – Pre klientov z južného Slovenska, Žitného ostrova a Maďarska (Rajka, Mosonmagyaróvár, Győr)
5. 🇮🇹 **Italiano (IT)** – Pre milovníkov talianskeho interiérového dizajnu a talianskych partnerov

### ⚡ Vlastnosti jazykového systému:
- **Okamžité dynamické prepínanie bez reloadu**: Všetky texty, tlačidlá, nadpisy, zástupné symboly (placeholders), formulárové kroky, rekapitulácia, firemné údaje aj FAQ sa prekladajú v reálnom čase cez centrálnu JSON maticu.
- **Perzistencia voľby**: Vybraný jazyk sa ukladá do `localStorage` (`kf_lang`) a je možné ho aktivovať aj cez URL parameter (napr. `?lang=de`, `?lang=en`, `?lang=hu`, `?lang=it`).

---

## 🎨 Vylepšenia layoutu a vizuálnej štruktúry

Na základe spätnej väzby boli vykonané kľúčové úpravy rozloženia prvkov:

1. **Odstránenie zalamovania v navigácii (Zero awkward wrapping)**:
   - Položka `Kontakt & Dopyt` aj ostatné navigačné odkazy (`Výroba nábytku`, `Služby & Postup`, `Galéria realizácií`) majú definované `whitespace-nowrap`, responzívne rozostupy (`gap-5 xl:gap-8`) a elegantný spodný indikátor namiesto lámaného orámovania.
2. **Kompaktný a vyvážený pravý blok hlavičky**:
   - Vlajkový dropdown selektor jazyka (`🇸🇰 SK ▾`).
   - Kompaktný kruhový prepínač svetlého/tmavého režimu (`w-10 h-10`) so slnkom/mesiacom, ktorý šetrí priestor a nepreťažuje menu.
   - Pútavé tlačidlo nezáväzného dopytu s jemným hover efektom.
3. **Čistý a presvetlený Svetlý režim (Default Light Theme)**:
   - Stránka sa štandardne otvára v príjemnom remeselnom svetlom tóne (teplý dub, bridlicová biela, vysoký kontrast textu), s možnosťou prepnutia na luxusný nočný režim.
4. **Responzívny mobilný drawer**:
   - Mobilné menu obsahuje dedikovanú mriežku 5 vlajok pre zmenu jazyka, prepínač témy a priame tlačidlá na vytočenie výroby a odoslanie dopytu.

---

## 🛠️ Zahrnuté sekcie a funkcie

1. **Vrchná lišta (Top Announcement Bar)**:
   - Pulzujúci zelený odznak dostupnosti: *Aktuálne prijímame zákazky*
   - Oblasť pokrytia (Bratislava, Pezinok, Limbach, Senec...)
   - Rýchle telefónne linky na Výrobu a Zameranie.
2. **Hero sekcia**:
   - Remeselný headline: *Z domu vám vytvoríme skutočný domov.*
   - 4 odznaky dôvery (Cenová ponuka do 24h, Laserové zameranie u vás, Kovanie Blum/Hettich s doživotnou zárukou, Vlastná doprava).
   - Karta reálnej dielne s fotografiou vozového parku a priamymi tlačidlami.
3. **3 špecializované kontaktné karty**:
   - **Výroba & Dielňa** (Kamil Fraňo, +421 903 224 896, WhatsApp chat s predvyplnenou správou).
   - **Zameranie & 3D Návrhy** (+421 903 451 120, rezervácia obhliadky u klienta).
   - **Email & Projekty** (kamil.frano@gmail.com, priamy mailto preklik a kopírovanie jedným klikom).
4. **Interaktívny 3-krokový konfigurátor dopytu**:
   - Krok 1: Výber nábytku (Kuchyňa, Skriňa, Obývačka, Kúpeľňa, Spálňa, Schody/Dvere, Terasa, Celý interiér).
   - Krok 2: Štádium projektu (Projekt od architekta, Potrebujem návrh, Holobyt) + preferované materiály (Laminát Egger, Lakované MDF, Masív, Kovanie Blum).
   - Krok 3: Kontaktné údaje, lokalita, upload súborov (JPG, PNG, PDF, DWG) a GDPR súhlas.
   - Krok 4: Potvrdenie s dynamickou rekapituláciou.
5. **Firemné & Fakturačné údaje + Interaktívna mapa**:
   - Údaje s.r.o. (IČO: 51689537, DIČ: 2120766934, IČ DPH: SK2120766934, súdny register).
   - Google mapa zameraná na sídlo v Limbachu.
6. **5-krokový proces spolupráce & Galéria výrobkov**:
   - Prehľadná časová os od prvého kontaktu po odovzdanie.
   - Reálne fotografie realizácií a strojového parku.
7. **FAQ (Často kladené otázky)**:
   - Plynulý akordeón s odpoveďami na najčastejšie otázky o cenách, dodacích lehotách a materiáloch.
8. **Mobilná spodná lišta**:
   - Tlačidlá na rýchle vytočenie, WhatsApp a okamžité otvorenie dopytového formulára.

---

## 💻 Spustenie a zobrazenie

Stránka je plne autonómna, pripravená na okamžité otvorenie v ľubovoľnom webovom prehliadači:

- **Priame otvorenie súboru**:
  Dvojklikom otvorte súbor [kfinterier-redesign/index.html](file:///c:/VS/AI/AI_School/kfinterier-redesign/index.html).

- **Otvorenie v konkrétnom jazyku**:
  - Angličtina: `index.html?lang=en`
  - Nemčina: `index.html?lang=de`
  - Maďarčina: `index.html?lang=hu`
  - Taliančina: `index.html?lang=it`
  - Slovenčina: `index.html?lang=sk`

- **Cez lokálny server**:
  ```bash
  cd kfinterier-redesign
  npx serve .
  # alebo
  python -m http.server 8080
  ```
