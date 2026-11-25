/**
 * TRAVELFUN.SK - ARCHIVE MIDWAY REDESIGN ENGINE
 * Authentic recreation of Midway theme (https://www.travelfun.sk/ Snapshot 20260530)
 * Features:
 *  - Midway Content Slider (Auto & manual controls)
 *  - Tour Search & Multi-Filter Engine
 *  - Interactive Gallery Lightbox Modal
 *  - Full Blog Story Reader Modal (Authentic expedition journals)
 *  - Real-time Neon PostgreSQL Telemetry & HUD Drawer
 *  - Dark / Light Theme Switcher
 *  - 5-Language Internationalization (SK primary default)
 */

// ==========================================================================
// 1. AUTHENTIC BLOG STORIES DICTIONARY
// ==========================================================================
const BLOG_STORIES = {
  "madagascar-na-bicykli": {
    title: "Madagaskar na bicykli",
    date: "December 2015",
    img: "images/image_4.jpg",
    content: `Madagaskar je ostrov, ležiaci poblíž juhovýchodného pobrežia kontinentálnej Afriky. Od Afriky ho oddeľuje 400 km Mosambického prielivu. Pre svoju milióny rokov trvajúcu izolovanosť od ostatného sveta je domovom mnohých endemických druhov rastlín a živočíchov, z ktorých najznámejšie sú lemury a chameleóny.\n\nNaša 1 000 km trasa na horských bicykloch viedla z hlavného mesta Antananarivo na juh cez národné parky Ranomafana a Isalo až k pobrežiu Mozambického prielivu do Toliary.\n\nPrechod cez slávnu alej baobabov pri západe slnka patril k najsilnejším vizuálnym momentom celej expedície. Cesty boli zmesou rozbitého asfaltu, lateritového červeného prachu a piesočnatých úsekov, kde bicykel viac tlačil ako viezol. Vrelé privítanie miestnych dedinčanov, ktorí nám ponúkali čerstvé banány a kokosové mlieko, nám dodávalo energiu na každý ďalší kilometer.`
  },
  "trekking-okolo-dhaulagiri": {
    title: "Trekking okolo Dhaulagiri (Nepál)",
    date: "Marec 2014",
    img: "images/image-slide-5.jpg",
    content: `„...Nepál nezmeníte, ale Nepál zmení vás...“\n\nTrekking okolo Dhaulagiri patrí medzi najdivokejšie a najnáročnejšie vysokohorské treky v celých Himalájach. Cesta vedie cez odľahlé dediny bez ciest, husté rododendrónové pralesy až na morény a ľadovce priamo pod obrovskú bielu stenu Dhaulagiri (8 167 m).\n\nKľúčovými bodmi trasy boli náročné prechody cez sedlá French Pass (5 360 m) a Dhampus Pass (5 244 m). Zostup do posvätného údolia rieky Kali Gandaki nám otvoril fascinujúci pohľad na masív Annapurny. V týchto výškach človek pochopí skutočnú silu prírody a pokoru, s ktorou k horám treba pristupovať.`
  },
  "chile-na-horskom-bicykli": {
    title: "Chile na horskom bicykli – Jazerná oblasť a sopky",
    date: "Marec 2014",
    img: "images/image-chile-440x330.jpeg",
    content: `Asi 800 km južne od hlavného mesta Santiago de Chile leží jedna z najkrajších oblastí Južnej Ameriky – čilská jazerná oblasť a severná Patagónia.\n\nPutovanie na horských bicykloch pod zasneženými kužeľmi činných sopiek Osorno a Villarrica, okolo priezračných jazier Llanquihue a Todos los Santos. Po celodennom šliapaní v sopečnom prachu a lávových poliach boli odmenou prírodné termálne pramene Termas Geométricas ukryté v kaňone dažďového pralesa.\n\nČile nás očarilo nielen dramatickou prírodou, ale aj neuveriteľne čistým vzduchom, skvelým vínom Carménère a priateľskými ľuďmi.`
  },
  "gruzinsko": {
    title: "Gruzínsko – krajina neskutočných ľudí",
    date: "Marec 2014",
    img: "images/image-gruzinsko-440x330.jpg",
    content: `Než sme odchádzali do Gruzínska, netušili sme, aké hlboké stopy v nás táto kaukazská krajina zanechá.\n\nVýstup do základného tábora pod ľadovcami vyhasnutej sopky Kazbek (5 047 m), kostolík Gergeti Trinity Church v rannom opare a následný presun do odľahlej Svanetie. Dedinky Mestia a Ushguli so stredovekými obrannými kamennými vežami zapísanými v UNESCO pôsobia ako cesta v čase o niekoľko storočí späť.\n\nGruzínska pohostinnosť nie je mýtus – po každej túre nás miestni pozývali na chlieb puri, syr sulguni, cha-chu a domáce víno z kvevri nádob.`
  },
  "kuba-od-vychodu-na-zapad": {
    title: "Kuba – od východu na západ",
    date: "Marec 2014",
    img: "images/image-kuba-440x330.jpg",
    content: `Objavovanie Kuby na bicykloch prináša úplne iný rozmer než bežný all-inclusive rezort.\n\nTrasa z koloniálneho Santiaga de Cuba cez historický Trinidad, Cienfuegos až do údolia Viñales, kde rastie najlepší tabak sveta. Cesty bez premávky áut, len konské povozy a staré americké veterány z 50. rokov.\n\nVečery v uličkách Havany, kde z každého okna znie živá son a salsa, a nekonečné karibské pláže s tyrkysovým morom robia z Kuby nezabudnuteľný zážitok plný farieb a kontrastov.`
  },
  "babska-jazda-v-kodani-a-malmo-2": {
    title: "Babská jazda v Kodani a Malmö",
    date: "November 2014",
    img: "images/image-slide-7.jpg",
    content: `Keď sa baby vyberú spoznávať severský životný štýl, začína sa bicyklovaním.\n\nZ Viedne sme prileteli do Kodane, kde bicykel nie je len dopravný prostriedok, ale životná filozofia. Prešli sme ikonický farebný kanál Nyhavn, modernú štvrť Christianshavn, kráľovské zámky Amalienborg a Rosenborg, a po moste cez úžinu Öresund sme sa vlakom previezli na obed do švédskeho Malmö.\n\nDokonalý predĺžený víkend plný skvelého jedla, škandinávskeho dizajnu a pohodovej atmosféry.`
  }
};

