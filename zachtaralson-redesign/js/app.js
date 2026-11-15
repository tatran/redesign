/* ==========================================================================
   ZACH TARALSON · SPLOOSH! STUDIOS LTD. & ENEVOLD (enevoldmusik)
   Interactive Engine: Theme, Quad-Lingual i18n, Studio Quote Calculator,
   Enevold Discography Audio Player, and 16-Act Credits Filter
   ========================================================================== */

(function () {
  'use strict';

  let currentLang = localStorage.getItem('zt_lang') || 'en';
  let currentTheme = localStorage.getItem('zt_theme') || 'dark';
  let selectedServices = new Set(['mixing', 'mastering']);
  let songCount = 1;
  let currentReleaseFilter = 'all';
  let currentCreditFilter = 'all';
  let portraitAlt = false;

  // Shared HTML5 Audio instance for Enevold & SoundBetter previews
  const audio = new Audio();
  audio.preload = 'none';
  let activeTrackId = null;

  /* ------------------------------------------------------------------------
     1. THEME SWITCHER (DARK CONTROL ROOM / LIGHT ACOUSTIC STUDIO)
     ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    currentTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('zt_theme', currentTheme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = currentTheme === 'dark' ? '☀️ Light Studio' : '🌙 Dark Console';
      btn.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  /* ------------------------------------------------------------------------
     2. QUAD-LINGUAL LOCALIZATION (EN / ES / NO / FR)
     ------------------------------------------------------------------------ */
  function applyLanguage(lang) {
    if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('zt_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const dict = window.TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    renderServices();
    updateCalculator();
  }

  /* ------------------------------------------------------------------------
     3. SPLOOSH! STUDIOS SERVICES & QUOTE CALCULATOR
     ------------------------------------------------------------------------ */
  function renderServices() {
    const grid = document.getElementById('servicesGrid');
    const checkList = document.getElementById('calcCheckList');
    if (!grid || !checkList || !window.STUDIO_SERVICES) return;

    grid.innerHTML = window.STUDIO_SERVICES.map((srv) => {
      const isSelected = selectedServices.has(srv.id);
      const name = srv.name[currentLang] || srv.name.en;
      const desc = srv.desc[currentLang] || srv.desc.en;
      return `
        <article class="service-card">
          <div>
            <div class="service-top">
              <span class="service-icon" aria-hidden="true">${srv.icon}</span>
              <span class="service-price-tag">\$${srv.price} <small style="font-weight:500;">/ ${srv.unit.replace('per ', '')}</small></span>
            </div>
            <h3>${name}</h3>
            <p>${desc}</p>
          </div>
          <button type="button" class="service-add-btn ${isSelected ? 'selected' : ''}" data-srv-id="${srv.id}">
            ${isSelected ? '✓ Selected in Quote' : '+ Add to Studio Quote'}
          </button>
        </article>
      `;
    }).join('');

    checkList.innerHTML = window.STUDIO_SERVICES.map((srv) => {
      const isSelected = selectedServices.has(srv.id);
      const name = srv.name[currentLang] || srv.name.en;
      return `
        <label class="calc-check-item">
          <span>
            <input type="checkbox" value="${srv.id}" ${isSelected ? 'checked' : ''} />
            <strong>${name}</strong>
          </span>
          <span style="color:var(--accent-primary); font-weight:700;">\$${srv.price}</span>
        </label>
      `;
    }).join('');

    grid.querySelectorAll('.service-add-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-srv-id');
        if (selectedServices.has(id)) {
          selectedServices.delete(id);
        } else {
          selectedServices.add(id);
        }
        renderServices();
        updateCalculator();
      });
    });

    checkList.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.addEventListener('change', () => {
        if (cb.checked) {
          selectedServices.add(cb.value);
        } else {
          selectedServices.delete(cb.value);
        }
        renderServices();
        updateCalculator();
      });
    });
  }

  function updateCalculator() {
    const slider = document.getElementById('songCountSlider');
    const countDisplay = document.getElementById('songCountValue');
    const totalEl = document.getElementById('calcTotalPrice');
    const discountEl = document.getElementById('calcDiscountNote');
    const breakdownEl = document.getElementById('calcBreakdownText');
    if (!totalEl || !window.STUDIO_SERVICES) return;

    if (slider) songCount = parseInt(slider.value, 10) || 1;
    if (countDisplay) countDisplay.textContent = `${songCount} ${songCount === 1 ? 'Song' : 'Songs (EP / Album)'}`;

    let perSongSum = 0;
    const chosenNames = [];
    window.STUDIO_SERVICES.forEach((srv) => {
      if (selectedServices.has(srv.id)) {
        perSongSum += srv.price;
        chosenNames.push(`${srv.name.en} ($${srv.price})`);
      }
    });

    const rawTotal = perSongSum * songCount;
    let discountRate = 0;
    if (songCount >= 10) discountRate = 0.15;
    else if (songCount >= 4) discountRate = 0.10;
    else if (songCount >= 2) discountRate = 0.05;

    const finalTotal = Math.round(rawTotal * (1 - discountRate));
    totalEl.textContent = `$${finalTotal.toLocaleString()}`;

    if (discountEl) {
      if (discountRate > 0 && rawTotal > 0) {
        const saved = rawTotal - finalTotal;
        discountEl.textContent = `🎉 Multi-Project SoundBetter Deal applied: ${Math.round(discountRate * 100)}% off (Save $${saved})!`;
      } else {
        discountEl.textContent = '💡 Tip: Select 2+ songs for a 5%–15% multi-project bundle discount.';
      }
    }

    if (breakdownEl) {
      breakdownEl.textContent = chosenNames.length
        ? `${chosenNames.join(' + ')} × ${songCount} song(s)`
        : 'Select at least one studio service above to calculate your estimate.';
    }
  }

  /* ------------------------------------------------------------------------
     4. ENEVOLD DISCOGRAPHY & AUDIO PREVIEW PLAYER
     ------------------------------------------------------------------------ */
  function renderDiscography() {
    const grid = document.getElementById('discographyGrid');
    if (!grid || !window.ENEVOLD_RELEASES) return;

    const list = window.ENEVOLD_RELEASES.filter((rel) => {
      if (currentReleaseFilter === 'all') return true;
      if (currentReleaseFilter === '2024-2026') return ['2026', '2025', '2024'].includes(rel.year);
      return rel.type === currentReleaseFilter;
    });

    grid.innerHTML = list.map((rel) => {
      const isPlaying = activeTrackId === rel.id && !audio.paused;
      return `
        <article class="release-card">
          <div class="release-cover-wrap">
            <img src="${rel.cover}" alt="Enevold – ${rel.title} (${rel.year}) cover art" loading="lazy" />
            <span class="release-year-badge">${rel.date}</span>
            <span class="release-genre-badge">${rel.genre}</span>
            <button type="button" class="release-play-overlay" data-play-id="${rel.id}" aria-label="Play audio preview for ${rel.title}">
              ${isPlaying ? '⏸' : '▶'}
            </button>
          </div>
          <div class="release-body">
            <div>
              <h3 class="release-title">${rel.title}</h3>
              <div class="release-meta">${rel.tracks} · Written &amp; Produced by Zach Taralson</div>
              <p class="release-desc">${rel.desc}</p>
            </div>
            <div class="release-links">
              <button type="button" class="btn-link-play" data-play-id="${rel.id}" style="background:none;border:none;color:var(--accent-cyan);font-weight:700;cursor:pointer;font-size:0.82rem;">
                ${isPlaying ? '⏸ Pause Preview' : '🎧 Audition Track'}
              </button>
              <a href="${rel.appleUrl}" target="_blank" rel="noopener noreferrer">Apple Music ↗</a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('[data-play-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-play-id');
        const rel = window.ENEVOLD_RELEASES.find((r) => r.id === id);
        if (rel) toggleAudioTrack(rel.id, rel.previewUrl, `Enevold – ${rel.title} (${rel.year})`);
      });
    });
  }

  function toggleAudioTrack(id, url, label) {
    const heroPlayBtn = document.getElementById('heroPlayBtn');
    const heroTrackTitle = document.getElementById('heroTrackTitle');

    if (activeTrackId === id && !audio.paused) {
      audio.pause();
      if (heroPlayBtn) heroPlayBtn.textContent = '▶';
      renderDiscography();
      return;
    }

    activeTrackId = id;
    audio.src = url;
    audio.play().catch(() => {});
    if (heroTrackTitle && label) heroTrackTitle.textContent = label;
    if (heroPlayBtn) heroPlayBtn.textContent = '⏸';
    renderDiscography();
  }

  /* ------------------------------------------------------------------------
     5. 16 BANDS / ARTISTS / PROJECTS CREDITS EXPLORER
     ------------------------------------------------------------------------ */
  function renderCredits() {
    const grid = document.getElementById('creditsGrid');
    if (!grid || !window.PROJECT_CREDITS) return;

    const filtered = window.PROJECT_CREDITS.filter((item) => {
      if (currentCreditFilter === 'all') return true;
      if (currentCreditFilter === 'international') return item.region === 'international';
      if (currentCreditFilter === 'producer') {
        return item.roles.some((r) => /producer|engineer|mixer/i.test(r));
      }
      if (currentCreditFilter === 'session') {
        return item.roles.some((r) => /guitar|bass|drum|keys/i.test(r));
      }
      return true;
    });

    grid.innerHTML = filtered.map((c) => `
      <article class="credit-card">
        <div class="credit-top">
          <h3>${c.name}</h3>
          <span class="credit-country">${c.country}</span>
        </div>
        <div class="role-pills">
          ${c.roles.map((r) => `<span class="role-pill">${r}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     6. INITIALIZATION & EVENT LISTENERS
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    renderDiscography();
    renderCredits();

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileBtn && mainNav) {
      mobileBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
      });
      mainNav.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => mainNav.classList.remove('open'));
      });
    }

    // Portrait switcher (WordPress Canon 5D Mark II vs SoundBetter Studio photo)
    const portraitSwitchBtn = document.getElementById('portraitSwitchBtn');
    const heroPortraitImg = document.getElementById('heroPortraitImg');
    const portraitCaption = document.getElementById('portraitCaption');
    if (portraitSwitchBtn && heroPortraitImg) {
      portraitSwitchBtn.addEventListener('click', () => {
        portraitAlt = !portraitAlt;
        if (portraitAlt) {
          heroPortraitImg.src = 'images/zach-soundbetter-portrait.jpg';
          if (portraitCaption) portraitCaption.textContent = '📸 Zach Taralson · SoundBetter Verified Studio Profile';
        } else {
          heroPortraitImg.src = 'images/zach-studio-portrait.jpg';
          if (portraitCaption) portraitCaption.textContent = '🎚️ Zach Taralson at Sploosh! Studios Console · Kelowna, BC';
        }
      });
    }

    // Hero SoundBetter Reference Player ("Enevold - I.C.U.")
    const heroPlayBtn = document.getElementById('heroPlayBtn');
    const waveformBars = document.querySelectorAll('#heroWaveform span');
    const currentTimeEl = document.getElementById('audioCurrentTime');
    const durationEl = document.getElementById('audioDuration');

    if (heroPlayBtn) {
      heroPlayBtn.addEventListener('click', () => {
        toggleAudioTrack(
          'icu-single-2022',
          'https://dkxd2qj9i8fak.cloudfront.net/uploads/track/file/485877/ICU_GZW_7.mp3',
          'Enevold – I.C.U. (SoundBetter Reference Mix)'
        );
      });
    }

    audio.addEventListener('timeupdate', () => {
      if (!audio.duration) return;
      const pct = audio.currentTime / audio.duration;
      const activeCount = Math.floor(pct * waveformBars.length);
      waveformBars.forEach((bar, idx) => {
        bar.classList.toggle('played', idx <= activeCount);
      });
      if (currentTimeEl) {
        const m = Math.floor(audio.currentTime / 60);
        const s = String(Math.floor(audio.currentTime % 60)).padStart(2, '0');
        currentTimeEl.textContent = `${m}:${s}`;
      }
      if (durationEl && isFinite(audio.duration)) {
        const dm = Math.floor(audio.duration / 60);
        const ds = String(Math.floor(audio.duration % 60)).padStart(2, '0');
        durationEl.textContent = `${dm}:${ds}`;
      }
    });

    audio.addEventListener('ended', () => {
      if (heroPlayBtn) heroPlayBtn.textContent = '▶';
      renderDiscography();
    });

    // Song count slider
    const slider = document.getElementById('songCountSlider');
    if (slider) {
      slider.addEventListener('input', updateCalculator);
    }

    // Transfer quote to contact form
    const transferBtn = document.getElementById('transferQuoteBtn');
    const notesField = document.getElementById('bookingNotes');
    if (transferBtn && notesField) {
      transferBtn.addEventListener('click', () => {
        const breakdown = document.getElementById('calcBreakdownText')?.textContent || '';
        const total = document.getElementById('calcTotalPrice')?.textContent || '';
        notesField.value = `Studio Estimate from Sploosh! Studios Calculator:\n• Services: ${breakdown}\n• Estimated Total: ${total}\n\nProject Details & Reference Artists: `;
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        notesField.focus();
      });
    }

    // Discography filter buttons
    document.querySelectorAll('[data-rel-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentReleaseFilter = btn.getAttribute('data-rel-filter');
        document.querySelectorAll('[data-rel-filter]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderDiscography();
      });
    });

    // Credits filter buttons
    document.querySelectorAll('[data-cred-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentCreditFilter = btn.getAttribute('data-cred-filter');
        document.querySelectorAll('[data-cred-filter]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderCredits();
      });
    });

    // Booking form submission (mailto generator to splooshrecordingco@gmail.com)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('clientName')?.value || '';
        const email = document.getElementById('clientEmail')?.value || '';
        const type = document.getElementById('projectType')?.value || '';
        const notes = document.getElementById('bookingNotes')?.value || '';
        const subject = encodeURIComponent(`Sploosh! Studios Inquiry — ${type} (${name})`);
        const body = encodeURIComponent(`Hi Zach,\n\nName / Artist: ${name}\nEmail: ${email}\nProject Type: ${type}\n\n${notes}\n`);
        window.location.href = `mailto:splooshrecordingco@gmail.com?subject=${subject}&body=${body}`;
      });
    }
  });
})();
