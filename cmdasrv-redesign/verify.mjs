import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const root=fileURLToPath(new URL('.',import.meta.url));
for(const [file,lang] of [['index.html','en-CA'],['fr/index.html','fr-CA']]){
 const html=readFileSync(path.join(root,file),'utf8');
 assert(html.includes(`<html lang="${lang}">`));
 assert.equal((html.match(/<h1>/g)||[]).length,1);
 for(const key of ['canonical','hreflang="en-CA"','hreflang="fr-CA"','hreflang="x-default"','name="description"','property="og:image"','name="twitter:card"'])assert(html.includes(key),`${file}: ${key}`);
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
 assert.equal(schema['@type'],'AccountingService');assert.equal(schema.address.postalCode,'V1T 9G9');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]); assert.equal(ids.length,new Set(ids).size);
 for(const [,link] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
   if(/^(https?:|mailto:|tel:)/.test(link))continue;
   if(link==='#')continue;
   if(link.startsWith('#')){assert(ids.includes(link.slice(1)),`${file}: missing anchor ${link}`);continue;}
   const target=path.resolve(root,path.dirname(file),link);assert(existsSync(target),`${file}: missing ${link}`);
 }
 assert.equal((html.match(/<article class="service">/g)||[]).length,6);
 assert.equal((html.match(/<details>/g)||[]).length,3);
 console.log(`${file}: metadata, schema, local links, anchors and content passed`);
}
const css=readFileSync(path.join(root,'styles.css'),'utf8');
for(const [,asset] of css.matchAll(/url\('([^']+)'\)/g))assert(existsSync(path.join(root,asset)));
const source=readFileSync(path.join(root,'site.js'),'utf8');
function run(lang,blocked=false){
const handlers={},storage={},elements={};let mediaChange;
function el(name){return elements[name]??={textContent:'',attrs:{},listeners:{},setAttribute(k,v){this.attrs[k]=v;},getAttribute(k){return this.attrs[k];},addEventListener(k,v){this.listeners[k]=v;},focus(){this.focused=true;},classList:{open:false,toggle(k,v){this.open=v;},remove(){this.open=false;},contains(){return this.open;}}};}
el('.menu').attrs['aria-expanded']='false';
const doc={documentElement:{lang,dataset:{}},querySelector:el,addEventListener(k,v){handlers[k]=v;}};
const context={document:doc,matchMedia:()=>({matches:false,addEventListener(k,v){mediaChange=v;}}),localStorage:{getItem(k){if(blocked)throw Error('blocked');return storage[k]??null;},setItem(k,v){if(blocked)throw Error('blocked');storage[k]=v;}}};
vm.runInNewContext(source,context);assert.equal(doc.documentElement.dataset.theme,'light');
el('.theme').listeners.click();assert.equal(doc.documentElement.dataset.theme,'dark');assert.equal(el('.theme').attrs['aria-pressed'],'true');if(!blocked)assert.equal(storage['cmd-theme'],'dark');assert(el('.theme').attrs['aria-label'].includes(lang==='fr-CA'?'clair':'light'));
el('.menu').listeners.click();assert.equal(el('.menu').attrs['aria-expanded'],'true');handlers.keydown({key:'Escape'});assert.equal(el('.menu').attrs['aria-expanded'],'false');assert(el('.menu').focused);
el('.menu').listeners.click();el('.nav').listeners.click({target:{closest:()=>true}});assert.equal(el('.menu').attrs['aria-expanded'],'false');
vm.runInNewContext(source,context);assert.equal(doc.documentElement.dataset.theme,blocked?'light':'dark');
}
run('en-CA');run('fr-CA');run('en-CA',true);
assert(readFileSync(path.join(root,'sitemap.xml'),'utf8').includes('hreflang="x-default"'));
for(const f of ['promotional-email.html','promotional-email-fr.html'])assert(readFileSync(path.join(root,f),'utf8').includes('noindex,nofollow'));
console.log('Font assets, EN/FR theme toggle, persistence, blocked storage, menu, Escape, sitemap and email checks passed.');