// ==========================================================================
// 2. TOAST NOTIFICATION HELPER
// ==========================================================================
function showToast(message, duration = 3500) {
  const toast = document.getElementById('toastNotice');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// ==========================================================================
// 3. MIDWAY CONTENT SLIDER
// ==========================================================================
class MidwaySlider {
  constructor() {
    this.container = document.getElementById('heroSlider');
    if (!this.container) return;

    this.slides = this.container.querySelectorAll('.slide-item');
    this.dots = this.container.querySelectorAll('.slider-dots .dot');
    this.prevBtn = document.getElementById('sliderPrev');
    this.nextBtn = document.getElementById('sliderNext');
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.intervalId = null;

    this.init();
  }

  init() {
    if (this.totalSlides <= 1) return;

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prev();
        this.resetTimer();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.next();
        this.resetTimer();
      });
    }

    this.dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        this.goTo(idx);
        this.resetTimer();
      });
    });

    // Touch / Swipe support
    let startX = 0;
    this.container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].clientX - startX;
      if (diffX > 50) {
        this.prev();
        this.resetTimer();
      } else if (diffX < -50) {
        this.next();
        this.resetTimer();
      }
    }, { passive: true });

    this.startTimer();
  }

  goTo(index) {
    this.slides[this.currentIndex].classList.remove('active');
    if (this.dots[this.currentIndex]) this.dots[this.currentIndex].classList.remove('active');

    this.currentIndex = (index + this.totalSlides) % this.totalSlides;

    this.slides[this.currentIndex].classList.add('active');
    if (this.dots[this.currentIndex]) this.dots[this.currentIndex].classList.add('active');

    if (window.telemetry) {
      window.telemetry.track('slider_changed', 'interaction', { slideIndex: this.currentIndex });
    }
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  prev() {
    this.goTo(this.currentIndex - 1);
  }

  startTimer() {
    this.intervalId = setInterval(() => this.next(), 6000);
  }

  resetTimer() {
    if (this.intervalId) clearInterval(this.intervalId);
    this.startTimer();
  }
}

