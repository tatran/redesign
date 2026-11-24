/**
 * TRAVELFUN.SK — Redesign 2026
 * Core Script:
 * 1. 5-Language Internationalization (SK, EN, DE, CS, HU)
 * 2. Dark / Light Theme Manager
 * 3. Client Telemetry & Analytics Hub (Tracking, Storage, Live HUD Inspector, Export)
 * 4. Interactive Flight & Tour Search Engine
 * 5. Interactive Trip Cost Calculator
 * 6. Inquiry Modal & Form Handling
 * 7. Mobile Navigation & Smooth Scrolling
 */

// ==========================================
// 1. INTERNATIONALIZATION (i18n) DICTIONARY
// ==========================================
const i18n = {
  sk: {
    // Top Bar
    "topbar.emergency": "24/7 Asistencia na cestách: +421 948 050 720",
    "topbar.email": "info@travelfun.sk",
    "topbar.status": "Otvorené • Sme online pre vás",

    // Navigation
    "nav.home": "Domov",
    "nav.tours": "Zájazdy & Expedície",
    "nav.flights": "Letenky",
    "nav.services": "Služby",
    "nav.whyus": "Prečo my?",
    "nav.calculator": "Kalkulačka cesty",
    "nav.reviews": "Recenzie",
    "nav.contact": "Kontakt",
    "nav.cta": "Nezáväzný dopyt",

    // Hero Section
    "hero.badge": "✈️ Cestovná kancelária & agentúra TRAVELFUN",
    "hero.title": "Objavte svet s radosťou a bez starostí",
    "hero.subtitle": "Komplexné cestovateľské riešenia od leteniek cez exotické expedície až po firemné cesty na mieru. Zabezpečíme pre vás bezpečný a nezabudnuteľný únik z reality.",
    "hero.tab.flights": "Letenky do sveta",
    "hero.tab.tours": "Pobyty & Zájazdy",
    "hero.tab.expeditions": "Poznávacie expedície",
    "hero.tab.corporate": "Firemné cesty (MICE)",

    // Search Fields
    "search.from": "Odkiaľ (napr. Viedeň, Bratislava)",
    "search.to": "Kam (napr. Sydney, Bangkok, New York)",
    "search.deptDate": "Dátum odletu",
    "search.retDate": "Dátum návratu",
    "search.passengers": "Cestujúci",
    "search.passengers.opt1": "1 Dospelý",
    "search.passengers.opt2": "2 Dospelí",
    "search.passengers.opt3": "Rodina (2+2)",
    "search.passengers.opt4": "Skupina (5+)",
    "search.class": "Trieda",
    "search.class.eco": "Economy Class",
    "search.class.prem": "Premium Economy",
    "search.class.biz": "Business Class",
    "search.btn": "Vyhľadať najlepšiu ponuku",

    // Hero Stats
    "stats.exp": "15+ Rokov na trhu",
    "stats.airlines": "550+ Leteckých spoločností",
    "stats.clients": "12 500+ Spokojných cestovateľov",
    "stats.support": "24/7 Osobná podpora v núdzi",

    // Tours Section
    "tours.sectionTag": "Inšpirácia na cestovanie",
    "tours.title": "Výberové expedície a dovolenky",
    "tours.subtitle": "Od úchvatného Nového Zélandu cez slnečnú Austráliu až po divočinu Patagónie a exotické ostrovy.",
    "tours.filter.all": "Všetky ponuky",
    "tours.filter.expeditions": "Poznávacie expedície",
    "tours.filter.exotic": "Exotika & More",
    "tours.filter.adventure": "Lov & Safari",
    "tours.filter.nature": "Hory & Príroda",
    "tours.btn.detail": "Zobraziť program & dopyt",
    "tours.badge.featured": "Bestseller",
    "tours.badge.exclusive": "Exkluzívne",
    "tours.badge.lastminute": "Last Minute",

    // Specific Tours
    "tour1.title": "Nový Zéland – Veľký okruh",
    "tour1.desc": "Gejzíry Rotorua, ľadovce Južných Álp, fjord Milford Sound a filmový Hobbiton v malých skupinách.",
    "tour1.duration": "18 dní / 15 nocí",
    "tour1.price": "od 3 490 €",

    "tour2.title": "Čarovné miesta Austrálie",
    "tour2.desc": "Sydney s Operou, posvätná skala Uluru, šnorchlovanie na Veľkej koralovej bariére a tropický Cairns.",
    "tour2.duration": "16 dní / 14 nocí",
    "tour2.price": "od 3 850 €",

    "tour3.title": "Srí Lanka – Čaj, chrámy a pláže",
    "tour3.desc": "Skalná pevnosť Sigiriya, safari slonov v Minneriya, čajové plantáže Ella a oddych pri oceáne.",
    "tour3.duration": "12 dní / 10 nocí",
    "tour3.price": "od 1 690 €",

    "tour4.title": "Čile & Patagónia – Na konci sveta",
    "tour4.desc": "Národný park Torres del Paine, ľadovec Grey, púšť Atacama a pulzujúce Santiago de Chile.",
    "tour4.duration": "14 dní / 12 nocí",
    "tour4.price": "od 3 250 €",

    "tour5.title": "Kuba – Čaro koloniálnej Havany",
    "tour5.desc": "Klasické americké veterány, tabakové údolie Viñales, Trinidad a all-inclusive pláže Varadera.",
    "tour5.duration": "11 dní / 9 nocí",
    "tour5.price": "od 1 890 €",

    "tour6.title": "Poľovačky a Safari v Afrike",
    "tour6.desc": "Lov a foto-safari v overených revíroch Namíbie a Juhoafrickej republiky pod vedením profi sprievodcov.",
    "tour6.duration": "9 dní / 7 nocí",
    "tour6.price": "od 2 450 €",

    // Flights Features
    "flights.title": "Letenky do celého sveta bez starostí",
    "flights.subtitle": "Porovnávame viac ako 550 leteckých spoločností. Garantujeme optimálne prestupy a nonstop asistenciu pri meškaní či zmenách.",
    "flights.f1.title": "GDS & Nízkonákladovky",
    "flights.f1.desc": "Prepojenie globálnych systémov Amadeus/Sabre s low-cost aerolinkami pre bezkonkurenčnú cenu.",
    "flights.f2.title": "Správa míľ a vernostných kariet",
    "flights.f2.desc": "Plná administrácia vernostných programov Miles&More, Flying Blue, Skywards a korporátnych profilov.",
    "flights.f3.title": "Online Check-in & Sedadlá",
    "flights.f3.desc": "Bezstarostné odbavenie, rezervácia sedadiel s extra miestom na nohy a špeciálnych jedál vopred.",
    "flights.f4.title": "24/7 Núdzová záchranná sieť",
    "flights.f4.desc": "Zrušený let? Štrajk? Zmena trasy? Náš dispečing vyrieši náhradné spojenie okamžite bez čakania na linkách.",

    // Services
    "services.sectionTag": "Komplexné portfólio",
    "services.title": "Všetko pre vašu cestu na jednom mieste",
    "services.subtitle": "Nič nie je nemožné. Šetríme váš drahocenný čas a peniaze s garanciou maximálnej spoľahlivosti.",
    "services.s1.title": "Letenky & Cestovné lístky",
    "services.s1.desc": "Kompletný servis leteniek, flexibilné tarify, skupinové rezervácie a optimalizácia letových trás.",
    "services.s2.title": "Ubytovanie & Hotely",
    "services.s2.desc": "Overené hotely, butikové rezorty, privátne vily a lodge od 3* po 5* Deluxe po celom svete.",
    "services.s3.title": "Prenájom vozidiel a karavanov",
    "services.s3.desc": "Autopožičovne, obytné karavany pre rodiny i legendárne motocykle Harley Davidson v USA a Austrálii.",
    "services.s4.title": "Vízový servis & ESTA",
    "services.s4.desc": "Vybavenie turistických aj obchodných víz, elektronické autorizácie ESTA, eTA a konzulárne poradenstvo.",
    "services.s5.title": "Cestovné poistenie (ECP)",
    "services.s5.desc": "Oficiálny partner Európskej cestovnej poisťovne. Liečebné náklady, storno zájazdu a poistenie batožiny.",
    "services.s6.title": "Firemné cesty & MICE",
    "services.s6.desc": "Komplexná cestovná politika pre firmy, teambuildingy, kongresy, fakturácia a 24/7 manažér pre firmu.",

    // Why Choose Us
    "why.sectionTag": "Naše prednosti",
    "why.title": "Prečo cestovať práve s TRAVELFUN?",
    "why.subtitle": "Sme tím vášnivých cestovateľov a certifikovaných expertov. Zažite rozdiel osobného prístupu.",
    "why.w1.title": "24/7 / 365 Osobná dostupnosť",
    "why.w1.desc": "Sme k dispozícii non-stop. V prípade meškania, straty batožiny či núdze voláte priamo nášmu tímu, nie robotom.",
    "why.w2.title": "Komplexné riešenie bez stresu",
    "why.w2.desc": "Letenky, hotely, transfery, víza, vstupy i poistenie vyriešite jediným kontaktom z pohodlia domova.",
    "why.w3.title": "Flexibilita a program na mieru",
    "why.w3.desc": "Nechceme vás viazať na nudné katalógové šablóny. Každú trasu vieme upraviť podľa vášho tempa a želaní.",
    "why.w4.title": "Dlhoročné praktické skúsenosti",
    "why.w4.desc": "Poznáme lokálne podmienky, tajné tipy a triky v cieľových destináciách. Odporučujeme len to, čo sme sami zažili.",
    "why.w5.title": "Optimálny pomer kvality a ceny",
    "why.w5.desc": "Vďaka priamym partnerstvám a GDS prístupom vyjednávame výhodnejšie ceny a pridávame hodnotné benefity.",
    "why.w6.title": "Overení medzinárodní partneri",
    "why.w6.desc": "Spolupracujeme s renomovanými lídrami: Adventure Outdoors Tongariro (NZ), Vulpes, G8M8 Australia a Európska cestovná poisťovňa.",

    // Trip Calculator
    "calc.sectionTag": "Interaktívny plánovač",
    "calc.title": "Orientačná kalkulačka vašej vysnívanej cesty",
    "calc.subtitle": "Zvoľte parametre vašej cesty a okamžite získajte orientačný rozpočet s možnosťou odoslať dopyt.",
    "calc.destLabel": "Cieľová destinácia",
    "calc.daysLabel": "Dĺžka pobytu (dni):",
    "calc.personsLabel": "Počet osôb:",
    "calc.tierLabel": "Kategória štandardu",
    "calc.tier.comfort": "Komfort (3-4* hotely, overené služby)",
    "calc.tier.premium": "Premium (4-5* rezorty, privátne transfery)",
    "calc.tier.luxury": "Luxury Deluxe (5* špičkové hotely, súkromný sprievodca)",
    "calc.flightInc": "Zahrnúť letenky z Viedne/Bratislavy (+ cca 450 - 1100 €/os.)",
    "calc.insureInc": "Zahrnúť komplexné cestovné poistenie ECP (+ cca 45 €/os.)",
    "calc.resultTitle": "Odhadovaný celkový rozpočet:",
    "calc.perPerson": "na osobu",
    "calc.cta": "Požiadať o presnú cenovú ponuku s touto konfiguráciou",

    // Testimonials
    "reviews.sectionTag": "Spokojní klienti",
    "reviews.title": "Čo o nás hovoria naši cestovatelia",
    "reviews.r1.text": "Veľký okruh Novým Zélandom bol životný zážitok. Všetky transfery, ubytovania aj letenky sedeli do minúty. Neuveriteľný osobný prístup tímu Travelfun!",
    "reviews.r1.author": "Ing. Peter Kováčik, Bratislava",
    "reviews.r1.trip": "Poznávací zájazd Nový Zéland",
    "reviews.r2.text": "Keď nám kvôli počasiu zrušili spoj v Dubaji, pani Lucia zo zákazníckej linky nám do 20 minút prebookovala nový let. Cestovať s Travelfun znamená mať istotu.",
    "reviews.r2.author": "Martina & Juraj B., Košice",
    "reviews.r2.trip": "Exotika Srí Lanka & Maledivy",
    "reviews.r3.text": "Pre našu firmu zabezpečujú kompletné služobné cesty a medzinárodné konferencie už 4 roky. Profesionálny systém, prehľadné vyúčtovania a okamžitá reakcia.",
    "reviews.r3.author": "Róbert Molnár, Konateľ IT spoločnosti",
    "reviews.r3.trip": "Firemné balíky & Corporate travel",

    // Contact
    "contact.sectionTag": "Sme tu pre vás",
    "contact.title": "Začnite plánovať svoje ďalšie dobrodružstvo",
    "contact.subtitle": "Zastavte sa u nás na Liptove alebo nám napíšte. Odpovedáme rýchlo a s úsmevom.",
    "contact.addressTitle": "Sídlo spoločnosti",
    "contact.address": "TRAVELFUN, s.r.o., Bodice 189, 031 01 Liptovský Mikuláš, Slovenská republika",
    "contact.phonesTitle": "Telefónne linky",
    "contact.hoursTitle": "Dostupnosť servisu",
    "contact.hours": "Po - Pia: 08:30 - 17:30 • Hotline: 24/7/365",
    "contact.form.name": "Vaše celé meno",
    "contact.form.email": "Váš e-mail",
    "contact.form.phone": "Telefónne číslo",
    "contact.form.interest": "Typ služby",
    "contact.form.optTours": "Poznávací zájazd / Expedícia",
    "contact.form.optFlights": "Samostatné letenky",
    "contact.form.optExotic": "Dovolenka pri mori / Exotika",
    "contact.form.optCorporate": "Firemné cesty & MICE",
    "contact.form.optCustom": "Cesta na mieru",
    "contact.form.message": "Vaša predstava o ceste (termín, počet osôb, rozpočet...)",
    "contact.form.consent": "Súhlasím so spracovaním osobných údajov na účely vybavenia dopytu.",
    "contact.form.submit": "Odoslať nezáväzný dopyt",

    // Telemetry HUD
    "telem.hudBtn": "⚡ Telemetria live",
    "telem.drawerTitle": "Live Telemetry & Analytics Inspector",
    "telem.session": "Relácia ID:",
    "telem.eventsCount": "Zaznamenaných udalostí:",
    "telem.activeLang": "Aktívny jazyk:",
    "telem.activeTheme": "Aktívna téma:",
    "telem.exportBtn": "Exportovať dáta (JSON)",
    "telem.clearBtn": "Vyčistiť log",
    "telem.simBtn": "Simulovať udalosť",
    "telem.empty": "Zatiaľ neboli zaznamenané žiadne udalosti.",

    // Footer
    "footer.desc": "Autorizovaná cestovná kancelária a agentúra TRAVELFUN. Váš spoľahlivý partner pre letenky, exotické expedície a bezstarostné cestovanie už vyše 15 rokov.",
    "footer.quickLinks": "Rýchle odkazy",
    "footer.destinations": "Populárne destinácie",
    "footer.legal": "Právne informácie & Ochrana dát",
    "footer.rights": "Všetky práva vyhradené.",
    "footer.partner": "Partnerská sieť",

    // Toast
    "toast.inquirySent": "Váš dopyt bol úspešne zaznamenaný a odoslaný! Čoskoro vás budeme kontaktovať.",
    "toast.copied": "Skopírované do schránky."
  },

  en: {
    // Top Bar
    "topbar.emergency": "24/7 Travel Assistance Hotline: +421 948 050 720",
    "topbar.email": "info@travelfun.sk",
    "topbar.status": "Open • We are online for you",

    // Navigation
    "nav.home": "Home",
    "nav.tours": "Tours & Expeditions",
    "nav.flights": "Flights",
    "nav.services": "Services",
    "nav.whyus": "Why Us?",
    "nav.calculator": "Trip Planner",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.cta": "Request a Quote",

    // Hero Section
    "hero.badge": "✈️ TRAVELFUN Travel Agency & Tour Operator",
    "hero.title": "Discover the World with Joy and Peace of Mind",
    "hero.subtitle": "Comprehensive travel solutions from worldwide flight tickets to exotic expeditions and tailor-made corporate trips. We craft your perfect, worry-free escape from reality.",
    "hero.tab.flights": "Worldwide Flights",
    "hero.tab.tours": "Vacations & Stays",
    "hero.tab.expeditions": "Adventure Expeditions",
    "hero.tab.corporate": "Corporate Travel (MICE)",

    // Search Fields
    "search.from": "Origin (e.g. Vienna, Bratislava, Prague)",
    "search.to": "Destination (e.g. Sydney, Bangkok, New York)",
    "search.deptDate": "Departure Date",
    "search.retDate": "Return Date",
    "search.passengers": "Passengers",
    "search.passengers.opt1": "1 Adult",
    "search.passengers.opt2": "2 Adults",
    "search.passengers.opt3": "Family (2+2)",
    "search.passengers.opt4": "Group (5+)",
    "search.class": "Cabin Class",
    "search.class.eco": "Economy Class",
    "search.class.prem": "Premium Economy",
    "search.class.biz": "Business Class",
    "search.btn": "Search Best Offers",

    // Hero Stats
    "stats.exp": "15+ Years in Tourism",
    "stats.airlines": "550+ Partner Airlines",
    "stats.clients": "12,500+ Happy Travelers",
    "stats.support": "24/7 Personal Assistance",

    // Tours Section
    "tours.sectionTag": "Travel Inspiration",
    "tours.title": "Handcrafted Expeditions & Holidays",
    "tours.subtitle": "From breathtaking New Zealand and sunny Australia to the wild landscapes of Patagonia and tropical islands.",
    "tours.filter.all": "All Offers",
    "tours.filter.expeditions": "Expeditions",
    "tours.filter.exotic": "Exotic & Beach",
    "tours.filter.adventure": "Hunting & Safari",
    "tours.filter.nature": "Nature & Mountains",
    "tours.btn.detail": "View Itinerary & Inquiry",
    "tours.badge.featured": "Bestseller",
    "tours.badge.exclusive": "Exclusive",
    "tours.badge.lastminute": "Last Minute",

    // Specific Tours
    "tour1.title": "New Zealand – The Grand Tour",
    "tour1.desc": "Rotorua geysers, Southern Alps glaciers, magical Milford Sound fjord and Hobbiton in small guided groups.",
    "tour1.duration": "18 days / 15 nights",
    "tour1.price": "from €3,490",

    "tour2.title": "Magical Highlights of Australia",
    "tour2.desc": "Sydney Opera House, sacred Uluru monolith, snorkeling on the Great Barrier Reef and tropical rainforests in Cairns.",
    "tour2.duration": "16 days / 14 nights",
    "tour2.price": "from €3,850",

    "tour3.title": "Sri Lanka – Tea, Temples & Oceans",
    "tour3.desc": "Sigiriya rock citadel, wild elephant safari in Minneriya, lush Ella tea estates and relaxation by the Indian Ocean.",
    "tour3.duration": "12 days / 10 nights",
    "tour3.price": "from €1,690",

    "tour4.title": "Chile & Patagonia – Edge of the World",
    "tour4.desc": "Torres del Paine National Park, Grey Glacier, vibrant Atacama desert and cosmopolitan Santiago de Chile.",
    "tour4.duration": "14 days / 12 nights",
    "tour4.price": "from €3,250",

    "tour5.title": "Cuba – Vintage Charm of Havana",
    "tour5.desc": "Classic vintage cars, Viñales tobacco valley, colonial Trinidad and pristine all-inclusive beaches in Varadero.",
    "tour5.duration": "11 days / 9 nights",
    "tour5.price": "from €1,890",

    "tour6.title": "African Hunting & Wildlife Safari",
    "tour6.desc": "Certified hunting safaris and wildlife photography tours across premier reserves in Namibia and South Africa.",
    "tour6.duration": "9 days / 7 nights",
    "tour6.price": "from €2,450",

    // Flights Features
    "flights.title": "Stress-Free Flights Worldwide",
    "flights.subtitle": "Comparing over 550 global carriers. We guarantee optimal connections, seat allocation and non-stop disruption management.",
    "flights.f1.title": "GDS & Low-Cost Coverage",
    "flights.f1.desc": "Direct integration with Amadeus/Sabre and leading low-cost airlines for unbeatable fares.",
    "flights.f2.title": "Frequent Flyer & Mileage Care",
    "flights.f2.desc": "Complete management of Miles&More, Flying Blue, Skywards and corporate loyalty rewards.",
    "flights.f3.title": "Online Check-in & Extra Legroom",
    "flights.f3.desc": "Worry-free pre-boarding, priority seat selection and pre-ordered special meal arrangements.",
    "flights.f4.title": "24/7 Flight Disruption Rescue",
    "flights.f4.desc": "Cancelled flight or missed connection? Our dedicated agents rebook you immediately with zero call center waiting.",

    // Services
    "services.sectionTag": "Our Expertise",
    "services.title": "Everything for Your Journey Under One Roof",
    "services.subtitle": "Nothing is impossible. We save your time, protect your budget, and deliver complete reliability.",
    "services.s1.title": "Flights & Air Ticketing",
    "services.s1.desc": "Full flight ticketing, flexible booking conditions, group ticketing and custom route optimizations.",
    "services.s2.title": "Accommodation & Luxury Resorts",
    "services.s2.desc": "Hand-picked hotels, boutique stays, private villas and safari lodges from 3-star to 5-star Deluxe.",
    "services.s3.title": "Vehicle & Campervan Rental",
    "services.s3.desc": "Car rentals worldwide, motorhomes for scenic road trips and authentic Harley Davidson rentals in the US and Australia.",
    "services.s4.title": "Visa Service & ESTA",
    "services.s4.desc": "Hassle-free tourist and business visas, US ESTA, Canada eTA authorizations and consular advisory.",
    "services.s5.title": "Travel Insurance (ECP)",
    "services.s5.desc": "Official partner of European Travel Insurance (ECP). Comprehensive medical, cancellation and baggage coverage.",
    "services.s6.title": "Corporate Travel & MICE",
    "services.s6.desc": "Corporate travel policies, incentive trips, conferences, streamlined invoicing and a 24/7 dedicated account manager.",

    // Why Choose Us
    "why.sectionTag": "Our Strengths",
    "why.title": "Why Travel with TRAVELFUN?",
    "why.subtitle": "We are a passionate team of seasoned globetrotters and certified travel agents. Experience genuine personal care.",
    "why.w1.title": "24/7 / 365 Direct Availability",
    "why.w1.desc": "Always reachable. In case of flight delays or emergencies, you speak directly with our team, never bots.",
    "why.w2.title": "Seamless Turnkey Experience",
    "why.w2.desc": "Flights, hotels, transfers, excursions, visas, and insurance organized smoothly from the comfort of your home.",
    "why.w3.title": "Tailor-Made Flexibility",
    "why.w3.desc": "No rigid cookie-cutter packages. Every itinerary is customized to match your pace, dreams and budget.",
    "why.w4.title": "Decades of Field Expertise",
    "why.w4.desc": "We know local secrets, scenic detours, and hidden gems firsthand. We only recommend what we have tested ourselves.",
    "why.w5.title": "Optimized Value & Perks",
    "why.w5.desc": "Our direct vendor relationships and GDS contracts ensure preferential rates, free room upgrades and VIP perks.",
    "why.w6.title": "Trusted Global Alliances",
    "why.w6.desc": "Proud partner of Adventure Outdoors Tongariro (New Zealand), Vulpes Safari, G8M8 Australia and European Travel Insurance.",

    // Trip Calculator
    "calc.sectionTag": "Interactive Planner",
    "calc.title": "Estimate Your Dream Trip Budget",
    "calc.subtitle": "Select your preferences to calculate an instant cost estimate and send a tailor-made inquiry.",
    "calc.destLabel": "Target Destination",
    "calc.daysLabel": "Duration (days):",
    "calc.personsLabel": "Number of travelers:",
    "calc.tierLabel": "Comfort Level",
    "calc.tier.comfort": "Comfort (3-4* hotels, verified local tours)",
    "calc.tier.premium": "Premium (4-5* boutique resorts, private transfers)",
    "calc.tier.luxury": "Luxury Deluxe (5* iconic properties, private VIP guide)",
    "calc.flightInc": "Include international flights from Vienna/Bratislava (+ €450 - €1,100/person)",
    "calc.insureInc": "Include premium ECP travel insurance (+ approx. €45/person)",
    "calc.resultTitle": "Estimated Total Budget:",
    "calc.perPerson": "per person",
    "calc.cta": "Request a Detailed Proposal with This Configuration",

    // Testimonials
    "reviews.sectionTag": "Client Stories",
    "reviews.title": "What Our Travelers Say",
    "reviews.r1.text": "The Grand Tour of New Zealand was the adventure of a lifetime. Every transfer, accommodation and flight was perfectly timed. Outstanding personal care from Travelfun!",
    "reviews.r1.author": "Peter Kováčik, Civil Engineer",
    "reviews.r1.trip": "New Zealand Grand Tour",
    "reviews.r2.text": "When our connection was cancelled due to storms in Dubai, Lucia from Travelfun rebooked us onto a new flight within 20 minutes. Traveling with them means true peace of mind.",
    "reviews.r2.author": "Martina & Juraj B.",
    "reviews.r2.trip": "Sri Lanka & Maldives Honeymoon",
    "reviews.r3.text": "Travelfun has managed all our international corporate travel and symposiums for over 4 years. Seamless invoicing, high speed and round-the-clock availability.",
    "reviews.r3.author": "Robert Molnar, IT Managing Director",
    "reviews.r3.trip": "Corporate Travel & Global Flights",

    // Contact
    "contact.sectionTag": "Get In Touch",
    "contact.title": "Start Planning Your Next Journey",
    "contact.subtitle": "Visit our office in the heart of Liptov, Slovakia, or write to us online. We reply swiftly and personally.",
    "contact.addressTitle": "Headquarters",
    "contact.address": "TRAVELFUN, s.r.o., Bodice 189, 031 01 Liptovský Mikuláš, Slovak Republic",
    "contact.phonesTitle": "Direct Phone Lines",
    "contact.hoursTitle": "Service Hours",
    "contact.hours": "Mon - Fri: 08:30 - 17:30 • Emergency Hotline: 24/7/365",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.interest": "Service of Interest",
    "contact.form.optTours": "Guided Tour / Expedition",
    "contact.form.optFlights": "Flight Tickets Only",
    "contact.form.optExotic": "Beach Vacation / Exotic Stay",
    "contact.form.optCorporate": "Corporate Travel & MICE",
    "contact.form.optCustom": "Custom Tailor-Made Trip",
    "contact.form.message": "Trip details (desired dates, travelers, special wishes...)",
    "contact.form.consent": "I agree to the processing of personal data for the purpose of handling this inquiry.",
    "contact.form.submit": "Send Inquiry Without Obligation",

    // Telemetry HUD
    "telem.hudBtn": "⚡ Live Telemetry",
    "telem.drawerTitle": "Live Telemetry & Analytics Inspector",
    "telem.session": "Session ID:",
    "telem.eventsCount": "Recorded Events:",
    "telem.activeLang": "Active Language:",
    "telem.activeTheme": "Active Theme:",
    "telem.exportBtn": "Export Log (JSON)",
    "telem.clearBtn": "Clear Log",
    "telem.simBtn": "Simulate Test Event",
    "telem.empty": "No telemetry events captured yet.",

    // Footer
    "footer.desc": "Licensed tour operator and travel agency TRAVELFUN. Your reliable partner for flight tickets, exotic tours and unforgettable journeys for more than 15 years.",
    "footer.quickLinks": "Quick Navigation",
    "footer.destinations": "Popular Destinations",
    "footer.legal": "Legal & Privacy Policy",
    "footer.rights": "All rights reserved.",
    "footer.partner": "Partner Network",

    // Toast
    "toast.inquirySent": "Your inquiry has been successfully recorded and sent! We will reach out to you shortly.",
    "toast.copied": "Copied to clipboard."
  },

  de: {
    // Top Bar
    "topbar.emergency": "24/7 Reise-Notfall-Hotline: +421 948 050 720",
    "topbar.email": "info@travelfun.sk",
    "topbar.status": "Geöffnet • Wir sind online für Sie da",

    // Navigation
    "nav.home": "Startseite",
    "nav.tours": "Reisen & Expeditionen",
    "nav.flights": "Flugtickets",
    "nav.services": "Dienstleistungen",
    "nav.whyus": "Warum wir?",
    "nav.calculator": "Reiseplaner",
    "nav.reviews": "Bewertungen",
    "nav.contact": "Kontakt",
    "nav.cta": "Unverbindliche Anfrage",

    // Hero Section
    "hero.badge": "✈️ Reisebüro & Reiseveranstalter TRAVELFUN",
    "hero.title": "Entdecken Sie die Welt mit Freude und Gelassenheit",
    "hero.subtitle": "Ganzheitliche Reiselösungen von weltweiten Flugtickets über exotische Rundreisen bis hin zu maßgeschneiderten Geschäftsreisen. Wir organisieren Ihre perfekte Auszeit vom Alltag.",
    "hero.tab.flights": "Weltweite Flüge",
    "hero.tab.tours": "Urlaube & Pauschalreisen",
    "hero.tab.expeditions": "Entdecker-Expeditionen",
    "hero.tab.corporate": "Geschäftsreisen (MICE)",

    // Search Fields
    "search.from": "Abflugort (z.B. Wien, Bratislava, München)",
    "search.to": "Zielort (z.B. Sydney, Bangkok, New York)",
    "search.deptDate": "Hinflugdatum",
    "search.retDate": "Rückflugdatum",
    "search.passengers": "Reisende",
    "search.passengers.opt1": "1 Erwachsener",
    "search.passengers.opt2": "2 Erwachsene",
    "search.passengers.opt3": "Familie (2+2)",
    "search.passengers.opt4": "Gruppe (5+)",
    "search.class": "Buchungsklasse",
    "search.class.eco": "Economy Class",
    "search.class.prem": "Premium Economy",
    "search.class.biz": "Business Class",
    "search.btn": "Beste Angebote finden",

    // Hero Stats
    "stats.exp": "15+ Jahre Erfahrung",
    "stats.airlines": "550+ Partnerfluggesellschaften",
    "stats.clients": "12.500+ Zufriedene Reisende",
    "stats.support": "24/7 Persönlicher Notfallsupport",

    // Tours Section
    "tours.sectionTag": "Reiseinspiration",
    "tours.title": "Ausgewählte Expeditionen & Traumurlaube",
    "tours.subtitle": "Vom faszinierenden Neuseeland über Australiens Kontraste bis zu Patagoniens Gletschern und exotischen Paradiesen.",
    "tours.filter.all": "Alle Angebote",
    "tours.filter.expeditions": "Rundreisen & Expeditionen",
    "tours.filter.exotic": "Exotik & Strand",
    "tours.filter.adventure": "Jagd & Safari",
    "tours.filter.nature": "Berge & Natur",
    "tours.btn.detail": "Reiseprogramm & Anfrage",
    "tours.badge.featured": "Bestseller",
    "tours.badge.exclusive": "Exklusiv",
    "tours.badge.lastminute": "Last Minute",

    // Specific Tours
    "tour1.title": "Neuseeland – Die Große Rundreise",
    "tour1.desc": "Rotorua Geysire, Gletscher der Südalpen, majestätischer Milford Sound Fjord und Hobbiton in kleinen Reisegruppen.",
    "tour1.duration": "18 Tage / 15 Nächte",
    "tour1.price": "ab 3.490 €",

    "tour2.title": "Magische Höhepunkte Australiens",
    "tour2.desc": "Sydney mit Opernhaus, heiliger Felsen Uluru, Schnorcheln am Great Barrier Reef und tropischer Regenwald in Cairns.",
    "tour2.duration": "16 Tage / 14 Nächte",
    "tour2.price": "ab 3.850 €",

    "tour3.title": "Sri Lanka – Tee, Tempel und Traumstrände",
    "tour3.desc": "Sigiriya Felsenfestung, Elefantensafari in Minneriya, malerische Teeplantagen in Ella und Erholung am Indischen Ozean.",
    "tour3.duration": "12 Tage / 10 Nächte",
    "tour3.price": "ab 1.690 €",

    "tour4.title": "Chile & Patagonien – Am Ende der Welt",
    "tour4.desc": "Nationalpark Torres del Paine, Grey-Gletscher, Atacama-Wüste und das pulsierende Santiago de Chile.",
    "tour4.duration": "14 Tage / 12 Nächte",
    "tour4.price": "ab 3.250 €",

    "tour5.title": "Kuba – Der Zauber von Havanna",
    "tour5.desc": "Klassische Oldtimer, Tabaktal Viñales, koloniales Trinidad und schneeweiße Traumstrände in Varadero.",
    "tour5.duration": "11 Tage / 9 Nächte",
    "tour5.price": "ab 1.890 €",

    "tour6.title": "Jagdreisen & Safari in Afrika",
    "tour6.desc": "Exklusive Jagd- und Fotosafaris in ausgewählten Revieren Namibias und Südafrikas unter erfahrener Führung.",
    "tour6.duration": "9 Tage / 7 Nächte",
    "tour6.price": "ab 2.450 €",

    // Flights Features
    "flights.title": "Weltweite Flüge ohne Stress",
    "flights.subtitle": "Vergleich von über 550 Fluggesellschaften weltweit. Optimale Umsteigezeiten und 24/7 Notfallservice bei Verspätungen.",
    "flights.f1.title": "GDS & Low-Cost Vernetzung",
    "flights.f1.desc": "Direkte Anbindung an Amadeus/Sabre sowie Billigflieger für unschlagbare Flugtarife.",
    "flights.f2.title": "Meilen- & Vielfliegerverwaltung",
    "flights.f2.desc": "Professionelle Betreuung von Miles&More, Flying Blue, Skywards und Unternehmenskonten.",
    "flights.f3.title": "Online Check-in & Sitzplatzreservierung",
    "flights.f3.desc": "Bequeme Vorab-Sitzplatzreservierung mit mehr Beinfreiheit und Sondermahlzeiten.",
    "flights.f4.title": "24/7 Sofort-Umbuchungsservice",
    "flights.f4.desc": "Flugausfall oder Streik? Unser Disponententeam bucht Sie sofort unbürokratisch um.",

    // Services
    "services.sectionTag": "Unser Leistungsspektrum",
    "services.title": "Alles für Ihre Reise aus einer Hand",
    "services.subtitle": "Nichts ist unmöglich. Wir sparen Ihre wertvolle Zeit und garantieren absolute Zuverlässigkeit.",
    "services.s1.title": "Flugtickets & Tarife",
    "services.s1.desc": "Kompletter Ticketingservice, flexible Tarifbedingungen, Gruppenreisen und Streckenoptimierung.",
    "services.s2.title": "Unterkünfte & Luxushotels",
    "services.s2.desc": "Ausgewählte Hotels, Boutique-Resorts, private Villen und Safarilodges von 3* bis 5* Deluxe weltweit.",
    "services.s3.title": "Mietwagen & Wohnmobile",
    "services.s3.desc": "PKW-Mietwagen, geräumige Wohnmobile sowie legendäre Harley-Davidson-Motorräder in den USA und Australien.",
    "services.s4.title": "Visa-Service & ESTA",
    "services.s4.desc": "Erledigung von Touristen- und Geschäftsvisa, ESTA, eTA-Genehmigungen und konsularische Beratung.",
    "services.s5.title": "Reiseversicherung (ECP)",
    "services.s5.desc": "Offizieller Partner der Europäischen Reiseversicherung. Umfassender Schutz für Storno, Gepäck und Heilkosten.",
    "services.s6.title": "Geschäftsreisen & MICE",
    "services.s6.desc": "Corporate Travel Management, Incentives, Kongresse, transparente Abrechnung und persönlicher Firmenbetreuer.",

    // Why Choose Us
    "why.sectionTag": "Unsere Vorteile",
    "why.title": "Warum mit TRAVELFUN reisen?",
    "why.subtitle": "Wir sind begeisterte Weltenbummler und zertifizierte Touristikprofis. Erleben Sie den Unterschied persönlicher Betreuung.",
    "why.w1.title": "24/7 / 365 Persönliche Erreichbarkeit",
    "why.w1.desc": "Rund um die Uhr für Sie erreichbar. Im Notfall sprechen Sie direkt mit unseren Experten, niemals mit Chatbots.",
    "why.w2.title": "Alles stressfrei organisiert",
    "why.w2.desc": "Flüge, Hotels, Transfers, Visa und Versicherungen mit einem einzigen Ansprechpartner von zu Hause aus.",
    "why.w3.title": "Flexible Maßarbeit",
    "why.w3.desc": "Keine starren Pauschalschablonen. Jedes Detail wird präzise nach Ihren Vorlieben und Ihrem Budget abgestimmt.",
    "why.w4.title": "Langjährige Vor-Ort-Erfahrung",
    "why.w4.desc": "Wir kennen Geheimtipps und Besonderheiten in den Zielländern aus erster Hand. Wir empfehlen nur Erprobtes.",
    "why.w5.title": "Erstklassiges Preis-Leistungs-Verhältnis",
    "why.w5.desc": "Durch direkte Partnerschaften und GDS-Großhandelszugänge sichern wir Ihnen spürbare Preisvorteile.",
    "why.w6.title": "Geprüfte globale Partner",
    "why.w6.desc": "Enge Zusammenarbeit mit Adventure Outdoors Tongariro (NZ), Vulpes Safari, G8M8 Australien und Europäische Reiseversicherung.",

    // Trip Calculator
    "calc.sectionTag": "Interaktiver Planer",
    "calc.title": "Reisekostenrechner für Ihren Traumurlaub",
    "calc.subtitle": "Wählen Sie Ihre Reiseparameter aus und erhalten Sie sofort einen Richtwert für Ihr Budget.",
    "calc.destLabel": "Reiseziel",
    "calc.daysLabel": "Aufenthaltsdauer (Tage):",
    "calc.personsLabel": "Anzahl der Reisenden:",
    "calc.tierLabel": "Standardkategorie",
    "calc.tier.comfort": "Komfort (3-4* Hotels, bewährte Touren)",
    "calc.tier.premium": "Premium (4-5* Resorts, private Transfers)",
    "calc.tier.luxury": "Luxury Deluxe (5* Spitzenhotels, privater Reiseleiter)",
    "calc.flightInc": "Flugtickets ab Wien/Bratislava einbeziehen (+ ca. 450 - 1.100 €/Pers.)",
    "calc.insureInc": "Reiseversicherung ECP einbeziehen (+ ca. 45 €/Pers.)",
    "calc.resultTitle": "Geschätztes Gesamtbudget:",
    "calc.perPerson": "pro Person",
    "calc.cta": "Detailliertes Angebot mit dieser Konfiguration anfordern",

    // Testimonials
    "reviews.sectionTag": "Kundenstimmen",
    "reviews.title": "Was Reisende über TRAVELFUN sagen",
    "reviews.r1.text": "Die große Neuseeland-Rundreise war das Abenteuer unseres Lebens. Jeder Transfer und Flug klappte auf die Minute genau. Phänomenaler Service!",
    "reviews.r1.author": "Ing. Peter Kováčik, Bratislava",
    "reviews.r1.trip": "Rundreise Neuseeland",
    "reviews.r2.text": "Als unser Flug in Dubai sturmbedingt ausfiel, buchte uns Frau Záhorská binnen 20 Minuten auf eine alternative Route um. Bester Service überhaupt!",
    "reviews.r2.author": "Martina & Juraj B.",
    "reviews.r2.trip": "Sri Lanka & Malediven",
    "reviews.r3.text": "Für unser Unternehmen organisiert Travelfun seit vier Jahren alle Auslandsflüge und Konferenzen. Zuverlässig, schnell und perfekt kalkuliert.",
    "reviews.r3.author": "Robert Molnar, IT-Geschäftsführer",
    "reviews.r3.trip": "Corporate Travel & Flüge",

    // Contact
    "contact.sectionTag": "Kontaktieren Sie uns",
    "contact.title": "Starten Sie Ihre Reiseplanung noch heute",
    "contact.subtitle": "Besuchen Sie unser Büro in Liptov oder schreiben Sie uns online. Wir antworten prompt und lösungsorientiert.",
    "contact.addressTitle": "Firmensitz",
    "contact.address": "TRAVELFUN, s.r.o., Bodice 189, 031 01 Liptovský Mikuláš, Slowakische Republik",
    "contact.phonesTitle": "Telefonische Hotline",
    "contact.hoursTitle": "Servicezeiten",
    "contact.hours": "Mo - Fr: 08:30 - 17:30 • 24/7 Notfallbereitschaft",
    "contact.form.name": "Vollständiger Name",
    "contact.form.email": "E-Mail-Adresse",
    "contact.form.phone": "Telefonnummer",
    "contact.form.interest": "Gewünschte Dienstleistung",
    "contact.form.optTours": "Geführte Rundreise / Expedition",
    "contact.form.optFlights": "Nur Flugtickets",
    "contact.form.optExotic": "Badeurlaub / Exotik",
    "contact.form.optCorporate": "Geschäftsreisen (MICE)",
    "contact.form.optCustom": "Individuelle Maßreise",
    "contact.form.message": "Reisedetails (Wunschzeitraum, Personenanzahl, Budget...)",
    "contact.form.consent": "Ich willige in die Verarbeitung meiner Daten zur Bearbeitung dieser Anfrage ein.",
    "contact.form.submit": "Unverbindliche Anfrage absenden",

    // Telemetry HUD
    "telem.hudBtn": "⚡ Live-Telemetrie",
    "telem.drawerTitle": "Live-Telemetrie & Analytics Inspektor",
    "telem.session": "Sitzungs-ID:",
    "telem.eventsCount": "Erfasste Ereignisse:",
    "telem.activeLang": "Aktive Sprache:",
    "telem.activeTheme": "Aktives Design:",
    "telem.exportBtn": "Daten exportieren (JSON)",
    "telem.clearBtn": "Log leeren",
    "telem.simBtn": "Testereignis simulieren",
    "telem.empty": "Noch keine Telemetrie-Ereignisse protokolliert.",

    // Footer
    "footer.desc": "Lizenziertes Reisebüro und Tour Operator TRAVELFUN. Ihr erfahrener Experte für Flüge, weltweite Rundreisen und unvergessliche Erlebnisse seit über 15 Jahren.",
    "footer.quickLinks": "Schnellzugriff",
    "footer.destinations": "Top-Reiseziele",
    "footer.legal": "Rechtliches & Datenschutz",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.partner": "Partnernetzwerk",

    // Toast
    "toast.inquirySent": "Ihre Anfrage wurde erfolgreich erfasst und übermittelt! Wir melden uns in Kürze bei Ihnen.",
    "toast.copied": "In die Zwischenablage kopiert."
  },

  cs: {
    // Top Bar
    "topbar.emergency": "24/7 Asistenční linka na cestách: +421 948 050 720",
    "topbar.email": "info@travelfun.sk",
    "topbar.status": "Otevřeno • Jsme online pro vás",

    // Navigation
    "nav.home": "Domů",
    "nav.tours": "Zájezdy & Expedice",
    "nav.flights": "Letenky",
    "nav.services": "Služby",
    "nav.whyus": "Proč my?",
    "nav.calculator": "Kalkulačka cesty",
    "nav.reviews": "Recenze",
    "nav.contact": "Kontakt",
    "nav.cta": "Nezávazná poptávka",

    // Hero Section
    "hero.badge": "✈️ Cestovní kancelář & agentura TRAVELFUN",
    "hero.title": "Objevujte svět s radostí a bez starostí",
    "hero.subtitle": "Komplexní cestovní řešení od letenek do celého světa přes exotické expedice až po firemní cesty na míru. Připravíme pro vás bezpečný a dokonalý únik z reality.",
    "hero.tab.flights": "Letenky do světa",
    "hero.tab.tours": "Pobyty & Zájezdy",
    "hero.tab.expeditions": "Poznávací expedice",
    "hero.tab.corporate": "Firemní cesty (MICE)",

    // Search Fields
    "search.from": "Odkud (např. Vídeň, Praha, Bratislava)",
    "search.to": "Kam (např. Sydney, Bangkok, New York)",
    "search.deptDate": "Datum odletu",
    "search.retDate": "Datum návratu",
    "search.passengers": "Cestující",
    "search.passengers.opt1": "1 Dospělý",
    "search.passengers.opt2": "2 Dospělí",
    "search.passengers.opt3": "Rodina (2+2)",
    "search.passengers.opt4": "Skupina (5+)",
    "search.class": "Třída",
    "search.class.eco": "Economy Class",
    "search.class.prem": "Premium Economy",
    "search.class.biz": "Business Class",
    "search.btn": "Vyhledat nejlepší nabídku",

    // Hero Stats
    "stats.exp": "15+ Let na trhu",
    "stats.airlines": "550+ Leteckých společností",
    "stats.clients": "12 500+ Spokojených cestovatelů",
    "stats.support": "24/7 Osobní podpora v nouzi",

    // Tours Section
    "tours.sectionTag": "Inspirace na cestování",
    "tours.title": "Výběrové expedice a dovolené",
    "tours.subtitle": "Od kouzelného Nového Zélandu přes slunečnou Austrálii až po divokou Patagonii a exotické ostrovy.",
    "tours.filter.all": "Všechny nabídky",
    "tours.filter.expeditions": "Poznávací expedice",
    "tours.filter.exotic": "Exotika & Moře",
    "tours.filter.adventure": "Lov & Safari",
    "tours.filter.nature": "Hory & Příroda",
    "tours.btn.detail": "Zobrazit itinerář & poptat",
    "tours.badge.featured": "Bestseller",
    "tours.badge.exclusive": "Exkluzivní",
    "tours.badge.lastminute": "Last Minute",

    // Specific Tours
    "tour1.title": "Nový Zéland – Velký okruh",
    "tour1.desc": "Gejzíry Rotorua, ledovce Jižních Alp, magický fjord Milford Sound a filmový Hobitín v malých skupinách.",
    "tour1.duration": "18 dní / 15 nocí",
    "tour1.price": "od 87 900 Kč",

    "tour2.title": "Kouzelná místa Austrálie",
    "tour2.desc": "Sydney s Operou, posvátná skála Uluru, šnorchlování na Velkém bariérovém útesu a tropický Cairns.",
    "tour2.duration": "16 dní / 14 nocí",
    "tour2.price": "od 96 500 Kč",

    "tour3.title": "Srí Lanka – Čaj, chrámy a pláže",
    "tour3.desc": "Skalní pevnost Sigiriya, sloní safari v Minneriya, čajové plantáže v Ella a odpočinek u oceánu.",
    "tour3.duration": "12 dní / 10 nocí",
    "tour3.price": "od 42 500 Kč",

    "tour4.title": "Chile & Patagonie – Na konci světa",
    "tour4.desc": "Národní park Torres del Paine, ledovec Grey, poušť Atacama a pulzující Santiago de Chile.",
    "tour4.duration": "14 dní / 12 nocí",
    "tour4.price": "od 81 900 Kč",

    "tour5.title": "Kuba – Kouzlo koloniální Havany",
    "tour5.desc": "Tradiční americké veterány, tabákové údolí Viñales, Trinidad a all-inclusive pláže Varadera.",
    "tour5.duration": "11 dní / 9 nocí",
    "tour5.price": "od 47 500 Kč",

    "tour6.title": "Lovecké výpravy a Safari v Africe",
    "tour6.desc": "Lovecké a foto-safari v prověřených revírech Namibie a Jihoafrické republiky s profesionálním doprovodem.",
    "tour6.duration": "9 dní / 7 nocí",
    "tour6.price": "od 61 900 Kč",

    // Flights Features
    "flights.title": "Letenky do celého světa bez starostí",
    "flights.subtitle": "Porovnáváme více než 550 leteckých společností. Garantujeme optimální návaznosti a nonstop asistenci při zpoždění.",
    "flights.f1.title": "GDS & Nízkonákladové aerolinky",
    "flights.f1.desc": "Napojení na globální systémy Amadeus/Sabre i low-cost dopravce pro bezkonkurenční cenu.",
    "flights.f2.title": "Správa mil a věrnostních karet",
    "flights.f2.desc": "Kompletní administrace programů Miles&More, Flying Blue, Skywards a firemních účtů.",
    "flights.f3.title": "Online Check-in & Sedadla",
    "flights.f3.desc": "Bezstarostné odbavení, rezervace sedadel s extra prostorem pro nohy a speciální strava.",
    "flights.f4.title": "24/7 Okamžitá pomoc v nouzi",
    "flights.f4.desc": "Zrušený let nebo stávka? Náš dispečink vyřeší náhradní spojení ihned bez zdlouhavého čekání na lince.",

    // Services
    "services.sectionTag": "Kompletní nabídka",
    "services.title": "Vše pro vaši cestu na jednom místě",
    "services.subtitle": "Nic není nemožné. Šetříme váš čas i finance a garantujeme 100% spolehlivost.",
    "services.s1.title": "Letenky & Jízdenky",
    "services.s1.desc": "Kompletní letenkový servis, flexibilní tarify, skupinové rezervace a optimalizace tras.",
    "services.s2.title": "Ubytování & Hotely",
    "services.s2.desc": "Prověřené hotely, butikové resorty, soukromé vily a safari lodge od 3* po 5* Deluxe.",
    "services.s3.title": "Pronájem aut a obytných vozů",
    "services.s3.desc": "Autopůjčovny, obytné karavany i motocykly Harley Davidson v USA a Austrálii.",
    "services.s4.title": "Vízový servis & ESTA",
    "services.s4.desc": "Vyřízení turistických i obchodních víz, ESTA do USA, eTA do Kanady a konzulární asistence.",
    "services.s5.title": "Cestovní pojištění (ECP)",
    "services.s5.desc": "Oficiální partner Evropské cestovní pojišťovny. Léčebné výlohy, storno zájezdu a pojištění zavazadel.",
    "services.s6.title": "Firemní cesty & MICE",
    "services.s6.desc": "Cestovní politika pro firmy, konference, teambuildingy a vyhrazený manažer 24/7.",

    // Why Choose Us
    "why.sectionTag": "Naše přednosti",
    "why.title": "Proč cestovat právě s TRAVELFUN?",
    "why.subtitle": "Jsme tým nadšených cestovatelů a certifikovaných expertů. Zažijte výhodu individuální péče.",
    "why.w1.title": "24/7 / 365 Osobní dostupnost",
    "why.w1.desc": "Jsme k dispozici non-stop. Při problémech voláte přímo našim specialistům, ne robotům.",
    "why.w2.title": "Komplexní servis bez stresu",
    "why.w2.desc": "Letenky, hotely, transfery, víza i pojištění vyřídíte pohodlně na jednom místě.",
    "why.w3.title": "Flexibilita a cesty na míru",
    "why.w3.desc": "Neomezujeme vás na unifikované katalogy. Každý itinerář přizpůsobíme vašemu tempu.",
    "why.w4.title": "Dlouholeté praktické know-how",
    "why.w4.desc": "Známe místní reálie, skryté kouty i praktické tipy. Doporučujeme jen to, co sami známe.",
    "why.w5.title": "Optimální poměr kvality a ceny",
    "why.w5.desc": "Díky přímým partnerstvím zajistíme výhodnější ceny a exkluzivní bonusy navíc.",
    "why.w6.title": "Prověření mezinárodní partneři",
    "why.w6.desc": "Úzce spolupracujeme s Adventure Outdoors Tongariro (NZ), Vulpes Safari, G8M8 Australia a Evropskou pojišťovnou.",

    // Trip Calculator
    "calc.sectionTag": "Interaktivní plánovač",
    "calc.title": "Orientační kalkulačka vaší vysněné cesty",
    "calc.subtitle": "Zvolte parametry své cesty a získejte okamžitý odhad rozpočtu s možností odeslat poptávku.",
    "calc.destLabel": "Cílová destinace",
    "calc.daysLabel": "Délka pobytu (dny):",
    "calc.personsLabel": "Počet osob:",
    "calc.tierLabel": "Standard ubytování",
    "calc.tier.comfort": "Komfort (3-4* hotely, prověřené zážitky)",
    "calc.tier.premium": "Premium (4-5* resorty, soukromé transfery)",
    "calc.tier.luxury": "Luxury Deluxe (5* špičkové hotely, soukromý průvodce)",
    "calc.flightInc": "Zahrnout letenky z Vídně/Prahy (+ cca 11 000 - 27 000 Kč/os.)",
    "calc.insureInc": "Zahrnout komplexní cestovní pojištění ECP (+ cca 1 100 Kč/os.)",
    "calc.resultTitle": "Odhadovaný celkový rozpočet:",
    "calc.perPerson": "na osobu",
    "calc.cta": "Požádat o detailní nabídku s touto konfigurací",

    // Testimonials
    "reviews.sectionTag": "Hodnocení klientů",
    "reviews.title": "Co říkají naši cestovatelé",
    "reviews.r1.text": "Velký okruh Novým Zélandem byl naprosto bezkonkurenční zážitek. Všechny transfery, hotely i lety klapaly na minutu. Obrovský dík týmu Travelfun!",
    "reviews.r1.author": "Ing. Petr Kováčik",
    "reviews.r1.trip": "Poznávací zájezd Nový Zéland",
    "reviews.r2.text": "Když nám kvůli bouřkám v Dubaji zrušili spojení, paní Lucia z Travelfun nám za 20 minut zajistila náhradní letenky. Mít za sebou takovou podporu je k nezaplacení.",
    "reviews.r2.author": "Martina & Jiří B.",
    "reviews.r2.trip": "Srí Lanka & Maledivy",
    "reviews.r3.text": "Pro naši technologickou společnost spravují služební cesty do celého světa. Spolehlivost, transparentnost a okamžité řešení změn.",
    "reviews.r3.author": "Robert Molnár, Ředitel IT společnosti",
    "reviews.r3.trip": "Firemní servis & Letenky",

    // Contact
    "contact.sectionTag": "Jsme tu pro vás",
    "contact.title": "Začněte plánovat svou další cestu",
    "contact.subtitle": "Navštivte naši kancelář na Liptově nebo nám napište online. Rádi se vám budeme věnovat.",
    "contact.addressTitle": "Sídlo společnosti",
    "contact.address": "TRAVELFUN, s.r.o., Bodice 189, 031 01 Liptovský Mikuláš, Slovenská republika",
    "contact.phonesTitle": "Telefonní linky",
    "contact.hoursTitle": "Dostupnost servisu",
    "contact.hours": "Po - Pá: 08:30 - 17:30 • Hotline: 24/7/365",
    "contact.form.name": "Vaše celé jméno",
    "contact.form.email": "Váš e-mail",
    "contact.form.phone": "Telefonní číslo",
    "contact.form.interest": "Typ služby",
    "contact.form.optTours": "Poznávací zájezd / Expedice",
    "contact.form.optFlights": "Samostatné letenky",
    "contact.form.optExotic": "Dovolená u moře / Exotika",
    "contact.form.optCorporate": "Firemní cesty & MICE",
    "contact.form.optCustom": "Cesta na míru",
    "contact.form.message": "Vaše představa o cestě (termín, počet osob, rozpočet...)",
    "contact.form.consent": "Souhlasím se zpracováním osobních údajů pro vyřízení poptávky.",
    "contact.form.submit": "Odeslat nezávaznou poptávku",

    // Telemetry HUD
    "telem.hudBtn": "⚡ Telemetrie live",
    "telem.drawerTitle": "Live Telemetrie & Analytics Inspektor",
    "telem.session": "Relace ID:",
    "telem.eventsCount": "Zaznamenaných událostí:",
    "telem.activeLang": "Aktivní jazyk:",
    "telem.activeTheme": "Aktivní motiv:",
    "telem.exportBtn": "Exportovat data (JSON)",
    "telem.clearBtn": "Vyčistit log",
    "telem.simBtn": "Simulovat událost",
    "telem.empty": "Zatím nebyly zaznamenány žádné události.",

    // Footer
    "footer.desc": "Autorizovaná cestovní kancelář a agentura TRAVELFUN. Váš spolehlivý partner pro letenky, exotické expedice a bezstarostné cestování již přes 15 let.",
    "footer.quickLinks": "Rychlé odkazy",
    "footer.destinations": "Populární destinace",
    "footer.legal": "Právní informace & Ochrana dat",
    "footer.rights": "Všechna práva vyhrazena.",
    "footer.partner": "Partnerská síť",

    // Toast
    "toast.inquirySent": "Vaše poptávka byla úspěšně zaznamenána a odeslána! Brzy se vám ozveme.",
    "toast.copied": "Zkopírováno do schránky."
  },

  hu: {
    // Top Bar
    "topbar.emergency": "24/7 Utazási segélyvonal: +421 948 050 720",
    "topbar.email": "info@travelfun.sk",
    "topbar.status": "Nyitva • Online elérhetőek vagyunk",

    // Navigation
    "nav.home": "Főoldal",
    "nav.tours": "Utazások & Expedíciók",
    "nav.flights": "Repülőjegyek",
    "nav.services": "Szolgáltatások",
    "nav.whyus": "Miért mi?",
    "nav.calculator": "Utazástervező",
    "nav.reviews": "Vélemények",
    "nav.contact": "Kapcsolat",
    "nav.cta": "Ajánlatkérés",

    // Hero Section
    "hero.badge": "✈️ TRAVELFUN Utazási Iroda & Ügynökség",
    "hero.title": "Fedezze fel a világot örömmel és gondtalanul",
    "hero.subtitle": "Komplett utazási megoldások a repülőjegyektől az egzotikus expedíciókon át a személyre szabott céges utakig. Megtervezzük a tökéletes és biztonságos kikapcsolódást.",
    "hero.tab.flights": "Repülőjegyek a világba",
    "hero.tab.tours": "Nyaralások & Üdülések",
    "hero.tab.expeditions": "Körutazások & Expedíciók",
    "hero.tab.corporate": "Céges utazások (MICE)",

    // Search Fields
    "search.from": "Indulási hely (pl. Bécs, Budapest, Pozsony)",
    "search.to": "Úti cél (pl. Sydney, Bangkok, New York)",
    "search.deptDate": "Indulás dátuma",
    "search.retDate": "Visszaút dátuma",
    "search.passengers": "Utasok száma",
    "search.passengers.opt1": "1 Felnőtt",
    "search.passengers.opt2": "2 Felnőtt",
    "search.passengers.opt3": "Család (2+2)",
    "search.passengers.opt4": "Csoport (5+)",
    "search.class": "Osztály",
    "search.class.eco": "Economy Class",
    "search.class.prem": "Premium Economy",
    "search.class.biz": "Business Class",
    "search.btn": "Legjobb ajánlatok keresése",

    // Hero Stats
    "stats.exp": "15+ Év tapasztalat",
    "stats.airlines": "550+ Partner légitársaság",
    "stats.clients": "12 500+ Elégedett utazó",
    "stats.support": "24/7 Személyes asszisztencia",

    // Tours Section
    "tours.sectionTag": "Utazási inspiráció",
    "tours.title": "Válogatott expedíciók és álomutak",
    "tours.subtitle": "A lélegzetelállító Új-Zélandtól és Ausztráliától Patagónia vad tájaiig és az egzotikus tengerpartokig.",
    "tours.filter.all": "Összes ajánlat",
    "tours.filter.expeditions": "Körutazások",
    "tours.filter.exotic": "Egzotikus & Tengerpart",
    "tours.filter.adventure": "Vadászat & Szafari",
    "tours.filter.nature": "Hegyek & Természet",
    "tours.btn.detail": "Program megtekintése & Érdeklődés",
    "tours.badge.featured": "Bestseller",
    "tours.badge.exclusive": "Exkluzív",
    "tours.badge.lastminute": "Last Minute",

    // Specific Tours
    "tour1.title": "Új-Zéland – A nagy körutazás",
    "tour1.desc": "Rotorua gejzírek, a Déli-Alpok gleccserei, a fenséges Milford Sound fjord és Hobbiton kiscsoportos túrákon.",
    "tour1.duration": "18 nap / 15 éj",
    "tour1.price": "3 490 €-tól",

    "tour2.title": "Ausztrália varázslatos látványosságai",
    "tour2.desc": "Sydney az Operaházzal, a szent Uluru szikla, sznorkelezés a Nagy-korallzátonyon és trópusi őserdők Cairnsben.",
    "tour2.duration": "16 nap / 14 éj",
    "tour2.price": "3 850 €-tól",

    "tour3.title": "Srí Lanka – Tea, templomok és óceánpart",
    "tour3.desc": "Sigiriya sziklaerődítmény, elefánt-szafari Minneriyában, festői Ella teaültetvények és pihenés az óceánnál.",
    "tour3.duration": "12 nap / 10 éj",
    "tour3.price": "1 690 €-tól",

    "tour4.title": "Chile & Patagónia – A világ végén",
    "tour4.desc": "Torres del Paine Nemzeti Park, Grey-gleccser, az Atacama-sivatag és a nyüzsgő Santiago de Chile.",
    "tour4.duration": "14 nap / 12 éj",
    "tour4.price": "3 250 €-tól",

    "tour5.title": "Kuba – Havanna nosztalgikus varázsa",
    "tour5.desc": "Amerikai veterán autók, Viñales dohányvölgy, gyarmati Trinidad és Varadero hófehér all-inclusive tengerpartjai.",
    "tour5.duration": "11 nap / 9 éj",
    "tour5.price": "1 890 €-tól",

    "tour6.title": "Afrikai vadászat és vadon-szafari",
    "tour6.desc": "Professzionális vadászat és fotószafari Namíbia és a Dél-afrikai Köztársaság prémium vadvédelmi területein.",
    "tour6.duration": "9 nap / 7 éj",
    "tour6.price": "2 450 €-tól",

    // Flights Features
    "flights.title": "Gondtalan repülőjegyek világszerte",
    "flights.subtitle": "Több mint 550 globális légitársaság összehasonlítása. Garantált csatlakozások és non-stop segítségnyújtás járatkésések esetén.",
    "flights.f1.title": "GDS & Fapados integráció",
    "flights.f1.desc": "Közvetlen Amadeus/Sabre és low-cost kapcsolat a verhetetlen jegyárakért.",
    "flights.f2.title": "Mérföldek és hűségprogramok kezelése",
    "flights.f2.desc": "Miles&More, Flying Blue, Skywards és vállalati hűségprogramok teljes körű nyilvántartása.",
    "flights.f3.title": "Online Check-in & Ülésfoglalás",
    "flights.f3.desc": "Stresszmentes utasfelvétel, extra lábtérrel rendelkező ülések és speciális ételek foglalása.",
    "flights.f4.title": "24/7 Kríziskezelés & Átfoglalás",
    "flights.f4.desc": "Törölt járat vagy sztrájk? Szakértő csapatunk azonnal átfoglalja jegyét hosszú telefonos várakozás nélkül.",

    // Services
    "services.sectionTag": "Szolgáltatásaink",
    "services.title": "Minden utazási szolgáltatás egyetlen kézből",
    "services.subtitle": "Nincs lehetetlen. Értékes időt és pénzt takarítunk meg maximális megbízhatóság mellett.",
    "services.s1.title": "Repülőjegyek & Menetjegyek",
    "services.s1.desc": "Komplett repülőjegy kiállítás, rugalmas feltételek, csoportos foglalások és útvonal optimalizálás.",
    "services.s2.title": "Szállások & Prémium hotelek",
    "services.s2.desc": "Gondosan válogatott szállodák, boutique üdülők, privát villák és szafari lodge-ok 3* és 5* Deluxe között.",
    "services.s3.title": "Autó- és lakóautó bérlés",
    "services.s3.desc": "Bérautók világszerte, lakóautók családi körutakhoz és legendás Harley Davidson motorok az USA-ban és Ausztráliában.",
    "services.s4.title": "Vízumügyintézés & ESTA",
    "services.s4.desc": "Turisztikai és üzleti vízumok, USA ESTA, Kanada eTA engedélyek teljes körű ügyintézése.",
    "services.s5.title": "Utasbiztosítás (ECP)",
    "services.s5.desc": "Az Európai Utazási Biztosító (ECP) hivatalos partnere. Orvosi ellátás, útlemondási és poggyászbiztosítás.",
    "services.s6.title": "Céges utazások & MICE",
    "services.s6.desc": "Vállalati utazási szabályzatok, teambuildingek, konferenciák, átlátható elszámolás és 24/7 dedikált menedzser.",

    // Why Choose Us
    "why.sectionTag": "Erősségeink",
    "why.title": "Miért utazzon a TRAVELFUN-nal?",
    "why.subtitle": "Szenvedélyes világutazók és hivatalosan minősített szakemberek vagyunk. Tapasztalja meg a valódi személyes odafigyelést.",
    "why.w1.title": "24/7 / 365 Személyes elérhetőség",
    "why.w1.desc": "Mindig elérhetőek vagyunk. Probléma vagy késés esetén közvetlenül velünk beszél, soha nem robotokkal.",
    "why.w2.title": "Komplex megoldás stressz nélkül",
    "why.w2.desc": "Repülőjegy, hotel, transzfer, vízum és biztosítás kényelmesen elintézve otthonából egyetlen kapcsolattartóval.",
    "why.w3.title": "Rugalmas és egyedi programok",
    "why.w3.desc": "Nem kényszerítjük unalmas sablonokba. Minden útitervet az Ön tempójához és kívánságaihoz igazítunk.",
    "why.w4.title": "Évtizedes helyszíni tapasztalat",
    "why.w4.desc": "Személyesen ismerjük a helyi szokásokat, a legjobb látványosságokat és rejtett kincseket. Csak kipróbáltat ajánlunk.",
    "why.w5.title": "Optimális ár-érték arány",
    "why.w5.desc": "Közvetlen partneri és GDS hozzáféréseink révén kedvezőbb árakat és exkluzív előnyöket biztosítunk.",
    "why.w6.title": "Elismert nemzetközi partnerek",
    "why.w6.desc": "Szoros partnerség: Adventure Outdoors Tongariro (Új-Zéland), Vulpes Safari, G8M8 Australia és Európai Biztosító.",

    // Trip Calculator
    "calc.sectionTag": "Interaktív tervező",
    "calc.title": "Álmai utazásának költségkalkulátora",
    "calc.subtitle": "Válassza ki az utazás paramétereit a gyors költségbecsléshez és küldjön azonnali ajánlatkérést.",
    "calc.destLabel": "Célállomás",
    "calc.daysLabel": "Időtartam (nap):",
    "calc.personsLabel": "Utasok száma:",
    "calc.tierLabel": "Szállás kategóriája",
    "calc.tier.comfort": "Komfort (3-4* szállodák, bevált programok)",
    "calc.tier.premium": "Prémium (4-5* üdülők, privát transzferek)",
    "calc.tier.luxury": "Luxury Deluxe (5* luxusszállodák, saját idegenvezető)",
    "calc.flightInc": "Repülőjegyek Bécsből/Budapestről (+ kb. 450 - 1 100 €/fő)",
    "calc.insureInc": "Prémium ECP utasbiztosítás (+ kb. 45 €/fő)",
    "calc.resultTitle": "Becsült teljes költségvetés:",
    "calc.perPerson": "főre vetítve",
    "calc.cta": "Részletes ajánlatkérés ezzel a konfigurációval",

    // Testimonials
    "reviews.sectionTag": "Ügyfeleink véleménye",
    "reviews.title": "Mit mondanak rólunk az utazók?",
    "reviews.r1.text": "Az új-zélandi körutazás életünk legnagyobb élménye volt. Minden transzfer, szállás és járat percre pontosan működött. Rendkívüli gondoskodás a Travelfuntól!",
    "reviews.r1.author": "Kováčik Péter, építőmérnök",
    "reviews.r1.trip": "Új-Zéland nagy körutazás",
    "reviews.r2.text": "Amikor a dubaji viharok miatt törölték a csatlakozásunkat, Lucia a Travelfuntól 20 percen belül átfoglalt minket. Velük utazni valódi biztonságot jelent.",
    "reviews.r2.author": "Martina & Juraj B.",
    "reviews.r2.trip": "Srí Lanka & Maldív-szigetek",
    "reviews.r3.text": "Cégünk nemzetközi kiküldetéseit és konferenciáit több mint 4 éve a Travelfun szervezi. Villámgyors ügyintézés és hibátlan elszámolás.",
    "reviews.r3.author": "Molnár Róbert, IT ügyvezető",
    "reviews.r3.trip": "Céges utazások & Repülőjegyek",

    // Contact
    "contact.sectionTag": "Kapcsolatfelvétel",
    "contact.title": "Kezdje el tervezni következő kalandját",
    "contact.subtitle": "Látogasson el liptói irodánkba vagy írjon nekünk online. Gyorsan és készségesen válaszolunk.",
    "contact.addressTitle": "Székhely",
    "contact.address": "TRAVELFUN, s.r.o., Bodice 189, 031 01 Liptószentmiklós (Liptovský Mikuláš), Szlovák Köztársaság",
    "contact.phonesTitle": "Telefonszámok",
    "contact.hoursTitle": "Nyitvatartás",
    "contact.hours": "Hétfő - Péntek: 08:30 - 17:30 • 24/7 Segélyvonal",
    "contact.form.name": "Teljes név",
    "contact.form.email": "E-mail cím",
    "contact.form.phone": "Telefonszám",
    "contact.form.interest": "Szolgáltatás típusa",
    "contact.form.optTours": "Körutazás / Expedíció",
    "contact.form.optFlights": "Csak repülőjegy",
    "contact.form.optExotic": "Tengerparti üdülés / Egzotikus út",
    "contact.form.optCorporate": "Céges utazás & MICE",
    "contact.form.optCustom": "Egyedi, személyre szabott út",
    "contact.form.message": "Utazási elképzelések (időpont, létszám, keretösszeg...)",
    "contact.form.consent": "Hozzájárulok személyes adataim kezeléséhez az ajánlatkérés feldolgozásához.",
    "contact.form.submit": "Kötelezettségmentes ajánlatkérés küldése",

    // Telemetry HUD
    "telem.hudBtn": "⚡ Élő telemetria",
    "telem.drawerTitle": "Élő Telemetria & Analitika Ellenőrző",
    "telem.session": "Munkamenet ID:",
    "telem.eventsCount": "Rögzített események:",
    "telem.activeLang": "Aktív nyelv:",
    "telem.activeTheme": "Aktív téma:",
    "telem.exportBtn": "Adatok exportálása (JSON)",
    "telem.clearBtn": "Napló törlése",
    "telem.simBtn": "Teszt esemény szimulálása",
    "telem.empty": "Még nincsenek rögzített telemetriai események.",

    // Footer
    "footer.desc": "Hivatalos utazási iroda és utazásszervező TRAVELFUN. Az Ön megbízható partnere repülőjegyekben, egzotikus körutakban és felejthetetlen élményekben már több mint 15 éve.",
    "footer.quickLinks": "Gyors linkek",
    "footer.destinations": "Népszerű úti célok",
    "footer.legal": "Jogi információk & Adatvédelem",
    "footer.rights": "Minden jog fenntartva.",
    "footer.partner": "Partnerhálózat",

    // Toast
    "toast.inquirySent": "Érdeklődését sikeresen rögzítettük és továbbítottuk! Hamarosan felvesszük Önnel a kapcsolatot.",
    "toast.copied": "Vágólapra másolva."
  }
};

