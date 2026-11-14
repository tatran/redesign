/**
 * Schlapferhof Ramsau am Dachstein - Interactive Application Logic
 * Features:
 * - 4-Language Switcher (DE, EN, CS, HU) with localStorage and URL state
 * - Interactive Holiday Price & Sleigh Ride Calculator
 * - Fast-Finder Quick Reservation Transfer
 * - Seasonal Tabs (Summer & Winter)
 * - Photo Lightbox Modal
 * - FAQ Accordion
 * - Interactive Leaflet.js Alpine Map with Landmarks
 * - Booking Form Validation and Success Handling
 * - Impressum & Privacy Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Language System (i18n)
  // --------------------------------------------------------------------------
  const supportedLangs = ['de', 'en', 'cs', 'hu'];
  let currentLang = 'de';

  function initLanguage() {
    // Check URL query ?lang= or hash #lang=
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const hashLang = window.location.hash.replace('#lang=', '');
    const storedLang = localStorage.getItem('schlapferhof_lang');
    const browserLang = (navigator.language || navigator.userLanguage || '').substring(0, 2).toLowerCase();

    if (urlLang && supportedLangs.includes(urlLang)) {
      currentLang = urlLang;
    } else if (hashLang && supportedLangs.includes(hashLang)) {
      currentLang = hashLang;
    } else if (storedLang && supportedLangs.includes(storedLang)) {
      currentLang = storedLang;
    } else if (supportedLangs.includes(browserLang)) {
      currentLang = browserLang;
    } else {
      currentLang = 'de';
    }

    setLanguage(currentLang, false);
  }

  function setLanguage(lang, updateUrl = true) {
    if (!supportedLangs.includes(lang) || !translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('schlapferhof_lang', lang);

    if (updateUrl) {
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    }

    // Update active class on all lang buttons (desktop + mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const dict = translations[lang];

    // Document Meta
    if (dict.siteTitle) document.title = dict.siteTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.metaDescription) {
      metaDesc.setAttribute('content', dict.metaDescription);
    }

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', dict[key]);
          }
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // Update elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Re-run calculator to update currency & language labels
    calculateHoliday();

    // Update map popups if map is initialized
    updateMapPopups();
  }

  // Setup click listeners on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang, true);
      showToast(`Language switched to ${targetLang.toUpperCase()}`);
    });
  });

  // --------------------------------------------------------------------------
  // 2. Interactive Holiday Price Calculator
  // --------------------------------------------------------------------------
  const calcRoom = document.getElementById('calcRoom');
  const calcSeason = document.getElementById('calcSeason');
  const calcAdults = document.getElementById('calcAdults');
  const calcKids = document.getElementById('calcKids');
  const calcNights = document.getElementById('calcNights');
  const calcSleigh = document.getElementById('calcSleigh');

  const calcSumAcc = document.getElementById('calcSumAcc');
  const calcSumTax = document.getElementById('calcSumTax');
  const calcSumSleigh = document.getElementById('calcSumSleigh');
  const calcTotalDisplay = document.getElementById('calcTotalDisplay');
  const calcPerPersonVal = document.getElementById('calcPerPersonVal');
  const btnApplyCalc = document.getElementById('btnApplyCalc');

  function calculateHoliday() {
    if (!calcRoom || !calcSeason || !calcAdults || !calcKids || !calcNights || !calcSleigh) return;

    const roomType = calcRoom.value; // 'ensuite' or 'shared'
    const season = calcSeason.value; // 'summer' or 'winter'
    const adults = Math.max(1, parseInt(calcAdults.value) || 1);
    const kids = Math.max(0, parseInt(calcKids.value) || 0);
    const nights = Math.max(1, parseInt(calcNights.value) || 1);
    const withSleigh = calcSleigh.value === 'yes';

    // Pricing Matrix
    // Ensuite: Summer €30, Winter €32
    // Shared: Summer €26, Winter €28
    let adultRate = 30;
    if (roomType === 'ensuite') {
      adultRate = (season === 'winter') ? 32 : 30;
    } else {
      adultRate = (season === 'winter') ? 28 : 26;
    }

    // Children get 50% discount on accommodation
    const childRate = adultRate * 0.5;

    // Accommodation total
    const accTotal = (adults * adultRate + kids * childRate) * nights;

    // Local Tourism Tax (€3.50 per adult aged 15+ per night)
    const taxTotal = adults * 3.50 * nights;

    // Sleigh Ride Tour:
    // Flat minimum €125 per sleigh (covers up to 4 people)
    // From 5 persons: +€25 per adult, +€15 per child
    let sleighTotal = 0;
    if (withSleigh) {
      const totalPeople = adults + kids;
      if (totalPeople <= 4) {
        sleighTotal = 125;
      } else {
        const extraAdults = Math.max(0, adults - 4);
        const remainingCapacity = Math.max(0, 4 - adults);
        const extraKids = Math.max(0, kids - remainingCapacity);
        sleighTotal = 125 + (extraAdults * 25) + (extraKids * 15);
      }
    }

    const grandTotal = accTotal + taxTotal + sleighTotal;
    const perAdultPerNight = (grandTotal / (adults * nights)).toFixed(2);

    // Update DOM
    if (calcSumAcc) calcSumAcc.innerText = `€ ${accTotal.toFixed(2)}`;
    if (calcSumTax) calcSumTax.innerText = `€ ${taxTotal.toFixed(2)}`;
    if (calcSumSleigh) calcSumSleigh.innerText = `€ ${sleighTotal.toFixed(2)}`;
    if (calcTotalDisplay) calcTotalDisplay.innerText = `€ ${grandTotal.toFixed(2)}`;
    if (calcPerPersonVal) calcPerPersonVal.innerText = `€ ${perAdultPerNight}`;

    return {
      roomType,
      season,
      adults,
      kids,
      nights,
      withSleigh,
      accTotal,
      taxTotal,
      sleighTotal,
      grandTotal,
      perAdultPerNight
    };
  }

  // Bind change/input events for calculator
  [calcRoom, calcSeason, calcAdults, calcKids, calcNights, calcSleigh].forEach(input => {
    if (input) {
      input.addEventListener('change', calculateHoliday);
      input.addEventListener('input', calculateHoliday);
    }
  });

  // Transfer Calculation to Inquiry Form
  if (btnApplyCalc) {
    btnApplyCalc.addEventListener('click', (e) => {
      e.preventDefault();
      const calcData = calculateHoliday();
      if (!calcData) return;

      // Populate booking inquiry form fields
      const formRoom = document.getElementById('inquiryRoom');
      const formAdults = document.getElementById('inquiryAdults');
      const formKids = document.getElementById('inquiryKids');
      const formSleigh = document.getElementById('inquirySleigh');
      const formMessage = document.getElementById('inquiryMessage');

      if (formRoom) formRoom.value = calcData.roomType;
      if (formAdults) formAdults.value = calcData.adults;
      if (formKids) formKids.value = calcData.kids;
      if (formSleigh) formSleigh.value = calcData.withSleigh ? 'yes' : 'no';

      if (formMessage) {
        const note = `[Urlaubsrechner Richtpreis]: ${calcData.nights} Nächte, ${calcData.season.toUpperCase()} Saison. Geschätzter Richtpreis ca. € ${calcData.grandTotal.toFixed(2)} (inkl. Ortstaxe & ${calcData.withSleigh ? 'inkl. Pferdeschlittenfahrt' : 'ohne Schlitten'}).\n`;
        if (!formMessage.value.includes('[Urlaubsrechner Richtpreis]')) {
          formMessage.value = note + formMessage.value;
        }
      }

      // Smooth scroll to inquiry section
      const inquirySection = document.getElementById('inquiry');
      if (inquirySection) {
        inquirySection.scrollIntoView({ behavior: 'smooth' });
      }

      const dict = translations[currentLang] || translations.de;
      showToast(dict.calcTransferBtn || 'Calculation applied to form!');
    });
  }

  // --------------------------------------------------------------------------
  // 3. Fast Finder Bar (Hero floating bar)
  // --------------------------------------------------------------------------
  const finderForm = document.getElementById('finderForm');
  if (finderForm) {
    finderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fArrival = document.getElementById('finderArrival');
      const fDeparture = document.getElementById('finderDeparture');
      const fRoom = document.getElementById('finderRoom');
      const fGuests = document.getElementById('finderGuests');
      const fChildren = document.getElementById('finderChildren');

      // Populate Inquiry Form
      const inArrival = document.getElementById('inquiryArrival');
      const inDeparture = document.getElementById('inquiryDeparture');
      const inRoom = document.getElementById('inquiryRoom');
      const inAdults = document.getElementById('inquiryAdults');
      const inKids = document.getElementById('inquiryKids');

      if (inArrival && fArrival && fArrival.value) inArrival.value = fArrival.value;
      if (inDeparture && fDeparture && fDeparture.value) inDeparture.value = fDeparture.value;
      if (inRoom && fRoom && fRoom.value && fRoom.value !== 'all') inRoom.value = fRoom.value;
      if (inAdults && fGuests && fGuests.value) inAdults.value = fGuests.value;
      if (inKids && fChildren && fChildren.value) inKids.value = fChildren.value;

      const inquirySection = document.getElementById('inquiry');
      if (inquirySection) {
        inquirySection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast('Daten übernommen – bitte Kontaktdaten ergänzen!');
    });
  }

  // --------------------------------------------------------------------------
  // 4. Seasonal Tabs (Summer & Winter)
  // --------------------------------------------------------------------------
  const seasonTabBtns = document.querySelectorAll('.season-tab-btn');
  const seasonPanes = document.querySelectorAll('.season-content-pane');

  seasonTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSeason = btn.getAttribute('data-season');

      seasonTabBtns.forEach(b => b.classList.remove('active'));
      seasonPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(`pane-${targetSeason}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. Gallery Filtering & Fullscreen Lightbox
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  let activeGalleryItems = Array.from(galleryItems);

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      activeGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    });
  });

  function openLightbox(index) {
    if (!lightboxModal || !activeGalleryItems[index]) return;
    currentGalleryIndex = index;
    const item = activeGalleryItems[index];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');

    if (img && lightboxImg) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Schlapferhof Foto';
    }
    if (lightboxCaption) {
      lightboxCaption.innerText = caption ? caption.innerText : '';
    }

    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      const visibleIndex = activeGalleryItems.indexOf(item);
      openLightbox(visibleIndex >= 0 ? visibleIndex : 0);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
      openLightbox(currentGalleryIndex);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryItems.length;
      openLightbox(currentGalleryIndex);
    });
  }

  // Keyboard Navigation for Lightbox & Modals
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
      if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    }
  });

  // --------------------------------------------------------------------------
  // 6. FAQ Accordion
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close other items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherAns = other.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // --------------------------------------------------------------------------
  // 7. Interactive Leaflet.js Map
  // --------------------------------------------------------------------------
  let leafletMap = null;
  const mapMarkers = [];

  function initMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl || typeof L === 'undefined') return;

    // Center coordinates: Schlapferhof Vorberg 34, 8972 Ramsau am Dachstein
    const schlapferhofCoords = [47.40386, 13.66528];

    leafletMap = L.map('map', {
      center: [47.412, 13.665],
      zoom: 13,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    // Custom Icon for Schlapferhof
    const farmIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `<div style="background: #1b4332; color: #f59e0b; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 3px solid #ffffff;">
               <svg style="width:22px;height:22px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
             </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });

    const poiIcon = L.divIcon({
      className: 'custom-poi-pin',
      html: `<div style="background: #c99738; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 8px rgba(0,0,0,0.25); border: 2px solid #ffffff;">
               <svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
             </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    // Main Marker
    const mainMarker = L.marker(schlapferhofCoords, { icon: farmIcon }).addTo(leafletMap);
    mapMarkers.push({
      marker: mainMarker,
      title: 'Schlapferhof',
      desc: 'Vorberg 34, 8972 Ramsau am Dachstein (1.100 m)'
    });
    mainMarker.bindPopup(`<strong>Schlapferhof (1.100 m)</strong><br>Familie Fuchs • Vorberg 34<br><em>Urlaub am Bauernhof & Pferdeschlitten</em>`).openPopup();

    // Secondary Markers
    // 1. Kulmberg Sleigh Route
    const mKulmberg = L.marker([47.4125, 13.6610], { icon: poiIcon }).addTo(leafletMap);
    mKulmberg.bindPopup(`<strong>Kulmberg Rundkurs (11 km)</strong><br>Romantische Pferdeschlittenfahrt mit Norikern`);

    // 2. Ramsau Beach Badesee
    const mBeach = L.marker([47.4215, 13.6390], { icon: poiIcon }).addTo(leafletMap);
    mBeach.bindPopup(`<strong>Freizeitsee Ramsau Beach</strong><br>Badesee, Beachvolleyball & Erlebnispark`);

    // 3. Ramsau Ort / Langlaufstadion
    const mStadium = L.marker([47.4218, 13.6558], { icon: poiIcon }).addTo(leafletMap);
    mStadium.bindPopup(`<strong>Ramsau Ort / Langlaufstadion</strong><br>Weltmeister-Loipen & Skischulen`);

    // 4. Dachstein Südwandbahn
    const mDachstein = L.marker([47.4510, 13.6190], { icon: poiIcon }).addTo(leafletMap);
    mDachstein.bindPopup(`<strong>Dachstein Gletscherbahn</strong><br>Hängebrücke, Eispalast & ganzjähriges Panorama`);
  }

  function updateMapPopups() {
    // Dynamic refresh if needed
  }

  // --------------------------------------------------------------------------
  // 8. Booking Inquiry Form Handling
  // --------------------------------------------------------------------------
  const inquiryForm = document.getElementById('inquiryForm');
  const successModal = document.getElementById('successModal');
  const successClose = document.getElementById('successClose');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiryName').value.trim();
      const email = document.getElementById('inquiryEmail').value.trim();
      const arrival = document.getElementById('inquiryArrival').value;
      const departure = document.getElementById('inquiryDeparture').value;

      if (!name || !email || !arrival || !departure) {
        alert('Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus.');
        return;
      }

      // Check spam honeypot
      const honeypot = document.getElementById('formHoneypot');
      if (honeypot && honeypot.value !== '') {
        return;
      }

      // Open Success Modal
      if (successModal) {
        successModal.classList.add('open');
      }

      inquiryForm.reset();
      calculateHoliday();
    });
  }

  if (successClose && successModal) {
    successClose.addEventListener('click', () => {
      successModal.classList.remove('open');
    });
  }

  // --------------------------------------------------------------------------
  // 9. Impressum & Privacy Modals
  // --------------------------------------------------------------------------
  const impressumModal = document.getElementById('impressumModal');
  const privacyModal = document.getElementById('privacyModal');
  const openImpressumBtns = document.querySelectorAll('.open-impressum');
  const openPrivacyBtns = document.querySelectorAll('.open-privacy');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

  openImpressumBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (impressumModal) impressumModal.classList.add('open');
    });
  });

  openPrivacyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (privacyModal) privacyModal.classList.add('open');
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
    });
  });

  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) m.classList.remove('open');
    });
  });

  // --------------------------------------------------------------------------
  // 10. Mobile Drawer Menu & Sticky Header
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileClose = document.getElementById('mobileClose');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const siteHeader = document.querySelector('.site-header');

  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 11. Toast Notification Helper
  // --------------------------------------------------------------------------
  function showToast(msg) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.className = 'toast';
      toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span class="toast-msg"></span>`;
      document.body.appendChild(toast);
    }
    const msgEl = toast.querySelector('.toast-msg');
    if (msgEl) msgEl.innerText = msg;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 12. Set Default Dates (Today + 14 days, 5 nights stay)
  // --------------------------------------------------------------------------
  function setDefaultDates() {
    const today = new Date();
    const arrival = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
    const departure = new Date(arrival.getTime() + 5 * 24 * 60 * 60 * 1000);

    const formatDate = (d) => d.toISOString().split('T')[0];

    const fArr = document.getElementById('finderArrival');
    const fDep = document.getElementById('finderDeparture');
    const inArr = document.getElementById('inquiryArrival');
    const inDep = document.getElementById('inquiryDeparture');

    if (fArr && !fArr.value) fArr.value = formatDate(arrival);
    if (fDep && !fDep.value) fDep.value = formatDate(departure);
    if (inArr && !inArr.value) inArr.value = formatDate(arrival);
    if (inDep && !inDep.value) inDep.value = formatDate(departure);
  }

  // Initializations
  initLanguage();
  initMap();
  setDefaultDates();
  calculateHoliday();
});
