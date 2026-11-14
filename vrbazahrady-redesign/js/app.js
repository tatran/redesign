/**
 * VRBA, s.r.o. - Redesign Interactive Application
 * Features:
 * - 4-Language i18n Engine (SK, DE, EN, HU)
 * - Light / Dark Theme Controller
 * - Interactive Plant Catalog with Live Search & Attribute Filtering
 * - Plant Details Modal with Cultivation Specs
 * - B2B Wholesale Portal & Password Gate
 * - Interactive Plant Volume & Logistics Calculator
 * - Responsive Photo Gallery with Lightbox
 * - FAQ Accordion
 * - Interactive Contact & Quotation Form
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Multi-language (i18n) Engine
  // --------------------------------------------------------------------------
  let currentLang = localStorage.getItem('vrba_lang') || 'sk';
  if (!['sk', 'de', 'en', 'hu'].includes(currentLang)) {
    currentLang = 'sk';
  }

  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  const langCurrentLabel = document.getElementById('langCurrentLabel');
  const langItems = document.querySelectorAll('.lang-item');

  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('vrba_lang', lang);

    const trans = window.VRBA_TRANSLATIONS[lang] || window.VRBA_TRANSLATIONS['sk'];

    // Update text content of data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (trans[key]) {
        el.textContent = trans[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (trans[key]) {
        el.setAttribute('placeholder', trans[key]);
      }
    });

    // Update active state in menu
    langItems.forEach(item => {
      if (item.getAttribute('data-lang') === lang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update button display
    const flags = { sk: '🇸🇰 SK', de: '🇩🇪 DE', en: '🇬🇧 EN', hu: '🇭🇺 HU' };
    if (langCurrentLabel) {
      langCurrentLabel.textContent = flags[lang] || lang.toUpperCase();
    }

    // Re-render plants and modal if open
    renderPlants();
  }

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('open');
    });

    langItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = item.getAttribute('data-lang');
        updateLanguage(selectedLang);
        langMenu.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. Light / Dark Theme Controller
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  let currentTheme = localStorage.getItem('vrba_theme');

  if (!currentTheme) {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vrba_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>` 
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Prepnúť na svetlý režim' : 'Prepnúť na tmavý režim');
    }
  }

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 3. Header Scroll Effect & Mobile Drawer
  // --------------------------------------------------------------------------
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. Interactive Plant Explorer & Search
  // --------------------------------------------------------------------------
  const plantsGrid = document.getElementById('plantsGrid');
  const catalogSearch = document.getElementById('catalogSearch');
  const filterChips = document.querySelectorAll('.filter-chip');
  const catalogCountEl = document.getElementById('catalogCount');

  let activeFilter = 'all';
  let searchTerm = '';

  const featuredList = window.VRBA_FEATURED_PLANTS || [];

  function renderPlants() {
    if (!plantsGrid) return;
    const trans = window.VRBA_TRANSLATIONS[currentLang] || window.VRBA_TRANSLATIONS['sk'];

    let filtered = featuredList.filter(plant => {
      // Category / Attribute filter
      let matchesFilter = true;
      if (activeFilter === 'woody') matchesFilter = plant.category === 'woody';
      else if (activeFilter === 'perennial') matchesFilter = plant.category === 'perennial' && plant.subcategory === 'perennial';
      else if (activeFilter === 'grass') matchesFilter = plant.subcategory === 'grass';
      else if (activeFilter === 'sun') matchesFilter = plant.sun === 'full-sun';
      else if (activeFilter === 'shade') matchesFilter = plant.sun === 'partial-shade' || plant.sun === 'shade';
      else if (activeFilter === 'hardy') matchesFilter = plant.hardiness === 'resistant';
      else if (activeFilter === 'featured') matchesFilter = plant.featured === true;

      // Text search
      let matchesSearch = true;
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const commonName = (plant.common[currentLang] || plant.common.sk).toLowerCase();
        const latinName = plant.latin.toLowerCase();
        matchesSearch = latinName.includes(query) || commonName.includes(query);
      }

      return matchesFilter && matchesSearch;
    });

    // If searching, also search full taxonomy of 1,500+ names!
    let extraMatches = [];
    if (searchTerm.trim().length >= 3 && filtered.length < 12) {
      const q = searchTerm.toLowerCase();
      const allWoody = window.VRBA_ALL_WOODY_NAMES || [];
      const allPerennials = window.VRBA_ALL_PERENNIAL_NAMES || [];

      const matchedWoody = allWoody.filter(name => name.toLowerCase().includes(q)).slice(0, 8);
      const matchedPer = allPerennials.filter(name => name.toLowerCase().includes(q)).slice(0, 8);

      extraMatches = [
        ...matchedWoody.map(name => ({
          id: 'extra-' + Math.random().toString(36).substr(2, 6),
          latin: name,
          category: 'woody',
          subcategory: 'deciduous',
          common: { sk: 'Drevina zo sortimentu VRBA', de: 'Gehölz aus VRBA-Sortiment', en: 'Woody nursery taxon', hu: 'Faiskolai fás szárú növény' },
          desc: {
            sk: 'Aklimatizovaný pestovaný materiál z našej 17 ha okrasnej škôlky v Šamoríne. Dostupný v kontajneroch alebo so zemným balom.',
            de: 'Akklimatisierte Baumschulware aus unserer 17 ha Anlage in Šamorín. Im Container oder mit Ballen verfügbar.',
            en: 'Acclimatized stock from our 17ha nursery in Šamorín. Available in pots or root-balled.',
            hu: 'Akklimatizált faiskolai növény 17 hektáros somorjai telephelyünkről. Konténerben vagy földlabdával kapható.'
          },
          sizes: ['K9', 'Kontajner 2L–5L', 'Solitér bal'],
          sun: 'full-sun',
          soil: 'universal',
          hardiness: 'resistant',
          image: 'images/Vrba-009.jpg'
        })),
        ...matchedPer.map(name => ({
          id: 'extra-' + Math.random().toString(36).substr(2, 6),
          latin: name,
          category: 'perennial',
          subcategory: 'perennial',
          common: { sk: 'Trvalka zo sortimentu VRBA', de: 'Staude aus VRBA-Sortiment', en: 'Perennial nursery taxon', hu: 'Faiskolai évelő taxon' },
          desc: {
            sk: 'Zdravá, plne prekorenená trvalka pripravená na výsadbu do záhonov a plošných úprav.',
            de: 'Gesunde, kräftig durchwurzelte Staude für Beete und Großflächenpflanzungen.',
            en: 'Robust, fully rooted perennial ready for beds and landscape plantings.',
            hu: 'Egészséges, dúsan gyökeresedett évelő ágyásokba és közterületi kiültetésekhez.'
          },
          sizes: ['K9', 'Kontajner 1L–2L'],
          sun: 'full-sun',
          soil: 'permeable',
          hardiness: 'resistant',
          image: 'images/Vrba-038.jpg'
        }))
      ];
    }

    const displayList = [...filtered, ...extraMatches];

    if (catalogCountEl) {
      catalogCountEl.textContent = `${displayList.length} ${trans.catalogOf} 1 569 ${trans.catalogTaxons}`;
    }

    if (displayList.length === 0) {
      plantsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background-color: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 12px;">Pre zadané kritériá sa nenašli žiadne rastliny.</p>
          <button class="btn btn-primary" onclick="window.resetCatalogFilters()">Zobraziť všetky rastliny</button>
        </div>
      `;
      return;
    }

    plantsGrid.innerHTML = displayList.map(plant => {
      const common = plant.common[currentLang] || plant.common.sk;
      const desc = plant.desc[currentLang] || plant.desc.sk;
      const catLabel = plant.category === 'woody' 
        ? (trans.filterWoody.split(' ')[0]) 
        : (plant.subcategory === 'grass' ? (trans.filterGrass.split(' ')[0]) : (trans.filterPerennial.split(' ')[0]));

      return `
        <div class="plant-card">
          <div class="plant-img-wrap">
            <img src="${plant.image}" alt="${plant.latin}" loading="lazy" />
            <span class="plant-cat-badge">${catLabel}</span>
          </div>
          <div class="plant-body">
            <h4 class="plant-latin">${plant.latin}</h4>
            <div class="plant-common">${common}</div>
            <p class="plant-desc">${desc}</p>
            <div class="plant-meta-tags">
              <span class="meta-pill">${plant.sun === 'full-sun' ? '☀️ ' + trans.sunFull.split(' ')[0] : '⛅ ' + trans.sunPartial.split(' ')[0]}</span>
              <span class="meta-pill">${plant.hardiness === 'resistant' ? '❄️ ' + trans.hardyResistant.split(' ')[0] : '🌿 ' + trans.hardySheltered.split(' ')[0]}</span>
              <span class="meta-pill">🪴 ${plant.sizes[0] || 'Kontajner'}</span>
            </div>
            <div class="plant-card-actions">
              <button class="btn btn-outline" onclick="window.openPlantModal('${plant.id}')">${trans.btnViewDetails}</button>
              <button class="btn btn-primary" onclick="window.inquireSpecificPlant('${plant.latin.replace(/'/g, "\\'")}')">${trans.btnInquirePlant}</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.resetCatalogFilters = () => {
    activeFilter = 'all';
    searchTerm = '';
    if (catalogSearch) catalogSearch.value = '';
    filterChips.forEach(c => c.classList.remove('active'));
    document.querySelector('.filter-chip[data-filter="all"]')?.classList.add('active');
    renderPlants();
  };

  if (catalogSearch) {
    catalogSearch.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderPlants();
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter');
      renderPlants();
    });
  });

  // --------------------------------------------------------------------------
  // 5. Plant Detail Modal
  // --------------------------------------------------------------------------
  const plantModal = document.getElementById('plantModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  window.openPlantModal = (plantId) => {
    const plant = (featuredList.find(p => p.id === plantId)) || {
      latin: "Abies koreana",
      category: "woody",
      common: { sk: "Jedľa kórejská", de: "Koreanische Tanne", en: "Korean Fir", hu: "Koreai jegenyefenyő" },
      desc: { sk: "Elegantný ihličnan.", de: "Elegante Konifere.", en: "Elegant conifer.", hu: "Elegáns örökzöld." },
      sizes: ["Kontajner 2L", "Kontajner 5L", "Solitér"],
      sun: "full-sun",
      soil: "permeable",
      hardiness: "resistant",
      image: "images/Vrba-010.jpg"
    };

    const trans = window.VRBA_TRANSLATIONS[currentLang] || window.VRBA_TRANSLATIONS['sk'];
    const common = plant.common[currentLang] || plant.common.sk;
    const desc = plant.desc[currentLang] || plant.desc.sk;

    document.getElementById('modalLatin').textContent = plant.latin;
    document.getElementById('modalCommon').textContent = common;
    document.getElementById('modalImg').src = plant.image;
    document.getElementById('modalImg').alt = plant.latin;
    document.getElementById('modalDesc').textContent = desc;

    document.getElementById('modalSun').textContent = plant.sun === 'full-sun' ? trans.sunFull : trans.sunPartial;
    document.getElementById('modalSoil').textContent = plant.soil === 'permeable' ? trans.soilPerm : (plant.soil === 'humus' ? trans.soilHumus : trans.soilUniv);
    document.getElementById('modalHardy').textContent = plant.hardiness === 'resistant' ? trans.hardyResistant : trans.hardySheltered;
    document.getElementById('modalSizes').textContent = plant.sizes.join(', ');

    const modalInquireBtn = document.getElementById('modalInquireBtn');
    if (modalInquireBtn) {
      modalInquireBtn.onclick = () => {
        window.closePlantModal();
        window.inquireSpecificPlant(plant.latin);
      };
    }

    if (plantModal) plantModal.classList.add('open');
  };

  window.closePlantModal = () => {
    if (plantModal) plantModal.classList.remove('open');
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.closePlantModal);
  }

  if (plantModal) {
    plantModal.addEventListener('click', (e) => {
      if (e.target === plantModal) window.closePlantModal();
    });
  }

  window.inquireSpecificPlant = (latinName) => {
    const contactSection = document.getElementById('kontakt');
    const msgInput = document.getElementById('contactMessage');
    const subjectSelect = document.getElementById('contactSubject');

    if (subjectSelect) subjectSelect.value = 'opt3'; // Stock availability check
    if (msgInput) {
      const trans = window.VRBA_TRANSLATIONS[currentLang] || window.VRBA_TRANSLATIONS['sk'];
      msgInput.value = `Dobrý deň,\n\nmám záujem o cenovú ponuku a dostupnosť pre nasledovný druh rastliny:\n- ${latinName}\n\nPredpokladané množstvo: [ ] ks\nPožadovaná veľkosť kontajnera / balu: [ ]`;
    }

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      if (msgInput) msgInput.focus();
    }
  };

  // --------------------------------------------------------------------------
  // 6. B2B Password Unlocker Simulation
  // --------------------------------------------------------------------------
  const b2bPasswordInput = document.getElementById('b2bPasswordInput');
  const b2bUnlockBtn = document.getElementById('b2bUnlockBtn');
  const b2bUnlockedBox = document.getElementById('b2bUnlockedBox');

  if (b2bUnlockBtn && b2bPasswordInput) {
    b2bUnlockBtn.addEventListener('click', () => {
      const val = b2bPasswordInput.value.trim();
      if (val.length > 0) {
        if (b2bUnlockedBox) {
          b2bUnlockedBox.classList.add('active');
          b2bUnlockedBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else {
        alert('Prosím zadajte heslo alebo požiadajte o prístup cez formulár.');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. Interactive Plant & Logistics Calculator
  // --------------------------------------------------------------------------
  const calcK9 = document.getElementById('calcK9');
  const calcContSmall = document.getElementById('calcContSmall');
  const calcContBig = document.getElementById('calcContBig');
  const calcSoliter = document.getElementById('calcSoliter');
  const calcPickup = document.getElementById('calcPickup');
  const calcDest = document.getElementById('calcDest');
  const calcTotalCount = document.getElementById('calcTotalCount');
  const calcPalletEst = document.getElementById('calcPalletEst');
  const calcSubmitBtn = document.getElementById('calcSubmitBtn');

  function calculateVolume() {
    const k9 = parseInt(calcK9?.value || 0, 10) || 0;
    const cSmall = parseInt(calcContSmall?.value || 0, 10) || 0;
    const cBig = parseInt(calcContBig?.value || 0, 10) || 0;
    const sol = parseInt(calcSoliter?.value || 0, 10) || 0;

    const total = k9 + cSmall + cBig + sol;
    if (calcTotalCount) calcTotalCount.textContent = total.toLocaleString();

    // Pallet estimate calculation: K9 (~200 per CC trolley shelf), small container (~60 per CC shelf), big (~12 per pallet), soliter (dedicated/bal)
    const pallets = Math.ceil((k9 / 800) + (cSmall / 240) + (cBig / 40) + (sol * 0.5));
    if (calcPalletEst) {
      calcPalletEst.textContent = total > 0 ? `~${pallets} paletových / CC jednotiek` : '0 paliet';
    }
  }

  [calcK9, calcContSmall, calcContBig, calcSoliter].forEach(input => {
    if (input) input.addEventListener('input', calculateVolume);
  });

  if (calcSubmitBtn) {
    calcSubmitBtn.addEventListener('click', () => {
      calculateVolume();
      const k9 = calcK9?.value || 0;
      const cSmall = calcContSmall?.value || 0;
      const cBig = calcContBig?.value || 0;
      const sol = calcSoliter?.value || 0;
      const pickup = calcPickup?.options[calcPickup.selectedIndex]?.text || '';
      const dest = calcDest?.value || 'Šamorín';

      const contactSection = document.getElementById('kontakt');
      const msgInput = document.getElementById('contactMessage');
      const subjectSelect = document.getElementById('contactSubject');

      if (subjectSelect) subjectSelect.value = 'opt2'; // Project quotation
      if (msgInput) {
        msgInput.value = `Dobrý deň,\n\nzasielam dopytovú špecifikáciu z webového kalkulátora pre náš projekt:\n- K9 sadbovače: ${k9} ks\n- Kontajnery 1L–3L: ${cSmall} ks\n- Kontajnery 5L–10L: ${cBig} ks\n- Solitéry a zemné baly: ${sol} ks\n\nLogistika: ${pickup}\nMiesto doručenia: ${dest}\n\nProsím o zaslanie cenovej ponuky s kalkuláciou dopravy.`;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        if (msgInput) msgInput.focus();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Photo Gallery & Lightbox
  // --------------------------------------------------------------------------
  const galTabs = document.querySelectorAll('.gal-tab-btn');
  const galItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  galTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-gal-filter');

      galItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-gal-cat') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  galItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-img-src') || item.querySelector('img').src;
      if (lightboxImg && lightboxModal) {
        lightboxImg.src = src;
        lightboxModal.classList.add('open');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      if (lightboxModal) lightboxModal.classList.remove('open');
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) lightboxModal.classList.remove('open');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closePlantModal();
      if (lightboxModal) lightboxModal.classList.remove('open');
    }
  });

  // --------------------------------------------------------------------------
  // 9. FAQ Accordion
  // --------------------------------------------------------------------------
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 10. Contact Form Submission Toast
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const contactToast = document.getElementById('contactToast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const trans = window.VRBA_TRANSLATIONS[currentLang] || window.VRBA_TRANSLATIONS['sk'];
      if (contactToast) {
        contactToast.textContent = trans.formSuccess;
        contactToast.classList.add('show');
        setTimeout(() => {
          contactToast.classList.remove('show');
        }, 6000);
      }
      contactForm.reset();
    });
  }

  // Initial render with saved or detected language
  updateLanguage(currentLang);
});
