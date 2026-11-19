import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const root = path.resolve(import.meta.dirname, '..');
for (const file of ['index.html', 'fr/index.html']) {
  const html = fs.readFileSync(path.join(root,file),'utf8');
  assert.equal((html.match(/<h1>/g)||[]).length,1);
  for (const value of ['rel="canonical"','hreflang="en-CA"','hreflang="fr-CA"','hreflang="x-default"','name="description"','property="og:image"','name="twitter:card"','application/ld+json']) assert(html.includes(value),`${file}: ${value}`);
  const data = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(data['@graph'][0].telephone,'+1-866-787-3483');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,'Duplicate ids');
  for (const [,target] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    if (/^(https?:|tel:|mailto:)/.test(target)) continue;
    const resolved = path.resolve(root,path.dirname(file),target);
    assert(fs.existsSync(resolved),`${file}: missing ${target}`);
  }
  for (const [,id] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(id),`Missing anchor ${id}`);
  assert.equal((html.match(/data-collection="[0-5]"/g)||[]).length,7);
}
// Exercise the actual interaction handlers without opening a mail client.
const createElement = () => ({dataset:{},attrs:{},listeners:{},classList:{toggle(){},remove(){}},setAttribute(k,v){this.attrs[k]=v;},getAttribute(k){return this.attrs[k];},addEventListener(k,f){this.listeners[k]=f;}});
const elements = Object.fromEntries(['.theme-toggle','.menu-toggle','#navigation','#quote-dialog','.dialog-close','#quote-form','#quote-status'].map(s=>[s,createElement()]));
const select={selectedIndex:0}, category=createElement(), quote=createElement();category.dataset.collection='2';
const dialog=elements['#quote-dialog'];dialog.dataset.subject='Award project enquiry';dialog.querySelector=()=>select;dialog.showModal=()=>dialog.open=true;dialog.close=()=>dialog.open=false;
elements['#navigation'].querySelectorAll=()=>[];
let mailHref='',saved='';
const context={document:{documentElement:{dataset:{theme:'light'}},querySelector:s=>elements[s],querySelectorAll:()=>[category,quote],addEventListener(){},createElement:()=>({set href(v){mailHref=v;},click(){}})},localStorage:{setItem:(k,v)=>saved=v},FormData:class{get(k){return {name:'Test Person',email:'test@example.com',collection:'Medals & medallions',details:'20 medals & engraving\nJune event'}[k];}},encodeURIComponent};
vm.runInNewContext(fs.readFileSync(path.join(root,'app.js'),'utf8'),context);
elements['.theme-toggle'].listeners.click();assert.equal(saved,'dark');assert.equal(elements['.theme-toggle'].attrs['aria-pressed'],'true');
category.listeners.click();assert(dialog.open);assert.equal(select.selectedIndex,3);
elements['.dialog-close'].listeners.click();assert.equal(dialog.open,false);
quote.listeners.click();assert.equal(select.selectedIndex,0);
elements['#quote-form'].listeners.submit({preventDefault(){},currentTarget:{}});
assert(mailHref.startsWith('mailto:info@fivestarawards.ca?subject='));assert(decodeURIComponent(mailHref).includes('20 medals & engraving\nJune event'));assert.equal(elements['#quote-status'].hidden,false);
console.log('PASS: bilingual SEO, structured data, local assets, anchors, theme, collection selection, dialog and email encoding.');
