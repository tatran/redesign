const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');
function updateThemeButton() {
  const dark = root.dataset.theme === 'dark';
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', root.lang.startsWith('fr') ? (dark ? 'Activer le thème clair' : 'Activer le thème sombre') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
}
toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('flyrite-theme', root.dataset.theme); } catch {}
  updateThemeButton();
});
updateThemeButton();
const menu = document.querySelector('[data-menu]');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
