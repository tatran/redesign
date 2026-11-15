/**
 * Atlas Electrical Inc. - Modern Redesign Interactive Script
 * Features:
 * - Light/Dark Theme Switcher (persisted in localStorage + OS preference detection)
 * - Service Category Filtering
 * - Dynamic Interactive Project Cost Estimator
 * - FAQ Accordion
 * - Mobile Navigation Menu
 * - Form Validation & Interactive Feedback
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Light / Dark Theme Switcher
  // ==========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or detect system preference
  const savedTheme = localStorage.getItem('atlas_theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersDark) {
    htmlRoot.setAttribute('data-theme', 'dark');
  } else {
    htmlRoot.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('atlas_theme', newTheme);
    });
  }

  // ==========================================================================
  // 2. Mobile Navigation Menu
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  }

  // ==========================================================================
  // 3. Service Category Filtering
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // ==========================================================================
  // 4. Interactive Project Cost Estimator Tool
  // ==========================================================================
  const projectTypeSelect = document.getElementById('projectTypeSelect');
  const propertySizeSelect = document.getElementById('propertySizeSelect');
  const addSurge = document.getElementById('addSurge');
  const addPermit = document.getElementById('addPermit');
  const addSubpanel = document.getElementById('addSubpanel');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcLockInBtn = document.getElementById('calcLockInBtn');

  function calculateEstimate() {
    if (!projectTypeSelect || !propertySizeSelect || !calcPriceDisplay) return;

    const selectedOption = projectTypeSelect.options[projectTypeSelect.selectedIndex];
    const basePrice = parseFloat(selectedOption.getAttribute('data-base')) || 1000;
    const sizeMultiplier = parseFloat(propertySizeSelect.value) || 1.0;

    let subtotal = basePrice * sizeMultiplier;

    if (addSurge && addSurge.checked) subtotal += parseFloat(addSurge.getAttribute('data-price')) || 250;
    if (addPermit && addPermit.checked) subtotal += parseFloat(addPermit.getAttribute('data-price')) || 220;
    if (addSubpanel && addSubpanel.checked) subtotal += parseFloat(addSubpanel.getAttribute('data-price')) || 600;

    const lowEstimate = Math.round(subtotal * 0.95 / 10) * 10;
    const highEstimate = Math.round(subtotal * 1.15 / 10) * 10;

    calcPriceDisplay.textContent = `$${lowEstimate.toLocaleString()} – $${highEstimate.toLocaleString()} CAD`;
  }

  if (projectTypeSelect && propertySizeSelect) {
    projectTypeSelect.addEventListener('change', calculateEstimate);
    propertySizeSelect.addEventListener('change', calculateEstimate);
    if (addSurge) addSurge.addEventListener('change', calculateEstimate);
    if (addPermit) addPermit.addEventListener('change', calculateEstimate);
    if (addSubpanel) addSubpanel.addEventListener('change', calculateEstimate);

    calculateEstimate(); // Initial run
  }

  if (calcLockInBtn) {
    calcLockInBtn.addEventListener('click', () => {
      const selectedServiceName = projectTypeSelect.options[projectTypeSelect.selectedIndex].text;
      const priceText = calcPriceDisplay.textContent;

      // Smooth scroll to contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Pre-fill message
      const messageField = document.getElementById('messageText');
      if (messageField) {
        messageField.value = `I used your online cost estimator for: ${selectedServiceName}.\nEstimated range: ${priceText}.\nPlease contact me to schedule an on-site inspection.`;
      }
    });
  }

  // ==========================================================================
  // 5. FAQ Accordion
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
      }
    });
  });

  // ==========================================================================
  // 6. Contact Form & Hero Quick Form Handling
  // ==========================================================================
  const mainContactForm = document.getElementById('mainContactForm');
  const formStatusMsg = document.getElementById('formStatusMsg');
  const submitFormBtn = document.getElementById('submitFormBtn');

  if (mainContactForm) {
    mainContactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (submitFormBtn) {
        submitFormBtn.disabled = true;
        submitFormBtn.innerHTML = `
          <span>Sending Request...</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
        `;
      }

      // Simulate prompt dispatch feedback
      setTimeout(() => {
        if (formStatusMsg) {
          formStatusMsg.style.display = 'block';
          formStatusMsg.className = 'form-status-msg success';
          formStatusMsg.innerHTML = `
            <strong>✓ Free Estimate Request Received!</strong><br>
            Thank you! Hardeep or our dispatch team will call or email you within 2 hours to confirm details and lock in your price guarantee.
          `;
        }

        if (submitFormBtn) {
          submitFormBtn.disabled = false;
          submitFormBtn.innerHTML = `
            <span>Request Sent Successfully!</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          `;
        }

        mainContactForm.reset();
      }, 900);
    });
  }

  const heroQuickForm = document.getElementById('heroQuickForm');
  if (heroQuickForm) {
    heroQuickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const heroBtn = heroQuickForm.querySelector('button[type="submit"]');
      const name = document.getElementById('heroName').value;

      if (heroBtn) {
        heroBtn.disabled = true;
        heroBtn.innerHTML = `<span>Dispatching Request...</span>`;
      }

      setTimeout(() => {
        alert(`Thank you, ${name}! Your inquiry has been sent to Atlas Electrical Inc. Hardeep or a certified technician will call you shortly.`);
        heroQuickForm.reset();
        if (heroBtn) {
          heroBtn.disabled = false;
          heroBtn.innerHTML = `
            <span>Request Sent!</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          `;
        }
      }, 700);
    });
  }

  // ==========================================================================
  // 7. Navbar Active State on Scroll
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  });

});
