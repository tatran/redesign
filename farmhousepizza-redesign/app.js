document.querySelector('.filters').hidden=false;
const themeButton=document.querySelector('.theme');
function applyTheme(theme){document.documentElement.dataset.theme=theme;themeButton.setAttribute('aria-pressed',String(theme==='dark'));themeButton.textContent=theme==='dark'?'☀':'☾';}
let saved;try{saved=localStorage.getItem('farmhouse-theme')}catch{}
applyTheme(saved==='dark'||saved==='light'?saved:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
themeButton.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';applyTheme(next);try{localStorage.setItem('farmhouse-theme',next)}catch{}});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',event=>{let preference;try{preference=localStorage.getItem('farmhouse-theme')}catch{}if(!preference)applyTheme(event.matches?'dark':'light')});
const menuButton=document.querySelector('.mobile-toggle'),nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
function closeMenu(){menuButton.setAttribute('aria-expanded','false');nav.classList.remove('open')}
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menuButton.focus()}});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('.menu-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++});document.querySelector('#filter-status').textContent=document.body.dataset.language==='fr'?`${count} choix ${count===1?'affiché':'affichés'}`:`${count} ${count===1?'choice':'choices'} shown`;}));
