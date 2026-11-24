/**
 * Just For You Day Spa & Salon - Interactive Frontend & Neon DB Access Logger
 * Location: Vernon, BC, Canada
 * 
 * Features:
 * 1. Dark & Light Theme Switcher with persistence & system preference detection
 * 2. Mobile Responsive Navigation & Keyboard navigation
 * 3. Service Category Filtering
 * 4. Interactive Custom Spa Package Builder & Estimator
 * 5. Gift Card Value Selector & Preview
 * 6. Seasonal Hours Toggle (Winter vs Summer)
 * 7. Accessible FAQ Accordion
 * 8. Appointment Booking Request Modal & Form Validation
 * 9. Real-time Neon DB Access Logger (Logs Time, IP Address, Domain URL)
 * 10. Accessible Toast Notification System
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Light & Dark Theme Switcher
  // ==========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;
  const isFrench = htmlRoot.lang.startsWith('fr');

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('justforyou_theme', theme);
    } catch (e) {
      console.warn('LocalStorage unavailable:', e);
    }

    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.setAttribute('aria-pressed', String(isDark));
      themeToggle.setAttribute(
        'aria-label',
        isFrench
          ? (isDark ? 'Activer le mode clair' : 'Activer le mode sombre')
          : (isDark ? 'Switch to light mode' : 'Switch to dark mode')
      );
    }
  }

  // Detect saved preference or system mode
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('justforyou_theme');
  } catch (e) {}

  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme);
  } else if (systemPrefersDark) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlRoot.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      showToast(isFrench ? `Thème changé : ${next}` : `Theme changed to ${next} mode`);
    });
  }

  // Listen for OS theme changes if user hasn't set an explicit preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      let userSet = null;
      try { userSet = localStorage.getItem('justforyou_theme'); } catch (err) {}
      if (!userSet) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // ==========================================================================
  // 2. Mobile Responsive Navigation
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  function closeMenu() {
    if (navMenu && mobileToggle) {
      navMenu.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close when clicking nav links
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
        mobileToggle.focus();
      }
    });
  }

  // ==========================================================================
  // 3. Service Category Filtering
  // ==========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (targetCategory === 'all' || category === targetCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 4. Interactive Custom Spa Package Builder & Estimator
  // ==========================================================================
  const serviceItems = document.querySelectorAll('.custom-service-item');
  const selectedList = document.getElementById('selectedServicesList');
  const totalCostElem = document.getElementById('estimatedTotalCost');
  const totalDurationElem = document.getElementById('estimatedDuration');
  const bookCustomPackageBtn = document.getElementById('bookCustomPackageBtn');

  function updatePackageCalculation() {
    let totalPrice = 0;
    let totalMinutes = 0;
    const selectedServices = [];

    serviceItems.forEach(item => {
      if (item.classList.contains('selected')) {
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price')) || 0;
        const minutes = parseInt(item.getAttribute('data-duration')) || 0;

        totalPrice += price;
        totalMinutes += minutes;
        selectedServices.push({ name, price, minutes });
      }
    });

    if (totalCostElem) {
      totalCostElem.textContent = `$${totalPrice.toFixed(2)}`;
    }

    if (totalDurationElem) {
      const hours = Math.floor(totalMinutes / 60);
      const mins = totalMinutes % 60;
      let durationStr = '';
      if (hours > 0) {
        durationStr += `${hours}h `;
      }
      if (mins > 0 || hours === 0) {
        durationStr += `${mins}min`;
      }
      totalDurationElem.textContent = durationStr;
    }

    if (selectedList) {
      if (selectedServices.length === 0) {
        selectedList.innerHTML = `<li class="empty-state">${
          isFrench
            ? 'Aucun soin sélectionné pour le moment. Cliquez sur les soins ci-contre pour personnaliser votre forfait.'
            : 'No treatments selected yet. Click options on the left to build your personalized retreat.'
        }</li>`;
      } else {
        selectedList.innerHTML = selectedServices.map(s => `
          <li>
            <span><strong>${s.name}</strong> (${s.minutes} min)</span>
            <span class="text-gold font-bold">$${s.price.toFixed(2)}</span>
          </li>
        `).join('');
      }
    }

    if (bookCustomPackageBtn) {
      bookCustomPackageBtn.disabled = selectedServices.length === 0;
    }
  }

  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
      updatePackageCalculation();
    });
  });

  if (bookCustomPackageBtn) {
    bookCustomPackageBtn.addEventListener('click', () => {
      const selected = Array.from(document.querySelectorAll('.custom-service-item.selected'))
        .map(i => i.getAttribute('data-name'))
        .join(', ');

      openBookingModal(selected ? (isFrench ? `Forfait sur mesure : ${selected}` : `Custom Package: ${selected}`) : '');
    });
  }

  // Initialize calculation on load
  updatePackageCalculation();

  // ==========================================================================
  // 5. Gift Card Value Selector & Preview
  // ==========================================================================
  const giftButtons = document.querySelectorAll('.gift-amount-btn');
  const giftPreviewAmount = document.getElementById('giftPreviewAmount');

  giftButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      giftButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const amount = btn.getAttribute('data-amount');
      if (giftPreviewAmount) {
        giftPreviewAmount.textContent = `$${amount} CAD`;
      }
    });
  });

  // ==========================================================================
  // 6. Seasonal Hours Toggle (Winter vs Summer)
  // ==========================================================================
  const winterToggleBtn = document.getElementById('winterHoursBtn');
  const summerToggleBtn = document.getElementById('summerHoursBtn');
  const winterTable = document.getElementById('winterHoursTable');
  const summerTable = document.getElementById('summerHoursTable');

  if (winterToggleBtn && summerToggleBtn && winterTable && summerTable) {
    winterToggleBtn.addEventListener('click', () => {
      winterToggleBtn.classList.add('active');
      summerToggleBtn.classList.remove('active');
      winterTable.style.display = 'table';
      summerTable.style.display = 'none';
    });

    summerToggleBtn.addEventListener('click', () => {
      summerToggleBtn.classList.add('active');
      winterToggleBtn.classList.remove('active');
      summerTable.style.display = 'table';
      winterTable.style.display = 'none';
    });
  }

  // ==========================================================================
  // 7. Accessible FAQ Accordion
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-question');
            const otherAns = other.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          item.classList.remove('active');
          question.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        }
      });
    }
  });

  // ==========================================================================
  // 8. Booking Request Modal & Form
  // ==========================================================================
  const bookingModal = document.getElementById('bookingModal');
  const openModalButtons = document.querySelectorAll('[data-open-modal]');
  const closeModalButtons = document.querySelectorAll('[data-close-modal]');
  const bookingForm = document.getElementById('bookingForm');
  const serviceSelect = document.getElementById('bookingService');

  function openBookingModal(preselectedService = '') {
    if (bookingModal) {
      bookingModal.classList.add('open');
      document.body.style.overflow = 'hidden';

      if (preselectedService && serviceSelect) {
        // If exact option exists, select it, otherwise create or add to notes
        let matched = false;
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].text.toLowerCase().includes(preselectedService.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) {
          const notes = document.getElementById('bookingNotes');
          if (notes) {
            notes.value = preselectedService;
          }
        }
      }
    }
  }

  function closeBookingModal() {
    if (bookingModal) {
      bookingModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openBookingModal(service);
    });
  });

  closeModalButtons.forEach(btn => {
    btn.addEventListener('click', closeBookingModal);
  });

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeBookingModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && bookingModal.classList.contains('open')) {
        closeBookingModal();
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookingName')?.value || 'Guest';
      const service = serviceSelect?.value || 'Treatment';

      showToast(
        isFrench
          ? `Merci ${name} ! Votre demande de rendez-vous pour "${service}" a été envoyée avec succès.`
          : `Thank you ${name}! Your booking inquiry for "${service}" has been received. Our concierge will contact you shortly.`
      );

      bookingForm.reset();
      closeBookingModal();
    });
  }

  // ==========================================================================
  // 9. Real-time Neon DB Access Logger
  // Requirement: Log time, IP address, and domain URL when page is accessed to Neon DB
  // ==========================================================================
  const NEON_FALLBACK_URL = "postgresql://upc_telemetry_writer:VaseNoveBezpecneHeslo123%21@ep-broad-mode-ba2zewd1-pooler.c-8.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

  async function logPageAccessToNeonDB() {
    const accessTime = new Date().toISOString();
    const domainUrl = window.location.href;
    const referrer = document.referrer || 'Direct Visit';
    const language = htmlRoot.lang || 'en-CA';
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';

    const neonStatusWidget = document.getElementById('neonStatusDetails');
    const neonStatusBadge = document.getElementById('neonStatusBadge');

    let ipAddress = '127.0.0.1 (Client)';

    // 1. Fast Client IP Address lookup (1.5s timeout so it doesn't delay Neon insert)
    try {
      const ipPromise = fetch('https://api.ipify.org?format=json', { cache: 'no-store' });
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 1500));
      const ipResponse = await Promise.race([ipPromise, timeoutPromise]);
      if (ipResponse && ipResponse.ok) {
        const ipData = await ipResponse.json();
        ipAddress = ipData.ip || ipAddress;
      }
    } catch (ipErr) {
      // Graceful fallback to client origin
    }

    const logPayload = {
      timestamp: accessTime,
      ip_address: ipAddress,
      domain_url: domainUrl,
      referrer: referrer,
      language: language,
      theme: currentTheme,
      user_agent: navigator.userAgent,
      screen_resolution: `${window.screen.width}x${window.screen.height}`
    };

    console.group('🟢 [Neon DB Access Logger] Page Access Event');
    console.log('Timestamp (UTC):', logPayload.timestamp);
    console.log('Client IP Address:', logPayload.ip_address);
    console.log('Domain URL:', logPayload.domain_url);
    console.log('Language & Theme:', `${logPayload.language} (${logPayload.theme})`);
    console.groupEnd();

    // 2. Dispatch to Neon DB Logging Endpoint
    let loggedToBackend = false;
    let insertedRowId = null;
    let errorMessage = '';

    // A. Direct Client-to-Neon HTTP Execution
    const clientDbUrl = window.NEON_CONFIG?.DATABASE_URL || NEON_FALLBACK_URL;
    if (clientDbUrl && clientDbUrl.startsWith('postgres')) {
      try {
        const parsedUrl = new URL(clientDbUrl);
        const host = parsedUrl.hostname;

        // Sanitize strings for SQL query
        const safeDomain = domainUrl.replace(/'/g, "''");
        const safeUserAgent = (navigator.userAgent || '').replace(/'/g, "''");
        const safeReferrer = (referrer || '').replace(/'/g, "''");

        const sql = `INSERT INTO page_access_logs (access_time, ip_address, domain_url, user_agent, referrer, language, theme, screen_resolution) VALUES ('${accessTime}', '${ipAddress}', '${safeDomain}', '${safeUserAgent}', '${safeReferrer}', '${language}', '${currentTheme}', '${logPayload.screen_resolution}') RETURNING id, access_time;`;

        const neonDirectRes = await fetch(`https://${host}/sql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Neon-Connection-String': clientDbUrl
          },
          body: JSON.stringify({ query: sql })
        });

        if (neonDirectRes.ok) {
          const directData = await neonDirectRes.json();
          insertedRowId = directData?.rows?.[0]?.id || directData?.[0]?.id || '✓';
          loggedToBackend = true;
          console.log(`✅ [Neon Direct] Successfully inserted Row #${insertedRowId} into Neon DB!`, directData);
          showToast(isFrench ? `Visite enregistrée dans Neon DB (Ligne #${insertedRowId})` : `Visit logged to Neon DB (Row #${insertedRowId})`, true);
        } else {
          errorMessage = await neonDirectRes.text();
          console.warn('⚠️ Neon HTTP query rejected:', errorMessage);
        }
      } catch (directErr) {
        errorMessage = directErr.message;
        console.warn('⚠️ Direct Neon HTTP execution failed, trying proxy:', directErr.message);
      }
    }

    // B. Proxy Endpoint (/api/log) fallback
    if (!loggedToBackend) {
      try {
        const proxyEndpoint = window.NEON_CONFIG?.API_ENDPOINT || '/api/log';
        const backendResponse = await fetch(proxyEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(logPayload)
        });

        if (backendResponse.ok) {
          const resData = await backendResponse.json();
          loggedToBackend = true;
          insertedRowId = resData?.data?.result?.rows?.[0]?.id || '✓';
          console.log('✅ Successfully recorded in Neon DB via API endpoint:', resData);
          showToast(isFrench ? `Visite enregistrée via API (Ligne #${insertedRowId})` : `Visit logged via API (Row #${insertedRowId})`, true);
        }
      } catch (netErr) {
        console.info('ℹ️ /api/log proxy is offline on static host.');
      }
    }

    // 3. Fallback Local Storage Persistence
    try {
      const history = JSON.parse(localStorage.getItem('neon_access_logs') || '[]');
      history.unshift(logPayload);
      if (history.length > 50) history.pop();
      localStorage.setItem('neon_access_logs', JSON.stringify(history));
    } catch (e) {}

    // 4. Update UI Widget in Footer
    if (neonStatusWidget) {
      const statusText = loggedToBackend 
        ? `<span style="color:#00E599; font-weight:700;">✅ Synced to Neon DB · Row #${insertedRowId} recorded</span>` 
        : (errorMessage ? `<span style="color:#EF4444;">Error: ${errorMessage.slice(0, 80)}</span>` : '<span style="color:#F59E0B;">Connecting to Neon...</span>');

      neonStatusWidget.innerHTML = `
        <span><strong>Time:</strong> ${new Date(accessTime).toLocaleTimeString()} (${new Date(accessTime).toLocaleDateString()})</span>
        <span><strong>Client IP:</strong> ${ipAddress}</span>
        <span><strong>Domain URL:</strong> ${domainUrl}</span>
        <span><strong>Neon Status:</strong> ${statusText}</span>
        <div style="margin-top:0.6rem;">
          <button type="button" id="manualNeonLogBtn" style="padding:0.3rem 0.8rem; border-radius:6px; background:#00E599; color:#121013; font-weight:700; font-size:0.75rem; border:none; cursor:pointer;">
            ⚡ Trigger Neon DB Log Now
          </button>
        </div>
      `;

      // Attach manual log button listener
      const manualBtn = document.getElementById('manualNeonLogBtn');
      if (manualBtn) {
        manualBtn.onclick = () => {
          manualBtn.textContent = 'Logging...';
          logPageAccessToNeonDB();
        };
      }
    }

    if (neonStatusBadge) {
      if (loggedToBackend) {
        neonStatusBadge.innerHTML = '<span class="neon-dot"></span> Synced to Neon';
        neonStatusBadge.style.color = '#00E599';
      }
    }

    return { success: loggedToBackend, rowId: insertedRowId };
  }

  // Execute logging on page access
  logPageAccessToNeonDB();

  // ==========================================================================
  // 10. Accessible Toast Notification System
  // ==========================================================================
  function showToast(message, isNeon = false) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${isNeon ? 'toast-neon' : ''}`;
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

});
