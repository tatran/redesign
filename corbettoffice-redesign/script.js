(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme');
  const french = root.lang === 'fr-CA';
  const system = matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('corbett-theme'); } catch {}
  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', french ? (dark ? 'Activer le thème clair' : 'Activer le thème sombre') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
  }
  setTheme(saved === 'light' || saved === 'dark' ? saved : system.matches ? 'dark' : 'light');
  toggle.addEventListener('click', () => {
    saved = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(saved);
    try { localStorage.setItem('corbett-theme', saved); } catch {}
  });
  system.addEventListener('change', e => { if (!saved) setTheme(e.matches ? 'dark' : 'light'); });
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#navigation');
  function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
})();