// ==========================================
// 2. TELEMETRY ENGINE
// ==========================================
class TravelFunTelemetry {
  constructor() {
    this.storageKey = 'travelfun_telemetry_events';
    this.sessionKey = 'travelfun_telemetry_session';
    this.session = this.initSession();
    this.events = this.loadEvents();
    this.listeners = [];
    this.initScrollTracking();
    this.initHeartbeat();
  }

  initSession() {
    let session = sessionStorage.getItem(this.sessionKey);
    if (!session) {
      session = {
        id: 'tf_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36),
        startedAt: new Date().toISOString(),
        referrer: document.referrer || 'direct',
        screen: `${window.screen.width}x${window.screen.height}`,
        devicePixelRatio: window.devicePixelRatio || 1,
        userAgent: navigator.userAgent
      };
      sessionStorage.setItem(this.sessionKey, JSON.stringify(session));
    } else {
      session = JSON.parse(session);
    }
    return session;
  }

  loadEvents() {
    try {
      const data = sessionStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveEvents() {
    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify(this.events.slice(-200)));
    } catch (e) {
      console.warn('Telemetry storage quota warning', e);
    }
  }

  track(eventName, category, payload = {}) {
    const event = {
      id: 'evt_' + Math.random().toString(36).substring(2, 8),
      timestamp: new Date().toISOString(),
      sessionId: this.session.id,
      name: eventName,
      category: category, // 'navigation', 'interaction', 'conversion', 'system', 'search'
      lang: document.documentElement.lang || 'sk',
      theme: document.documentElement.getAttribute('data-theme') || 'light',
      url: window.location.pathname + window.location.hash,
      data: payload
    };

    this.events.push(event);
    this.saveEvents();
    this.notify(event);

    // Optional console telemetry log in dev
    if (window.location.hostname === 'localhost' || window.location.protocol === 'file:') {
      console.info(`[TELEMETRY] [${event.category.toUpperCase()}] ${event.name}:`, event.data);
    }

    // Modern Beacon API Dispatch Simulation (ready for backend endpoint)
    if (navigator.sendBeacon && window.__TELEMETRY_ENDPOINT__) {
      try {
        navigator.sendBeacon(window.__TELEMETRY_ENDPOINT__, JSON.stringify(event));
      } catch (err) {
        // Beacon fallback
      }
    }

    return event;
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify(event) {
    this.listeners.forEach(fn => {
      try { fn(event, this.events); } catch (e) { console.error(e); }
    });
  }

  getEvents() {
    return this.events;
  }

  clear() {
    this.events = [];
    sessionStorage.removeItem(this.storageKey);
    this.track('telemetry_cleared', 'system', { clearedAt: new Date().toISOString() });
  }

  initScrollTracking() {
    const milestones = [25, 50, 75, 100];
    const hit = new Set();
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const b = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';
      const percent = Math.round(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);

      milestones.forEach(m => {
        if (percent >= m && !hit.has(m)) {
          hit.add(m);
          this.track('scroll_milestone', 'interaction', { depthPercent: m });
        }
      });
    }, { passive: true });
  }

  initHeartbeat() {
    let seconds = 0;
    setInterval(() => {
      seconds += 30;
      if (seconds <= 300) { // log at 30s, 60s, etc up to 5 min
        this.track('time_on_page', 'system', { durationSeconds: seconds });
      }
    }, 30000);
  }
}

