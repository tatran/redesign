# Slovenská ľudová majolika Modra — Kompletný Redizajn Webovej Prezentácie (2026)

Moderný, responzívny a remeselne vycibrený redizajn oficiálnej webovej stránky **Slovenskej ľudovej majoliky v Modre** ([pôvodná stránka: www.majolika.sk](https://www.majolika.sk/)).

---

## 🏺 O Slovenskej ľudovej majolike & Kontext Redizajnu

**Slovenská ľudová majolika (SĽM)** v Modre je najvýznamnejším a najstarším pokračovateľom tradície modranskej fajansy a keramiky v strednej Európe:
- **1636:** Založenie hrnčiarskeho cechu v Modre, rozvoj habánskej tradície nepriehľadnej cínovej bielej glazúry.
- **1883:** Vznik Štátneho keramicko-priemyselného učilišťa v Modre, ktoré položilo základy organizovanej dielne.
- **1925 & 1926:** Medzinárodný triumf — zisk **Grand Prix na Svetovej výstave v Paríži** a zlatej medaily vo Filadelfii pod umeleckým vedením Heřmana Landsfelda.
- **Dedičstvo:** Modranská majolika a jej ornamentika sú zapísané v **Reprezentatívnom zozname nehmotného kultúrneho dedičstva Slovenska** a v roku **2026 získali Chránené zemepisné označenie Európskej únie (CHZO)**.
- **Dnes:** Živé výrobné družstvo na Dolnej 138 v Modre, kde majstri točiari (džbankári) a maliarky ručne vyrábajú úžitkovú i dekoratívnu keramiku, organizujú víkendové zážitkové tvorivé dielne a vedú komentované prehliadky výroby.

---

## 🚀 Kľúčové vylepšenia oproti pôvodnej stránke

| Oblasť | Pôvodný stav (Angular SPA + Strapi v5) | Nový Redizajn 2026 |
|---|---|---|
| **Vizuálna identita & Atmosféra** | Chladné systémové písmo, sivé pozadia, sterilný e-shopový vzhľad bez emócie a hrdosti na 140-ročnú históriu. | Autentická keramická estetika inšpirovaná kobaltovou modrou, teplou pálenou hlinou (terakotou) a bielou glazúrou. Písma *Cormorant Garamond* a *Cinzel*. |
| **Zážitkové tvorivé dielne & Prehliadky** | Skryté v neprehľadných podstránkach, chýbajúci okamžitý rezervačný formulár, statický cenník. | **Interaktívna kalkulačka a rezervačný systém**: okamžitý výber programu (dielňa 90 min / prehliadka 30 min), termínu, počtu dospelých a detí, doplnkových služieb (poštovné vypálených diel domov) s okamžitým prepočtom ceny. |
| **Prezentácia 4 Dekórov Modry** | Používateľ si musel domýšľať rozdiely medzi tradičnými vzormi. | **Interaktívny vzorkovník 4 historických štýlov**: Modrý, Pestrý, Habánsky a Zelený dekór s historickým kontextom, farebnými pigmentmi a priamym preklikom do e-shopu. |
| **E-shop a Prehliadanie produktov** | Pomalé načítavanie cez ťažký Angular bundle, obmedzený rýchly náhľad. | **Bleskový filtrovateľný katalóg** s kategóriami (Taniere, Džbány, Šálky, Autorský dizajn), rýchlym náhľadom (Quick View Modal) s rozmermi a údržbou, a interaktívnym nákupným košíkom. |
| **Zákazková výroba a Dary na mieru** | Málo viditeľná služba, chýbajúce ukážky personalizácie. | Samostatná sekcia zákazkovej výroby: svadobné taniere s venovaním, reprezentačné firemné dary, zberateľské solitéry zušľachtené 24k zlatom. |
| **Ľudský rozmer & Majstri** | Mená majstrov boli skryté v databáze. | **Galéria žijúcich majstrov a lektorov** (Romana Uherčíková, Mgr. Katarína Borišová, Mgr. Filip Fuňa, točiari a maliarky) s fotografiami z dielne. |
| **Komunita & Záchrana keramiky** | Výzva "Nevyhadzujte keramiku" bola len jednou zo starých aktualít. | **Integrovaná iniciatíva záchrany dedičstva**: interaktívne okno s podmienkami bezplatného odberu staršej keramiky a odmeny v podobe voľného vstupu do dielne. |
| **Mobilná responzivita & Prístupnosť** | Komplikované menu na smartfónoch, prekrytia. | **100% Mobile-First dizajn**, plávajúce navigačné prvky, dotykové ovládanie, optimalizované zobrazenie na všetkých zariadeniach. |

---

## 🎨 Dizajnový systém

- **Farby:**
  - `Majolika Blue` (`#0d2d5e`, `#1e4c8f`) — Hlboká kobaltová modrá symbolizujúca tradičnú majolikovú glazúru.
  - `Terracotta Clay` (`#b95332`, `#d97448`) — Farba pálenej hliny, hrnčiarskej dielne a keramickej pece.
  - `Glaze Cream` (`#fbf9f4`, `#f2ede0`) — Snehobiela glazúra fariem, čistota a podklad pre maľbu.
  - `Majolika Gold` (`#c99a45`, `#f3e5c8`) — Akcent pravého 24k zlata a prestížnych svetových ocenení.
  - `Habán Green` (`#2d6a4f`) — Prírodný zemitý odtieň oxidu medi z habánskeho a zeleného vzoru.
- **Typografia:**
  - Titulky a nadpisy: `Cinzel` & `Cormorant Garamond` (renesančná elegancia a historická hĺbka).
  - Telo textu a rozhranie: `Plus Jakarta Sans` (čistá čitateľnosť, moderné e-commerce štandardy).

---

## 📂 Štruktúra súborov

```
majolika-redesign/
│
├── index.html           # Kompletný, plne funkčný a responzívny web
├── README.md            # Dokumentácia a prehľad vylepšení
└── images/              # Stiahnuté a optimalizované fotografie priamo z dielní
    ├── logo_slm.gif               # Oficiálne modré logo Slovenská ľudová majolika
    ├── unesco_cert.jpg            # Certifikát zápisu do kultúrneho dedičstva
    ├── hero_workshop.jpg          # Ručné maľovanie vázičky v dielni
    ├── hero_tours.jpg             # Komentovaná prehliadka a točenie na kruhu
    ├── hero_kiln.jpg              # Pecný priestor a výpal keramiky
    ├── dekor_modry.png            # Dekór: Modrý kobaltový vzor
    ├── dekor_pestry.png           # Dekór: Pestrý štvorfarebný vzor
    ├── dekor_habansky.png         # Dekór: Habánsky kódexový vzor
    ├── dekor_zeleny.png           # Dekór: Zelený medený vzor
    ├── romana_uhercikova.jpg      # Portrét hlavnej lektorky dielní
    ├── katarina_borisova.jpg      # Portrét kreatívnej riaditeľky a maliarky
    ├── filip_funa.jpg             # Portrét výkonného riaditeľa
    ├── misy.jpg, taniere.jpg      # Produkty e-shopu (misy, taniere, hrnčeky...)
    ├── panabeka.jpg, kruhy.jpg    # Autorské dizajnérske kolekcie
    └── news_keramika.jpg          # Fotografia k iniciatíve záchrany keramiky
```

---

## 💻 Spustenie a zobrazenie

Stránka je navrhnutá tak, aby fungovala priamo v ľubovoľnom modernom webovom prehliadači bez nutnosti inštalovať ďalšie závislosti:

```bash
# Otvorenie v predvolenom prehliadači
start majolika-redesign/index.html
```
Alebo cez ľubovoľný lokálny server (napr. VS Code Live Server, `npx serve`, Python `python -m http.server`).
