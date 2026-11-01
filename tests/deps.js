// deps.js <orig.html> <split index.html> <routes.json> — với mỗi route lệch, tìm nhánh phụ trợ tối thiểu để khớp bản gốc
const {chromium}=require('playwright');const fs=require('fs'),crypto=require('crypto');
const [A,Bf,rf]=process.argv.slice(2);const routes=JSON.parse(fs.readFileSync(rf,'utf8'));
const norm=s=>s.replace(/data:image\/[a-z]+;base64,[A-Za-z0-9+\/=]+/g,'IMG').replace(/assets\/img\/[0-9a-f]+\.\w+/g,'IMG');
const md5=s=>crypto.createHash('md5').update(norm(s)).digest('hex');
(async()=>{const br=await chromium.launch();
 async function open(file,hash,pre){const ctx=await br.newContext();await ctx.route('**/*',r=>r.request().url().startsWith('file:')?r.continue():r.abort());
  const p=await ctx.newPage();await p.addInitScript(()=>{Math.random=()=>0.5});await p.goto('file://'+file+hash);
  await p.waitForFunction(()=>!window.CGE||CGE.pending()===0,{timeout:15000}).catch(()=>{});await p.waitForTimeout(150);
  if(pre&&pre.length){await p.evaluate(async n=>{for(const x of n)await CGE.load(x)},pre)}
  await p.evaluate(()=>window.dispatchEvent(new HashChangeEvent('hashchange')));
  await p.waitForFunction(()=>!window.CGE||CGE.pending()===0,{timeout:15000}).catch(()=>{});await p.waitForTimeout(220);
  const r=await p.evaluate(()=>document.getElementById('view').innerHTML);await ctx.close();return md5(r)}
 const names=['unit-1','unit-2','unit-3','unit-4','unit-5','unit-6','unit-7','audio-u1','audio-u3','extra'];
 const res={};
 for(const h of routes){
  const base=await open(A,h);
  if(await open(Bf,h)===base){continue}
  if(await open(Bf,h,['ALL'])!==base){res[h]='NOT-FIXED-BY-ALL';console.log(h,'NOT-FIXED-BY-ALL');continue}
  const need=[];
  for(const n of names){ // thử bỏ dần: ALL trừ n còn khớp không?
    const others=names.filter(x=>x!==n);
    if(await open(Bf,h,others)!==base)need.push(n)}
  res[h]=need;console.log(h,'needs',need.join(',')||'(?)');
 }
 fs.writeFileSync('/tmp/deps.json',JSON.stringify(res));await br.close()})();