// Global Telemetry Instance
window.telemetry = new TravelFunTelemetry();

// ==========================================
// 3. THEME & LANGUAGE MANAGEMENT
// ==========================================
class AppState {
  constructor() {
    this.currentLang = localStorage.getItem('travelfun_lang') || 'sk';
    this.currentTheme = localStorage.getItem('travelfun_theme') || this.getSystemTheme();
    this.init();
  }

  getSystemTheme() {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  init() {
    this.applyTheme(this.currentTheme, false);
    this.applyLanguage(this.currentLang, false);
    this.bindEvents();
  }

  applyTheme(theme, logEvent = true) {
    const prevTheme = this.currentTheme;
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('travelfun_theme', theme);

    // Update icons on toggle buttons
    const toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach(btn => {
      const icon = btn.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
      btn.setAttribute('aria-label', theme === 'dark' ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim');
    });

    if (logEvent) {
      window.telemetry.track('theme_toggle', 'interaction', {
        from: prevTheme,
        to: theme
      });
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme, true);
  }

  applyLanguage(lang, logEvent = true) {
    if (!i18n[lang]) lang = 'sk';
    const prevLang = this.currentLang;
    this.currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('travelfun_lang', lang);

    // Update text content with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Update placeholders with data-i18n-placeholder
    const inputs = document.querySelectorAll('[data-i18n-placeholder]');
    inputs.forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key]) {
        input.setAttribute('placeholder', i18n[lang][key]);
      }
    });

    // Sync select dropdowns and buttons
    const selects = document.querySelectorAll('.language-select');
    selects.forEach(select => {
      select.value = lang;
    });

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (logEvent) {
      window.telemetry.track('language_change', 'interaction', {
        from: prevLang,
        to: lang
      });
    }

    // Trigger recalculation in planner for localized currency/labels
    if (window.updateTripCalculation) {
      window.updateTripCalculation();
    }
  }

  bindEvents() {
    // Theme toggle click
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => this.toggleTheme());
    });

    // Language selector change
    document.querySelectorAll('.language-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        this.applyLanguage(e.target.value, true);
      });
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = btn.getAttribute('data-lang');
        if (lang) this.applyLanguage(lang, true);
      });
    });
  }
}

