// crawl.js <html> <out.json> — đi theo mọi link "#/..." bắt đầu từ trang chủ, ghi danh sách route
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{
 const [,,file,out]=process.argv;
 const br=await chromium.launch();const ctx=await br.newContext();
 await ctx.route('**/*',r=>r.request().url().startsWith('file:')?r.continue():r.abort());
 const page=await ctx.newPage();await page.addInitScript(()=>{Math.random=()=>0.5});
 const errs=[];page.on('pageerror',e=>errs.push(String(e).slice(0,160)));
 await page.goto('file://'+file+'#/');await page.waitForTimeout(800);
 const seen=new Set(['#/']),q=['#/'];
 while(q.length&&seen.size<4000){
  const h=q.shift();
  await page.evaluate(h=>{if(location.hash===h)window.dispatchEvent(new HashChangeEvent('hashchange'));else location.hash=h},h);
  await page.waitForTimeout(40);
  const links=await page.evaluate(()=>[...document.querySelectorAll('a[href^="#/"]')].map(a=>a.getAttribute('href')));
  for(const l of links)if(!seen.has(l)){seen.add(l);q.push(l)}
 }
 fs.writeFileSync(out,JSON.stringify([...seen],null,0));
 console.log('routes',seen.size,'errors',errs.length,errs.slice(0,3));
 await br.close();
})();
