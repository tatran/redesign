/**
 * Strechy Medo - Main Application Logic
 * Language switcher, Before/After Slider, FAQ Accordion, Navigation, Form Validation
 */

let currentActiveLang = 'sk';
window.currentActiveLang = currentActiveLang;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Determine initial language (URL hash -> localStorage -> navigator -> default 'sk')
  const hashLang = window.location.hash.replace('#', '').toLowerCase();
  const savedLang = localStorage.getItem('strechymedo_lang');
  
  if (['sk', 'en', 'de', 'pl', 'hu'].includes(hashLang)) {
    currentActiveLang = hashLang;
  } else if (['sk', 'en', 'de', 'pl', 'hu'].includes(savedLang)) {
    currentActiveLang = savedLang;
  } else {
    currentActiveLang = 'sk';
  }

  // 2. Initialize modules
  initTheme();
  initLanguage(currentActiveLang);
  initLanguageDropdown();
  initNavigation();
  initHeroPictureSwitcher();
  initBeforeAfterSlider();
  initFaqAccordion();
  initContactForm();
  initFloatingStudioAd();
  if (window.initCalculator) window.initCalculator();
  if (window.initGallery) window.initGallery(currentActiveLang);
});

const langFlags = {
  sk: '🇸🇰',
  en: '🇬🇧',
  de: '🇩🇪',
  pl: '🇵🇱',
  hu: '🇭🇺'
};

/**
 * Language Switcher
 */
function setLanguage(lang) {
  if (!['sk', 'en', 'de', 'pl', 'hu'].includes(lang)) return;
  currentActiveLang = lang;
  window.currentActiveLang = lang;
  localStorage.setItem('strechymedo_lang', lang);
  window.location.hash = lang;

  initLanguage(lang);
  if (window.initGallery) window.initGallery(lang);
  if (window.updateCalculation) window.updateCalculation();

  // Close dropdown menu if open
  const wrap = document.getElementById('langDropdownWrap');
  if (wrap) wrap.classList.remove('open');
}
window.setLanguage = setLanguage;

function initLanguage(lang) {
  const dict = translations[lang] || translations.sk;

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update page title & meta
  if (dict.meta) {
    document.title = dict.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.meta.desc);
  }

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n');
    const val = getNestedTranslation(dict, keyPath);
    if (val !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = val;
      } else {
        el.innerHTML = val;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const keyPath = el.getAttribute('data-i18n-ph');
    const val = getNestedTranslation(dict, keyPath);
    if (val !== undefined) {
      el.setAttribute('placeholder', val);
    }
  });

  // Update dropdown button label and flag
  const currentFlag = document.getElementById('langCurrentFlag');
  const currentCode = document.getElementById('langCurrentCode');
  if (currentFlag) currentFlag.textContent = langFlags[lang] || '🌐';
  if (currentCode) currentCode.textContent = lang.toUpperCase();

  // Update dropdown options active state
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Update topbar language buttons
  document.querySelectorAll('.topbar-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update mobile drawer pills
  document.querySelectorAll('.mobile-lang-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Fallback for any legacy buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update theme button tooltips for current language
  if (window.updateThemeIcons) {
    window.updateThemeIcons(document.documentElement.getAttribute('data-theme') || 'dark');
  }
}

/**
 * Compact Language Dropdown Toggle
 */
function initLanguageDropdown() {
  const wrap = document.getElementById('langDropdownWrap');
  const btn = document.getElementById('langDropdownBtn');
  if (!wrap || !btn) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = wrap.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrap.classList.contains('open')) {
      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Hero Picture Showcase Switcher
 */
function initHeroPictureSwitcher() {
  const mainHeroImg = document.getElementById('heroMainImg');
  const heroBadgeLoc = document.getElementById('heroBadgeLocation');
  const heroThumbs = document.querySelectorAll('.hero-thumb-btn');
  if (!mainHeroImg || heroThumbs.length === 0) return;

  heroThumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      heroThumbs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const newSrc = btn.getAttribute('data-img');
      const newLoc = btn.getAttribute('data-loc');
      if (newSrc) {
        mainHeroImg.style.opacity = '0.5';
        setTimeout(() => {
          mainHeroImg.src = newSrc;
          mainHeroImg.style.opacity = '1';
        }, 150);
      }
      if (heroBadgeLoc && newLoc) {
        heroBadgeLoc.textContent = newLoc;
      }
    });
  });
}

/**
 * Sticky Navigation & Mobile Menu
 */
