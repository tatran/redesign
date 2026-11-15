/**
 * Noah's Pro Painting - Interactive Engine
 * Bilingual i18n (EN/FR) | Theme Switcher (Dark/Light) | Cost Calculator | Color Visualizer
 */

// ==========================================================================
// 1. i18n Translations Dictionary (English & French)
// ==========================================================================
const translations = {
  en: {
    // Nav & Controls
    nav_services: "Services",
    nav_calc: "Instant Estimator",
    nav_visualizer: "Color Studio",
    nav_gallery: "Gallery",
    nav_why: "Why Noah",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    btn_theme_dark: "Dark",
    btn_theme_light: "Light",
    btn_book_quote: "Book Free Quote",
    call_or_text: "Call/Text 778-821-2559",
    
    // Promo Bar
    promo_badge: "Limited Offer",
    promo_text: "Approve your estimate on the same day it is provided & SAVE 10% on your entire project!",
    promo_cta: "Claim 10% Off",

    // Hero Section
    hero_eyebrow: "★ Okanagan's Master Finishing & Painting Specialist",
    hero_title: "Transform Your Space With <span class='text-gradient'>Master Precision & Colour</span>",
    hero_desc: "Serving Lake Country, Kelowna, and Vernon for over 20 years. Owner-operated craftsmanship where Noah personally executes and oversees every brushstroke, spray coat, and fine finish. No subcontractors—guaranteed excellence.",
    hero_cta_calc: "Calculate Instant Estimate",
    hero_cta_book: "Book Free On-Site Quote",
    
    // Trust Badges
    badge_exp: "20+ Years Experience",
    badge_owner: "100% Owner Executed",
    badge_insured: "Licensed & WorkSafeBC Insured",
    badge_reviews: "5-Star Google & Facebook Rating",
    badge_discount: "10% Same-Day Booking Discount",
    badge_owner_title: "Noah — Master Craftsman & Owner",
    badge_owner_sub: "Direct communication, personalized care & satisfaction guarantee",

    // Cost Calculator Section
    calc_tag: "Transparent Pricing",
    calc_title: "Instant Okanagan Painting Cost Estimator",
    calc_desc: "Get an immediate ballpark estimate tailored to local Okanagan home sizes and premium paint systems.",
    calc_label_type: "Select Project Scope",
    calc_opt_interior: "Full Interior Repaint (Walls, Trim, Ceilings)",
    calc_opt_exterior: "Full Exterior Repaint (Siding, Trim, Fascia)",
    calc_opt_cabinets: "Cabinet Fine Spray Refinishing (Kitchen/Baths)",
    calc_opt_epoxy: "Epoxy Floor Coating (Garage/Commercial)",
    calc_opt_ceiling: "Popcorn Ceiling Removal & Retexturing",
    calc_label_size: "Approximate Area (Square Footage):",
    calc_label_prep: "Surface Preparation Needed:",
    calc_prep_std: "Standard (Minor Scuffs/Nail Holes)",
    calc_prep_mod: "Moderate (Drywall Cracks/Patching)",
    calc_prep_ext: "Extensive (Water Damage/Heavy Texture)",
    calc_label_grade: "Paint Quality System:",
    calc_grade_premium: "Sherwin-Williams Emerald / Ben Moore Aura (Highest Durability)",
    calc_grade_pro: "Sherwin-Williams Duration / Ben Moore Regal (Industry Standard)",
    calc_est_lead: "Estimated Project Budget (CAD)",
    calc_discount_note: "Includes eligible 10% Same-Day Booking Incentive",
    calc_feat_1: "Includes all premium primers, finishes & supplies",
    calc_feat_2: "Full floor, furniture, and window masking & protection",
    calc_feat_3: "Noah's personal satisfaction craftsmanship warranty",
    calc_cta_lock: "Lock In This Rate & Book Quote",

    // Color Visualizer Section
    vis_tag: "Color Studio",
    vis_title: "Interactive Okanagan Color Previewer",
    vis_desc: "Explore trending color palettes designed for natural Okanagan lighting, lakefront homes, and modern interiors.",
    vis_finish_rec: "Recommended Finish: Eggshell (Walls) / Satin (Trim & Doors)",
    vis_swatch_1_name: "Chantilly Lace (OC-65)",
    vis_swatch_1_desc: "Pure, brilliant gallery white with zero undertones. Brightens any living room.",
    vis_swatch_2_name: "Agreeable Gray (SW 7029)",
    vis_swatch_2_desc: "The quintessential warm greige that adapts effortlessly to day and evening light.",
    vis_swatch_3_name: "Balboa Mist (OC-27)",
    vis_swatch_3_desc: "Soft, misty neutral that pairs impeccably with white oak and black accents.",
    vis_swatch_4_name: "Hale Navy (HC-154)",
    vis_swatch_4_desc: "Deep, classic architectural navy for dramatic accent walls and cabinetry.",
    vis_swatch_5_name: "Warm Okanagan Cedar",
    vis_swatch_5_desc: "Rich natural wood grain enhancement with durable UV-resistant clear coat.",

    // Services Grid
    srv_tag: "Comprehensive Capabilities",
    srv_title: "Precision Painting & Fine Finishing Services",
    srv_desc: "Whether residential, commercial, or strata, every project is handled with exacting standards.",
    srv_1_tag: "Residential Interior",
    srv_1_title: "Interior Repainting & Trim",
    srv_1_desc: "Complete interior transformations: walls, ceilings, baseboards, crown molding, doors, and accent walls. Impeccable line work and seamless wall repairs.",
    srv_2_tag: "Exterior Protection",
    srv_2_title: "Exterior House & Building Painting",
    srv_2_desc: "Engineered to withstand harsh Okanagan summer UV heat and freezing winter temperatures. High-grade protection for wood, vinyl, stucco, and aluminum siding.",
    srv_3_tag: "Fine Finishing",
    srv_3_title: "Cabinet Spray Refinishing",
    srv_3_desc: "Achieve a flawless factory-smooth lacquer finish for a fraction of the cost of new cabinetry. Doors and drawer fronts spray-finished to perfection.",
    srv_4_tag: "Heavy-Duty Surfaces",
    srv_4_title: "Epoxy Floor Coatings",
    srv_4_desc: "Industrial-grade epoxy and polyaspartic coatings with decorative color flakes and protective clear topcoats for garages, workshops, and retail floors.",
    srv_5_tag: "Architectural Prep",
    srv_5_title: "Drywall & Popcorn Ceiling Removal",
    srv_5_desc: "Modernize your space with popcorn ceiling removal, acoustic texture smoothing, water damage repair, and seamless taping and mudding.",
    srv_6_tag: "Commercial & Strata",
    srv_6_title: "Offices, Retail & Common Areas",
    srv_6_desc: "Flexible, fast-turnaround commercial repainting for offices, restaurants, retail shops, strata lobbies, and hallways with minimal business downtime.",

    // Gallery
    gal_tag: "Real Okanagan Craftsmanship",
    gal_title: "Featured Project Gallery",
    gal_desc: "Browse authentic before-and-after work and recent completions across Lake Country, Kelowna, and Vernon.",
    gal_filter_all: "All Projects",
    gal_filter_int: "Interiors",
    gal_filter_ext: "Exteriors",
    gal_filter_cab: "Cabinetry",
    gal_filter_epoxy: "Epoxy & Specialty",

    // Why Noah
    why_tag: "The Owner-Operator Difference",
    why_title: "Why Okanagan Homeowners Trust Noah",
    why_desc: "Painting is personal. When you hire Noah's Pro Painting, you don't get an anonymous crew or passing subcontractors.",
    why_1_title: "Direct Owner Accountability",
    why_1_desc: "Noah personally meets you for the estimate, prepares the surfaces, and applies every finish coat. His personal reputation is on every wall.",
    why_2_title: "20+ Years Master Precision",
    why_2_desc: "Two decades of refining brush angles, spray atomization, and substrate chemistry ensures zero lap marks, no overspray, and razor-sharp cut lines.",
    why_3_title: "Respect For Your Sanctuary",
    why_3_desc: "Clean drop cloths, meticulous masking of flooring and furnishings, and thorough daily vacuuming and clean-up.",
    why_4_title: "Fully Licensed & WorkSafeBC Insured",
    why_4_desc: "Complete coverage including $2,000,000 commercial liability and active WorkSafeBC registration for total homeowner peace of mind.",
    comp_header_metric: "Service Metric",
    comp_header_franchise: "Big Franchise / Subcontractor",
    comp_header_noah: "Noah's Pro Painting",
    comp_row_1_m: "Who does the work?",
    comp_row_1_f: "Seasonal students or lowest-bid third parties",
    comp_row_1_n: "Noah personally (20+ yrs experienced master)",
    comp_row_2_m: "Communication",
    comp_row_2_f: "Call centers, middlemen, delayed messages",
    comp_row_2_n: "Direct cell phone/text with the owner",
    comp_row_3_m: "Incentives & Transparency",
    comp_row_3_f: "Hidden upsells & rigid corporate pricing",
    comp_row_3_n: "10% Same-Day booking savings & clear written quote",
    comp_row_4_m: "Workmanship Warranty",
    comp_row_4_f: "Bureaucratic warranty claims",
    comp_row_4_n: "100% Personal Satisfaction Guarantee",

    // Reviews
    rev_tag: "Verified Client Reviews",
    rev_title: "What Okanagan Homeowners Say",
    rev_desc: "Real experiences from Lake Country, Kelowna, and Vernon clients.",
    rev_1_text: "“Noah completely transformed our Lake Country home before we moved in. The cabinet spray finish looks like it came straight from a luxury Italian showroom. He was on time every morning, exceptionally tidy, and his attention to trim lines is remarkable.”",
    rev_1_author: "David & Sarah M.",
    rev_1_loc: "Lake Country, BC",
    rev_2_text: "“I received quotes from three companies, but Noah was the only one who clearly explained substrate preparation and recommended the exact moisture-resistant paint for our ceiling repair. Plus, taking advantage of the same-day 10% discount was a no-brainer!”",
    rev_2_author: "Elena R.",
    rev_2_loc: "Kelowna, BC (Mission)",
    rev_3_text: "“Honest, professional, and hardworking. Noah repaired drywall cracks and repainted our entire strata townhouse including difficult vaulted stairwells. No mess left behind, fair pricing, and outstanding results.”",
    rev_3_author: "Marcus T.",
    rev_3_loc: "Vernon, BC",

    // Service Areas
    area_tag: "Local Coverage",
    area_title: "Proudly Serving the Okanagan Valley",
    area_desc: "Based in Lake Country and readily available throughout Kelowna and Vernon.",
    area_1: "Lake Country",
    area_1_sub: "Middle Bench, Carr's Landing, Oyama, Winfield & Okanagan Centre",
    area_2: "Kelowna",
    area_2_sub: "Downtown, Lower Mission, Upper Mission, Glenmore, Black Mountain & Rutland",
    area_3: "Vernon & Coldstream",
    area_3_sub: "Kalamalka Lake, Silver Star Foothills, East Hill & Bella Vista",
    area_4: "West Kelowna & Peachland",
    area_4_sub: "Westbank, Rose Valley, Shannon Lake & Lakefront Estates",

    // FAQ
    faq_tag: "Answers & Guidance",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Everything you need to know about preparing for your painting project with Noah.",
    faq_q1: "Do you hire subcontractors or students to paint my home?",
    faq_a1: "Never. Noah is an owner-operated artisan with over 20 years of hands-on experience. When you book Noah's Pro Painting, Noah personally oversees and performs the work, ensuring uncompromising quality on every surface.",
    faq_q2: "How does the 10% Same-Day Booking Discount work?",
    faq_a2: "When Noah delivers your detailed written estimate, approving it on the same day automatically unlocks a 10% savings deduction on the total labor and project quote. It allows for prompt scheduling and immediate ordering of materials.",
    faq_q3: "What paint brands and product lines do you recommend?",
    faq_a3: "We primarily work with premium lines from Benjamin Moore (Aura, Regal Select, Scuff-X) and Sherwin-Williams (Emerald, Duration). We select products specifically tested to resist Okanagan UV sunlight and scrubbability demands.",
    faq_q4: "Are you licensed and insured in British Columbia?",
    faq_a4: "Yes, fully licensed in BC, covered with $2,000,000 Commercial General Liability Insurance, and registered in good standing with WorkSafeBC for full homeowner protection.",
    faq_q5: "How long does a typical interior or exterior repaint take?",
    faq_a5: "Most full-room repaints take 1–2 days. An entire average-sized interior home takes between 3 to 5 business days, while full exteriors take 4 to 7 days depending on surface prep and weather.",

    // Booking & Contact
    book_tag: "Start Your Project",
    book_title: "Request Your Free, No-Obligation Estimate",
    book_desc: "Lock in your 10% same-day discount and receive a fast, detailed project quote directly from Noah.",
    book_phone_label: "Direct Phone / Text:",
    book_email_label: "Email Inquiry:",
    book_location_label: "Shop & Office:",
    book_jobber_title: "Existing or Returning Client?",
    book_jobber_text: "Access your quotes, appointments, invoices, and work requests through our self-service Client Hub portal.",
    book_jobber_btn: "Open Jobber Client Hub",
    
    // Form fields
    form_name: "Full Name *",
    form_phone: "Phone Number *",
    form_email: "Email Address *",
    form_location: "City / Area *",
    form_service: "Desired Service *",
    form_details: "Project Description & Timeline",
    form_details_ph: "Tell Noah about your rooms, square footage, current colors, or specific deadlines...",
    form_submit: "Submit Estimate Request",
    form_submitting: "Sending Your Request...",
    form_success: "Thank you! Noah has received your request and will contact you within 24 hours.",

    // Footer
    foot_desc: "Premier owner-operated painting and fine finishing contractor serving Lake Country, Kelowna, and Vernon for over 20 years.",
    foot_quick_links: "Quick Links",
    foot_services: "Painting Services",
    foot_rights: "All rights reserved. Designed with precision for Noah's Pro Painting."
  },

  fr: {
    // Nav & Controls
    nav_services: "Services",
    nav_calc: "Estimateur Direct",
    nav_visualizer: "Studio Couleurs",
    nav_gallery: "Galerie",
    nav_why: "Pourquoi Noah",
    nav_reviews: "Avis Clients",
    nav_contact: "Contact",
    btn_theme_dark: "Sombre",
    btn_theme_light: "Clair",
    btn_book_quote: "Devis Gratuit",
    call_or_text: "Appel/Texto 778-821-2559",

    // Promo Bar
    promo_badge: "Offre Limitée",
    promo_text: "Approuvez votre devis le jour même de sa réception et ÉCONOMISEZ 10% sur l'ensemble de votre projet !",
    promo_cta: "Réclamez 10% de Rabais",

    // Hero Section
    hero_eyebrow: "★ Maître Peintre et Finisseur d'Élite de l'Okanagan",
    hero_title: "Sublimez Votre Espace Avec Une <span class='text-gradient'>Précision et des Couleurs Parfaites</span>",
    hero_desc: "Au service de Lake Country, Kelowna et Vernon depuis plus de 20 ans. Travail artisanal géré directement par le propriétaire : Noah applique et supervise personnellement chaque couche de peinture, laquage et finition. Zéro sous-traitance, excellence absolue garantie.",
    hero_cta_calc: "Calculer un Devis Immédiat",
    hero_cta_book: "Réserver un Devis sur Place",

    // Trust Badges
    badge_exp: "20+ Ans d'Expérience",
    badge_owner: "100% Réalisé par le Propriétaire",
    badge_insured: "Licencié & Assuré WorkSafeBC",
    badge_reviews: "Note 5 Étoiles Google & Facebook",
    badge_discount: "10% de Réduction Réservation le Jour Même",
    badge_owner_title: "Noah — Maître Artisan & Propriétaire",
    badge_owner_sub: "Communication directe, soin personnalisé et garantie de satisfaction",

    // Cost Calculator Section
    calc_tag: "Tarification Transparente",
    calc_title: "Estimateur Immédiat des Travaux de Peinture (Okanagan)",
    calc_desc: "Obtenez une estimation budgétaire instantanée adaptée aux superficies de l'Okanagan et aux peintures de qualité supérieure.",
    calc_label_type: "Sélectionnez le Type de Projet",
    calc_opt_interior: "Repeinte Intérieure Complète (Murs, Boiseries, Plafonds)",
    calc_opt_exterior: "Repeinte Extérieure Complète (Revêtement, Boiseries, Avant-toits)",
    calc_opt_cabinets: "Laquage Haute Précision d'Armoires (Cuisine/Salles de bain)",
    calc_opt_epoxy: "Revêtement de Sol Époxy (Garage/Commercial)",
    calc_opt_ceiling: "Enlèvement de Plafond Popcorn & Retexturation",
    calc_label_size: "Superficie Approximative (Pieds Carrés) :",
    calc_label_prep: "Préparation de Surface Nécessaire :",
    calc_prep_std: "Standard (Éraflures légères/Trous de clous)",
    calc_prep_mod: "Modérée (Fissures de plâtre/Ragréage)",
    calc_prep_ext: "Importante (Dégâts des eaux/Textures lourdes)",
    calc_label_grade: "Gamme de Peinture :",
    calc_grade_premium: "Sherwin-Williams Emerald / Ben Moore Aura (Durabilité Maximale)",
    calc_grade_pro: "Sherwin-Williams Duration / Ben Moore Regal (Norme Professionnelle)",
    calc_est_lead: "Budget Projet Estimé (CAD)",
    calc_discount_note: "Comprend la réduction exclusive de 10% le jour même",
    calc_feat_1: "Comprend tous les apprêts, finitions et fournitures haut de gamme",
    calc_feat_2: "Protection totale des planchers, meubles et fenêtres",
    calc_feat_3: "Garantie personnelle de satisfaction artisanale de Noah",
    calc_cta_lock: "Bloquer ce Tarif & Prendre Rendez-vous",

    // Color Visualizer Section
    vis_tag: "Studio de Nuances",
    vis_title: "Visualiseur Interactif de Couleurs pour l'Okanagan",
    vis_desc: "Explorez les palettes modernes conçues pour la luminosité naturelle de la vallée de l'Okanagan et les demeures contemporaines.",
    vis_finish_rec: "Finition Recommandée : Veloutée (Murs) / Satinée (Boiseries & Portes)",
    vis_swatch_1_name: "Chantilly Lace (OC-65)",
    vis_swatch_1_desc: "Blanc galerie pur et immaculé sans sous-ton. Illumine n'importe quel salon.",
    vis_swatch_2_name: "Agreeable Gray (SW 7029)",
    vis_swatch_2_desc: "Le grège chaleureux par excellence qui s'adapte à la lumière du jour et du soir.",
    vis_swatch_3_name: "Balboa Mist (OC-27)",
    vis_swatch_3_desc: "Neutre brumeux et doux qui s'accorde superbement avec le chêne clair et le noir.",
    vis_swatch_4_name: "Hale Navy (HC-154)",
    vis_swatch_4_desc: "Bleu marine architectural profond pour des murs d'accent et des armoires saisissantes.",
    vis_swatch_5_name: "Cèdre Chaleureux de l'Okanagan",
    vis_swatch_5_desc: "Sublimation du veinage naturel du bois avec vernis protecteur anti-UV durable.",

    // Services Grid
    srv_tag: "Expertise Complète",
    srv_title: "Services de Peinture et de Finition Haute Précision",
    srv_desc: "Qu'il s'agisse de résidentiel, de commercial ou de copropriétés, chaque chantier répond à des critères d'exigence sans compromis.",
    srv_1_tag: "Résidentiel Intérieur",
    srv_1_title: "Peinture Intérieure & Boiseries",
    srv_1_desc: "Métamorphose complète d'intérieurs : murs, plafonds, plinthes, moulures, portes et murs d'accent. Découpes au millimètre et réparation impeccable des cloisons sèches.",
    srv_2_tag: "Protection Extérieure",
    srv_2_title: "Peinture Extérieure Maison & Bâtiment",
    srv_2_desc: "Conçue pour résister à la chaleur estivale et aux hivers rigoureux de l'Okanagan. Protection supérieure pour bardage bois, vinyle, stuc et aluminium.",
    srv_3_tag: "Finition Haute Gamme",
    srv_3_title: "Laquage & Rénovation d'Armoires",
    srv_3_desc: "Obtenez un fini laqué lisse d'usine pour une fraction du coût d'armoires neuves. Portes et façades de tiroirs pulvérisées au pistolet avec une netteté absolue.",
    srv_4_tag: "Surfaces Résistantes",
    srv_4_title: "Revêtements de Sol Époxy",
    srv_4_desc: "Époxy de qualité industrielle et polyaspartique avec flocons décoratifs et couche transparente haute résistance pour garages, ateliers et boutiques.",
    srv_5_tag: "Préparation Architecturale",
    srv_5_title: "Réparation Plâtre & Retrait Plafond Popcorn",
    srv_5_desc: "Modernisez votre intérieur : élimination des plafonds texturés, lissage acoustique, réparation des dégâts des eaux, pose de bandes et enduit soigné.",
    srv_6_tag: "Commercial & Copropriétés",
    srv_6_title: "Bureaux, Commerces & Parties Communes",
    srv_6_desc: "Peinture commerciale rapide et flexible pour commerces, restaurants, bureaux et halls de copropriété avec interruption minimale de vos activités.",

    // Gallery
    gal_tag: "Savoir-Faire Authentique",
    gal_title: "Galerie de Réalisations Récentes",
    gal_desc: "Découvrez nos travaux avant/après et nos chantiers récemment livrés à Lake Country, Kelowna et Vernon.",
    gal_filter_all: "Tous les Projets",
    gal_filter_int: "Intérieurs",
    gal_filter_ext: "Extérieurs",
    gal_filter_cab: "Armoires",
    gal_filter_epoxy: "Époxy & Spécialités",

    // Why Noah
    why_tag: "La Différence Propriétaire-Artisan",
    why_title: "Pourquoi les Propriétaires Font Confiance à Noah",
    why_desc: "Peindre est une affaire personnelle. Chez Noah's Pro Painting, vous ne traitez jamais avec des sous-traitants anonymes.",
    why_1_title: "Responsabilité Directe du Propriétaire",
    why_1_desc: "Noah vous rencontre personnellement pour le devis, prépare les surfaces et applique chaque couche. Sa propre réputation est engagée sur chaque mur.",
    why_2_title: "Plus de 20 Ans de Maîtrise",
    why_2_desc: "Deux décennies de pratique pour perfectionner l'angle du pinceau, l'atomisation au pistolet et la chimie des supports sans aucune trace de raccord.",
    why_3_title: "Respect de Votre Foyer",
    why_3_desc: "Bâches propres, masquage rigoureux des meubles et planchers, dépoussiérage et nettoyage complet à la fin de chaque journée.",
    why_4_title: "Licence Officielle & Assurance WorkSafeBC",
    why_4_desc: "Couverture intégrale incluant 2 000 000 $ de responsabilité civile commerciale et inscription active à WorkSafeBC pour votre tranquillité absolue.",
    comp_header_metric: "Critère de Service",
    comp_header_franchise: "Grande Franchise / Sous-traitant",
    comp_header_noah: "Noah's Pro Painting",
    comp_row_1_m: "Qui exécute le travail ?",
    comp_row_1_f: "Étudiants saisonniers ou sous-traitants au rabais",
    comp_row_1_n: "Noah en personne (Maître artisan 20+ ans)",
    comp_row_2_m: "Communication",
    comp_row_2_f: "Centres d'appels, intermédiaires, délais",
    comp_row_2_n: "Ligne directe appel et SMS avec le propriétaire",
    comp_row_3_m: "Offre & Transparence",
    comp_row_3_f: "Surcoûts imprévus et tarifs rigides",
    comp_row_3_n: "10% de remise le jour même & devis clair",
    comp_row_4_m: "Garantie de Finition",
    comp_row_4_f: "Procédures de réclamation lentes",
    comp_row_4_n: "Garantie 100% de satisfaction personnelle",

    // Reviews
    rev_tag: "Témoignages Vérifiés",
    rev_title: "Ce Que Disent Nos Clients de l'Okanagan",
    rev_desc: "Avis vérifiés de clients résidant à Lake Country, Kelowna et Vernon.",
    rev_1_text: "« Noah a entièrement métamorphosé notre maison de Lake Country avant notre emménagement. Le laquage au pistolet des armoires ressemble à celui d'une cuisine de luxe italienne neuve. Ponctuel chaque matin, minutieux et d'une propreté exemplaire. »",
    rev_1_author: "David & Sarah M.",
    rev_1_loc: "Lake Country, C.-B.",
    rev_2_text: "« J'ai demandé trois devis, mais Noah a été le seul à m'expliquer clairement la préparation du support et à me conseiller la peinture idéale contre l'humidité. Et pouvoir profiter des 10% de réduction immédiate a été décisif ! »",
    rev_2_author: "Elena R.",
    rev_2_loc: "Kelowna, C.-B. (Mission)",
    rev_3_text: "« Honnête, professionnel et travailleur acharné. Noah a réparé les fissures de plâtre et repeint notre maison de ville complète y compris la cage d'escalier cathédrale. Aucun désordre, devis respecté et résultat exceptionnel. »",
    rev_3_author: "Marcus T.",
    rev_3_loc: "Vernon, C.-B.",

    // Service Areas
    area_tag: "Couverture Régionale",
    area_title: "Fièrement Présent Dans Toute la Vallée de l'Okanagan",
    area_desc: "Basé à Lake Country, nous intervenons avec promptitude à Kelowna, Vernon et les environs.",
    area_1: "Lake Country",
    area_1_sub: "Middle Bench, Carr's Landing, Oyama, Winfield & Okanagan Centre",
    area_2: "Kelowna",
    area_2_sub: "Centre-ville, Lower Mission, Upper Mission, Glenmore, Black Mountain & Rutland",
    area_3: "Vernon & Coldstream",
    area_3_sub: "Lac Kalamalka, Contreforts Silver Star, East Hill & Bella Vista",
    area_4: "West Kelowna & Peachland",
    area_4_sub: "Westbank, Rose Valley, Shannon Lake & Propriétés Riveraines",

    // FAQ
    faq_tag: "Réponses & Conseils",
    faq_title: "Questions Fréquemment Posées",
    faq_desc: "Tout ce que vous devez savoir pour préparer votre projet de peinture avec Noah.",
    faq_q1: "Engagez-vous des sous-traitants ou des étudiants ?",
    faq_a1: "Jamais. Noah est un artisan-propriétaire ayant plus de 20 ans d'expérience pratique. Lorsque vous engagez Noah's Pro Painting, c'est Noah lui-même qui supervise et exécute les travaux, garantissant une qualité irréprochable.",
    faq_q2: "Comment fonctionne la remise de 10% pour approbation le jour même ?",
    faq_a2: "Lorsque Noah vous remet son devis détaillé, confirmer votre accord le jour même applique automatiquement une déduction immédiate de 10% sur le montant total de la main-d'œuvre et du devis. Cela optimise notre calendrier et nos commandes de matériel.",
    faq_q3: "Quelles marques et gammes de peinture utilisez-vous ?",
    faq_a3: "Nous travaillons principalement avec les gammes supérieures de Benjamin Moore (Aura, Regal Select, Scuff-X) et Sherwin-Williams (Emerald, Duration). Ces formulations sont spécialement adaptées aux UV intenses et aux amplitudes thermiques de l'Okanagan.",
    faq_q4: "Êtes-vous licencié et assuré en Colombie-Britannique ?",
    faq_a4: "Oui, pleinement licencié en C.-B., couvert par une assurance responsabilité civile commerciale de 2 000 000 $ et enregistré auprès de WorkSafeBC.",
    faq_q5: "Combien de temps durent les travaux de peinture ?",
    faq_a5: "Une pièce standard nécessite 1 à 2 jours. Un intérieur de maison complet prend en moyenne 3 à 5 jours ouvrés, tandis qu'un extérieur complet demande de 4 à 7 jours selon la météo et la préparation nécessaire.",

    // Booking & Contact
    book_tag: "Lancez Votre Projet",
    book_title: "Demandez Votre Devis Gratuit et Sans Engagement",
    book_desc: "Bénéficiez de vos 10% de rabais le jour même et recevez un chiffrage rapide directement de Noah.",
    book_phone_label: "Téléphone / Texto Direct :",
    book_email_label: "Demande par Courriel :",
    book_location_label: "Atelier & Bureau :",
    book_jobber_title: "Client Actuel ou Déjà Enregistré ?",
    book_jobber_text: "Accédez à vos devis, rendez-vous, factures et suivi de chantier via notre portail client en ligne Jobber.",
    book_jobber_btn: "Accéder au Hub Client Jobber",

    // Form fields
    form_name: "Nom Complet *",
    form_phone: "Numéro de Téléphone *",
    form_email: "Adresse Courriel *",
    form_location: "Ville / Secteur *",
    form_service: "Prestation Souhaitée *",
    form_details: "Description du Projet & Calendrier",
    form_details_ph: "Indiquez les pièces, la superficie, l'état actuel ou vos délais souhaités...",
    form_submit: "Envoyer ma Demande de Devis",
    form_submitting: "Envoi en cours...",
    form_success: "Merci ! Noah a bien reçu votre demande et vous recontactera sous 24 heures.",

    // Footer
    foot_desc: "Entrepreneur peintre en bâtiment et finisseur d'élite au service de Lake Country, Kelowna et Vernon depuis plus de 20 ans.",
    foot_quick_links: "Liens Rapides",
    foot_services: "Prestations",
    foot_rights: "Tous droits réservés. Conçu avec minutie pour Noah's Pro Painting."
  }
};

