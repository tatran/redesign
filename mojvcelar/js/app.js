/* ==========================================================================
   Môj včelár (mojvcelar.sk) — Interactive Engine
   Handles: 4-Language i18n, Light/Dark Theme, Product Catalog, Bundle Calculator,
   Natural Apitherapy Advisor, and Direct Order Form Pre-Fill
   ========================================================================== */

(function () {
  'use strict';

  const state = {
    lang: localStorage.getItem('mojvcelar_lang') || 'sk',
    theme: localStorage.getItem('mojvcelar_theme') || 'light',
    filter: 'all',
    symptom: 'throat',
    cart: {
      'agatovy-med': 1,
      'lucny-med': 1,
      'obnozkovy-pel': 1,
      'propolis-tinktura': 1,
      'vceli-vosk': 0,
      'cesnak-mojmir': 0
    },
    inquiries: new Set()
  };

  function t(key) {
    const dict = window.MOJVCELAR_I18N[state.lang] || window.MOJVCELAR_I18N.sk;
    return dict[key] || window.MOJVCELAR_I18N.sk[key] || key;
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mojvcelar_theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  function applyLanguage(lang) {
    if (!window.MOJVCELAR_I18N[lang]) lang = 'sk';
    state.lang = lang;
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('mojvcelar_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.innerHTML = val;
    });

    renderProducts();
    renderCalculator();
    renderAdvisor();
  }

  function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const list = window.MOJVCELAR_PRODUCTS.filter(item => {
      if (state.filter === 'all') return true;
      if (state.filter === 'inStock') return item.inStock;
      return item.category === state.filter;
    });

    grid.innerHTML = list.map(item => {
      const title = item.title[state.lang] || item.title.sk;
      const desc = item.desc[state.lang] || item.desc.sk;
      const benefits = item.benefits[state.lang] || item.benefits.sk;
      const award = item.award[state.lang] || item.award.sk;

      const stockBadge = item.inStock
        ? `<span class="badge-pill badge-stock">${t('card.inStock')}</span>`
        : `<span class="badge-pill badge-season">${t('card.checkAvail')}</span>`;

      const priceHtml = item.inStock
        ? `<div class="product-price">${item.priceEur} € <small>/ ${item.unit}</small></div>`
        : `<div class="product-price" style="font-size:0.98rem;">${t('card.onInquiry')}<small>${item.unit}</small></div>`;

      const actionBtn = item.inStock
        ? `<button type="button" class="btn btn-primary btn-sm" data-add-id="${item.id}">${t('card.addBtn')}</button>`
        : `<button type="button" class="btn btn-outline btn-sm" data-inquire-id="${item.id}">${t('card.inquireBtn')}</button>`;

      return `
        <article class="product-card">
          <div class="product-media">
            <img src="${item.image}" alt="${title}" loading="lazy" />
            <div class="product-badges">
              ${stockBadge}
              <span class="badge-pill badge-award">🏆 ${award}</span>
            </div>
          </div>
          <div class="product-body">
            <h3 class="product-title">${title}</h3>
            <p class="product-desc">${desc}</p>
            <div class="product-benefits">${benefits}</div>
            <div class="product-footer">
              ${priceHtml}
              ${actionBtn}
            </div>
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('[data-add-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-add-id');
        state.cart[id] = (state.cart[id] || 0) + 1;
        renderCalculator();
        const prod = window.MOJVCELAR_PRODUCTS.find(p => p.id === id);
        showToast(`🍯 ${prod.title[state.lang]} (+1)`);
      });
    });

    grid.querySelectorAll('[data-inquire-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-inquire-id');
        state.inquiries.add(id);
        transferToOrderForm(id);
      });
    });
  }

  function renderCalculator() {
    const container = document.getElementById('calcItems');
    const totalEl = document.getElementById('calcTotal');
    if (!container || !totalEl) return;

    const pricedProducts = window.MOJVCELAR_PRODUCTS.filter(p => p.inStock && p.priceEur);
    let total = 0;

    container.innerHTML = pricedProducts.map(p => {
      const qty = state.cart[p.id] || 0;
      const line = qty * p.priceEur;
      total += line;
      const title = p.title[state.lang] || p.title.sk;
      return `
        <div class="calc-row">
          <div class="calc-row-info">
            <strong>${title}</strong>
            <span>${p.priceEur} € / ${p.unit}</span>
          </div>
          <div class="qty-controls">
            <button type="button" class="qty-btn" data-qty-id="${p.id}" data-delta="-1" aria-label="Decrease">−</button>
            <span class="qty-val">${qty}</span>
            <button type="button" class="qty-btn" data-qty-id="${p.id}" data-delta="1" aria-label="Increase">+</button>
          </div>
        </div>
      `;
    }).join('');

    totalEl.textContent = `${total} €`;

    container.querySelectorAll('[data-qty-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-qty-id');
        const delta = parseInt(btn.getAttribute('data-delta'), 10);
        const next = Math.max(0, (state.cart[id] || 0) + delta);
        state.cart[id] = next;
        renderCalculator();
      });
    });
  }

  function renderAdvisor() {
    const box = document.getElementById('advisorOutput');
    if (!box) return;
    const data = window.MOJVCELAR_ADVISOR[state.symptom] || window.MOJVCELAR_ADVISOR.throat;
    const title = data.title[state.lang] || data.title.sk;
    const text = data.text[state.lang] || data.text.sk;
    const dosage = data.dosage[state.lang] || data.dosage.sk;

    box.innerHTML = `
      <h4>${title}</h4>
      <p>${text}</p>
      <div class="advisor-dosage">💡 ${dosage}</div>
      <div style="margin-top:14px;">
        <button type="button" class="btn btn-primary btn-sm" id="advisorAddBtn" data-prod="${data.addProductId}">
          ${t('advisor.addBtn')}
        </button>
      </div>
    `;

    const addBtn = document.getElementById('advisorAddBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const id = addBtn.getAttribute('data-prod');
        state.cart[id] = (state.cart[id] || 0) + 1;
        renderCalculator();
        const prod = window.MOJVCELAR_PRODUCTS.find(p => p.id === id);
        if (prod) showToast(`🍯 ${prod.title[state.lang]} (+1)`);
      });
    }
  }

  function transferToOrderForm(extraProductId) {
    const lines = [];
    let total = 0;

    window.MOJVCELAR_PRODUCTS.forEach(p => {
      const qty = state.cart[p.id] || 0;
      if (qty > 0 && p.priceEur) {
        const sub = qty * p.priceEur;
        total += sub;
        lines.push(`• ${qty}× ${p.title[state.lang]} (${p.priceEur} € / ${p.unit}) = ${sub} €`);
      }
    });

    if (extraProductId) {
      const ep = window.MOJVCELAR_PRODUCTS.find(p => p.id === extraProductId);
      if (ep) {
        lines.push(`• Overenie dostupnosti: ${ep.title[state.lang]}`);
      }
    }

    state.inquiries.forEach(id => {
      if (id !== extraProductId) {
        const ep = window.MOJVCELAR_PRODUCTS.find(p => p.id === id);
        if (ep) lines.push(`• Overenie dostupnosti: ${ep.title[state.lang]}`);
      }
    });

    const routeSelect = document.getElementById('deliveryRoute');
    const routeText = routeSelect ? routeSelect.options[routeSelect.selectedIndex].text : '';

    const msgArea = document.getElementById('orderMessage');
    if (msgArea) {
      const summary = [
        lines.length ? lines.join('\n') : '• Prosím o informáciu k aktuálnej ponuke medu 2026',
        total > 0 ? `\nOrientačná suma skladových položiek: ${total} €` : '',
        routeText ? `Spôsob prevzatia / dovozu: ${routeText}` : ''
      ].filter(Boolean).join('\n');
      msgArea.value = summary;
    }

    const contactSec = document.getElementById('kontakt');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2600);
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);
    applyLanguage(state.lang);

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
      });
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter = btn.dataset.filter;
        renderProducts();
      });
    });

    document.querySelectorAll('.symptom-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.symptom-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.symptom = btn.dataset.symptom;
        renderAdvisor();
      });
    });

    const transferBtn = document.getElementById('transferOrderBtn');
    if (transferBtn) {
      transferBtn.addEventListener('click', () => transferToOrderForm());
    }

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileBtn && mainNav) {
      mobileBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
      });
      mainNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mainNav.classList.remove('open'));
      });
    }

    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
      orderForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('orderName').value.trim();
        const phone = document.getElementById('orderPhone').value.trim();
        const loc = document.getElementById('orderLocation').value.trim();
        const msg = document.getElementById('orderMessage').value.trim();
        const subject = encodeURIComponent(`Objednávka / Dopyt z webu mojvcelar.sk – ${name}`);
        const body = encodeURIComponent(
          `Meno: ${name}\nTelefón: ${phone}\nLokalita doručenia: ${loc}\n\nVybrané produkty a správa:\n${msg}`
        );
        showToast('✓ Otváram e-mailového klienta pre vcelarenie1@gmail.com');
        window.location.href = `mailto:vcelarenie1@gmail.com?subject=${subject}&body=${body}`;
      });
    }
  });
})();
