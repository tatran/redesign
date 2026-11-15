/**
 * HEIDI THOMPSON CONTEMPORARY ART GALLERY
 * Interactive Application & Bilingual Localization Engine (EN / FR)
 * Dual-Theme Controller (Light Gallery / Dark Museum)
 */

// =============================================================================
// 1. BILINGUAL TRANSLATION DICTIONARY (EN & FR)
// =============================================================================
const translations = {
  en: {
    // Navigation
    brandTitle: "HEIDI THOMPSON",
    brandSubtitle: "Contemporary Canadian Fine Art",
    navGallery: "Gallery",
    navSeries: "Series",
    navVisualizer: "Room View",
    navEstimator: "Acquisition",
    navAbout: "Artist",
    navReviews: "Critical Essay",
    navFilm: "Caetani Film",
    navContact: "Studio & Contact",
    themeLight: "White",
    themeDark: "Dark",

    // Hero
    heroEyebrow: "Luminous Abstraction & Physics of Nature",
    heroTitlePrefix: "Color Energy Fields",
    heroTitleSuffix: "& Sacred Meditations",
    heroQuote: "\"In painting as in eloquence, the greater your strength, the quieter your manner.\"",
    heroQuoteAuthor: "John Ruskin",
    heroLead: "Immerse yourself in radiant, optical canvases crafted with decades of meditative discipline and European master techniques. Each piece vibrates with light, space, and quiet transcendence.",
    heroCtaGallery: "Explore Available Canvases",
    heroCtaCommission: "Commission Inquiries",
    heroFeaturedBadge: "Featured Masterwork",
    heroArtworkTitle: "Peaceful Movement in White",
    heroArtworkSpecs: "48\" × 64\" • Acrylic on Canvas (2022)",
    heroArtworkInquire: "View Details →",

    // Provenance Bar
    provYears: "40+",
    provYearsLabel: "Years of Practice",
    provCollections: "Senvest & Corporate",
    provCollectionsLabel: "Notable Public Collections",
    provExhibitions: "Zurich • NYC • Montreal",
    provExhibitionsLabel: "International Exhibitions",
    provTechnique: "Vipassana",
    provTechniqueLabel: "Meditative Optical Fields",

    // Gallery Filter
    galleryEyebrow: "Curated Portfolio",
    galleryTitle: "Original Canvases & Installations",
    galleryDesc: "Original acrylic masterworks spanning Heidi Thompson's iconic series. Meticulously built with hundreds of layers of pigment, sand texture, and fluid light resonance.",
    filterAll: "All Works",
    filterColorEnergy: "Color Energy Fields",
    filterVeil: "Veil Paintings",
    filterPatina: "Colorful Patina",
    filterInstallations: "Architectural Installations",

    // Visualizer
    visEyebrow: "Spatial Dimension",
    visTitle: "The Canvas in Architectural Interiors",
    visDesc: "Heidi Thompson's large-format canvases are collected worldwide by architects, interior designers, and fine art patrons to infuse light and calm into contemporary spaces.",
    visRoomLoft: "Minimalist Collector's Loft",
    visRoomLoftSub: "Featuring 'Peaceful Movement in White' (48\" × 64\")",
    visRoomPenthouse: "High-Ceiling Penthouse",
    visRoomPenthouseSub: "Featuring 'Earth Energy' (66\" × 90\")",
    visRoomGallery: "Vernon Public Art Gallery Suite",
    visRoomGallerySub: "Solo Museum Exhibition Curated View",
    visRoomDining: "Architectural Residence",
    visRoomDiningSub: "Custom Commission in Private Residence",

    // Estimator
    calcEyebrow: "Acquisitions & Private Commissions",
    calcTitle: "Art Advisory & Commission Estimator",
    calcDesc: "Receive an instant transparent estimate for original canvases, bespoke commissioned dimensions, and museum-grade worldwide crating.",
    calcSizeLabel: "Canvas Dimensions",
    calcSeriesLabel: "Series / Painterly Language",
    calcFrameLabel: "Museum Float Framing",
    calcDeliveryLabel: "White-Glove Delivery Destination",
    calcEstimatedInvestment: "Estimated Collector Investment",
    calcIncludes: "Includes Signed Certificate of Authenticity (COA), archival varnish, and dedicated provenance documentation.",
    calcInquireBtn: "Inquire About This Specification",

    // About
    aboutEyebrow: "Heritage & Practice",
    aboutTitle: "European Pedigree & Meditative Depth",
    aboutBio1: "Heidi Thompson was born in Vernon, BC. At 17, she moved to Europe where she earned a Swiss Diploma in Professional Photography from the University of Art and Design in Zürich (Kunstgewerbeschule). She then apprenticed with legendary German painter Oskar Koller, studied at the Akademie der Bildenden Künste Nürnberg under Ernst Weil, and continued at the Hungarian State University for Fine Art in Budapest under Kokas Ignác.",
    aboutBio2: "Returning to Canada in 1982, Thompson completed her first 10-day Vipassana meditation course in 1983—a continuous daily discipline that became the foundational pulse of her art. Rather than depicting external scenery, her canvases operate as optical energy fields, dissolving boundaries between viewer, matter, and consciousness.",
    timeline1: "1975–1981: European Fine Art Academies (Zürich, Nuremberg, Budapest)",
    timeline2: "1983–Present: Daily Vipassana Meditation practice shaping light fields",
    timeline3: "1995: Author of award-winning 'Recapitulation: Life and Art of Sveva Caetani'",
    timeline4: "Selected Collections: Senvest Collection (Montreal), Vernon Art Gallery, Zurich, NY",

    // Reviews
    reviewsEyebrow: "Critical Acclaim",
    reviewsTitle: "There Is No Answer — The Physics of Nature",
    reviewsQuote: "\"Attuned to the artist’s role as a medium, Heidi Thompson works with the physics of nature. Neither dominating nor controlling the outcome of a composition, she deliberately flicks material with a fine fan brush, orchestrating colour, light, and surface vibration. Her work stands alongside Mark Tobey, Jackson Pollock, Mark Rothko, and Natvar Bhavsar in its soulful radiance.\"",
    reviewsAuthor: "John K. Grande",
    reviewsAuthorTitle: "Distinguished Art Critic, Author of 'Balance: Art and Nature'",

    // Film
    filmEyebrow: "Documentary & Monograph",
    filmTitle: "Sveva Caetani: Recapitulation — A Journey",
    filmDesc: "Heidi Thompson spent over a decade documenting the extraordinary life and profound metaphysical artwork of Italian-Canadian artist Sveva Caetani. Her published monograph won the VanCity Book of Excellence Award and was adapted into a celebrated documentary film.",
    filmAward: "VanCity Book of Excellence Winner",
    filmTrailerBtn: "Watch Film Trailer →",
    filmPasswordNote: "For full documentary access, please email the studio.",

    // Contact
    contactEyebrow: "Direct Contact",
    contactTitle: "Studio Gallery Visits & Acquisitions",
    contactDesc: "Heidi Thompson welcomes private collectors, interior architects, and curators to her Coldstream studio gallery by private appointment.",
    contactAddressTitle: "Studio Gallery Location",
    contactAddress: "9905 Coldstream Creek Road, Coldstream, BC, Canada",
    contactPhoneTitle: "Direct Telephone",
    contactPhone: "(250) 542-1551",
    contactEmailTitle: "Studio Email",
    contactEmail: "htcthompson@hotmail.com",
    formName: "Full Name",
    formEmail: "Email Address",
    formInterest: "Area of Interest",
    formInterestOpt1: "Acquire an Available Original Canvas",
    formInterestOpt2: "Commission a Bespoke Painting",
    formInterestOpt3: "Schedule a Private Studio Visit",
    formInterestOpt4: "Curatorial / Exhibition Inquiry",
    formMessage: "Message or Dimensions Requested",
    formSubmit: "Send Studio Inquiry",

    // Modal Lightbox
    modalInquireBtn: "Inquire to Acquire This Canvas",
    modalStatusAvailable: "Available in Studio Archive",

    // Footer
    footerRights: "© 2026 Heidi Thompson. All Rights Reserved.",
    footerRepresented: "Represented & Featured across Canadian & International Galleries."
  },

  fr: {
    // Navigation
    brandTitle: "HEIDI THOMPSON",
    brandSubtitle: "Art Contemporain Canadien de Prestige",
    navGallery: "Galerie",
    navSeries: "Séries",
    navVisualizer: "Mise en Espace",
    navEstimator: "Acquisition",
    navAbout: "L'Artiste",
    navReviews: "Essai Critique",
    navFilm: "Film Caetani",
    navContact: "Atelier & Contact",
    themeLight: "Blanc",
    themeDark: "Sombre",

    // Hero
    heroEyebrow: "Abstraction Lumineuse & Physique de la Nature",
    heroTitlePrefix: "Champs d'Énergie Colorée",
    heroTitleSuffix: "& Méditations Sacrées",
    heroQuote: "« En peinture comme en éloquence, plus grande est votre force, plus paisible est votre manière. »",
    heroQuoteAuthor: "John Ruskin",
    heroLead: "Plongez dans des toiles optiques et radiantes façonnées par des décennies de discipline méditative et de techniques de maîtres européens. Chaque œuvre vibre de lumière, d'espace et de transcendance sereine.",
    heroCtaGallery: "Explorer les Toiles Disponibles",
    heroCtaCommission: "Commandes & Sur-Mesure",
    heroFeaturedBadge: "Chef-d'Œuvre à la Une",
    heroArtworkTitle: "Mouvement Paisible en Blanc",
    heroArtworkSpecs: "48\" × 64\" • Acrylique sur Toile (2022)",
    heroArtworkInquire: "Voir les Détails →",

    // Provenance Bar
    provYears: "40+ Ans",
    provYearsLabel: "de Carrière Artistique",
    provCollections: "Collection Senvest",
    provCollectionsLabel: "Collections Publiques Réputées",
    provExhibitions: "Zurich • NYC • Montréal",
    provExhibitionsLabel: "Expositions Internationales",
    provTechnique: "Vipassana",
    provTechniqueLabel: "Champs Optiques Méditatifs",

    // Gallery Filter
    galleryEyebrow: "Portfolio Sélectionné",
    galleryTitle: "Toiles Originales & Installations",
    galleryDesc: "Œuvres maîtresses originales issues des séries emblématiques de Heidi Thompson. Bâties minutieusement de centaines de couches de pigments, de sable texturé et de résonance lumineuse.",
    filterAll: "Toutes les Œuvres",
    filterColorEnergy: "Champs d'Énergie",
    filterVeil: "Peintures Voiles",
    filterPatina: "Patines Colorées",
    filterInstallations: "Installations d'Architecture",

    // Visualizer
    visEyebrow: "Dimension Spatiale",
    visTitle: "La Toile dans les Intérieurs d'Architecture",
    visDesc: "Les toiles grand format de Heidi Thompson sont recherchées dans le monde entier par les architectes, designers d'intérieur et collectionneurs pour insuffler lumière et sérénité aux espaces contemporains.",
    visRoomLoft: "Loft de Collectionneur Épuré",
    visRoomLoftSub: "Mettant en valeur 'Peaceful Movement in White' (48\" × 64\")",
    visRoomPenthouse: "Penthouse aux Hauts Plafonds",
    visRoomPenthouseSub: "Mettant en valeur 'Earth Energy' (66\" × 90\")",
    visRoomGallery: "Suite Vernon Public Art Gallery",
    visRoomGallerySub: "Vue Scénographiée d'Exposition Muséale",
    visRoomDining: "Résidence Architecturale",
    visRoomDiningSub: "Création sur Mesure en Collection Privée",

    // Estimator
    calcEyebrow: "Acquisitions & Commandes Privées",
    calcTitle: "Conseil en Art & Simulateur d'Acquisition",
    calcDesc: "Obtenez une estimation claire et immédiate pour toiles originales, formats sur mesure et caisses d'expédition muséales internationales.",
    calcSizeLabel: "Dimensions de la Toile",
    calcSeriesLabel: "Série / Langage Pictural",
    calcFrameLabel: "Encadrement Boîte Américaine (Musée)",
    calcDeliveryLabel: "Destination d'Expédition Spécialisée",
    calcEstimatedInvestment: "Investissement Estimé du Collectionneur",
    calcIncludes: "Comprend le Certificat d'Authenticité (COA) signé par l'artiste, vernis d'archives et traçabilité de provenance.",
    calcInquireBtn: "Réserver Cette Spécification",

    // About
    aboutEyebrow: "Parcours & Démarche",
    aboutTitle: "Héritage Européen & Profondeur Méditative",
    aboutBio1: "Heidi Thompson est née à Vernon, Colombie-Britannique. À 17 ans, elle s'installe en Europe où elle obtient un diplôme professionnel en photographie de la Haute École d'Art et de Design de Zurich (Kunstgewerbeschule). Elle devient ensuite apprentie auprès du maître allemand Oskar Koller, poursuit ses études à l'Akademie der Bildenden Künste de Nuremberg avec Ernst Weil, puis à l'Université des Beaux-Arts de Budapest sous la direction de Kokas Ignác.",
    aboutBio2: "De retour au Canada en 1982, Thompson accomplit sa première retraite de méditation Vipassana de 10 jours en 1983—une pratique quotidienne ininterrompue qui devient le cœur battant de son œuvre. Loin d'une figuration extérieure, ses toiles agissent comme des champs d'énergie optique, abolissant la distance entre regardeur, matière et conscience.",
    timeline1: "1975–1981 : Académies des Beaux-Arts européennes (Zurich, Nuremberg, Budapest)",
    timeline2: "1983–Présent : Pratique quotidienne Vipassana façonnant la vibration lumineuse",
    timeline3: "1995 : Auteure de 'Recapitulation: Life and Art of Sveva Caetani' (Prix VanCity)",
    timeline4: "Collections choisies : Collection Senvest (Montréal), Galerie Publique de Vernon, Zurich, New York",

    // Reviews
    reviewsEyebrow: "Accueil Critique",
    reviewsTitle: "Il N'y A Pas de Réponse — La Physique de la Nature",
    reviewsQuote: "« En phase avec le rôle de l'artiste comme récepteur, Heidi Thompson dialogue avec la physique de la nature. Sans dominer ni forcer l'issue, elle projette la matière avec un fin pinceau éventail, orchestrant couleur, lumière et vibration de surface. Son travail s'inscrit aux côtés de Mark Tobey, Jackson Pollock, Mark Rothko et Natvar Bhavsar dans sa rayonnante spiritualité. »",
    reviewsAuthor: "John K. Grande",
    reviewsAuthorTitle: "Critique d'art émérite, auteur de 'Balance: Art and Nature'",

    // Film
    filmEyebrow: "Documentaire & Monographie",
    filmTitle: "Sveva Caetani : Récapitulation — Un Voyage",
    filmDesc: "Heidi Thompson a consacré plus d'une décennie à documenter la vie extraordinaire et l'œuvre métaphysique de l'artiste italo-canadienne Sveva Caetani. Son livre a remporté le prestigieux VanCity Book of Excellence Award et a été adapté en film documentaire acclamé.",
    filmAward: "Lauréat du Prix VanCity Book of Excellence",
    filmTrailerBtn: "Bande-Annonce du Film →",
    filmPasswordNote: "Pour visionner l'intégralité du documentaire, contactez l'atelier par courriel.",

    // Contact
    contactEyebrow: "Contact Direct",
    contactTitle: "Visites d'Atelier & Acquisitions",
    contactDesc: "Heidi Thompson accueille collectionneurs privés, architectes d'intérieur et conservateurs dans son atelier-galerie de Coldstream sur rendez-vous privé.",
    contactAddressTitle: "Adresse de l'Atelier-Galerie",
    contactAddress: "9905 Coldstream Creek Road, Coldstream, C.-B., Canada",
    contactPhoneTitle: "Téléphone Direct",
    contactPhone: "(250) 542-1551",
    contactEmailTitle: "Courriel de l'Atelier",
    contactEmail: "htcthompson@hotmail.com",
    formName: "Nom Complet",
    formEmail: "Adresse Courriel",
    formInterest: "Objet de la Demande",
    formInterestOpt1: "Acquérir une Toile Originale Disponible",
    formInterestOpt2: "Commander une Toile sur Mesure",
    formInterestOpt3: "Prendre Rendez-vous à l'Atelier",
    formInterestOpt4: "Demande Institutionnelle / Exposition",
    formMessage: "Message ou Dimensions Souhaitées",
    formSubmit: "Transmettre la Demande à l'Atelier",

    // Modal Lightbox
    modalInquireBtn: "Demander l'Acquisition de Cette Toile",
    modalStatusAvailable: "Disponible dans l'Archive de l'Atelier",

    // Footer
    footerRights: "© 2026 Heidi Thompson. Tous droits réservés.",
    footerRepresented: "Présente dans des galeries et collections canadiennes et internationales."
  }
};