// Current active language (default 'en', check URL param or localStorage)
const urlParams = new URLSearchParams(window.location.search);
let currentLang = urlParams.get('lang') || localStorage.getItem('npp_lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('npp_lang', lang);
  document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';
  
  // Update toggle button text
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? 'FR' : 'EN';
    langBtn.setAttribute('title', lang === 'en' ? 'Passer en Français' : 'Switch to English');
  }

  // Update all translatable elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update inputs placeholder
  const placeholders = document.querySelectorAll('[data-i18n-ph]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Re-calculate the cost estimator to update localized labels
  updateCostEstimate();
}

// ==========================================================================
// 2. Dark / Light Theme Engine
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('npp_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  setTheme(initialTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('npp_theme', theme);
  
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    const iconSpan = themeBtn.querySelector('.theme-icon');
    const labelSpan = themeBtn.querySelector('.theme-label');
    if (theme === 'dark') {
      if (iconSpan) iconSpan.textContent = '☀️';
      if (labelSpan) labelSpan.textContent = currentLang === 'fr' ? 'Clair' : 'Light';
      themeBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      if (iconSpan) iconSpan.textContent = '🌙';
      if (labelSpan) labelSpan.textContent = currentLang === 'fr' ? 'Sombre' : 'Dark';
      themeBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const target = current === 'dark' ? 'light' : 'dark';
  setTheme(target);
}

// ==========================================================================
// 3. Interactive Instant Cost Estimator
// ==========================================================================
let currentPrepFactor = 1.0;
let currentGradeFactor = 1.15;

function initCalculator() {
  const scopeSelect = document.getElementById('calcScope');
  const sizeRange = document.getElementById('calcSqFt');
  const sizeValDisplay = document.getElementById('calcSqFtVal');
  const prepBtns = document.querySelectorAll('.prep-btn');
  const gradeBtns = document.querySelectorAll('.grade-btn');

  if (sizeRange && sizeValDisplay) {
    sizeRange.addEventListener('input', (e) => {
      sizeValDisplay.textContent = `${Number(e.target.value).toLocaleString()} sq ft`;
      updateCostEstimate();
    });
  }

  if (scopeSelect) {
    scopeSelect.addEventListener('change', updateCostEstimate);
  }

  prepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      prepBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPrepFactor = parseFloat(btn.getAttribute('data-factor') || '1.0');
      updateCostEstimate();
    });
  });

  gradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      gradeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGradeFactor = parseFloat(btn.getAttribute('data-factor') || '1.15');
      updateCostEstimate();
    });
  });

  updateCostEstimate();
}

