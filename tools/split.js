#!/usr/bin/env node
/**
 * split.js — tách CGE9 single-file HTML thành  main/ + branches/
 * Dùng:  node tools/split.js <input.html> <outDir> [--keep-data-uri]
 * Tái lập được: chạy lại trên file gốc sẽ cho đúng cùng cấu trúc.
 */
const fs=require('fs'),path=require('path'),vm=require('vm'),crypto=require('crypto');
const [,, INPUT, OUT, ...flags]=process.argv;
if(!INPUT||!OUT){console.error('usage: split.js <input.html> <outDir> [--keep-data-uri]');process.exit(1)}
const KEEP_URI=flags.includes('--keep-data-uri');
const src=fs.readFileSync(INPUT,'utf8');

/* ---------- 1. tách các khối <script>/<style> cấp cao nhất ---------- */
const B=[];{const re=/<(script|style)\b([^>]*)>/gi;let pos=0,m;
 while((m=re.exec(src))){const cs=m.index+m[0].length,ce=src.indexOf('</'+m[1]+'>',cs);
  B.push({kind:m[1].toLowerCase(),attrs:m[2],s:m.index,cs,ce,e:ce+m[1].length+3});re.lastIndex=B[B.length-1].e}}
const bigIdx=B.findIndex(b=>b.kind==='script'&&b.ce-b.cs>4e6);
if(bigIdx<0)throw new Error('không tìm thấy script lớn');

/* ---------- 2. cắt script lớn tại các marker "===== ... =====" hợp lệ ---------- */
const js=src.slice(B[bigIdx].cs,B[bigIdx].ce);
const marks=[0];{const r=/\n(?=\/\*\s*=+)/g;let x;while((x=r.exec(js)))marks.push(x.index+1)}
const cuts=[0];let last=0;
for(let i=1;i<marks.length;i++){const piece=js.slice(last,marks[i]);let ok=true;try{new vm.Script(piece)}catch(e){ok=false}
 if(ok){cuts.push(marks[i]);last=marks[i]}}
cuts.push(js.length);
let chunks=[];for(let i=0;i<cuts.length-1;i++){const t=js.slice(cuts[i],cuts[i+1]);
 const h=(t.match(/\/\*\s*=+\s*([^\n*]{0,150})/)||[])[1]||t.slice(0,50);chunks.push({title:h.trim(),text:t})}
if(chunks.map(c=>c.text).join('')!==js)throw new Error('tổng các mảnh != script gốc');
for(const c of chunks)new vm.Script(c.text); // mỗi mảnh phải tự parse được

/* ---------- 3. phân nhánh (theo chỉ số mảnh gốc) ---------- */
function branchOf(i){
  if(i<=45||i===88||i===89)return 'main';
  if(i===121)return 'main';                    // định nghĩa hook shuffle
  if(i>=46&&i<=67)return 'unit-2';
  if(i>=68&&i<=87)return 'unit-3';
  if(i>=90&&i<=120)return 'unit-4';
  if(i>=122&&i<=131)return 'unit-1';
  if((i>=132&&i<=137)||(i>=139&&i<=162))return 'unit-5';
  if(i===138||(i>=163&&i<=169))return 'unit-6';
  if(i>=170&&i<=179)return 'unit-7';
  throw new Error('chưa phân nhánh cho mảnh '+i);
}
const PRE_SHUFFLE=new Set(['unit-2','unit-3','unit-4']); // nhánh có dữ liệu nằm TRƯỚC mảnh xáo trộn gốc

