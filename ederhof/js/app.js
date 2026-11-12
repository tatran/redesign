/**
 * Ederhof Rehabilitation Center - Interactive Controller (2026)
 * Handles: i18n Language Toggle, Light/Dark Theme, Reha Matcher,
 * Schedule Filter, Interactive Checklist, Donation Calculator,
 * Testimonials Carousel, Lightbox Gallery, FAQ Filter, Leaflet Map, Modals, Toast & Back to Top.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language & Theme State
  let currentLang = localStorage.getItem('ederhof_lang') || 'de';
  let currentTheme = localStorage.getItem('ederhof_theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // Elements
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const langText = document.getElementById('lang-text');

  // Apply Theme
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ederhof_theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // Apply Language
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ederhof_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    
    if (langText) {
      langText.textContent = lang === 'de' ? 'EN 🇬🇧' : 'DE 🇦🇹';
    }

    const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {};

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Re-run finder and checklist to refresh localized dynamic text
    evaluateRehaFinder();
    updateChecklistProgress();
    updateCarouselContent();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'de' ? 'en' : 'de');
    });
  }

  // Initial language application
  applyLanguage(currentLang);

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('mobile-open');
      if (isOpen) {
        navLinks.classList.remove('mobile-open');
        mobileToggle.innerHTML = '☰';
      } else {
        navLinks.classList.add('mobile-open');
        mobileToggle.innerHTML = '✕';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // 3. Interactive Reha Matcher
  const finderState = {
    age: 'school',      // toddler | school | youth
    status: 'post',     // post | pre | dialysis
    focus: 'holistic'   // holistic | winter | transition
  };

  document.querySelectorAll('.finder-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = btn.getAttribute('data-step');
      const val = btn.getAttribute('data-val');

      // Update active state in current group
      btn.closest('.finder-options').querySelectorAll('.finder-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      finderState[step] = val;
      evaluateRehaFinder();
    });
  });

  const finderResetBtn = document.getElementById('finder-reset-btn');
  if (finderResetBtn) {
    finderResetBtn.addEventListener('click', () => {
      finderState.age = 'school';
      finderState.status = 'post';
      finderState.focus = 'holistic';

      document.querySelectorAll('.finder-options').forEach(group => {
        group.querySelectorAll('.finder-opt-btn').forEach((btn, idx) => {
          btn.classList.toggle('active', idx === 0);
        });
      });
      evaluateRehaFinder();
    });
  }

  function evaluateRehaFinder() {
    const titleEl = document.getElementById('finder-result-title');
    const descEl = document.getElementById('finder-result-desc');
    const bookBtn = document.getElementById('finder-btn-book');

    if (!titleEl || !descEl) return;

    const isDe = currentLang === 'de';

    let resultTitle = "";
    let resultDesc = "";

    if (finderState.age === 'youth' || finderState.focus === 'transition') {
      resultTitle = isDe 
        ? "Jugendreha (Turnus 328 • 17.07. – 07.08.2027)" 
        : "Youth Rehabilitation (Turnus 328 • 17 Jul – 07 Aug 2027)";
      resultDesc = isDe
        ? "Eigenständige Reha ohne Eltern. Fokus auf Selbstständigkeit, Medikationskompetenz, Peer-Austausch und Vorbereitung auf die Erwachsenenmedizin."
        : "Autonomous rehab without parents. Focus on independence, medication adherence, peer bonding, and transition to adult healthcare.";
    } else if (finderState.focus === 'winter') {
      resultTitle = isDe
        ? "Familienorientierte Winter-Reha (Turnus 322 • 30.01. – 27.02.2027)"
        : "Family-Oriented Winter Rehab (Turnus 322 • 30 Jan – 27 Feb 2027)";
      resultDesc = isDe
        ? "Kindgerechter Skikurs in den Lienzer Dolomiten unter ständiger kinderärztlicher Aufsicht, kombiniert mit vollem therapeutischen Programm für die ganze Familie."
        : "Child-friendly ski camp in the alpine snow under direct pediatric monitoring, combined with full therapy programs for parents & siblings.";
    } else if (finderState.status === 'dialysis') {
      resultTitle = isDe
        ? "Familien-Reha mit Vor-Ort Hämodialyse (Turnus 326 • 22.05. – 19.06.2027)"
        : "Family Rehab with On-Site Hemodialysis (Turnus 326 • 22 May – 19 Jun 2027)";
      resultDesc = isDe
        ? "Reha in den Bergen trotz Dialysepflicht: Moderne HD- und PD-Stationen direkt im Haus in Iselsberg garantieren maximale Sicherheit."
        : "Alpine rehabilitation for dialysis patients: Modern in-house hemodialysis and peritoneal dialysis stations guarantee top medical safety.";
    } else if (finderState.age === 'toddler') {
      resultTitle = isDe
        ? "Familienorientierte Reha für Kleinkinder (Turnus 323 • 27.02. – 27.03.2027)"
        : "Family Rehab for Toddlers (Turnus 323 • 27 Feb – 27 Mar 2027)";
      resultDesc = isDe
        ? "Für Kinder von 0–6 Jahren: Behutsamer Rhythmus, spielerische Frühförderung, intensive Schulung der Eltern zu Immunsuppression und Infektionshygiene."
        : "For children ages 0–6: Gentle rhythm, playful motor stimulation, and deep guidance for parents on immunosuppression & hygiene.";
    } else {
      resultTitle = isDe
        ? "Familienorientierte Reha für Schulkinder (Turnus 324 • 27.03. – 24.04.2027)"
        : "Family Rehab for School Children (Turnus 324 • 27 Mar – 24 Apr 2027)";
      resultDesc = isDe
        ? "Mit eigener Heilstättenschule in Kleingruppen, Bewegungstherapie, Naturerlebnissen und speziellem Geschwisterkinder-Projekt."
        : "Includes accredited clinic schooling in small groups, physiotherapy, alpine nature therapy, and dedicated sibling support.";
    }

    titleEl.textContent = resultTitle;
    descEl.textContent = resultDesc;

    if (bookBtn) {
      bookBtn.setAttribute('data-turnus', resultTitle);
      bookBtn.onclick = () => {
        openContactModal(resultTitle);
      };
    }
  }

  // 4. Schedule 2027 Filters
  const schedFilterBtns = document.querySelectorAll('.sched-filter-btn');
  const schedRows = document.querySelectorAll('.sched-row');

  schedFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      schedFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      schedRows.forEach(row => {
        if (filter === 'all') {
          row.style.display = '';
        } else {
          const cats = row.getAttribute('data-category') || '';
          if (cats.includes(filter)) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        }
      });
    });
  });

  // Schedule Inquire Buttons
  document.querySelectorAll('.btn-apply-turnus').forEach(btn => {
    btn.addEventListener('click', () => {
      const turnusName = btn.getAttribute('data-turnus-info');
      openContactModal(turnusName);
    });
  });

  // 5. Digital Packing Checklist
  const checkBoxes = document.querySelectorAll('.checklist-input');
  const checkProgressBar = document.getElementById('checklist-progress-bar');
  const checkProgressText = document.getElementById('checklist-progress-text');
  const checkResetBtn = document.getElementById('checklist-reset-btn');
  const checkPrintBtn = document.getElementById('checklist-print-btn');

  // Load saved checklist state
  const savedChecks = JSON.parse(localStorage.getItem('ederhof_packing_list') || '{}');
  checkBoxes.forEach(cb => {
    const id = cb.id;
    if (savedChecks[id]) {
      cb.checked = true;
      cb.closest('.check-item-label').classList.add('checked');
    }

    cb.addEventListener('change', () => {
      savedChecks[id] = cb.checked;
      localStorage.setItem('ederhof_packing_list', JSON.stringify(savedChecks));
      cb.closest('.check-item-label').classList.toggle('checked', cb.checked);
      updateChecklistProgress();
    });
  });

  function updateChecklistProgress() {
    if (!checkProgressBar || !checkProgressText) return;
    const total = checkBoxes.length;
    const checked = Array.from(checkBoxes).filter(cb => cb.checked).length;
    const pct = Math.round((checked / total) * 100);

    checkProgressBar.style.width = pct + '%';
    const isDe = currentLang === 'de';
    checkProgressText.textContent = `${checked} / ${total} ${isDe ? 'gepackt' : 'packed'} (${pct}%)`;
  }
  updateChecklistProgress();

  if (checkResetBtn) {
    checkResetBtn.addEventListener('click', () => {
      checkBoxes.forEach(cb => {
        cb.checked = false;
        cb.closest('.check-item-label').classList.remove('checked');
      });
      localStorage.removeItem('ederhof_packing_list');
      updateChecklistProgress();
    });
  }

  if (checkPrintBtn) {
    checkPrintBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // 6. Testimonial Carousel
  const stories = [
    {
      img: 'images/fam_waninger.jpg',
      quoteDe: "„Endlich wurde uns Eltern die Angst genommen. Wie selbstverständlich tauschen sich die Kinder beim Spielen aus, zeigen sich gegenseitig ihre Narben und reden darüber, wer welche Medis nimmt. Uns Eltern geht es danach einfach besser!“",
      quoteEn: "“Finally, the anxiety was lifted from us parents. During playtime, the kids casually compare scars and talk about their meds as if it's the most normal thing in the world. We parents leave feeling so much lighter!”",
      author: "Familie Wanninger",
      detailDe: "Bereits dreimal am Ederhof; Sohn Hannes ist lebertransplantiert.",
      detailEn: "Three-time visitors; son Hannes has a liver transplant."
    },
    {
      img: 'images/winter_skiing.jpg',
      quoteDe: "„Die Gemeinschaft mit anderen transplantierten Kindern auf dem Ederhof hat Melanie spüren lassen, dass sie nicht allein ist. Sie konnte viel selbstverständlicher mit ihrer Krankheit umgehen. Die Reha hat uns noch enger verbunden.“",
      quoteEn: "“Being in a community of other transplanted children made Melanie realize she is never alone. She became far more natural with her condition. The rehab brought our entire family even closer together.”",
      author: "Familie Minich",
      detailDe: "Tochter Melanie ist nierentransplantiert und lernte in der Winter-Reha das Skifahren.",
      detailEn: "Daughter Melanie has a kidney transplant and learned to ski during the Winter Rehab."
    },
    {
      img: 'images/fam_luecke.jpg',
      quoteDe: "„Durch die vielen Krankenhausaufenthalte war unsere Familie lange getrennt. Ein gemeinsamer Urlaub war undenkbar. Der Ederhof ist für uns ein Ort, an dem wir zusammen sein können – liebevoll aufgefangen durch das tolle Team.“",
      quoteEn: "“Repeated hospital stays split our family for years. Family vacations were unimaginable due to medical equipment. Ederhof is a sanctuary where we can finally just be together, cared for by a world-class team.”",
      author: "Familie Lücke",
      detailDe: "Seit 2015 mehrfach auf dem Ederhof; Sohn Moses ist nierentransplantiert.",
      detailEn: "Visiting since 2015; son Moses has a kidney transplant."
    },
    {
      img: 'images/kira_youth.jpg',
      quoteDe: "„Der Ederhof ist wie eine zweite Heimat für mich. In der Jugendreha treffe ich endlich auf Leute, die genau dasselbe durchgemacht haben wie ich. Meine Freunde zuhause können das einfach nicht so nachfühlen.“",
      quoteEn: "“Ederhof is like a second home to me. In the youth rehab, I finally connect with friends who understand what hospital life and transplant surgery really feel like. My friends back home simply couldn't relate.”",
      author: "Kira (16 Jahre)",
      detailDe: "Lebertransplantiert, war als Kind mit Familie und nun in der selbstständigen Jugendreha.",
      detailEn: "Liver transplant recipient; first came as a young child with family, now attends youth rehab."
    },
    {
      img: 'images/fam_wiegel.jpg',
      quoteDe: "„Auf dem Ederhof haben wir uns das erste Mal gesehen gefühlt – ohne eine Nummer zu sein wie im Krankenhaus. Durch die tolle Betreuung der Ärzte und Therapeutinnen konnten wir unsere Last ablegen.“",
      quoteEn: "“At Ederhof we felt truly seen for the very first time — never like a medical number in a hospital. Through the compassionate care of the doctors and therapists, we could finally set down our burden.”",
      author: "Familie Wiegel",
      detailDe: "Sohn Johannes (lebertransplantiert) wurde über viele Jahre durch den Ederhof begleitet.",
      detailEn: "Son Johannes (liver transplant) was accompanied by Ederhof over many years."
    }
  ];

  let currentStoryIdx = 0;
  const storyImg = document.getElementById('story-img');
  const storyQuote = document.getElementById('story-quote');
  const storyAuthor = document.getElementById('story-author-name');
  const storyDetail = document.getElementById('story-author-detail');
  const storyDots = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  // Render dots
  if (storyDots) {
    storyDots.innerHTML = '';
    stories.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        currentStoryIdx = idx;
        updateCarouselContent();
      });
      storyDots.appendChild(dot);
    });
  }

  function updateCarouselContent() {
    const s = stories[currentStoryIdx];
    if (!s || !storyQuote) return;

    if (storyImg) storyImg.src = s.img;
    const isDe = currentLang === 'de';
    storyQuote.textContent = isDe ? s.quoteDe : s.quoteEn;
    if (storyAuthor) storyAuthor.textContent = s.author;
    if (storyDetail) storyDetail.textContent = isDe ? s.detailDe : s.detailEn;

    if (storyDots) {
      storyDots.querySelectorAll('.dot').forEach((d, idx) => {
        d.classList.toggle('active', idx === currentStoryIdx);
      });
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentStoryIdx = (currentStoryIdx - 1 + stories.length) % stories.length;
      updateCarouselContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentStoryIdx = (currentStoryIdx + 1) % stories.length;
      updateCarouselContent();
    });
  }

  // Auto carousel advance
  let carouselTimer = setInterval(() => {
    currentStoryIdx = (currentStoryIdx + 1) % stories.length;
    updateCarouselContent();
  }, 8000);

  const carouselCard = document.querySelector('.story-card');
  if (carouselCard) {
    carouselCard.addEventListener('mouseenter', () => clearInterval(carouselTimer));
    carouselCard.addEventListener('mouseleave', () => {
      carouselTimer = setInterval(() => {
        currentStoryIdx = (currentStoryIdx + 1) % stories.length;
        updateCarouselContent();
      }, 8000);
    });
  }

  // 7. Donation Impact Calculator & IBAN Copy
  const impactCards = document.querySelectorAll('.impact-card');
  impactCards.forEach(card => {
    card.addEventListener('click', () => {
      impactCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  document.querySelectorAll('.btn-copy-iban').forEach(btn => {
    btn.addEventListener('click', () => {
      const iban = btn.getAttribute('data-iban');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(iban).then(() => {
          showToast(currentLang === 'de' ? 'IBAN in die Zwischenablage kopiert!' : 'IBAN copied to clipboard!');
        });
      } else {
        showToast(iban);
      }
    });
  });

  function showToast(msg) {
    let toast = document.getElementById('toast-msg');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-msg';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 8. Campus Gallery & Lightbox Modal
  const galTabs = document.querySelectorAll('.gal-tab-btn');
  const galItems = document.querySelectorAll('.gal-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat');

      galItems.forEach(item => {
        if (cat === 'all' || item.getAttribute('data-cat') === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  galItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').getAttribute('src');
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = src;
        lightboxModal.classList.add('active');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 9. FAQ Accordion with Live Search
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  const faqSearchInput = document.getElementById('faq-search-input');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (!query || text.includes(query)) {
          item.style.display = '';
          if (query.length > 2) item.classList.add('active');
        } else {
          item.style.display = 'none';
          item.classList.remove('active');
        }
      });
    });
  }

  // 10. Contact & Turnus Inquiry Modal
  const contactModal = document.getElementById('contact-modal');
  const contactModalClose = document.getElementById('contact-modal-close');
  const turnusInput = document.getElementById('modal-turnus-select');

  window.openContactModal = function(prefillTurnus) {
    if (!contactModal) return;
    if (turnusInput && prefillTurnus) {
      turnusInput.value = prefillTurnus;
    }
    contactModal.classList.add('active');
  };

  document.querySelectorAll('.open-contact-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openContactModal();
    });
  });

  if (contactModalClose) {
    contactModalClose.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
      }
    });
  }

  // Form Submission Handlers
  const modalForm = document.getElementById('modal-inquiry-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isDe = currentLang === 'de';
      alert(isDe 
        ? "Vielen Dank! Ihre Anfrage an das Ederhof-Team wurde erfolgreich übermittelt. Wir melden uns zeitnah bei Ihnen."
        : "Thank you! Your inquiry to the Ederhof team has been sent successfully. We will get back to you shortly.");
      modalForm.reset();
      contactModal.classList.remove('active');
    });
  }

  const directForm = document.getElementById('direct-contact-form');
  if (directForm) {
    directForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isDe = currentLang === 'de';
      alert(isDe 
        ? "Vielen Dank! Ihre Nachricht an Claudia Jester & Daniel Bernsteiner wurde übermittelt."
        : "Thank you! Your message to Claudia Jester & Daniel Bernsteiner has been sent.");
      directForm.reset();
    });
  }

  // 11. Leaflet Interactive Alpine Map
  if (typeof L !== 'undefined' && document.getElementById('ederhof-map')) {
    try {
      const lat = 46.829167;
      const lon = 12.855833;
      const map = L.map('ederhof-map', {
        scrollWheelZoom: false
      }).setView([lat, lon], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const marker = L.marker([lat, lon]).addTo(map);
      marker.bindPopup(`
        <div style="font-family: 'Outfit', sans-serif; text-align: center; padding: 4px;">
          <strong style="color: #006837; font-size: 1.05rem;">Rehabilitationszentrum Ederhof</strong><br>
          <span style="font-size: 0.85rem; color: #475569;">Stronach 7, 9992 Iselsberg-Stronach</span><br>
          <span style="display:inline-block; margin-top: 4px; font-weight: 700; color: #e5a93b;">🏔️ 1.150 m Seehöhe • Osttirol</span>
        </div>
      `).openPopup();
    } catch (err) {
      console.warn("Leaflet initialization note:", err);
    }
  }

  // 12. Back to Top Button
  const bttBtn = document.getElementById('back-to-top');
  if (bttBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        bttBtn.classList.add('visible');
      } else {
        bttBtn.classList.remove('visible');
      }
    });
    bttBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
