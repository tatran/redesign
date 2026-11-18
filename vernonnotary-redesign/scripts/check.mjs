import {readFileSync,existsSync,statSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import vm from 'node:vm';
const root=fileURLToPath(new URL('../',import.meta.url));let checks=0;
function assert(value,message){checks++;if(!value)throw Error(message)}
for(const path of ['index.html','fr/index.html']){
 const html=readFileSync(resolve(root,path),'utf8');const fr=path.startsWith('fr/');
 assert(html.includes(`lang="${fr?'fr-CA':'en-CA'}"`),path+' language');
 assert((html.match(/<h1\b/g)||[]).length===1,path+' one H1');
 assert(!/undefined|\[object Object\]/.test(html),path+' no unresolved values');
 assert(/<meta name="description" content="[^"]{90,170}"/.test(html),path+' description');
 for(const lang of ['en-CA','fr-CA','x-default'])assert(html.includes(`hreflang="${lang}"`),path+' alternate '+lang);
 const canonical=html.match(/rel="canonical" href="([^"]+)"/)[1];
 assert(canonical==='https://livingpixelstudios.com/redesign/vernonnotary-redesign/'+(fr?'fr/':''),path+' canonical');
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
 assert(schema['@graph'][0]['@type']==='Notary',path+' business schema');
 assert(schema['@graph'][1].inLanguage===(fr?'fr-CA':'en-CA'),path+' schema language');
 assert(schema['@graph'][0].telephone==='+1-250-542-4313',path+' business phone');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert(ids.length===new Set(ids).size,path+' unique IDs');
 for(const [,link] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|mailto:|tel:)/.test(link))continue;
  if(link.startsWith('#')){assert(ids.includes(link.slice(1)),path+' anchor '+link);continue}
  const asset=resolve(dirname(resolve(root,path)),link);
  assert(existsSync(asset),path+' asset '+link);
  if(statSync(asset).isDirectory())assert(existsSync(resolve(asset,'index.html')),path+' directory index '+link);
 }
 assert(html.includes('assets/social-card.png'),path+' social card');
 for(const [,img] of html.matchAll(/(<img\b[^>]+>)/g))assert(/alt=".+?"/.test(img),path+' image alt');
 assert((html.match(/<details>/g)||[]).length===4,path+' FAQs');
}
const themeCode=readFileSync(resolve(root,'theme-init.js'),'utf8');
for(const systemDark of [false,true])for(const saved of [null,'light','dark','invalid'])for(const blocked of [false,true]){
 const document={documentElement:{dataset:{}}};
 vm.runInNewContext(themeCode,{document,matchMedia:()=>({matches:systemDark}),localStorage:{getItem(){if(blocked)throw Error('Storage blocked');return saved}}});
 assert(document.documentElement.dataset.theme===(!blocked&&['dark','light'].includes(saved)?saved:systemDark?'dark':'light'),'Initial theme preference and storage fallback');
}
const appCode=readFileSync(resolve(root,'app.js'),'utf8');
for(const lang of ['en-CA','fr-CA']){
 const listeners={},storage=new Map(),themeButton={setAttribute(k,v){this[k]=v},addEventListener(k,v){listeners['theme:'+k]=v}},menu={setAttribute(k,v){this[k]=v},getAttribute(k){return this[k]??'false'},addEventListener(k,v){listeners['menu:'+k]=v},focus(){this.focused=true}},nav={classList:{value:false,toggle(k,v){this.value=v},remove(){this.value=false}},querySelectorAll(){return [{addEventListener(k,v){listeners['link:'+k]=v}}]}};
 const document={documentElement:{dataset:{theme:'light'},lang},querySelector:selector=>selector==='.theme-toggle'?themeButton:selector==='.menu-toggle'?menu:nav,addEventListener(k,v){listeners[k]=v}};
 vm.runInNewContext(appCode,{document,localStorage:{setItem(k,v){storage.set(k,v)},getItem(k){return storage.get(k)}},matchMedia:()=>({addEventListener(){}})});
 listeners['theme:click']();assert(document.documentElement.dataset.theme==='dark','Theme switches to dark');assert(themeButton['aria-pressed']==='true','Theme aria state');assert(storage.get('vernonnotary-theme')==='dark','Theme persists');
 listeners['theme:click']();assert(document.documentElement.dataset.theme==='light','Theme returns to light');
 listeners['menu:click']();assert(nav.classList.value&&menu['aria-expanded']==='true','Menu opens');
 listeners.keydown({key:'Escape'});assert(!nav.classList.value&&menu.focused,'Escape closes and restores focus');
 listeners['menu:click']();listeners['link:click']();assert(!nav.classList.value,'Navigation closes menu');
}
const sitemap=readFileSync(resolve(root,'sitemap.xml'),'utf8');assert((sitemap.match(/<url>/g)||[]).length===2,'Bilingual sitemap');assert(existsSync(resolve(root,'assets/social-card.png')),'Social card exists');
const email=readFileSync(resolve(root,'promo-email.md'),'utf8');assert(email.includes('## English')&&email.includes('## Français'),'Bilingual email drafts');
console.log(`Passed ${checks} checks: bilingual content, local links/assets, metadata/schema, theme selection and persistence, mobile menu behavior, sitemap and email drafts.`);
