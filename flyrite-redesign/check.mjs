import {readFile,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {runInNewContext} from 'node:vm';
let checks=0;const assert=(ok,message)=>{checks++;if(!ok)throw new Error(message)};
for(const page of ['index.html','fr/index.html']){
const html=await readFile(page,'utf8');const fr=page.startsWith('fr/');
assert(html.includes(`lang="${fr?'fr-CA':'en-CA'}"`),page+' language');
assert((html.match(/<h1\b/g)||[]).length===1,page+' one h1');
assert(/<meta name="description" content="[^"]{90,180}"/.test(html),page+' description');
assert(/<link rel="canonical" href="https:\/\//.test(html),page+' canonical');
for(const lang of ['en-CA','fr-CA','x-default'])assert(html.includes(`hreflang="${lang}"`),page+' alternate '+lang);
const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert(schema['@graph'].filter(x=>x['@type']==='Service').length===5,page+' services schema');
assert(schema['@graph'].some(x=>x['@type']==='WebPage'&&x.inLanguage===(fr?'fr-CA':'en-CA')),page+' localized page schema');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert(ids.length===new Set(ids).size,page+' unique ids');
for(const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){let value=m[1];if(/^(https?:|mailto:|tel:)/.test(value))continue;if(value.startsWith('#')){assert(ids.includes(value.slice(1)),page+' anchor '+value);continue}let path=resolve(dirname(resolve(page)),value);if((await stat(path)).isDirectory())path=resolve(path,'index.html');assert((await stat(path)).isFile(),page+' file '+value)}
for(const m of html.matchAll(/<img\b[^>]+>/g)){assert(/alt="[^"]+"/.test(m[0]),page+' alt');assert(/width="\d+"/.test(m[0])&&/height="\d+"/.test(m[0]),page+' image dimensions')}
}
const script=await readFile('app.js','utf8');
function context(lang='en-CA'){
const theme={attrs:{},setAttribute(k,v){this.attrs[k]=v},addEventListener(k,f){this[k]=f}};
const menu={attrs:{'aria-expanded':'false'},setAttribute(k,v){this.attrs[k]=v},getAttribute(k){return this.attrs[k]},addEventListener(k,f){this[k]=f},focus(){this.focused=true}};
const classes=new Set();const nav={classList:{toggle(c,on){on?classes.add(c):classes.delete(c)},remove(c){classes.delete(c)},contains(c){return classes.has(c)}},querySelectorAll(){return [{addEventListener(k,f){nav.linkClick=f}}]}};
const root={lang,dataset:{theme:'light'}};const events={};const stored={};
runInNewContext(script,{document:{documentElement:root,querySelector:s=>s==='[data-theme-toggle]'?theme:s==='[data-menu]'?menu:nav,addEventListener:(k,f)=>events[k]=f},localStorage:{setItem:(k,v)=>stored[k]=v}});
return {theme,menu,nav,root,events,stored,classes};
}
for(const lang of ['en-CA','fr-CA']){const c=context(lang);c.theme.click();assert(c.root.dataset.theme==='dark','theme dark');assert(c.theme.attrs['aria-pressed']==='true','theme state');assert(c.stored['flyrite-theme']==='dark','theme persisted');assert(c.theme.attrs['aria-label'].includes(lang==='fr-CA'?'clair':'light'),'localized theme name');c.theme.click();assert(c.root.dataset.theme==='light','theme light');c.menu.click();assert(c.menu.attrs['aria-expanded']==='true'&&c.classes.has('open'),'menu opens');c.events.keydown({key:'Escape'});assert(c.menu.attrs['aria-expanded']==='false'&&c.menu.focused,'Escape closes and restores focus');c.menu.click();c.nav.linkClick();assert(!c.classes.has('open'),'navigation closes menu')}
for(const page of ['promotional-email.html','promotional-email-fr.html']){const html=await readFile(page,'utf8');assert(html.includes('noindex,nofollow'),page+' noindex');assert(html.includes('info@livingpixelstudios.com'),page+' sender');assert(html.includes('https://livingpixelstudios.com/redesign/flyrite-redesign/'),page+' preview')}
assert((await readFile('sitemap.xml','utf8')).match(/<url>/g).length===2,'two sitemap URLs');
assert((await stat('assets/social-card.jpg')).size>10000,'social image');
console.log(`Passed ${checks} checks: bilingual SEO, schema, files, anchors, image attributes, theme and menu behavior, and email drafts.`);