// ==========================================================================
// 4. MODAL MANAGER (Lightbox & Story Reader)
// ==========================================================================
class ModalManager {
  constructor() {
    this.modal = document.getElementById('customModal');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalBody = document.getElementById('modalBody');
    this.closeBtn = document.getElementById('modalCloseBtn');

    if (!this.modal) return;
    this.init();
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('open')) {
        this.close();
      }
    });

    // Gallery item triggers
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const title = item.getAttribute('data-title') || 'Fotografia z expedície';
        const src = item.getAttribute('data-src');
        this.openImage(title, src);
      });
    });

    // Blog story triggers
    document.querySelectorAll('.blog-read-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-slug');
        this.openStory(slug);
      });
    });

    // Tour inquiry triggers
    document.querySelectorAll('.open-inquiry-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tourName = btn.getAttribute('data-tour') || 'Zájazd';
        this.openInquiry(tourName);
      });
    });
  }

  openImage(title, src) {
    this.modalTitle.textContent = title;
    this.modalBody.innerHTML = `
      <div style="text-align: center;">
        <img src="${src}" alt="${title}" style="max-height: 70vh; border-radius: 6px; margin: 0 auto; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        <p style="margin-top: 1rem; font-weight: 700; color: var(--text-dark);">${title}</p>
      </div>
    `;
    this.modal.classList.add('open');
    if (window.telemetry) window.telemetry.track('gallery_lightbox_opened', 'gallery', { title, src });
  }

  openStory(slug) {
    const story = BLOG_STORIES[slug];
    if (!story) return;

    this.modalTitle.textContent = story.title;
    const paras = story.content.split('\n\n').map(p => `<p style="margin-bottom: 1rem; line-height: 1.7;">${p.replace(/\n/g, '<br>')}</p>`).join('');

    this.modalBody.innerHTML = `
      <div>
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--brand-orange); text-transform: uppercase; margin-bottom: 0.5rem;">
          📅 ${story.date} | Expedičný denník TRAVELFUN.SK
        </div>
        <img src="${story.img}" alt="${story.title}" style="width: 100%; max-height: 320px; object-fit: cover; border-radius: 6px; margin-bottom: 1.25rem;">
        <div style="color: var(--text-main); font-size: 0.95rem;">
          ${paras}
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-color); text-align: right;">
          <a href="#contact" onclick="document.getElementById('modalCloseBtn').click();" class="tour-cta-btn">Mám záujem o podobnú expedíciu</a>
        </div>
      </div>
    `;
    this.modal.classList.add('open');
    if (window.telemetry) window.telemetry.track('blog_story_read', 'blog', { slug, title: story.title });
  }

  openInquiry(tourName) {
    this.modalTitle.textContent = `Nezáväzný dopyt: ${tourName}`;
    this.modalBody.innerHTML = `
      <form id="modalInquiryForm" class="c-form" onsubmit="event.preventDefault();">
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.5rem;">
          Vyplňte Vaše kontaktné údaje pre ponuku termínov a detailov k zájazdu <strong>${tourName}</strong>:
        </p>
        <input type="text" id="mName" placeholder="Vaše meno a priezvisko *" required>
        <input type="email" id="mEmail" placeholder="Váš e-mail *" required>
        <input type="tel" id="mPhone" placeholder="Váš telefón">
        <textarea id="mMsg" rows="3" placeholder="Poznámka / preferovaný termín / počet osôb..."></textarea>
        <button type="submit" id="mSubmitBtn" style="background-color: var(--brand-orange); color: #fff; font-weight: 700; padding: 0.65rem 1.25rem; border-radius: 4px; cursor: pointer;">
          Odoslať dopyt ➔
        </button>
      </form>
    `;
    this.modal.classList.add('open');

    const form = document.getElementById('modalInquiryForm');
    form.addEventListener('submit', () => {
      const name = document.getElementById('mName').value;
      const email = document.getElementById('mEmail').value;
      const phone = document.getElementById('mPhone').value;
      const msg = document.getElementById('mMsg').value;

      if (window.telemetry) {
        window.telemetry.track('tour_inquiry_submitted', 'conversion', { tourName, name, email, phone, msg });
      }
      this.close();
      showToast(`Ďakujeme ${name}! Dopyt na zájazd „${tourName}“ bol zaznamenaný.`);
    });
  }

  close() {
    this.modal.classList.remove('open');
  }
}

