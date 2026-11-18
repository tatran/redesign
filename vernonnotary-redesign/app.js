const root=document.documentElement;
const toggle=document.querySelector('.theme-toggle');
function syncThemeButton(){const dark=root.dataset.theme==='dark';toggle.setAttribute('aria-pressed',String(dark));toggle.setAttribute('aria-label',document.documentElement.lang.startsWith('fr')?(dark?'Activer le thème clair':'Activer le thème sombre'):(dark?'Switch to light theme':'Switch to dark theme'));toggle.textContent=dark?'☀':'☾'}
syncThemeButton();
toggle.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('vernonnotary-theme',root.dataset.theme)}catch{}syncThemeButton()});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',event=>{try{if(localStorage.getItem('vernonnotary-theme'))return}catch{}root.dataset.theme=event.matches?'dark':'light';syncThemeButton()});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
matchMedia('(min-width: 801px)').addEventListener('change',closeMenu);
