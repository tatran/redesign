(() => {
  const button = document.querySelector('.theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : system.matches;
  const sync = () => {
    button.setAttribute('aria-label', isDark() ? button.dataset.light : button.dataset.dark);
    document.querySelector('meta[name="theme-color"]').content = isDark() ? '#17231c' : '#f4efe5';
  };
  button.hidden = false;
  button.addEventListener('click', () => {
    const theme = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('bean-scene-theme', theme); } catch (_) {}
    sync();
  });
  system.addEventListener('change', sync);
  window.addEventListener('storage', event => {
    if (event.key === 'bean-scene-theme') {
      if (event.newValue === 'light' || event.newValue === 'dark') document.documentElement.dataset.theme = event.newValue;
      else delete document.documentElement.dataset.theme;
      sync();
    }
  });
  sync();
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