function updateCostEstimate() {
  const scopeSelect = document.getElementById('calcScope');
  const sizeRange = document.getElementById('calcSqFt');
  const priceDisplay = document.getElementById('calcEstimateResult');
  const savingsDisplay = document.getElementById('calcSavingsResult');

  if (!scopeSelect || !sizeRange || !priceDisplay) return;

  const sqFt = parseInt(sizeRange.value, 10) || 1200;
  const scope = scopeSelect.value;

  // Base rate per sq ft in CAD based on Okanagan trade rates
  let baseRate = 2.45; // default interior full
  if (scope === 'exterior') baseRate = 2.85;
  if (scope === 'cabinets') baseRate = 4.20; // specialized spray
  if (scope === 'epoxy') baseRate = 4.90;
  if (scope === 'ceiling') baseRate = 2.10;

  const rawEstimate = sqFt * baseRate * currentPrepFactor * currentGradeFactor;
  // Apply 10% same day discount
  const discounted = Math.round(rawEstimate * 0.9);
  const savings = Math.round(rawEstimate * 0.1);

  priceDisplay.textContent = `$${discounted.toLocaleString()} CAD`;
  if (savingsDisplay) {
    savingsDisplay.textContent = currentLang === 'fr' 
      ? `Économisez $${savings.toLocaleString()} avec l'offre du jour même`
      : `Save $${savings.toLocaleString()} with Same-Day Approval`;
  }
}

