# Redizajn kontaktnej stránky KF-interiér s.r.o.
**Pôvodná stránka:** [https://vyroba-nabytku-bratislava-kfinterier.sk/kontakt/](https://vyroba-nabytku-bratislava-kfinterier.sk/kontakt/)

Tento projekt prináša moderný, vysoko konverzný a remeselne ladený redizajn kontaktnej a dopytovej stránky pre slovenskú stolársku spoločnosť **KF-interiér s.r.o.** so sídlom a vlastnou dielňou v Limbachu (Bratislavský kraj).

---

## 🎨 Téma: Predvolený Svetlý režim (Light Mode) & Tmavý režim (Dark Mode)

- **Predvolený Svetlý režim (Default Light Theme)**:
  - Stránka sa teraz **štandardne otvára v čistom, presvetlenom svetlom dizajne** s teplými podtónmi prírodného dubového dreva a snehovo bielym podkladom (`bg-stone-50`, `bg-white`).
  - Vrchná informačná lišta má elegantný svetlý bridlicový podklad (`bg-stone-100`, `border-stone-200`) a kontrastné ikony.
  - Pätička (footer) má čistý svetlý profil (`bg-stone-100`, `text-stone-600`), záverečný banner teplý remeselný jantárovo-dubový gradient.
  - Všetky texty, popisy a polia formulára disponujú vysokým kontrastom a čitateľnosťou (`text-stone-900`, `text-stone-800`).

- **Tmavý režim (Dark Mode)**:
  - Luxusný tmavý odtieň ebenového dreva (`dark:bg-[#12100e]`, `dark:bg-stone-900`), hlboké tienenie a jemné svetelné kontúry.

- **Prepínač témy (Theme Toggle)**:
  - Umiestnený priamo v hlavičke s ikonou (slnko/mesiac) a textovým indikátorom (`Svetlý režim` / `Tmavý režim`).
  - Plne integrovaný aj v **mobilnom menu**.
  - Ošetrený ochranným blokom `try/catch` pre bezproblémové fungovanie aj pri priamom lokálnom otvorení cez `file:///` protokol bez spustenia webového servera.

---

## 🔍 Analýza pôvodného stavu (Problémy pôvodnej stránky)

Pôvodná kontaktná stránka na WordPress šablóne vykazovala zásadné nedostatky:

1. **Absencia kontaktného formulára**:
   - Pôvodná stránka obsahovala doslova iba 3 riadky neformátovaného textu:
     - `Výroba: +421903224896`
     - `Zameranie : +421903451120`
     - `mail: kamil.frano@gmail.com`
   - Zákazník nemal žiadnu možnosť odoslať dopyt priamo cez web, zadať špecifikáciu ani priložiť pôdorys či nákres od architekta.
2. **Žiadna interaktívna mapa ani navigačné údaje**:
   - Chýbala adresa sídla dielne (Záhradná 591/74, 900 91 Limbach), mapa aj informácie o regióne pôsobnosti.
3. **Chýbajúce fakturačné a identifikačné údaje**:
   - Absentovalo IČO, DIČ, IČ DPH, informácia o zápise v Obchodnom registri, čo znižovalo dôveryhodnosť firmy pri zákazkách za tisíce eur.
4. **Nulové sociálne dôkazy a prezentácia vlastnej dielne**:
   - Firma má pritom vlastnú vybavenú stolársku dielňu (formátovacia píla, olepovačka hrán s PUR lepidlom, striekacia kabína) a vlastný vozový park, čo na pôvodnom kontakte vôbec nebolo vidieť.
5. **Nefunkčné widgety šablóny**:
   - V bočnom paneli a pätičke boli generické prázdne bloky `Search Go Archives Archives`.
6. **Slabá mobilná konverzia**:
   - Žiadne rýchle prekliknutie na WhatsApp alebo priame volanie majstrovi jedným ťuknutím palca.

---

## 🚀 Kľúčové inovácie v novom redizajne

### 1. 📞 Transparentná 3-kanálová architektúra kontaktov
Zákazník okamžite vie, komu presne volá:
- **Kamil Fraňo – Výroba & Dielňa** (`+421 903 224 896`): Technické riešenia, stav rozpracovanej zákazky, kovanie Blum/Hettich, priame tlačidlo na WhatsApp s predvyplnenou správou.
- **Zameranie & Obhliadky u klientov** (`+421 903 451 120`): Laserové zameranie priamo u zákazníka v BA, PK, SC, TT, prezentácia reálnych vzorkovníkov Egger/Kronospan.
- **Projektový email & Pôdorysy** (`kamil.frano@gmail.com`): Tlačidlo na priame otvorenie emailového klienta + tlačidlo na skopírovanie adresy jedným klikom do schránky s okamžitou spätnou väzbou.

### 2. 🛠️ Interaktívny 3-krokový dopytový konfigurátor (Smart Inquiry Wizard)
Namiesto obyčajného textového poľa má zákazník k dispozícii intuitívneho sprievodcu:
- **Krok 1 (Typ nábytku)**: Kuchynská linka, Vstavaná skriňa / Šatník, Obývacia stena & TV, Kúpeľňový nábytok, Spálňa/Detská izba, Schody & dvere, Pergola/Terasa, Kompletný interiér na kľúč.
- **Krok 2 (Štádium & Materiály)**: Mám projekt od architekta / Mám len predstavu / Holobyt novostavba + voľba materiálov (Egger laminát, Striekané MDF v mat/lesku, Masív/dýha, Tiché kovanie Blum).
- **Krok 3 (Údaje & Podklady)**: Meno, telefón, email, lokalita (Bratislava, Pezinok, Senec...), poznámka, drag & drop nahratie súborov (JPG, PNG, PDF, DWG) a GDPR súhlas.
- **Okamžité potvrdenie**: Po odoslaní sa zobrazí dynamická rekapitulácia dopytu a garantovaný čas odozvy (do 24 hodín).

### 3. 🏢 Kompletné firemné a fakturačné údaje
- Obchodné meno: **KF-interiér s.r.o.**
- Sídlo: Záhradná 591/74, 900 91 Limbach
- IČO: `51 689 537`
- DIČ: `2120766934`
- IČ DPH: `SK2120766934` (Platiteľ DPH)
- Zápis: Okresný súd Bratislava III, oddiel Sro, vložka č. 128479/B
- Dátum vzniku: 24. mája 2018

### 4. 🗺️ Interaktívna mapa a prehľad pokrytia
- Zabudovaná interaktívna Google mapa so zameraním na Limbach.
- Zoznam priamo obsluhovaných lokalít bez zbytočných prirážok: Bratislava (všetky mestské časti), Limbach, Pezinok, Senec, Modra, Svätý Jur, Stupava, Trnava a okolitý región.

### 5. ⏱️ 5-krokový proces spolupráce
1. **Kontakt & Dopyt**
2. **Laserové zameranie u vás doma**
3. **3D grafický návrh a pevná cenová kalkulácia**
4. **Precízna výroba vo vlastnej dielni v Limbachu**
5. **Doprava vlastným vozovým parkom, montáž a odvoz odpadu**

### 6. 📸 Reálne zábery z dielne a strojového parku
Využitie skutočných fotografických podkladov firmy:
- Vlastný vozový park dodávok
- Formátovacie a olepovacie stroje
- Kuchynské linky a vstavané skrine priamo z ich realizácií

### 7. ❓ FAQ (Často kladené otázky)
Rieši kľúčové obavy zákazníkov: bezplatné zameranie, dodacie lehoty (3–5 týždňov skrine, 5–8 týždňov kuchyne), záruka na kovanie, likvidácia starého nábytku.

### 8. 📱 Pripnutá mobilná lišta (Mobile Sticky Quick Actions)
Pre návštevníkov z mobilov je na spodku obrazovky pripnuté:
- 📞 **Zavolať výrobu**
- 💬 **WhatsApp chat**
- ✨ **Naceniť projekt**

---

## 💻 Spustenie a zobrazenie

Stránka je plne autonómna, pripravená na okamžité otvorenie v ľubovoľnom webovom prehliadači:

- **Priame otvorenie súboru**:
  Dvojklikom otvorte súbor [kfinterier-redesign/index.html](file:///c:/VS/AI/AI_School/kfinterier-redesign/index.html).

- **Alebo cez lokálny HTTP server**:
  ```bash
  cd kfinterier-redesign
  npx serve .
  # alebo
  python -m http.server 8080
  ```
