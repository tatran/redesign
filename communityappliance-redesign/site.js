(() => {
  const fr = document.documentElement.lang === 'fr-CA';
  const toggle = document.querySelector('.theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const applyTheme = theme => {
    document.documentElement.dataset.theme = theme;
    toggle.textContent = theme === 'dark' ? '☀' : '☾';
    toggle.setAttribute('aria-label', fr ? (theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'));
  };
  let selected;
  try { selected = localStorage.getItem('community-theme'); } catch {}
  applyTheme(selected === 'light' || selected === 'dark' ? selected : system.matches ? 'dark' : 'light');
  toggle.addEventListener('click', () => {
    selected = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(selected);
    try { localStorage.setItem('community-theme', selected); } catch {}
  });
  system.addEventListener('change', event => { if (!selected) applyTheme(event.matches ? 'dark' : 'light'); });
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
  document.querySelectorAll('[data-request]').forEach(link => link.addEventListener('click', () => {
    document.querySelector('#appliance').value = link.dataset.request;
    document.querySelector('#request-type').value = link.dataset.request === 'parts' ? 'parts' : 'repair';
  }));
  const form = document.querySelector('#request-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const values = id => { const field = document.getElementById(id); return field.options[field.selectedIndex].text; };
    const subject = `${fr ? 'Demande' : 'Request'} — ${values('request-type')} — ${data.get('name')}`;
    const body = `${fr ? 'Bonjour Community Appliance,' : 'Hello Community Appliance,'}\n\n${fr ? 'Service demandé' : 'Request'}: ${values('request-type')}\n${fr ? 'Appareil' : 'Appliance'}: ${values('appliance')}\n${fr ? 'Nom' : 'Name'}: ${data.get('name')}\n${fr ? 'Téléphone' : 'Phone'}: ${data.get('phone')}\n${fr ? 'Ville' : 'Community'}: ${data.get('community')}\n${fr ? 'Modèle / numéro de série' : 'Model / serial number'}: ${data.get('model') || '—'}\n\n${data.get('message')}\n\n${fr ? 'Merci de me contacter pour confirmer les prochaines étapes.' : 'Please contact me to confirm the next steps.'}`;
    window.location.href = `mailto:communityapplianceparts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = fr ? 'Votre application de courriel va s’ouvrir. Envoyez le message pour transmettre votre demande. Si elle ne s’ouvre pas, appelez le 778-475-3004 ou utilisez le formulaire du site actuel.' : 'Your email app will open. Send the message to submit your request. If it does not open, call 778-475-3004 or use the current website’s form.';
  });
  form.querySelector('button[type="submit"]').disabled = false;
})();
