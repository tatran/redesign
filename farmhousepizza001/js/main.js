/* ==========================================================================
   Farmhouse Pizza and Donair — Interactive UI, Theme, Bilingual & Menu Logic
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_LANG = 'farmhouse_lang';
  const STORAGE_THEME = 'farmhouse_theme';

  let currentLang = localStorage.getItem(STORAGE_LANG) || 'en';
  if (!['en', 'fr'].includes(currentLang)) currentLang = 'en';

  let currentCategory = 'pizzas';
  let currentFilter = 'all';
  let searchQuery = '';
  let deliveryKm = 4;
  let tray = []; // { id, nameEn, nameFr, optionLabelEn, optionLabelFr, price, qty }

  // ---- Helper: Get nested i18n string ----
  function t(path) {
    const parts = path.split('.');
    let node = window.FARMHOUSE_I18N[currentLang];
    for (const p of parts) {
      if (node && typeof node === 'object' && p in node) {
        node = node[p];
      } else {
        return path;
      }
    }
    return node;
  }

  function formatCAD(num) {
    if (currentLang === 'fr') {
      return num.toFixed(2).replace('.', ',') + ' $';
    }
    return '$' + num.toFixed(2);
  }

  // ---- Theme Switcher (Dark / Light) ----
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = saved || (prefersLight ? 'light' : 'dark');
    applyTheme(theme);

    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem(STORAGE_THEME, next);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const sun = document.getElementById('iconSun');
    const moon = document.getElementById('iconMoon');
    if (sun && moon) {
      sun.style.display = theme === 'light' ? 'none' : 'block';
      moon.style.display = theme === 'light' ? 'block' : 'none';
    }
  }

  // ---- Live Vernon, BC Open/Closed Status ----
  function updateOpenStatus() {
    const pill = document.getElementById('openStatusPill');
    const text = document.getElementById('openStatusText');
    if (!pill || !text) return;

    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Vancouver',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
      });
      const parts = formatter.formatToParts(now);
      const day = parts.find(p => p.type === 'weekday')?.value || 'Mon';
      const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '12', 10);
      const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);
      const mins = hour * 60 + minute;

      let openMins = 11 * 60;
      let closeMins = 20 * 60;
      if (day === 'Fri') {
        openMins = 11 * 60;
        closeMins = 21 * 60;
      } else if (day === 'Sat' || day === 'Sun') {
        openMins = 15 * 60;
        closeMins = 20 * 60;
      }

      const isOpen = mins >= openMins && mins < closeMins;
      pill.classList.toggle('closed', !isOpen);
      text.textContent = isOpen ? t('topbar.openNow') : t('topbar.closedNow');
    } catch (e) {
      text.textContent = t('topbar.openNow');
    }
  }

  // ---- Language Switcher (EN / FR) ----
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';

    // Update SEO title & description dynamically
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    // Update active lang buttons
    document.querySelectorAll('[data-lang-switch]').forEach(btn => {
      const isMatch = btn.getAttribute('data-lang-switch') === lang;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (typeof val === 'string') {
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update placeholders & aria-labels
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    updateOpenStatus();
    renderMenu();
    updateDeliveryCalc();
    renderTray();
  }

  // ---- Menu Explorer ----
  const selectedOptions = {}; // itemId -> optionIndex

  function getTagLabel(tag) {
    const map = {
      fav: { en: '★ House Favourite', fr: '★ Favori Maison' },
      veg: { en: 'Vegetarian', fr: 'Végétarien' },
      gf: { en: 'GF Option', fr: 'Option SG' },
      halal: { en: 'Halal', fr: 'Halal' },
      spicy: { en: 'Spicy', fr: 'Épicé' }
    };
    return map[tag] ? map[tag][currentLang] : tag;
  }

  function renderMenu() {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;

    const q = searchQuery.trim().toLowerCase();
    const items = window.FARMHOUSE_MENU.filter(item => {
      const matchCat = q ? true : item.category === currentCategory;
      const matchFilter = currentFilter === 'all' || item.tags.includes(currentFilter);
      const hay = (item.name.en + ' ' + item.name.fr + ' ' + item.desc.en + ' ' + item.desc.fr).toLowerCase();
      const matchQuery = !q || hay.includes(q);
      return matchCat && matchFilter && matchQuery;
    });

    if (!items.length) {
      grid.innerHTML = `<div class="menu-item-card" style="grid-column: 1 / -1; text-align:center; padding: 36px;">
        <p class="menu-item-desc">${t('menu.emptyState')}</p>
      </div>`;
      return;
    }

    grid.innerHTML = items.map(item => {
      const optIdx = selectedOptions[item.id] ?? 0;
      const activeOpt = item.options[optIdx] || item.options[0];
      const badgesHtml = item.tags.map(tag => `<span class="item-badge ${tag}">${getTagLabel(tag)}</span>`).join('');
      const optionsHtml = item.options.length > 1
        ? `<div class="size-pills">${item.options.map((opt, idx) => `
            <button type="button" class="size-pill ${idx === optIdx ? 'active' : ''}" data-item-opt="${item.id}" data-opt-idx="${idx}">
              ${opt.label[currentLang]}
            </button>`).join('')}</div>`
        : `<span class="item-badge">${activeOpt.label[currentLang]}</span>`;

      return `
        <article class="menu-item-card">
          <div>
            <div class="menu-item-top">
              <h3 class="menu-item-name">${item.name[currentLang]}</h3>
              <span class="menu-item-price">${formatCAD(activeOpt.price)}</span>
            </div>
            ${badgesHtml ? `<div class="menu-item-badges">${badgesHtml}</div>` : ''}
            <p class="menu-item-desc">${item.desc[currentLang]}</p>
          </div>
          <div class="menu-item-bottom">
            ${optionsHtml}
            <button type="button" class="btn btn-secondary btn-sm" data-add-tray="${item.id}">
              ${t('menu.addBtn')}
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  function initMenuControls() {
    document.querySelectorAll('[data-menu-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-menu-cat');
        searchQuery = '';
        const searchInput = document.getElementById('menuSearch');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('[data-menu-cat]').forEach(b => b.classList.toggle('active', b === btn));
        renderMenu();
      });
    });

    document.querySelectorAll('[data-menu-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentFilter = btn.getAttribute('data-menu-filter');
        document.querySelectorAll('[data-menu-filter]').forEach(b => b.classList.toggle('active', b === btn));
        renderMenu();
      });
    });

    const searchInput = document.getElementById('menuSearch');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        searchQuery = e.target.value;
        renderMenu();
      });
    }

    const grid = document.getElementById('menuGrid');
    if (grid) {
      grid.addEventListener('click', e => {
        const optBtn = e.target.closest('[data-item-opt]');
        if (optBtn) {
          const id = optBtn.getAttribute('data-item-opt');
          selectedOptions[id] = parseInt(optBtn.getAttribute('data-opt-idx'), 10);
          renderMenu();
          return;
        }
        const addBtn = e.target.closest('[data-add-tray]');
        if (addBtn) {
          addToTray(addBtn.getAttribute('data-add-tray'));
        }
      });
    }

    // Spotlight jump links
    document.querySelectorAll('[data-jump-cat]').forEach(link => {
      link.addEventListener('click', () => {
        const cat = link.getAttribute('data-jump-cat');
        const tab = document.querySelector(`[data-menu-cat="${cat}"]`);
        if (tab) tab.click();
      });
    });
  }

  // ---- Delivery Fee Calculator ($7 first 6 km + $1/extra km) ----
  function calcDeliveryFee(km) {
    return km <= 6 ? 7 : 7 + (km - 6);
  }

  function updateDeliveryCalc() {
    const slider = document.getElementById('deliverySlider');
    const kmOut = document.getElementById('deliveryKmOut');
    const feeOut = document.getElementById('deliveryFeeOut');
    if (!slider || !kmOut || !feeOut) return;

    const fee = calcDeliveryFee(deliveryKm);
    kmOut.textContent = `${deliveryKm} km`;
    feeOut.textContent = formatCAD(fee);
  }

  function initDeliveryCalc() {
    const slider = document.getElementById('deliverySlider');
    if (slider) {
      slider.addEventListener('input', e => {
        deliveryKm = parseInt(e.target.value, 10);
        document.querySelectorAll('[data-hood-km]').forEach(c => c.classList.remove('active'));
        updateDeliveryCalc();
        renderTray();
      });
    }

    document.querySelectorAll('[data-hood-km]').forEach(chip => {
      chip.addEventListener('click', () => {
        deliveryKm = parseInt(chip.getAttribute('data-hood-km'), 10);
        if (slider) slider.value = deliveryKm;
        document.querySelectorAll('[data-hood-km]').forEach(c => c.classList.toggle('active', c === chip));
        updateDeliveryCalc();
        renderTray();
      });
    });
  }

  // ---- Order Tray Drawer ----
  function addToTray(itemId) {
    const item = window.FARMHOUSE_MENU.find(i => i.id === itemId);
    if (!item) return;
    const optIdx = selectedOptions[itemId] ?? 0;
    const opt = item.options[optIdx] || item.options[0];
    const key = `${item.id}::${optIdx}`;

    const existing = tray.find(x => x.key === key);
    if (existing) {
      existing.qty += 1;
    } else {
      tray.push({
        key,
        name: item.name,
        optLabel: opt.label,
        price: opt.price,
        qty: 1
      });
    }
    renderTray();
    showToast(`${item.name[currentLang]} — ${t('tray.addedToast')}`);
  }

  function renderTray() {
    const countBadge = document.getElementById('trayCount');
    const body = document.getElementById('trayBody');
    const subEl = document.getElementById('traySubtotal');
    const delEl = document.getElementById('trayDelivery');
    const totEl = document.getElementById('trayTotal');

    const totalQty = tray.reduce((sum, i) => sum + i.qty, 0);
    if (countBadge) {
      countBadge.textContent = totalQty > 0 ? String(totalQty) : '';
      countBadge.setAttribute('data-count', String(totalQty));
    }

    if (!body) return;
    if (!tray.length) {
      body.innerHTML = `<p style="color:var(--text-muted); text-align:center; margin-top:40px;">${t('tray.empty')}</p>`;
    } else {
      body.innerHTML = tray.map(row => `
        <div class="tray-item">
          <div>
            <div style="font-weight:700; font-size:0.94rem;">${row.name[currentLang]}</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">${row.optLabel[currentLang]} · ${formatCAD(row.price)}</div>
          </div>
          <div class="tray-qty">
            <button type="button" class="qty-btn" data-qty-delta="-1" data-tray-key="${row.key}" aria-label="Decrease">−</button>
            <span style="font-family:var(--font-mono); font-weight:700; min-width:18px; text-align:center;">${row.qty}</span>
            <button type="button" class="qty-btn" data-qty-delta="1" data-tray-key="${row.key}" aria-label="Increase">+</button>
          </div>
        </div>
      `).join('');
    }

    const subtotal = tray.reduce((sum, i) => sum + i.price * i.qty, 0);
    const delFee = tray.length ? calcDeliveryFee(deliveryKm) : 0;
    if (subEl) subEl.textContent = formatCAD(subtotal);
    if (delEl) delEl.textContent = formatCAD(delFee);
    if (totEl) totEl.textContent = formatCAD(subtotal + delFee);
  }

  function initTray() {
    const backdrop = document.getElementById('trayBackdrop');
    const openBtn = document.getElementById('openTrayBtn');
    const closeBtn = document.getElementById('closeTrayBtn');
    const clearBtn = document.getElementById('clearTrayBtn');
    const body = document.getElementById('trayBody');

    const open = () => backdrop && backdrop.classList.add('open');
    const close = () => backdrop && backdrop.classList.remove('open');

    if (openBtn) openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (backdrop) {
      backdrop.addEventListener('click', e => {
        if (e.target === backdrop) close();
      });
    }
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        tray = [];
        renderTray();
      });
    }
    if (body) {
      body.addEventListener('click', e => {
        const btn = e.target.closest('[data-qty-delta]');
        if (!btn) return;
        const delta = parseInt(btn.getAttribute('data-qty-delta'), 10);
        const key = btn.getAttribute('data-tray-key');
        const row = tray.find(x => x.key === key);
        if (!row) return;
        row.qty += delta;
        if (row.qty <= 0) {
          tray = tray.filter(x => x.key !== key);
        }
        renderTray();
      });
    }
  }

  // ---- Toast ----
  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  // ---- FAQ Accordion ----
  function initFaq() {
    document.querySelectorAll('.faq-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const ans = item.querySelector('.faq-answer');
        const isOpen = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        ans.style.maxHeight = isOpen ? ans.scrollHeight + 'px' : '0px';
      });
    });
  }

  // ---- Mobile Drawer ----
  function initMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const openBtn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('closeMobileBtn');
    if (!drawer) return;

    const toggle = (state) => drawer.classList.toggle('open', state);
    if (openBtn) openBtn.addEventListener('click', () => toggle(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggle(false));
    drawer.addEventListener('click', e => {
      if (e.target === drawer || e.target.closest('a')) toggle(false);
    });
  }

  // ---- Boot ----
  document.addEventListener('DOMContentLoaded', () => {
    // Check URL query ?lang=fr or ?lang=en
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'fr' || urlLang === 'en') {
      currentLang = urlLang;
    }

    initTheme();
    initMenuControls();
    initDeliveryCalc();
    initTray();
    initFaq();
    initMobileDrawer();

    document.querySelectorAll('[data-lang-switch]').forEach(btn => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang-switch'));
      });
    });

    applyLanguage(currentLang);
  });
})();
