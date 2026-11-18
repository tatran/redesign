import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const base = (process.env.SITE_URL || 'https://livingpixelstudios.com/redesign/bluewhalecommunications-redesign/').replace(/\/?$/, '/');
const booking = 'https://tidycal.com/nikkigillingham/30-minute-meeting';
const tide = 'https://bluewhalecommunications.ca/tide-chart-annual-communications-and-marketing-roadmap';
const blog = 'https://bluewhalecommunications.ca/blog/';
const copy = {
  en: {
    lang:'en-CA', locale:'en_CA', title:'Blue Whale Communications | Strategy, Content & Training',
    description:'Connect your leadership, team and audience. Communications advisory, marketing execution and training for nonprofits and growing businesses in BC and beyond.',
    skip:'Skip to content', home:'Blue Whale Communications home', navLabel:'Main navigation', menu:'Menu', language:'Choose language', dark:'Switch to dark mode', light:'Switch to light mode',
    nav:['What we do','Our approach','About us','Insights'], book:'Let’s talk', heroEyebrow:'Communications & marketing, with direction',
    heroTitle:'Find your voice.<br>Make <em>waves.</em>', heroIntro:'Big ideas deserve a clear message. We bring your leadership, your team, and your audience together — so your next move has real momentum.',
    freeCall:'Book a free discovery call', explore:'Explore our services', footnote:'Rooted in British Columbia. Connected across North America.',
    imageLabel:'A little clarity goes a long way', imageCaptionLabel:'The Blue Whale way', imageCaption:'Clear direction.<br>Lasting impact.', imageAlt:'Illustrative aerial view of a blue whale beneath teal ocean water',
    heroBottom:'A thoughtful strategy. A connected team. A stronger voice.', scroll:'Dive a little deeper',
    audienceLabel:'Good company for organizations doing good things.', audiences:['Nonprofits','Purpose-led organizations','Growing businesses'],
    introEyebrow:'See the whole ocean', introTitle:'A clear message.<br>A shared direction.<br><em>Real momentum.</em>',
    introLead:'Your message should feel like you. And it should travel well.',
    introBody:'From a conversation in the boardroom to the words on your website, every touchpoint shapes what people understand about your organization. Let’s give those moving parts a shared direction.',
    principles:['People first','Strategy before tactics','Built around you'],
    servicesEyebrow:'Find your way forward', servicesTitle:'Three ways to<br><em>make a difference.</em>', servicesIntro:'An experienced partner, a creative team, or a fresh perspective. Start where you need us.',
    services:[
      {name:'Advisory',kicker:'A clear course for your organization.',description:'Make room for the big picture. Bring experienced communications and marketing leadership to the decisions that shape your next chapter.',items:['Fractional CMO support','Communications strategy & messaging','Stakeholder communications'],action:'Talk strategy',icon:'compass'},
      {name:'Execution',kicker:'Good thinking, brought to life.',description:'Turn a clear plan into a consistent presence. Give your content a purpose and give your team the space to focus on their own work.',items:['Social media management','SEO-focused blogs & newsletters','Content & marketing funnels'],action:'Get hands-on support',icon:'waves'},
      {name:'Training',kicker:'Confidence that stays with your team.',description:'Build the skills to keep moving forward. Make space to ask questions, work through challenges, and put a new approach into practice.',items:['Workshops & corporate training','One-on-one coaching','Focused VIP days'],action:'Build your team’s skills',icon:'spark'}
    ],
    tideEyebrow:'A good place to begin', tideTitle:'Your goals.<br>Your course.<br><em>Your Tide Chart.</em>', tideBody:'A 15-month communications and marketing roadmap to help you see what comes next. Give your ideas a home, your priorities a sequence, and your team a shared point of reference.', tideAction:'Explore Your Tide Chart', tideCard:'A clearer course', tideCardTitle:'Your<br>Tide Chart', tideCardFooter:'Communications + marketing roadmap', months:'months',
    approachEyebrow:'How we work', approachTitle:'Meaningful progress<br>starts <em>beneath the surface.</em>',
    steps:[{title:'Listen to the whole story.',body:'What are you working toward? Who needs to be part of it? We begin with the questions that bring your real priorities into focus.'},{title:'Connect the dots.',body:'Bring your message, people, and channels into one conversation. Decide what matters, who owns it, and what happens next.'},{title:'Keep the current moving.',body:'Put the plan to work. Stay curious about what people respond to, and make room to learn and adjust along the way.'}],
    aboutEyebrow:'A partner in your corner', aboutTitle:'Big-picture thinking.<br><em>Human connection.</em>',
    aboutBody:'Led by Nikki Gillingham, Blue Whale brings communications advisory and creative delivery together. Nikki’s background spans internal communications, change management, and stakeholder engagement.',
    aboutBody2:'Jessica Walley leads client support and social media management. Together, the team connects the thinking behind your message with the everyday work of sharing it.',
    aboutCaption:'Real people. Thoughtful work. A shared direction.', nikkiAlt:'Nikki Gillingham working at a laptop', teamAlt:'Two members of the Blue Whale team in conversation', founderRole:'Founder · Communications & marketing leadership',
    testimonialEyebrow:'In good company', quote:'BWC keeps my email campaigns delightful and on target.', quoteName:'Candace Froese',quoteCompany:'6K Soap · Client testimonial',
    faqEyebrow:'Before we dive in', faqTitle:'A few good<br><em>questions.</em>', faqIntro:'Finding the right partner starts with a conversation. Here are a few things you may be wondering.',
    faqs:[
      ['Where should we start?','Book a free discovery call. Bring your goals, your questions, and the parts that feel a little tangled. We can discuss which kind of support makes sense for your organization.'],
      ['Can we work with our existing team?','Yes. Advisory can support your internal team, execution can take content off your plate, and training can build skills within your organization. The mix depends on what you need.'],
      ['Who do you work with?','Blue Whale works with nonprofits, mission-driven organizations, and growing businesses. The firm is based in British Columbia and works with organizations across North America.'],
      ['Can we begin with a roadmap?','Your Tide Chart is a 15-month communications and marketing roadmap for organizations that want a clear direction before considering ongoing support. Explore the resource or ask about it on your call.']
    ],
    contactEyebrow:'Your next chapter starts here', contactTitle:'Let’s make<br><em>some waves.</em>', contactBody:'Tell us what you’re building. We’ll bring fresh eyes, thoughtful questions, and a place to start.', contactNote:'A free 30-minute conversation. A little space for the big picture.',
    footerLinks:['Services','Your Tide Chart','Read the blog'], footerNote:'Communications & marketing advisory · British Columbia, Canada', copyright:'© 2026 Blue Whale Communications', back:'Back to top', englishResource:'',
    emailSubject:'Nikki, a fresh website direction for Blue Whale', emailHello:'Hi Nikki,',
    emailP1:'I put together a website redesign for Blue Whale Communications, built around your advisory, execution, and training services. The idea is to give visitors a clear sense of how you help, then an easy path to your discovery call.',
    emailP2:'The concept includes full English and French pages, light and dark themes, a mobile-friendly layout, and localized SEO metadata. Your Tide Chart and blog remain easy to find, and booking connects to your existing TidyCal page.',
    emailCta:'Preview the redesign', emailP3:'I’d love to hear how the direction feels to you and what you’d want to refine. Would you be open to a brief conversation?', emailSignoff:'Thanks,', emailLabel:'Website concept · Prepared for Blue Whale Communications',
  },
  fr: {
    lang:'fr-CA', locale:'fr_CA', title:'Blue Whale Communications | Stratégie, contenu et formation',
    description:'Rapprochez votre direction, votre équipe et vos publics. Conseil en communication, marketing et formation pour les OBNL et les entreprises en croissance.',
    skip:'Aller au contenu', home:'Accueil de Blue Whale Communications', navLabel:'Navigation principale', menu:'Menu', language:'Choisir la langue', dark:'Activer le thème sombre', light:'Activer le thème clair',
    nav:['Nos services','Notre approche','L’équipe','Le blogue'],book:'Parlons-en', heroEyebrow:'Communication et marketing, avec un cap',
    heroTitle:'Trouvez votre voix.<br>Créez des <em>vagues.</em>', heroIntro:'Les grandes idées méritent un message clair. Nous rapprochons votre direction, votre équipe et vos publics pour donner de l’élan à vos projets.',
    freeCall:'Réserver un appel découverte', explore:'Découvrir nos services', footnote:'Ancrés en Colombie-Britannique. Présents en Amérique du Nord.',
    imageLabel:'Un peu de clarté peut tout changer',imageCaptionLabel:'L’approche Blue Whale',imageCaption:'Un cap clair.<br>Un effet durable.',imageAlt:'Vue aérienne illustrative d’une baleine bleue sous une eau turquoise',
    heroBottom:'Une stratégie réfléchie. Une équipe unie. Une voix plus forte.',scroll:'Aller plus loin',
    audienceLabel:'Aux côtés des organisations qui font avancer les choses.',audiences:['OBNL','Organisations engagées','Entreprises en croissance'],
    introEyebrow:'Voir tout l’océan',introTitle:'Un message clair.<br>Un cap commun.<br><em>Un nouvel élan.</em>',introLead:'Votre message doit vous ressembler. Et bien circuler.',introBody:'D’une réunion de direction aux mots sur votre site, chaque échange façonne la perception de votre organisation. Donnons à toutes ces pièces une direction commune.',principles:['L’humain d’abord','Un cap stratégique','À votre mesure'],
    servicesEyebrow:'Trouvez votre voie',servicesTitle:'Trois façons de<br><em>faire avancer les choses.</em>',servicesIntro:'Un partenaire expérimenté, une équipe créative ou un regard neuf. Commençons là où vous en avez besoin.',
    services:[
      {name:'Conseil',kicker:'Un cap clair pour votre organisation.',description:'Prenez du recul pour voir l’ensemble. Faites place à une expertise en communication et en marketing dans les décisions qui préparent la suite.',items:['Direction marketing à temps partagé','Stratégie de communication et messages','Communication avec les parties prenantes'],action:'Parlons stratégie',icon:'compass'},
      {name:'Réalisation',kicker:'De bonnes idées qui prennent vie.',description:'Transformez un plan clair en une présence cohérente. Donnez un sens à votre contenu et du temps à votre équipe pour se concentrer sur son travail.',items:['Gestion des médias sociaux','Articles optimisés pour le SEO et infolettres','Contenu et parcours marketing'],action:'Passer à l’action',icon:'waves'},
      {name:'Formation',kicker:'Une confiance qui reste dans l’équipe.',description:'Développez les compétences pour avancer. Prenez le temps de poser vos questions, de relever vos défis et de mettre une nouvelle approche en pratique.',items:['Ateliers et formations en entreprise','Accompagnement individuel','Journées VIP ciblées'],action:'Développer vos compétences',icon:'spark'}
    ],
    tideEyebrow:'Un bon point de départ',tideTitle:'Vos objectifs.<br>Votre cap.<br><em>Your Tide Chart.</em>',tideBody:'Une feuille de route en communication et en marketing sur 15 mois pour y voir plus clair. Donnez une place à vos idées, un ordre à vos priorités et un repère commun à votre équipe.',tideAction:'Découvrir Your Tide Chart',tideCard:'Un cap plus clair',tideCardTitle:'Your<br>Tide Chart',tideCardFooter:'Feuille de route · communication et marketing',months:'mois',
    approachEyebrow:'Notre approche',approachTitle:'Pour avancer vraiment,<br>regardons <em>sous la surface.</em>',
    steps:[{title:'Écouter toute l’histoire.',body:'Que souhaitez-vous accomplir ? Qui doit prendre part au projet ? Nous commençons par les questions qui font ressortir vos véritables priorités.'},{title:'Relier les points.',body:'Réunissez vos messages, vos équipes et vos canaux autour d’une même table. Déterminez ce qui compte, les responsabilités et la prochaine étape.'},{title:'Entretenir le mouvement.',body:'Mettez le plan en action. Restez à l’écoute de vos publics et gardez la souplesse nécessaire pour apprendre et ajuster le cap.'}],
    aboutEyebrow:'Un partenaire à vos côtés',aboutTitle:'Une vue d’ensemble.<br><em>Un lien humain.</em>',aboutBody:'Sous la direction de Nikki Gillingham, Blue Whale réunit conseil en communication et création de contenu. Le parcours de Nikki couvre la communication interne, la gestion du changement et les relations avec les parties prenantes.',aboutBody2:'Jessica Walley dirige le soutien à la clientèle et la gestion des médias sociaux. Ensemble, l’équipe relie la réflexion derrière votre message au travail quotidien de diffusion.',aboutCaption:'Des gens vrais. Un travail réfléchi. Un cap commun.',nikkiAlt:'Nikki Gillingham travaillant à son ordinateur portable',teamAlt:'Deux membres de l’équipe Blue Whale en conversation',founderRole:'Fondatrice · Direction en communication et marketing',
    testimonialEyebrow:'En bonne compagnie',quote:'BWC garde mes campagnes courriel agréables et bien ciblées.',quoteName:'Candace Froese',quoteCompany:'6K Soap · Témoignage traduit de l’anglais',
    faqEyebrow:'Avant de plonger',faqTitle:'Quelques bonnes<br><em>questions.</em>',faqIntro:'Trouver le bon partenaire commence par une conversation. Voici quelques réponses pour vous guider.',
    faqs:[
      ['Par où commencer ?','Réservez un appel découverte gratuit. Présentez vos objectifs, vos questions et les éléments qui vous semblent complexes. Nous pourrons discuter du soutien qui convient à votre organisation.'],
      ['Pouvez-vous collaborer avec notre équipe ?','Oui. Le conseil peut soutenir votre équipe interne, la réalisation peut vous libérer de la production de contenu et la formation peut renforcer vos compétences. La combinaison dépend de vos besoins.'],
      ['Avec qui travaillez-vous ?','Blue Whale accompagne les OBNL, les organisations engagées et les entreprises en croissance. L’agence est établie en Colombie-Britannique et travaille avec des organisations partout en Amérique du Nord.'],
      ['Peut-on commencer par une feuille de route ?','Your Tide Chart est une feuille de route en communication et en marketing sur 15 mois, conçue pour les organisations qui souhaitent établir un cap avant d’envisager un accompagnement continu. Découvrez cette ressource ou parlez-en lors de votre appel.']
    ],
    contactEyebrow:'La suite commence ici',contactTitle:'Et si on créait<br><em>des vagues ?</em>',contactBody:'Parlez-nous de vos projets. Nous apporterons un regard neuf, de bonnes questions et un point de départ.',contactNote:'Une conversation gratuite de 30 minutes pour prendre du recul.',
    footerLinks:['Services','Your Tide Chart','Lire le blogue'],footerNote:'Conseil en communication et marketing · Colombie-Britannique, Canada',copyright:'© 2026 Blue Whale Communications',back:'Haut de page',englishResource:' <span class="resource-language">(en anglais)</span>',
    emailSubject:'Nikki, une nouvelle direction Web pour Blue Whale',emailHello:'Bonjour Nikki,',emailP1:'J’ai préparé une nouvelle version du site de Blue Whale Communications, axée sur vos services de conseil, de réalisation et de formation. L’idée est de montrer clairement comment vous accompagnez vos clients, puis de faciliter la réservation d’un appel découverte.',emailP2:'La maquette comprend des pages complètes en anglais et en français, des thèmes clair et sombre, une mise en page adaptée aux appareils mobiles et des métadonnées SEO propres à chaque langue. Your Tide Chart et le blogue restent faciles à trouver, et la réservation mène à votre page TidyCal actuelle.',emailCta:'Voir la maquette en français',emailP3:'J’aimerais connaître vos impressions et les éléments que vous souhaiteriez affiner. Seriez-vous disponible pour une brève conversation ?',emailSignoff:'Merci,',emailLabel:'Concept de site Web · Préparé pour Blue Whale Communications',
  }
};
const arrow = (name='arrow') => `<svg class="icon" aria-hidden="true"><use href="#${name}"/></svg>`;
const brand = (c) => `<a class="brand" href="#top" aria-label="${c.home}"><svg class="brand-mark" viewBox="0 0 48 44" aria-hidden="true"><path d="M3 7c9-2 17 3 21 12C28 10 36 5 45 7c-1 15-9 25-21 29C12 32 4 22 3 7Z" fill="currentColor"/><path d="M24 19v17" stroke="var(--bg)" stroke-width="1.5"/></svg><span class="brand-name">blue whale<small>Communications</small></span></a>`;
const symbols = `<svg class="symbol-library" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><symbol id="arrow" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6"/></symbol><symbol id="up-right" viewBox="0 0 24 24"><path d="m6 18 12-12M6 6h12v12"/></symbol><symbol id="waves" viewBox="0 0 40 40"><path d="M3 12c6-8 10 8 17 0s11 8 17 0M3 20c6-8 10 8 17 0s11 8 17 0M3 28c6-8 10 8 17 0s11 8 17 0"/></symbol><symbol id="compass" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16"/><path d="m27 13-4 10-10 4 4-10 10-4ZM20 1v6m0 26v6M1 20h6m26 0h6"/></symbol><symbol id="spark" viewBox="0 0 40 40"><path d="M20 2c0 12-6 18-18 18 12 0 18 6 18 18 0-12 6-18 18-18C26 20 20 14 20 2Z"/></symbol><symbol id="check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></symbol><symbol id="moon" viewBox="0 0 24 24"><path d="M20 15A8 8 0 0 1 9 4a8 8 0 1 0 11 11Z"/></symbol><symbol id="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></symbol><symbol id="menu" viewBox="0 0 24 24"><path d="M3 7h18M3 16h18"/></symbol></svg>`;

