# Redizajn webu Husacina u Ivety (Slovenský Grob)

> **Pôvodný web:** [https://www.husacinauivety.sk/](https://www.husacinauivety.sk/)  
> **Prevádzkovateľ:** Husacie hody – Iveta Noskovičová  
> **Adresa:** Pezinská 28, 900 26 Slovenský Grob  
> **Kapacita:** 67 miest (ľudový salónik) + letný dvor s krbom, detské ihrisko a vlastné parkovisko  
> **Kontakt na rezervácie:** 0904 937 173 / (+421) 033 64 783 91  
> **Režim:** Výlučne na objednávku (čerstvo pečené na dohodnutú hodinu)  

---

## 🍗 1. Prečo pôvodný web nefungoval a čo sme odhalili pri audite

Pri technickej a obsahovej analýze pôvodnej webovej stránky sme identifikovali závažné technické, používateľské aj gastronomicko-predajné problémy:

### A. Závažná technická chyba (PHP Leak v produkcii)
* Na samotnom vrchu každej jednej stránky aj REST API endpointov pôvodného webu uniká surový PHP kód:
  ```text
  define('DISALLOW_FILE_EDIT', true);
  define('DISALLOW_FILE_MODS', true);
  ```
* Niekto vložil tieto direktívy do súboru `wp-config.php` mimo otváracích značiek `<?php ?>`. Tento kód sa posiela do prehliadača ešte pred značkou `<!DOCTYPE html>`, čo spôsobuje **Quirks Mode v prehliadačoch**, poškodzuje SEO a znefunkčňuje strojové spracovanie JSON výstupov.

### B. Absencia chuti a zmyslového zážitku (Zero Appetite Appeal)
* Husacina v Slovenskom Grobe je **legendárny zážitok** – zlatistá kôrka husi pečenej v hlinenom pekáči z modranskej hliny, teplá husacia pečienka rozplývajúca sa na jazyku, čerstvo mastené zemiakové lokše a burčiak.
* Pôvodný web však ponúkal len fádnu, chladnú šablónu s miniatúrnymi 150x150 px náhľadmi a suchým zoznamom cien bez atmosféry a fotiek jedál v plnej kvalite.

### C. Nulová pomoc pri plánovaní hostiny pre skupiny
* Husi sa nepredávajú na porcie, ale ako celé pečené kusy (1 hus = cca 4–5 osôb).
* Bežný návštevník (organizátor rodinnej oslavy na 12 ľudí, firemného večierka na 25 ľudí alebo partie priateľov) netuší, koľko husí, pečienok, lokší a kapusty má objednať a koľko to bude stáť na osobu.
* Pôvodný web neponúkal žiadny konfigurátor ani odporúčané menu.

### D. Skryté prednosti areálu (Dvor s krbom, detské ihrisko, parkovisko)
* Rodina Noskovičová má jeden z najkrajších a najpraktickejších dvorov v Grobe: **veľký otvorený murovaný krb**, **vlastné detské ihrisko** pre rodiny s deťmi a **vlastné uzavreté parkovisko priamo vo dvore**.
* Tieto kľúčové konkurenčné výhody boli na pôvodnom webe utopené v neštruktúrovanom odseku textu.

### E. Zložitá a nejasná rezervácia
* Husi sa pečú pomaly viac ako 3 hodiny, preto je nutné objednať stôl na presný čas. Na pôvodnom webe chýbal prehľadný rezervačný asistent, ktorý by návštevníka naviedol k správnemu výberu času servírovania a nahláseniu bezlepkových požiadaviek.

---

## ✨ 2. Kľúčové inovácie a prvky nového redizajnu

Nový redizajn transformuje web na **modernú, prémiovú a zmyslovú digitálnu prezentáciu**, pri ktorej návštevníkovi okamžite začnú tiecť slinky a zatúži si rezervovať stôl.

### 🧮 1. GROB FEAST CALCULATOR™ (Inteligentná kalkulačka hostiny)
* **Interaktívny posuvník hostí:** Od 2 do 60 osôb s predvoľbami (4 osoby = 1 hus, 8 osôb = 2 husi, 15 osôb = oslava, 30 osôb = banket).
* **Algoritmický prepočet hodov v reálnom čase:**
  - Presný počet pečených husí (1 hus / 4–5 osôb)
  - Množstvo rozplývajúcej sa teplej husacej pečienky (150 g porcie)
  - Počet mastených zemiakových lokší (2,5 ks / osoba)
  - Porcie dusenej červenej kapusty a veľké misy kyslého grobského taniera
  - Voliteľné položky: Husacia polievková misa, Sladké makové/orechové lokše, Malokarpatské víno & burčiak
* **Okamžitá cena a prepočet na osobu** (napr. 49,50 € / os.).
* **1-klikové prenesenie do rezervácie:** Tlačidlo automaticky vyplní rezervačný formulár vrátane rozpisu jedál!

### 🍗 2. Zážitkové predkonfigurované balíčky
Pripravené balíčky pre nerozhodných zákazníkov s prepočítanou cenou:
1. **Grobská klasika (4–5 osôb):** 1x celá pečená hus, 10x lokša mastená, 4x kapusta, kyslý tanier, chlieb (153 € / cca 30 € na osobu).
2. **Kráľovská husacia hostina (8–10 osôb – Bestseller):** 2x celá hus, 4x husacia pečienka, polievková misa pre celú partiu, 25x mastené lokše, 8x kapusta, 2x kyslý tanier, 8x sladká lokša (460 € / cca 46 € na osobu).
3. **Exkluzívny banket (20–60 osôb):** Prenájom celého salónika na kľúč, priebežné čerstvé pečenie husí, neobmedzené lokše a posedenie pri krbe vo dvore.

### 📜 3. Kompletný interaktívny jedálny lístok s reálnymi cenami
Obsahuje aktuálne overené položky z kuchyne u Ivety (ceny platné od 19.9.2025):
- **Pečená hus 1 ks (4–5 osôb):** 110,00 €
- **Husacia pečienka porcia (150 g):** 18,00 € | **1 kg misa v surovej váhe:** 120,00 €
- **Lokša mastená husacou masťou (40 g):** 2,50 €
- **Lokša bezlepková pre celiatikov (40 g):** 3,00 €
- **Lokša plnená husacou pečienkou (60 g):** 5,90 €
- **Lokša sladká s džemom a makom / orechmi (60 g):** 4,90 €
- **Dusená červená kapusta (150 g):** 3,00 €
- **Polievka z husacích drobkov (0,33 l):** 4,50 € | **Polievková misa (6 os.):** 29,00 €
- **Husacia masť v pohári na doma (450 g):** 3,00 €
- **Kyslý miešaný tanier (400 g):** 8,00 €
- **Ťahaná domáca štrúdľa (60 g):** 4,90 €
- **Knedľa (1 ks):** 0,60 € | **Chlieb ošatka:** 3,00 €
- **Malokarpatské vína (fľaša / džbán):** od 12,00 €
*Filtre kategórií (Všetko, Husacina, Lokše, Polievky & Prílohy, Dezerty, Vína) a tlačidlo rýchleho pridania do objednávky.*

### 🏡 4. Prehliadka areálu a zón
- **Ľudový salónik (67 miest):** Vyzdobený originálnymi grobskými čipkami v drevených rámoch a kvetinovými maľbami.
- **Gazdovský dvor s krbom:** Kamenný murovaný krb, vôňa agátového dreva a večerné sedenie na terase.
- **Detské ihrisko:** Bezpečný oplotený priestor so šmýkačkou a hojdačkami.
- **Súkromné parkovisko vo dvore:** Kapacita pre 15+ osobných áut priamo v objekte.

### 📸 5. Filtrovateľná fotogaléria v plnom rozlíšení s Lightboxom
- Využíva **47 originálnych fotografií priamo z prevádzky v Slovenskom Grobe** (pečené husi v pekáčoch, teplá pečienka, lokše, salónik s čipkami, dvor a krb).
- Filtre: *Chrumkavá husacina*, *Ľudový salónik & čipky*, *Gazdovský dvor, krb & ihrisko*.
- Plnoobrazovkový Lightbox s popismi a možnosťou zatvorenia klávesom `ESC`.

### 📅 6. Inteligentný rezervačný formulár
- Prispôsobený špecifikám husacích hodov (výber presného času dopečenia husi, počtu hostí, bezlepkových lokší a preferovaného sedenia).
- Priame tlačidlá pre okamžitý hovor majiteľke Ivete Noskovičovej (`0904 937 173`, `033 / 64 783 91`).
- Potvrdzovacie modálne okno so zhrnutím údajov.

### 🍷 7. Zvuková atmosféra cez Web Audio API (Zero External Audio)
- **Grobský prípitok vínom:** Čistý syntetizovaný krištáľový cinkot dvoch čiaš na víno pri kliknutí na „Na zdravie!“.
- **Praskanie dreva v krbe:** Realistický generovaný ambientný zvuk ohňa v krbe, ktorý si návštevník môže kedykoľvek zapnúť v hornej lište pre dokonalú útulnú náladu.

---

## 🎨 3. Vizuálna identita a dizajnový systém

- **Farby:**
  - `Clay / Terakota` (`#CF6C45`, `#75321A`, `#2A0F06`) — odtieň modranskej hliny tradičných pekáčov
  - `Crust / Zlatistá kôrka` (`#C09A20`, `#F8F1D6`) — farba dokonale upečenej chrumkavej husi
  - `Hearth / Krbové drevo` (`#1A120E`, `#110B08`) — hlboká teplá antracitovo-drevená pre luxusný kontrast
  - `Wine / Malokarpatská bordová` (`#5A1324`) — tóny frankovky a červenej kapusty
- **Typografia:**
  - *Cinzel* & *Playfair Display* — aristokratická elegancia a tradičné slovenské dedičstvo
  - *Plus Jakarta Sans* — čistá moderná ergonómia pre dokonalú čitateľnosť na všetkých zariadeniach
- **Folk motívy:**
  - Decentná textúra inšpirovaná grobskou paličkovanou čipkou
  - Tradičný trojfarebný ornamentálny lem

---

## 🚀 4. Ako spustiť projekt lokálne

1. **Otvorenie v prehliadači:**
   Dvojklikom na súbor `index.html` alebo cez PowerShell:
   ```powershell
   Start-Process "c:\VS\AI\AI_School\husacinauivety-redesign\index.html"
   ```

2. **Spustenie cez lokálny web server:**
   ```powershell
   npx serve "c:\VS\AI\AI_School\husacinauivety-redesign"
   ```
   alebo cez Python:
   ```powershell
   python -m http.server 8080 --directory "c:\VS\AI\AI_School\husacinauivety-redesign"
   ```

3. **Mobilná a desktopová responzivita:**
   Stránka je plne optimalizovaná pre obrazovky smartfónov (iPhone / Android), tabletov, notebookov aj 4K monitorov.
