// Brink Eye Artistry - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initServiceFilters();
  initBeforeAfterSlider();
  initCostCalculator();
  initFaqAccordion();
  initForms();
  initSmoothScroll();
});

/* ==========================================================================
   1. Theme Toggle (Dark + Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const html = document.documentElement;
  
  // Check persisted theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.classList.add('dark');
    updateThemeIcons(true);
  } else {
    html.classList.remove('dark');
    updateThemeIcons(false);
  }
  
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons(isDark);
    });
  });
}

function updateThemeIcons(isDark) {
  const sunIcons = document.querySelectorAll('.theme-icon-sun');
  const moonIcons = document.querySelectorAll('.theme-icon-moon');
  const brandLogos = document.querySelectorAll('.dynamic-brand-logo');
  
  sunIcons.forEach(icon => icon.classList.toggle('hidden', !isDark));
  moonIcons.forEach(icon => icon.classList.toggle('hidden', isDark));
  
  // Switch brand logos if appropriate
  brandLogos.forEach(logo => {
    if (isDark) {
      logo.src = 'images/Brink_Reverse-e1510259715523.png';
    } else {
      logo.src = 'images/BrinkEA_logo-e1509577445608.png';
    }
  });
}

/* ==========================================================================
   2. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (!menuBtn || !mobileMenu) return;
  
  const toggleMenu = (open) => {
    if (open) {
      mobileMenu.classList.remove('translate-x-full');
      document.body.classList.add('overflow-hidden');
    } else {
      mobileMenu.classList.add('translate-x-full');
      document.body.classList.remove('overflow-hidden');
    }
  };
  
  menuBtn.addEventListener('click', () => toggleMenu(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

/* ==========================================================================
   3. Service Category Filters
   ========================================================================== */
function initServiceFilters() {
  const filterTabs = document.querySelectorAll('.service-tab-btn');
  const serviceCards = document.querySelectorAll('.service-card-item');
  
  if (!filterTabs.length) return;
  
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active-tab', 'bg-gold-500', 'text-white', 'dark:bg-amber-500');
        t.classList.add('bg-stone-100', 'text-stone-700', 'dark:bg-stone-800', 'dark:text-stone-300');
      });
      
      tab.classList.add('active-tab', 'bg-gold-500', 'text-white', 'dark:bg-amber-500');
      tab.classList.remove('bg-stone-100', 'text-stone-700', 'dark:bg-stone-800', 'dark:text-stone-300');
      
      const category = tab.getAttribute('data-category');
      
      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Interactive Before/After Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.querySelector('.ba-container');
  if (!container) return;
  
  const beforeDiv = container.querySelector('.ba-before');
  const handle = container.querySelector('.ba-slider-handle');
  let isSliding = false;
  
  const updateSlider = (xPos) => {
    const rect = container.getBoundingClientRect();
    let position = ((xPos - rect.left) / rect.width) * 100;
    
    // Boundary clamp
    if (position < 5) position = 5;
    if (position > 95) position = 95;
    
    beforeDiv.style.width = `${position}%`;
    handle.style.left = `${position}%`;
  };
  
  const startSlide = (e) => {
    isSliding = true;
    updateSlider(e.pageX || (e.touches && e.touches[0].pageX));
  };
  
  const stopSlide = () => {
    isSliding = false;
  };
  
  const moveSlide = (e) => {
    if (!isSliding) return;
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    updateSlider(pageX);
  };
  
  container.addEventListener('mousedown', startSlide);
  window.addEventListener('mouseup', stopSlide);
  window.addEventListener('mousemove', moveSlide);
  
  container.addEventListener('touchstart', startSlide);
  window.addEventListener('touchend', stopSlide);
  window.addEventListener('touchmove', moveSlide);
}

/* ==========================================================================
   5. Interactive Treatment & Cost Estimator
   ========================================================================== */