// ==========================================
// 4. INTERACTIVE SEARCH & TABS
// ==========================================
function initSearchWidget() {
  const tabBtns = document.querySelectorAll('.hero-tab-btn');
  const forms = document.querySelectorAll('.hero-search-form');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      forms.forEach(form => {
        if (form.getAttribute('data-form-tab') === tabId) {
          form.classList.remove('hidden');
        } else {
          form.classList.add('hidden');
        }
      });

      window.telemetry.track('search_tab_switch', 'interaction', { selectedTab: tabId });
    });
  });

  // Handle Search Submission
  const flightForm = document.getElementById('flightSearchForm');
  if (flightForm) {
    flightForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origin = document.getElementById('searchOrigin')?.value || '';
      const dest = document.getElementById('searchDest')?.value || '';
      const deptDate = document.getElementById('searchDeptDate')?.value || '';
      const retDate = document.getElementById('searchRetDate')?.value || '';
      const passengers = document.getElementById('searchPassengers')?.value || '1';
      const cabin = document.getElementById('searchClass')?.value || 'economy';

      window.telemetry.track('flight_search_submitted', 'search', {
        origin,
        dest,
        deptDate,
        retDate,
        passengers,
        cabin
      });

      showToast(`Hľadáme najlepšie lety: ${origin || 'Viedeň'} ➔ ${dest || 'Svet'} (${passengers} os.)`);
      openInquiryModal(`Dopyt na letenku: ${origin} ➔ ${dest}`, `Hľadám najvýhodnejšie letenky na trase ${origin} - ${dest}, termín: ${deptDate} až ${retDate}, počet osôb: ${passengers}, trieda: ${cabin}.`);
    });
  }

  // Handle Tours / General Search
  const tourForm = document.getElementById('tourSearchForm');
  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const destination = document.getElementById('tourDestSelect')?.value || 'all';
      const travelType = document.getElementById('tourTypeSelect')?.value || 'any';
      const duration = document.getElementById('tourDurationSelect')?.value || 'any';

      window.telemetry.track('tour_search_submitted', 'search', {
        destination,
        travelType,
        duration
      });

      showToast(`Vyhľadávame zájazdy pre: ${destination}`);
      const toursSection = document.getElementById('tours');
      if (toursSection) {
        toursSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// ==========================================
// 5. TOURS FILTERING & DETAIL MODAL
// ==========================================
function initToursFilter() {
  const filterBtns = document.querySelectorAll('.tours-filter-btn');
  const tourCards = document.querySelectorAll('.tour-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tourCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter || (filter === 'expeditions' && (cat === 'expeditions' || cat === 'nature'))) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      window.telemetry.track('tours_filter_changed', 'interaction', { filter });
    });
  });

  // Tour Inquiry buttons
  document.querySelectorAll('.tour-inquire-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tourTitle = btn.getAttribute('data-tour-title') || 'Výberový zájazd';
      const price = btn.getAttribute('data-tour-price') || '';
      window.telemetry.track('tour_inquiry_clicked', 'conversion', { tourTitle, price });
      openInquiryModal(`Dopyt: ${tourTitle}`, `Mám záujem o podrobnejšie informácie a kalkuláciu pre zájazd: "${tourTitle}" (${price}).`);
    });
  });
}

