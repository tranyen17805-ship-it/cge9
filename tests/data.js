const {chromium}=require('playwright');const crypto=require('crypto');
(async()=>{const br=await chromium.launch();
 const ser=`(()=>{const seen=new WeakSet();const rep=(k,v)=>{if(typeof v==='function')return 'F:'+String(v).length;if(v&&typeof v==='object'){if(seen.has(v))return '[cyc]';seen.add(v);if(!Array.isArray(v)){const o={};Object.keys(v).sort().forEach(x=>o[x]=v[x]);return o}}return v};
  const o={};for(const n of ['MX','LBC','WBC','RDT','MXG','GS','THR','LMD','LMV','SKL','EXTRA_PRACTICE']){try{o[n]=JSON.stringify((0,eval)(n),rep)}catch(e){o[n]='ERR'}}return o})()`;
 async function get(file,order){const ctx=await br.newContext();await ctx.route('**/*',r=>r.request().url().startsWith('file:')?r.continue():r.abort());const p=await ctx.newPage();
  await p.goto('file://'+file+'#/');await p.waitForTimeout(1500);
  if(order)await p.evaluate(async o=>{for(const n of o)await CGE.load(n)},order);
  const r=await p.evaluate(ser);await ctx.close();const h={};for(const k in r)h[k]=crypto.createHash('md5').update(r[k]).digest('hex').slice(0,8)+':'+r[k].length;return h}
 const a=await get((process.env.ORIG||'CGE_9_original.html'));
 const names=(process.argv[2]==='perm')?['unit-1','unit-7','unit-3','unit-5','unit-2','unit-6','unit-4','extra']:(process.argv[2]==='fwd')?['unit-1','unit-2','unit-3','unit-4','unit-5','unit-6','unit-7','extra']:['extra','unit-7','unit-6','unit-5','unit-4','unit-3','unit-2','unit-1'];
 const b=await get((process.env.SPLIT||'cge9/index.html'),names);
 for(const k in a)console.log(k.padEnd(16),a[k]===b[k]?'OK  ':'DIFF',a[k],b[k]);
 await br.close()})();
