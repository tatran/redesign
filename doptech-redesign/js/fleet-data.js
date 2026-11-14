/**
 * DOPTECH, s.r.o. — Fleet Specifications, Crane Load Charts & Project Portfolio Data
 */

window.DOPTECH_DATA = {
  fleet: [
    {
      id: "volvo-fh16",
      badge: "FLAGSHIP · 50 tm",
      image: "images/volvo-fh16-hmf5020.jpg",
      secondaryImage: "images/nbs-bratislava-25m.jpg",
      craneModel: "HMF 5020-K4",
      maxLiftKg: 15000,
      maxReachM: 22.0,
      deckLengthSoloM: 13.6,
      deckWidthM: 2.48,
      payloadSoloKg: 16000,
      payloadComboKg: 16000,
      rateSoloKm: 1.60,
      rateComboKm: 1.60,
      rateCraneHourText: "60 – 80 € / h",
      rateCraneHourCalc: 70,
      loadChart: [
        { radiusM: 2.0, capacityKg: 15000 },
        { radiusM: 4.5, capacityKg: 9400 },
        { radiusM: 8.0, capacityKg: 5100 },
        { radiusM: 12.0, capacityKg: 3200 },
        { radiusM: 16.5, capacityKg: 1950 },
        { radiusM: 22.0, capacityKg: 1000 }
      ],
      title: {
        sk: "VOLVO FH 16 750 Ťahač + HR HMF 5020-K4 + Náves",
        de: "VOLVO FH 16 750 Sattelzugmaschine + Ladekran HMF 5020-K4 + Auflieger",
        en: "VOLVO FH 16 750 Tractor + HMF 5020-K4 Crane + Semi-Trailer",
        hu: "VOLVO FH 16 750 Nyerges vontató + HMF 5020-K4 daru + Félpótkocsi"
      },
      subtitle: {
        sk: "Najvýkonnejšia súprava pre ťažkú manipuláciu do 15 000 kg a nadrozmerný náklad (13,60 m)",
        de: "Stärkste Einheit für Schwerlasthandling bis 15.000 kg und 13,60 m Sattelauflieger",
        en: "Flagship heavy-duty unit for up to 15,000 kg crane lifts and 13.60 m semi-trailer transport",
        hu: "Csúcsteljesítményű szerelvény akár 15 000 kg daruzáshoz és 13,60 m-es félpótkocsis szállításhoz"
      },
      specs: {
        sk: [
          "Ložná plocha návesu: 13,60 m × 2,48 m",
          "Nosnosť návesu: 16 000 kg",
          "Hydraulická ruka HMF 5020-K4: 15 000 kg na 2,0 m · 1 000 kg na 22,0 m",
          "Ideálne pre: kontajnery, oceľové konštrukcie, ťažké stroje, debnenie a nadrozmery"
        ],
        de: [
          "Ladefläche Auflieger: 13,60 m × 2,48 m",
          "Nutzlast Auflieger: 16.000 kg",
          "Ladekran HMF 5020-K4: 15.000 kg bei 2,0 m · 1.000 kg bei 22,0 m",
          "Ideal für: Container, Stahlkonstruktionen, Baumaschinen, Schalung & Sondertransporte"
        ],
        en: [
          "Semi-trailer bed: 13.60 m × 2.48 m",
          "Trailer payload capacity: 16,000 kg",
          "HMF 5020-K4 Crane: 15,000 kg at 2.0 m · 1,000 kg at 22.0 m",
          "Ideal for: containers, steel structures, heavy machinery, formwork & oversized loads"
        ],
        hu: [
          "Félpótkocsi rakfelülete: 13,60 m × 2,48 m",
          "Félpótkocsi teherbírása: 16 000 kg",
          "HMF 5020-K4 önrakodó daru: 15 000 kg 2,0 m-en · 1 000 kg 22,0 m-en",
          "Ideális: konténerek, acélszerkezetek, nehézgépek, zsaluzat és túlméretes rakományok"
        ]
      }
    },
    {
      id: "volvo-fm9",
      badge: "MAX REACH · 25,6 m",
      image: "images/nemocnica-bory.jpg",
      secondaryImage: "images/vyroba-peri.jpg",
      craneModel: "PALFINGER PK 42502",
      maxLiftKg: 12570,
      maxReachM: 25.6,
      deckLengthSoloM: 6.5,
      deckLengthTrailerM: 6.5,
      deckWidthM: 2.48,
      payloadSoloKg: 7000,
      payloadComboKg: 21000,
      rateSoloKm: 1.60,
      rateComboKm: 1.80,
      rateCraneHourText: "50 € / h",
      rateCraneHourCalc: 50,
      loadChart: [
        { radiusM: 2.0, capacityKg: 12570 },
        { radiusM: 4.4, capacityKg: 8700 },
        { radiusM: 5.9, capacityKg: 6280 },
        { radiusM: 7.8, capacityKg: 4550 },
        { radiusM: 9.9, capacityKg: 3430 },
        { radiusM: 16.6, capacityKg: 1910 },
        { radiusM: 25.6, capacityKg: 500 }
      ],
      title: {
        sk: "VOLVO FM 9 340 + HR PALFINGER PK 42502 + Príves",
        de: "VOLVO FM 9 340 + Ladekran PALFINGER PK 42502 + Anhänger",
        en: "VOLVO FM 9 340 + PALFINGER PK 42502 Crane + Trailer",
        hu: "VOLVO FM 9 340 + PALFINGER PK 42502 daru + Pótkocsi"
      },
      subtitle: {
        sk: "Extrémny dosah hydraulickej ruky až 25,6 m pre vykládky na strechy a terasy budov",
        de: "Extreme Kranreichweite bis 25,6 m für Dach- und Terrassenentladungen (bis 21 t Gesamtnutzlast)",
        en: "Extreme 25.6 m crane outreach for rooftop deliveries, scaffolding & trusses (up to 21 t combo payload)",
        hu: "Extrém, 25,6 m-es darugém-kinyúlás tetőre emeléshez és állványzathoz (akár 21 t összteherbírás)"
      },
      specs: {
        sk: [
          "Ložná plocha auta: 6,50 m × 2,48 m (nosnosť 7 000 kg)",
          "Ložná plocha prívesu: 6,50 m × 2,48 m (nosnosť 14 000 kg · spolu 21 000 kg)",
          "HR PALFINGER PK 42502: 12 570 kg / 2 m · 4 550 kg / 7,8 m · 1 910 kg / 16,6 m · 500 kg / 25,6 m",
          "Ideálne pre: montáž krovov, vykládku štrku a lešenia na strechy (do 25 m), staveniskové bunky"
        ],
        de: [
          "Ladefläche LKW: 6,50 m × 2,48 m (Nutzlast 7.000 kg)",
          "Ladefläche Anhänger: 6,50 m × 2,48 m (Nutzlast 14.000 kg · gesamt 21.000 kg)",
          "PALFINGER PK 42502: 12.570 kg / 2 m · 4.550 kg / 7,8 m · 1.910 kg / 16,6 m · 500 kg / 25,6 m",
          "Ideal für: Dachstuhl-Montage, Dachbekiesung & Gerüste bis 25 m Höhe, Baucontainer"
        ],
        en: [
          "Truck bed: 6.50 m × 2.48 m (payload 7,000 kg)",
          "Trailer bed: 6.50 m × 2.48 m (payload 14,000 kg · 21,000 kg combined)",
          "PALFINGER PK 42502: 12,570 kg / 2 m · 4,550 kg / 7.8 m · 1,910 kg / 16.6 m · 500 kg / 25.6 m",
          "Ideal for: roof trusses, rooftop gravel & scaffolding up to 25 m, site office modules"
        ],
        hu: [
          "Tehergépkocsi plató: 6,50 m × 2,48 m (teherbírás 7 000 kg)",
          "Pótkocsi plató: 6,50 m × 2,48 m (teherbírás 14 000 kg · összesen 21 000 kg)",
          "PALFINGER PK 42502: 12 570 kg / 2 m · 4 550 kg / 7,8 m · 1 910 kg / 16,6 m · 500 kg / 25,6 m",
          "Ideális: tetőszerkezetek, tetőre emelés 25 m-ig, állványzat és felvonulási konténerek"
        ]
      }
    },
    {
      id: "daf-xf105",
      badge: "HIGH PAYLOAD · 25 t",
      image: "images/prevoz-plosin.jpg",
      secondaryImage: "images/hrad-bratislava.jpg",
      craneModel: "MKG 195 HP (vzadu)",
      maxLiftKg: 6910,
      maxReachM: 10.1,
      deckLengthSoloM: 6.8,
      deckLengthTrailerM: 6.8,
      deckWidthM: 2.45,
      payloadSoloKg: 11000,
      payloadComboKg: 25000,
      rateSoloKm: 1.60,
      rateComboKm: 1.80,
      rateCraneHourText: "40 € / h",
      rateCraneHourCalc: 40,
      loadChart: [
        { radiusM: 2.5, capacityKg: 6910 },
        { radiusM: 4.25, capacityKg: 4290 },
        { radiusM: 6.2, capacityKg: 2800 },
        { radiusM: 8.15, capacityKg: 2110 },
        { radiusM: 10.1, capacityKg: 1670 }
      ],
      title: {
        sk: "DAF XF 105 + HR MKG 195 HP (za ložnou plochou) + Príves",
        de: "DAF XF 105 + Ladekran MKG 195 HP (Heckkran) + Anhänger",
        en: "DAF XF 105 + MKG 195 HP Rear-Mounted Crane + Trailer",
        hu: "DAF XF 105 + MKG 195 HP hátsó daru + Pótkocsi"
      },
      subtitle: {
        sk: "Hydraulická ruka za ložnou plochou a vysoká kombinovaná nosnosť súpravy až 25 000 kg",
        de: "Heckkran hinter der Ladefläche und höchste Zug-Gesamtnutzlast bis 25.000 kg",
        en: "Rear-mounted crane behind the cargo bed with 25,000 kg combined truck-and-trailer payload",
        hu: "Rakfelület mögé szerelt daru és kimagasló, 25 000 kg-os szerelvény-teherbírás"
      },
      specs: {
        sk: [
          "Ložná plocha auta: 6,80 m × 2,45 m (nosnosť 11 000 kg)",
          "Ložná plocha prívesu: 6,80 m × 2,45 m (nosnosť 14 000 kg · spolu 25 000 kg)",
          "HR MKG 195 HP (za korbou): 6 910 kg / 2,5 m · 4 290 kg / 4,25 m · 2 800 kg / 6,2 m · 1 670 kg / 10,1 m",
          "Ideálne pre: debnenie PERI/DOKA, betónové zvodidlá, pracovné plošiny, paletový tovar"
        ],
        de: [
          "Ladefläche LKW: 6,80 m × 2,45 m (Nutzlast 11.000 kg)",
          "Ladefläche Anhänger: 6,80 m × 2,45 m (Nutzlast 14.000 kg · gesamt 25.000 kg)",
          "MKG 195 HP Heckkran: 6.910 kg / 2,5 m · 4.290 kg / 4,25 m · 2.800 kg / 6,2 m · 1.670 kg / 10,1 m",
          "Ideal für: PERI/DOKA Schalung, Betonleitwände, Arbeitsbühnen, Palettenware"
        ],
        en: [
          "Truck bed: 6.80 m × 2.45 m (payload 11,000 kg)",
          "Trailer bed: 6.80 m × 2.45 m (payload 14,000 kg · 25,000 kg combined)",
          "MKG 195 HP Rear Crane: 6,910 kg / 2.5 m · 4,290 kg / 4.25 m · 2,800 kg / 6.2 m · 1,670 kg / 10.1 m",
          "Ideal for: PERI/DOKA formwork, concrete road barriers, scissor lifts, palletized materials"
        ],
        hu: [
          "Tehergépkocsi plató: 6,80 m × 2,45 m (teherbírás 11 000 kg)",
          "Pótkocsi plató: 6,80 m × 2,45 m (teherbírás 14 000 kg · összesen 25 000 kg)",
          "MKG 195 HP hátsó daru: 6 910 kg / 2,5 m · 4 290 kg / 4,25 m · 2 800 kg / 6,2 m · 1 670 kg / 10,1 m",
          "Ideális: PERI/DOKA zsaluzat, beton terelőelemek, emelőkosaras gépek, raklapos áru"
        ]
      }
    },
    {
      id: "daf-cf85",
      badge: "SEMI-TRAILER · FTL",
      image: "images/nadrozmer-2024.jpg",
      secondaryImage: "images/ikea-malacky-plosina.jpg",
      craneModel: "Valníkový náves / Štandard",
      maxLiftKg: 0,
      maxReachM: 0,
      deckLengthSoloM: 13.6,
      deckWidthM: 2.48,
      payloadSoloKg: 24000,
      payloadComboKg: 24000,
      rateSoloKm: 1.50,
      rateComboKm: 1.60,
      rateCraneHourText: "30 € / h (bez HR)",
      rateCraneHourCalc: 30,
      loadChart: [],
      title: {
        sk: "DAF CF 85 Ťahač + Valníkový náves",
        de: "DAF CF 85 Sattelzugmaschine + Pritschenauflieger",
        en: "DAF CF 85 Tractor + Flatbed Semi-Trailer",
        hu: "DAF CF 85 Nyerges vontató + Platós félpótkocsi"
      },
      subtitle: {
        sk: "Spoľahlivá priama návesová preprava stavebného materiálu, lešenia, ocele a techniky",
        de: "Zuverlässiger Direkttransport von Baustoffen, Gerüsten, Stahl und Baugeräten",
        en: "Direct flatbed semi-trailer transport for construction materials, scaffolding, steel & machinery",
        hu: "Megbízható nyerges szállítás építőanyagokhoz, állványzathoz, acélhoz és munkagépekhez"
      },
      specs: {
        sk: [
          "Ložná plocha návesu: 13,60 m × 2,48 m",
          "Užitočná hmotnosť: do 24 000 kg",
          "Nakládka / vykládka a čakanie bez použitia HR: 30 € / hod.",
          "Ideálne pre: ucelené kamiónové prepravy (FTL) medzi výrobnými závodmi a stavbami v SR, CZ, AT, HU"
        ],
        de: [
          "Ladefläche Auflieger: 13,60 m × 2,48 m",
          "Nutzlast: bis 24.000 kg",
          "Be-/Entladung und Wartezeit ohne Kran: 30 € / Std.",
          "Ideal für: Komplettladungen (FTL) zwischen Werken und Baustellen in SK, AT, CZ, HU"
        ],
        en: [
          "Semi-trailer bed: 13.60 m × 2.48 m",
          "Payload capacity: up to 24,000 kg",
          "Loading / unloading and waiting without crane: €30 / hr",
          "Ideal for: full truckload (FTL) site logistics across Slovakia, Austria, Czechia & Hungary"
        ],
        hu: [
          "Félpótkocsi rakfelülete: 13,60 m × 2,48 m",
          "Hasznos teherbírás: akár 24 000 kg",
          "Rakodás és várakozás daru használata nélkül: 30 € / óra",
          "Ideális: komplett kamionos (FTL) építési szállításokhoz SK, HU, AT, CZ viszonylatban"
        ]
      }
    }
  ],

  projects: [
    {
      id: "nbs-bratislava",
      year: "2024",
      category: "rooftop",
      image: "images/nbs-bratislava-25m.jpg",
      location: "Bratislava",
      client: "Národná banka Slovenska (NBS)",
      title: {
        sk: "Národná banka Slovenska — Vykládka lešenia a žalúzií do výšky 25 m",
        de: "Nationalbank der Slowakei (NBS) — Kranentladung auf 25 m Höhe",
        en: "National Bank of Slovakia (NBS) — 25 m High-Reach Terrace Unloading",
        hu: "Szlovák Nemzeti Bank (NBS) — Állványzat és zsaluzia emelése 25 m magasra"
      },
      desc: {
        sk: "Dovoz a presná vykládka lešenia a fasádnych žalúzií priamo na terasu budovy NBS v Bratislave vo výške cca 25 metrov pomocou našej špičkovej hydraulickej ruky.",
        de: "Anlieferung und millimetergenaue Kranentladung von Gerüsten und Fassadenjalousien auf die Terrasse der Nationalbank in ca. 25 m Höhe.",
        en: "Delivery and precision crane placement of scaffolding and facade louvers onto the NBS terrace at approx. 25 meters elevation.",
        hu: "Állványzat és homlokzati árnyékolók szállítása és milliméter-pontos daruzása az NBS teraszára, kb. 25 méteres magasságba."
      }
    },
    {
      id: "nemocnica-bory",
      year: "2021–2024",
      category: "scaffolding",
      image: "images/nemocnica-bory.jpg",
      location: "Bratislava – Bory",
      client: "Nemocnica Bory & OC Bory Mall",
      title: {
        sk: "Nemocnica Bory Bratislava — Lešenie, izolačné panely a strešný štrk",
        de: "Krankenhaus Bory Bratislava — Gerüstbau, Dämmung & Dachbekiesung",
        en: "Bory Hospital Bratislava — Scaffolding, Insulation & Rooftop Gravel",
        hu: "Bory Kórház Pozsony — Állványzat, szigetelőpanelek és tetőkavics emelés"
      },
      desc: {
        sk: "Dlhodobá logistická podpora pri výstavbe modernej Nemocnice Bory – navážanie lešenia, vykládka big-bagov so štrkom priamo na strechu a manipulácia s fasádnym materiálom.",
        de: "Langfristige Baustellenlogistik beim Bau des Bory-Krankenhauses – Gerüsttransport, Big-Bag-Dachbekiesung mit Palfinger PK 42502 und Fassadenlogistik.",
        en: "Multi-stage construction logistics for Bory Hospital — scaffolding delivery, big-bag rooftop gravel placement via Palfinger PK 42502, and facade materials.",
        hu: "Hosszú távú építési logisztika a Bory Kórház építésénél – állványzat szállítása, big-bag zsákos kavics tetőre emelése és homlokzati anyagmozgatás."
      }
    },
    {
      id: "peri-sk",
      year: "2014–2025",
      category: "scaffolding",
      image: "images/vyroba-peri.jpg",
      location: "Senec / Celé Slovensko",
      client: "PERI spol. s r.o.",
      title: {
        sk: "PERI Senec — Víťaz tendra a vyše 10 rokov prepravy debnenia a lešenia",
        de: "PERI Senec — Ausschreibungsgewinner & 10+ Jahre Schalungslogistik",
        en: "PERI Formwork & Scaffolding — 10+ Years Tender Partner Across Slovakia",
        hu: "PERI Szenc — Tendergyőztes partner, 10+ év zsaluzat- és állványszállítás"
      },
      desc: {
        sk: "Od víťazstva v dopravnom tendri v roku 2014 nepretržite zabezpečujeme prepravu a vykládku systémového debnenia a lešenia PERI na kľúčové stavby po celom Slovensku aj v ČR.",
        de: "Seit dem Gewinn der Ausschreibung 2014 transportieren und entladen wir täglich PERI-Schalungs- und Gerüstsysteme zu Großbaustellen in der Slowakei und Tschechien.",
        en: "Since winning the PERI transport tender in 2014, we have continuously delivered and craned modular formwork and scaffolding to major projects across SK and CZ.",
        hu: "A 2014-es szállítási tender megnyerése óta folyamatosan végezzük a PERI zsaluzatok és állványrendszerek szállítását és daruzását Szlovákia és Csehország építkezéseire."
      }
    },
    {
      id: "volvo-fh16-nadrozmer",
      year: "2024",
      category: "oversize",
      image: "images/nadrozmer-2024.jpg",
      location: "Slovensko & Stredná Európa",
      client: "Priemyselná a modulárna výstavba",
      title: {
        sk: "Nadrozmerné prepravy kontajnerov, hál a ťažkej mechanizácie",
        de: "Sondertransporte von Raummodulen, Hallen & Schwermechanisierung",
        en: "Oversized Transport of Modular Units, Industrial Halls & Heavy Tech",
        hu: "Túlméretes konténerek, csarnokszerkezetek és nehézgépek szállítása"
      },
      desc: {
        sk: "Nasadenie našej vlajkovej súpravy VOLVO FH 16 (HR HMF 5020) a VOLVO FM 9 pri prevoze nadrozmerných obytných a technologických kontajnerov, oceľových skeletov a strojov.",
        de: "Einsatz unseres Flaggschiffs VOLVO FH 16 (HMF 5020) und VOLVO FM 9 beim Transport von überbreiten Technikcontainern, Stahlhallen und Industriemaschinen.",
        en: "Deployment of our flagship VOLVO FH 16 (HMF 5020) and VOLVO FM 9 fleet for oversized modular buildings, steel skeletons, and industrial equipment.",
        hu: "Zászlóshajó VOLVO FH 16 (HMF 5020) és VOLVO FM 9 flottánk bevetése túlméretes technológiai konténerek, acélcsarnokok és ipari gépek szállításánál."
      }
    },
    {
      id: "ikea-vw-plosiny",
      year: "2023–2024",
      category: "machinery",
      image: "images/ikea-malacky-plosina.jpg",
      location: "Malacky / Bratislava / Košice",
      client: "IKEA Industry, Volkswagen SK, priemyselné parky",
      title: {
        sk: "Prevozy pracovných plošín (6,5 t), VZV a ťažkej techniky",
        de: "Transport von Arbeitsbühnen (6,5 t), Staplern & Industrietechnik",
        en: "Transport & Craning of 6.5 t Aerial Work Platforms & Forklifts",
        hu: "6,5 t-s emelőkosaras munkaállványok, targoncák és munkagépek szállítása"
      },
      desc: {
        sk: "Bezpečné nakladanie a prevoz 6,5-tonových nožnicových a kĺbových plošín, vysokozdvižných vozíkov, sústruhov a výrobných liniek priamo hydraulickou rukou bez potreby nájazdovej rampy.",
        de: "Sicheres Verladen und Transportieren von 6,5-Tonnen-Arbeitsbühnen, Gabelstaplern und Werkzeugmaschinen direkt per Ladekran ohne Auffahrrampe.",
        en: "Direct crane loading and transport of 6.5-ton scissor/boom lifts, forklifts, lathes, and industrial machinery without needing loading ramps.",
        hu: "6,5 tonnás ollós és karos munkaállványok, targoncák és esztergapadok biztonságos emelése és szállítása közvetlenül önrakodó daruval, rámpa nélkül."
      }
    },
    {
      id: "hrad-bratislava",
      year: "2014–2024",
      category: "infrastructure",
      image: "images/hrad-bratislava.jpg",
      location: "Bratislava – Hrad a Staré Mesto",
      client: "Bratislavský hrad, SNG, Mlynské Nivy, Sky Park",
      title: {
        sk: "Bratislavský hrad, SNG, Mlynské Nivy & diaľničné úseky D1 / D4R7",
        de: "Burg Bratislava, Nationalgalerie, Busbahnhof Nivy & Autobahnen D1/D4R7",
        en: "Bratislava Castle, National Gallery, Nivy Station & D1/D4R7 Highways",
        hu: "Pozsonyi vár, Szlovák Nemzeti Galéria, Nivy pályaudvar és D1/D4R7 autópályák"
      },
      desc: {
        sk: "Od osádzania portálov a 6,5 t betónových zvodidiel pre STRABAG na D1 (Triblavina, Kriváň, Tunel Višňové) a D4R7 až po tradičné koncoročné inštalácie na Bratislavskom hrade a Františkánskom námestí.",
        de: "Vom Versetzen von Autobahnportalen und 6,5-t-Betonleitwänden für STRABAG (D1 Triblavina, Tunnel Višňové, D4R7) bis hin zu Einsätzen auf der Burg Bratislava.",
        en: "From highway gantry installations and 6.5 t concrete barriers for STRABAG (D1 Triblavina, Višňové Tunnel, D4R7) to iconic deliveries at Bratislava Castle.",
        hu: "Az autópálya-portálok és 6,5 tonnás beton terelőelemek STRABAG részére történő telepítésétől (D1, D4R7, Višňové-alagút) a Pozsonyi várban végzett munkákig."
      }
    },
    {
      id: "skala-senec",
      year: "2021–2024",
      category: "rooftop",
      image: "images/skala-senec.jpg",
      location: "Senec / Banská Bystrica / Tomášov",
      client: "Samosprávy, architekti a súkromní investori",
      title: {
        sk: "Osádzanie monumentálnych skál, súsoší, krovov a 40 000 l nádrží",
        de: "Versetzen von Monolithen, Denkmälern, Dachstühlen & 40.000-l-Tanks",
        en: "Precision Placement of Monument Boulders, Roof Trusses & 40,000 L Tanks",
        hu: "Monumentális sziklák, szoborcsoportok, tetőszerkezetek és 40 000 l-es tartályok"
      },
      desc: {
        sk: "Špeciálne žeriavnické práce s hydraulickou rukou: dovoz a osadenie skaly na sochu v Senci, montáž súsošia v Banskej Bystrici, osádzanie záhradných domov, 40 000 l nádrží a montáž krovov.",
        de: "Spezialkranarbeiten: Transport und Platzierung von Naturstein-Monolithen in Senec, Denkmalmontage in Banská Bystrica, Gartenhäuser, 40.000-l-Tanks und Dachstühle.",
        en: "Specialized hydraulic crane rigging: monument boulder installation in Senec, sculpture erection in Banská Bystrica, garden houses, 40,000 L tanks, and roof carpentry.",
        hu: "Speciális daruzási munkák: szobortalapzati szikla elhelyezése Szencen, szoborcsoport állítása Besztercebányán, kerti házak, 40 000 l-es tartályok és tetőfedés."
      }
    },
    {
      id: "frantiskanske-namestie",
      year: "2015–2024",
      category: "infrastructure",
      image: "images/frantiskanske-namestie-2024.jpg",
      location: "Bratislava / Trenčín / Chopok / Komárno",
      client: "Podujatia, mosty a národné stavby (Pohoda, ŽSR, Mondi SCP)",
      title: {
        sk: "Festival Pohoda Trenčín, Vianočné trhy Bratislava, Most Komárno & Chopok",
        de: "Festival Pohoda, Weihnachtsmärkte Bratislava, Donaubrücke Komárno & Chopok",
        en: "Pohoda Festival, Bratislava Christmas Markets, Komárno Bridge & Chopok",
        hu: "Pohoda Fesztivál, Pozsonyi Karácsonyi Vásár, Komáromi Duna-híd és Chopok"
      },
      desc: {
        sk: "Komplexná logistika kontajnerov a pódiovej techniky pre Festival Pohoda a vianočné trhy, práce pre ŽSR (most cez Moravu Brodské), nový most v Komárne, lanovka a Hotel Damian na Chopku.",
        de: "Container- und Eventlogistik für das Pohoda Festival und die Bratislaver Weihnachtsmärkte sowie Brückenbau in Komárno, ŽSR Brodské und Hochgebirgslogistik am Chopok.",
        en: "Event container logistics for Pohoda Festival and Bratislava Christmas Markets, bridge works in Komárno and Brodské (ŽSR), plus alpine construction on Mt. Chopok.",
        hu: "Konténer- és rendezvénylogisztika a Pohoda Fesztivál és a pozsonyi vásár számára, a komáromi új Duna-híd, a ŽSR morva-híd és a Chopok magashegyi építkezései."
      }
    }
  ],

  milestones: [
    {
      year: "2013",
      title: {
        sk: "Založenie spoločnosti DOPTECH, s.r.o.",
        de: "Gründung der DOPTECH, s.r.o.",
        en: "Foundation of DOPTECH, s.r.o.",
        hu: "A DOPTECH, s.r.o. megalapítása"
      },
      text: {
        sk: "Nový začiatok v Kráľovej pri Senci pod vedením Miroslava Latináka. Prvá preprava mobilného oplotenia pre K TRANS.",
        de: "Neustart in Kráľová pri Senci unter der Leitung von Miroslav Latinák. Erster Transport von Mobilzäunen für K TRANS.",
        en: "Founded in Kráľová pri Senci by managing director Miroslav Latinák, starting with mobile fencing transport for K TRANS.",
        hu: "Új kezdet Királyfalván (Kráľová pri Senci) Miroslav Latinák vezetésével. Első fuvarunk mobil kerítések szállítása volt."
      }
    },
    {
      year: "2014–2016",
      title: {
        sk: "Víťazstvo v tendri PERI & veľké slovenské stavby",
        de: "Gewinn der PERI-Ausschreibung & Großbaustellen",
        en: "Winning the PERI Tender & Major Landmarks",
        hu: "PERI tendergyőzelem és országos nagyberuházások"
      },
      text: {
        sk: "Začiatok celoslovenskej prepravy lešenia a debnenia PERI. Stavby: OC Bory, Westend, Zuckermandel, City Aréna Trnava, Vodné dielo Gabčíkovo, FEI STU a STRABAG.",
        de: "Landesweiter Transport von PERI-Schalung und Gerüsten: Bory Mall, Westend, Zuckermandel, City Arena Trnava, Kraftwerk Gabčíkovo und STRABAG.",
        en: "Nationwide PERI formwork and scaffolding logistics for Bory Mall, Westend, Zuckermandel, City Arena Trnava, Gabčíkovo Dam, and STRABAG.",
        hu: "Országos PERI zsaluzat- és állványszállítás: Bory Mall, Westend, Zuckermandel, Nagyszombati City Aréna, Bősi Vízlépcső és STRABAG."
      }
    },
    {
      year: "2017–2020",
      title: {
        sk: "Infraštruktúra D1 / D4R7, Tunel Višňové, Most Komárno & Chopok",
        de: "Autobahnen D1 / D4R7, Tunnel Višňové, Brücke Komárno & Chopok",
        en: "D1 / D4R7 Highways, Višňové Tunnel, Komárno Bridge & Chopok",
        hu: "D1 / D4R7 autópályák, Višňové-alagút, Komáromi híd és Chopok"
      },
      text: {
        sk: "Rozšírenie pôsobnosti do ČR a okolitých štátov: Tunel Višňové, SNG, Nivy, NFŠ, Sky Park, Klingerka, Most cez Dunaj Komárno, Obchvat D4R7 a Hotel Damian Chopok.",
        de: "Expansion in Nachbarländer: Tunnel Višňové, Nationalgalerie SNG, Nivy Busbahnhof, Sky Park, Donaubrücke Komárno, Ringstraße D4R7 und Hotel Damian Chopok.",
        en: "Cross-border expansion and flagship infrastructure: Višňové Tunnel, SNG, Nivy Station, Sky Park, Komárno Danube Bridge, D4R7 Bypass, and Hotel Damian Chopok.",
        hu: "Határon átnyúló bővülés: Višňové-alagút, SNG, Nivy pályaudvar, Sky Park, új Komáromi Duna-híd, D4R7 körgyűrű és Hotel Damian Chopok."
      }
    },
    {
      year: "2021–2025",
      title: {
        sk: "Obnova autoparku & vlajková loď VOLVO FH 16 s HR HMF 5020",
        de: "Flottenerneuerung & Flaggschiff VOLVO FH 16 mit HMF 5020",
        en: "Fleet Modernization & Flagship VOLVO FH 16 with HMF 5020",
        hu: "Flottamegújítás és VOLVO FH 16 zászlóshajó HMF 5020 daruval"
      },
      text: {
        sk: "Príchod ťažkého ťahača VOLVO FH 16 750 s HR HMF 5020-K4 (zdvih 15 t). Realizácie pre Nemocnicu Bory, ŽSR Brodské, IKEA Malacky, VW a výškové vykládky (25 m) na NBS Bratislava.",
        de: "Indienststellung des VOLVO FH 16 750 mit HMF 5020-K4 (15 t Hubkraft). Einsätze für Bory-Krankenhaus, ŽSR Brodské, IKEA, VW und 25-m-Kranarbeiten an der Nationalbank NBS.",
        en: "Addition of the VOLVO FH 16 750 with HMF 5020-K4 crane (15 t lift). Key deliveries for Bory Hospital, ŽSR Brodské, IKEA, VW, and 25 m rooftop lifts at NBS Bratislava.",
        hu: "A 15 t emelőerejű HMF 5020-K4 daruval szerelt VOLVO FH 16 750 csatlakozása. Munkák a Bory Kórházban, ŽSR Brodské hídon, IKEA-ban és 25 m-es emelések a Nemzeti Banknál."
      }
    }
  ]
};