// ==========================================
// 6. INTERACTIVE TRIP COST ESTIMATOR
// ==========================================
function initTripCalculator() {
  const destSelect = document.getElementById('calcDest');
  const daysSlider = document.getElementById('calcDays');
  const daysVal = document.getElementById('calcDaysVal');
  const personsInput = document.getElementById('calcPersons');
  const tierSelect = document.getElementById('calcTier');
  const flightCheck = document.getElementById('calcIncludeFlight');
  const insureCheck = document.getElementById('calcIncludeInsurance');

  const totalEstimateEl = document.getElementById('calcTotalEstimate');
  const perPersonEstimateEl = document.getElementById('calcPerPersonEstimate');

  const baseRates = {
    nz: { dayRate: 155, flightRate: 1250 },
    australia: { dayRate: 170, flightRate: 1350 },
    srilanka: { dayRate: 95, flightRate: 750 },
    patagonia: { dayRate: 165, flightRate: 1100 },
    cuba: { dayRate: 115, flightRate: 850 },
    safari: { dayRate: 210, flightRate: 950 },
    usa_east: { dayRate: 180, flightRate: 650 },
    europe_med: { dayRate: 90, flightRate: 220 }
  };

  const tierMultipliers = {
    comfort: 1.0,
    premium: 1.45,
    luxury: 2.2
  };

  function update() {
    if (!destSelect || !daysSlider || !personsInput || !tierSelect) return;

    const destKey = destSelect.value || 'nz';
    const days = parseInt(daysSlider.value, 10) || 14;
    const persons = Math.max(1, parseInt(personsInput.value, 10) || 2);
    const tier = tierSelect.value || 'comfort';
    const includeFlight = flightCheck ? flightCheck.checked : true;
    const includeInsure = insureCheck ? insureCheck.checked : true;

    if (daysVal) daysVal.textContent = days;

    const rateConfig = baseRates[destKey] || baseRates.nz;
    const multiplier = tierMultipliers[tier] || 1.0;

    const accommodationAndActivitiesPerDay = rateConfig.dayRate * multiplier;
    let costPerPerson = accommodationAndActivitiesPerDay * days;

    if (includeFlight) {
      costPerPerson += rateConfig.flightRate;
    }
    if (includeInsure) {
      costPerPerson += 45;
    }

    const totalCost = costPerPerson * persons;

    // Currency formatting depending on active language
    const currentLang = document.documentElement.lang || 'sk';
    let formattedTotal = '';
    let formattedPerPerson = '';

    if (currentLang === 'cs') {
      const czkRate = 25.2;
      formattedTotal = Math.round(totalCost * czkRate).toLocaleString('cs-CZ') + ' Kč';
      formattedPerPerson = Math.round(costPerPerson * czkRate).toLocaleString('cs-CZ') + ' Kč';
    } else {
      formattedTotal = Math.round(totalCost).toLocaleString('sk-SK') + ' €';
      formattedPerPerson = Math.round(costPerPerson).toLocaleString('sk-SK') + ' €';
    }

    if (totalEstimateEl) totalEstimateEl.textContent = formattedTotal;
    if (perPersonEstimateEl) perPersonEstimateEl.textContent = formattedPerPerson;
  }

  window.updateTripCalculation = update;

  [destSelect, daysSlider, personsInput, tierSelect, flightCheck, insureCheck].forEach(el => {
    if (el) {
      el.addEventListener('input', () => {
        update();
      });
      el.addEventListener('change', () => {
        update();
        window.telemetry.track('calculator_interacted', 'interaction', {
          destination: destSelect?.value,
          days: daysSlider?.value,
          persons: personsInput?.value,
          tier: tierSelect?.value
        });
      });
    }
  });

  const calcCtaBtn = document.getElementById('calcCtaBtn');
  if (calcCtaBtn) {
    calcCtaBtn.addEventListener('click', () => {
      const destText = destSelect.options[destSelect.selectedIndex]?.text || '';
      const days = daysSlider.value;
      const persons = personsInput.value;
      const total = totalEstimateEl.textContent;

      window.telemetry.track('calculator_cta_clicked', 'conversion', {
        destination: destText,
        days,
        persons,
        total
      });

      openInquiryModal(
        `Kalkulácia cesty: ${destText}`,
        `Žiadam o detailnú ponuku na základe kalkulátora:\n- Destinácia: ${destText}\n- Počet dní: ${days}\n- Počet osôb: ${persons}\n- Odhadovaný rozpočet: ${total}`
      );
    });
  }

  update();
}

