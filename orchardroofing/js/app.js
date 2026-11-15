/* ==========================================================================
   ORCHARD ROOFING KELOWNA — Interactive UI Engine
   Light + Dark Theme · Bilingual (EN/FR) · Estimate Calculator · Lightbox · FAQ
   ========================================================================== */

(function () {
  'use strict';

  const state = {
    lang: localStorage.getItem('orchard_lang') || 'en',
    theme: localStorage.getItem('orchard_theme') || 'light',
    calc: {
      scope: 'reroof', // reroof | tar | cedar | repair
      area: 2200,      // sq ft
      pitch: 'med',    // low | med | steep
      addons: {
        skylight: false,
        deck: false,
        gutters: false,
        anchors: false
      }
    }
  };

  // 1. Theme Controller (Light + Dark)
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('orchard_theme', theme);
    const labelEl = document.getElementById('theme-label');
    if (labelEl) {
      const dict = window.ORCHARD_TRANSLATIONS[state.lang] || window.ORCHARD_TRANSLATIONS.en;
      labelEl.textContent = theme === 'dark' ? dict.theme_light : dict.theme_dark;
    }
  }

  // 2. Language Controller (EN / FR)
  function applyLanguage(lang) {
    if (!window.ORCHARD_TRANSLATIONS || !window.ORCHARD_TRANSLATIONS[lang]) lang = 'en';
    state.lang = lang;
    localStorage.setItem('orchard_lang', lang);
    document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr-CA' : 'en-CA');

    const dict = window.ORCHARD_TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    applyTheme(state.theme);
    updateCalculator();
  }

  // 3. Interactive Okanagan Roof Estimate & Conversion Calculator
  const SCOPE_CONFIG = {
    reroof: {
      basePerSqFt: [5.4, 6.8],
      labelEn: 'CertainTeed Landmark® Asphalt Re-Roof',
      labelFr: 'Réfection Bardeaux CertainTeed Landmark®',
      days: '2 – 3 Days'
    },
    tar: {
      basePerSqFt: [7.6, 9.6],
      labelEn: 'Tar & Gravel to Shingle / Polyglass® 2-Ply Conversion',
      labelFr: 'Conversion Goudron-Gravier / Polyglass® 2 Plis',
      days: '3 – 5 Days'
    },
    cedar: {
      basePerSqFt: [7.9, 10.2],
      labelEn: 'Cedar Shake Tear-Off & Shingle Conversion',
      labelFr: 'Conversion Bardeaux de Cèdre vers Asphalte',
      days: '3 – 5 Days'
    },
    repair: {
      basePerSqFt: [1.6, 2.5],
      minFixed: [650, 1450],
      labelEn: 'Targeted Leak, Skylight or Sunken Roof Repair',
      labelFr: 'Réparation Ciblée (Fuite, Puits de Lumière ou Pontage)',
      days: '1 Day'
    }
  };

  const PITCH_MULTIPLIER = {
    low: { mult: 1.04, labelEn: 'Low Slope (2/12 – 3/12)', labelFr: 'Faible Pente (2/12 – 3/12)' },
    med: { mult: 1.0, labelEn: 'Standard Walkable (4/12 – 6/12)', labelFr: 'Pente Standard (4/12 – 6/12)' },
    steep: { mult: 1.18, labelEn: 'Steep Architectural (7/12+)', labelFr: 'Pente Raide (7/12+)' }
  };

  const ADDON_COSTS = {
    skylight: [650, 1350],
    deck: [550, 1200],
    gutters: [1400, 2600],
    anchors: [380, 750]
  };

  function formatCAD(num) {
    return '$' + Math.round(num / 50) * 50 .toLocaleString('en-CA');
  }

  function updateCalculator() {
    const cfg = SCOPE_CONFIG[state.calc.scope] || SCOPE_CONFIG.reroof;
    const pitchObj = PITCH_MULTIPLIER[state.calc.pitch] || PITCH_MULTIPLIER.med;
    const area = state.calc.area;

    const areaValEl = document.getElementById('calc-area-display');
    if (areaValEl) {
      const squares = (area / 100).toFixed(1);
      areaValEl.textContent = `${area.toLocaleString('en-CA')} sq ft (${squares} squares)`;
    }

    let low = 0;
    let high = 0;

    if (state.calc.scope === 'repair') {
      const scale = Math.max(1, area / 1800);
      low = cfg.minFixed[0] * scale * pitchObj.mult;
      high = cfg.minFixed[1] * scale * pitchObj.mult;
    } else {
      low = area * cfg.basePerSqFt[0] * pitchObj.mult;
      high = area * cfg.basePerSqFt[1] * pitchObj.mult;
    }

    Object.keys(state.calc.addons).forEach(key => {
      if (state.calc.addons[key] && ADDON_COSTS[key]) {
        low += ADDON_COSTS[key][0];
        high += ADDON_COSTS[key][1];
      }
    });

    const priceEl = document.getElementById('calc-price-output');
    if (priceEl) {
      priceEl.textContent = `${formatCAD(low)} – ${formatCAD(high)} CAD`;
    }

    const scopeOut = document.getElementById('calc-out-scope');
    const areaOut = document.getElementById('calc-out-area');
    const pitchOut = document.getElementById('calc-out-pitch');
    const durOut = document.getElementById('calc-out-duration');

    if (scopeOut) scopeOut.textContent = state.lang === 'fr' ? cfg.labelFr : cfg.labelEn;
    if (areaOut) areaOut.textContent = `${area.toLocaleString('en-CA')} sq ft (~${Math.round(area * 0.0929)} m²)`;
    if (pitchOut) pitchOut.textContent = state.lang === 'fr' ? pitchObj.labelFr : pitchObj.labelEn;
    if (durOut) durOut.textContent = cfg.days;
  }

  // 4. Initialize Event Listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    // Mobile Menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
      });
    }

    // Sticky Header shadow
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Calculator Scope buttons
    document.querySelectorAll('[data-calc-scope]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.calc.scope = btn.getAttribute('data-calc-scope');
        document.querySelectorAll('[data-calc-scope]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // If Tar & Gravel selected, auto-highlight low slope
        if (state.calc.scope === 'tar') {
          state.calc.pitch = 'low';
          document.querySelectorAll('[data-calc-pitch]').forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-calc-pitch') === 'low');
          });
        }
        updateCalculator();
      });
    });

    // Service card quick-select into calculator
    document.querySelectorAll('[data-select-scope]').forEach(link => {
      link.addEventListener('click', e => {
        const targetScope = link.getAttribute('data-select-scope');
        const btn = document.querySelector(`[data-calc-scope="${targetScope}"]`);
        if (btn) btn.click();
      });
    });

    // Calculator Area slider
    const areaSlider = document.getElementById('calc-area-slider');
    if (areaSlider) {
      areaSlider.addEventListener('input', e => {
        state.calc.area = parseInt(e.target.value, 10) || 2200;
        updateCalculator();
      });
    }

    // Calculator Pitch buttons
    document.querySelectorAll('[data-calc-pitch]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.calc.pitch = btn.getAttribute('data-calc-pitch');
        document.querySelectorAll('[data-calc-pitch]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateCalculator();
      });
    });

    // Calculator Addons
    document.querySelectorAll('[data-calc-addon]').forEach(chk => {
      chk.addEventListener('change', () => {
        const key = chk.getAttribute('data-calc-addon');
        state.calc.addons[key] = chk.checked;
        updateCalculator();
      });
    });

    // Transfer Calculator Spec to Quote Form
    const transferBtn = document.getElementById('calc-transfer-btn');
    if (transferBtn) {
      transferBtn.addEventListener('click', () => {
        const cfg = SCOPE_CONFIG[state.calc.scope];
        const pitchObj = PITCH_MULTIPLIER[state.calc.pitch];
        const priceText = document.getElementById('calc-price-output')?.textContent || '';
        const selectedAddons = Object.keys(state.calc.addons)
          .filter(k => state.calc.addons[k])
          .join(', ') || 'None';

        const notesField = document.getElementById('quote-notes');
        const serviceSelect = document.getElementById('quote-service');
        if (serviceSelect) {
          serviceSelect.value = state.calc.scope;
        }
        if (notesField) {
          notesField.value = `[Calculator Spec] System: ${cfg.labelEn} | Area: ${state.calc.area} sq ft | Pitch: ${pitchObj.labelEn} | Add-ons: ${selectedAddons} | Est. Budget: ${priceText}`;
        }
        const formEl = document.getElementById('hero-quote-card');
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          notesField?.focus();
        }
      });
    }

    // Gallery Filtering & Lightbox
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        galleryItems.forEach(item => {
          const cat = item.getAttribute('data-category');
          item.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
        });
      });
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxClose = document.getElementById('lightbox-close');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-title')?.textContent || '';
        const loc = item.querySelector('.gallery-loc')?.textContent || '';
        if (lightbox && lightboxImg && img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          if (lightboxTitle) lightboxTitle.textContent = `${title} — ${loc}`;
          lightbox.classList.add('open');
        }
      });
    });

    if (lightboxClose && lightbox) {
      lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
      lightbox.addEventListener('click', e => {
        if (e.target === lightbox) lightbox.classList.remove('open');
      });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(other => {
          other.classList.remove('open');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('open');
          if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });

    // Open first FAQ by default
    const firstFaq = document.querySelector('.faq-item .faq-question');
    if (firstFaq) firstFaq.click();

    // Quote Form Submission (Client-side mailto + confirmation)
    const quoteForm = document.getElementById('orchard-quote-form');
    if (quoteForm) {
      quoteForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('quote-name')?.value || '';
        const phone = document.getElementById('quote-phone')?.value || '';
        const email = document.getElementById('quote-email')?.value || '';
        const city = document.getElementById('quote-city')?.value || '';
        const service = document.getElementById('quote-service')?.selectedOptions[0]?.text || '';
        const notes = document.getElementById('quote-notes')?.value || '';

        const subject = encodeURIComponent(`Free Roofing Estimate Request – ${city} (${service})`);
        const body = encodeURIComponent(
          `Hello Chris & Orchard Roofing Team,\n\nI would like to request a free roofing estimate:\n\n` +
          `• Name: ${name}\n` +
          `• Phone: ${phone}\n` +
          `• Email: ${email}\n` +
          `• Municipality: ${city}\n` +
          `• Project Scope: ${service}\n` +
          `• Details / Notes: ${notes}\n\n` +
          `Please include your WCB & liability insurance documentation. Thank you!`
        );

        const feedback = document.getElementById('quote-form-feedback');
        if (feedback) {
          feedback.style.display = 'block';
          feedback.textContent = state.lang === 'fr'
            ? '✓ Merci ! Ouverture de votre client courriel vers sales@orchardroofing.ca...'
            : '✓ Thank you! Preparing your estimate request to sales@orchardroofing.ca...';
        }
        window.location.href = `mailto:sales@orchardroofing.ca?subject=${subject}&body=${body}`;
      });
    }

    // Apply initial state
    applyTheme(state.theme);
    applyLanguage(state.lang);
  });
})();