// =============================================================================
// 2. ARTWORK DATA CATALOG
// =============================================================================
const artworkCatalog = [
  {
    id: "peaceful-movement-white",
    title: { en: "Peaceful Movement in White", fr: "Mouvement Paisible en Blanc" },
    year: "2022",
    dimensions: "48\" × 64\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "color-energy",
    seriesName: { en: "Color Energy Fields", fr: "Champs d'Énergie" },
    priceUSD: "$7,200 USD",
    image: "images/peaceful-movement-white.jpg",
    desc: {
      en: "A sublime study of white-on-white vibration, layered with fine gestural spatters and subtle sand texture that reflect shifting room light throughout the day.",
      fr: "Une étude magistrale de vibration blanche, rythmée de micro-projections et d'une texture de sable délicate réagissant à la lumière naturelle de la pièce."
    }
  },
  {
    id: "earth-energy",
    title: { en: "Earth Energy", fr: "Énergie de la Terre" },
    year: "2010",
    dimensions: "66\" × 90\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "color-energy",
    seriesName: { en: "Color Energy Fields", fr: "Champs d'Énergie" },
    priceUSD: "$12,500 USD",
    image: "images/earth-energy.jpg",
    desc: {
      en: "A monumental masterwork evoking tectonic resonance and deep organic stillness. Collected for architectural living areas and corporate collections.",
      fr: "Un chef-d'œuvre monumental évoquant la résonance tellurique et la quiétude organique. Idéal pour espaces architecturaux d'exception."
    }
  },
  {
    id: "sky-aura",
    title: { en: "Sky Aura", fr: "Aura Céleste" },
    year: "2026",
    dimensions: "50\" × 60\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "color-energy",
    seriesName: { en: "Color Energy Fields", fr: "Champs d'Énergie" },
    priceUSD: "$6,800 USD",
    image: "images/sky-aura.jpg",
    desc: {
      en: "Radiant cerulean and turquoise atmospheric particles suspended in an infinite optical field, creating an immediate sensation of expanded breath.",
      fr: "Particules atmosphériques céruléennes et turquoise suspendues dans un champ optique infini, provoquant une sensation immédiate d'apaisement."
    }
  },
  {
    id: "tapestry-grey-white",
    title: { en: "Tapestry in Grey & White", fr: "Tapisserie en Gris & Blanc" },
    year: "2021",
    dimensions: "54\" × 54\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "color-energy",
    seriesName: { en: "Color Energy Fields", fr: "Champs d'Énergie" },
    priceUSD: "$6,400 USD",
    image: "images/tapestry-grey-white.jpg",
    desc: {
      en: "An intricate weave of delicate tonal grey flicked pigment, echoing the meditative repetition of hand-spun textiles and contemplative silence.",
      fr: "Un entrelacs minutieux de pigments gris projetés avec régularité, faisant écho aux textiles tissés main et au silence contemplatif."
    }
  },
  {
    id: "peaceful-mind-gold",
    title: { en: "A Peaceful Mind in Gold", fr: "Esprit Serein en Or" },
    year: "2026",
    dimensions: "50\" × 60\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "color-energy",
    seriesName: { en: "Color Energy Fields", fr: "Champs d'Énergie" },
    priceUSD: "$6,900 USD",
    image: "images/peaceful-mind-gold.jpg",
    desc: {
      en: "Golden aura particles floating over warm ochre layers, imbuing any minimalist space with warmth, luxury, and meditative equilibrium.",
      fr: "Particules d'aura dorées flottant sur des sous-couches d'ocre chaud, apportant aux intérieurs épurés chaleur, élégance et équilibre."
    }
  },
  {
    id: "river-descending",
    title: { en: "A River Descending", fr: "Une Rivière Descendante" },
    year: "2026",
    dimensions: "60\" × 36\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "veil-paintings",
    seriesName: { en: "Veil Paintings", fr: "Peintures Voiles" },
    priceUSD: "$5,800 USD",
    image: "images/river-descending.jpg",
    desc: {
      en: "Translucent vertical veils that allow underlying atmospheric light to softly seep through, reminiscent of mountain mist and quiet waterfalls.",
      fr: "Voiles verticaux translucides laissant filtrer la lumière atmosphérique sous-jacente, rappelant la brume de montagne et l'eau vive."
    }
  },
  {
    id: "sky-veils",
    title: { en: "Sky Veils", fr: "Voiles Célestes" },
    year: "2024",
    dimensions: "30\" × 90\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "veil-paintings",
    seriesName: { en: "Veil Paintings", fr: "Peintures Voiles" },
    priceUSD: "$7,500 USD",
    image: "images/sky-veils.jpg",
    desc: {
      en: "Panoramic horizon format featuring ultra-thin glazes of cerulean, pearl, and quartz tones, perfectly scaled for wide dining or sofa walls.",
      fr: "Format panoramique présentant d'infinis glacis de nacre, quartz et bleu céleste, parfait au-dessus d'une enfilade ou d'un grand canapé."
    }
  },
  {
    id: "silver-over-light",
    title: { en: "Silver over Light", fr: "Argent sur Lumière" },
    year: "2023",
    dimensions: "60\" × 48\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "veil-paintings",
    seriesName: { en: "Veil Paintings", fr: "Peintures Voiles" },
    priceUSD: "$6,200 USD",
    image: "images/silver-over-light.jpg",
    desc: {
      en: "Cool metallic undertones meeting luminous gesso relief, capturing the delicate play of moonlight over silent winter waters.",
      fr: "Sous-tons métalliques et relief de gesso lumineux, capturant le jeu subtil du clair de lune sur une onde glacée."
    }
  },
  {
    id: "sunset-radiance",
    title: { en: "Sunset Radiance", fr: "Rayonnement du Couchant" },
    year: "2024",
    dimensions: "50\" × 46\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "patina",
    seriesName: { en: "Colorful Patina", fr: "Patines Colorées" },
    priceUSD: "$5,900 USD",
    image: "images/sunset-radiance.jpg",
    desc: {
      en: "Warm cinnabar, amber, and fiery coral particles blended with exquisite control to simulate the lingering luminescence of evening dusk.",
      fr: "Pigments ambrés, cinabres et corail vibrant fondus avec maîtrise pour prolonger la luminescence dorée du crépuscule."
    }
  },
  {
    id: "white-grey-blue-patina",
    title: { en: "White Grey Blue Patina", fr: "Patine Blanc Gris Bleu" },
    year: "2025",
    dimensions: "82\" × 72\"",
    medium: { en: "Acrylic on Canvas", fr: "Acrylique sur Toile" },
    series: "patina",
    seriesName: { en: "Colorful Patina", fr: "Patines Colorées" },
    priceUSD: "$11,200 USD",
    image: "images/white-grey-blue-patina.jpg",
    desc: {
      en: "A grand statement canvas exhibiting an aged, weathered mineral patina that bridges centuries of classical fresco with modern minimalism.",
      fr: "Une œuvre majeure aux accents de fresque minérale patinée, créant un pont entre héritage classique et pureté contemporaine."
    }
  },
  {
    id: "installation-montreal",
    title: { en: "Montreal Architectural Loft", fr: "Loft d'Architecte à Montréal" },
    year: "2024",
    dimensions: "Private Collection",
    medium: { en: "Installation in Interior", fr: "Installation en Intérieur" },
    series: "installations",
    seriesName: { en: "Architectural Installations", fr: "Installations d'Architecture" },
    priceUSD: "Private Commission",
    image: "images/installation-montreal.jpg",
    desc: {
      en: "Heidi Thompson canvas commanding the central salon of a minimalist Montreal penthouse, bringing natural warmth to polished concrete and glass.",
      fr: "Toile de Heidi Thompson surplombant le salon d'un penthouse montréalais, réchauffant le béton ciré et les larges baies vitrées."
    }
  },
  {
    id: "installation-vernon-gallery",
    title: { en: "Vernon Public Art Gallery Exhibition", fr: "Exposition à la Vernon Public Art Gallery" },
    year: "Museum Solo",
    dimensions: "Curated Retrospective",
    medium: { en: "Museum Curation", fr: "Scénographie Muséale" },
    series: "installations",
    seriesName: { en: "Architectural Installations", fr: "Installations d'Architecture" },
    priceUSD: "Institutional",
    image: "images/installation-vernon-gallery.jpg",
    desc: {
      en: "Spacious museum hall installation illustrating the optical vibration between color fields when viewed from varied distances.",
      fr: "Installation muséale illustrant la vibration optique et le dialogue entre les différents champs d'énergie colorée."
    }
  }
];

