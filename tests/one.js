const {chromium}=require('playwright');
(async()=>{const br=await chromium.launch();
 async function get(file,hash){const ctx=await br.newContext();await ctx.route('**/*',r=>r.request().url().startsWith('file:')?r.continue():r.abort());const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(String(e).slice(0,200)));await p.addInitScript(()=>{Math.random=()=>0.5});
  const t=Date.now();await p.goto('file://'+file+hash);await p.waitForTimeout(1200);
  await p.evaluate(()=>window.dispatchEvent(new HashChangeEvent('hashchange')));await p.waitForTimeout(500);
  const r=await p.evaluate(()=>({v:document.getElementById('view').innerText,s:document.getElementById('sidebar').innerText,len:document.getElementById('view').innerHTML.length,loaded:window.CGE&&CGE.loaded()}));
  await ctx.close();return {...r,errs,ms:Date.now()-t}}
 const h=process.argv[2];
 const a=await get((process.env.ORIG||'CGE_9_original.html'),h);
 const b=await get((process.env.SPLIT||'cge9/index.html'),h);
 console.log('lens',a.len,b.len,'ms',a.ms,b.ms,'errs',JSON.stringify(a.errs),JSON.stringify(b.errs),b.loaded);
 for(const k of ['v','s']){const A=a[k].split('\n'),B=b[k].split('\n');let n=0;for(let i=0;i<Math.max(A.length,B.length)&&n<8;i++)if(A[i]!==B[i]){n++;console.log(k,i,JSON.stringify(A[i]),'|',JSON.stringify(B[i]))}}
 await br.close()})();