// ==========================================
// 7. INQUIRY MODAL & TOAST
// ==========================================
function openInquiryModal(title = 'Nezáväzný dopyt', defaultMsg = '') {
  const modal = document.getElementById('inquiryModal');
  const titleEl = document.getElementById('modalTitle');
  const msgInput = document.getElementById('modalMessage');

  if (titleEl) titleEl.textContent = title;
  if (msgInput && defaultMsg) msgInput.value = defaultMsg;

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.telemetry.track('inquiry_modal_opened', 'interaction', { title });
}

function closeInquiryModal() {
  const modal = document.getElementById('inquiryModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function initModalsAndForms() {
  // Modal triggers
  document.querySelectorAll('.open-inquiry-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openInquiryModal('Nezáväzný dopyt pre TRAVELFUN');
    });
  });

  const closeBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('inquiryModal');
  if (closeBtn) closeBtn.addEventListener('click', closeInquiryModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeInquiryModal();
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeInquiryModal();
  });

  // Main Contact Form
  const contactForm = document.getElementById('mainContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value;
      const email = document.getElementById('contactEmail')?.value;
      const phone = document.getElementById('contactPhone')?.value;
      const interest = document.getElementById('contactInterest')?.value;
      const message = document.getElementById('contactMessage')?.value;

      window.telemetry.track('contact_form_submitted', 'conversion', {
        nameLength: name ? name.length : 0,
        emailDomain: email ? email.split('@')[1] : '',
        phoneProvided: !!phone,
        interest,
        messageLength: message ? message.length : 0
      });

      const currentLang = document.documentElement.lang || 'sk';
      showToast(i18n[currentLang]?.["toast.inquirySent"] || "Ďakujeme! Váš dopyt bol úspešne odoslaný.");
      contactForm.reset();
    });
  }

  // Modal Inquiry Form
  const modalForm = document.getElementById('modalInquiryForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName')?.value;
      const email = document.getElementById('modalEmail')?.value;
      const phone = document.getElementById('modalPhone')?.value;
      const message = document.getElementById('modalMessage')?.value;

      window.telemetry.track('modal_inquiry_submitted', 'conversion', {
        nameLength: name ? name.length : 0,
        emailDomain: email ? email.split('@')[1] : '',
        phoneProvided: !!phone,
        messageLength: message ? message.length : 0
      });

      const currentLang = document.documentElement.lang || 'sk';
      showToast(i18n[currentLang]?.["toast.inquirySent"] || "Ďakujeme! Váš dopyt bol zaznamenaný.");
      closeInquiryModal();
      modalForm.reset();
    });
  }

  // Outbound link tracking
  document.querySelectorAll('a[href^="http"], a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
      const isContact = href.startsWith('tel:') || href.startsWith('mailto:');

      if (isExternal || isContact) {
        window.telemetry.track('outbound_or_contact_click', 'conversion', {
          href,
          type: href.startsWith('tel:') ? 'phone' : href.startsWith('mailto:') ? 'email' : 'external_partner'
        });
      }
    });
  });
}