function initNavigation() {
  const header = document.getElementById('mainHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Sticky header scroll detection
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      header.classList.add('scrolled');
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Back to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * Interactive Before / After Comparison Slider
 */
function initBeforeAfterSlider() {
  const container = document.getElementById('beforeAfterContainer');
  const slider = document.getElementById('beforeAfterHandle');
  const beforeImgWrap = document.getElementById('beforeImgWrap');
  if (!container || !slider || !beforeImgWrap) return;

  let isDragging = false;

  function updateSlider(x) {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    slider.style.left = `${percentage}%`;
    beforeImgWrap.style.width = `${percentage}%`;
  }

  slider.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  // Touch support for mobile
  slider.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches[0]) return;
    updateSlider(e.touches[0].clientX);
  });

  // Click on container moves slider
  container.addEventListener('click', (e) => {
    updateSlider(e.clientX);
  });
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close others
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });
}

/**
 * Contact & Inquiry Form
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('formSuccessMsg');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const phone = document.getElementById('contactPhone')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const location = document.getElementById('contactLocation')?.value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!name || !phone || !email || !location) {
      alert(currentActiveLang === 'sk' ? 'Prosím vyplňte všetky povinné polia označené hviezdičkou (*).' :
            currentActiveLang === 'de' ? 'Bitte füllen Sie alle mit Sternchen (*) markierten Pflichtfelder aus.' :
            'Please fill in all mandatory fields marked with an asterisk (*).');
      return;
    }

    // Visual button state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = translations[currentActiveLang]?.contact?.formSubmitting || 'Odosielam...';

    // Simulated network submit
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      
      if (successBox) {
        successBox.style.display = 'block';
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          successBox.style.display = 'none';
        }, 8000);
      }
    }, 1200);
  });
}

/**
 * Pre-select service option in contact form from SEO Hub or service cards
 */
function preselectService(val) {
  const sel = document.getElementById('contactService');
  if (sel) {
    sel.value = val;
    sel.classList.add('highlight-select');
    setTimeout(() => sel.classList.remove('highlight-select'), 2000);
  }
}
window.preselectService = preselectService;

/**
 * Floating Studio Ad (Living Pixel Studios)
 */
function initFloatingStudioAd() {
  const ad = document.getElementById('floatingStudioAd');
  const closeBtn = document.getElementById('floatingAdClose');
  if (!ad || !closeBtn) return;

  if (sessionStorage.getItem('lps_ad_dismissed') === '1') {
    ad.style.display = 'none';
    return;
  }

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    ad.style.opacity = '0';
    ad.style.transform = 'translateY(15px)';
    setTimeout(() => {
      ad.style.display = 'none';
      sessionStorage.setItem('lps_ad_dismissed', '1');
    }, 250);
  });
}

/**
 * Theme Switcher (Dark / Light Mode)
 */
function initTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateThemeIcons(currentTheme);

  const desktopBtn = document.getElementById('themeToggleBtn');
  const mobileBtn = document.getElementById('mobileThemeToggleBtn');

  function toggleTheme() {
    const active = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = active === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('strechymedo_theme', next);
    } catch (e) {}
    updateThemeIcons(next);
  }

  if (desktopBtn) desktopBtn.addEventListener('click', toggleTheme);
  if (mobileBtn) mobileBtn.addEventListener('click', toggleTheme);
}

const themeTooltips = {
  sk: { toLight: 'Prepnúť na svetlý režim', toDark: 'Prepnúť na tmavý režim' },
  en: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
  de: { toLight: 'Zum hellen Modus wechseln', toDark: 'Zum dunklen Modus wechseln' },
  pl: { toLight: 'Przełącz na tryb jasny', toDark: 'Przełącz na tryb ciemny' },
  hu: { toLight: 'Váltás világos módra', toDark: 'Váltás sötét módra' }
};

function updateThemeIcons(theme) {
  const isLight = theme === 'light';
  // If current theme is light, show Moon (click to switch to dark)
  // If current theme is dark, show Sun (click to switch to light)
  const icon = isLight ? '🌙' : '☀️';
  const lang = window.currentActiveLang || 'sk';
  const tips = themeTooltips[lang] || themeTooltips.sk;
  const title = isLight ? tips.toDark : tips.toLight;

  const desktopIcon = document.getElementById('themeToggleIcon');
  const mobileIcon = document.getElementById('mobileThemeToggleIcon');
  const desktopBtn = document.getElementById('themeToggleBtn');
  const mobileBtn = document.getElementById('mobileThemeToggleBtn');

  if (desktopIcon) desktopIcon.textContent = icon;
  if (mobileIcon) mobileIcon.textContent = icon;
  if (desktopBtn) {
    desktopBtn.setAttribute('title', title);
    desktopBtn.setAttribute('aria-label', title);
  }
  if (mobileBtn) {
    mobileBtn.setAttribute('title', title);
    mobileBtn.setAttribute('aria-label', title);
  }
}
window.initTheme = initTheme;
window.updateThemeIcons = updateThemeIcons;

