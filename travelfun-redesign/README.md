# TRAVELFUN — Kompletný Redizajn Webovej Prezentácie (2026)

> **Oficiálna stránka pôvodného webu:** [https://www.travelfun.sk/](https://www.travelfun.sk/)  
> **Spoločnosť:** TRAVELFUN, s.r.o., Bodice 189, 031 01 Liptovský Mikuláš, Slovenská republika  
> **IČO:** 36006491 | **DIČ:** 2020430016  
> **Telefón:** +421 948 050 720 / +421 948 220 263 | **E-mail:** info@travelfun.sk  

---

## 🌍 Prehľad & Cestovateľský Kontext

**TRAVELFUN, s.r.o.** je renomovaná slovenská cestovná kancelária a agentúra s viac ako 15-ročnou tradíciou so sídlom v Liptovskom Mikuláši. Špecializuje sa na:
- **Letenky do celého sveta:** Prepojenie globálnych distribučných systémov (GDS Amadeus, Sabre) a nízkonákladových leteckých spoločností (550+ aeroliniek), správa korporátnych vernostných programov (Miles&More, Flying Blue, Skywards) a 24/7 asistenčný dispečing pri meškaniach alebo zrušených letoch.
- **Poznávacie zájazdy a expedície:** Špecializácia na unikátne destinácie – **Veľký okruh Novým Zélandom** (v spolupráci s *Adventure Outdoors Tongariro*), **Austrália** (Sydney, Veľká koralová bariéra, Uluru; partnerstvo s *G8M8*), **Čile & Patagónia**, **Srí Lanka**, **Kuba** a **USA / Kanada**.
- **Poľovnícke zájazdy a safari:** Exkluzívne výpravy do Namíbie, Juhoafrickej republiky a overených revírov sveta v partnerstve s agentúrou *Vulpes*.
- **Firemná klientela & MICE:** Tvorba cestovnej politiky pre firmy, teambuildingy, konferencie, flexibilné fakturácie a pridelený privátny manažér.
- **Doplnkové služby:** Oficiálny partner **Európskej cestovnej poisťovne (ECP)**, prenájom áut, karavanov a motocyklov Harley Davidson, vízový servis (ESTA, eTA, víza).

---

## 🔍 Hĺbkový Audit Pôvodného Stavu & Dôvody Redizajnu

| Oblasť | Pôvodný stav (travelfun.sk) | Nový Redizajn TRAVELFUN 2026 |
|---|---|---|
| **Vizuál & Použiteľnosť** | Zastaraný layout (WordPress 4.6), neštruktúrované texty, zablokované načítanie pri niektorých požiadavkách | **Moderný responzívny design systém** (teplá dobrodružná oranžová `#f97316` + oceánska azúrová `#0284c7`), sklenený efekt (glassmorphism), jemné animácie a prehľadná typografia |
| **Jazyková podpora** | Iba slovenčina (hoci obsluhuje medzinárodné lety a partnerstvá) | **5 Jazykov (SK, EN, DE, CS, HU)** s okamžitým prepínaním textov, placeholderov a mien v reálnom čase bez reloadu |
| **Témy (Režimy zobrazenia)** | Len fixný svetlý režim | **Plná podpora Dark + Light módu** s rešpektovaním systémových preferencií (`prefers-color-scheme`) a perzistenciou v `localStorage` |
| **Vyhľadávanie leteniek a zájazdov** | Statický formulár s obmedzenými poľami | **Interaktívny 4-záložkový vyhľadávač** (Letenky, Pobyty, Expedície, MICE) s priamym prenosom do dopytového okna |
| **Cenotvorba & Rozpočet** | Žiadna orientácia v cenách bez telefonátu | **Interaktívna kalkulačka rozpočtu cesty** s posuvníkom dĺžky, počtom osôb, voľbou komfortu (Comfort/Premium/Luxury) a automatickým prepočtom na EUR alebo CZK |
| **Telemetria & Analytika** | Starý tracker Google Analytics | **Vstavaný klientsky Telemetry Hub & Live HUD Inšpektor**: sledovanie relácií, hĺbky skrolovania (25/50/75/100%), vyhľadávaní, prepínania jazyka/témy a export dát do JSON |

---

## 🚀 Kľúčové Funkcionality Nového Riešenia

### 1. 5-Jazyčný Lokalizačný Engine (SK, EN, DE, CS, HU)
- Plynulé prepínanie medzi 5 jazykmi: **Slovenčina**, **English**, **Deutsch**, **Čeština**, **Magyar**.
- Všetky nadpisy, tlačidlá, odznaky, formulárové placeholdery aj systémové hlášky (toast notifikácie) sú plne preložené.
- Inteligentné prepočítavanie kalkulačky rozpočtu (v CZK pri češtine, v EUR pri ostatných).

### 2. Dark & Light Mód
- Precízne navrhnuté farebné palety pre svetlý a tmavý režim.
- Zabezpečený vysoký kontrast (WCAG AAA/AA) pre vynikajúcu čitateľnosť na slnku aj v nočných hodinách.
- Okamžité ukladanie voľby užívateľa do lokálneho úložiska.

### 3. Vstavaná Telemetria (Live Telemetry Inspector)
- **Architektúra:** Samostatná trieda `TravelFunTelemetry` bez externých knižníc.
- **Sledované udalosti:**
  - `page_view` (rozlíšenie, referrer, čas)
  - `language_change` (zmena jazyka z -> do)
  - `theme_toggle` (zmena témy svetlá/tmavá)
  - `flight_search_submitted` (trasa, dátumy, počet osôb, letová trieda)
  - `tour_search_submitted` (destinácia, dĺžka, kategória)
  - `tours_filter_changed` (filtrovanie expedícií)
  - `calculator_interacted` & `calculator_cta_clicked` (výpočet rozpočtu)
  - `contact_form_submitted` & `modal_inquiry_submitted`
  - `outbound_or_contact_click` (kliknutia na tel:, mailto: a partnerov)
  - `scroll_milestone` (25%, 50%, 75%, 100% výšky stránky)
  - `time_on_page` (heartbeat každých 30 sekúnd)
- **Live HUD Inšpektor (v pravom dolnom rohu):**
  - Tlačidlo **`⚡ Telemetria live [X]`** s počítadlom zachytených udalostí.
  - Výsuvný bočný panel zobrazujúci ID relácie, aktívny jazyk, aktívnu tému a zoznam udalostí v reálnom čase s farebnými odznakmi podľa kategórie (`conversion`, `search`, `interaction`, `system`).
  - Možnosť **Exportovať dáta do JSON**, **Simulovať testovaciu udalosť** a **Vyčistiť log**.
  - Pripravené pre odosielanie cez `navigator.sendBeacon` na definovaný koncový bod backendu.

### 4. Interaktívny Kalkulátor Cesty
- Umožňuje klientovi navoliť si obľúbenú destináciu (Nový Zéland, Austrália, Srí Lanka, Patagónia, Kuba, Safari Afrika, USA), dĺžku v dňoch (5–30 dní), počet osôb a požadovaný štandard ubytovania.
- Okamžite kalkuluje celkovú orientačnú cenu a cenu na osobu.
- Tlačidlo automaticky prenesie celú konfiguráciu priamo do dopytového formulára.

---

## 📁 Štruktúra Súborov v Repozitári

```text
travelfun-redesign/
├── index.html              # Kompletná sémantická štruktúra stránky s data-i18n
├── styles.css              # Responzívny CSS design systém, premenné pre Dark/Light a HUD
├── script.js               # 5-jazyčný i18n slovník, Telemetry Hub, kalkulačka, modaly
├── promotional-email.html  # Responzívna e-mailová prezentácia pre klienta
└── README.md               # Kompletná dokumentácia projektu a technický prehľad
```

---

## 🛠️ Lokálne Spustenie & Testovanie

Stránka nevyžaduje žiadne ťažké build nástroje ani Node.js runtime. Stačí ju otvoriť priamo v prehliadači:

```bash
# 1. Prechod do adresára
cd c:\VS\AI\AI_School\travelfun-redesign

# 2. Otvorenie v prehliadači (Windows)
start index.html
```

Alebo cez ľubovoľný lokálny HTTP server:
```bash
npx serve .
# alebo
python -m http.server 8080
```

---

## ✉️ Zodpovedné Kontakty (TRAVELFUN, s.r.o.)
- **Sídlo:** Bodice 189, 031 01 Liptovský Mikuláš, Slovensko
- **Telefónne linky:** +421 948 050 720 | +421 948 220 263
- **E-maily:** info@travelfun.sk | travelfun@travelfun.sk
