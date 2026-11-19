const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname,'..');
let checks = 0;
function assert(ok,msg){checks++;if(!ok) throw new Error(msg);}
const base='https://livingpixelstudios.com/redesign/pjpoole-redesign/';
for(const page of ['index.html','fr/index.html']){
 const file=path.join(root,page),html=fs.readFileSync(file,'utf8'),fr=page.startsWith('fr/');
 assert(html.includes(`lang="${fr?'fr-CA':'en-CA'}"`),`${page}: document language`);
 assert((html.match(/<h1\b/g)||[]).length===1,`${page}: single h1`);
 assert(html.includes(`rel="canonical" href="${base+(fr?'fr/':'')}"`),`${page}: canonical`);
 assert(/<meta name="description" content=".{90,180}"/.test(html),`${page}: useful description`);
 for(const lang of ['en-CA','fr-CA','x-default'])assert(html.includes(`hreflang="${lang}"`),`${page}: ${lang}`);
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
 assert(schema['@graph'].some(n=>n['@type']==='WebPage'&&n.inLanguage===(fr?'fr-CA':'en-CA')),`${page}: localized JSON-LD`);
 assert(schema['@graph'].some(n=>n['@type']==='ProfessionalService'&&n.telephone==='+1-250-307-3015'),`${page}: practice schema`);
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert(new Set(ids).size===ids.length,`${page}: unique ids`);
 for(const [,value] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|mailto:|tel:)/.test(value))continue;
  if(value.startsWith('#')){assert(ids.includes(value.slice(1)),`${page}: valid ${value}`);continue;}
  let target=path.resolve(path.dirname(file),value);
  assert(fs.existsSync(target),`${page}: ${value} exists`);
  if(fs.statSync(target).isDirectory())assert(fs.existsSync(path.join(target,'index.html')),`${page}: directory index ${value}`);
 }
 for(const [,img] of html.matchAll(/(<img\b[^>]+>)/g))assert(/alt="[^"]+"/.test(img)&&/width="\d+"/.test(img)&&/height="\d+"/.test(img),`${page}: accessible dimensioned image`);
 for(const [,attributes,body] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g))if(!attributes.includes('application/ld+json')&&!attributes.includes(' src='))new vm.Script(body);
 assert(!html.includes('fonts.googleapis'),`${page}: no remote fonts`);
 assert(html.includes('https://pjpoole.com/booking/'),`${page}: existing booking destination`);
 if(fr)assert(html.includes('confirmer les langues'),`${page}: session language clarification`);
}
const css=fs.readFileSync(path.join(root,'styles.css'),'utf8');
for(const [,asset] of css.matchAll(/url\('([^']+)'\)/g))assert(fs.existsSync(path.join(root,asset)),`CSS asset ${asset}`);
assert((css.match(/{/g)||[]).length===(css.match(/}/g)||[]).length,'CSS balanced');
assert(css.includes('prefers-reduced-motion'),'Reduced motion support');
assert(css.includes('html:not(.js) .nav{display:flex}'),'Navigation without JavaScript');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
assert((sitemap.match(/<url>/g)||[]).length===2,'Bilingual sitemap');
assert((sitemap.match(/hreflang="fr-CA"/g)||[]).length===2,'Reciprocal sitemap alternates');
const social=fs.readFileSync(path.join(root,'assets/social.jpg'));
assert(social[0]===255&&social[1]===216&&social.length>10000,'Social JPEG valid');
for(const page of ['promotional-email.html','promotional-email-fr.html']){
 const html=fs.readFileSync(path.join(root,page),'utf8');
 assert(html.includes('noindex,nofollow'),'Email not indexed');
 assert(html.includes('Lubos Kostros')&&html.includes(base),'Email sender and concept link');
}
function harness({fr=false,stored=null,blocked=false,systemDark=false}={}){
 const events={},media={},storage=new Map(stored?[['pjpoole-theme',stored]]:[]);
 const element=()=>({attributes:{},events:{},setAttribute(k,v){this.attributes[k]=v},addEventListener(k,v){this.events[k]=v}});
 const toggle=element(),menu=element(),link=element(),nav=element(),anchor=element();
 const classes=new Set();nav.classList={toggle(c){if(classes.has(c)){classes.delete(c);return false}classes.add(c);return true},remove(c){classes.delete(c)},contains(c){return classes.has(c)}};
 nav.querySelectorAll=()=>[anchor];menu.focus=()=>{menu.focused=true};link.href='https://preview.test/'+(fr?'':'fr/');
 const rootElement={lang:fr?'fr-CA':'en-CA',dataset:{}},color={content:''};
 const document={documentElement:rootElement,querySelector(s){return {'.theme':toggle,'.menu-toggle':menu,'.nav':nav,'.language':link,'meta[name="theme-color"]':color}[s]},addEventListener(k,v){events[k]=v},getElementById(id){return id==='contact'?{}:null}};
 const context={document,window:{matchMedia:()=>({matches:systemDark,addEventListener(k,v){media[k]=v}})},localStorage:{getItem(k){if(blocked)throw Error('disabled');return storage.get(k)||null},setItem(k,v){if(blocked)throw Error('disabled');storage.set(k,v)}},location:{hash:'#contact'}};
 vm.runInNewContext(fs.readFileSync(path.join(root,'script.js'),'utf8'),context);
 return {root:rootElement,toggle,menu,link,nav,anchor,events,media,storage,color};
}
for(const fr of [false,true]){
 const h=harness({fr,systemDark:false});assert(h.root.dataset.theme==='light','Initial system light');
 h.toggle.events.click();assert(h.root.dataset.theme==='dark'&&h.storage.get('pjpoole-theme')==='dark','Theme changes and persists');
 assert(h.toggle.attributes['aria-pressed']==='true'&&h.color.content==='#111f19','Accessible theme state');
 assert(h.toggle.attributes['aria-label']===(fr?'Activer le thème clair':'Switch to light theme'),'Localized theme label');
 h.menu.events.click();assert(h.nav.classList.contains('open')&&h.menu.attributes['aria-expanded']==='true','Mobile menu opens');
 h.anchor.events.click();assert(!h.nav.classList.contains('open'),'Menu closes on navigation');
 h.menu.events.click();h.events.keydown({key:'Escape'});assert(!h.nav.classList.contains('open')&&h.menu.focused,'Escape closes menu and restores focus');
 h.link.events.click({currentTarget:h.link});assert(h.link.href.endsWith('#contact'),'Language switch retains section');
}
assert(harness({stored:'dark'}).root.dataset.theme==='dark','Stored theme restored');
assert(harness({blocked:true,systemDark:true}).root.dataset.theme==='dark','Storage disabled fallback');
const fallback=harness({blocked:true});fallback.toggle.events.click();assert(fallback.root.dataset.theme==='dark','Toggle works without storage');
const system=harness();system.media.change({matches:true});assert(system.root.dataset.theme==='dark','System theme change followed');
console.log(`Passed ${checks} checks: bilingual pages, SEO, local assets/links, email drafts, theme persistence/fallbacks, mobile navigation and language links. Browser visual QA remains unverified.`);
