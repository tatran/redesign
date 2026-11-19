const themeButton = document.querySelector('.theme-toggle');
function syncTheme() { themeButton.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark')); }
syncTheme();
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('fivestar-theme', next); } catch {}
  syncTheme();
});
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
const dialog = document.querySelector('#quote-dialog');
document.querySelectorAll('[data-collection], [data-quote]').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.collection;
  dialog.querySelector('select').selectedIndex = category === undefined ? 0 : Number(category) + 1;
  document.querySelector('#quote-status').hidden = true;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if(e.target === dialog && (e.clientX < dialog.getBoundingClientRect().left || e.clientX > dialog.getBoundingClientRect().right || e.clientY < dialog.getBoundingClientRect().top || e.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const body = `${form.get('name')}\n${form.get('email')}\n\n${form.get('collection')}\n\n${form.get('details')}`;
  const mail = document.createElement('a');
  mail.href = `mailto:info@fivestarawards.ca?subject=${encodeURIComponent(dialog.dataset.subject)}&body=${encodeURIComponent(body)}`;
  mail.click();
  document.querySelector('#quote-status').hidden = false;
});
