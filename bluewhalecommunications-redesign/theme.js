(() => {
  const root = document.documentElement;
  root.classList.remove('no-js');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let selected = null;
  try { selected = localStorage.getItem('bluewhale-theme'); } catch {}
  const apply = theme => {
    root.dataset.theme = theme;
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute('aria-label', toggle.dataset[theme === 'dark' ? 'lightLabel' : 'darkLabel']);
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#102e2e' : '#f7f6ef');
  };
  if (selected !== 'dark' && selected !== 'light') selected = null;
  apply(selected || (preference.matches ? 'dark' : 'light'));
  preference.addEventListener('change', event => { if (!selected) apply(event.matches ? 'dark' : 'light'); });
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme);
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      selected = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('bluewhale-theme', selected); } catch {}
      apply(selected);
    });
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    const close = () => { nav.dataset.open = 'false'; toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.dataset.open = String(open);
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
    document.addEventListener('click', event => { if (!nav.contains(event.target) && !toggle.contains(event.target)) close(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); }
    });
    window.matchMedia('(min-width: 851px)').addEventListener('change', close);
    document.querySelectorAll('.language-switch a').forEach(link => {
      link.addEventListener('click', () => {
        if (location.hash) link.href = link.getAttribute('href').split('#')[0] + location.hash;
      });
    });
  });
})();
