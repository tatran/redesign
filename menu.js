const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

function setMenuOpen(open) {
  menu.setAttribute('aria-expanded', String(open));
}

menu.addEventListener('click', () => {
  setMenuOpen(menu.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.querySelector('.site-header').addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menu.focus();
  }
});

document.documentElement.classList.add('menu-ready');
