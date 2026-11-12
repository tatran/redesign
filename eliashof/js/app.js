/**
 * Biobauernhof Eliashof - Interactive Alpine Application
 * Handles: Theme (Light default / Dark), Bilingual i18n (DE/EN),
 * Dynamic Hero Slider, Live Rate Calculator, Accommodations Filter,
 * Lightbox Gallery, Leaflet Alpine Map, FAQ Accordion, Inquiry Form & Modals.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. Language & Theme State
  // ------------------------------------------------------------------------
  let currentLang = localStorage.getItem('eliashof_lang') || 'de';
  // User explicitly requested Light as default theme!
  let currentTheme = localStorage.getItem('eliashof_theme') || 'light';

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langToggleMobile = document.getElementById('lang-toggle-mobile');
  const themeIcon = document.getElementById('theme-icon');
  const langLabel = document.getElementById('lang-label');

  // Apply Theme
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('eliashof_theme', theme);
    const isDark = theme === 'dark';
    if (themeIcon) {
      themeIcon.textContent = isDark ? '☀️' : '🌙';
    }
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');
    if (mobileThemeIcon) {
      mobileThemeIcon.textContent = isDark ? '☀️' : '🌙';
    }
  }

  // Apply Language
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('eliashof_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    if (langLabel) {
      langLabel.textContent = lang === 'de' ? 'EN 🇬🇧' : 'DE 🇦🇹';
    }
    const mobileLangLabel = document.getElementById('mobile-lang-label');
    if (mobileLangLabel) {
      mobileLangLabel.textContent = lang === 'de' ? 'EN 🇬🇧' : 'DE 🇦🇹';
    }

    const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {};

    // Elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Titles / tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });

    // Recalculate price in current language
    calculatePrice();
  }

  // Init Theme & Lang
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', () => {
      applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'de' ? 'en' : 'de');
    });
  }
  if (langToggleMobile) {
    langToggleMobile.addEventListener('click', () => {
      applyLanguage(currentLang === 'de' ? 'en' : 'de');
    });
  }

  // ------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileClose = document.getElementById('mobile-drawer-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileDrawer);
  }

  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // ------------------------------------------------------------------------
  // 3. Hero Background Slideshow
  // ------------------------------------------------------------------------
  const heroSlides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  if (heroSlides.length > 1) {
    setInterval(() => {
      heroSlides[currentSlide].classList.remove('is-active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('is-active');
    }, 5500);
  }

  // ------------------------------------------------------------------------
  // 4. Fast Finder Bar Interactivity
  // ------------------------------------------------------------------------
  const finderForm = document.getElementById('fast-finder-form');
  if (finderForm) {
    finderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const arrival = document.getElementById('finder-arrival').value;
      const departure = document.getElementById('finder-departure').value;
      const type = document.getElementById('finder-type').value;
      const guests = document.getElementById('finder-guests').value;

      // Fill into inquiry form
      const inqArrival = document.getElementById('inq-arrival');
      const inqDeparture = document.getElementById('inq-departure');
      const inqAccom = document.getElementById('inq-accommodation');
      const inqAdults = document.getElementById('inq-adults');

      if (inqArrival && arrival) inqArrival.value = arrival;
      if (inqDeparture && departure) inqDeparture.value = departure;
      if (inqAccom && type) inqAccom.value = type;
      if (inqAdults && guests) inqAdults.value = guests;

      // Scroll to inquiry section
      const inqSection = document.getElementById('inquiry');
      if (inqSection) {
        inqSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. Accommodations Filter Tabs
  // ------------------------------------------------------------------------
  const accTabBtns = document.querySelectorAll('.acc-tab-btn');
  const accCards = document.querySelectorAll('.acc-card');

  accTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      accTabBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');
      accCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 6. Interactive Live Rate & Booking Calculator
  // ------------------------------------------------------------------------
  const calcCategory = document.getElementById('calc-category');
  const calcSeason = document.getElementById('calc-season');
  const calcGuests = document.getElementById('calc-guests');
  const calcNights = document.getElementById('calc-nights');
  const calcNightsVal = document.getElementById('calc-nights-val');

  const calcBaseRateEl = document.getElementById('calc-base-rate');
  const calcNightsSummaryEl = document.getElementById('calc-nights-summary');
  const calcExtraSummaryEl = document.getElementById('calc-extra-summary');
  const calcTotalPriceEl = document.getElementById('calc-total-price');
  const calcApplyBtn = document.getElementById('calc-apply-btn');

  function calculatePrice() {
    if (!calcCategory || !calcSeason || !calcGuests || !calcNights) return;

    const cat = calcCategory.value;
    const season = calcSeason.value; // 'summer' or 'winter'
    const guests = parseInt(calcGuests.value, 10) || 2;
    const nights = parseInt(calcNights.value, 10) || 1;

    if (calcNightsVal) {
      calcNightsVal.textContent = `${nights} ${currentLang === 'de' ? (nights === 1 ? 'Nacht' : 'Nächte') : (nights === 1 ? 'Night' : 'Nights')}`;
    }

    let ratePerNight = 0;
    let baseNote = '';
    let extraNote = currentLang === 'de' ? 'Keine' : 'None';

    if (cat === 'zimmer') {
      // 45 EUR per person per night (summer or winter)
      ratePerNight = 45 * guests;
      baseNote = `€ 45,- × ${guests} ${currentLang === 'de' ? 'Pers.' : 'guests'}`;
    } else if (cat === 'app_og') {
      // Appartement OG (90m², up to 6 P.)
      // Summer: 2 P = €100, 4 P = €150, 6 P = €220. (Other guests: +€20/day)
      // Winter: 4 P = €170, 6 P = €250.
      if (season === 'summer') {
        if (guests <= 2) {
          ratePerNight = 100;
          baseNote = '€ 100,- (2 Pers.)';
        } else if (guests <= 4) {
          ratePerNight = 150;
          baseNote = '€ 150,- (4 Pers.)';
        } else {
          ratePerNight = 220;
          baseNote = '€ 220,- (6 Pers.)';
        }
      } else {
        // Winter
        if (guests <= 4) {
          ratePerNight = 170;
          baseNote = '€ 170,- (4 Pers.)';
        } else {
          ratePerNight = 250;
          baseNote = '€ 250,- (6 Pers.)';
        }
      }
    } else if (cat === 'app_dg') {
      // Appartement DG (70m², up to 4 P.)
      // Summer: 2 P = €100, 4 P = €150
      // Winter: 4 P = €170
      if (season === 'summer') {
        if (guests <= 2) {
          ratePerNight = 100;
          baseNote = '€ 100,- (2 Pers.)';
        } else {
          ratePerNight = 150;
          baseNote = '€ 150,- (4 Pers.)';
        }
      } else {
        ratePerNight = 170;
        baseNote = '€ 170,- (bis 4 Pers.)';
      }
    }

    const totalPrice = ratePerNight * nights;

    if (calcBaseRateEl) calcBaseRateEl.textContent = `€ ${ratePerNight},- / ${currentLang === 'de' ? 'Nacht' : 'night'} (${baseNote})`;
    if (calcNightsSummaryEl) calcNightsSummaryEl.textContent = `${nights} × € ${ratePerNight},-`;
    if (calcExtraSummaryEl) calcExtraSummaryEl.textContent = extraNote;
    if (calcTotalPriceEl) calcTotalPriceEl.textContent = `€ ${totalPrice.toLocaleString()},-`;
  }

  if (calcCategory) calcCategory.addEventListener('change', calculatePrice);
  if (calcSeason) calcSeason.addEventListener('change', calculatePrice);
  if (calcGuests) calcGuests.addEventListener('change', calculatePrice);
  if (calcNights) {
    calcNights.addEventListener('input', calculatePrice);
  }

  // Pre-fill button for accommodation cards
  document.querySelectorAll('.btn-calc-prefill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = btn.getAttribute('data-category');
      if (calcCategory && targetCat) {
        calcCategory.value = targetCat;
        calculatePrice();
      }
      const calcSection = document.getElementById('rates');
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Transfer calculation to inquiry form
  if (calcApplyBtn) {
    calcApplyBtn.addEventListener('click', () => {
      const cat = calcCategory.value;
      const guests = calcGuests.value;
      const nights = calcNights.value;
      const season = calcSeason.options[calcSeason.selectedIndex].text;
      const totalPrice = calcTotalPriceEl.textContent;

      const inqAccom = document.getElementById('inq-accommodation');
      const inqAdults = document.getElementById('inq-adults');
      const inqNotes = document.getElementById('inq-notes');

      if (inqAccom) inqAccom.value = cat;
      if (inqAdults) inqAdults.value = guests;
      if (inqNotes) {
        const prefillNote = currentLang === 'de' 
          ? `[Kalkulation vom Preisrechner]\nUnterkunft: ${calcCategory.options[calcCategory.selectedIndex].text}\nSaison: ${season}\nGäste: ${guests} Person(en)\nDauer: ${nights} Nächte\nGeschätzter Gesamtbetrag: ${totalPrice}\n\n`
          : `[Calculated via Rate Calculator]\nAccommodation: ${calcCategory.options[calcCategory.selectedIndex].text}\nSeason: ${season}\nGuests: ${guests} person(s)\nDuration: ${nights} nights\nEstimated Total: ${totalPrice}\n\n`;
        inqNotes.value = prefillNote + inqNotes.value;
      }

      const inqSection = document.getElementById('inquiry');
      if (inqSection) {
        inqSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ------------------------------------------------------------------------
  // 7. Farm Life Gallery Filter & Lightbox
  // ------------------------------------------------------------------------
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-tag');
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-tag') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, caption) {
    if (!lightboxModal) return;
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullSrc = item.getAttribute('data-full');
      const caption = item.getAttribute('data-caption');
      openLightbox(fullSrc, caption);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // ------------------------------------------------------------------------
  // 8. FAQ Accordion
  // ------------------------------------------------------------------------
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.faq-item');
      const isOpen = parent.classList.contains('is-open');

      // Close other items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== parent) item.classList.remove('is-open');
      });

      if (!isOpen) {
        parent.classList.add('is-open');
      } else {
        parent.classList.remove('is-open');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 9. Leaflet Alpine Map
  // ------------------------------------------------------------------------
  function initAlpineMap() {
    const mapEl = document.getElementById('leaflet-map');
    if (!mapEl || typeof L === 'undefined') return;

    // Eliashof Coordinates: 47.383576, 13.656984
    const eliashofCoords = [47.383576, 13.656984];
    const map = L.map('leaflet-map', {
      scrollWheelZoom: false
    }).setView(eliashofCoords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    // Custom Icon for Eliashof
    const farmIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `<div style="background-color:#1b4d36; color:#ffffff; font-weight:bold; border-radius:50%; width:36px; height:36px; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 10px rgba(0,0,0,0.4); border:2px solid white; font-size:16px;">🏡</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    const skiIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `<div style="background-color:#b0723a; color:#ffffff; font-weight:bold; border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 10px rgba(0,0,0,0.3); border:2px solid white; font-size:14px;">⛷️</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const hutIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `<div style="background-color:#d4a373; color:#ffffff; font-weight:bold; border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 10px rgba(0,0,0,0.3); border:2px solid white; font-size:14px;">🏔️</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    // Marker 1: Eliashof
    L.marker(eliashofCoords, { icon: farmIcon })
      .addTo(map)
      .bindPopup(`<strong>Biobauernhof Eliashof</strong><br>Reiterkreuzweg 13, 8971 Schladming<br><em>1.000m Seehöhe</em>`)
      .openPopup();

    // Marker 2: Hochwurzen Gipfelbahn
    L.marker([47.3752, 13.6391], { icon: skiIcon })
      .addTo(map)
      .bindPopup(`<strong>Hochwurzen Bergbahn</strong><br>4-Berge-Skischaukel & 7km Rodelbahn`);

    // Marker 3: Planai Schladming
    L.marker([47.3912, 13.6934], { icon: skiIcon })
      .addTo(map)
      .bindPopup(`<strong>Planai Seilbahn</strong><br>Schladming Zentrum`);

    // Marker 4: Waldhornalm Untertal
    L.marker([47.3110, 13.7540], { icon: hutIcon })
      .addTo(map)
      .bindPopup(`<strong>Waldhornalm (Hütte)</strong><br>Klafferkessel Wanderung & Hüttenlager`);
  }

  // Lazy map init
  if (typeof L !== 'undefined') {
    initAlpineMap();
  } else {
    window.addEventListener('load', initAlpineMap);
  }

  // ------------------------------------------------------------------------
  // 10. Inquiry Form Submission Simulation
  // ------------------------------------------------------------------------
  const inqForm = document.getElementById('main-inquiry-form');
  const inqSuccessBox = document.getElementById('inquiry-success-box');
  const inqSendAnotherBtn = document.getElementById('inquiry-send-another');

  if (inqForm && inqSuccessBox) {
    inqForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show success box
      inqForm.style.display = 'none';
      inqSuccessBox.classList.add('is-visible');

      // Scroll smoothly to success notice
      inqSuccessBox.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (inqSendAnotherBtn && inqForm && inqSuccessBox) {
    inqSendAnotherBtn.addEventListener('click', () => {
      inqForm.reset();
      inqForm.style.display = 'flex';
      inqSuccessBox.classList.remove('is-visible');
    });
  }

  // ------------------------------------------------------------------------
  // 11. Legal Modals (Impressum & Datenschutz)
  // ------------------------------------------------------------------------
  const legalModal = document.getElementById('legal-modal');
  const legalModalTitle = document.getElementById('legal-modal-title');
  const legalModalBody = document.getElementById('legal-modal-body');
  const legalModalClose = document.getElementById('legal-modal-close');

  function openLegalModal(type) {
    if (!legalModal) return;
    if (type === 'impressum') {
      legalModalTitle.textContent = currentLang === 'de' ? 'Impressum & Kontakt' : 'Legal Notice & Imprint';
      legalModalBody.innerHTML = `
        <p><strong>Biobauernhof Eliashof</strong><br>Familie Höflehner<br>Reiterkreuzweg 13, 8971 Schladming, Österreich</p>
        <p>Telefon: <a href="tel:+43368761475">+43 (0)3687 61 475</a><br>E-Mail: <a href="mailto:urlaub@eliashof.at">urlaub@eliashof.at</a><br>Internet: <a href="https://eliashof.at">www.eliashof.at</a></p>
        <p><strong>Unternehmensgegenstand:</strong> Vermietung von Privatzimmern und Ferienwohnungen (Urlaub am Bauernhof).</p>
        <p><strong>Zuständige Behörde:</strong> Bezirkshauptmannschaft Liezen</p>
        <p><strong>Fotos & Urheberrechte:</strong> Tourismusverband Schladming-Dachstein, Steiermark Tourismus, Ski amadé, Familie Höflehner, Gerald Petter.</p>
      `;
    } else {
      legalModalTitle.textContent = currentLang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy';
      legalModalBody.innerHTML = `
        <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).</p>
        <h4>Kontakt mit uns</h4>
        <p>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        <h4>Ihre Rechte</h4>
        <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.</p>
      `;
    }
    legalModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeLegalModal() {
    if (!legalModal) return;
    legalModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-legal-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const type = trigger.getAttribute('data-legal-modal');
      openLegalModal(type);
    });
  });

  if (legalModalClose) legalModalClose.addEventListener('click', closeLegalModal);
  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) closeLegalModal();
    });
  }

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeLegalModal();
      closeMobileDrawer();
    }
  });

  // ------------------------------------------------------------------------
  // 12. Back to Top Button
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