// ==========================================================================
// 5. TOUR SEARCH & FILTER HANDLER
// ==========================================================================
function setupTourFilters() {
  const form = document.getElementById('tourFilterForm');
  const destSelect = document.getElementById('filterDest');
  const typeSelect = document.getElementById('filterType');
  const toursGrid = document.getElementById('toursGrid');

  if (!form || !toursGrid) return;

  form.addEventListener('submit', () => {
    const dest = destSelect.value;
    const type = typeSelect.value;

    const cards = toursGrid.querySelectorAll('.tour-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardDest = card.getAttribute('data-dest');
      const cardType = card.getAttribute('data-type');

      const matchesDest = (dest === 'all' || cardDest === dest);
      const matchesType = (type === 'all' || cardType === type);

      if (matchesDest && matchesType) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (window.telemetry) {
      window.telemetry.track('tours_filtered', 'search', { dest, type, resultsCount: visibleCount });
    }

    showToast(`Nájdených ${visibleCount} zájazdov.`);
  });
}

// ==========================================================================
// 6. CONTACT & NEWSLETTER FORMS
// ==========================================================================
function setupForms() {
  // Main Contact Inquiry Form
  const cForm = document.getElementById('contactInquiryForm');
  if (cForm) {
    cForm.addEventListener('submit', () => {
      const name = document.getElementById('cName').value;
      const email = document.getElementById('cEmail').value;
      const phone = document.getElementById('cPhone').value;
      const message = document.getElementById('cMessage').value;

      if (window.telemetry) {
        window.telemetry.track('contact_inquiry_sent', 'conversion', { name, email, phone, messageLength: message.length });
      }

      showToast(`Ďakujeme ${name}! Vaša správa bola odoslaná tímu TRAVELFUN.`);
      cForm.reset();
    });
  }

  // Newsletter Form
  const nlForm = document.getElementById('newsletterForm');
  if (nlForm) {
    nlForm.addEventListener('submit', () => {
      const email = document.getElementById('nlEmailInput').value;
      if (window.telemetry) {
        window.telemetry.track('newsletter_subscribed', 'lead', { email });
      }
      showToast('Ďakujeme za prihlásenie na odber noviniek a zliav!');
      nlForm.reset();
    });
  }

  // Sidebar Search Form
  const sbSearch = document.getElementById('sidebarSearchForm');
  if (sbSearch) {
    sbSearch.addEventListener('submit', () => {
      const query = document.getElementById('sidebarSearchInput').value;
      if (window.telemetry) {
        window.telemetry.track('site_search_performed', 'search', { query });
      }
      showToast(`Vyhľadávanie výrazu: "${query}"`);
    });
  }

  // Plavby CTA Button Tracker
  const plavbyBtn = document.getElementById('plavbyCtaBtn');
  if (plavbyBtn) {
    plavbyBtn.addEventListener('click', () => {
      if (window.telemetry) {
        window.telemetry.track('plavby_partner_clicked', 'external_link', { target: 'https://travelfun.embed.luxusneplavby.sk/' });
      }
    });
  }
}

// ==========================================================================
// 7. REAL-TIME TELEMETRY ENGINE & NEON POSTGRESQL INTEGRATION
// ==========================================================================
const NEON_DEFAULT_URL = "postgresql://upc_telemetry_writer:VaseNoveBezpecneHeslo123%21@ep-broad-mode-ba2zewd1-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

class TravelFunTelemetry {
  constructor() {
    this.session = {
      id: 'tf_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now().toString(36),
      startTime: new Date().toISOString(),
      lang: document.documentElement.lang || 'sk',
      theme: document.documentElement.getAttribute('data-theme') || 'light',
      events: []
    };
    this.neonStatus = { connected: false, message: 'Pripájanie...' };
    this.init();
  }

  init() {
    this.updateStatsUI();
    this.setupDrawerListeners();
    this.logPageAccessToNeon();

    // Track initial page view
    this.track('page_view', 'navigation', {
      title: document.title,
      url: window.location.href,
      referrer: document.referrer
    });
  }

  async logPageAccessToNeon() {
    const accessTime = new Date().toISOString();
    const domainUrl = window.location.href;
    const referrer = document.referrer || '';
    const lang = this.session.lang;
    const theme = this.session.theme;
    const screen = `${window.screen.width}x${window.screen.height}`;

    let ipAddress = '127.0.0.1';
    try {
      const ipRes = await fetch('https://api.ipify.org?format=json', { cache: 'no-store' });
      if (ipRes.ok) {
        const ipData = await ipRes.json();
        ipAddress = ipData.ip || ipAddress;
      }
    } catch (e) {}

    this.session.ip = ipAddress;
    const dbUrl = window.NEON_CONFIG?.DATABASE_URL || NEON_DEFAULT_URL;
    let logged = false;

    if (dbUrl && dbUrl.startsWith('postgres')) {
      try {
        const parsed = new URL(dbUrl);
        const host = parsed.hostname;
        const safeDomain = domainUrl.replace(/'/g, "''");
        const safeUserAgent = (navigator.userAgent || '').replace(/'/g, "''");
        const safeReferrer = (referrer || '').replace(/'/g, "''");

        const sql = `INSERT INTO page_access_logs (access_time, ip_address, domain_url, user_agent, referrer, language, theme, screen_resolution) VALUES ('${accessTime}', '${ipAddress}', '${safeDomain}', '${safeUserAgent}', '${safeReferrer}', '${lang}', '${theme}', '${screen}') RETURNING id, access_time;`;

        const res = await fetch(`https://${host}/sql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
            'Neon-Connection-String': dbUrl
          },
          body: JSON.stringify({ query: sql })
        });

        if (res.ok) {
          const resData = await res.json();
          const rowId = resData?.rows?.[0]?.id || '✓';
          logged = true;
          this.neonStatus = { connected: true, rowId, message: `Pripojené (Riadok #${rowId})` };
          console.log(`✅ [Neon Direct] Successfully inserted Row #${rowId} into Neon DB!`);
          this.updateNeonStatusUI();
          showToast(`Návšteva zaznamenaná v Neon DB (Riadok #${rowId})`);
        } else {
          const errText = await res.text();
          this.neonStatus = { connected: false, error: true, message: `Chyba HTTP ${res.status}` };
          console.warn('⚠️ Neon HTTP query rejected:', errText);
          this.updateNeonStatusUI();
        }
      } catch (err) {
        this.neonStatus = { connected: false, error: true, message: `Chyba spojenia (${err.message})` };
        console.warn('⚠️ Neon Direct HTTP execution failed:', err.message);
        this.updateNeonStatusUI();
      }
    }

    if (!logged) {
      try {
        const proxyEp = window.NEON_CONFIG?.API_ENDPOINT || '/api/log';
        const res = await fetch(proxyEp, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            timestamp: accessTime,
            ip_address: ipAddress,
            domain_url: domainUrl,
            user_agent: navigator.userAgent,
            referrer,
            language: lang,
            theme,
            screen_resolution: screen
          })
        });
        if (res.ok) {
          const resData = await res.json();
          const rowId = resData?.data?.result?.rows?.[0]?.id || '✓';
          this.neonStatus = { connected: true, rowId, message: `Pripojené cez proxy (Riadok #${rowId})` };
          this.updateNeonStatusUI();
        }
      } catch (e) {}
    }
  }

  updateNeonStatusUI() {
    const el = document.getElementById('telemNeonStatus');
    if (el) {
      if (this.neonStatus.connected) {
        el.textContent = `🟢 ${this.neonStatus.message}`;
        el.style.color = 'var(--status-green)';
      } else if (this.neonStatus.error) {
        el.textContent = `⚠️ ${this.neonStatus.message}`;
        el.style.color = 'var(--status-red)';
      } else {
        el.textContent = `⏳ ${this.neonStatus.message || 'Pripájanie...'}`;
        el.style.color = 'var(--brand-orange)';
      }
    }
  }

  async pushEventToNeon(event) {
    const dbUrl = window.NEON_CONFIG?.DATABASE_URL || NEON_DEFAULT_URL;
    if (!dbUrl || !dbUrl.startsWith('postgres')) return;

    try {
      const parsed = new URL(dbUrl);
      const host = parsed.hostname;
      const ipAddress = this.session.ip || '127.0.0.1';
      const domainUrl = `https://www.travelfun.sk/#evt:${event.name}`.replace(/'/g, "''");
      const userAgent = `TRAVELFUN-Telemetry [${event.category}] ${event.sessionId}`.replace(/'/g, "''");
      const safeReferrer = JSON.stringify(event.data || {}).replace(/'/g, "''");
      const lang = event.lang || 'sk';
      const theme = event.theme || 'light';
      const screen = `${window.screen.width}x${window.screen.height}`;

      const sql = `INSERT INTO page_access_logs (access_time, ip_address, domain_url, user_agent, referrer, language, theme, screen_resolution) VALUES ('${event.timestamp}', '${ipAddress}', '${domainUrl}', '${userAgent}', '${safeReferrer}', '${lang}', '${theme}', '${screen}') RETURNING id, access_time;`;

      await fetch(`https://${host}/sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          'Neon-Connection-String': dbUrl
        },
        body: JSON.stringify({ query: sql })
      });
    } catch (e) {}
  }

  track(eventName, category, payload = {}) {
    const event = {
      id: 'evt_' + Math.random().toString(36).substring(2, 8),
      timestamp: new Date().toISOString(),
      sessionId: this.session.id,
      name: eventName,
      category: category,
      data: payload,
      lang: this.session.lang,
      theme: this.session.theme
    };

    this.session.events.unshift(event);
    if (this.session.events.length > 50) this.session.events.pop();

    this.updateStatsUI();
    this.renderEventItem(event);
    this.pushEventToNeon(event);
  }

  updateStatsUI() {
    const sId = document.getElementById('telemSessionId');
    const total = document.getElementById('telemTotalCount');
    const aLang = document.getElementById('telemActiveLang');
    const aTheme = document.getElementById('telemActiveTheme');

    if (sId) sId.textContent = this.session.id.substring(0, 15) + '...';
    if (total) total.textContent = this.session.events.length;
    if (aLang) aLang.textContent = this.session.lang.toUpperCase();
    if (aTheme) aTheme.textContent = this.session.theme;
  }

  renderEventItem(event) {
    const list = document.getElementById('telemEventList');
    if (!list) return;

    const time = new Date(event.timestamp).toLocaleTimeString();
    const item = document.createElement('div');
    item.className = 'telem-event-item';
    item.innerHTML = `<strong>${time}</strong>: [${event.category}] <em>${event.name}</em>`;
    list.prepend(item);
  }

  setupDrawerListeners() {
    const drawer = document.getElementById('telemDrawer');
    const openBtn = document.getElementById('telemOpenBtn');
    const closeBtn = document.getElementById('telemDrawerClose');
    const exportBtn = document.getElementById('telemExportBtn');
    const simBtn = document.getElementById('telemSimBtn');
    const clearBtn = document.getElementById('telemClearBtn');

    if (openBtn && drawer) {
      openBtn.addEventListener('click', () => drawer.classList.add('open'));
    }
    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
    }

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.session, null, 2));
        const dl = document.createElement('a');
        dl.setAttribute("href", dataStr);
        dl.setAttribute("download", `travelfun_telemetry_${this.session.id}.json`);
        document.body.appendChild(dl);
        dl.click();
        dl.remove();
        showToast('Telemetrické dáta boli exportované v JSON formáte.');
      });
    }

    if (simBtn) {
      simBtn.addEventListener('click', () => {
        const testEvents = ['simulated_search', 'simulated_calc', 'simulated_lead_click', 'simulated_gallery_zoom'];
        const randomEvt = testEvents[Math.floor(Math.random() * testEvents.length)];
        this.track(randomEvt, 'simulation', { randomVal: Math.floor(Math.random() * 1000) });
        showToast(`Simulovaný event: ${randomEvt}`);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.session.events = [];
        const list = document.getElementById('telemEventList');
        if (list) list.innerHTML = '';
        this.updateStatsUI();
        showToast('Zoznam udalostí bol vyčistený.');
      });
    }
  }
}

// ==========================================================================
// 8. THEME & LANGUAGE SWITCHER
// ==========================================================================
function setupThemeAndLang() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const langSelect = document.getElementById('langSelect');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');

  // Mobile menu toggle
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  // Theme switcher
  if (themeBtn) {
    const savedTheme = localStorage.getItem('tf_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (themeIcon) themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('tf_theme', newTheme);
      if (themeIcon) themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';

      if (window.telemetry) {
        window.telemetry.session.theme = newTheme;
        window.telemetry.track('theme_changed', 'preference', { theme: newTheme });
        window.telemetry.updateStatsUI();
      }
      showToast(`Téma zmenená na: ${newTheme}`);
    });
  }

  // Language selector
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      document.documentElement.lang = selected;
      if (window.telemetry) {
        window.telemetry.session.lang = selected;
        window.telemetry.track('language_changed', 'preference', { lang: selected });
        window.telemetry.updateStatsUI();
      }
      showToast(`Jazyk: ${selected.toUpperCase()}`);
    });
  }
}

// ==========================================================================
// 9. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  window.telemetry = new TravelFunTelemetry();
  new MidwaySlider();
  new ModalManager();
  setupTourFilters();
  setupForms();
  setupThemeAndLang();

  console.log('🚀 TRAVELFUN.SK Midway Redesign initialized successfully.');
});
