/* KLAMPTECH s.r.o. — Main Interactive Controller */
(function () {
  const SUPPORTED_LANGS = ['sk', 'de', 'en', 'pl'];
  let currentLang = 'sk';

  // ---- Theme Management ----
  function getInitialTheme() {
    const saved = localStorage.getItem('klamptech_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('klamptech_theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
  }

  // ---- Language Management ----
  function getInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = (params.get('lang') || '').toLowerCase();
    if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;
    const saved = localStorage.getItem('klamptech_lang');
    if (SUPPORTED_LANGS.includes(saved)) return saved;
    return 'sk';
  }

  function t(key) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.sk[key] || key;
  }

  function applyLanguage(lang, updateUrl) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'sk';
    currentLang = lang;
    localStorage.setItem('klamptech_lang', lang);
    document.documentElement.lang = lang;

    document.title = t('meta_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta_desc'));

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    if (updateUrl && window.history && window.history.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    }

    updateConfiguratorSummary();
  }

  // ---- Configurator ----
  const configState = {
    typeKey: 'cfg_t_new',
    matKey: 'cfg_m_falc',
    area: 140
  };

  function updateConfiguratorSummary() {
    const typeEl = document.getElementById('sum-type');
    const matEl = document.getElementById('sum-mat');
    const areaEl = document.getElementById('sum-area');
    const badgeEl = document.getElementById('area-badge');
    if (typeEl) typeEl.textContent = t(configState.typeKey);
    if (matEl) matEl.textContent = t(configState.matKey);
    const areaLabel = `${configState.area} m²`;
    if (areaEl) areaEl.textContent = areaLabel;
    if (badgeEl) badgeEl.textContent = areaLabel;
  }

  function initConfigurator() {
    document.querySelectorAll('[data-config-type]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-config-type]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        configState.typeKey = btn.getAttribute('data-config-type');
        updateConfiguratorSummary();
      });
    });

    document.querySelectorAll('[data-config-mat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-config-mat]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        configState.matKey = btn.getAttribute('data-config-mat');
        updateConfiguratorSummary();
      });
    });

    const slider = document.getElementById('area-slider');
    if (slider) {
      slider.addEventListener('input', () => {
        configState.area = parseInt(slider.value, 10) || 100;
        updateConfiguratorSummary();
      });
    }

    const applyBtn = document.getElementById('config-apply-btn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const msgBox = document.getElementById('contact-msg');
        if (msgBox) {
          msgBox.value =
            `${t('cfg_k_type')} ${t(configState.typeKey)}\n` +
            `${t('cfg_k_mat')} ${t(configState.matKey)}\n` +
            `${t('cfg_k_area')} ${configState.area} m²\n`;
          msgBox.focus();
        }
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // ---- Gallery Lightbox ----
  const galleryImages = [];
  let currentImgIdx = 0;

  function openLightbox(idx) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCounter = document.getElementById('lightbox-counter');
    if (!lb || !lbImg || !galleryImages.length) return;
    currentImgIdx = (idx + galleryImages.length) % galleryImages.length;
    lbImg.src = galleryImages[currentImgIdx];
    lbImg.alt = `KLAMPTECH realizácia ${currentImgIdx + 1}`;
    if (lbCounter) lbCounter.textContent = `${currentImgIdx + 1} / ${galleryImages.length}`;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initGallery() {
    document.querySelectorAll('.gallery-item').forEach((btn, idx) => {
      const img = btn.querySelector('img');
      if (img) galleryImages.push(img.getAttribute('src'));
      btn.addEventListener('click', () => openLightbox(idx));
    });

    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const lb = document.getElementById('lightbox');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => openLightbox(currentImgIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => openLightbox(currentImgIdx + 1));
    if (lb) {
      lb.addEventListener('click', (e) => {
        if (e.target === lb) closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!lb || !lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') openLightbox(currentImgIdx - 1);
      if (e.key === 'ArrowRight') openLightbox(currentImgIdx + 1);
    });
  }

  // ---- FAQ Accordion ----
  function initFaq() {
    document.querySelectorAll('.faq-q').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  // ---- GDPR Modal ----
  function initGdprModal() {
    const modal = document.getElementById('gdpr-modal');
    const openBtns = document.querySelectorAll('[data-open-gdpr]');
    const closeBtn = document.getElementById('gdpr-close');

    openBtns.forEach((b) =>
      b.addEventListener('click', () => {
        if (modal) {
          modal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      })
    );

    function closeModal() {
      if (modal) modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }
  }

  // ---- Contact Form ----
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('contact-name')?.value || '').trim();
      const email = (document.getElementById('contact-email')?.value || '').trim();
      const phone = (document.getElementById('contact-phone')?.value || '').trim();
      const msg = (document.getElementById('contact-msg')?.value || '').trim();

      const subject = encodeURIComponent(`KLAMPTECH Dopyt — ${name || 'Web'}`);
      const body = encodeURIComponent(
        `Meno / Firma: ${name}\nE-mail: ${email}\nTelefón: ${phone}\nJazyk: ${currentLang.toUpperCase()}\n\nSpráva:\n${msg}`
      );

      window.location.href = `mailto:michal.madzo@gmail.com?subject=${subject}&body=${body}`;
      if (status) status.textContent = t('form_sent');
    });
  }

  // ---- Mobile Menu ----
  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('mobile-nav');
    if (!toggle || !drawer) return;
    toggle.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => drawer.classList.remove('open'));
    });
  }

  // ---- Boot ----
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getInitialTheme());
    applyLanguage(getInitialLang(), false);

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang'), true));
    });

    initConfigurator();
    initGallery();
    initFaq();
    initGdprModal();
    initContactForm();
    initMobileMenu();
  });
})();