function initCostCalculator() {
  const checkboxes = document.querySelectorAll('.calc-service-item');
  const friendDiscountCheckbox = document.getElementById('calc-friend-discount');
  const priceDisplay = document.getElementById('calc-total-price');
  const durationDisplay = document.getElementById('calc-total-duration');
  const savingsDisplay = document.getElementById('calc-savings-row');
  const savingsAmount = document.getElementById('calc-savings-amount');
  const applySelectionBtn = document.getElementById('apply-calc-to-booking');
  
  if (!checkboxes.length || !priceDisplay) return;
  
  const recalculate = () => {
    let totalPrice = 0;
    let totalMinutes = 0;
    let selectedCount = 0;
    
    checkboxes.forEach(cb => {
      if (cb.checked) {
        totalPrice += parseFloat(cb.getAttribute('data-price') || 0);
        totalMinutes += parseInt(cb.getAttribute('data-duration') || 0, 10);
        selectedCount++;
      }
    });
    
    let savings = 0;
    // Multi-service combo bonus (if 2+ services selected, $25 off)
    if (selectedCount >= 2) {
      savings += 25;
    }
    
    // Friend discount (10% off treatment)
    if (friendDiscountCheckbox && friendDiscountCheckbox.checked && totalPrice > 0) {
      const friendSavings = Math.round(totalPrice * 0.10);
      savings += friendSavings;
    }
    
    const finalPrice = Math.max(0, totalPrice - savings);
    
    // Format duration in hours + mins
    let durationText = '0 min';
    if (totalMinutes > 0) {
      const hours = Math.floor(totalMinutes / 60);
      const mins = totalMinutes % 60;
      if (hours > 0 && mins > 0) {
        durationText = `${hours}h ${mins}m`;
      } else if (hours > 0) {
        durationText = `${hours} hrs`;
      } else {
        durationText = `${mins} min`;
      }
    }
    
    priceDisplay.textContent = `$${finalPrice}`;
    durationDisplay.textContent = durationText;
    
    if (savings > 0) {
      if (savingsDisplay) savingsDisplay.classList.remove('hidden');
      if (savingsAmount) savingsAmount.textContent = `-$${savings}`;
    } else {
      if (savingsDisplay) savingsDisplay.classList.add('hidden');
    }
  };
  
  checkboxes.forEach(cb => cb.addEventListener('change', recalculate));
  if (friendDiscountCheckbox) friendDiscountCheckbox.addEventListener('change', recalculate);
  
  recalculate();
  
  // Transfer selection to booking message
  if (applySelectionBtn) {
    applySelectionBtn.addEventListener('click', () => {
      const selectedTitles = [];
      checkboxes.forEach(cb => {
        if (cb.checked) {
          const label = cb.closest('label').querySelector('.service-title').textContent.trim();
          selectedTitles.push(label);
        }
      });
      
      const friendActive = friendDiscountCheckbox && friendDiscountCheckbox.checked;
      const messageField = document.getElementById('booking-message');
      const bookingSection = document.getElementById('booking');
      
      if (messageField) {
        const text = `Interested in booking:\n- ${selectedTitles.join('\n- ')}\n` +
          (friendActive ? `(Including Book with a Friend promotional discount)\n` : '') +
          `Estimated Total: ${priceDisplay.textContent} (Est. time: ${durationDisplay.textContent})`;
        messageField.value = text;
      }
      
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/* ==========================================================================
   6. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    if (!questionBtn || !answer) return;
    
    questionBtn.addEventListener('click', () => {
      const isOpen = answer.classList.contains('open');
      
      // Close others
      faqItems.forEach(other => {
        const otherAns = other.querySelector('.faq-answer');
        const otherIcon = other.querySelector('.faq-icon');
        if (otherAns) otherAns.classList.remove('open');
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      });
      
      // Toggle current
      if (!isOpen) {
        answer.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        answer.classList.remove('open');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });
}

/* ==========================================================================
   7. Form Submissions with Toast Confirmation
   ========================================================================== */
function initForms() {
  const bookingForm = document.getElementById('appointment-form');
  const contactForm = document.getElementById('contact-form');
  
  const showToast = (message, title = 'Thank you!') => {
    let toast = document.getElementById('custom-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'custom-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 max-w-md bg-stone-900 text-stone-100 p-4 rounded-xl shadow-2xl border border-amber-500/40 flex items-start gap-3 transform transition-all duration-300 translate-y-20 opacity-0';
      toast.innerHTML = `
        <div class="text-amber-400 text-xl"><i class="fa-solid fa-circle-check"></i></div>
        <div>
          <h4 class="font-semibold text-white text-sm" id="toast-title">Success</h4>
          <p class="text-xs text-stone-300 mt-0.5" id="toast-message">Message</p>
        </div>
        <button onclick="this.parentElement.classList.add('translate-y-20','opacity-0')" class="ml-auto text-stone-400 hover:text-white text-xs">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;
      document.body.appendChild(toast);
    }
    
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-message').textContent = message;
    
    setTimeout(() => {
      toast.classList.remove('translate-y-20', 'opacity-0');
    }, 50);
    
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 6000);
  };
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('booking-name')?.value || 'Client';
      showToast(`We received your appointment request for ${name}. Sarah will reach out via text/email within 24 hours to confirm your time!`, 'Request Sent!');
      bookingForm.reset();
    });
  }
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for reaching out! Sarah will answer your question shortly.', 'Message Received');
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   8. Smooth Scroll Navigation
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
