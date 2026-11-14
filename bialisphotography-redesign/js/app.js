/**
 * ALEXANDRU BIALIS PHOTOGRAPHY – LUXURY REDESIGN CONTROLLER
 * Quad-lingual (DE / EN / HU / CS) + Light/Dark Modes + Interactive Tools
 */

(function () {
  'use strict';

  // --- STATE ---
  let currentLang = 'de';
  let currentTheme = 'light';
  let mapInstance = null;
  let mapTileLayer = null;

  // Portfolio items data for Lightbox
  const portfolioData = [
    {
      id: 'wed1',
      category: 'wedding',
      img: 'images/wedding-hero-sunset.jpg',
      titleKey: 'p_wed1_title',
      descKey: 'p_wed1_desc'
    },
    {
      id: 'wed2',
      category: 'wedding',
      img: 'images/wedding-couple-sunglasses.jpg',
      titleKey: 'p_wed2_title',
      descKey: 'p_wed2_desc'
    },
    {
      id: 'wed3',
      category: 'wedding',
      img: 'images/wedding-reportage-oesterreich.jpg',
      titleKey: 'p_wed3_title',
      descKey: 'p_wed3_desc'
    },
    {
      id: 'corp1',
      category: 'corporate',
      img: 'images/industry-bauder-facility.jpg',
      titleKey: 'p_corp1_title',
      descKey: 'p_corp1_desc'
    },
    {
      id: 'corp2',
      category: 'corporate',
      img: 'images/corporate-worker-production.jpg',
      titleKey: 'p_corp2_title',
      descKey: 'p_corp2_desc'
    },
    {
      id: 'port1',
      category: 'portrait',
      img: 'images/portrait-studio-lady.jpg',
      titleKey: 'p_port1_title',
      descKey: 'p_port1_desc'
    },
    {
      id: 'port2',
      category: 'portrait',
      img: 'images/portrait-art-bw.jpg',
      titleKey: 'p_port2_title',
      descKey: 'p_port2_desc'
    },
    {
      id: 'port3',
      category: 'portrait',
      img: 'images/portrait-vintage-dog.jpg',
      titleKey: 'p_port3_title',
      descKey: 'p_port3_desc'
    },
    {
      id: 'alb1',
      category: 'albums',
      img: 'images/wedding-album-leather.jpg',
      titleKey: 'p_alb1_title',
      descKey: 'p_alb1_desc'
    },
    {
      id: 'alb2',
      category: 'albums',
      img: 'images/album-taufe-box.jpg',
      titleKey: 'p_alb2_title',
      descKey: 'p_alb2_desc'
    },
    {
      id: 'des1',
      category: 'design',
      img: 'images/design-branding-showcase.jpg',
      titleKey: 'p_des1_title',
      descKey: 'p_des1_desc'
    }
  ];

  let currentLightboxIndex = 0;

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavbar();
    initPortfolio();
    initLightbox();
    initCalculator();
    initMap();
    initContactForm();
    initLegalModals();
    initCookieBanner();
  });

  // --- THEME ENGINE ---
  function initTheme() {
    const savedTheme = localStorage.getItem('bialis_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(currentTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('bialis_theme', currentTheme);
        applyTheme(currentTheme);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
    updateMapTiles();
  }

  // --- I18N ENGINE ---
  function initLanguage() {
    // 1. Check URL param ?lang=de|en|hu|cs
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('bialis_lang');
    const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();

    if (paramLang && ['de', 'en', 'hu', 'cs'].includes(paramLang)) {
      currentLang = paramLang;
    } else if (savedLang && ['de', 'en', 'hu', 'cs'].includes(savedLang)) {
      currentLang = savedLang;
    } else if (['de', 'en', 'hu', 'cs'].includes(browserLang)) {
      currentLang = browserLang;
    } else {
      currentLang = 'de';
    }

    applyLanguage(currentLang);

    // Language dropdown toggling
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
      });

      document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
      });

      document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.preventDefault();
          const selected = opt.getAttribute('data-lang');
          if (selected) {
            currentLang = selected;
            localStorage.setItem('bialis_lang', currentLang);
            applyLanguage(currentLang);
            langDropdown.classList.remove('open');

            // Update URL without reload
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('lang', currentLang);
            window.history.replaceState({}, '', newUrl);
          }
        });
      });
    }
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    const t = TRANSLATIONS[lang];

    // Update document lang
    document.documentElement.setAttribute('lang', lang);

    // Update current lang label on button
    const curLangLabel = document.getElementById('current-lang-code');
    if (curLangLabel) curLangLabel.textContent = lang.toUpperCase();

    // Update active dropdown item
    document.querySelectorAll('.lang-option').forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // Translate all [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.tagName === 'INPUT' && el.type === 'submit') {
          el.value = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    // Translate all [data-i18n-ph] placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Re-run calculator estimate text update
    updateCalculator();
  }

  // --- NAVBAR SCROLL & MOBILE DRAWER ---
  function initNavbar() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const expanded = navMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', expanded);
      });

      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', false);
        });
      });
    }
  }

  // --- PORTFOLIO FILTER ---
  function initPortfolio() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // --- LIGHTBOX ---
  function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const imgEl = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-desc');
    const inquireBtn = document.getElementById('lightbox-inquire-btn');

    if (!modal) return;

    // Attach click to all portfolio cards
    document.querySelectorAll('.portfolio-card').forEach((card, idx) => {
      card.addEventListener('click', () => {
        currentLightboxIndex = idx;
        openLightbox(idx);
      });
    });

    function openLightbox(idx) {
      const item = portfolioData[idx];
      if (!item) return;
      imgEl.src = item.img;
      const t = TRANSLATIONS[currentLang] || TRANSLATIONS.de;
      titleEl.textContent = t[item.titleKey] || '';
      descEl.textContent = t[item.descKey] || '';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex - 1 + portfolioData.length) % portfolioData.length;
      openLightbox(currentLightboxIndex);
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex + 1) % portfolioData.length;
      openLightbox(currentLightboxIndex);
    });

    if (inquireBtn) {
      inquireBtn.addEventListener('click', () => {
        closeLightbox();
        const contactSec = document.getElementById('contact');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
    });
  }

  // --- CALCULATOR / ESTIMATOR ---
  let calcState = {
    type: 'wedding',
    duration: 'half',
    addons: []
  };

  const pricingMatrix = {
    typeBase: {
      wedding: 490,
      portrait: 190,
      corporate: 390,
      album: 250
    },
    durationMultiplier: {
      short: 1.0,
      half: 1.8,
      full: 3.2
    },
    addons: {
      drone: 190,
      album: 390,
      express: 150,
      second: 350
    }
  };

  function initCalculator() {
    // Type selection
    document.querySelectorAll('.calc-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.calc-type-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        calcState.type = btn.getAttribute('data-value');
        updateCalculator();
      });
    });

    // Duration selection
    document.querySelectorAll('.calc-dur-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.calc-dur-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        calcState.duration = btn.getAttribute('data-value');
        updateCalculator();
      });
    });

    // Addons
    document.querySelectorAll('.calc-addon-check').forEach(chk => {
      chk.addEventListener('change', () => {
        const addon = chk.getAttribute('data-addon');
        if (chk.checked) {
          if (!calcState.addons.includes(addon)) calcState.addons.push(addon);
        } else {
          calcState.addons = calcState.addons.filter(a => a !== addon);
        }
        updateCalculator();
      });
    });

    // Transfer button
    const applyBtn = document.getElementById('calc-apply-btn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const contactSec = document.getElementById('contact');
        const serviceSelect = document.getElementById('form-service');
        const budgetInput = document.getElementById('form-budget');
        const msgTextarea = document.getElementById('form-message');

        if (serviceSelect) {
          if (calcState.type === 'wedding') serviceSelect.value = 'wedding';
          else if (calcState.type === 'portrait') serviceSelect.value = 'portrait';
          else if (calcState.type === 'corporate') serviceSelect.value = 'corporate';
          else if (calcState.type === 'album') serviceSelect.value = 'album';
        }

        const total = calculateTotal();
        if (budgetInput) {
          budgetInput.value = `ca. € ${total.min} – € ${total.max}`;
        }

        if (msgTextarea) {
          const t = TRANSLATIONS[currentLang] || TRANSLATIONS.de;
          let note = `[Konfigurator-Auswahl]: `;
          note += `Shooting: ${calcState.type}, Dauer: ${calcState.duration}`;
          if (calcState.addons.length > 0) {
            note += `, Extras: ${calcState.addons.join(', ')}`;
          }
          note += `\n`;
          if (!msgTextarea.value.includes('[Konfigurator-Auswahl]')) {
            msgTextarea.value = note + msgTextarea.value;
          }
        }

        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    updateCalculator();
  }

  function calculateTotal() {
    const base = pricingMatrix.typeBase[calcState.type] || 390;
    const durMult = pricingMatrix.durationMultiplier[calcState.duration] || 1.8;
    let subtotal = Math.round(base * durMult);

    calcState.addons.forEach(addon => {
      subtotal += (pricingMatrix.addons[addon] || 0);
    });

    const min = Math.max(190, Math.round(subtotal * 0.9));
    const max = Math.round(subtotal * 1.15);
    return { min, max };
  }

  function updateCalculator() {
    const amountEl = document.getElementById('calc-amount');
    if (!amountEl) return;
    const { min, max } = calculateTotal();
    amountEl.textContent = `€ ${min.toLocaleString('de-AT')} – € ${max.toLocaleString('de-AT')}`;
  }

  // --- LEAFLET INTERACTIVE MAP ---
  function initMap() {
    const mapEl = document.getElementById('studio-map');
    if (!mapEl || typeof L === 'undefined') return;

    // Purbach am Neusiedler See Studio Coordinates
    const lat = 47.9140;
    const lng = 16.6948;

    mapInstance = L.map('studio-map', {
      center: [lat, lng],
      zoom: 14,
      scrollWheelZoom: false
    });

    updateMapTiles();

    // Custom Luxury Gold Marker Icon
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="
          width: 38px;
          height: 38px;
          background: #C5A059;
          border: 3px solid #FFFFFF;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 8px 20px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="width: 12px; height: 12px; background: #121316; border-radius: 50%; transform: rotate(45deg);"></div>
        </div>
      `,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -40]
    });

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance);

    marker.bindPopup(`
      <div style="padding: 6px; font-family: 'Plus Jakarta Sans', sans-serif;">
        <strong style="color: #B88E3E; font-size: 14px;">Alexandru Bialis Photography</strong><br>
        <span style="font-size: 12px; color: #555;">Feuerwehrgasse 12/13<br>7083 Purbach am Neusiedler See</span><br>
        <a href="https://maps.google.com/?q=Feuerwehrgasse+12/13,+7083+Purbach+am+Neusiedler+See" target="_blank" rel="noopener" style="display:inline-block; margin-top:8px; font-size:11px; font-weight:600; color:#B88E3E; text-decoration:underline;">Google Maps öffnen &rarr;</a>
      </div>
    `);
  }

  const TILE_URLS = {
    light: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    dark: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    osm: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
  };

  function updateMapTiles() {
    if (!mapInstance || typeof L === 'undefined') return;
    if (mapTileLayer) {
      mapInstance.removeLayer(mapTileLayer);
      mapTileLayer = null;
    }

    const isDark = currentTheme === 'dark';
    const tileUrl = isDark ? TILE_URLS.dark : TILE_URLS.light;

    mapTileLayer = L.tileLayer(tileUrl, {
      maxZoom: 18,
      attribution: '&copy; Esri, HERE, Garmin, OpenStreetMap contributors'
    }).addTo(mapInstance);

    let tileErrors = 0;
    mapTileLayer.on('tileerror', () => {
      tileErrors++;
      if (tileErrors === 3) {
        // Fallback cleanly to OpenStreetMap standard if Esri times out
        if (mapTileLayer) mapInstance.removeLayer(mapTileLayer);
        mapTileLayer = L.tileLayer(TILE_URLS.osm, {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapInstance);
      }
    });
  }

  // --- CONTACT FORM HANDLER ---
  function initContactForm() {
    const form = document.getElementById('booking-form');
    const toast = document.getElementById('form-feedback');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      setTimeout(() => {
        if (toast) {
          toast.style.display = 'block';
          toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
      }, 700);
    });
  }

  // --- LEGAL MODALS (IMPRESSUM & PRIVACY) ---
  function initLegalModals() {
    const impModal = document.getElementById('impressum-modal');
    const privModal = document.getElementById('privacy-modal');

    document.querySelectorAll('.open-impressum-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (impModal) {
          impModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    document.querySelectorAll('.open-privacy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (privModal) {
          privModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.legal-modal').forEach(m => m.classList.remove('active'));
        document.body.style.overflow = '';
      });
    });

    document.querySelectorAll('.legal-modal').forEach(m => {
      m.addEventListener('click', (e) => {
        if (e.target === m) {
          m.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // --- COOKIE BANNER ---
  function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const accepted = localStorage.getItem('bialis_cookies');
    if (!accepted && banner) {
      setTimeout(() => banner.classList.add('active'), 1200);
    }

    const acceptBtn = document.getElementById('cookie-accept-btn');
    const essentialBtn = document.getElementById('cookie-essential-btn');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('bialis_cookies', 'all');
        if (banner) banner.classList.remove('active');
      });
    }

    if (essentialBtn) {
      essentialBtn.addEventListener('click', () => {
        localStorage.setItem('bialis_cookies', 'essential');
        if (banner) banner.classList.remove('active');
      });
    }
  }

})();