/* ---------- 4. các script nhỏ sau script lớn ---------- */
const small=B.slice(bigIdx+1).filter(b=>b.kind==='script');
const smallInfo=[ // theo thứ tự xuất hiện trong file gốc
 ['main','sao-luu-khoi-phuc'],['main','sound-effects'],['main','lesson-vocab-pack'],
 ['unit-1','audio-unit-3'],['unit-1','audio-unit-1'],
 ['unit-1','lesson-1-1-mission'],['unit-1','lesson-1-2'],['unit-1','lesson-1-3'],
 ['unit-3','lesson-3-1-skills'],['unit-3','lesson-3-3-grammar'],['unit-3','lesson-3-3-skills'],['unit-3','lesson-3-4-video'],
 ['extra','midterm-test-01'],['extra','midterm-test-05-vocab'],['extra','submitted-marks'],['extra','fill-blank-inline'],
 ['extra','keep-scroll'],['extra','bold-referenced-words'],
 ['extra','de-so-1'],['extra','de-so-2'],['extra','de-so-3'],['extra','de-so-4'],['extra','de-so-5'],
 ['main','fix-map-scroll']];
if(small.length!==smallInfo.length)throw new Error('số script nhỏ '+small.length+' != '+smallInfo.length);

/* ---------- 5. biến đổi tối thiểu (có kiểm tra đúng 1 lần thay) ---------- */
function replaceOnce(text,from,to,label){const n=text.split(from).length-1;
 if(n!==1)throw new Error(label+': mong đợi 1 chỗ, thấy '+n);return text.replace(from,()=>to)}
chunks[22].text=replaceOnce(chunks[22].text,"window.addEventListener('hashchange',route);","window.addEventListener('hashchange',()=>CGE.navigate());",'hashchange');
chunks[45].text=replaceOnce(chunks[45].text,"try{route()}catch(_e){}","CGE.boot();",'initial route');
chunks[40].text=replaceOnce(chunks[40].text,"function lmsEntries(){","function lmsEntries(){ if(window.CGE_INDEX&&CGE_INDEX.lmsEntries)return CGE_INDEX.lmsEntries.map(e=>Object.assign({},e));",'lmsEntries index');
chunks[22].text=replaceOnce(chunks[22].text,"${EXTRA_PRACTICE.length}</span>","${CGE.extraCount()}</span>",'sidebar extra count');
chunks[40].text=replaceOnce(chunks[40].text,"${EXTRA_PRACTICE.length} bài","${CGE.extraCount()} bài",'lms hub extra count');
chunks[16].text=replaceOnce(chunks[16].text,"const uoeHas=x=>!!(MX[x.key]||LMD['ue'+x.i+x.g+x.n]);","const uoeHas=x=>!!(MX[x.key]||CGE.hasMX(x.key)||LMD['ue'+x.i+x.g+x.n]);",'uoeHas index');
{ // mảnh 121: bọc thành hàm, bỏ qua key đã xáo
  let t=chunks[121].text;
  t=replaceOnce(t,"for(const k of Object.keys(MX)){const m=MX[k];if(!m||!m.steps)continue;","for(const k of Object.keys(MX)){const m=MX[k];if(!m||!m.steps)continue;if(CGE._shuf.has(k))continue;CGE._shuf.add(k);",'shuffle guard');
  const i=t.indexOf('{const rng=');if(i<0)throw new Error('shuffle block');
  chunks[121].text=t.slice(0,i)+"CGE._shuf=CGE._shuf||new Set();\nCGE.shuffleNew=function(){\n"+t.slice(i).replace(/\s+$/,'')+"\n};\n";
}


