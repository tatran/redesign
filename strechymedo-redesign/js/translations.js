/**
 * Strechy Medo - Multilingual Translations (SK, EN, DE, PL, HU)
 * Complete parity across all user-facing strings
 */

const translations = {
  sk: {
    meta: {
      title: "Strechy Medo | Majstrovské strechy, precízne klampiarstvo a hydroizolácie pod Tatrami",
      desc: "Špecialista na šikmé a ploché strechy, titánzinkové a plechové falcované krytiny, hydroizolácie, drevenice a klampiarske práce na mieru v Poprade a na celom Slovensku."
    },
    nav: {
      brand: "STRECHY MEDO",
      brandSub: "Miro Medvec • Strechy & Klampiarstvo",
      services: "Služby",
      portfolio: "Realizácie",
      calculator: "Kalkulačka",
      about: "O nás",
      whyUs: "Prečo my",
      faq: "FAQ",
      contact: "Kontakt",
      freeQuote: "Cenová ponuka",
      callUs: "Zavolať teraz"
    },
    hero: {
      badge: "🛡️ Poctivé remeslo pod Vysokými Tatrami",
      title: "Strechy pripravené na",
      titleHighlight: "tatranské zimy.",
      subtitle: "Kompletné realizácie a rekonštrukcie striech, prémiové falcované titánzinky, plastové i asfaltové šindle, precízne klampiarske prvky a nekompromisné hydroizolácie.",
      ctaQuote: "Nezáväzná cenová ponuka",
      ctaPortfolio: "Pozrieť realizácie",
      stat1Number: "15+",
      stat1Text: "Rokov skúseností",
      stat2Number: "250+",
      stat2Text: "Dokončených striech",
      stat3Number: "100%",
      stat3Text: "Záruka tesnosti",
      stat4Number: "0",
      stat4Text: "Skrytých poplatkov"
    },
    badges: {
      b1: "🏔️ Odolnosť voči víchriciam a snehu",
      b2: "🔨 Remeselná precíznosť titánzinku",
      b3: "💧 Certifikované hydroizolácie",
      b4: "🤝 Pevná zmluvná cena"
    },
    services: {
      sectionBadge: "Naše Špecializácie",
      sectionTitle: "Kompletné strešné riešenia bez kompromisov",
      sectionDesc: "Od drevených krovov cez falcovaný plech až po moderné hydroizolácie plochých striech. Každý detail realizujeme s dôrazom na dlhovekosť.",
      s1Title: "Šikmé strechy & Pokrývačstvo",
      s1Desc: "Montáž škridlových krytín (pálená a betónová škridla), plechových krytín a debnenia. Presná pokládka s vetracími pásmi a parozábranami.",
      s1List: ["Bramac, Tondach, Creaton", "Kompletný krov a latovanie", "Difúzne a poistné fólie"],
      
      s2Title: "Falcovaný plech & Titánzinok",
      s2Desc: "Špičkové klampiarske remeslo. Dvojitá stojatá drážka, titánzinkové plechy Rheinzink/VMZINC a hliník Prefa pre modernú architektúru aj horské domy.",
      s2List: ["Trvácnosť 80+ rokov bez údržby", "Vhodné do extrémnych podmienok", "Elegantný minimalistický dizajn"],

      s3Title: "Ploché strechy & Hydroizolácie",
      s3Desc: "Profesionálna izolácia plochých striech PVC fóliami (Fatrafol, Bauder, Sika) a prémiovými SBS modifikovanými asfaltovými pásmi so zateplením.",
      s3List: ["Zváranie horúcim vzduchom", "Hydroizolácie terás a balkónov", "Základové dosky a spodná stavba"],

      s4Title: "Šindle pre drevenice & chaty",
      s4Desc: "Špeciálna montáž plastových šindľov Ekoternit / Capacco a asfaltových šindľov IKO/Katepal pre tradičné tatranské zruby a drevenice.",
      s4List: ["Vzhľad dreveného šindľa bez hniloby", "Vysoká odolnosť voči mrazu a UV", "Ideálne do horských oblastí"],

      s5Title: "Zákazkové klampiarstvo & Komíny",
      s5Desc: "Vlastná klampiarska výroba detailov: lemovanie komínov, vetracie hlavice, atypické čiapky komínov, atiky, rímsy a úžľabia na milimeter presne.",
      s5List: ["Oplechovanie prestupov a komínov", "Ručne tvarované čiapky komínov", "Zákazková dielňa v regióne Poprad"],

      s6Title: "Odkvapy, snehové zábrany & Okná",
      s6Desc: "Kompletné odkvapové systémy z farebného hliníka, medi a titánzinku. Montáž masívnych rúrkových snehových zábran a strešných okien Velux/Roto.",
      s6List: ["Ochrana pred lavínovým snehom", "Bezspojové a polkruhové žľaby", "Strešné okná a svetlovody"]
    },
    calculator: {
      badge: "Orientačný kalkulátor nákladov",
      title: "Vypočítajte si orientačnú cenu novej strechy",
      subtitle: "Zvoľte parametre vašej stavby a získajte okamžitý nezáväzný odhad investície. Pre presnú cenovú ponuku s vami radi spravíme bezplatnú obhliadku.",
      step1: "1. Typ strechy",
      roofPitched: "Šikmá sedlová / pultová",
      roofHipped: "Valbová / členitá",
      roofFlat: "Plochá strecha",
      roofCottage: "Drevenica / zrub",
      step2: "2. Rozloha strechy (m²)",
      step3: "3. Preferovaná krytina / technológia",
      matTile: "Pálená / Betónová škridla (Bramac/Tondach)",
      matTitanzinc: "Falcovaný titánzinok / hliník (Rheinzink/Prefa)",
      matShingle: "Plastový / Asfaltový šindeľ (Ekoternit/IKO)",
      matFlatPVC: "PVC hydroizolačná fólia (Fatrafol/Bauder)",
      matSheetMetal: "Trapézový / škridloplech",
      step4: "4. Doplnkové práce a príslušenstvo",
      optGutter: "Kompletný odkvapový systém (žľaby, zvody)",
      optSnow: "Systém snehových zábran do horských polôh",
      optChimney: "Oplechovanie komínov a umelecké čiapky",
      optInsulation: "Zateplenie PIR doskami / minerálnou vlnou",
      optDisposal: "Demontáž a ekologická likvidácia starej krytiny",
      resultTitle: "Orientačný odhad investície:",
      priceRange: "Odhad materiálu a montáže",
      priceDisclaimer: "*Uvedená cena je orientačná vrátane štandardného montážneho materiálu a práce. Presná kalkulácia vzniká po bezplatnej obhliadke a zameraní.",
      ctaPrefill: "Chcem nezáväznú cenovú ponuku s týmito parametrami ➔"
    },
    portfolio: {
      badge: "Fotogaléria zo stavieb",
      title: "Skutočné realizácie z nášho Instagramu",
      subtitle: "Pozrite si autentické fotografie z našich najnovších projektov v regióne Poprad, Spiš, Tatry, Levoča, Smižany a Prešov. Žiadne fotobanky, len poctivá práca.",
      tabAll: "Všetky projekty",
      tabPitched: "Šikmé a škridly",
      tabMetal: "Titánzinok a falc",
      tabShingle: "Šindle a drevenice",
      tabTinsmith: "Klampiarstvo a komíny",
      viewOnIg: "Sledujte nás na Instagrame @strechy_medo",
      igFollowers: "54+ uverejnených prác a fotoreportáží z terénu",
      projects: {
        levoca: {
          title: "Rodinný dom Levoča",
          tag: "Pálená škridla & Klampiarstvo",
          loc: "Levoča, Spiš",
          desc: "Kompletné zhotovenie strešného plášťa s precíznym lemovaním atík, úžľabiami a odvetraním na novostavbe rodinného domu."
        },
        horka: {
          title: "Hôrka Primovce",
          tag: "Moderná šikmá strecha",
          loc: "Hôrka - Primovce, Poprad",
          desc: "Špičková realizácia moderného strešného profilu s dôrazom na vodotesné prestupy a odvodnenie."
        },
        poprad_velka: {
          title: "Rodinný dom Poprad - Veľká",
          tag: "Asfaltový šindeľ & Rekonštrukcia",
          loc: "Poprad - mestská časť Veľká",
          desc: "Dôkladná pokládka asfaltového šindľa s celoplošným podkladovým pásom a precíznym oplechovaním nároží."
        },
        smizany: {
          title: "Rodinný dom Smižany",
          tag: "Kompletná rekonštrukcia krovu a krytiny",
          loc: "Smižany, okr. Spišská Nová Ves",
          desc: "Generálna oprava strechy s výmenou poškodených krokiev, zateplením a osadením novej odolnej krytiny."
        },
        spisske_bystre: {
          title: "Strecha Spišské Bystré",
          tag: "Rozsiahly rezidenčný projekt",
          loc: "Spišské Bystré, okres Poprad",
          desc: "Veľkorysá strešná konštrukcia s integrovanými strešnými oknami, odvetraním hrebeňa a masívnymi snehovými hákmi."
        },
        lopusna: {
          title: "Drevenica Lopušná Dolina",
          tag: "Plastový šindeľ pre horské zruby",
          loc: "Lopušná Dolina, Vysoké Tatry",
          desc: "Montáž moderného plastového šindľa zachovávajúceho autentický vzhľad tradičnej tatranskej drevenice s nulovou potrebou údržby."
        },
        svit: {
          title: "Rodinný dom Svit Podskalka",
          tag: "Šikmá strecha & Rekonštrukcia",
          loc: "Svit - Podskalka",
          desc: "Precízne remeselné zapracovanie nároží, valieb a komínových prestupov v podtatranskej lokalite."
        },
        ciapka: {
          title: "Umelecké klampiarstvo - Čiapka komína",
          tag: "Zákazková výroba na mieru",
          loc: "Dielňa Poprad / montáž v teréne",
          desc: "Ručne vyrábaná komínová čiapka z odolného plechu zaručujúca 100% ochranu komínového telesa pred zrážkami."
        },
        norwit: {
          title: "Objekt Norwit Poprad",
          tag: "Priemyselné vetracie hlavice & Titánzinok",
          loc: "Poprad, areál Norwit",
          desc: "Odborná montáž odvetrania strechy a oplechovanie veľkých technologických prestupov materiálom titánzinok."
        },
        presov: {
          title: "Rodinný dom Prešov (Kuzmastrechy)",
          tag: "Falcovaný titánzinok na kľúč",
          loc: "Prešov",
          desc: "Náročné remeselné prevedenie dvojitej stojatej drážky z titánzinku pre moderný rodinný dom."
        }
      }
    },
    beforeAfter: {
      badge: "Rozdiel, ktorý uvidíte aj po 30 rokoch",
      title: "Od zatekajúcej havárie k dokonalej ochrane domova",
      desc: "Staré zvetrané krytiny trpia mikrotrhlinami, prehnitým latovaním a nedostatočným odvetraním. Pozrite sa, ako vyzerá nová strecha od tímu Strechy Medo.",
      labelBefore: "Pôvodný zvetraný stav",
      labelAfter: "Nový prémiový strešný plášť",
      sliderNotice: "Potiahnite posuvník doľava / doprava pre porovnanie"
    },
    about: {
      badge: "O majstrovi a tíme",
      title: "Miro Medvec — Strechy postavené na rešpekte k remeslu",
      p1: "Vyrastali sme v regióne pod Vysokými Tatrami, kde počasie neodpúšťa žiadne skratky. Víchrice, polmetrové snehové periny a jarné topenie preveria každé jedno úžľabie, spoj aj skrutku.",
      p2: "Značka Strechy Medo (Miro Medvec) vznikla z vášne pre poctivé remeslo. Či už ide o historickú drevenicu v Lopušnej Doline, modernú vilu s falcovaným titánzinkom v Prešove, alebo rodinný dom v Levoči, pracujeme tak, ako by sme stavali pre vlastnú rodinu.",
      quote: "„Strecha nie je len krytina. Je to štít vášho domova. Preto na materiáloch a hydroizolácii nikdy nešetríme.“",
      author: "Miroslav Medvec, Zakladateľ & Majster klampiar",
      features: [
        { title: "Lokálny majster", desc: "Rýchla dostupnosť v regióne Poprad, Spiš, Tatry, Liptov a východné Slovensko." },
        { title: "Špičkové materiály", desc: "Spolupracujeme výhradne s certifikovanými značkami: Rheinzink, Fatrafol, Bramac, Tondach, Ekoternit." },
        { title: "Vlastná klampiarska výroba", desc: "Atypické lemovania a čiapky komínov si vyrábame sami, na milimeter presne." }
      ]
    },
    workflow: {
      badge: "Jednoduchý postup",
      title: "Ako prebieha spolupráca s nami?",
      step1Title: "1. Bezplatná obhliadka",
      step1Desc: "Prídeme k vám, zameriame strechu, skontrolujeme krov a prekonzultujeme vaše predstavy a možnosti rozpočtu.",
      step2Title: "2. Presný položkový rozpočet",
      step2Desc: "Do 48 hodín od nás dostanete transparentnú kalkuláciu. Cena, ktorú podpíšeme v zmluve, platí bez skrytých poplatkov.",
      step3Title: "3. Rýchla a čistá montáž",
      step3Desc: "Zabezpečíme dovoz materiálu, bezpečnosť, precíznu pokládku a každý deň po sebe zanecháme upratané stavenisko.",
      step4Title: "4. Odovzdanie a záruka",
      step4Desc: "Spoločne skontrolujeme každý detail, odovzdáme záručné listy na materiál i prácu a poskytujeme dlhoročný servis."
    },
    testimonials: {
      badge: "Referencie od zákazníkov",
      title: "Čo hovoria majitelia domov, ktorým sme zastrešili domov",
      t1Text: "„Pán Medvec a jeho partia nám robili strechu na drevenici v Lopušnej Doline. Plastový šindeľ vyzerá úžasne, odolal tohtoročným víchriciam bez jediného zaváhania. Prístup, dochvíľnosť a poriadok na jednotku s hviezdičkou.“",
      t1Author: "Ing. Peter Kováč",
      t1Loc: "Lopušná Dolina, Vysoké Tatry",
      t2Text: "„Mali sme veľký problém so zatekaním okolo komína a starých úžľabí na dome v Poprade-Veľkej. Miro prišiel, vyrobil na mieru novú čiapku komína a pretesnil celú plochu. Odvtedy ani kvapka. Odporúčam všetkými desiatimi.“",
      t2Author: "Marta Janigová",
      t2Loc: "Poprad - Veľká",
      t3Text: "„Na novostavbe v Levoči sme chceli špičkové klampiarstvo a škridlu Tondach. Výsledok predčil očakávania. Detaily lemovaní a žľabov sú hotové umelecké dielo. Pevná cena bola dodržaná do posledného centu.“",
      t3Author: "Michal Rusnák",
      t3Loc: "Levoča"
    },
    faq: {
      badge: "Odpovede na vaše otázky",
      title: "Často kladené otázky",
      q1: "V akom regióne realizujete zákazky?",
      a1: "Našou domovskou základňou je Poprad a podtatranský región (Vysoké Tatry, Kežmarok, Spišská Nová Ves, Levoča, Stará Ľubovňa, Svit, Liptov). Pri zaujímavých alebo väčších zákazkách (titánzinkové falcované strechy, hydroizolácie) však pôsobíme po celom Slovensku.",
      q2: "Koľko trvá priemerná rekonštrukcia rodinného domu?",
      a2: "Štandardná výmena krytiny s latovaním a klampiarstvom na bežnom rodinnom dome trvá 5 až 9 pracovných dní v závislosti od počasia a zložitosti tvaru strechy. Plochá strecha s PVC fóliou sa často zvládne za 2 až 4 dni.",
      q3: "Čo je lepšie: falcovaný plech, škridla alebo plastový šindeľ?",
      a3: "Záleží na type stavby a sklone strechy. Pre moderné domy a nízke sklony je kráľom falcovaný titánzinok alebo hliník. Pre klasické rodinné domy so sklonom nad 22° je ideálna pálená/betónová škridla. Pre zruby a drevenice v horských polohách jednoznačne odporúčame bezúdržbový plastový šindeľ Ekoternit.",
      q4: "Robíte aj havarijné opravy a pretesňovanie zatekajúcich striech?",
      a4: "Áno! Vykonávame diagnostiku zatekania, opravy poškodených škridiel po krupobití, pretesnenie prestupov, výmenu zhnitých častí debnenia a montáž nových komínových lemovaní.",
      q5: "Poskytujete záruku na vykonané práce?",
      a5: "Samozrejme. Na samotnú montáž poskytujeme zmluvnú záruku 5 až 10 rokov. Výrobcovia nami dodávaných krytín (Bramac, Tondach, Rheinzink, Ekoternit) navyše poskytujú materiálovú záruku 30 až 50 rokov."
    },
    contact: {
      badge: "Začnite konzultáciou",
      title: "Získajte bezplatnú obhliadku a cenovú ponuku",
      subtitle: "Ozvite sa nám telefonicky, cez WhatsApp, správou na Instagrame alebo vyplňte formulár nižšie. Odpovedáme obratom.",
      phoneLabel: "Telefón (priamy kontakt):",
      phoneVal: "+421 905 226 930",
      emailLabel: "E-mail:",
      emailVal: "strechymedo@gmail.com",
      igLabel: "Instagram profil:",
      igVal: "@strechy_medo",
      locLabel: "Sídlo a dielňa:",
      locVal: "Poprad & Spišský región, Slovensko",
      hoursLabel: "Pracovná doba:",
      hoursVal: "Po – So: 7:00 – 18:00 (Havarijné stavy nonstop)",
      formTitle: "Kontaktný & Popytový formulár",
      formName: "Meno a priezvisko *",
      formPhone: "Telefónne číslo *",
      formEmail: "Váš E-mail *",
      formLocation: "Mesto / Lokalita stavby *",
      formService: "Druh požadovanej služby",
      formServicePlaceholder: "-- Vyberte službu --",
      serviceOption1: "Nová šikmá strecha (škridla / plech)",
      serviceOption2: "Falcovaný titánzinok / hliník",
      serviceOption3: "Plochá strecha & Hydroizolácia fóliou",
      serviceOption4: "Drevenica / chata (plastový šindeľ)",
      serviceOption5: "Klampiarstvo / Oplechovanie komína",
      serviceOption6: "Rekonštrukcia / Oprava zatekania",
      formMessage: "Popis projektu, približná rozloha alebo otázka...",
      formSubmit: "Odoslať nezáväzný dopyt ➔",
      formSubmitting: "Odosielam dopyt...",
      formSuccessTitle: "Ďakujeme! Vaša správa bola úspešne odoslaná.",
      formSuccessDesc: "Pán Miro Medvec sa vám ozve v priebehu 24 hodín s návrhom obhliadky."
    },
    footer: {
      tagline: "Prvotriedne strechy, falcované plechy a precízne hydroizolácie pre Tatry, Spiš a celé Slovensko.",
      quickLinks: "Rýchla navigácia",
      servicesTitle: "Naše služby",
      contactTitle: "Kontaktujte nás",
      rights: "Všetky práva vyhradené.",
      designedWith: "Redizajn s autentickými fotografiami z Instagramu @strechy_medo."
    }
  },

  en: {
    meta: {
      title: "Strechy Medo | Master Roofing, Precision Tinsmithing & Waterproofing under the Tatras",
      desc: "Specialist in pitched and flat roofs, standing seam titanzinc, waterproofing membranes, wooden chalets, and bespoke tinsmithing across Slovakia."
    },
    nav: {
      brand: "STRECHY MEDO",
      brandSub: "Miro Medvec • Roofing & Tinsmithing",
      services: "Services",
      portfolio: "Projects",
      calculator: "Calculator",
      about: "About Us",
      whyUs: "Why Us",
      faq: "FAQ",
      contact: "Contact",
      freeQuote: "Get a Quote",
      callUs: "Call Now"
    },
    hero: {
      badge: "🛡️ Honest Craftsmanship Beneath the High Tatras",
      title: "Roofs engineered for",
      titleHighlight: "harsh alpine winters.",
      subtitle: "Complete new installations and roof restorations, premium standing seam titanzinc, synthetic and bitumen shingles, custom chimney craft, and zero-compromise waterproofing.",
      ctaQuote: "Free Non-Binding Quote",
      ctaPortfolio: "Explore Our Work",
      stat1Number: "15+",
      stat1Text: "Years of Master Craft",
      stat2Number: "250+",
      stat2Text: "Completed Roofs",
      stat3Number: "100%",
      stat3Text: "Leak-Tight Guarantee",
      stat4Number: "0",
      stat4Text: "Hidden Surcharges"
    },
    badges: {
      b1: "🏔️ Built for heavy snow & storm winds",
      b2: "🔨 Precision standing seam titanzinc",
      b3: "💧 Certified waterproofing membranes",
      b4: "🤝 Guaranteed contract price"
    },
    services: {
      sectionBadge: "Our Expertise",
      sectionTitle: "Comprehensive Roofing Solutions Without Compromise",
      sectionDesc: "From heavy timber trusses to standing seam zinc and modern flat roof membrane systems. Every joint is crafted for multi-decade durability.",
      s1Title: "Pitched Roofs & Tiling",
      s1Desc: "Installation of clay and concrete tiles, slate-look sheets, and structural timber battening. Precision layout with breathable underlayment and ridge ventilation.",
      s1List: ["Bramac, Tondach, Creaton tiles", "Full roof carpentry & battening", "High-performance vapor barriers"],

      s2Title: "Standing Seam Titanzinc & Metal",
      s2Desc: "Supreme tinsmith mastery. Double standing seams with Rheinzink, VMZINC, and Prefa aluminum for contemporary architecture and alpine homes.",
      s2List: ["80+ years maintenance-free lifespan", "Engineered for extreme freeze-thaw cycles", "Sleek architectural aesthetic"],

      s3Title: "Flat Roofs & Waterproofing",
      s3Desc: "High-grade PVC/TPO membrane roofing (Fatrafol, Bauder, Sika) and torch-on modified SBS bitumen systems with premium thermal insulation.",
      s3List: ["Precision hot-air welding", "Terrace, balcony & green roof prep", "Basement & foundation water barriers"],

      s4Title: "Shingles for Log Cabins & Chalets",
      s4Desc: "Specialist installation of synthetic shingles (Ekoternit, Capacco) and architectural bitumen shingles (IKO, Katepal) for traditional alpine chalets.",
      s4List: ["Rustic wood-shingle look without rotting", "Total resistance to hail, UV and ice dams", "Ideal for mountain elevations"],

      s5Title: "Bespoke Tinsmithing & Chimneys",
      s5Desc: "In-house metal fabrication: chimney flashing, ventilated cowl caps, parapet capstones, custom cornices, and valley gutters accurate to the millimeter.",
      s5List: ["Bespoke chimney crown caps", "Complex wall-to-roof transitions", "Own sheet metal workshop in Poprad"],

      s6Title: "Gutters, Snow Retainers & Skylights",
      s6Desc: "Continuous seamless and half-round gutters in coated aluminum, copper, and titanzinc. Heavy-duty pipe snow guards and Velux/Roto roof window integration.",
      s6List: ["Avalanche snow protection systems", "Deep capacity gutters and downspouts", "Certified roof window installation"]
    },
    calculator: {
      badge: "Instant Estimate Tool",
      title: "Calculate an Estimated Cost for Your New Roof",
      subtitle: "Select your project parameters below to get an instant transparent estimate. For a binding final quotation, we will gladly arrange a free on-site survey.",
      step1: "1. Roof Architecture",
      roofPitched: "Gable / Shed Roof",
      roofHipped: "Hipped / Complex Roof",
      roofFlat: "Flat Membrane Roof",
      roofCottage: "Alpine Chalet / Log Cabin",
      step2: "2. Roof Area (m²)",
      step3: "3. Preferred Material & Technique",
      matTile: "Clay / Concrete Tile (Bramac/Tondach)",
      matTitanzinc: "Standing Seam Titanzinc / Alu (Rheinzink/Prefa)",
      matShingle: "Synthetic / Bitumen Shingle (Ekoternit/IKO)",
      matFlatPVC: "PVC Waterproofing Membrane (Fatrafol/Bauder)",
      matSheetMetal: "Trapezoidal / Corrugated Metal Sheet",
      step4: "4. Add-on Services & Accessories",
      optGutter: "Complete gutter & downspout drainage system",
      optSnow: "Alpine-grade snow barrier system",
      optChimney: "Chimney cladding & hand-crafted crown cap",
      optInsulation: "PIR boards / mineral wool thermal insulation",
      optDisposal: "Removal and eco-friendly disposal of old roofing",
      resultTitle: "Estimated Investment Range:",
      priceRange: "Material & Labor Estimate",
      priceDisclaimer: "*The calculated price is indicative and includes standard mounting materials and master labor. Final binding calculation follows an on-site inspection.",
      ctaPrefill: "Request Free Quote with These Specs ➔"
    },
    portfolio: {
      badge: "Real Jobsite Gallery",
      title: "Authentic Projects from Our Instagram",
      subtitle: "Browse real, unedited photographs of our recent works across Poprad, Spiš, the High Tatras, Levoča, Smižany, and Prešov. Real craftsmanship you can trust.",
      tabAll: "All Projects",
      tabPitched: "Pitched & Tiles",
      tabMetal: "Titanzinc & Seam",
      tabShingle: "Shingles & Chalets",
      tabTinsmith: "Tinsmith & Chimneys",
      viewOnIg: "Follow us on Instagram @strechy_medo",
      igFollowers: "54+ published projects and jobsite photo reports",
      projects: {
        levoca: {
          title: "Residential House Levoča",
          tag: "Clay Tile & Custom Flashing",
          loc: "Levoča, Spiš Region",
          desc: "Complete roof envelope construction featuring custom parapet transitions, valleys, and ventilation for a newly built home."
        },
        horka: {
          title: "Hôrka Primovce Residence",
          tag: "Modern Pitched Roof",
          loc: "Hôrka - Primovce, Poprad",
          desc: "Flawless modern roof profile with emphasis on watertight transitions and optimized perimeter drainage."
        },
        poprad_velka: {
          title: "Family Home Poprad - Veľká",
          tag: "Asphalt Shingle Restoration",
          loc: "Poprad - Veľká District",
          desc: "Meticulous asphalt shingle laydown over continuous solid decking with heavy-duty ridge and gable flashings."
        },
        smizany: {
          title: "Family House Smižany",
          tag: "Complete Truss & Roof Renewal",
          loc: "Smižany, Spišská Nová Ves",
          desc: "Full roof overhaul including damaged rafter replacement, new breathable layers, and long-lasting tiling."
        },
        spisske_bystre: {
          title: "Roof in Spišské Bystré",
          tag: "Large Residential Complex",
          loc: "Spišské Bystré, Poprad",
          desc: "Spacious architectural roof structure with integrated roof windows, ridge ventilation, and heavy-duty snow retainers."
        },
        lopusna: {
          title: "Log Chalet Lopušná Dolina",
          tag: "Synthetic Shingles for Mountain Cabins",
          loc: "Lopušná Dolina, High Tatras",
          desc: "Installation of zero-maintenance synthetic shingles preserving the beloved rustic look of traditional Slovak timber chalets."
        },
        svit: {
          title: "Family Home Svit Podskalka",
          tag: "Pitched Roof Renovation",
          loc: "Svit - Podskalka",
          desc: "High-grade flashing of valleys, hips, and chimney junctions tailored for harsh High Tatra weather exposure."
        },
        ciapka: {
          title: "Artisanal Tinsmithing - Chimney Cap",
          tag: "Custom Sheet Metal Fabrication",
          loc: "Poprad Workshop / Field Assembly",
          desc: "Handcrafted aerodynamic chimney cap protecting the flue and masonry structure 100% from driving rain and snow."
        },
        norwit: {
          title: "Norwit Facility Poprad",
          tag: "Industrial Vents & Titanzinc Work",
          loc: "Poprad Industrial Zone",
          desc: "Professional installation of roof ventilation units and large-scale architectural cladding using pure titanzinc."
        },
        presov: {
          title: "Family House Prešov (Kuzmastrechy)",
          tag: "Turnkey Standing Seam Titanzinc",
          loc: "Prešov",
          desc: "Demanding double standing seam titanzinc craft delivering modern aesthetics and century-long durability."
        }
      }
    },
    beforeAfter: {
      badge: "The Difference You See 30 Years Later",
      title: "From Leaking Disaster to Complete Home Protection",
      desc: "Old, weathered roofs suffer from microcracks, rotting battens, and compromised flashing. See how a new Strechy Medo roof transforms home safety.",
      labelBefore: "Original Weathered Condition",
      labelAfter: "New Premium Strechy Medo Roof",
      sliderNotice: "Drag the slider left / right to compare"
    },
    about: {
      badge: "Master & Team Philosophy",
      title: "Miro Medvec — Roofing Built on Honest Respect for the Craft",
      p1: "We were raised right beneath the High Tatras, where extreme weather forgives no shortcuts. Howling winter storms, heavy snow loads, and torrential mountain rains test every screw, seam, and valley.",
      p2: "Strechy Medo (led by master craftsman Miro Medvec) was founded on genuine devotion to the trade. Whether it's a historic timber chalet in Lopušná Dolina, a standing seam luxury villa in Prešov, or a family residence in Levoča, we build as if it were for our own family.",
      quote: "“A roof isn't just tiles. It's the shield of your entire home. That is why we never compromise on materials or waterproofing.”",
      author: "Miroslav Medvec, Founder & Master Tinsmith",
      features: [
        { title: "Local Tatra Craftsmen", desc: "Fast response in Poprad, Spiš, the High Tatras, Liptov, and across Slovakia." },
        { title: "Certified Materials", desc: "Partnering exclusively with proven leaders: Rheinzink, Fatrafol, Bramac, Tondach, Ekoternit." },
        { title: "In-House Metal Workshop", desc: "Custom chimney cowls, standing seams, and flashings built to the millimeter." }
      ]
    },
    workflow: {
      badge: "Transparent Process",
      title: "How We Deliver Your Project",
      step1Title: "1. Free On-Site Inspection",
      step1Desc: "We visit your property, accurately measure the roof, inspect the timbers, and discuss your aesthetic and budget goals.",
      step2Title: "2. Detailed Itemized Quote",
      step2Desc: "Within 48 hours, you receive a transparent breakdown. The price agreed in the contract is fixed and final.",
      step3Title: "3. Rapid & Clean Execution",
      step3Desc: "We handle material delivery, strict safety, meticulous installation, and ensure a spotless jobsite every single day.",
      step4Title: "4. Handover & Long Warranty",
      step4Desc: "We inspect every detail with you, hand over comprehensive material and labor warranties, and provide ongoing support."
    },
    testimonials: {
      badge: "Client Testimonials",
      title: "What Homeowners Say About Strechy Medo",
      t1Text: "“Miro and his crew did the roof on our wooden chalet in Lopušná Dolina. The synthetic shingles look stunning and handled this winter's gales without a flinch. Punctuality, cleanliness, and craftsmanship were simply top tier.”",
      t1Author: "Peter Kováč",
      t1Loc: "Lopušná Dolina, High Tatras",
      t2Text: "“We had persistent leaks around our chimney and valleys in Poprad-Veľká. Miro came, crafted a bespoke chimney cap, and resealed the entire perimeter. Not a single drop since. Highly recommended!”",
      t2Author: "Marta Janigová",
      t2Loc: "Poprad - Veľká",
      t3Text: "“For our new home in Levoča, we wanted premium tinsmithing with Tondach tiles. The result exceeded all our expectations. The flashings are works of art, and the contracted price was kept to the exact cent.”",
      t3Author: "Michal Rusnák",
      t3Loc: "Levoča"
    },
    faq: {
      badge: "Answers to Common Questions",
      title: "Frequently Asked Questions",
      q1: "Which regions do you service?",
      a1: "Our primary base is Poprad and the High Tatras region (Poprad, Kežmarok, Spišská Nová Ves, Levoča, Svit, Liptov). For specialized projects such as standing seam titanzinc roofs or flat roof membranes, we service all of Slovakia.",
      q2: "How long does a typical family house reroof take?",
      a2: "A standard roof replacement including battens, tiling, and tinsmithing takes between 5 to 9 business days depending on weather and roof complexity. Flat roofs with PVC membranes are often completed within 2 to 4 days.",
      q3: "Which is best: Standing seam metal, clay tiles, or synthetic shingles?",
      a3: "It depends on roof pitch and building style. For low slopes and sleek modern homes, standing seam titanzinc or aluminum is unmatched. For traditional family homes with slope >22°, clay or concrete tiles are ideal. For log cabins and chalets in heavy snow areas, synthetic shingles (Ekoternit) are virtually indestructible.",
      q4: "Do you handle emergency roof leak repairs?",
      a4: "Yes! We diagnose leaks with thermal inspections, replace damaged tiles after hail storms, replace rotten battens, and re-flash leaky chimneys and skylights.",
      q5: "What warranties do you provide?",
      a5: "We provide an explicit contractual workmanship warranty of 5 to 10 years. In addition, our material partners (Bramac, Tondach, Rheinzink, Ekoternit) offer manufacturer guarantees of 30 to 50 years."
    },
    contact: {
      badge: "Start Your Project",
      title: "Request a Free Inspection & Quotation",
      subtitle: "Get in touch by phone, WhatsApp, Instagram DM, or simply submit the quick inquiry form below. We respond promptly.",
      phoneLabel: "Phone (Direct Master Line):",
      phoneVal: "+421 905 226 930",
      emailLabel: "Email:",
      emailVal: "strechymedo@gmail.com",
      igLabel: "Instagram Profile:",
      igVal: "@strechy_medo",
      locLabel: "Workshop & Base:",
      locVal: "Poprad & Spiš Region, Slovakia",
      hoursLabel: "Working Hours:",
      hoursVal: "Mon – Sat: 7:00 AM – 6:00 PM (Emergency calls 24/7)",
      formTitle: "Project Inquiry Form",
      formName: "Full Name *",
      formPhone: "Phone Number *",
      formEmail: "Email Address *",
      formLocation: "City / Site Location *",
      formService: "Required Service",
      formServicePlaceholder: "-- Select a Service --",
      serviceOption1: "New Pitched Roof (Tiles / Metal)",
      serviceOption2: "Standing Seam Titanzinc / Alu",
      serviceOption3: "Flat Roof & Waterproofing Membrane",
      serviceOption4: "Chalet / Log Cabin (Synthetic Shingles)",
      serviceOption5: "Custom Tinsmithing / Chimney Flashing",
      serviceOption6: "Roof Restoration / Leak Repair",
      formMessage: "Project details, estimated area, or special requests...",
      formSubmit: "Send Inquiry Now ➔",
      formSubmitting: "Sending your inquiry...",
      formSuccessTitle: "Thank you! Your request was received.",
      formSuccessDesc: "Miro Medvec will contact you within 24 hours to arrange an inspection."
    },
    footer: {
      tagline: "First-class roofs, standing seam sheet metal, and precision waterproofing for the Tatras, Spiš, and across Slovakia.",
      quickLinks: "Quick Navigation",
      servicesTitle: "Our Services",
      contactTitle: "Get in Touch",
      rights: "All rights reserved.",
      designedWith: "Redesign using authentic jobsite photography from Instagram @strechy_medo."
    }
  },

  de: {
    meta: {
      title: "Strechy Medo | Meisterhafte Dacheindeckung, Spenglerei & Bauwerksabdichtung unter der Hohen Tatra",
      desc: "Spezialist für Steildächer, Flachdächer, Stehfalz-Titanzink, Bauwerksabdichtung, Holzhäuser und maßgefertigte Spenglerarbeiten in der Slowakei."
    },
    nav: {
      brand: "STRECHY MEDO",
      brandSub: "Miro Medvec • Dachdecker- & Spengler-Handwerk",
      services: "Leistungen",
      portfolio: "Projekte",
      calculator: "Rechner",
      about: "Über uns",
      whyUs: "Vorteile",
      faq: "FAQ",
      contact: "Kontakt",
      freeQuote: "Angebot anfordern",
      callUs: "Jetzt anrufen"
    },
    hero: {
      badge: "🛡️ Ehrliches Handwerk am Fuße der Hohen Tatra",
      title: "Dächer gerüstet für",
      titleHighlight: "alpine Winterstürme.",
      subtitle: "Komplette Neueindeckungen und Sanierungen, hochwertiger Stehfalz aus Titanzink, Schindeln für Holzhäuser, maßgeschneiderte Kaminverkleidungen und kompromisslose Bauwerksabdichtung.",
      ctaQuote: "Kostenloses Angebot",
      ctaPortfolio: "Projekte ansehen",
      stat1Number: "15+",
      stat1Text: "Jahre Handwerkserfahrung",
      stat2Number: "250+",
      stat2Text: "Realisierte Dächer",
      stat3Number: "100%",
      stat3Text: "Dichtheitsgarantie",
      stat4Number: "0",
      stat4Text: "Versteckte Kosten"
    },
    badges: {
      b1: "🏔️ Höchste Schnee- und Windlastbeständigkeit",
      b2: "🔨 Meisterhafte Stehfalztechnik aus Titanzink",
      b3: "💧 Zertifizierte PVC- & Bitumen-Abdichtung",
      b4: "🤝 Garantierter Festpreis laut Vertrag"
    },
    services: {
      sectionBadge: "Unsere Fachgebiete",
      sectionTitle: "Ganzheitliche Dachlösungen ohne Kompromisse",
      sectionDesc: "Vom massiven Dachstuhl über elegante Stehfalzdeckungen bis hin zu modernen Flachdach-Abdichtungen. Jedes Detail wird auf maximale Langlebigkeit ausgelegt.",
      s1Title: "Steildächer & Ziegeleindeckung",
      s1Desc: "Verlegung von Tonziegeln, Betondachsteinen und Schieferoptik-Eindeckungen samt Lattung, diffusionsoffenen Unterspannbahnen und Firstentlüftung.",
      s1List: ["Bramac, Tondach, Creaton Ziegel", "Komplette Holzbau- und Lattenkonstruktion", "Hochwertige Dampfbremsen & Unterdächer"],

      s2Title: "Stehfalzdeckung & Titanzink",
      s2Desc: "Höchste Spenglerkunst. Doppelstehfalz mit Rheinzink, VMZINC und Prefa Aluminium für anspruchsvolle moderne Architektur und Berghäuser.",
      s2List: ["Über 80 Jahre wartungsfreie Lebensdauer", "Optimal für extreme Frost-Tau-Zyklen", "Elegante, minimalistische Ästhetik"],

      s3Title: "Flachdächer & Bauwerksabdichtung",
      s3Desc: "Professionelle Abdichtung mit Premium-PVC/TPO-Bahnen (Fatrafol, Bauder, Sika) sowie elastischen SBS-Bitumenschweißbahnen inklusive Wärmedämmung.",
      s3List: ["Präzise Heißluftverschweißung", "Terrassen-, Balkon- und Gründachvorbereitung", "Keller- und Fundamentabdichtungen"],

      s4Title: "Schindeln für Block- & Ferienhäuser",
      s4Desc: "Fachgerechte Montage von modernen Kunststoffschindeln (Ekoternit, Capacco) und Bitumenschindeln für traditionelle Holzhütten und Chalets.",
      s4List: ["Rustikale Holzoptik ohne Verrottung", "Resistent gegen Hagel, UV und Eisbildung", "Ideal für alpine Höhenlagen"],

      s5Title: "Bauschlosserei & Kaminverkleidung",
      s5Desc: "Eigene Spenglerwerkstatt: Kamineinfassungen, Lüftungshauben, kunstvoll geformte Kaminhauben, Mauerabdeckungen und Kehlen auf den Millimeter genau.",
      s5List: ["Handgefertigte Kaminhauben aus Blech", "Perfekt abgedichtete Wandanschlüsse", "Eigene Werkstatt in der Region Poprad"],

      s6Title: "Dachentwässerung & Schneefangsysteme",
      s6Desc: "Komplette Dachrinnensysteme aus Titanzink, Kupfer und farbbeschichtetem Aluminium. Robuste Rohrschneefangsysteme und Dachfenstermontage (Velux/Roto).",
      s6List: ["Schutz vor Lawinen- und Dachlawinen", "Halbrunde und Kastenrinnen mit hohem Ablauf", "Fachgerechter Einbau von Dachfenstern"]
    },
    calculator: {
      badge: "Kostenkalkulator",
      title: "Berechnen Sie die Richtkosten für Ihr neues Dach",
      subtitle: "Wählen Sie die Parameter Ihres Gebäudes und erhalten Sie eine sofortige, unverbindliche Kostenschätzung. Für ein verbindliches Festpreisangebot führen wir gerne eine kostenlose Vor-Ort-Besichtigung durch.",
      step1: "1. Dachform",
      roofPitched: "Satteldach / Pultdach",
      roofHipped: "Walmdach / Verschachtelt",
      roofFlat: "Flachdach (Folie / Bitumen)",
      roofCottage: "Blockhaus / Berghütte",
      step2: "2. Dachfläche (m²)",
      step3: "3. Bevorzugtes Material & System",
      matTile: "Ton- / Betondachziegel (Bramac/Tondach)",
      matTitanzinc: "Stehfalz Titanzink / Alu (Rheinzink/Prefa)",
      matShingle: "Kunststoff- / Bitumenschindeln (Ekoternit/IKO)",
      matFlatPVC: "PVC-Abdichtungsbahn (Fatrafol/Bauder)",
      matSheetMetal: "Trapez- / Dachprofilblech",
      step4: "4. Zusatzleistungen & Zubehör",
      optGutter: "Komplettes Dachrinnensystem (Rinnen, Fallrohre)",
      optSnow: "Alpines Schneefangsystem für Berglagen",
      optChimney: "Kaminverkleidung & handgefertigte Kaminhaube",
      optInsulation: "PIR-Aufsparrendämmung / Mineralwolle",
      optDisposal: "Abriss und fachgerechte Entsorgung des Altdachs",
      resultTitle: "Geschätzter Investitionsrahmen:",
      priceRange: "Material- und Montage-Richtwert",
      priceDisclaimer: "*Der berechnete Preis ist ein Richtwert inklusive Standardmaterial und Meisterarbeit. Das verbindliche Angebot erfolgt nach Aufmaß vor Ort.",
      ctaPrefill: "Kostenloses Angebot mit diesen Parametern anfordern ➔"
    },
    portfolio: {
      badge: "Echte Baustellenfotos",
      title: "Authentische Projekte von unserem Instagram",
      subtitle: "Entdecken Sie echte Fotos unserer neuesten Bauprojekte in Poprad, Spiš, der Hohen Tatra, Levoča, Smižany und Prešov. Keine Stockfotos – pure Handwerksarbeit.",
      tabAll: "Alle Projekte",
      tabPitched: "Steildächer & Ziegel",
      tabMetal: "Titanzink & Stehfalz",
      tabShingle: "Schindeln & Chalets",
      tabTinsmith: "Spenglerei & Kamine",
      viewOnIg: "Folgen Sie uns auf Instagram @strechy_medo",
      igFollowers: "54+ veröffentlichte Projekte und Baustellen-Fotoreportagen",
      projects: {
        levoca: {
          title: "Wohnhaus Levoča",
          tag: "Tonziegel & Spenglerarbeiten",
          loc: "Levoča, Region Zips (Spiš)",
          desc: "Vollständige Eindeckung mit Tondach-Ziegeln, maßgefertigten Trauf- und Ortgangblechen sowie Kehlausbildungen."
        },
        horka: {
          title: "Einfamilienhaus Hôrka Primovce",
          tag: "Moderne Steildacharchitektur",
          loc: "Hôrka - Primovce, Poprad",
          desc: "Hochwertige Dachausführung mit exakten Durchdringungen und optimierter Wasserableitung."
        },
        poprad_velka: {
          title: "Wohnhaus Poprad - Veľká",
          tag: "Bitumenschindeln & Sanierung",
          loc: "Poprad - Stadtteil Veľká",
          desc: "Sorgfältige Verlegung von Bitumenschindeln auf Vollschalung mit dauerhaften Metallabschlüssen."
        },
        smizany: {
          title: "Wohnhaus Smižany",
          tag: "Komplette Dachstuhlsanierung",
          loc: "Smižany, Spišská Nová Ves",
          desc: "Generalsanierung mit Austausch schadhafter Sparren, neuer Unterspannbahn und langlebiger Ziegeldeckung."
        },
        spisske_bystre: {
          title: "Dachprojekt Spišské Bystré",
          tag: "Großes Wohngebäude",
          loc: "Spišské Bystré, Poprad",
          desc: "Großflächiges Steildach mit integrierten Dachfenstern, Firstlüftung und verstärktem Schneefang."
        },
        lopusna: {
          title: "Blockhaus Lopušná Dolina",
          tag: "Kunststoffschindeln für Berghütten",
          loc: "Lopušná Dolina, Hohe Tatra",
          desc: "Eindeckung mit pflegeleichten Kunststoffschindeln unter Beibehaltung des traditionellen Tatra-Baustils."
        },
        svit: {
          title: "Wohnhaus Svit Podskalka",
          tag: "Steildachsanierung & Anschlüsse",
          loc: "Svit - Podskalka",
          desc: "Präzise handwerkliche Ausführung von Graten, Kehlen und Kaminanschlüssen im alpinen Vorgebirge."
        },
        ciapka: {
          title: "Kunstspenglerei - Kaminhaube",
          tag: "Maßanfertigung aus Meisterhand",
          loc: "Werkstatt Poprad / Montage vor Ort",
          desc: "Handgefertigte, formschöne Kaminhaube für 100%igen Witterungsschutz des Kaminmauerwerks."
        },
        norwit: {
          title: "Gewerbeobjekt Norwit Poprad",
          tag: "Lüftungshauben & Titanzink",
          loc: "Poprad Gewerbegebiet",
          desc: "Fachgerechte Montage industrieller Entlüftungseinheiten und Großflächenverkleidung aus Titanzink."
        },
        presov: {
          title: "Einfamilienhaus Prešov (Kuzmastrechy)",
          tag: "Doppelstehfalz aus Titanzink",
          loc: "Prešov",
          desc: "Höchste handwerkliche Präzision bei der Stehfalzdeckung für eine anspruchsvolle moderne Villa."
        }
      }
    },
    beforeAfter: {
      badge: "Der Unterschied, den Sie auch nach 30 Jahren sehen",
      title: "Vom undichten Sanierungsfall zum perfekten Schutz fürs Eigenheim",
      desc: "Alte Dächer leiden unter Rissen, verrotteter Lattung und undichten Kamineinfassungen. Sehen Sie, wie ein neues Dach von Strechy Medo Ihr Haus schützt.",
      labelBefore: "Ursprünglicher verwitterter Zustand",
      labelAfter: "Neues Strechy Medo Dach",
      sliderNotice: "Schieberegler nach links / rechts ziehen zum Vergleichen"
    },
    about: {
      badge: "Über Meister Miro Medvec",
      title: "Miro Medvec — Dächer gebaut mit tiefem Respekt fürs Handwerk",
      p1: "Wir sind direkt unter der Hohen Tatra aufgewachsen – einer Region, in der das raue Bergklima keine Kompromisse duldet. Schneestürme, meterhohe Schneelasten und schwere Regengüsse fordern jede Schraube, jede Falz und jedes Blech.",
      p2: "Die Marke Strechy Medo (Miro Medvec) entstand aus echter Leidenschaft für ehrliches Handwerk. Ob ein historisches Holz-Chalet in Lopušná Dolina, ein eleganter Titanzink-Stehfalz in Prešov oder ein Familiensitz in Levoča: Wir arbeiten stets so, als würden wir für unsere eigene Familie bauen.",
      quote: "„Ein Dach ist mehr als nur Ziegel. Es ist der Schutzschild Ihres gesamten Zuhauses. Deshalb sparen wir niemals an Qualität und Abdichtung.“",
      author: "Miroslav Medvec, Inhaber & Spenglermeister",
      features: [
        { title: "Meisterbetrieb vor Ort", desc: "Schnelle Verfügbarkeit in Poprad, Zips, der Hohen Tatra, Liptov und der ganzen Slowakei." },
        { title: "Geprüfte Markenmaterialien", desc: "Zusammenarbeit mit Marktführern: Rheinzink, Fatrafol, Bramac, Tondach, Ekoternit." },
        { title: "Eigene Spenglerwerkstatt", desc: "Individuelle Kaminhauben, Blechkantungen und Anschlüsse auf den Millimeter gefertigt." }
      ]
    },
    workflow: {
      badge: "Transparenter Ablauf",
      title: "So unkompliziert verläuft Ihr Projekt mit uns",
      step1Title: "1. Kostenlose Vor-Ort-Besichtigung",
      step1Desc: "Wir begutachten Ihr Dach, prüfen die Holzsubstanz und besprechen Ihre Wünsche und Budgetoptionen.",
      step2Title: "2. Detailliertes Festpreisangebot",
      step2Desc: "Binnen 48 Stunden erhalten Sie ein transparentes Angebot. Der vereinbarte Vertragspreis bleibt ohne Überraschungen fix.",
      step3Title: "3. Schnelle & saubere Montage",
      step3Desc: "Wir organisieren Gerüst, Materiallogistik, saubere Meisterarbeit und hinterlassen die Baustelle jeden Tag aufgeräumt.",
      step4Title: "4. Abnahme & Langzeitgarantie",
      step4Desc: "Gemeinsame Endkontrolle jedes Details, Übergabe der Garantieurkunden für Material & Arbeit sowie langfristiger Kundenservice."
    },
    testimonials: {
      badge: "Kundenstimmen",
      title: "Was Hausbesitzer über Strechy Medo sagen",
      t1Text: "„Herr Medvec und sein Team haben das Dach unseres Blockhauses in Lopušná Dolina eingedeckt. Die Kunststoffschindeln sehen fantastisch aus und haben dem letzten Wintersturm mühelos getrotzt. Pünktlichkeit und Sauberkeit top!“",
      t1Author: "Peter Kováč",
      t1Loc: "Lopušná Dolina, Hohe Tatra",
      t2Text: "„Wir hatten ständige Undichtigkeiten rund um den Kamin in Poprad-Veľká. Miro kam, baute eine maßgefertigte Kaminhaube und dichte alles perfekt ab. Seitdem kein Tropfen mehr. Wärmste Empfehlung!“",
      t2Author: "Marta Janigová",
      t2Loc: "Poprad - Veľká",
      t3Text: "„Für unseren Neubau in Levoča wünschten wir uns erstklassige Spenglerarbeit mit Tondach-Ziegeln. Das Ergebnis ist ein Traum. Die Blechdetails sind wahre Kunstwerke. Der Festpreis wurde exakt eingehalten.“",
      t3Author: "Michal Rusnák",
      t3Loc: "Levoča"
    },
    faq: {
      badge: "Antworten auf Ihre Fragen",
      title: "Häufig gestellte Fragen",
      q1: "In welchen Regionen sind Sie tätig?",
      a1: "Unser Kerngebiet ist Poprad und die Hohe Tatra (Poprad, Kežmarok, Spišská Nová Ves, Levoča, Svit, Liptov). Für Spezialarbeiten wie Stehfalzdeckungen oder Flachdachfolien arbeiten wir in der gesamten Slowakei.",
      q2: "Wie lange dauert eine typische Dachsanierung?",
      a2: "Ein normaler Ziegeltausch samt Lattung und Spenglerarbeiten dauert ca. 5 bis 9 Arbeitstage. Flachdachabdichtungen mit PVC-Folie werden oft in 2 bis 4 Tagen fertiggestellt.",
      q3: "Welches Material ist am besten: Stehfalz, Ziegel oder Schindeln?",
      a3: "Das hängt von Dachneigung und Baustil ab. Für moderne Bauten und flache Neigungen ist Stehfalz aus Titanzink oder Alu unschlagbar. Für klassische Steildächer ab 22° Neigung sind Tonziegel ideal. Für Holzhäuser in schneereichen Lagen empfehlen wir wartungsfreie Ekoternit-Kunststoffschindeln.",
      q4: "Führen Sie auch Notfall-Reparaturen bei Sturmschäden durch?",
      a4: "Ja! Wir lokalisieren Undichtigkeiten, tauschen gebrochene Ziegel nach Hagel aus, erneuern faule Latten und sanieren undichte Kaminanschlüsse.",
      q5: "Welche Garantien erhalten Kunden?",
      a5: "Wir gewähren eine vertragliche Handwerksgarantie von 5 bis 10 Jahren. Unsere Materialpartner (Bramac, Tondach, Rheinzink, Ekoternit) bieten zudem 30 bis 50 Jahre Materialgarantie."
    },
    contact: {
      badge: "Projekt starten",
      title: "Kostenlose Besichtigung & Angebot anfordern",
      subtitle: "Kontaktieren Sie uns telefonisch, per WhatsApp, Instagram-Direktnachricht oder über das Formular. Wir antworten umgehend.",
      phoneLabel: "Telefon (Direktkontakt Meister):",
      phoneVal: "+421 905 226 930",
      emailLabel: "E-Mail:",
      emailVal: "strechymedo@gmail.com",
      igLabel: "Instagram-Profil:",
      igVal: "@strechy_medo",
      locLabel: "Werkstatt & Standort:",
      locVal: "Poprad & Region Zips (Spiš), Slowakei",
      hoursLabel: "Öffnungszeiten:",
      hoursVal: "Mo – Sa: 7:00 – 18:00 Uhr (Notfalldienst 24/7 erreichbar)",
      formTitle: "Projektanfrage-Formular",
      formName: "Vor- und Nachname *",
      formPhone: "Telefonnummer *",
      formEmail: "Ihre E-Mail-Adresse *",
      formLocation: "Ort / Baustellen-Standort *",
      formService: "Gewünschte Leistung",
      formServicePlaceholder: "-- Bitte Leistung wählen --",
      serviceOption1: "Neues Steildach (Ziegel / Blech)",
      serviceOption2: "Stehfalzdeckung Titanzink / Alu",
      serviceOption3: "Flachdach & Folienabdichtung",
      serviceOption4: "Blockhaus / Chalet (Kunststoffschindeln)",
      serviceOption5: "Spenglerarbeiten / Kaminverkleidung",
      serviceOption6: "Dachsanierung / Leckagebehebung",
      formMessage: "Projektbeschreibung, ungefähre Fläche oder Fragen...",
      formSubmit: "Unverbindliche Anfrage senden ➔",
      formSubmitting: "Wird gesendet...",
      formSuccessTitle: "Vielen Dank! Ihre Anfrage ist eingegangen.",
      formSuccessDesc: "Herr Miro Medvec meldet sich innerhalb von 24 Stunden bei Ihnen für einen Termin."
    },
    footer: {
      tagline: "Erstklassige Dächer, Stehfalzspenglerei und präzise Bauwerksabdichtung für die Tatra, Zips und die gesamte Slowakei.",
      quickLinks: "Schnellzugriff",
      servicesTitle: "Unsere Leistungen",
      contactTitle: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
      designedWith: "Redesign mit echten Baustellenfotos vom Instagram-Kanal @strechy_medo."
    }
  },

  pl: {
    meta: {
      title: "Strechy Medo | Mistrzowskie dekarstwo, obróbki blacharskie i hydroizolacje pod Tatrami",
      desc: "Specjalista od dachów skośnych i płaskich, blachy na rąbek stojący z tytan-cynku, hydroizolacji, domów z bali i obróbek blacharskich w Popradzie i na całej Słowacji."
    },
    nav: {
      brand: "STRECHY MEDO",
      brandSub: "Miro Medvec • Dekarstwo & Blacharstwo",
      services: "Usługi",
      portfolio: "Realizacje",
      calculator: "Kalkulator",
      about: "O nas",
      whyUs: "Dlaczego my",
      faq: "FAQ",
      contact: "Kontakt",
      freeQuote: "Bezpłatna wycena",
      callUs: "Zadzwoń teraz"
    },
    hero: {
      badge: "🛡️ Rzetelne rzemiosło pod Wysokimi Tatrami",
      title: "Dachy przygotowane na",
      titleHighlight: "tatrzańskie zimy.",
      subtitle: "Kompleksowe wykonawstwo i renowacje dachów, luksusowy rąbek stojący z tytan-cynku, gonty syntetyczne i bitumiczne, precyzyjne obróbki blacharskie i bezkompromisowe hydroizolacje.",
      ctaQuote: "Bezpłatna wycena",
      ctaPortfolio: "Zobacz realizacje",
      stat1Number: "15+",
      stat1Text: "Lat doświadczenia",
      stat2Number: "250+",
      stat2Text: "Ukończonych dachów",
      stat3Number: "100%",
      stat3Text: "Gwarancja szczelności",
      stat4Number: "0",
      stat4Text: "Ukrytych opłat"
    },
    badges: {
      b1: "🏔️ Odporność na wichury i obciążenia śniegiem",
      b2: "🔨 Kunszt rąbka stojącego z tytan-cynku",
      b3: "💧 Certyfikowane membrany hydroizolacyjne",
      b4: "🤝 Gwarantowana stała cena umowna"
    },
    services: {
      sectionBadge: "Nasze Specjalizacje",
      sectionTitle: "Kompleksowe rozwiązania dachowe bez kompromisów",
      sectionDesc: "Od tradycyjnych więźb dachowych, przez rąbek stojący, aż po nowoczesne membrany dachów płaskich. Każdy detal tworzymy z myślą o trwałości na pokolenia.",
      s1Title: "Dachy skośne & Układanie dachówki",
      s1Desc: "Montaż dachówek ceramicznych i betonowych, ołacenie i deskowanie. Precyzyjne układanie z taśmami kalenicowymi i membranami paroprzepuszczalnymi.",
      s1List: ["Dachówki Bramac, Tondach, Creaton", "Kompletna więźba dachowa i ołacenie", "Folie i membrany wysokoparoprzepuszczalne"],

      s2Title: "Blacha na rąbek & Tytan-cynk",
      s2Desc: "Najwyższa sztuka blacharska. Podwójny rąbek stojący z tytan-cynku Rheinzink/VMZINC oraz aluminium Prefa dla nowoczesnej architektury i domów górskich.",
      s2List: ["Trwałość ponad 80 lat bez konserwacji", "Odporność na skrajne cykle mrozu", "Elegancki, minimalistyczny design"],

      s3Title: "Dachy płaskie & Hydroizolacje",
      s3Desc: "Profesjonalna izolacja dachów płaskich membranami PVC/TPO (Fatrafol, Bauder, Sika) oraz zgrzewalnymi papami modyfikowanymi SBS wraz z dociepleniem.",
      s3List: ["Zgrzewanie gorącym powietrzem", "Izolacja tarasów i balkonów", "Hydroizolacja płyt fundamentowych i piwnic"],

      s4Title: "Gonty do domów z bali i chat",
      s4Desc: "Specjalistyczny montaż gontów syntetycznych Ekoternit / Capacco oraz gontów bitumicznych IKO dla tradycyjnych tatrzańskich domów z drewna.",
      s4List: ["Wygląd drewnianego gontu bez butwienia", "Całkowita odporność na mróz i UV", "Idealne w rejonach górskich"],

      s5Title: "Obróbki blacharskie & Kominy",
      s5Desc: "Własny warsztat blacharski: obróbki kominów, nasady wentylacyjne, artystyczne czapy kominowe, opierzenia attyk i kosze zlewowe z dokładnością do milimetra.",
      s5List: ["Obróbki przejść dachowych i kominów", "Ręcznie formowane czapy kominowe", "Własny warsztat w rejonie Popradu"],

      s6Title: "Rynny, śniegołapy & Okna dachowe",
      s6Desc: "Kompletne systemy rynnowe z powlekanego aluminium, miedzi i tytan-cynku. Montaż wzmocnionych barier śniegowych oraz okien dachowych Velux i Roto.",
      s6List: ["Ochrona przed lawinami śnieżnymi", "Rynny bezspoinowe i półokrągłe", "Montaż okien dachowych i świetlików"]
    },
    calculator: {
      badge: "Kalkulator szacunkowych kosztów",
      title: "Oblicz orientacyjny koszt nowego dachu",
      subtitle: "Wybierz parametry budynku, aby uzyskać natychmiastową, niezobowiązującą kalkulację. W celu przygotowania wiążącej oferty z przyjemnością wykonamy bezpłatny obmiar.",
      step1: "1. Typ dachu",
      roofPitched: "Skośny dwuspadowy / jednospadowy",
      roofHipped: "Kopertowy / wielospadowy",
      roofFlat: "Dach płaski (membrana)",
      roofCottage: "Dom z bali / chata góralska",
      step2: "2. Powierzchnia dachu (m²)",
      step3: "3. Preferowane pokrycie i technologia",
      matTile: "Dachówka ceramiczna / betonowa (Bramac/Tondach)",
      matTitanzinc: "Rąbek stojący tytan-cynk / alu (Rheinzink/Prefa)",
      matShingle: "Gont syntetyczny / bitumiczny (Ekoternit/IKO)",
      matFlatPVC: "Membrana hydroizolacyjna PVC (Fatrafol/Bauder)",
      matSheetMetal: "Blachodachówka / blacha trapezowa",
      step4: "4. Prace dodatkowe i akcesoria",
      optGutter: "Kompletny system rynnowy (rynny, rury spustowe)",
      optSnow: "Górski system barier i płotków śniegowych",
      optChimney: "Obróbka kominów i kuta czapa kominowa",
      optInsulation: "Docieplenie płytami PIR / wełną mineralną",
      optDisposal: "Demontaż i utylizacja starego pokrycia",
      resultTitle: "Szacunkowy zakres inwestycji:",
      priceRange: "Szacunek materiałów i montażu",
      priceDisclaimer: "*Podana cena jest orientacyjna i obejmuje standardowe materiały montażowe oraz robociznę mistrzowską. Wiążąca oferta powstaje po bezpłatnym obmiarze na budowie.",
      ctaPrefill: "Poproś o bezpłatną wycenę z tymi parametrami ➔"
    },
    portfolio: {
      badge: "Zdjęcia z placu budowy",
      title: "Prawdziwe realizacje z naszego Instagrama",
      subtitle: "Zobacz autentyczne zdjęcia z naszych najnowszych projektów w rejonie Popradu, Spisza, Tatr, Lewoczy, Smižan i Preszowa. Bez stockowych fotografii — czyste rzemiosło.",
      tabAll: "Wszystkie projekty",
      tabPitched: "Dachy skośne i dachówki",
      tabMetal: "Tytan-cynk i rąbek",
      tabShingle: "Gonty i domy z bali",
      tabTinsmith: "Blacharstwo i kominy",
      viewOnIg: "Śledź nas na Instagramie @strechy_medo",
      igFollowers: "54+ opublikowane projekty i fotorelacje z terenu",
      projects: {
        levoca: {
          title: "Dom jednorodzinny Lewocza",
          tag: "Dachówka ceramiczna & Obróbki",
          loc: "Lewocza, Spisz",
          desc: "Kompleksowe wykonanie poszycia dachowego z precyzyjnym opierzeniem attyk, koszy i wentylacji w nowo wybudowanym domu."
        },
        horka: {
          title: "Hôrka Primovce",
          tag: "Nowoczesny dach skośny",
          loc: "Hôrka - Primovce, Poprad",
          desc: "Najwyższej jakości profil dachowy ze szczególnym uwzględnieniem wodoszczelnych przejść i odwodnienia."
        },
        poprad_velka: {
          title: "Dom w Popradzie - Wielka",
          tag: "Gont bitumiczny & Renowacja",
          loc: "Poprad - dzielnica Veľká",
          desc: "Staranne układanie gontu bitumicznego na pełnym deskowaniu z trwałymi obróbkami szczytów i krawędzi."
        },
        smizany: {
          title: "Dom jednorodzinny Smižany",
          tag: "Kompletna renowacja więźby i pokrycia",
          loc: "Smižany, Spiska Nowa Wieś",
          desc: "Generalny remont dachu z wymianą uszkodzonych krokwi, nową membraną i trwałym pokryciem z dachówki."
        },
        spisske_bystre: {
          title: "Dach w Spiskim Bystrym",
          tag: "Duży projekt rezydencjalny",
          loc: "Spišské Bystré, Poprad",
          desc: "Obszerna konstrukcja dachowa ze zintegrowanymi oknami dachowymi, wentylacją kalenicy i wzmocnionymi śniegołapami."
        },
        lopusna: {
          title: "Chata z bali Lopušná Dolina",
          tag: "Gont syntetyczny do domów górskich",
          loc: "Dolina Łopuszna, Wysokie Tatry",
          desc: "Montaż bezobsługowego gontu syntetycznego zachowującego autentyczny, tradycyjny tatrzański styl drewnianej chaty."
        },
        svit: {
          title: "Dom jednorodzinny Svit Podskalka",
          tag: "Dach skośny & Renowacja",
          loc: "Svit - Podskalka",
          desc: "Precyzyjne rzemieślnicze wykończenie naroży, kalenic i kominów w warunkach podgórskich."
        },
        ciapka: {
          title: "Kunszt blacharski - Czapa komina",
          tag: "Produkcja na zamówienie",
          loc: "Warsztat Poprad / Montaż na obiekcie",
          desc: "Ręcznie formowana czapa kominowa z trwałej blachy gwarantująca 100% ochrony komina przed zacinającym deszczem i śniegiem."
        },
        norwit: {
          title: "Obiekt przemysłowy Norwit Poprad",
          tag: "Wywietrzniki dachowe & Tytan-cynk",
          loc: "Poprad, strefa Norwit",
          desc: "Profesjonalny montaż wentylacji dachowej oraz wielkopowierzchniowych obróbek technologicznych z tytan-cynku."
        },
        presov: {
          title: "Dom jednorodzinny Preszów (Kuzmastrechy)",
          tag: "Tytan-cynk na podwójny rąbek",
          loc: "Preszów",
          desc: "Wymagające mistrzowskie wykonanie podwójnego rąbka stojącego z tytan-cynku dla nowoczesnej willi."
        }
      }
    },
    beforeAfter: {
      badge: "Różnica widoczna nawet po 30 latach",
      title: "Od przeciekającej awarii do idealnej ochrony domu",
      desc: "Stare dachy cierpią na mikropęknięcia, zbutwiałe łaty i nieszczelne obróbki kominów. Zobacz, jak nowy dach od Strechy Medo zabezpiecza Twój dom.",
      labelBefore: "Stan pierwotny przed remontem",
      labelAfter: "Nowy dach Strechy Medo",
      sliderNotice: "Przesuń suwak w lewo / w prawo, aby porównać"
    },
    about: {
      badge: "O mistrzu i zespole",
      title: "Miro Medvec — Dachy budowane z szacunku do rzemiosła",
      p1: "Wychowaliśmy się pod Wysokimi Tatrami – w regionie, gdzie klimat nie wybacza kompromisów. Wichury, gruba pokrywa śnieżna i ulewne deszcze wystawiają na próbę każdą śrubę, rąbek i opierzenie.",
      p2: "Marka Strechy Medo (Miro Medvec) powstała z prawdziwej pasji do dekarstwa. Niezależnie od tego, czy chodzi o zabytkową chatę z bali w Dolinie Łopusznej, luksusowy rąbek w Preszowie, czy dom w Lewoczy – pracujemy tak, jakbyśmy budowali dla własnej rodziny.",
      quote: "„Dach to nie tylko dachówki. To tarcza chroniąca całe Twoje ognisko domowe. Dlatego nigdy nie oszczędzamy na jakości i hydroizolacji.”",
      author: "Miroslav Medvec, Założyciel & Mistrz blacharski",
      features: [
        { title: "Lokalny mistrz na miejscu", desc: "Szybki dojazd w rejonie Popradu, Spisza, Tatr, Liptowa i wschodniej Słowacji." },
        { title: "Certyfikowane materiały", desc: "Współpraca z renomowanymi markami: Rheinzink, Fatrafol, Bramac, Tondach, Ekoternit." },
        { title: "Własny warsztat blacharski", desc: "Indywidualne czapy kominowe, obróbki krawędzi i kosze produkowane co do milimetra." }
      ]
    },
    workflow: {
      badge: "Przejrzysty proces",
      title: "Jak przebiega współpraca z nami?",
      step1Title: "1. Bezpłatne oględziny",
      step1Desc: "Przyjedziemy na miejsce, wymierzymy dach, ocenimy stan więźby i omówimy Twoje oczekiwania oraz budżet.",
      step2Title: "2. Szczegółowy kosztorys",
      step2Desc: "W ciągu 48 godzin otrzymasz przejrzystą wycenę. Uzgodniona w umowie cena pozostaje stała i gwarantowana.",
      step3Title: "3. Sprawny i czysty montaż",
      step3Desc: "Zapewniamy transport, bezpieczeństwo, precyzyjne wykonawstwo i codziennie zostawiamy uporządkowany plac budowy.",
      step4Title: "4. Odbiór i wieloletnia gwarancja",
      step4Desc: "Wspólnie sprawdzamy każdy detal, przekazujemy karty gwarancyjne na materiały i robociznę oraz zapewniamy stały serwis."
    },
    testimonials: {
      badge: "Opinie klientów",
      title: "Co mówią właściciele domów, którym daliśmy bezpieczny dach",
      t1Text: "„Pan Medvec i jego ekipa kładli dach na naszej drewnianej chacie w Dolinie Łopusznej. Gont syntetyczny prezentuje się wspaniale i przetrwał tegoroczne tatrzańskie wichury bez najmniejszego problemu. Punktualność, czystość i rzemiosło na najwyższym poziomie!”",
      t1Author: "Peter Kováč",
      t1Loc: "Dolina Łopuszna, Wysokie Tatry",
      t2Text: "„Mieliśmy uciążliwy problem z przeciekaniem wokół komina w Popradzie-Wielkiej. Miro przyjechał, wykonał na wymiar nową czapę komina i uszczelnił całą połać. Od tego czasu ani kropli. Zdecydowanie polecam!”",
      t2Author: "Marta Janigová",
      t2Loc: "Poprad - Veľká",
      t3Text: "„Przy budowie nowego domu w Lewoczy zależało nam na perfekcyjnym blacharstwie i dachówce Tondach. Rezultat przerósł oczekiwania. Obróbki są prawdziwym dziełem sztuki, a cena została dotrzymana do ostatniego centa.”",
      t3Author: "Michal Rusnák",
      t3Loc: "Lewocza"
    },
    faq: {
      badge: "Odpowiedzi na pytania",
      title: "Często zadawane pytania",
      q1: "W jakich regionach realizujecie zlecenia?",
      a1: "Naszą główną bazą jest Poprad i rejon podtatrzański (Wysokie Tatry, Kieżmark, Spiska Nowa Wieś, Lewocza, Svit, Liptów). Przy specjalistycznych projektach (rąbek stojący z tytan-cynku, membrany PVC) działamy na terenie całej Słowacji oraz w rejonie przygranicznym z Polską.",
      q2: "Ile trwa standardowa wymiana dachu na domu jednorodzinnym?",
      a2: "Typowa wymiana pokrycia wraz z ołaceniem i blacharstwem zajmuje od 5 do 9 dni roboczych w zależności od pogody i geometrii dachu. Dach płaski z membraną PVC jest często realizowany w 2 do 4 dni.",
      q3: "Co wybrać: blachę na rąbek, dachówkę czy gont syntetyczny?",
      a3: "Zależy to od nachylenia i stylu budynku. Do nowoczesnych brył i małych kątów bezkonkurencyjny jest rąbek stojący z tytan-cynku lub aluminium. Do klasycznych domów ze spadkiem powyżej 22° idealna jest dachówka ceramiczna. Do domów z bali w górach polecamy bezobsługowy gont syntetyczny Ekoternit.",
      q4: "Czy wykonujecie naprawy awaryjne i likwidację przecieków?",
      a4: "Tak! Przeprowadzamy diagnostykę przecieków, wymieniamy uszkodzone dachówki po gradobiciu, regenerujemy zbutwiałe deskowanie i wykonujemy nowe szczelne obróbki kominów.",
      q5: "Jakie gwarancje otrzymuje klient?",
      a5: "Na nasze prace montażowe udzielamy pisemnej gwarancji od 5 do 10 lat. Nasi partnerzy materiałowi (Bramac, Tondach, Rheinzink, Ekoternit) oferują gwarancję producencką na 30 do 50 lat."
    },
    contact: {
      badge: "Rozpocznij konsultację",
      title: "Zamów bezpłatne oględziny i wycenę",
      subtitle: "Skontaktuj się z nami telefonicznie, przez WhatsApp, wiadomość na Instagramie lub wypełnij poniższy formularz. Odpowiadamy niezwłocznie.",
      phoneLabel: "Telefon (bezpośredni kontakt do mistrza):",
      phoneVal: "+421 905 226 930",
      emailLabel: "E-mail:",
      emailVal: "strechymedo@gmail.com",
      igLabel: "Profil Instagram:",
      igVal: "@strechy_medo",
      locLabel: "Siedziba i warsztat:",
      locVal: "Poprad & Region Spisz, Słowacja",
      hoursLabel: "Godziny pracy:",
      hoursVal: "Pn – So: 7:00 – 18:00 (Awarie całodobowo)",
      formTitle: "Formularz kontaktowy i zapytania",
      formName: "Imię i nazwisko *",
      formPhone: "Numer telefonu *",
      formEmail: "Adres e-mail *",
      formLocation: "Miejscowość / Lokalizacja budowy *",
      formService: "Rodzaj potrzebnej usługi",
      formServicePlaceholder: "-- Wybierz usługę --",
      serviceOption1: "Nowy dach skośny (dachówka / blacha)",
      serviceOption2: "Rąbek stojący tytan-cynk / alu",
      serviceOption3: "Dach płaski & Membrana hydroizolacyjna",
      serviceOption4: "Dom z bali / chata (gont syntetyczny)",
      serviceOption5: "Blacharstwo / Obróbka komina",
      serviceOption6: "Renowacja dachu / Uszczelnienie przecieku",
      formMessage: "Opis projektu, przybliżona powierzchnia lub pytania...",
      formSubmit: "Wyślij zapytanie ofertowe ➔",
      formSubmitting: "Wysyłanie zapytania...",
      formSuccessTitle: "Dziękujemy! Wiadomość została wysłana.",
      formSuccessDesc: "Mistrz Miro Medvec skontaktuje się z Tobą w ciągu 24 godzin w celu ustalenia terminu obmiaru."
    },
    footer: {
      tagline: "Najwyższej klasy dachy, rąbek stojący i precyzyjne hydroizolacje dla Tatr, Spisza i całej Słowacji.",
      quickLinks: "Szybka nawigacja",
      servicesTitle: "Nasze usługi",
      contactTitle: "Kontakt",
      rights: "Wszelkie prawa zastrzeżone.",
      designedWith: "Redesign z autentycznymi zdjęciami z profilu Instagram @strechy_medo."
    }
  },

  hu: {
    meta: {
      title: "Strechy Medo | Mesteri tetőfedés, precíz bádogosmunka és vízszigetelés a Tátra alatt",
      desc: "Magas- és lapostetők, korcolt titáncink lemezfedések, vízszigetelések, rönkházak és egyedi bádogos kivitelezések specialistája Poprádon és egész Szlovákiában."
    },
    nav: {
      brand: "STRECHY MEDO",
      brandSub: "Miro Medvec • Tetőfedés & Bádogosipar",
      services: "Szolgáltatások",
      portfolio: "Munkáink",
      calculator: "Kalkulátor",
      about: "Rólunk",
      whyUs: "Miért mi",
      faq: "GYIK",
      contact: "Kapcsolat",
      freeQuote: "Ajánlatkérés",
      callUs: "Hívjon most"
    },
    hero: {
      badge: "🛡️ Becsületes mestermunka a Magas-Tátra lábánál",
      title: "Tetők, amelyek ellenállnak a",
      titleHighlight: "tátrai teleknek.",
      subtitle: "Komplett új tetők kivitelezése és felújítása, prémium korcolt titáncink lemez, műanyag és bitumenes zsindelyek, precíz bádogos elemek és kompromisszummentes vízszigetelés.",
      ctaQuote: "Ingyenes árajánlat",
      ctaPortfolio: "Referenciák megtekintése",
      stat1Number: "15+",
      stat1Text: "Év szakmai tapasztalat",
      stat2Number: "250+",
      stat2Text: "Elkészült tető",
      stat3Number: "100%",
      stat3Text: "Vízhatlansági garancia",
      stat4Number: "0",
      stat4Text: "Rejtett költség"
    },
    badges: {
      b1: "🏔️ Hó- és szélviharálló kivitelezés",
      b2: "🔨 Precíz állókorcos titáncink technológia",
      b3: "💧 Tanúsított PVC- és bitumenes vízszigetelés",
      b4: "🤝 Garantált szerződéses fix ár"
    },
    services: {
      sectionBadge: "Szakterületeink",
      sectionTitle: "Komplett tetőmegoldások kompromisszumok nélkül",
      sectionDesc: "A hagyományos fa tetőszerkezetektől az elegáns korcolt lemezfedésen át a modern lapostetős szigetelésig. Minden részletet évtizedes tartósságra tervezünk.",
      s1Title: "Magastetők & Cserépfedés",
      s1Desc: "Kerámia és beton tetőcserepek felrakása, lécezés és deszkázás. Precíz elhelyezés szellőzőszalagokkal és páraáteresztő tetőfóliákkal.",
      s1List: ["Bramac, Tondach, Creaton cserepek", "Komplett ácsszerkezet és lécezés", "Korszerű páraáteresztő fóliák"],

      s2Title: "Korcolt lemezfedés & Titáncink",
      s2Desc: "A legmagasabb szintű bádogosmesterség. Kettős állókorc Rheinzink, VMZINC és Prefa alumínium lemezekkel modern épületekhez és hegyi házakhoz.",
      s2List: ["80+ év gondozásmentes élettartam", "Ideális szélsőséges fagyos éghajlatra", "Elegáns, letisztult építészeti megjelenés"],

      s3Title: "Lapostetők & Vízszigetelés",
      s3Desc: "Lapostetők szakszerű szigetelése prémium PVC/TPO lemezekkel (Fatrafol, Bauder, Sika) és SBS modifikált bitumenes hegeszthető lemezekkel hőszigeteléssel.",
      s3List: ["Forrólevegős precíziós hegesztés", "Teraszok és erkélyek vízszigetelése", "Alaplemezek és pinceszintek szigetelése"],

      s4Title: "Zsindelyek rönk- és faházakhoz",
      s4Desc: "Ekoternit / Capacco műanyag zsindelyek és IKO bitumenes zsindelyek beépítése hagyományos tátrai faházakhoz és gerendaházakhoz.",
      s4List: ["A faházak rusztikus megjelenése korhadás nélkül", "Kiváló fagy- és UV-állóság", "Tökéletes hegyvidéki környezetbe"],

      s5Title: "Egyedi bádogosmunkák & Kémények",
      s5Desc: "Saját bádogos műhely: kéményszegélyek, szellőzőfejek, egyedi kéményfedők, attikák, párkányok és vápák milliméterpontos megmunkálása.",
      s5List: ["Kémények és tetőáttörések lemezburkolása", "Kézzel készített egyedi kéményfedők", "Saját megmunkáló műhely Poprádon"],

      s6Title: "Ereszcsatornák, hófogók & Ablakok",
      s6Desc: "Komplett ereszcsatorna-rendszerek bevonatos alumíniumból, rézből és titáncinkből. Masszív csöves hófogók és Velux/Roto tetőtéri ablakok beépítése.",
      s6List: ["Védelem a lavinaszerű hólecsúszás ellen", "Félköríves és szögletes ereszcsatornák", "Szakszerű tetőablak- és fénycsőbeépítés"]
    },
    calculator: {
      badge: "Költségbecslő kalkulátor",
      title: "Számítsa ki új tetője irányárát",
      subtitle: "Válassza ki az épület paramétereit az azonnali, kötelezettségmentes becsléshez. A pontos, végleges ajánlathoz szívesen elvégzünk egy ingyenes helyszíni felmérést.",
      step1: "1. Tetőforma",
      roofPitched: "Nyeregtető / Félnyeregtető",
      roofHipped: "Kontyolt / Tagolt tető",
      roofFlat: "Lapostető (fóliaszigetelés)",
      roofCottage: "Rönkház / Faház",
      step2: "2. Tetőfelület (m²)",
      step3: "3. Kívánt fedőanyag & technológia",
      matTile: "Kerámia / Beton cserép (Bramac/Tondach)",
      matTitanzinc: "Állókorcos titáncink / alu (Rheinzink/Prefa)",
      matShingle: "Műanyag / Bitumenes zsindely (Ekoternit/IKO)",
      matFlatPVC: "PVC vízszigetelő lemez (Fatrafol/Bauder)",
      matSheetMetal: "Trapézlemez / Cserepeslemez",
      step4: "4. Kiegészítő munkák & tartozékok",
      optGutter: "Komplett ereszcsatorna-rendszer (csatornák, lefolyók)",
      optSnow: "Hegyvidéki hófogó rendszer",
      optChimney: "Kéményszegély és kézi kéményfedő",
      optInsulation: "Hőszigetelés PIR lapokkal / ásványgyapottal",
      optDisposal: "A régi tetőfedés bontása és elszállítása",
      resultTitle: "Becsült beruházási összeg:",
      priceRange: "Anyag- és munkadíj becslés",
      priceDisclaimer: "*A megadott összeg tájékoztató jellegű, tartalmazza a standard szerelési anyagokat és a szakmunkát. A kötelező érvényű árajánlat ingyenes helyszíni felmérés után készül.",
      ctaPrefill: "Árajánlatot kérek ezekkel a paraméterekkel ➔"
    },
    portfolio: {
      badge: "Képek az építkezésekről",
      title: "Valódi munkák az Instagramunkról",
      subtitle: "Tekintse meg a legújabb projektjeinkről készült eredeti felvételeket Poprádon, a Szepességben, a Magas-Tátrában, Lőcsén, Szepessümegen és Eperjesen. Nincsenek stock fotók – csak tiszta mestermunka.",
      tabAll: "Összes projekt",
      tabPitched: "Magastetők és cserép",
      tabMetal: "Titáncink és korcolt lemez",
      tabShingle: "Zsindely és rönkházak",
      tabTinsmith: "Bádogosipar és kémények",
      viewOnIg: "Kövessen minket az Instagramon @strechy_medo",
      igFollowers: "54+ közzétett munka és helyszíni fotóriport",
      projects: {
        levoca: {
          title: "Családi ház Lőcse (Levoča)",
          tag: "Kerámiacserép & Bádogosmunka",
          loc: "Lőcse, Szepesség",
          desc: "Tetőhéjazat komplett kivitelezése attikaszegélyekkel, vápákkal és szellőzéssel egy új építésű családi háznál."
        },
        horka: {
          title: "Hôrka Primovce lakóház",
          tag: "Modern magastető",
          loc: "Hôrka - Primovce, Poprád",
          desc: "Kiemelkedő minőségű modern tetőprofil vízzáró csomópontokkal és hatékony vízelvezetéssel."
        },
        poprad_velka: {
          title: "Családi ház Poprád - Felka",
          tag: "Bitumenzsindely & Felújítás",
          loc: "Poprád - Felka (Veľká) városrész",
          desc: "Bitumenes zsindely gondos fektetése teljes felületű deszkázatra tartós él- és oromszegélyekkel."
        },
        smizany: {
          title: "Családi ház Szepessümeg (Smižany)",
          tag: "Tetőszerkezet és héjazat felújítása",
          loc: "Szepessümeg, Iglói járás",
          desc: "A tető generálfelújítása a sérült szarufák cseréjével, hőszigeteléssel és új, időtálló cserépfedéssel."
        },
        spisske_bystre: {
          title: "Tető Szepeshatárfaluban (Spišské Bystré)",
          tag: "Nagy léptékű lakóépület",
          loc: "Szepeshatárfalu, Poprád",
          desc: "Tágas tetőszerkezet beépített tetőtéri ablakokkal, gerincszellőzéssel és megerősített hófogókkal."
        },
        lopusna: {
          title: "Faház a Lopušná-völgyben",
          tag: "Műanyag zsindely hegyi házakhoz",
          loc: "Lopušná-völgy, Magas-Tátra",
          desc: "Gondozásmentes műanyag zsindely felrakása, amely megőrzi a hagyományos tátrai rönkházak rusztikus báját."
        },
        svit: {
          title: "Családi ház Szvit Podskalka",
          tag: "Magastető felújítás & Szegélyek",
          loc: "Szvit - Podskalka",
          desc: "Élek, vápák és kéményáttörések precíz kézműves kidolgozása a tátrai előhegységben."
        },
        ciapka: {
          title: "Művészi bádogosmunka - Kéményfedő",
          tag: "Egyedi gyártás méretre",
          loc: "Poprádi műhely / Helyszíni szerelés",
          desc: "Kézzel készített, strapabíró kéményfedő sapka, amely 100%-os védelmet nyújt a kéménytestnek a csapadék ellen."
        },
        norwit: {
          title: "Norwit létesítmény Poprád",
          tag: "Ipari szellőzők & Titáncink",
          loc: "Poprád, Norwit ipari terület",
          desc: "Ipari tetőszellőzők szakszerű beépítése és nagyméretű technológiai áttörések burkolása titáncink lemezből."
        },
        presov: {
          title: "Családi ház Eperjes (Kuzmastrechy)",
          tag: "Kulcsrakész korcolt titáncink",
          loc: "Eperjes (Prešov)",
          desc: "Igényes kettős állókorcos titáncink kivitelezés modern építészeti stílusban, évszázados tartóssággal."
        }
      }
    },
    beforeAfter: {
      badge: "Különbség, amit 30 év múltán is látni fog",
      title: "Beázási vészhelyzetből a családi fészek tökéletes védelme",
      desc: "A régi, elöregedett fedések mikromegrepedésekkel, korhadt lécezéssel küzdenek. Nézze meg, hogyan óvja otthonát a Strechy Medo új tetője.",
      labelBefore: "Eredeti elöregedett állapot",
      labelAfter: "Új prémium Strechy Medo tető",
      sliderNotice: "Húzza a csúszkát balra / jobbra az összehasonlításhoz"
    },
    about: {
      badge: "A mesterről és csapatunkról",
      title: "Miro Medvec — A szakma becsületére épített tetők",
      p1: "A Magas-Tátra lábánál nőttünk fel, ahol a zord időjárás nem tűri a félmegoldásokat. Hóviharok, méteres hótakaró és tavaszi olvadások tesznek próbára minden egyes csavart, korcot és szegélyt.",
      p2: "A Strechy Medo márka (Miro Medvec vezetésével) a becsületes kézműves munka iránti elhivatottságból született. Legyen szó a Lopušná-völgy történelmi faházáról, egy modern eperjesi villáról vagy lőcsei családi házról: mindig úgy dolgozunk, mintha saját családunknak építenénk.",
      quote: "„A tető nem csupán cserép. Ez az egész otthona védőpajzsa. Ezért soha nem spórolunk az anyagokon és a vízszigetelésen.”",
      author: "Miroslav Medvec, Alapító & Bádogosmester",
      features: [
        { title: "Helyi mesterember", desc: "Gyors rendelkezésre állás Poprád, a Szepesség, a Magas-Tátra, Liptó és egész Szlovákia területén." },
        { title: "Kiváló minőségű márkák", desc: "Kizárólag tanúsított partnerekkel dolgozunk: Rheinzink, Fatrafol, Bramac, Tondach, Ekoternit." },
        { title: "Saját bádogosműhely", desc: "Egyedi kéményszegélyeket, oromszegélyeket és kéményfedőket készítünk milliméterpontosan." }
      ]
    },
    workflow: {
      badge: "Egyszerű folyamat",
      title: "Hogyan zajlik a közös munka?",
      step1Title: "1. Ingyenes helyszíni felmérés",
      step1Desc: "Ellátogatunk az épülethez, felmérjük a tetőt, ellenőrizzük a faanyagot, és átbeszéljük az Ön elképzeléseit és költségkeretét.",
      step2Title: "2. Részletes tételes árajánlat",
      step2Desc: "48 órán belül átlátható kalkulációt adunk át. A szerződésben rögzített ár rejtett költségek nélkül, fixen érvényes.",
      step3Title: "3. Gyors és tiszta kivitelezés",
      step3Desc: "Gondoskodunk az anyagszállításról, a biztonságról, a hibátlan szerelésről, és minden munkanap végén rendet hagyunk magunk után.",
      step4Title: "4. Átadás és garanciavállalás",
      step4Desc: "Közösen ellenőrzünk minden részletet, átadjuk az anyag- és munkadíjgaranciát, és hosszú távú szervizt biztosítunk."
    },
    testimonials: {
      badge: "Ügyfeleink véleménye",
      title: "Mit mondanak a háztulajdonosok, akiknek biztonságos tetőt építettünk?",
      t1Text: "„Medvec úr és csapata fedte be a gerendaházunkat a Lopušná-völgyben. A műanyag zsindely csodásan néz ki, és az idei tátrai téli viharok meg sem kottyantak neki. Pontosság, tisztaság és szakértelem csillagos ötös!”",
      t1Author: "Kováč Péter",
      t1Loc: "Lopušná-völgy, Magas-Tátra",
      t2Text: "„Tartós beázási problémánk volt a kémény körül Poprád-Felkán. Miro eljött, méretre gyártott egy új kéményfedőt és újraszigetelte a felületet. Azóta egyetlen csepp sem jutott be. Jó szívvel ajánlom mindenkinek!”",
      t2Author: "Janiga Márta",
      t2Loc: "Poprád - Felka",
      t3Text: "„Lőcsei új építésű házunknál elsőrangú bádogosmunkát és Tondach cserepet szerettünk volna. Az eredmény minden várakozást felülmúlt. A bádogos lemezmunkák valóságos műalkotások, a megállapodott árat pedig fillérre betartották.”",
      t3Author: "Rusnák Mihály",
      t3Loc: "Lőcse (Levoča)"
    },
    faq: {
      badge: "Válaszok a kérdésekre",
      title: "Gyakran Ismételt Kérdések",
      q1: "Mely régiókban vállalnak munkát?",
      a1: "Fő működési területünk Poprád és a Tátra alatti régió (Magas-Tátra, Késmárk, Igló, Lőcse, Szvit, Liptó). Speciális megbízások esetén (titáncink korcolt lemezfedés, PVC fóliaszigetelés) egész Szlovákiában és a határmenti régiókban is dolgozunk.",
      q2: "Mennyi ideig tart egy átlagos családi ház tetőcseréje?",
      a2: "Egy standard cserépcsere lécezéssel és bádogozással az időjárástól és a tetőformától függően 5-9 munkanapot vesz igénybe. A lapostetők PVC fóliás szigetelése gyakran 2-4 nap alatt elkészül.",
      q3: "Melyik a legjobb: a korcolt lemez, a cserép vagy a műanyag zsindely?",
      a3: "Ez a tetőhajlásszögtől és az építészeti stílustól függ. Modern épületekhez és alacsony lejtéshez a titáncink vagy alumínium korcolt lemez a verhetetlen. Hagyományos, 22° feletti lejtésű házakhoz a kerámiacserép a legmegfelelőbb. Hegyvidéki rönkházakhoz pedig a karbantartásmentes Ekoternit műanyag zsindelyt ajánljuk.",
      q4: "Vállalnak vészhelyzeti javítást és beázás megszüntetését is?",
      a4: "Igen! Beázás-diagnosztikát végzünk, kicseréljük a jégvert cserepeket, megújítjuk a korhadt deszkázatot, és új, tökéletesen záródó kéményszegélyeket készítünk.",
      q5: "Milyen garanciát kap a megrendelő?",
      a5: "Kivitelezési munkáinkra 5-10 év írásos szerződéses garanciát vállalunk. Anyagpartnereink (Bramac, Tondach, Rheinzink, Ekoternit) emellett 30-50 év gyártói garanciát biztosítanak a termékekre."
    },
    contact: {
      badge: "Kezdjük egyeztetéssel",
      title: "Kérjen ingyenes felmérést és árajánlatot",
      subtitle: "Vegye fel velünk a kapcsolatot telefonon, WhatsAppon, Instagram-üzenetben vagy az alábbi űrlap kitöltésével. Rövid időn belül válaszolunk.",
      phoneLabel: "Telefon (közvetlen mestervonal):",
      phoneVal: "+421 905 226 930",
      emailLabel: "E-mail:",
      emailVal: "strechymedo@gmail.com",
      igLabel: "Instagram profil:",
      igVal: "@strechy_medo",
      locLabel: "Székhely és műhely:",
      locVal: "Poprád & Szepesség, Szlovákia",
      hoursLabel: "Nyitvatartás:",
      hoursVal: "Hé – Szo: 7:00 – 18:00 (Vészhelyzetben 0-24)",
      formTitle: "Kapcsolatfelvételi és ajánlatkérő űrlap",
      formName: "Név és vezetéknév *",
      formPhone: "Telefonszám *",
      formEmail: "E-mail cím *",
      formLocation: "Város / Építkezés helyszíne *",
      formService: "Kívánt szolgáltatás",
      formServicePlaceholder: "-- Válasszon szolgáltatást --",
      serviceOption1: "Új magastető (cserép / lemez)",
      serviceOption2: "Korcolt titáncink / alumínium",
      serviceOption3: "Lapostető & Vízszigetelő fólia",
      serviceOption4: "Faház / Gerendaház (műanyag zsindely)",
      serviceOption5: "Bádogosmunka / Kéményszegély",
      serviceOption6: "Tetőfelújítás / Beázás elhárítása",
      formMessage: "Projekt leírása, hozzávetőleges felület vagy kérdések...",
      formSubmit: "Ajánlatkérés elküldése ➔",
      formSubmitting: "Küldés folyamatban...",
      formSuccessTitle: "Köszönjük! Üzenetét sikeresen megkaptuk.",
      formSuccessDesc: "Miro Medvec mester 24 órán belül felveszi Önnel a kapcsolatot a felmérés egyeztetéséhez."
    },
    footer: {
      tagline: "Első osztályú tetők, korcolt bádogozás és precíz vízszigetelés a Tátra, a Szepesség és egész Szlovákia számára.",
      quickLinks: "Gyorshivatkozások",
      servicesTitle: "Szolgáltatásaink",
      contactTitle: "Kapcsolat",
      rights: "Minden jog fenntartva.",
      designedWith: "Redesign az Instagram @strechy_medo valódi építkezési fotóival."
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
