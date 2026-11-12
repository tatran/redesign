/**
 * Búvís ehf. - Interactive Application Script
 * Theme toggle (Light/Dark), Bilingual Engine (IS/EN),
 * Product Catalog with Live Search & Filtering,
 * Agricultural Calculators & Sheep Tag Preview,
 * Interactive Akureyri Leaflet Map, and Quote Cart Drawer.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. STATE & STORAGE
  // ==========================================
  const state = {
    theme: localStorage.getItem('buvis-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    lang: localStorage.getItem('buvis-lang') || 'is',
    category: 'all',
    brand: 'all',
    search: '',
    sort: 'featured',
    pageLimit: 12,
    quoteCart: JSON.parse(localStorage.getItem('buvis-quote-cart') || '[]')
  };

  // ==========================================
  // 2. THEME ENGINE (LIGHT + DARK)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(newTheme) {
    state.theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('buvis-theme', newTheme);
    if (themeIcon) {
      themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  // Initial theme application
  applyTheme(state.theme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast(nextTheme === 'dark' 
        ? (state.lang === 'is' ? 'Dökkt þema virkjað 🌙' : 'Dark theme activated 🌙')
        : (state.lang === 'is' ? 'Ljóst þema virkjað ☀️' : 'Light theme activated ☀️')
      );
    });
  }

  // Listen for system theme changes if user hasn't explicitly set one
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('buvis-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ==========================================
  // 3. TRANSLATION & BILINGUAL ENGINE
  // ==========================================
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');

  function setLanguage(newLang) {
    state.lang = newLang;
    localStorage.setItem('buvis-lang', newLang);
    document.documentElement.setAttribute('lang', newLang);
    
    if (langLabel) {
      langLabel.textContent = newLang === 'is' ? 'IS 🇮🇸' : 'EN 🇬🇧';
    }

    const dict = TRANSLATIONS[newLang] || TRANSLATIONS.is;

    // Translate all standard text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Translate HTML titles / ARIA labels
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });

    // Update agricultural calculators reactive texts
    updateCalculators();

    // Re-render product catalog in current language
    renderProducts();

    // Re-render quote drawer in current language
    renderQuoteDrawer();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = state.lang === 'is' ? 'en' : 'is';
      setLanguage(nextLang);
      showToast(nextLang === 'is' ? 'Vefur á íslensku 🇮🇸' : 'Switched to English 🇬🇧');
    });
  }

  // ==========================================
  // 4. PRODUCT CATALOG EXPLORER
  // ==========================================
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('catalog-search-input');
  const brandSelect = document.getElementById('catalog-brand-select');
  const sortSelect = document.getElementById('catalog-sort-select');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const showingCountEl = document.getElementById('showing-counter');
  const catPills = document.querySelectorAll('.cat-pill');

  // Populate Brand Select Options
  if (brandSelect && typeof BUVIS_PRODUCTS !== 'undefined') {
    const brands = [...new Set(BUVIS_PRODUCTS.map(p => p.brand).filter(Boolean))].sort();
    brands.forEach(b => {
      const opt = document.createElement('option');
      opt.value = b;
      opt.textContent = b;
      brandSelect.appendChild(opt);
    });
  }

  function getFilteredProducts() {
    if (typeof BUVIS_PRODUCTS === 'undefined') return [];
    
    let list = BUVIS_PRODUCTS.filter(item => {
      // Category match
      if (state.category !== 'all' && item.category !== state.category) {
        return false;
      }
      // Brand match
      if (state.brand !== 'all' && item.brand !== state.brand) {
        return false;
      }
      // Search match
      if (state.search) {
        const q = state.search.toLowerCase();
        const tIS = (item.title_is || '').toLowerCase();
        const tEN = (item.title_en || '').toLowerCase();
        const b = (item.brand || '').toLowerCase();
        const dIS = (item.short_desc_is || '').toLowerCase();
        const dEN = (item.short_desc_en || '').toLowerCase();
        if (!tIS.includes(q) && !tEN.includes(q) && !b.includes(q) && !dIS.includes(q) && !dEN.includes(q)) {
          return false;
        }
      }
      return true;
    });

    // Sorting
    if (state.sort === 'name_asc') {
      list.sort((a, b) => (state.lang === 'is' ? a.title_is : a.title_en).localeCompare(state.lang === 'is' ? b.title_is : b.title_en));
    } else if (state.sort === 'name_desc') {
      list.sort((a, b) => (state.lang === 'is' ? b.title_is : b.title_en).localeCompare(state.lang === 'is' ? a.title_is : a.title_en));
    } else {
      // Featured first
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }

  function renderProducts() {
    if (!productsGrid) return;
    const filtered = getFilteredProducts();
    const visible = filtered.slice(0, state.pageLimit);
    const dict = TRANSLATIONS[state.lang] || TRANSLATIONS.is;

    productsGrid.innerHTML = '';

    if (visible.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
          <h3>${state.lang === 'is' ? 'Engar vörur fundust' : 'No products found'}</h3>
          <p>${state.lang === 'is' ? 'Prófaðu að breyta leitarorði eða velja annan vöruflokk.' : 'Try adjusting your search terms or selecting another category.'}</p>
        </div>
      `;
      if (showingCountEl) showingCountEl.textContent = '';
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }

    visible.forEach(item => {
      const isIS = state.lang === 'is';
      const title = isIS ? item.title_is : item.title_en;
      const desc = isIS ? item.short_desc_is : item.short_desc_en;
      const inCart = state.quoteCart.some(c => c.id === item.id);
      
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-thumb-wrap">
          ${item.badge ? `<span class="card-badge ${item.badge.includes('2026') ? 'badge-warm' : ''}">${item.badge}</span>` : ''}
          <img src="${item.image}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='images/hero_mix.jpg';">
        </div>
        <div class="product-info-wrap">
          <div class="product-meta-tags">
            <span>${item.category.replace('_', ' ')}</span>
            <span class="brand-tag">${item.brand}</span>
          </div>
          <h4 class="product-title">${title}</h4>
          <p class="product-excerpt">${desc}</p>
          <div class="product-card-actions">
            <button class="btn-card-quote ${inCart ? 'in-cart' : ''}" data-id="${item.id}">
              ${inCart ? dict.btn_added : dict.btn_add_quote}
            </button>
            <button class="btn-card-view" data-id="${item.id}" title="${dict.btn_quick_view}">
              ℹ️
            </button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    // Update Counter
    if (showingCountEl) {
      showingCountEl.textContent = `${dict.products_showing} ${visible.length} ${dict.products_of} ${filtered.length} ${dict.products_total}`;
    }

    // Update Load More button
    if (loadMoreBtn) {
      loadMoreBtn.style.display = visible.length < filtered.length ? 'inline-flex' : 'none';
    }

    // Attach click events for cards
    productsGrid.querySelectorAll('.btn-card-quote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.getAttribute('data-id');
        toggleCartItem(prodId);
      });
    });

    productsGrid.querySelectorAll('.btn-card-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.getAttribute('data-id');
        openQuickView(prodId);
      });
    });
  }

  // Category Filter Pill Clicks
  catPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      catPills.forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.category = e.currentTarget.getAttribute('data-category');
      state.pageLimit = 12;
      renderProducts();
    });
  });

  // Search Input Handler (Live Filter)
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value.trim();
      state.pageLimit = 12;
      renderProducts();
    });
  }

  // Brand Select Handler
  if (brandSelect) {
    brandSelect.addEventListener('change', (e) => {
      state.brand = e.target.value;
      state.pageLimit = 12;
      renderProducts();
    });
  }

  // Sort Select Handler
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }

  // Load More Button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      state.pageLimit += 12;
      renderProducts();
    });
  }

  // Keyboard shortcut '/' to search
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  // ==========================================
  // 5. INTERACTIVE AGRICULTURAL CALCULATORS
  // ==========================================
  const calcTabs = document.querySelectorAll('.calc-tab-btn');
  const calcContents = document.querySelectorAll('.calc-tab-content');

  calcTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      calcTabs.forEach(t => t.classList.remove('active'));
      calcContents.forEach(c => c.classList.remove('active'));

      e.currentTarget.classList.add('active');
      const targetId = e.currentTarget.getAttribute('data-tab');
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.classList.add('active');
    });
  });

  // --- Wrap & Net Calculator Elements ---
  const baleCountSlider = document.getElementById('calc-bale-count');
  const baleCountDisplay = document.getElementById('calc-bale-count-val');
  const wrapLayersRadios = document.querySelectorAll('input[name="wrap-layers"]');
  const baleSizeRadios = document.querySelectorAll('input[name="bale-size"]');
  const wrapFilmResult = document.getElementById('calc-wrap-result-film');
  const wrapNetResult = document.getElementById('calc-wrap-result-net');
  const addWrapQuoteBtn = document.getElementById('btn-add-wrap-quote');

  function calculateWrap() {
    if (!baleCountSlider || !wrapFilmResult) return;
    const bales = parseInt(baleCountSlider.value, 10);
    if (baleCountDisplay) baleCountDisplay.textContent = bales.toLocaleString();

    let layers = 6;
    wrapLayersRadios.forEach(r => { if (r.checked) layers = parseInt(r.value, 10); });

    let sizeFactor = 1.0;
    baleSizeRadios.forEach(r => { if (r.checked && r.value === '130') sizeFactor = 1.12; });

    // 1 roll 1500m of 750mm stretch film seals:
    // 4 layers: ~40-42 bales (factor 1.0)
    // 6 layers: ~27-28 bales
    // 8 layers: ~20-21 bales
    let balesPerRoll = (165 / layers) / sizeFactor;
    let rollsNeeded = Math.ceil(bales / balesPerRoll);

    // 1 roll 3000m Tama net covers ~260 standard bales
    let netRollsNeeded = Math.ceil(bales / (260 / sizeFactor));

    const isIS = state.lang === 'is';
    wrapFilmResult.textContent = `${rollsNeeded} ${isIS ? 'rúllur (ASPLA 750mm)' : 'rolls (ASPLA 750mm)'}`;
    wrapNetResult.textContent = `${netRollsNeeded} ${isIS ? 'rúllur (Tama Net 3000m)' : 'rolls (Tama Net 3000m)'}`;
  }

  if (baleCountSlider) {
    baleCountSlider.addEventListener('input', calculateWrap);
  }
  wrapLayersRadios.forEach(r => r.addEventListener('change', (e) => {
    document.querySelectorAll('.radio-pill-label[data-group="layers"]').forEach(l => l.classList.remove('active'));
    e.target.closest('.radio-pill-label').classList.add('active');
    calculateWrap();
  }));
  baleSizeRadios.forEach(r => r.addEventListener('change', (e) => {
    document.querySelectorAll('.radio-pill-label[data-group="size"]').forEach(l => l.classList.remove('active'));
    e.target.closest('.radio-pill-label').classList.add('active');
    calculateWrap();
  }));

  if (addWrapQuoteBtn) {
    addWrapQuoteBtn.addEventListener('click', () => {
      const bales = baleCountSlider.value;
      const film = wrapFilmResult.textContent;
      const net = wrapNetResult.textContent;
      addCustomItemToCart({
        id: 'calc-wrap-bundle',
        title: state.lang === 'is' ? `Rúlluplast & Net (${bales} rúllur)` : `Silage Film & Netpack (${bales} bales)`,
        subtitle: `${film} + ${net}`,
        image: 'images/aspla_wrap.jpg'
      });
      openQuoteDrawer();
    });
  }

  // --- Fertilizer Calculator Elements ---
  const fertHaSlider = document.getElementById('calc-fert-ha');
  const fertHaDisplay = document.getElementById('calc-fert-ha-val');
  const fertUsageSelect = document.getElementById('calc-fert-usage');
  const fertIntensityRadios = document.querySelectorAll('input[name="fert-intensity"]');
  const fertTonsResult = document.getElementById('calc-fert-result-tons');
  const fertBagsResult = document.getElementById('calc-fert-result-bags');
  const fertBlendResult = document.getElementById('calc-fert-result-blend');
  const addFertQuoteBtn = document.getElementById('btn-add-fert-quote');

  function calculateFertilizer() {
    if (!fertHaSlider || !fertTonsResult) return;
    const ha = parseInt(fertHaSlider.value, 10);
    if (fertHaDisplay) fertHaDisplay.textContent = `${ha} ha`;

    const usage = fertUsageSelect ? fertUsageSelect.value : 'hay';
    let intensity = 1.0;
    fertIntensityRadios.forEach(r => { if (r.checked && r.value === 'intensive') intensity = 1.25; });

    let rateKgPerHa = 400; // default hay
    let blend = 'YaraBela KRAFTUR 27 (27N + 4Mg)';

    if (usage === 'pasture') {
      rateKgPerHa = 220;
      blend = 'YaraMila Opti-Grass (NPK 22-06-06 + 3S)';
    } else if (usage === 'grain') {
      rateKgPerHa = 320;
      blend = 'YaraMila Kornrækt (NPK 20-04-10 + Se)';
    }

    const totalKg = ha * rateKgPerHa * intensity;
    const totalTons = (totalKg / 1000).toFixed(1);
    const bigBags = Math.ceil(totalKg / 600); // 600 kg bags

    fertTonsResult.textContent = `${totalTons} ${state.lang === 'is' ? 'tonn' : 'tons'}`;
    fertBagsResult.textContent = `${bigBags} ${state.lang === 'is' ? 'stórsekkir (600 kg)' : 'big bags (600 kg)'}`;
    if (fertBlendResult) fertBlendResult.textContent = blend;
  }

  if (fertHaSlider) fertHaSlider.addEventListener('input', calculateFertilizer);
  if (fertUsageSelect) fertUsageSelect.addEventListener('change', calculateFertilizer);
  fertIntensityRadios.forEach(r => r.addEventListener('change', (e) => {
    document.querySelectorAll('.radio-pill-label[data-group="fert-intensity"]').forEach(l => l.classList.remove('active'));
    e.target.closest('.radio-pill-label').classList.add('active');
    calculateFertilizer();
  }));

  if (addFertQuoteBtn) {
    addFertQuoteBtn.addEventListener('click', () => {
      const ha = fertHaSlider.value;
      const tons = fertTonsResult.textContent;
      const blend = fertBlendResult.textContent;
      addCustomItemToCart({
        id: 'calc-fert-bundle',
        title: state.lang === 'is' ? `Áburður 2026 (${ha} ha áætlun)` : `Fertilizer 2026 (${ha} ha demand)`,
        subtitle: `${tons} • ${blend}`,
        image: 'images/aburdur_2026.jpg'
      });
      openQuoteDrawer();
    });
  }

  // --- Sheep Tag (Lambamerki) Preview Generator ---
  const tagFarmInput = document.getElementById('tag-farm-id');
  const tagStartNumInput = document.getElementById('tag-start-num');
  const tagColorSelect = document.getElementById('tag-color-select');
  const tagTypeSelect = document.getElementById('tag-type-select');
  const tagMockup = document.getElementById('sheep-tag-preview');
  const tagMockupFarm = document.getElementById('tag-preview-farm');
  const tagMockupSerial = document.getElementById('tag-preview-serial');
  const tagChipIndicator = document.getElementById('tag-chip-indicator');
  const submitTagOrderBtn = document.getElementById('btn-submit-tag-order');

  function updateTagPreview() {
    if (!tagMockup) return;
    const farmId = (tagFarmInput && tagFarmInput.value.trim()) || 'IS-12345';
    const serial = (tagStartNumInput && tagStartNumInput.value.trim()) || '0001';
    const color = (tagColorSelect && tagColorSelect.value) || 'yellow';
    const type = (tagTypeSelect && tagTypeSelect.value) || 'std';

    if (tagMockupFarm) tagMockupFarm.textContent = farmId.toUpperCase();
    if (tagMockupSerial) tagMockupSerial.textContent = serial;

    // Reset color classes
    tagMockup.className = `sheep-tag-mockup color-${color}`;

    if (tagChipIndicator) {
      tagChipIndicator.style.display = type === 'rfid' ? 'flex' : 'none';
    }
  }

  if (tagFarmInput) tagFarmInput.addEventListener('input', updateTagPreview);
  if (tagStartNumInput) tagStartNumInput.addEventListener('input', updateTagPreview);
  if (tagColorSelect) tagColorSelect.addEventListener('change', updateTagPreview);
  if (tagTypeSelect) tagTypeSelect.addEventListener('change', updateTagPreview);

  if (submitTagOrderBtn) {
    submitTagOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const farmId = tagFarmInput.value.trim();
      const count = document.getElementById('tag-count-input').value;
      if (!farmId) {
        showToast(state.lang === 'is' ? 'Vinsamlegast fylltu út búsnúmer!' : 'Please enter your farm holding ID!');
        tagFarmInput.focus();
        return;
      }
      addCustomItemToCart({
        id: `tag-order-${Date.now()}`,
        title: state.lang === 'is' ? `Lambamerki: ${farmId}` : `Ear Tags: ${farmId}`,
        subtitle: `${count} stk. • Litur: ${tagColorSelect.value} • ${tagTypeSelect.options[tagTypeSelect.selectedIndex].text}`,
        image: 'images/prod_lambamerki.jpg'
      });
      openQuoteDrawer();
      showToast(state.lang === 'is' ? 'Lambamerkjum bætt í körfu!' : 'Ear tags added to quote basket!');
    });
  }

  function updateCalculators() {
    calculateWrap();
    calculateFertilizer();
    updateTagPreview();
  }

  // ==========================================
  // 6. QUOTE CART & SLIDE-OUT DRAWER
  // ==========================================
  const quoteDrawer = document.getElementById('quote-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const cartBadge = document.getElementById('cart-badge');
  const drawerItemsList = document.getElementById('drawer-items-list');
  const drawerEmptyMsg = document.getElementById('drawer-empty-msg');
  const clearCartBtn = document.getElementById('drawer-clear-btn');
  const quoteForm = document.getElementById('drawer-quote-form');

  function openQuoteDrawer() {
    if (quoteDrawer && drawerOverlay) {
      quoteDrawer.classList.add('active');
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQuoteDrawer() {
    if (quoteDrawer && drawerOverlay) {
      quoteDrawer.classList.remove('active');
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openQuoteDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeQuoteDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', () => {
    closeQuoteDrawer();
    closeQuickView();
  });

  function updateCartBadge() {
    if (cartBadge) {
      cartBadge.textContent = state.quoteCart.length;
      cartBadge.style.display = state.quoteCart.length > 0 ? 'flex' : 'none';
    }
  }

  function toggleCartItem(prodId) {
    const existingIndex = state.quoteCart.findIndex(item => item.id === prodId);
    if (existingIndex !== -1) {
      // Remove
      state.quoteCart.splice(existingIndex, 1);
      showToast(state.lang === 'is' ? 'Fjarlægt úr tilboðskörfu' : 'Removed from quote basket');
    } else {
      // Add
      const p = BUVIS_PRODUCTS.find(x => x.id === prodId);
      if (p) {
        state.quoteCart.push({
          id: p.id,
          title: state.lang === 'is' ? p.title_is : p.title_en,
          subtitle: p.brand,
          image: p.image
        });
        showToast(state.lang === 'is' ? `${p.title_is} bætt í tilboðskarfa! 🌾` : `${p.title_en} added to quote basket! 🌾`);
      }
    }
    localStorage.setItem('buvis-quote-cart', JSON.stringify(state.quoteCart));
    updateCartBadge();
    renderProducts();
    renderQuoteDrawer();
  }

  function addCustomItemToCart(item) {
    state.quoteCart.push(item);
    localStorage.setItem('buvis-quote-cart', JSON.stringify(state.quoteCart));
    updateCartBadge();
    renderQuoteDrawer();
  }

  function renderQuoteDrawer() {
    if (!drawerItemsList) return;
    drawerItemsList.innerHTML = '';
    
    if (state.quoteCart.length === 0) {
      if (drawerEmptyMsg) drawerEmptyMsg.style.display = 'block';
      if (clearCartBtn) clearCartBtn.style.display = 'none';
      if (quoteForm) quoteForm.style.display = 'none';
      return;
    }

    if (drawerEmptyMsg) drawerEmptyMsg.style.display = 'none';
    if (clearCartBtn) clearCartBtn.style.display = 'inline-block';
    if (quoteForm) quoteForm.style.display = 'block';

    state.quoteCart.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'cart-item-card';
      row.innerHTML = `
        <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='images/logo.png';">
        <div class="cart-item-meta">
          <h5>${item.title}</h5>
          <p>${item.subtitle || ''}</p>
        </div>
        <button class="cart-item-del" data-index="${index}" title="Fjarlægja">&times;</button>
      `;
      drawerItemsList.appendChild(row);
    });

    drawerItemsList.querySelectorAll('.cart-item-del').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        state.quoteCart.splice(idx, 1);
        localStorage.setItem('buvis-quote-cart', JSON.stringify(state.quoteCart));
        updateCartBadge();
        renderProducts();
        renderQuoteDrawer();
      });
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      state.quoteCart = [];
      localStorage.setItem('buvis-quote-cart', JSON.stringify(state.quoteCart));
      updateCartBadge();
      renderProducts();
      renderQuoteDrawer();
      showToast(state.lang === 'is' ? 'Körfunni var tæmt' : 'Basket cleared');
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const farm = document.getElementById('drawer-farm-name').value;
      const phone = document.getElementById('drawer-phone').value;
      
      showToast(state.lang === 'is' 
        ? `Takk ${farm}! Tilboðsbeiðni móttekin. Við hringjum í ${phone}.`
        : `Thank you ${farm}! Quote request submitted. We'll call ${phone}.`
      );
      
      state.quoteCart = [];
      localStorage.setItem('buvis-quote-cart', JSON.stringify(state.quoteCart));
      updateCartBadge();
      renderProducts();
      renderQuoteDrawer();
      closeQuoteDrawer();
    });
  }

  // ==========================================
  // 7. QUICK VIEW MODAL
  // ==========================================
  const quickModal = document.getElementById('quick-view-modal');
  const quickModalClose = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalBrand = document.getElementById('modal-brand');
  const modalDesc = document.getElementById('modal-desc');
  const modalSpecs = document.getElementById('modal-specs');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');

  let activeModalProductId = null;

  function openQuickView(prodId) {
    const item = BUVIS_PRODUCTS.find(p => p.id === prodId);
    if (!item || !quickModal) return;

    activeModalProductId = prodId;
    const isIS = state.lang === 'is';

    if (modalImg) modalImg.src = item.image;
    if (modalTitle) modalTitle.textContent = isIS ? item.title_is : item.title_en;
    if (modalBrand) modalBrand.textContent = `${item.brand} • ${item.category.toUpperCase()}`;
    if (modalDesc) modalDesc.textContent = isIS ? item.short_desc_is : item.short_desc_en;

    if (modalSpecs) {
      modalSpecs.innerHTML = `
        <li><strong>${isIS ? 'Framleiðandi' : 'Manufacturer'}:</strong> ${item.brand}</li>
        <li><strong>${isIS ? 'Vöruflokkur' : 'Category'}:</strong> ${item.category}</li>
        <li><strong>${isIS ? 'Afgreiðsla' : 'Delivery'}:</strong> ${isIS ? 'Á lager / beint afgreitt frá Akureyri' : 'In stock / dispatched from Akureyri'}</li>
        <li><strong>${isIS ? 'Ábyrgð & Varahlutir' : 'Warranty & Support'}:</strong> ${isIS ? 'Fullur varahluta- og viðgerðarstuðningur Búvís' : 'Full factory warranty and genuine spare parts inventory'}</li>
      `;
    }

    quickModal.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (quickModal) quickModal.classList.remove('active');
    if (drawerOverlay && !quoteDrawer.classList.contains('active')) {
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (quickModalClose) quickModalClose.addEventListener('click', closeQuickView);

  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      if (activeModalProductId) {
        toggleCartItem(activeModalProductId);
        closeQuickView();
        openQuoteDrawer();
      }
    });
  }

  // ==========================================
  // 8. INTERACTIVE LEAFLET MAP (AKUREYRI HQ)
  // ==========================================
  const mapContainer = document.getElementById('akureyri-map');
  if (mapContainer && typeof L !== 'undefined') {
    // Coordinates for Grímseyjargata 1, 600 Akureyri, Iceland
    const akureyriCoords = [65.6888, -18.0878];
    const map = L.map('akureyri-map', {
      scrollWheelZoom: false
    }).setView(akureyriCoords, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker(akureyriCoords).addTo(map);
    marker.bindPopup(`
      <div style="font-family: inherit; font-size: 0.9rem; line-height: 1.4;">
        <strong style="color: #196939; font-size: 1rem;">Búvís ehf.</strong><br>
        Grímseyjargötu 1, 600 Akureyri<br>
        <strong>Sími:</strong> 465 1332<br>
        <strong>Netfang:</strong> buvis@buvis.is<br>
        <em>Opið Mán–Fös 08:00–17:00</em>
      </div>
    `).openPopup();
  }

  // ==========================================
  // 9. GENERAL CONTACT FORM
  // ==========================================
  const mainContactForm = document.getElementById('main-contact-form');
  if (mainContactForm) {
    mainContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      showToast(state.lang === 'is'
        ? `Takk fyrir ${name}! Skilaboðin þín hafa verið send til Búvís.`
        : `Thank you ${name}! Your message has been sent to Búvís.`
      );
      mainContactForm.reset();
    });
  }

  // ==========================================
  // 10. TOAST NOTIFICATION UTILITY
  // ==========================================
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> <div>${message}</div>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Mobile menu drawer toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          if (mobileNav) mobileNav.classList.remove('active');
        }
      }
    });
  });

  // INITIAL RUN
  setLanguage(state.lang);
  updateCartBadge();
  updateCalculators();
  renderProducts();
});