function render(c, lang) {
  const fr = lang === 'fr';
  const relative = fr ? '../' : '';
  const canonical = base + (fr ? 'fr/' : '');
  const schema = {'@context':'https://schema.org','@graph':[
    {'@type':'Organization','@id':`${base}#organization`,name:'Blue Whale Communications',url:base,description:c.description,areaServed:{'@type':'Place',name:'North America'},address:{'@type':'PostalAddress',addressRegion:'British Columbia',addressCountry:'CA'},founder:{'@type':'Person',name:'Nikki Gillingham'},logo:`${base}assets/favicon.svg`,sameAs:['https://bluewhalecommunications.ca/']},
    {'@type':'WebSite','@id':`${base}#website`,url:base,name:'Blue Whale Communications',inLanguage:['en-CA','fr-CA'],publisher:{'@id':`${base}#organization`}},
    {'@type':'WebPage','@id':`${canonical}#webpage`,url:canonical,name:c.title,description:c.description,inLanguage:c.lang,isPartOf:{'@id':`${base}#website`},about:{'@id':`${base}#organization`}},
    ...c.services.map((service,i)=>({'@type':'Service','@id':`${canonical}#service-${i+1}`,name:service.name,description:service.description,provider:{'@id':`${base}#organization`},url:`${canonical}#services`}))
  ]};
  return `<!doctype html>
<html lang="${c.lang}" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7f6ef">
  <title>${c.title}</title>
  <meta name="description" content="${c.description}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en-CA" href="${base}">
  <link rel="alternate" hreflang="fr-CA" href="${base}fr/">
  <link rel="alternate" hreflang="x-default" href="${base}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Blue Whale Communications">
  <meta property="og:locale" content="${c.locale}">
  <meta property="og:locale:alternate" content="${fr?'en_CA':'fr_CA'}">
  <meta property="og:title" content="${c.title}">
  <meta property="og:description" content="${c.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${base}assets/social-card.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Blue Whale Communications — Communications & marketing">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${c.title}">
  <meta name="twitter:description" content="${c.description}">
  <meta name="twitter:image" content="${base}assets/social-card.jpg">
  <link rel="icon" href="${relative}assets/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="${relative}assets/manrope-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="${relative}assets/instrument-serif-normal.woff2" as="font" type="font/woff2" crossorigin>
  <script src="${relative}theme.js"></script>
  <link rel="stylesheet" href="${relative}styles.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body id="top">
${symbols}
<a class="skip-link" href="#main">${c.skip}</a>
<header class="site-header"><div class="container header-inner">
  ${brand(c)}
  <nav class="main-nav" id="main-nav" aria-label="${c.navLabel}">
    <a href="#services">${c.nav[0]}</a><a href="#approach">${c.nav[1]}</a><a href="#about">${c.nav[2]}</a><a href="${blog}"${fr?' lang="en"':''}>${c.nav[3]}${fr?' ↗':''}</a>
  </nav>
  <div class="header-controls">
    <div class="language-switch" role="group" aria-label="${c.language}"><${fr?'a href="../" hreflang="en-CA" lang="en"':'span aria-current="page"'}>EN</${fr?'a':'span'}><span class="language-divider" aria-hidden="true">/</span><${fr?'span aria-current="page"':'a href="fr/" hreflang="fr-CA" lang="fr"'}>FR</${fr?'span':'a'}></div>
    <button class="theme-toggle" type="button" aria-label="${c.dark}" aria-pressed="false" data-dark-label="${c.dark}" data-light-label="${c.light}"><span class="moon">${arrow('moon')}</span><span class="sun">${arrow('sun')}</span></button>
    <a class="button button-primary header-cta" href="${booking}">${c.book} ${arrow('up-right')}</a>
    <button class="menu-toggle" type="button" aria-label="${c.menu}" aria-expanded="false" aria-controls="main-nav"><span>${c.menu}</span>${arrow('menu')}</button>
  </div>
</div></header>
<main id="main" tabindex="-1">
  <section class="hero" aria-labelledby="hero-heading"><div class="container">
    <div class="hero-grid"><div class="hero-copy">
      <p class="eyebrow">${c.heroEyebrow}</p>
      <h1 id="hero-heading">${c.heroTitle}</h1>
      <p class="hero-intro">${c.heroIntro}</p>
      <div class="hero-actions"><a class="button button-primary" href="${booking}">${c.freeCall} ${arrow('up-right')}</a><a class="text-link" href="#services">${c.explore} ${arrow()}</a></div>
      <p class="hero-footnote">${arrow('waves')}${c.footnote}</p>
    </div><div class="hero-art">
      <img class="hero-photo" src="${relative}assets/blue-whale.jpg" width="1122" height="1402" alt="${c.imageAlt}" fetchpriority="high">
      <span class="image-label" aria-hidden="true">${c.imageLabel}</span>
      <div class="image-caption"><div class="caption-top"><span>${c.imageCaptionLabel}</span>${arrow('spark')}</div><p>${c.imageCaption}</p></div>
    </div></div>
    <div class="hero-bottom"><span>${c.heroBottom}</span><a class="scroll-cue" href="#perspective">${c.scroll} ${arrow()}</a></div>
  </div></section>
  <div class="audience-band"><div class="container audience-inner"><p>${c.audienceLabel}</p><div class="audiences">${c.audiences.map((a,i)=>`${i?'<span class="spark" aria-hidden="true">✳</span>':''}<span>${a}</span>`).join('')}</div></div></div>
  <section class="section perspective" id="perspective" aria-labelledby="perspective-title"><div class="container intro-grid">
    <div><p class="eyebrow">${c.introEyebrow}</p><h2 id="perspective-title">${c.introTitle}</h2></div>
    <div class="intro-copy"><p class="lead">${c.introLead}</p><p>${c.introBody}</p><div class="principles">${c.principles.map(p=>`<span>${arrow('check')}${p}</span>`).join('')}</div></div>
  </div></section>
  <section class="section services" id="services" aria-labelledby="services-title"><div class="container">
    <div class="section-heading"><div><p class="eyebrow">${c.servicesEyebrow}</p><h2 id="services-title">${c.servicesTitle}</h2></div><p>${c.servicesIntro}</p></div>
    <div class="services-grid">${c.services.map((s,i)=>`<article class="service" id="service-${i+1}"><div class="service-top"><span class="service-number">0${i+1} /</span>${arrow(s.icon)}</div><h3>${s.name}</h3><p class="service-kicker">${s.kicker}</p><p class="service-description">${s.description}</p><ul>${s.items.map(item=>`<li>${item}</li>`).join('')}</ul><a class="text-link" href="${booking}">${s.action} ${arrow('up-right')}</a></article>`).join('')}</div>
  </div></section>
  <section class="tide-section" id="tide-chart" aria-labelledby="tide-title"><div class="container tide-grid">
    <div class="tide-copy"><p class="eyebrow">${c.tideEyebrow}</p><h2 id="tide-title">${c.tideTitle}</h2><p>${c.tideBody}</p><a class="button" href="${tide}">${c.tideAction} ${arrow('up-right')}</a>${fr?'<p style="font-size:9px;margin-top:12px;margin-bottom:0">Ressource en anglais</p>':''}</div>
    <div class="tide-art" aria-hidden="true"><div class="tide-card"><span>Blue Whale Communications</span><h3>${c.tideCardTitle}</h3><svg class="wave-lines" viewBox="0 0 300 60"><path d="M-5 20Q32 0 70 20t75 0 75 0 85 0M-5 30Q32 10 70 30t75 0 75 0 85 0M-5 40Q32 20 70 40t75 0 75 0 85 0M-5 50Q32 30 70 50t75 0 75 0 85 0"/></svg><p>${c.tideCardFooter}</p></div><div class="tide-stamp"><strong>15</strong><span>${c.months}</span></div></div>
  </div></section>
  <section class="section approach" id="approach" aria-labelledby="approach-title"><div class="container">
    <div class="approach-heading"><p class="eyebrow">${c.approachEyebrow}</p><h2 id="approach-title">${c.approachTitle}</h2></div>
    <div class="approach-grid">${c.steps.map((s,i)=>`<article class="approach-step"><span class="step-number" aria-hidden="true">0${i+1}</span><h3>${s.title}</h3><p>${s.body}</p></article>`).join('')}</div>
  </div></section>
  <section class="section about" id="about" aria-labelledby="about-title"><div class="container about-grid">
    <div class="about-images"><img class="about-main" src="${relative}assets/nikki-working.webp" alt="${c.nikkiAlt}" width="1600" height="1065" loading="lazy"><img class="team-photo" src="${relative}assets/team.webp" alt="${c.teamAlt}" width="1600" height="1065" loading="lazy"><p class="about-caption">${c.aboutCaption}</p></div>
    <div class="about-copy"><p class="eyebrow">${c.aboutEyebrow}</p><h2 id="about-title">${c.aboutTitle}</h2><p>${c.aboutBody}</p><p>${c.aboutBody2}</p><div class="about-signoff"><strong>Nikki Gillingham</strong><span>${c.founderRole}</span></div></div>
  </div></section>
  <section class="testimonial" aria-label="${c.testimonialEyebrow}"><div class="container testimonial-inner"><p class="eyebrow">${c.testimonialEyebrow}</p><blockquote><span class="quote-mark" aria-hidden="true">“</span><p>${c.quote}</p><cite>${c.quoteName}<span>${c.quoteCompany}</span></cite></blockquote></div></section>
  <section class="section faq" aria-labelledby="faq-title"><div class="container faq-grid"><div class="faq-intro"><p class="eyebrow">${c.faqEyebrow}</p><h2 id="faq-title">${c.faqTitle}</h2><p>${c.faqIntro}</p></div><div class="faq-list">${c.faqs.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('')}</div></div></section>
  <section class="contact" id="contact" aria-labelledby="contact-title"><svg viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="500" cy="300" rx="300" ry="260"/><ellipse cx="500" cy="300" rx="270" ry="235"/><ellipse cx="500" cy="300" rx="240" ry="210"/><ellipse cx="500" cy="300" rx="210" ry="185"/><ellipse cx="500" cy="300" rx="180" ry="160"/></svg><div class="container"><p class="eyebrow">${c.contactEyebrow}</p><h2 id="contact-title">${c.contactTitle}</h2><p>${c.contactBody}</p><a class="button" href="${booking}">${c.freeCall} ${arrow('up-right')}</a><span class="contact-note">${c.contactNote}</span></div></section>
</main>
<footer class="site-footer"><div class="container"><div class="footer-main">${brand(c)}<div class="footer-links"><a href="#services">${c.footerLinks[0]}</a><a href="${tide}">${c.footerLinks[1]}${c.englishResource}</a><a href="${blog}">${c.footerLinks[2]}${c.englishResource} ↗</a></div></div><div class="footer-bottom"><p>${c.copyright}<br>${c.footerNote}</p><a href="#top">${c.back} ${arrow()}</a></div></div></footer>
</body></html>
`;
}