/* ---------- 5b. "hoist": phần dùng chung nằm trong chunk của nhánh -> đưa lên main ---------- */
const ts=require(require('child_process').execSync('npm root -g').toString().trim()+'/typescript');
const hoisted=[];
function hoistFrom(i){
  const text=chunks[i].text;
  const sf=ts.createSourceFile('c.js',text,ts.ScriptTarget.ES2022,true,ts.ScriptKind.JS);
  const ranges=[];
  (function walk(n,parent){
    const stmtParent=parent&&(ts.isSourceFile(parent)||ts.isBlock(parent));
    if(stmtParent&&ts.isExpressionStatement(n)){
      const e=n.expression;
      if(ts.isBinaryExpression(e)&&e.operatorToken.kind===ts.SyntaxKind.EqualsToken){
        let r=e.left;while(ts.isPropertyAccessExpression(r)||ts.isElementAccessExpression(r))r=r.expression;
        if(ts.isIdentifier(r)&&r.text==='MXG'){ranges.push([n.getStart(),n.getEnd()]);return}}
      if(ts.isCallExpression(e)&&e.expression.getText()==='THR.unshift'){ranges.push([n.getStart(),n.getEnd()]);return}
    }
    if(stmtParent&&ts.isBlock(n)&&/^\{\s*const (_cp=checkPage|_un=unit)\b/.test(n.getText())){ranges.push([n.getStart(),n.getEnd()]);return}
    ts.forEachChild(n,c=>walk(c,n));
  })(sf,null);
  ranges.sort((a,b)=>b[0]-a[0]);
  let t=text;const got=[];
  for(const [a,b] of ranges){got.unshift(t.slice(a,b));t=t.slice(0,a)+t.slice(b)}
  chunks[i].text=t;hoisted.push(...got.map(g=>g+'\n'));
}
[90,170,171,172,173,174,175,176,177,178,179].forEach(hoistFrom);
chunks.forEach((c,i)=>{try{new vm.Script(c.text)}catch(e){throw new Error('chunk '+i+' hỏng sau hoist: '+e.message)}});

/* ---------- 6. tách ảnh data-URI ra file ---------- */
const assets=new Map();
function extractImgs(text){ if(KEEP_URI)return text;
  return text.replace(/data:image\/(jpeg|png|webp|gif);base64,([A-Za-z0-9+\/=]+)/g,(all,ext,b64)=>{
    const h=crypto.createHash('sha1').update(b64).digest('hex').slice(0,10);const e=ext==='jpeg'?'jpg':ext;
    const rel='assets/img/'+h+'.'+e;assets.set(rel,Buffer.from(b64,'base64'));return rel})}
chunks.forEach(c=>c.text=extractImgs(c.text));

/* ---------- 7. ghi file ---------- */
const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,44)||'part';
fs.rmSync(OUT,{recursive:true,force:true});
const W=(rel,txt)=>{const p=path.join(OUT,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,txt)};
const entries=[]; // {seq,branch,file}
const pad=n=>String(n).padStart(3,'0');
chunks.forEach((c,i)=>{const br=branchOf(i);const dir=br==='main'?'main':'branches/'+br;const file=`${dir}/${pad(i)}-${slug(c.title)}.js`;W(file,c.text);entries.push({seq:i,branch:br,file,title:c.title,bytes:Buffer.byteLength(c.text)})});
{const file='main/121a-hoisted-shared.js';const t='/* tự sinh: MXG, THR.unshift và wrapper unit/checkPage được kéo từ các nhánh unit lên main (dùng chung nhiều unit) */\n'+hoisted.join('');W(file,t);entries.push({seq:121.5,branch:'main',file,title:'hoisted-shared',bytes:Buffer.byteLength(t)})}
small.forEach((b,k)=>{const i=chunks.length+k;const [br,name]=smallInfo[k];const dir=br==='main'?'main':'branches/'+br;const file=`${dir}/${pad(i)}-${name}.js`;
  let t=extractImgs(src.slice(b.cs,b.ce));
  if(name==='audio-unit-1'){
    t=replaceOnce(t,"{const U=window.__u3;if(U){","window.__audApplyU3=function(){if(window.__audU3done||!MX['2.0'])return;const U=window.__u3;if(U){window.__audU3done=1;",'audio u3 open');
    t=replaceOnce(t,"concat(r[3])})})}}\nObject.keys(STEP)","concat(r[3])})})}};window.__audApplyU3();\nObject.keys(STEP)",'audio u3 close');}
  W(file,t);entries.push({seq:i,branch:br,file,title:name,bytes:Buffer.byteLength(t)})});
{const file='branches/unit-3/187a-audio-apply.js';const t='/* áp lại phần audio Unit 3 ngay sau dữ liệu unit-3 (đúng vị trí gốc, trước các bản vá 3.x) */\nwindow.__audApplyU3&&window.__audApplyU3();\n';W(file,t);entries.push({seq:187.5,branch:'unit-3',file,title:'audio-apply',bytes:Buffer.byteLength(t)})}
for(const [rel,buf] of assets){const p=path.join(OUT,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,buf)}

