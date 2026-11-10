# Redizajn Vinárstvo Foriš (Limbach) — Web, pri ktorom dostanete chuť na víno

> **Pôvodný web:** [https://vinoforis.sk/](https://vinoforis.sk/)  
> **Cieľ redizajnu:** Transformovať zastaranú, statickú webovú stránku rodinného butikového vinárstva z Limbachu na zmyslový, gurmánsky a prémiový zážitok, pri ktorom **návštevník okamžite zatúži ochutnať a naliať si pohár vína.**

---

## 🍇 Prečo pôvodný web nefungoval a čo sme zmenili

Pôvodný web trpel klasickými neduhmi starších vinárskych stránok:
- **Chýbala zmyslová príťažlivosť (appetite appeal):** Vína boli prezentované len strohými technickými tabuľkami a miniatúrnymi obrázkami bez emócie a chuti.
- **Nereprezentoval butikovú exkluzivitu:** Vinárstvo Foriš produkuje iba **10 000 fliaš ročne**, pričom každá fľaša prejde rukami otca Ivana a syna Lukáša. Pôvodný web pôsobil ako generický katalóg, nie ako zberateľský klenot Malých Karpát.
- **Skryté ocenenia a šampióni:** Vinárstvo zbiera Veľké zlaté medaily (Šampión Vínne trhy Pezinok za Pinot Noir, Zlato z AWC Vienna, dvojnásobný šampión Kráľovského rizlingu), no na pôvodnom webe boli tieto úspechy utopené v neprehľadnom texte.
- **Komplikovaný nákupný proces:** Objednávkový formulár bol nepraktický, bez interaktívneho košíka, bez stimulácie k nákupu 6 fliaš (doprava zadarmo) a bez možnosti ochutnávkových balíčkov.
- **Nevyužitý potenciál pivničných degustácií:** Návšteva ich autentickej klenbovej pivnice v Limbachu nebola ponúkaná ako atraktívny zážitok.

---

## ✨ Kľúčové inovácie nového redizajnu

### 1. Zmyslový copywriting a chuťové profily (Mouth-Watering Experience)
Každé víno má napísaný popis tak, aby vyvolal slinný reflex a chuť na pohár:
- **Pinot Noir 2022 Barrique (Šampión):** *"Intenzívna rubínovo-čerešňová farba so svetlejším tehlovým okrajom. Vôňa vás omámi tónmi prezretých lesných višní, černicového džemu, horkej belgickej čokolády a ušľachtilého cédrového dreva po 24 mesiacoch v dubových barikoch. Zamat, ktorý pohladí zmysly."*
- **Silvánske Zelené 2025 (AWC Vienna):** *"Pravá limbašská ikona s kriedovo-minerálnou iskrou. Zelené jablko granny smith, egreše, lúčne byliny a svieža malokarpatská kyselinka, ktorá v ústach doslova iskrí."*
- **L. Rosé (5,5 % alk.):** *"Roztopašné letné bublinky s infúziou pravej levandule a lesných jahôd. Dobre zachladiť na 7 °C a vychutnať si bezstarostný letný večer."*
- **Dunaj 2023 Barrique:** *"Slovenský aristokrat. Hustý ako černicový lekvár s tónmi vanilky a mletého čierneho korenia."*

### 2. Digitálny Someliér (Nájdi svoje víno za 30 sekúnd)
Interaktívny 3-krokový sprievodca podľa nálady a príležitosti:
1. **Príležitosť:** Romantická večera, Letná terasa & priatelia, Gastronomický steak/divina, Darček pre znalca, Večerný relax.
2. **Preferovaný profil:** Minerálne & chrumkavé, Mohutné & barikové, Šumivé ovocné perlenie, Aromatické biele.
3. **Okamžité odporúčanie:** Osobný výber pivničného majstra Lukáša Foriša s citátom, odporúčanou teplotou podávania, gastro-párovaním a tlačidlom na priame vloženie do košíka.

### 3. Vizuálny senzorický radar pri každej fľaši
- Vizuálne ukazovatele pre **Telo a štruktúru**, **Sladkosť**, **Kyselinku / Sviežosť** a **Triesloviny**.
- Informácie o ideálnej teplote servírovania (napr. 16–18 °C pre Pinot Noir, 6–8 °C pre L. Rosé) a odporúčanom type skla (Burgundský balón, Bordeaux kalich, tulipán na biele vína).

### 4. Interaktívny nákupný košík a stimuly
- Výsuvný bočný košík (**Slide-in Cart Drawer**) s okamžitým prepočtom ceny.
- **Progress bar na dopravu zadarmo:** Dynamicky informuje zákazníka: *"Pridajte ešte X fliaš a máte dopravu kuriérom ZADARMO po celom Slovensku!"*
- Možnosť voľby: **Doručenie kuriérom** v certifikovaných thermo-obaloch na sklo alebo **Osobný odber v pivnici v Limbachu zadarmo**.
- Predkonfigurované degustačné kartóny: *"Kartón Šampióni Limbachu (6 fliaš)"* so zľavou a dopravou grátis.

### 5. Rezervačný systém pre Zážitkovú pivnicu
- 2 balíčky:
  - **Malokarpatská klasika (5 vzoriek):** 25 € / os. (vrátane syrov a domáceho chleba)
  - **Majstrovská pivnica (10 vzoriek):** 35 € / os. (ochutnávka priamo zo suda, archívne ročníky, lokálne mäsové špeciality a osobný výklad pivničného majstra)
- Interaktívny výpočet ceny podľa počtu hostí a okamžité odoslanie rezervácie termínu.

### 6. Atmosférický prípitok (Web Audio API)
- Elegantné tlačidlo na prípitok v hlavičke, ktoré prostredníctvom Web Audio API syntetizuje krištáľový cinkot pohárov na víno (čistý akord D#7) a zvuk naliatia vína pri vložení do košíka — bez nutnosti externých audio súborov.

---

## 🍷 Použité technológie

- **HTML5 & CSS3** s moderným responzívnym layoutom pre mobil, tablet aj desktop.
- **Tailwind CSS (CDN)** s vlastnou luxusnou farebnou paletou:
  - `wine` / `bordeaux` (`#6b1124`, `#23050b`) — farba hlbokého červeného vína
  - `gold` (`#d4af37`, `#f5e5b8`) — odlesky medailí a champagne
  - `limestone` & `charcoal` — atmosféra vápencovo-žulových svahov a klenbovej pivnice
- **Google Fonts:**
  - *Playfair Display* & *Cormorant Garamond* — aristokratická vinárska typografia
  - *Plus Jakarta Sans* — čisté, ergonomické rozhranie
- **Font Awesome 6 Pro icons**
- **Vanilla JavaScript** — bleskový chod bez ťažkých frameworkov, LocalStorage synchronizácia košíka, interaktívny someliér a modálne okná.

---

## 🚀 Ako spustiť projekt lokálne

1. Otvorte súbor `index.html` v ľubovoľnom modernom webovom prehliadači:
   ```powershell
   Start-Process "c:\VS\AI\AI_School\vinoforis-redesign\index.html"
   ```
2. Alebo spustite lokálny live server (napr. cez npx serve, VS Code Live Server alebo python http.server):
   ```bash
   npx serve vinoforis-redesign
   ```
