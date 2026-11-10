# Redizajn webu PFCEU Group (https://www.profc.eu/)

Tento projekt predstavuje kompletný, moderný a prémiový redizajn firemného webu **PFCEU Group** (**PFCEU s.r.o.** & **PFC TAX & AUDIT s.r.o.**).

---

## 🚀 Kľúčové vylepšenia oproti pôvodnému webu

| Oblasť | Pôvodný web (2013/2014) | Nový moderný redizajn |
| :--- | :--- | :--- |
| **Vizuálna identita** | Starý Bootstrap 3, krikľavo červené tlačidlá, statický karusel | Prémiový "Executive European Advisory" štýl (navy/slate/brand blue) |
| **Architektúra dôvery** | Zmiešané informácie o dvoch firmách v jednom texte | Zreteľné rozdelenie na 2 synergické jednotky: **PFCEU** (stratégie & granty) a **PFC TAX** (Superodpočet & dane) |
| **Konverzné prvky** | Pasívne kontaktné údaje, chýbajúci lead generation | **Interaktívna kalkulačka Superodpočtu na VaV** s okamžitým výpočtom úspory na DPPO, **Sprievodca grantmi**, vyskakovací formulár auditu |
| **ESG & CSRD** | Len zmienka v slideri | Dedikovaná sekcia pre CSRD reporting, výpočet uhlíkovej stopy a dekarbonizačné dotácie |
| **Mobilná responzivita** | Zastaraný grid, nečitateľné drobné prvky | 100% responzívny design s moderným mobilným menu |
| **Rýchlosť & Technológia** | Staré jQuery 1.9.1 a spinedit pluginy | Moderný HTML5, Tailwind CSS, Lucide Vector Icons, čistý Vanilla JS |

---

## 🛠️ Zahrnuté interaktívne nástroje

1. **Kalkulačka daňovej úspory (Superodpočet na VaV)**
   - Umožňuje majiteľom a finančným riaditeľom (CFO) zadať ročné mzdové a materiálové výdavky na výskum a vývoj.
   - Dynamicky prepočítava 100% odpočet od základu dane a čistú úsporu na dani (sadzby 21% a 24%).
   - Tlačidlo s okamžitým preklikom na nezáväzný audit.

2. **Grantový sprievodca (Grant Finder Wizard)**
   - Rýchla 3-kroková voľba veľkosti firmy, odvetvia a cieľa investície.
   - Zobrazuje odporúčané dotačné schémy (Program Slovensko, Horizon Europe, Fond na spravodlivú transformáciu, Plán obnovy).

3. **Filtrovateľné referencie a klienti**
   - Rýchle filtrovanie projektov podľa priemyselných odvetví (Priemysel & Strojarina, IT & Technológie, Energetika & Odpady).
   - Zvýraznenie kľúčových klientov (DOXXbet, S&T Slovakia, Mäspoma, HYDAC, Dachser, Pilulka).

4. **Konzultačný modál a kontaktný formulár**
   - Elegantné vyskakovacie okno pre rezerváciu úvodného auditu s okamžitou spätnou väzbou.

---

## 💻 Ako si stránku otvoriť a spustiť

Súbor je plne autonómny a funkčný bez nutnosti inštalácie závislostí:
- Dvojklikom otvorte súbor `profc-redesign/index.html` v ľubovoľnom prehliadači (Chrome, Edge, Firefox, Safari).
- Alebo spustite lokálny server:
  ```bash
  cd profc-redesign
  npx serve .
  # alebo python -m http.server 8000
  ```