// ==========================================================================
// 4. Interactive Okanagan Color Palette Visualizer
// ==========================================================================
const swatches = {
  chantilly: {
    name: "Chantilly Lace (OC-65)",
    code: "#F5F5F0",
    textColor: "#0f172a",
    descEn: "Pure, brilliant gallery white with zero undertones. Brightens any living room.",
    descFr: "Blanc galerie pur et immaculé sans sous-ton. Illumine n'importe quel salon.",
    finish: "Benjamin Moore Regal Select (Eggshell)"
  },
  agreeable: {
    name: "Agreeable Gray (SW 7029)",
    code: "#D1CBC1",
    textColor: "#0f172a",
    descEn: "The quintessential warm greige that adapts effortlessly to day and evening light.",
    descFr: "Le grège chaleureux par excellence qui s'adapte à la lumière du jour et du soir.",
    finish: "Sherwin-Williams Emerald (Satin/Eggshell)"
  },
  balboa: {
    name: "Balboa Mist (OC-27)",
    code: "#DDD7CD",
    textColor: "#0f172a",
    descEn: "Soft, misty neutral that pairs impeccably with white oak and black accents.",
    descFr: "Neutre brumeux et doux qui s'accorde superbement avec le chêne clair et le noir.",
    finish: "Benjamin Moore Aura (Velvet Matte)"
  },
  halenavy: {
    name: "Hale Navy (HC-154)",
    code: "#2E3B46",
    textColor: "#ffffff",
    descEn: "Deep, classic architectural navy for dramatic accent walls and cabinetry.",
    descFr: "Bleu marine architectural profond pour des murs d'accent et des armoires saisissantes.",
    finish: "Benjamin Moore Scuff-X (Satin Trim)"
  },
  cedar: {
    name: "Warm Okanagan Cedar",
    code: "#9A5C32",
    textColor: "#ffffff",
    descEn: "Rich natural wood grain enhancement with durable UV-resistant clear coat.",
    descFr: "Sublimation du veinage naturel du bois avec vernis protecteur anti-UV durable.",
    finish: "Sikkens / Sansin Marine Exterior Stain"
  }
};

