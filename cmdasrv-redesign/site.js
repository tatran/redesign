(() => {
  const root = document.documentElement;
  const media = matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem('cmd-theme'); } catch {}
  const button = document.querySelector('.theme');
  const french = root.lang === 'fr-CA';
  function apply(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    button.textContent = dark ? '☀' : '☾';
    button.setAttribute('aria-label', french ? (dark ? 'Activer le mode clair' : 'Activer le mode sombre') : (dark ? 'Switch to light mode' : 'Switch to dark mode'));
    button.setAttribute('aria-pressed', String(dark));
    document.querySelector('meta[name="theme-color"]').content = dark ? '#102e2a' : '#f6f5ef';
  }
  apply(saved === 'dark' || saved === 'light' ? saved : media.matches ? 'dark' : 'light');
  button.addEventListener('click', () => {
    saved = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('cmd-theme', saved); } catch {}
    apply(saved);
  });
  media.addEventListener('change', () => { if (!saved) apply(media.matches ? 'dark' : 'light'); });
  const toggle = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  function close() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { close(); toggle.focus(); } });
})();
