// BUGÁR, s.r.o. Interactive Application Controller (SK / DE / EN / HU)

(() => {
  const DATA = window.BUGAR_DATA;
  const I18N = window.BUGAR_TRANSLATIONS;
  const LANGS = ["sk", "de", "en", "hu"];

  const state = {
    lang: "sk",
    theme: "light",
    calcMode: "heating",
    heatArea: 140,
    propType: "new",
    heatSource: "heatpump",
    heatDist: "floor",
    solarAddon: false,
    bathArea: 9,
    bathTier: "comfort",
    bath3d: true,
    portfolioFilter: "all",
    activeCategory: "all",
    searchQuery: "",
    basket: [],
    lightboxIndex: -1,
    filteredPortfolio: []
  };

  let mapInstance = null;
  let samorinMarker = null;
  let dsMarker = null;

  function getNested(obj, path) {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  function t(path) {
    return getNested(I18N[state.lang], path) ?? getNested(I18N.sk, path) ?? path;
  }

  function initLang() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    const saved = localStorage.getItem("bugar_lang");
    if (urlLang && LANGS.includes(urlLang)) {
      state.lang = urlLang;
    } else if (saved && LANGS.includes(saved)) {
      state.lang = saved;
    }
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) return;
    state.lang = lang;
    localStorage.setItem("bugar_lang", lang);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());

    document.documentElement.lang = lang;
    document.title = t("meta.title");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    applyTranslations();
    renderServices();
    renderCategories();
    renderProducts();
    renderPortfolio();
    renderPartners();
    renderBasket();
    updateCalculator();
    updateMapPopups();
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (typeof val === "string") el.textContent = val;
    });

    const searchInput = document.getElementById("catalogSearch");
    if (searchInput) searchInput.placeholder = t("catalog.searchPlaceholder");

    const msgInput = document.getElementById("contactMessage");
    if (msgInput) msgInput.placeholder = t("contact.msgPlaceholder");

    const b2bMap = {
      b2bCompany: "basket.companyName",
      b2bIco: "basket.ico",
      b2bDic: "basket.dic",
      b2bIcDph: "basket.icDph",
      basketContact: "basket.contactEmail",
      basketNote: "basket.notePlaceholder"
    };
    Object.entries(b2bMap).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) el.placeholder = t(key);
    });

    const regNote = document.getElementById("registerNote");
    if (regNote) regNote.textContent = DATA.company.register[state.lang] || DATA.company.register.sk;
  }

  function initTheme() {
    const saved = localStorage.getItem("bugar_theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    applyTheme(initial);
  }

  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem("bugar_theme", theme);
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    const icon = document.getElementById("themeIcon");
    if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function renderServices() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;

    grid.innerHTML = DATA.services.map((srv) => {
      const title = srv.title[state.lang] || srv.title.sk;
      const summary = srv.summary[state.lang] || srv.summary.sk;
      const bullets = srv.bullets[state.lang] || srv.bullets.sk;
      return `
        <article class="service-card">
          <div class="service-media">
            <img src="${srv.image}" alt="${escapeHtml(title)}" loading="lazy" />
            <span class="service-num">${srv.num}</span>
          </div>
          <div class="service-body">
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(summary)}</p>
            <ul class="service-list">
              ${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
            </ul>
            <div class="service-actions">
              <button type="button" class="btn btn-primary btn-sm" data-select-service="${srv.id}">${escapeHtml(t("services.ctaSelect"))}</button>
              <a href="${DATA.company.phoneHref}" class="btn btn-secondary btn-sm">📞 ${escapeHtml(t("services.ctaCall"))}</a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll("[data-select-service]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const srv = DATA.services.find((s) => s.id === btn.dataset.selectService);
        if (!srv) return;
        const serviceSel = document.getElementById("contactService");
        const msgEl = document.getElementById("contactMessage");
        if (serviceSel) {
          if (srv.id === "kupelnove-studio" || srv.id === "realizacie-na-kluc") serviceSel.value = "bathroom";
          else if (srv.id === "servisne-sluzby") serviceSel.value = "service";
          else if (srv.id === "nehnutelnosti") serviceSel.value = "other";
          else serviceSel.value = "heating";
        }
        if (msgEl && !msgEl.value.trim()) {
          msgEl.value = `${srv.title[state.lang]} — `;
        }
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        if (msgEl) msgEl.focus();
      });
    });
  }

  function updateCalculator() {
    const heatControls = document.getElementById("heatingControls");
    const bathControls = document.getElementById("bathControls");
    const isHeat = state.calcMode === "heating";
    if (heatControls) heatControls.hidden = !isHeat;
    if (bathControls) bathControls.hidden = isHeat;

    const unitLoops = { sk: "okruhov", de: "Heizkreise", en: "loops", hu: "fűtőkör" }[state.lang];
    const unitRads = { sk: "telies", de: "Heizkörper", en: "radiators", hu: "radiátor" }[state.lang];
    const unitDays = { sk: "dní", de: "Tage", en: "days", hu: "nap" }[state.lang];
    const unitWeeks = { sk: "týždne", de: "Wochen", en: "weeks", hu: "hét" }[state.lang];
    const studioText = { sk: "3D návrh + obhliadka", de: "3D-Planung + Aufmaß", en: "3D design + survey", hu: "3D terv + felmérés" }[state.lang];
    const stdText = { sk: "Klasická dispozícia", de: "Klassische Planung", en: "Classic layout", hu: "Klasszikus elrendezés" }[state.lang];

    const resLabel1 = document.getElementById("resLabel1");
    const resLabel2 = document.getElementById("resLabel2");
    const resVal1 = document.getElementById("resVal1");
    const resVal2 = document.getElementById("resVal2");
    const resTimeline = document.getElementById("resTimeline");
    const resPriceRange = document.getElementById("resPriceRange");

    if (isHeat) {
      document.getElementById("heatAreaVal").textContent = `${state.heatArea} m²`;
      const wattsPerM2 = state.propType === "new" ? 48 : 82;
      const kw = ((state.heatArea * wattsPerM2) / 1000).toFixed(1);
      const circuits = Math.max(4, Math.round(state.heatArea / (state.heatDist === "rad" ? 18 : 13)));
      const emitterUnit = state.heatDist === "rad" ? unitRads : unitLoops;

      let base = state.heatArea * (state.heatDist === "rad" ? 46 : 58);
      if (state.heatSource === "heatpump") base += 6800;
      else if (state.heatSource === "gas") base += 2850;
      else base += 2100;
      if (state.propType === "reno") base *= 1.12;
      if (state.solarAddon) base += 2900;

      const minP = Math.round(base * 0.9 / 100) * 100;
      const maxP = Math.round(base * 1.14 / 100) * 100;
      const daysMin = state.heatArea > 180 ? 7 : 4;
      const daysMax = daysMin + 4;

      resLabel1.textContent = t("calculator.resHeatLoad");
      resVal1.textContent = `${kw} kW`;
      resLabel2.textContent = t("calculator.resCircuits");
      resVal2.textContent = `${circuits} ${emitterUnit}`;
      resTimeline.textContent = `${daysMin} – ${daysMax} ${unitDays}`;
      resPriceRange.textContent = `€ ${formatPrice(minP)} – € ${formatPrice(maxP)}`;
    } else {
      document.getElementById("bathAreaVal").textContent = `${state.bathArea} m²`;
      const tierMult = state.bathTier === "standard" ? 560 : state.bathTier === "comfort" ? 780 : 1080;
      let base = 2400 + state.bathArea * tierMult;
      if (state.bath3d) base += 0; // included in studio quote
      const minP = Math.round(base * 0.92 / 100) * 100;
      const maxP = Math.round(base * 1.15 / 100) * 100;
      const wks = state.bathTier === "premium" ? "3 – 4" : "2 – 3";

      const specLabels = {
        sk: ["Rozsah dodávky", "Vizualizácia", "Realizácia na kľúč"],
        de: ["Leistungsumfang", "Visualisierung", "Schlüsselfertige Umsetzung"],
        en: ["Scope of work", "Visualization", "Turnkey handover"],
        hu: ["Műszaki tartalom", "Látványtervezés", "Kulcsrakész átadás"]
      }[state.lang];

      resLabel1.textContent = specLabels[0];
      resVal1.textContent = specLabels[2];
      resLabel2.textContent = specLabels[1];
      resVal2.textContent = state.bath3d ? studioText : stdText;
      resTimeline.textContent = `${wks} ${unitWeeks}`;
      resPriceRange.textContent = `€ ${formatPrice(minP)} – € ${formatPrice(maxP)}`;
    }
  }

  function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function renderPortfolio() {
    const grid = document.getElementById("portfolioGrid");
    if (!grid) return;

    state.filteredPortfolio = DATA.portfolio.filter((item) => {
      return state.portfolioFilter === "all" || item.category === state.portfolioFilter;
    });

    grid.innerHTML = state.filteredPortfolio.map((item, idx) => {
      const title = item.title[state.lang] || item.title.sk;
      const caption = item.caption[state.lang] || item.caption.sk;
      return `
        <article class="pf-card" data-pf-idx="${idx}" tabindex="0">
          <div class="pf-img-wrap">
            <img src="${item.image}" alt="${escapeHtml(title)}" loading="lazy" />
            <span class="pf-source">${escapeHtml(item.source)}</span>
          </div>
          <div class="pf-body">
            <h4>${escapeHtml(title)}</h4>
            <p>${escapeHtml(caption)}</p>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll(".pf-card").forEach((card) => {
      const open = () => openLightbox(Number(card.dataset.pfIdx));
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  function openLightbox(idx) {
    const item = state.filteredPortfolio[idx];
    if (!item) return;
    state.lightboxIndex = idx;
    document.getElementById("lbImage").src = item.image;
    document.getElementById("lbImage").alt = item.title[state.lang] || item.title.sk;
    document.getElementById("lbMeta").textContent = `BUGÁR, s.r.o. · ${item.source}`;
    document.getElementById("lbTitle").textContent = item.title[state.lang] || item.title.sk;
    document.getElementById("lbDesc").textContent = item.caption[state.lang] || item.caption.sk;
    document.getElementById("lightboxModal").classList.add("open");
  }

  function closeLightbox() {
    document.getElementById("lightboxModal").classList.remove("open");
    state.lightboxIndex = -1;
  }

  function stepLightbox(dir) {
    if (state.lightboxIndex < 0 || !state.filteredPortfolio.length) return;
    const next = (state.lightboxIndex + dir + state.filteredPortfolio.length) % state.filteredPortfolio.length;
    openLightbox(next);
  }

  function renderCategories() {
    const grid = document.getElementById("categoryGrid");
    if (!grid) return;

    grid.innerHTML = DATA.categories.map((cat) => {
      const title = cat.title[state.lang] || cat.title.sk;
      const active = state.activeCategory === cat.id ? "active" : "";
      return `
        <button type="button" class="cat-tile ${active}" data-cat="${cat.id}" title="${escapeHtml(cat.desc[state.lang] || cat.desc.sk)}">
          <div class="cat-icon-pad">
            <img src="${cat.icon}" alt="${escapeHtml(title)}" loading="lazy" />
          </div>
          <span>${escapeHtml(title)}</span>
        </button>
      `;
    }).join("");

    grid.querySelectorAll(".cat-tile").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeCategory = state.activeCategory === btn.dataset.cat ? "all" : btn.dataset.cat;
        renderCategories();
        renderProducts();
      });
    });
  }

  function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const q = state.searchQuery.trim().toLowerCase();

    let items = DATA.catalogItems.filter((item) => {
      const catMatch = state.activeCategory === "all" || item.category === state.activeCategory;
      const text = `${item.brand} ${item.title[state.lang]} ${item.spec[state.lang]}`.toLowerCase();
      const qMatch = !q || text.includes(q);
      return catMatch && qMatch;
    });

    // If user clicks a category without a representative SKU in catalogItems, synthesize a direct category inquiry card
    if (!items.length && state.activeCategory !== "all" && !q) {
      const cat = DATA.categories.find((c) => c.id === state.activeCategory);
      if (cat) {
        items = [{
          id: `cat-inquiry-${cat.id}`,
          category: cat.id,
          brand: "BUGÁR ŠAMORÍN",
          badge: { sk: "Celý sortiment", de: "Gesamtsortiment", en: "Full Range", hu: "Teljes kínálat" },
          title: cat.title,
          spec: cat.desc,
          priceHint: { sk: "Nacenenie podľa požiadavky", de: "Angebot nach Bedarf", en: "Custom project quote", hu: "Egyedi árajánlat alapján" },
          icon: cat.icon
        }];
      }
    }

    if (!items.length) {
      grid.innerHTML = `<div class="info-card" style="grid-column: 1 / -1; text-align:center;">${escapeHtml(t("catalog.emptyState"))}</div>`;
      return;
    }

    grid.innerHTML = items.map((item) => {
      const inBasket = state.basket.some((b) => b.id === item.id);
      const title = item.title[state.lang] || item.title.sk;
      const spec = item.spec[state.lang] || item.spec.sk;
      const badge = item.badge[state.lang] || item.badge.sk;
      const priceHint = item.priceHint[state.lang] || item.priceHint.sk;

      return `
        <article class="product-card">
          <div class="product-thumb">
            <img src="${item.icon}" alt="${escapeHtml(title)}" loading="lazy" />
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span class="brand-chip">${escapeHtml(item.brand)}</span>
              <span class="badge-chip">${escapeHtml(badge)}</span>
            </div>
            <h4>${escapeHtml(title)}</h4>
            <p class="product-spec">${escapeHtml(spec)}</p>
            <div class="product-footer">
              <span class="price-hint">${escapeHtml(priceHint)}</span>
              <button type="button" class="btn ${inBasket ? "btn-secondary" : "btn-primary"} btn-sm" data-add-item="${item.id}">
                ${inBasket ? "✓ " + escapeHtml(t("catalog.btnAdded")) : "+ " + escapeHtml(t("catalog.btnAddQuote"))}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll("[data-add-item]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.addItem;
        let item = DATA.catalogItems.find((i) => i.id === id);
        if (!item && id.startsWith("cat-inquiry-")) {
          const catId = id.replace("cat-inquiry-", "");
          const cat = DATA.categories.find((c) => c.id === catId);
          if (cat) {
            item = { id, brand: "BUGÁR", title: cat.title, icon: cat.icon };
          }
        }
        if (item) addToBasket(item);
      });
    });
  }

  function renderPartners() {
    const grid = document.getElementById("partnersGrid");
    if (!grid) return;
    grid.innerHTML = DATA.partners.map((p) => `
      <div class="partner-tile" title="${escapeHtml(p.name)}">
        <img src="${p.logo}" alt="${escapeHtml(p.name)}" loading="lazy" />
      </div>
    `).join("");
  }

  function loadBasket() {
    try {
      const raw = localStorage.getItem("bugar_basket");
      if (raw) state.basket = JSON.parse(raw);
    } catch {
      state.basket = [];
    }
  }

  function saveBasket() {
    localStorage.setItem("bugar_basket", JSON.stringify(state.basket));
  }

  function addToBasket(item) {
    const existing = state.basket.find((b) => b.id === item.id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.basket.push({
        id: item.id,
        brand: item.brand,
        title: item.title,
        qty: 1
      });
    }
    saveBasket();
    renderBasket();
    renderProducts();
    showToast(`✓ ${item.title[state.lang] || item.title.sk}`);
  }

  function renderBasket() {
    const countEl = document.getElementById("basketCount");
    const listEl = document.getElementById("basketItemsList");
    const totalQty = state.basket.reduce((s, b) => s + b.qty, 0);
    if (countEl) countEl.textContent = String(totalQty);
    if (!listEl) return;

    if (!state.basket.length) {
      listEl.innerHTML = `<p style="margin:0; color:var(--text-muted); font-size:0.9rem;">${escapeHtml(t("basket.empty"))}</p>`;
      return;
    }

    listEl.innerHTML = state.basket.map((item) => `
      <div class="basket-item">
        <div style="min-width:0;">
          <div style="font-size:0.72rem; font-weight:700; color:var(--water);">${escapeHtml(item.brand)}</div>
          <div style="font-size:0.86rem; font-weight:600;">${escapeHtml(item.title[state.lang] || item.title.sk)}</div>
        </div>
        <div class="qty-controls">
          <button type="button" class="qty-btn" data-qty-delta="-1" data-qty-id="${item.id}">-</button>
          <span style="font-family:var(--font-mono); font-size:0.86rem; min-width:18px; text-align:center;">${item.qty}</span>
          <button type="button" class="qty-btn" data-qty-delta="1" data-qty-id="${item.id}">+</button>
        </div>
      </div>
    `).join("");

    listEl.querySelectorAll("[data-qty-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.qtyId;
        const delta = Number(btn.dataset.qtyDelta);
        const found = state.basket.find((b) => b.id === id);
        if (!found) return;
        found.qty += delta;
        if (found.qty <= 0) {
          state.basket = state.basket.filter((b) => b.id !== id);
        }
        saveBasket();
        renderBasket();
        renderProducts();
      });
    });
  }

  function initMap() {
    const container = document.getElementById("branchMap");
    if (!container) return;

    if (typeof window.L === "undefined") {
      container.innerHTML = `<div style="padding:1.5rem; font-size:0.9rem;">📍 Bratislavská 89/21, Šamorín (48.03195° N, 17.30710° E)<br/>📍 Hlavná 1538/31, Dunajská Streda (47.98962° N, 17.62856° E)</div>`;
      return;
    }

    const samorin = DATA.company.branches.samorin.coords;
    const ds = DATA.company.branches.dunajskaStreda.coords;

    mapInstance = window.L.map("branchMap", { scrollWheelZoom: false }).setView(samorin, 11);

    const primaryTiles = window.L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        subdomains: "abcd",
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap &copy; CARTO"
      }
    );

    let switchedToFallback = false;
    primaryTiles.on("tileerror", () => {
      if (switchedToFallback) return;
      switchedToFallback = true;
      mapInstance.removeLayer(primaryTiles);
      window.L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 19,
          attribution: "&copy; Esri"
        }
      ).addTo(mapInstance);
    });

    primaryTiles.addTo(mapInstance);

    samorinMarker = window.L.marker(samorin).addTo(mapInstance);
    dsMarker = window.L.marker(ds).addTo(mapInstance);
    updateMapPopups();
    samorinMarker.openPopup();
  }

  function updateMapPopups() {
    if (!samorinMarker || !dsMarker) return;
    samorinMarker.bindPopup(`<strong>BUGÁR, s.r.o. — Šamorín</strong><br/>Bratislavská 89/21<br/>📞 +421 910 144 022`);
    dsMarker.bindPopup(`<strong>BUGÁR, s.r.o. — Dunajská Streda</strong><br/>Hlavná 1538/31<br/>IČO: 36264482`);
  }

  function showToast(text) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => el.classList.remove("show"), 3200);
  }

  function openLegalModal(type) {
    const titleEl = document.getElementById("legalModalTitle");
    const bodyEl = document.getElementById("legalModalBody");
    if (type === "terms") {
      titleEl.textContent = t("legal.termsTitle");
      bodyEl.textContent = t("legal.termsBody");
    } else if (type === "privacy") {
      titleEl.textContent = t("legal.privacyTitle");
      bodyEl.textContent = t("legal.privacyBody");
    } else if (type === "cookies") {
      titleEl.textContent = t("legal.cookiesTitle");
      bodyEl.textContent = t("legal.cookiesBody");
    } else {
      const branchPrefix = { sk: "Prevádzka", de: "Standort", en: "Showroom & Warehouse", hu: "Telephely" }[state.lang] || "Prevádzka";
      titleEl.textContent = t("footer.imprint");
      bodyEl.textContent = `${DATA.company.name} · ${DATA.company.branches.dunajskaStreda.address} · ${branchPrefix}: ${DATA.company.branches.samorin.address} · IČO: ${DATA.company.ico} · DIČ: ${DATA.company.dic} · IČ DPH: ${DATA.company.icDph} · ${DATA.company.register[state.lang]}`;
    }
    document.getElementById("legalModal").classList.add("open");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function bindEvents() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });

    document.getElementById("themeToggle")?.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    const navLinks = document.getElementById("navLinks");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    mobileMenuBtn?.addEventListener("click", () => {
      const open = navLinks?.classList.toggle("mobile-open");
      mobileMenuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks?.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
        mobileMenuBtn?.setAttribute("aria-expanded", "false");
      });
    });

    document.getElementById("heroBookStudioBtn")?.addEventListener("click", () => {
      state.calcMode = "bath";
      document.getElementById("tabBath").classList.add("active");
      document.getElementById("tabHeating").classList.remove("active");
      updateCalculator();
      document.getElementById("calculator").scrollIntoView({ behavior: "smooth" });
    });

    // Estimator tabs & inputs
    document.querySelectorAll(".calc-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".calc-tab").forEach((x) => x.classList.remove("active"));
        tab.classList.add("active");
        state.calcMode = tab.dataset.calcTab;
        updateCalculator();
      });
    });

    document.getElementById("heatAreaRange")?.addEventListener("input", (e) => {
      state.heatArea = Number(e.target.value);
      updateCalculator();
    });
    document.getElementById("bathAreaRange")?.addEventListener("input", (e) => {
      state.bathArea = Number(e.target.value);
      updateCalculator();
    });
    document.getElementById("solarAddonCheck")?.addEventListener("change", (e) => {
      state.solarAddon = e.target.checked;
      updateCalculator();
    });
    document.getElementById("bath3dCheck")?.addEventListener("change", (e) => {
      state.bath3d = e.target.checked;
      updateCalculator();
    });

    const bindPillGroup = (groupId, stateKey) => {
      const group = document.getElementById(groupId);
      if (!group) return;
      group.querySelectorAll(".option-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
          group.querySelectorAll(".option-pill").forEach((x) => x.classList.remove("active"));
          btn.classList.add("active");
          state[stateKey] = btn.dataset.val;
          updateCalculator();
        });
      });
    };
    bindPillGroup("propTypeGroup", "propType");
    bindPillGroup("heatSourceGroup", "heatSource");
    bindPillGroup("heatDistGroup", "heatDist");
    bindPillGroup("bathTierGroup", "bathTier");

    document.getElementById("transferCalcBtn")?.addEventListener("click", () => {
      const priceText = document.getElementById("resPriceRange").textContent;
      const val1 = document.getElementById("resVal1").textContent;
      const val2 = document.getElementById("resVal2").textContent;
      const serviceSel = document.getElementById("contactService");
      const msgEl = document.getElementById("contactMessage");

      if (state.calcMode === "heating") {
        serviceSel.value = "heating";
        msgEl.value = `[${t("calculator.tabHeating")}] ${state.heatArea} m² (${state.propType}) | ${state.heatSource} | ${state.heatDist}${state.solarAddon ? " + Solar TÚV" : ""} | ${val1}, ${val2} | ${priceText}`;
      } else {
        serviceSel.value = "bathroom";
        msgEl.value = `[${t("calculator.tabBath")}] ${state.bathArea} m² | Tier: ${state.bathTier}${state.bath3d ? " + 3D Studio" : ""} | ${priceText}`;
      }
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      msgEl.focus();
    });

    // Portfolio filters & Lightbox
    document.querySelectorAll("#portfolioFilters .filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#portfolioFilters .filter-pill").forEach((x) => x.classList.remove("active"));
        btn.classList.add("active");
        state.portfolioFilter = btn.dataset.pf;
        renderPortfolio();
      });
    });

    document.getElementById("lbClose")?.addEventListener("click", closeLightbox);
    document.getElementById("lbPrev")?.addEventListener("click", () => stepLightbox(-1));
    document.getElementById("lbNext")?.addEventListener("click", () => stepLightbox(1));
    document.getElementById("lightboxModal")?.addEventListener("click", (e) => {
      if (e.target.id === "lightboxModal") closeLightbox();
    });

    // Catalog search & reset
    document.getElementById("catalogSearch")?.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
    document.getElementById("catalogResetBtn")?.addEventListener("click", () => {
      state.activeCategory = "all";
      state.searchQuery = "";
      const s = document.getElementById("catalogSearch");
      if (s) s.value = "";
      renderCategories();
      renderProducts();
    });

    // Quote basket drawer
    const drawer = document.getElementById("basketDrawer");
    document.getElementById("openBasketBtn")?.addEventListener("click", () => drawer?.classList.add("open"));
    document.getElementById("closeBasketBtn")?.addEventListener("click", () => drawer?.classList.remove("open"));
    drawer?.addEventListener("click", (e) => {
      if (e.target === drawer) drawer.classList.remove("open");
    });

    document.getElementById("b2bToggle")?.addEventListener("change", (e) => {
      document.getElementById("b2bFields").hidden = !e.target.checked;
    });

    document.getElementById("clearBasketBtn")?.addEventListener("click", () => {
      state.basket = [];
      saveBasket();
      renderBasket();
      renderProducts();
    });

    document.getElementById("basketForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!state.basket.length) {
        showToast(t("basket.empty"));
        return;
      }
      drawer?.classList.remove("open");
      state.basket = [];
      saveBasket();
      renderBasket();
      renderProducts();
      showToast(`✓ ${t("basket.sentTitle")}`);
    });

    // Map branch focus buttons
    document.getElementById("focusSamorin")?.addEventListener("click", () => {
      if (mapInstance && samorinMarker) {
        mapInstance.setView(DATA.company.branches.samorin.coords, 14);
        samorinMarker.openPopup();
      }
    });
    document.getElementById("focusDs")?.addEventListener("click", () => {
      if (mapInstance && dsMarker) {
        mapInstance.setView(DATA.company.branches.dunajskaStreda.coords, 14);
        dsMarker.openPopup();
      }
    });

    // Contact form
    document.getElementById("contactForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      if (form.website_hp && form.website_hp.value) return;
      if (!form.reportValidity()) return;
      document.getElementById("contactSuccessBox").hidden = false;
      form.reset();
      showToast(`✓ ${t("contact.successTitle")}`);
    });

    // Legal modals
    document.querySelectorAll("[data-legal]").forEach((btn) => {
      btn.addEventListener("click", () => openLegalModal(btn.dataset.legal));
    });
    document.getElementById("closeLegalBtn")?.addEventListener("click", () => {
      document.getElementById("legalModal").classList.remove("open");
    });
    document.getElementById("legalModal")?.addEventListener("click", (e) => {
      if (e.target.id === "legalModal") e.target.classList.remove("open");
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLightbox();
        drawer?.classList.remove("open");
        document.getElementById("legalModal")?.classList.remove("open");
      } else if (e.key === "ArrowLeft" && state.lightboxIndex >= 0) {
        stepLightbox(-1);
      } else if (e.key === "ArrowRight" && state.lightboxIndex >= 0) {
        stepLightbox(1);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLang();
    loadBasket();
    bindEvents();
    setLang(state.lang);
    initMap();
  });
})();