function initColorVisualizer() {
  const swatchButtons = document.querySelectorAll('.swatch-item-btn');
  const previewBox = document.getElementById('colorPreviewBox');
  const previewName = document.getElementById('previewColorName');
  const previewCode = document.getElementById('previewColorCode');
  const previewDesc = document.getElementById('previewColorDesc');

  swatchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const swatchKey = btn.getAttribute('data-swatch');
      const data = swatches[swatchKey];
      if (!data) return;

      if (previewBox) {
        previewBox.style.backgroundColor = data.code;
      }
      if (previewName) previewName.textContent = data.name;
      if (previewCode) previewCode.textContent = data.code;
      if (previewDesc) {
        previewDesc.textContent = currentLang === 'fr' ? data.descFr : data.descEn;
      }
    });
  });
}

// ==========================================================================
// 5. Gallery Filter Engine
// ==========================================================================
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================================================
// 6. FAQ Accordion
// ==========================================================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close all
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });
}

// ==========================================================================
// 7. Booking & Quote Form Handling
// ==========================================================================
function initForm() {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const origText = submitBtn.innerHTML;

    submitBtn.innerHTML = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending Request...';
    submitBtn.disabled = true;

    // Simulate sending & trigger toast
    setTimeout(() => {
      showToast(currentLang === 'fr' 
        ? "Merci ! Votre demande a été transmise directement à Noah. Réponse sous 24h."
        : "Thank you! Your quote request has been sent to Noah. He will contact you within 24 hours.");
      form.reset();
      submitBtn.innerHTML = origText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

// ==========================================================================
// 8. Mobile Menu Drawer
// ==========================================================================
function initMobileMenu() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');

  if (menuToggle && drawer) {
    menuToggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
      });
    });
  }
}

// ==========================================================================
// 9. Document Ready Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  // Controls listeners
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'en' ? 'fr' : 'en');
    });
  }

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  initCalculator();
  initColorVisualizer();
  initGalleryFilters();
  initFAQ();
  initForm();
  initMobileMenu();

  // Apply default or stored language
  applyLanguage(currentLang);
});
