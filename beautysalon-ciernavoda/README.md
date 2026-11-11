# Redizajn webovej prezentácie Beauty Salon – Čierna Voda (Jaroslava Lukáčová)

**Pôvodná webová adresa:** [https://beautysalon-ciernavoda.sk/](https://beautysalon-ciernavoda.sk/)  
**Lokalita:** Hrudky 73, 900 25 Chorvátsky Grob – Čierna Voda  
**Odborný garant & majiteľka:** Jaroslava Lukáčová (zdravotnícke vzdelanie & certifikovaná prax estetickej medicíny)  
**Telefón:** +421 904 826 974  
**E-mail:** beautysalonciernavoda@gmail.com  
**Rezervačný systém:** [Bookio Online Rezervácia](https://services.bookio.com/beauty-salon-cierna-voda/widget?lang=sk)  
**Sociálne siete:** [Instagram @beautysalonciernavoda](https://www.instagram.com/beautysalonciernavoda/) | [Facebook Beauty Salon Čierna Voda](https://www.facebook.com/BeautySalonCiernaVoda/)

---

## 🌸 Prehľad projektu a vízia redizajnu

**Beauty Salon na Čiernej Vode** pod vedením Jaroslavy Lukáčovej predstavuje prémiový kozmetický a estetický salón zameraný na liečebnú dermatokozmetiku, omladzovanie pleti a moderné prístrojové zákroky (dermabrázia REVIDERM, botulotoxín, kyselina hyalurónová, mezoterapia, frakčný CO2 laser, laserová epilácia EXILITE II, rádiofrekvenčný termolifting a enzymatická lipolýza).

Salón disponuje špičkovým prístrojovým vybavením, odborným zdravotníckym vzdelaním majiteľky, sterilným a diskrétnym prostredím a bezplatným parkovaním priamo pred vchodom na Hrudkoch 73.

### 🔍 Hĺbkový audit pôvodného stavu (Pred redizajnom)

1. **Zastaraná technologická architektúra:**
   - Pôvodný web bežal na staršej verzii CMS Grav s kombináciou knižníc Bootstrap 3/4, jQuery 1.x, OwlCarousel, Modernizr a FlexSlider z roku 2018–2020.
   - Pomalšie načítavanie neoptimalizovaných obrázkov (viaceré súbory presahovali 1.9 MB bez kompresie či responzívneho servovania).

2. **Nevyužitý konverzný potenciál rezervácií:**
   - Online rezervácia cez Bookio bola riešená buď statickým oranžovým tlačidlom v sidebare, alebo odkazom na samostatnú podstránku bez možnosti predvýberu konkrétnej procedúry.
   - Návštevníčka po prečítaní o procedúre nemala priame tlačidlo na objednanie daného ošetrenia.

3. **Statický a neprehľadný cenník:**
   - Cenník obsahoval desiatky položiek usporiadaných do čistého zoznamu textov bez možnosti vyhľadávania (napr. podľa partii ako „podpazušie“, „pery“, „botox“), bez filtrovania kategórií a bez kalkulačky orientačnej ceny.

4. **Absencia interaktívnych prvkov & Diagnostiky:**
   - Mnoho klientiek nevie presne, aký je rozdiel medzi dermabráziou, chemickým pílingom, termoliftingom a frakčným laserom.
   - Na pôvodnom webe chýbal akýkoľvek interaktívny sprievodca (Skin Quiz / Sprievodca ošetrením), ktorý by pomohol klientke identifikovať jej problém a odporučil optimálnu procedúru.

5. **Statická prezentácia výsledkov:**
   - Reálne výsledky boli umiestnené v odľahlej fotogalérii bez interaktívneho porovnávača Pred/Po (Before & After Slider).

---

## ✨ Kľúčové vylepšenia nového redizajnu

Nový redizajn premieňa web na **luxusnú, rýchlu a vysoko konverznú Single-Page Aplikáciu (SPA)** s dizajnom v štýle švajčiarskej estetickej kliniky:

### 1. ⏱️ Živý indikátor otváracích hodín (Real-Time Status Badge)
- Dynamicky kalkuluje čas návštevníka podľa otváracích hodín salónu (Pondelok – Piatok: 09:00 – 18:00).
- Zobrazuje pulzujúcu zelenú kontrolku (*„Práve máme otvorené • Prijímame klientky do 18:00“*) alebo nočný/víkendový mód (*„Momentálne zatvorené • Otvárame v pondelok o 09:00“*).

### 2. 🪄 Interaktívna diagnostika pleti (Skin Quiz & Consultation Guide)
- 3-krokový interaktívny kvíz:
  1. **Vek & typ pleti** (mladá aknózna, dehydrovaná 25-35 r., strata pružnosti 35-48 r., zrelá 48+ r.)
  2. **Primárny cieľ** (pigmentácie, cievky a metličky, vrásky a objem, dvojitá brada a podbradok)
  3. **Intenzita** (neinvazívne relaxačné, prístrojové technológie, esteticko-injekčné)
- Okamžite odporučí ideálnu procedúru (napr. *Enzýmová lipolýza PB Sérum*, *Mikrodermabrázia REVIDERM*, *Termolifting Protége*, *Botulotoxín*) s orientačnou cenou a priamym 1-klikom do rezervácie.

### 3. ↔️ Interaktívny Before / After Slider (Reálne výsledky klientiek)
- Funkčný posuvník na reálnych fotkách zo salónu:
  - **Botulotoxín** – vyhladenie mimických vrások čela
  - **Kyselina hyalurónová** – prirodzená hydratácia a kontúra pier
  - **Lipolýza PB Sérum** – redukcia podbradku
  - **Elektrokauterizácia** – odstránenie seboroickej keratózy

### 4. 📋 Inteligentný cenník s live vyhľadávaním a kalkulačkou ošetrení (Beauty Basket)
- **Fulltextové live vyhľadávanie** v reálnom čase (vyhľadáva podľa názvu aj poznámky).
- **Kategórie:** *Kozmetika & Pleť*, *Estetická medicína*, *Frakčný resurfacing*, *Laser & Pigmentácie*, *Laserová epilácia*, *Doplnkové & Telo*.
- Tlačidlo **„+ Do plánu“** pri každej procedúre pridáva položky do plávajúceho nákupného zoznamu s dynamickým súčtom ceny a 1-klik prenosom do rezervácie.

### 5. 📅 Dvojitá integrácia rezervácie Bookio
- Elegantné modálne okno s vloženým oficiálnym widgetom `https://services.bookio.com/beauty-salon-cierna-voda/widget?lang=sk`.
- Automatické predvyplnenie vybranej služby do hlavičky rezervácie.
- Zobrazenie storno podmienok (ochrana pred no-show a poplatok 25 € pri neospravedlnenom termíne).

### 6. 📱 Mobilná konverzná lišta (Sticky Bottom Action Bar)
- Pevne prichytená spodná lišta na smartfónoch:
  - Tlačidlo **Zavolať** (`0904 826 974`)
  - Tlačidlo **Rezervovať (Bookio)**
- Okamžitá navigácia na 1 kliknutie cez **Waze** a **Google Mapy**.

### 7. 🩺 Dôraz na odbornosť a zdravotnícke vzdelanie
- Prezentácia Jaroslavy Lukáčovej ako skúsenej odborníčky so zdravotníckym backgroundom.
- Predstavenie certifikovaných značiek a prístrojov: *REVIDERM Cell Jet / Skin Peeler*, *BTL Medical Protége Exilis*, *BTL Exilite II*, *PB Serum Medical*, *Dermaheal*, *Janssen*.

---

## 🎨 Vizuálny a Dizajnový systém

| Prvok | Špecifikácia |
| :--- | :--- |
| **Farebná paleta** | **Rose Gold** (`#C97D71`, `#DEA297`), **Champagne Gold** (`#B69E7B`, `#DACDB6`), **Obsidian Plum** (`#140C10`, `#23181C`), **Warm Cream** (`#FAF6F0`, `#FDFBF9`) |
| **Nadpisy a elegancia** | `Playfair Display` & `Cormorant Garamond` (kráľovská serifa vyžarujúca luxus a estetickú harmóniu) |
| **Podpisy & Akcenty** | `Alex Brush` (ručne písaný jemný podpis pre osobný príhovor majiteľky) |
| **Používateľské rozhranie**| `Plus Jakarta Sans` (čisté, ultra-čitateľné bezpätkové písmo) |
| **Ikony** | Font Awesome 6.5 Pro-grade ikony |
| **Efekty** | Jemné sklené efekty (`backdrop-blur-md`), rose-gold tiene (`shadow-luxury`), plynulý posuvník Pred/Po |

---

## 📁 Štruktúra priečinka projektu

```
beautysalon-ciernavoda-redesign/
│
├── index.html                   # Kompletná interaktívna SPA aplikácia (všetky sekcie, logika, CSS a JS)
├── README.md                    # Detailná dokumentácia redizajnu a analýza
└── images/                      # Autentické fotografie salónu a procedúr
    ├── logo.png                 # Pôvodné logo Beauty Salon
    ├── jaroslava-lukacova.jpg   # Portrét majiteľky a garantky Jaroslavy Lukáčovej
    ├── salon-hero.jpg           # Exteriér a vstup do salónu
    ├── salon-building.jpg       # Budova na Hrudkoch 73
    ├── salon-interior-1.jpg     # Ošetrovacie lôžko a relaxačné zázemie
    ├── salon-interior-2.jpg     # Oddychová zóna
    ├── salon-interior-3.jpg     # Recepcia a konzultačná časť
    ├── salon-interior-4.jpg     # Prístrojové vybavenie
    ├── skin-care-cosmetics.jpg  # Dermaceutická kozmetika REVIDERM
    ├── reviderm-dermabrazia.jpg # Mikrokryštalická dermabrázia REVIDERM
    ├── osetrenie-pleti.jpg      # Relaxačné ošetrenie pleti Janssen
    ├── chemicky-piling.jpg      # Chemický píling REVIDERM 30%
    ├── termolifting.jpg         # Rádiofrekvenčný termolifting Protége
    ├── plazmaterapia-prp.jpg    # Plazmaterapia PRP (Drakulaterapia)
    ├── mikroihlickova-mezoterapia.jpg # Mikroihličková mezoterapia
    ├── dermaheal-booster.jpg    # Mezoterapia booster Dermaheal HSR
    ├── 3d-fotorejuvenizacia.jpg # 3D fotorejuvenizácia IPL
    ├── laser-exilite.jpg        # Laserová epilácia BTL EXILITE II
    ├── led-terapia.jpg          # LED fototerapia
    ├── lymfoven.jpg             # Prístrojová lymfodrenáž Lymfoven
    ├── lipolyza-pred-po.jpg     # Enzýmová lipolýza podbradku PB sérum
    ├── frakcny-resurfacing.jpg  # Frakčný CO2 laserový resurfacing
    ├── vypln-pier.jpg           # Výplň pier kyselinou hyalurónovou
    ├── botulotoxin-pred-po.jpg  # Aplikácia botulotoxínu
    ├── gallery-botox-before-after.jpg   # Pred/po fotka botox
    ├── gallery-lips-before-after.jpg    # Pred/po fotka pery
    ├── gallery-lipolyza-before-after.jpg # Pred/po fotka lipolýza
    └── gallery-keratoza-before-after.jpg # Pred/po fotka keratóza
```

---

## 🚀 Návod na spustenie a nasadenie

Keďže je web postavený ako moderná, čistá HTML5 aplikácia bez nutnosti backendových kompilácií (Zero-build SPA):

1. **Lokálne otvorenie:**
   - Stačí dvojklikom otvoriť súbor `beautysalon-ciernavoda-redesign/index.html` v ľubovoľnom modernom prehliadači (Chrome, Safari, Edge, Firefox).
   - Alebo spustiť lokálny webserver:
     ```bash
     npx serve beautysalon-ciernavoda-redesign
     ```

2. **Nasadenie na produkčnú doménu (`beautysalon-ciernavoda.sk`):**
   - Skopírujte obsah priečinka `beautysalon-ciernavoda-redesign/` na webhosting (FTP / WebSupport / Cloudflare Pages / Vercel / Netlify).
   - Všetky cesty k obrázkom, skriptom a Bookio widgetu sú relatívne a plne pripravené na okamžitú prevádzku.
