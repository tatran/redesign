# Hotel Majolika**** Modra — Kompletný Redizajn Webovej Prezentácie

Moderný, responzívny a dizajnovo vycibrený redizajn oficiálnej webovej stránky **Hotel Majolika**** v Modre** ([pôvodná stránka: www.hotelmajolika.sk](https://www.hotelmajolika.sk/)).

---

## 🏛️ O Hoteli Majolika & Kontext Redizajnu

Hotel Majolika**** je unikátny boutique hotel sídliaci v pamiatkovo chránenom areáli **Starej keramiky** v slobodnom kráľovskom meste **Modra**.
- **1610:** Základom objektu je mohutný mestský fortifikačný hradobný systém so strážnym bastiónom.
- **1883:** Vzniklo tu Keramicko-priemyselné učilište, ktoré dalo základ slávnej **Slovenskej ľudovej majolike (SĽM)**. Vo veži bola postavená **kasselská pec**, pravdepodobne posledná zachovaná svojho druhu v strednej Európe v pôvodnom stave.
- **Dnes:** 4-hviezdičkový boutique hotel s 27 izbami (53 pevných lôžok), unikátnym wellness svetom s bazénom a saunami, klenbovou historickou vínnou pivnicou, reštauráciou Landsfeld, vyhliadkovou vežou a vlastným živým múzeom keramiky.
- **Krédo:** *„Chráňme dedičstvo našich otcov“* (historický nápis nad vchodom).

---

## 🚀 Kľúčové vylepšenia oproti pôvodnej stránke

| Oblasť | Pôvodný stav (2011, XHTML 1.0, PHP 5.6) | Nový Redizajn 2026 |
|---|---|---|
| **Dizajn & Vizuálna identita** | Pevná šírka 1002px, tmavé pozadie z roku 2011, nečitateľný text, zastarané písma. | Špičkový luxury boutique dizajn inšpirovaný tradičnou kobaltovou majolikou, teplou hlinou (terakotou) a zlatou glazúrou. |
| **Responzivita & Mobilné zariadenia** | Úplne neresponzívny web, vyžadoval zoomovanie na smartfónoch. | 100% Mobile-first responzívny layout, prispôsobený pre mobily, tablety, notebooky aj 4K monitory. |
| **Rezervačný systém (Booking Engine)** | Zastaraný statický textový formulár bez výpočtu cien. | **Interaktívna dynamická kalkulačka ceny** podľa počtu nocí, typu izby, hostí a doplnkových služieb s okamžitým prepočtom. |
| **Wellness prezentácia** | Krátky text v zozname. | Kompletná sekcia parných a vodných kúpeľov: bazén s protiprúdom, vírivka, bylinková sauna, fínska lávová sauna, ľadopád, tepidárium a rozpis časov. |
| **Múzeum & Bastión** | Zmiešané odkazy v menu, chýbajúce cenníky. | Samostatná sekcia múzea s cenníkom, otváracími hodinami a prezentáciou minikurzu točenia na hrnčiarskom kruhu. |
| **Gastronómia & Vínna pivnica** | Oddelené podstránky bez prepojenia. | Bohatá gastro sekcia: Reštaurácia Landsfeld (kapacita 60), Kaviareň s funkčnou keramickou pecou (kapacita 50) a Klenbová vínna pivnica s krbom. |
| **Ekológia & Technológie** | Skryté v neprehľadnom podmenu. | Zelený pilier hotela: bezplatná nabíjacia stanica EV v podzemnej garáži, solárne kolektory, rekuperácia, ekologické chladenie podzemnou vodou. |
| **Fotogaléria & Multimédiá** | Staré malé náhľady s popup oknami z roku 2011. | Rýchly filtrovateľný grid fotografií v plnom rozlíšení s moderným Fullscreen Lightboxom. |

---

## 🎨 Dizajnový systém

- **Farby:**
  - `Majolika Blue` (`#0e2b53` / `#1e4f8d`) — Hlboká kobaltová modrá symbolizujúca tradičnú majolikovú glazúru.
  - `Terracotta Clay` (`#c85a3a` / `#b84729`) — Farba pálenej hliny, tehly a keramickej dielne.
  - `Gold Glaze` (`#d4a359` / `#f0d297`) — Zlatistý akcent pripomínajúci ocenené modranské biele vína a históriu.
  - `Pottery Cream` (`#faf8f5` / `#f4ede2`) — Jemný podklad ručne robeného papiera a neglazovanej keramiky.
- **Typografia:**
  - Nadpisy: `Cinzel` & `Cormorant Garamond` (renesančná elegancia a kráľovský charakter).
  - Telo a rozhranie: `Plus Jakarta Sans` (maximálna čitateľnosť na všetkých obrazovkách).

---

## 🛠️ Použité technológie

- **HTML5 Semantic Standard** s plnou sémantikou, meta tagmi a Open Graph dátami.
- **Tailwind CSS (CDN)** pre precízne responzívne utility a animácie.
- **Lucide Icons** pre čisté, moderné vektorové piktogramy.
- **Vanilla JavaScript** (bez ťažkých frameworkov) pre bleskové načítanie, interaktívnu cenovú kalkulačku, filtrovanie galérie, modálne okná izieb a lightbox.
- **340+ reálnych fotografií** stiahnutých a optimalizovaných priamo z archívu hotela (izby, nádvorie, bazén, sauny, reštaurácia, pivnica, historické exponáty).

---

## 📂 Štruktúra projektu

```
hotelmajolika-redesign/
│
├── index.html           # Kompletný kód redizajnovanej stránky
├── README.md            # Dokumentácia a prehľad zmien
└── images/              # Archív reálnych fotografií a podkladov
    ├── uvod0.jpg ... uvod10.jpg          # Nádvorie, exteriér, architektúra
    ├── ubytovanie1.jpg ... 8.jpg         # Izby, apartmány, kúpeľne
    ├── wellness1.jpg ... 10.jpg          # Bazén, vírivka, sauny, tepidárium
    ├── restauracia1.jpg ... 7.jpg        # Reštaurácia Landsfeld
    ├── kaviaren1.jpg ... 4.jpg           # Kaviareň a keramická pec
    ├── pivnica1.jpg ... 7.jpg            # Klenbová vínna pivnica
    ├── muzeum1.JPG ... 7.JPG             # Múzeum a historické stroje
    ├── veza2.jpg ... 6.jpg               # Vyhliadková veža s indickými kreslami
    ├── kongresy1.jpg ... 6.jpg           # Kongresové a školiace sály
    ├── historia1.jpg ... 5.jpg           # Historické fotografie a učilište
    ├── charging_station.png, eco.jpg     # Ekológia a nabíjanie elektromobilov
    └── okolie1.jpg ... 8.jpg             # Modra a Malé Karpaty
```

---

## 🌟 Spustenie stránky

Stránku je možné spustiť priamo otvorením súboru:
```bash
# Otvorenie v prehliadači
hotelmajolika-redesign/index.html
```
Alebo cez ľubovoľný lokálny HTTP server (Live Server, `npx serve`, Python `http.server`).
