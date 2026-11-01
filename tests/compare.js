// compare.js <orig.html> <candidate.html> [routes.json] [--conc=4] — so DOM từng route (mỗi route 1 lần nạp mới)
const {chromium}=require('playwright');const fs=require('fs'),crypto=require('crypto');
const args=process.argv.slice(2).filter(a=>!a.startsWith('--'));
const conc=+((process.argv.find(a=>a.startsWith('--conc='))||'--conc=4').split('=')[1]);
const [A,Bf,routesFile]=args;
const routes=JSON.parse(fs.readFileSync(routesFile||__dirname+'/routes.orig.json','utf8'));
const norm=s=>s.replace(/data:image\/[a-z]+;base64,[A-Za-z0-9+\/=]+/g,'IMG').replace(/assets\/img\/[0-9a-f]+\.\w+/g,'IMG');
(async()=>{
 const br=await chromium.launch();
 async function snap(file,hash){
  const ctx=await br.newContext();await ctx.route('**/*',r=>r.request().url().startsWith('file:')?r.continue():r.abort());
  const page=await ctx.newPage();const errs=[];page.on('pageerror',e=>errs.push(String(e).slice(0,140)));
  await page.addInitScript(()=>{Math.random=()=>0.5});
  await page.goto('file://'+file+hash);
  await page.waitForFunction(()=>{const v=document.getElementById('view');return v&&v.innerHTML.length>20},{timeout:15000}).catch(()=>{});
  await page.waitForFunction(()=>!window.CGE||(CGE.pending&&CGE.pending()===0),{timeout:15000}).catch(()=>{});
  await page.waitForTimeout(200);
  await page.evaluate(()=>window.dispatchEvent(new HashChangeEvent('hashchange')));   // trạng thái ổn định: render lại sau khi mọi dữ liệu đã nạp
  await page.waitForFunction(()=>!window.CGE||(CGE.pending&&CGE.pending()===0),{timeout:15000}).catch(()=>{});
  await page.waitForTimeout(250);
  const r=await page.evaluate(()=>({view:document.getElementById('view').innerHTML,side:document.getElementById('sidebar').innerHTML,u:document.documentElement.dataset.u,hash:location.hash,loaded:window.CGE&&CGE.loaded?CGE.loaded():null}));
  await ctx.close();
  const v=norm(r.view),s=norm(r.side);
  return {vh:crypto.createHash('md5').update(v).digest('hex'),sh:crypto.createHash('md5').update(s).digest('hex'),vl:v.length,u:r.u,errs,loaded:r.loaded,v};
 }
 let i=0,bad=[],done=0;
 async function worker(){while(i<routes.length){const h=routes[i++];
   const [a,b]=[await snap(A,h),await snap(Bf,h)];
   const diff=a.vh!==b.vh||a.sh!==b.sh||a.u!==b.u;
   const eb=b.errs.filter(e=>!a.errs.includes(e));
   if(diff||eb.length)bad.push({h,viewEq:a.vh===b.vh,sideEq:a.sh===b.sh,vlA:a.vl,vlB:b.vl,errs:eb,loaded:b.loaded});
   if(++done%40===0)console.error('..',done,'/',routes.length,'bad',bad.length)}}
 await Promise.all(Array.from({length:conc},worker));
 bad.sort((x,y)=>x.h.localeCompare(y.h));
 console.log('TOTAL',routes.length,'BAD',bad.length);
 bad.forEach(b=>console.log(JSON.stringify(b)));
 fs.writeFileSync(process.env.OUT||'/tmp/compare.json',JSON.stringify(bad));
 await br.close();
})();
