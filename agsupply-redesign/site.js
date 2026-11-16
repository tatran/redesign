(() => {
  const storageKey = 'agsupply-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  let choice;

  try {
    choice = localStorage.getItem(storageKey);
  } catch {
    // The switch still works when browser storage is disabled.
  }

  function applyTheme(toggle) {
    const theme = choice || (systemTheme.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#151d17' : '#f8f8f0';
    toggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  choice = choice === 'light' || choice === 'dark' ? choice : null;
  applyTheme();

  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('[data-theme-toggle]');
    themeToggle.hidden = false;
    applyTheme(themeToggle);
    themeToggle.addEventListener('click', () => {
      choice = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, choice);
      } catch {
        // Storage is optional.
      }
      applyTheme(themeToggle);
    });
    systemTheme.addEventListener('change', () => applyTheme(themeToggle));

    const menuToggle = document.querySelector('[data-menu-toggle]');
    const nav = document.getElementById('site-nav');
    menuToggle.hidden = false;
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      if (!isOpen) nav.querySelector('a').focus();
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) menuToggle.setAttribute('aria-expanded', 'false');
    });
    document.querySelector('.header').addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || menuToggle.getAttribute('aria-expanded') !== 'true') return;
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    });
  });
})();