// =============================================================================
// 3. STATE CONTROLLER
// =============================================================================
const state = {
  lang: localStorage.getItem('ht_lang') || 'en',
  theme: localStorage.getItem('ht_theme') || 'light',
  currentFilter: 'all',
  selectedRoom: 'loft'
};

// =============================================================================
// 4. THEME CONTROLLER (WHITE GALLERY vs DARK MUSEUM)
// =============================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeUI();

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('ht_theme', state.theme);
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeUI();
}

function updateThemeUI() {
  const themeText = document.getElementById('themeBtnText');
  const themeIcon = document.getElementById('themeBtnIcon');
  const t = translations[state.lang];

  if (state.theme === 'light') {
    if (themeText) themeText.textContent = t.themeDark;
    if (themeIcon) themeIcon.textContent = '🌙';
  } else {
    if (themeText) themeText.textContent = t.themeLight;
    if (themeIcon) themeIcon.textContent = '☀️';
  }
}

// =============================================================================
// 5. LANGUAGE CONTROLLER (EN & FR)
// =============================================================================
function initLanguage() {
  setLanguage(state.lang);

  const enBtn = document.getElementById('langBtnEn');
  const frBtn = document.getElementById('langBtnFr');

  if (enBtn) {
    enBtn.addEventListener('click', () => setLanguage('en'));
  }
  if (frBtn) {
    frBtn.addEventListener('click', () => setLanguage('fr'));
  }
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('ht_lang', lang);

  // Update active buttons
  const enBtn = document.getElementById('langBtnEn');
  const frBtn = document.getElementById('langBtnFr');
  if (enBtn) enBtn.classList.toggle('active', lang === 'en');
  if (frBtn) frBtn.classList.toggle('active', lang === 'fr');

  // Update all DOM elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderEls.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  updateThemeUI();
  renderGallery();
  updateEstimator();
}

