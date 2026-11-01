const {chromium}=require('playwright');
(async()=>{const br=await chromium.launch();
 const ser=`(()=>{const rep=(k,v)=>{if(typeof v==='function')return 'F:'+String(v);if(v&&typeof v==='object'&&!Array.isArray(v)){const o={};Object.keys(v).sort().forEach(x=>o[x]=v[x]);return o}return v};const o={};for(const k of Object.keys(MX))o[k]=JSON.stringify(MX[k],rep);return o})()`;
 async function get(file,order){const ctx=await br.newContext();await ctx.route('**/*',r=>r.request().url().startsWith('file:')?r.continue():r.abort());const p=await ctx.newPage();
  await p.goto('file://'+file+'#/');await p.waitForTimeout(1500);
  if(order)await p.evaluate(async o=>{for(const n of o)await CGE.load(n)},order);
  const r=await p.evaluate(ser);await ctx.close();return r}
 const a=await get((process.env.ORIG||'CGE_9_original.html'));
 const b=await get((process.env.SPLIT||'cge9/index.html'),(process.argv[2]==='perm'?['unit-1','unit-7','unit-3','unit-5','unit-2','unit-6','unit-4','extra']:['unit-1','unit-2','unit-3','unit-4','unit-5','unit-6','unit-7','extra']));
 for(const k of Object.keys(a)){if(a[k]!==b[k]){let i=0;while(a[k][i]===b[k][i])i++;console.log(k,a[k].length,b[k].length,'@',i,JSON.stringify(a[k].slice(i-30,i+50)),'|',JSON.stringify(b[k].slice(i-30,i+50)))}}
 console.log('keys',Object.keys(a).length,Object.keys(b).length);await br.close()})();