function emailHtml(c,lang) {
  const link=base+(lang==='fr'?'fr/':'');
  return `<!doctype html><html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${c.emailSubject}</title></head><body style="margin:0;background:#f2f1e9;font-family:Arial,sans-serif;color:#123f3d"><div style="display:none;max-height:0;overflow:hidden;opacity:0">${c.emailLabel}</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:32px 16px"><table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;margin:auto;background:#fffef9"><tr><td style="padding:29px 36px;background:#123f3d;color:#fffef9"><p style="margin:0;font-family:Georgia,serif;font-size:27px">blue whale <span style="color:#ed9db8">↗</span></p><p style="margin:9px 0 0;font-size:10px;letter-spacing:1px">${c.emailLabel}</p></td></tr><tr><td style="padding:32px 36px;font-size:15px;line-height:1.8"><p style="margin-top:0">${c.emailHello}</p><p>${c.emailP1}</p><p>${c.emailP2}</p><table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0"><tr><td style="background:#123f3d;border-radius:3px"><a href="${link}" style="display:inline-block;color:#fffef9;padding:14px 22px;text-decoration:none;font-size:14px;font-weight:bold">${c.emailCta} ↗</a></td></tr></table><p>${c.emailP3}</p><p>${c.emailSignoff}<br><strong>Luboš Kostroš</strong><br>LivingPixel Studios<br><a href="mailto:info@livingpixelstudios.com" style="color:#123f3d">info@livingpixelstudios.com</a></p></td></tr></table></td></tr></table></body></html>`;
}