// =============================================================================
// 6. GALLERY RENDERING & FILTERING
// =============================================================================
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-tab');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter = btn.getAttribute('data-filter');
      renderGallery();
    });
  });

  renderGallery();
}

function renderGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  const filtered = artworkCatalog.filter(item => {
    if (state.currentFilter === 'all') return true;
    return item.series === state.currentFilter;
  });

  container.innerHTML = filtered.map(item => `
    <article class="gallery-card" data-id="${item.id}">
      <div class="gallery-card-img" onclick="openLightbox('${item.id}')">
        <img src="${item.image}" alt="${item.title[state.lang]}" loading="lazy">
        <div class="gallery-hover-overlay">
          <button class="overlay-btn" title="View Masterwork Lightbox">🔍</button>
        </div>
      </div>
      <div class="gallery-card-body">
        <span class="gallery-card-series">${item.seriesName[state.lang]}</span>
        <h3 class="gallery-card-title">${item.title[state.lang]}</h3>
        <p class="gallery-card-specs">${item.dimensions} • ${item.medium[state.lang]} (${item.year})</p>
        <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:1rem; line-height:1.5;">${item.desc[state.lang]}</p>
        <div class="gallery-card-footer">
          <span class="gallery-card-status">${item.priceUSD}</span>
          <span class="gallery-inquire-link" onclick="openInquiryFor('${item.id}')">
            ${state.lang === 'en' ? 'Inquire' : 'Demander'} →
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

// =============================================================================
// 7. LIGHTBOX MODAL & INQUIRY MODAL
// =============================================================================
function openLightbox(artworkId) {
  const artwork = artworkCatalog.find(a => a.id === artworkId);
  if (!artwork) return;

  const modal = document.getElementById('artworkModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalSeries = document.getElementById('modalSeries');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const modalBtn = document.getElementById('modalInquireBtn');

  if (modalImg) modalImg.src = artwork.image;
  if (modalTitle) modalTitle.textContent = artwork.title[state.lang];
  if (modalSeries) modalSeries.textContent = artwork.seriesName[state.lang];
  if (modalSpecs) modalSpecs.textContent = `${artwork.dimensions} • ${artwork.medium[state.lang]} (${artwork.year})`;
  if (modalDesc) modalDesc.textContent = artwork.desc[state.lang];
  if (modalPrice) modalPrice.textContent = artwork.priceUSD;

  if (modalBtn) {
    modalBtn.onclick = () => {
      closeLightbox();
      openInquiryFor(artworkId);
    };
  }

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('artworkModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openInquiryFor(artworkId) {
  const artwork = artworkCatalog.find(a => a.id === artworkId);
  const contactSection = document.getElementById('contact');
  const messageInput = document.getElementById('formMessage');
  const interestSelect = document.getElementById('formInterest');

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  if (interestSelect) {
    interestSelect.value = 'original';
  }

  if (messageInput && artwork) {
    const text = state.lang === 'en'
      ? `Hello Heidi,\nI would like to inquire about acquiring "${artwork.title.en}" (${artwork.dimensions}, ${artwork.priceUSD}). Please provide availability and shipping details.`
      : `Bonjour Heidi,\nJe souhaite vous contacter au sujet de l'acquisition de « ${artwork.title.fr} » (${artwork.dimensions}, ${artwork.priceUSD}). Merci de me transmettre les modalités d'expédition.`;
    messageInput.value = text;
    messageInput.focus();
  }
}

// =============================================================================
// 8. INTERACTIVE ROOM VISUALIZER
// =============================================================================
const roomData = {
  loft: {
    img: "images/installation-collector-loft.jpg",
    title: { en: "Minimalist Collector's Loft", fr: "Loft de Collectionneur Épuré" }
  },
  penthouse: {
    img: "images/installation-penthouse.jpg",
    title: { en: "High-Ceiling Penthouse", fr: "Penthouse aux Hauts Plafonds" }
  },
  gallery: {
    img: "images/installation-vernon-gallery.jpg",
    title: { en: "Vernon Public Art Gallery Suite", fr: "Suite Vernon Public Art Gallery" }
  },
  dining: {
    img: "images/installation-montreal.jpg",
    title: { en: "Architectural Residence", fr: "Résidence Architecturale" }
  }
};

function initRoomVisualizer() {
  const buttons = document.querySelectorAll('.room-selector-btn');
  const stageImg = document.getElementById('roomStageImage');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const roomKey = btn.getAttribute('data-room');
      state.selectedRoom = roomKey;

      if (stageImg && roomData[roomKey]) {
        stageImg.style.opacity = '0.3';
        setTimeout(() => {
          stageImg.src = roomData[roomKey].img;
          stageImg.style.opacity = '1';
        }, 200);
      }
    });
  });
}

// =============================================================================
// 9. ART ACQUISITION & COMMISSION ESTIMATOR
// =============================================================================
function initEstimator() {
  const sizeSelect = document.getElementById('calcSize');
  const seriesSelect = document.getElementById('calcSeries');
  const frameSelect = document.getElementById('calcFrame');
  const deliverySelect = document.getElementById('calcDelivery');

  [sizeSelect, seriesSelect, frameSelect, deliverySelect].forEach(sel => {
    if (sel) sel.addEventListener('change', updateEstimator);
  });

  const calcBtn = document.getElementById('calcInquireBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const sizeVal = sizeSelect ? sizeSelect.options[sizeSelect.selectedIndex].text : '';
      const seriesVal = seriesSelect ? seriesSelect.options[seriesSelect.selectedIndex].text : '';
      const frameVal = frameSelect ? frameSelect.options[frameSelect.selectedIndex].text : '';
      const priceVal = document.getElementById('calcDisplayPrice')?.textContent || '';

      const contactSection = document.getElementById('contact');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });

      const interestSelect = document.getElementById('formInterest');
      if (interestSelect) interestSelect.value = 'commission';

      const messageInput = document.getElementById('formMessage');
      if (messageInput) {
        messageInput.value = state.lang === 'en'
          ? `Hello Heidi,\nI used your art advisory calculator and would like to proceed with a quote inquiry:\n- Canvas Size: ${sizeVal}\n- Technique/Series: ${seriesVal}\n- Framing: ${frameVal}\n- Estimated Investment: ${priceVal}\nPlease advise on next steps.`
          : `Bonjour Heidi,\nJ'ai utilisé votre simulateur d'acquisition et souhaite recevoir un devis détaillé :\n- Dimensions de toile : ${sizeVal}\n- Série / Langage pictural : ${seriesVal}\n- Encadrement : ${frameVal}\n- Investissement estimé : ${priceVal}\nMerci de me recontacter pour finaliser mon projet.`;
        messageInput.focus();
      }
    });
  }

  updateEstimator();
}

function updateEstimator() {
  const sizeSelect = document.getElementById('calcSize');
  const seriesSelect = document.getElementById('calcSeries');
  const frameSelect = document.getElementById('calcFrame');
  const deliverySelect = document.getElementById('calcDelivery');

  const basePrice = parseInt(sizeSelect ? sizeSelect.value : 5200, 10);
  const seriesMultiplier = parseFloat(seriesSelect ? seriesSelect.value : 1.0);
  const frameCost = parseInt(frameSelect ? frameSelect.value : 0, 10);
  const deliveryCost = parseInt(deliverySelect ? deliverySelect.value : 450, 10);

  const total = Math.round((basePrice * seriesMultiplier) + frameCost + deliveryCost);

  const displayPrice = document.getElementById('calcDisplayPrice');
  const valCanvas = document.getElementById('calcValCanvas');
  const valFrame = document.getElementById('calcValFrame');
  const valShipping = document.getElementById('calcValShipping');

  if (displayPrice) displayPrice.textContent = `$${total.toLocaleString()} USD`;
  if (valCanvas) valCanvas.textContent = `$${Math.round(basePrice * seriesMultiplier).toLocaleString()} USD`;
  if (valFrame) valFrame.textContent = frameCost === 0 ? (state.lang === 'en' ? 'Included' : 'Inclus') : `$${frameCost.toLocaleString()} USD`;
  if (valShipping) valShipping.textContent = `$${deliveryCost.toLocaleString()} USD`;
}

// =============================================================================
// 10. CONTACT FORM HANDLER
// =============================================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = state.lang === 'en' ? 'Transmitting to Studio...' : 'Envoi à l\'atelier...';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      alert(state.lang === 'en'
        ? "Thank you for reaching out to Heidi Thompson's studio. We have received your inquiry and will respond within 24 to 48 hours."
        : "Merci d'avoir contacté l'atelier de Heidi Thompson. Votre demande a bien été reçue ; nous vous répondrons sous 24 à 48 heures.");
      form.reset();
    }, 1200);
  });
}

// =============================================================================
// 11. NAVBAR SCROLL & MOBILE MENU
// =============================================================================
function initNav() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Modal backdrop click to close
  const modal = document.getElementById('artworkModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// =============================================================================
// INITIALIZE APPLICATION ON DOM READY
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initGallery();
  initRoomVisualizer();
  initEstimator();
  initContactForm();
  initNav();
});
