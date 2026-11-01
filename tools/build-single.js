#!/usr/bin/env node
/* build-single.js <splitDir> <out.html> [--inline-assets]
 * Ghép bản đã tách lại thành MỘT file HTML (main + mọi branch, đúng thứ tự gốc), không cần loader.
 * --inline-assets: nhúng lại ảnh assets/img/*.jpg thành data-URI (file tự đủ, nặng hơn). */
const fs=require('fs'),path=require('path');
const [,, DIR, OUT, ...fl]=process.argv;
if(!DIR||!OUT){console.error('usage: build-single.js <splitDir> <out.html> [--inline-assets]');process.exit(1)}
const INL=fl.includes('--inline-assets');
const rd=f=>fs.readFileSync(path.join(DIR,f),'utf8');
let html=rd('index.html');
html=html.replace(/<link rel="stylesheet" href="(css\/[^"]+)"([^>]*)>/g,(m,f,rest)=>`<style${rest}>${rd(f)}</style>`);
html=html.replace(/<script src="(main\/boot-[^"]+)"><\/script>/g,(m,f)=>`<script>${rd(f)}</script>`);
const vm=require('vm');const ctx={window:{}};vm.runInNewContext(rd('manifest.js'),ctx);const M=ctx.window.CGE_MANIFEST;
const stub="window.CGE={_shuf:new Set(),hasMX:()=>false,extraCount:()=>EXTRA_PRACTICE.length,navigate(){route()},boot(){try{route()}catch(_e){}},ensure:()=>Promise.resolve(),load:()=>Promise.resolve(),mainReady(){},pending:()=>0,loaded:()=>[]};";
const safe=t=>t.replace(/<\/script/gi,'<\\/script');
const tag=f=>'<script>'+safe(rd(f))+'</script>\n';
let body='<script>'+stub+'</script>\n';
for(const f of M.main)body+=tag(f);
body+='<script>CGE.shuffleNew();</script>\n';
// cùng thứ tự với CGE.load("ALL") đã được kiểm chứng: unit-1..7 rồi extra
const order=Object.keys(M.branches).sort((x,y)=>(x==='extra')-(y==='extra')||x.localeCompare(y,undefined,{numeric:true}));
for(const n of order){const files=M.branches[n].files;const own=files.includes('@shuffle');
  if(!own)body+='<script>CGE._b=new Set(Object.keys(MX));</script>\n';
  for(const f of files)body+=f==='@shuffle'?'<script>CGE.shuffleNew();</script>\n':tag(f);
  if(!own)body+='<script>Object.keys(MX).forEach(k=>{if(!CGE._b.has(k))CGE._shuf.add(k)});</script>\n'}
body+='<script>CGE.boot();</script>\n';
html=html.replace(/<script src="manifest\.js"><\/script>[\s\S]*?<script>CGE\.shuffleNew\(\);CGE\.mainReady\(\);<\/script>/,()=>body);
if(INL){html=html.replace(/assets\/img\/([0-9a-f]+)\.(jpg|png|webp|gif)/g,(m,h,e)=>{const p=path.join(DIR,m);return fs.existsSync(p)?`data:image/${e==='jpg'?'jpeg':e};base64,`+fs.readFileSync(p).toString('base64'):m})}
fs.writeFileSync(OUT,html);
console.log('đã ghi',OUT,(Buffer.byteLength(html)/1048576).toFixed(2)+' MB','(assets '+(INL?'nhúng':'ngoài')+')');