await mkdir(join(root,'fr'),{recursive:true});
for (const lang of ['en','fr']) {
  await writeFile(join(root,lang==='fr'?'fr/index.html':'index.html'),render(copy[lang],lang));
  await writeFile(join(root,lang==='fr'?'promotional-email-fr.html':'promotional-email.html'),emailHtml(copy[lang],lang));
}
await writeFile(join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${['','fr/'].map(path=>`\n  <url><loc>${base}${path}</loc><xhtml:link rel="alternate" hreflang="en-CA" href="${base}"/><xhtml:link rel="alternate" hreflang="fr-CA" href="${base}fr/"/><xhtml:link rel="alternate" hreflang="x-default" href="${base}"/></url>`).join('')}\n</urlset>\n`);
await writeFile(join(root,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${base}sitemap.xml\n`);
const promoEmail = `# Blue Whale Communications — promotional email drafts\n\nUnsent outreach drafts. Recipient: Nikki Gillingham. No recipient email address has been verified.\n\n${['en','fr'].map(lang=>{const c=copy[lang];return `## ${lang==='en'?'English':'Français'}\n\n**${lang==='en'?'Subject':'Objet'}:** ${c.emailSubject}\n\n${c.emailHello}\n\n${c.emailP1}\n\n${c.emailP2}\n\n[${c.emailCta}](${base}${lang==='fr'?'fr/':''})\n\n${c.emailP3}\n\n${c.emailSignoff}\n\nLuboš Kostroš · LivingPixel Studios\n\ninfo@livingpixelstudios.com\n`;}).join('\n')}`;
await writeFile(join(root,'promo-email.md'),promoEmail.trimEnd()+'\n');
console.log('Generated English and French pages, email drafts, sitemap, and robots.txt.');