// ==========================================
// 8. LIVE TELEMETRY HUD / INSPECTOR
// ==========================================
function initTelemetryHUD() {
  const hudBtn = document.getElementById('telemetryHudBtn');
  const drawer = document.getElementById('telemetryDrawer');
  const closeBtn = document.getElementById('telemDrawerClose');
  const countBadge = document.getElementById('telemEventCountBadge');
  const listEl = document.getElementById('telemEventList');
  const sessionIdEl = document.getElementById('telemSessionId');
  const activeLangEl = document.getElementById('telemActiveLang');
  const activeThemeEl = document.getElementById('telemActiveTheme');
  const totalCountEl = document.getElementById('telemTotalCount');

  const exportBtn = document.getElementById('telemExportBtn');
  const clearBtn = document.getElementById('telemClearBtn');
  const simBtn = document.getElementById('telemSimBtn');

  function renderEvents() {
    const events = window.telemetry.getEvents();
    if (countBadge) countBadge.textContent = events.length;
    if (totalCountEl) totalCountEl.textContent = events.length;
    if (sessionIdEl) sessionIdEl.textContent = window.telemetry.session.id;
    if (activeLangEl) activeLangEl.textContent = document.documentElement.lang.toUpperCase();
    if (activeThemeEl) activeThemeEl.textContent = document.documentElement.getAttribute('data-theme') || 'light';

    if (!listEl) return;
    if (events.length === 0) {
      listEl.innerHTML = '<div class="telem-empty">Zatiaľ žiadne zaznamenané udalosti.</div>';
      return;
    }

    listEl.innerHTML = events.slice(-30).reverse().map(ev => {
      const time = new Date(ev.timestamp).toLocaleTimeString();
      const badgeClass = ev.category === 'conversion' ? 'badge-conv' :
                         ev.category === 'search' ? 'badge-search' :
                         ev.category === 'interaction' ? 'badge-interact' : 'badge-system';
      return `
        <div class="telem-item">
          <div class="telem-item-head">
            <span class="telem-badge ${badgeClass}">${ev.category}</span>
            <span class="telem-name">${ev.name}</span>
            <span class="telem-time">${time}</span>
          </div>
          <pre class="telem-payload">${JSON.stringify(ev.data, null, 2)}</pre>
        </div>
      `;
    }).join('');
  }

  // Subscribe to telemetry updates
  window.telemetry.subscribe(() => {
    renderEvents();
  });

  if (hudBtn && drawer) {
    hudBtn.addEventListener('click', () => {
      drawer.classList.toggle('active');
      renderEvents();
      window.telemetry.track('telemetry_hud_toggled', 'system', {
        state: drawer.classList.contains('active') ? 'opened' : 'closed'
      });
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      window.telemetry.clear();
      renderEvents();
      showToast('Telemetrický log bol vyčistený.');
    });
  }

  if (simBtn) {
    simBtn.addEventListener('click', () => {
      window.telemetry.track('test_event_simulated', 'system', {
        randomMetric: Math.floor(Math.random() * 1000),
        userAgent: navigator.userAgent.substring(0, 40)
      });
      showToast('Simulovaná udalosť bola zaznamenaná!');
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const events = window.telemetry.getEvents();
      const session = window.telemetry.session;
      const exportObject = {
        exportedAt: new Date().toISOString(),
        session,
        totalEvents: events.length,
        events
      };

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `travelfun_telemetry_${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();

      window.telemetry.track('telemetry_exported', 'system', { count: events.length });
    });
  }

  renderEvents();
}

// ==========================================
// 9. MOBILE MENU & HEADER SCROLL
// ==========================================
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
      window.telemetry.track('mobile_nav_toggled', 'interaction', {
        isOpen: navMenu.classList.contains('active')
      });
    });

    // Close mobile menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

// ==========================================
// 10. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  window.appState = new AppState();
  initNavigation();
  initSearchWidget();
  initToursFilter();
  initTripCalculator();
  initModalsAndForms();
  initTelemetryHUD();

  // Log initial page view event
  window.telemetry.track('page_view', 'system', {
    title: document.title,
    referrer: document.referrer || 'direct',
    screenResolution: `${window.innerWidth}x${window.innerHeight}`
  });
});
