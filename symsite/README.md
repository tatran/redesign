# Redizajn webu Symsite Research (https://www.symsite.sk/)

Tento projekt predstavuje kompletný, prémiový a moderný redizajn webového sídla nezávislej analytickej agentúry **Symsite Research spol. s r.o.** (vydavateľa manažérskych ranných prehľadov **Ekonomika DNES** a **Slovak Business News TODAY**, oficiálneho partnera **The Economist Intelligence Unit** od roku 1998).

Web je navrhnutý v duchu najprestížnejších globálnych ekonomických a finančných platforiem (*Financial Times, Bloomberg, The Economist*) a plne podporuje **Svetlý (Light) aj Tmavý (Dark) režim** s okamžitým prepínačom a perzistenciou voľby.

---

## 🌓 Svetlý (Light) & Tmavý (Dark) režim

V analytickom a finančnom segmente čítajú manažéri správy skoro ráno (07:00–08:00) alebo neskoro večer. Podpora oboch režimov je preto kľúčovým prvkom používateľského komfortu.

- **Svetlý režim (Light mode — Editorial Morning)**:
  - Čisté, presvetlené pozadie (`bg-slate-50`, `bg-white`) s vysokým kontrastom písma.
  - Prestížna serifová typografia pre titulky (*Merriweather*) v kombinácii s ultra-čitateľným groteskom (*Inter*) pre analytické texty.
  - Hlboké modré akcenty (`#0e8ce9`, `#074b85`) a smaragdové indikátory rastu (`#10b981`).
  - Jemné vrstvenie papierového tieňa (`paper-shadow`) evokujúce tlačený ranný prehľad na manažérskom stole.

- **Tmavý režim (Dark mode — Executive Terminal)**:
  - Hlboké nočné bridlicové pozadie (`#070b14` a `slate-900`) optimalizované na minimalizáciu únavy očí pri rannom či večernom čítaní na OLED/LCD displejoch.
  - Zvýraznenie kľúčových dát a makroekonomických ukazovateľov pomocou jemného luminiscenčného svetla (cyan/sky/emerald).
  - Elegantné ohraničenia prvkov (`border-slate-800`), ktoré zachovávajú jasnú hierarchiu bez vizuálneho smogu.

- **Prepínač režimu**:
  - Tlačidlo so slnkom/mesiacom v pravej časti navigačnej lišty.
  - Automatické ukladanie do `localStorage` (`symsite_theme`).
  - Automatické rešpektovanie systémových preferencií (`prefers-color-scheme: dark`).

---

## 📊 Porovnanie: Pôvodný web (Wix) vs. Nový redizajn

| Oblasť | Pôvodný web (symsite.sk / Wix) | Nový moderný redizajn |
| :--- | :--- | :--- |
| **Technologický základ** | Zastaraný Wix builder, ťažké JS skripty, pomalé načítavanie, slabé SEO | Čisté moderné HTML5, Tailwind CSS, bleskurýchle načítanie (< 0.5s), nulový bloatware |
| **Vizuálna identita** | Generická šablóna, nevýrazná typografia, chýbajúci dojem prestížnej inštitúcie | Autoritatívny štýl Financial Times / Bloomberg, dedičstvo partnerstva s **The Economist (EIU)** od 1994 |
| **Témy** | Len statický biely podklad | **Plný Dark Mode aj Light Mode** s plynulým prepínaním |
| **Jazyková podpora** | Oddelené zložité Wix podstránky | **Okamžitý prepínač SK / EN** s dynamickým prekladom obsahu a ukážok |
| **Ukážka denného servisu** | Statické PDF odkazy zahrabané v texte | **Interaktívna živá čítačka "One-Page" denného briefingu** s filtrami podľa kategórií |
| **4 Pravidelné prílohy** | Len textový zoznam bez náhľadu | Interaktívne karty s modálnym oknom a detailnou štruktúrou príloh v cene |
| **Cenník & ROI** | Statické odseky s cenami bez DPH | Prehľadné karty, **prepínač Mesačná / Ročná fakturácia (-15%)** a **interaktívna kalkulačka ušetreného času a peňazí** |
| **Firemná multilicencia** | Malá nenápadná poznámka | Jasne komunikovaná konkurenčná výhoda: **Neobmedzený počet e-mailov v rámci firmy** |
| **Konverzný lievik** | Pasívny kontaktný e-mail | **Aktivácia 14-dňového bezplatného testu** jedným kliknutím s modálnym dialógom |

---

## 🚀 Kľúčové moduly nového riešenia

1. **Živá bežiaca páska makroekonomických ukazovateľov (Makro Pulz SK)**:
   - Zobrazuje aktuálne dáta: Rast HDP SR, inflácia HICP, miera nezamestnanosti, priemerná nominálna mzda, sadzba ECB a verejný deficit.
   - Plynulá CSS animácia s pozastavením pri prechode myšou (*hover pause*).

2. **Dve plnohodnotné jazykové edície**:
   - **Ekonomika DNES** (slovenská verzia, 85 €/mesiac) pre domáci manažment.
   - **Slovak Business News TODAY** (anglická verzia, 130 €/mesiac) pre expatov, zahraničné ambasády, obchodné komory a medzinárodné vedenie.
   - **Kombinovaný duálny balík** (150 €/mesiac) s okamžitou úsporou 65 € mesačne.

3. **Interaktívna čítačka ranného briefingu**:
   - Možnosť prepínať medzi slovenskou a anglickou ukážkou.
   - Filtrovanie podľa rubrík: *Hospodárska politika, Technológie & Investície, Súdne spory & Majetok, Mediálny trh*.
   - Pri každej správe je analytický kontext Symsite Research a zoznam overených primárnych zdrojov.

4. **Showcase 4 bezplatných mesačných príloh**:
   - *Nová legislatíva* (1. deň v mesiaci)
   - *Kľúčové indikátory* (15. deň v mesiaci)
   - *Makroekonomický prehľad* (kvartálne prognózy)
   - *Investície a majetkové zmeny* (M&A monitoring)
   - Možnosť otvoriť detailnú štruktúru každej prílohy v modálnom okne.

5. **Firemná kalkulačka návratnosti (ROI Calculator)**:
   - Posuvník pre 1 až 50 manažérov vo firme.
   - Okamžitý prepočet ušetrených hodín tímu mesačne (cca 14 hodín/manažér) a finančnej úspory v eurách ročne.

6. **Overené referencie z reálnej praxe**:
   - Citácie manažérov z Československej obchodnej banky (ČSOB), Ortac Resources, priemyselných lídrov a PR špecialistov.

7. **Oficiálne identifikačné a bankové údaje**:
   - Kompletné IČO, DIČ, IČ DPH, zápis v Obchodnom registri Mestského súdu Bratislava III, bankový účet v Tatra banke (IBAN/SWIFT) a priamy kontakt na hlavného analytika Vladimíra Dohnala.

---

## 💻 Spustenie a testovanie projektu

Súbory projektu sa nachádzajú v priečinku `symsite-redesign/`:

```bash
# Otvorenie v predvolenom prehliadači (Windows PowerShell)
Start-Process "c:\VS\AI\AI_School\symsite-redesign\index.html"
```

Alebo cez lokálny HTTP server (napr. cez Node.js):
```bash
npx serve symsite-redesign
```

Všetky štýly, ikony aj interaktívne skripty fungujú bez nutnosti kompilácie alebo inštalácie dodatočných balíčkov.
