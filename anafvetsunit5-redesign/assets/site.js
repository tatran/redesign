(() => {
  const root = document.documentElement;
  const key = 'anaf-unit-5-color-scheme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let storedTheme;

  try {
    storedTheme = localStorage.getItem(key);
  } catch {
    // The theme still works when storage is unavailable.
  }
  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.dataset.theme = storedTheme;
  }

  if (['livingpixelstudios.com', 'tatran.github.io'].includes(location.hostname)) {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.append(robots);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.theme-button');
    const currentTheme = () => root.dataset.theme || (systemTheme.matches ? 'dark' : 'light');

    function updateThemeButton() {
      const darkIsActive = currentTheme() === 'dark';
      themeButton.setAttribute('aria-pressed', String(darkIsActive));
    }

    themeButton.addEventListener('click', () => {
      root.dataset.theme = currentTheme() === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(key, root.dataset.theme);
      } catch {
        // The switch also works for the current page without storage.
      }
      updateThemeButton();
    });

    systemTheme.addEventListener('change', updateThemeButton);
    updateThemeButton();
    themeButton.hidden = false;

    const menu = document.querySelector('.menu-button');
    const nav = document.getElementById('navigation');

    function setMenu(open) {
      menu.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    }

    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') === 'false'));
    nav.addEventListener('click', event => {
      if (!event.target.closest('a') || getComputedStyle(menu).display === 'none') return;
      setMenu(false);
      menu.focus({ preventScroll: true });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menu.focus();
      }
    });

    menu.hidden = false;
    root.classList.add('menu-ready');

    const language = document.querySelector('.language');
    const alternate = new URL(language.href);
    function updateLanguageLink() {
      alternate.hash = location.hash;
      language.href = alternate.href;
    }

    window.addEventListener('hashchange', updateLanguageLink);
    updateLanguageLink();
  });
})();