/* css + boot + index.html */
let html='',cursor=0,cssN=0,bootN=0,bodyScripts=[];
const cssNames=['base-layout','theme-units','lookup-words','lms-fix','meme-popup'];
B.forEach((b,idx)=>{html+=src.slice(cursor,b.s);cursor=b.e;
  if(idx<bigIdx){
    if(b.kind==='style'){const f=`css/${String(cssN).padStart(2,'0')}-${cssNames[cssN++]}.css`;W(f,src.slice(b.cs,b.ce));
      const id=(b.attrs.match(/id="([^"]+)"/)||[])[1];html+=`<link rel="stylesheet" href="${f}"${id?` id="${id}"`:''}>`}
    else if(/src=/.test(b.attrs)){html+=src.slice(b.s,b.e)}
    else{const f=`main/boot-${String(bootN).padStart(2,'0')}-${bootN===0?'quiet-console':'tailwind-config'}.js`;bootN++;W(f,src.slice(b.cs,b.ce));html+=`<script src="${f}"></script>`}
  } else if(idx===bigIdx){html+='<!--@SCRIPTS@-->'} // vị trí chèn
});
html+=src.slice(cursor);
const mainEntries=entries.filter(e=>e.branch==='main').sort((a,b)=>a.seq-b.seq);
const tags=['<script src="manifest.js"></script>','<script src="index-data.js"></script>','<script src="loader.js"></script>',...mainEntries.map(e=>`<script src="${e.file}"></script>`),'<script>CGE.shuffleNew();CGE.mainReady();</script>'].join('\n');
html=html.replace('<!--@SCRIPTS@-->',tags);
W('index.html',html);

/* manifest */
const branches={};
for(const e of entries){ if(e.branch==='main')continue;(branches[e.branch]=branches[e.branch]||{files:[]}).files.push(e) }
for(const [name,b] of Object.entries(branches)){b.files.sort((a,c)=>a.seq-c.seq);
  const out=[];b.files.forEach((f,i)=>{out.push(f.file);const nxt=b.files[i+1];
    if(PRE_SHUFFLE.has(name)&&f.seq<=120&&(!nxt||nxt.seq>120))out.push('@shuffle')});
  b.order=out;b.bytes=b.files.reduce((s,f)=>s+f.bytes,0);b.files=b.files.map(f=>f.file)}
const manifest={version:1,
 main:mainEntries.map(e=>e.file),
 branches:Object.fromEntries(Object.entries(branches).map(([k,v])=>[k,{files:v.order,bytes:v.bytes}])),
 all:entries.map(({seq,branch,file,bytes})=>({seq,branch,file,bytes})) };
W('manifest.js','/* tự sinh bởi tools/split.js — đừng sửa tay */\nwindow.CGE_MANIFEST='+JSON.stringify({main:manifest.main,branches:manifest.branches,routes:JSON.parse(fs.readFileSync(path.join(__dirname,'routes.json'),'utf8'))},null,1)+';\n');
fs.copyFileSync(path.join(__dirname,'loader.js'),path.join(OUT,'loader.js'));
W('index-data.js','/* tự sinh bởi tools/build-index.js — chạy lại sau mỗi lần split */\nwindow.CGE_INDEX=null;\n');
W('manifest.all.json',JSON.stringify(manifest.all,null,1));
console.log('chunks',chunks.length,'small',small.length,'assets',assets.size);
const sum={};for(const e of entries){sum[e.branch]=(sum[e.branch]||0)+e.bytes}
console.table(Object.entries(sum).map(([k,v])=>({branch:k,KB:Math.round(v/1024)})));
