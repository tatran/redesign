(() => {
  const root = document.documentElement;
  const fr = root.lang.startsWith('fr');
  const toggle = document.querySelector('.theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const read = () => { try { return localStorage.getItem('pjpoole-theme'); } catch { return null; } };
  const apply = theme => {
    root.dataset.theme = theme;
    toggle.setAttribute('aria-label', fr ? (theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'));
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111f19' : '#f8faf7';
  };
  apply(['light', 'dark'].includes(read()) ? read() : (system.matches ? 'dark' : 'light'));
  toggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(theme);
    try { localStorage.setItem('pjpoole-theme', theme); } catch {}
  });
  system.addEventListener('change', event => { if (!read()) apply(event.matches ? 'dark' : 'light'); });
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const close = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => { menu.setAttribute('aria-expanded', String(nav.classList.toggle('open'))); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { close(); menu.focus(); } });
  document.querySelector('.language').addEventListener('click', event => {
    const hash = location.hash;
    if (hash && document.getElementById(hash.slice(1))) event.currentTarget.href += hash;
  });
})();
