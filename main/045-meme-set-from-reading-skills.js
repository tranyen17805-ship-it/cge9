/* ===== MEME SET (from Reading Skills) ===== */
;(function(){let snd=true;
const MEME_OK="assets/img/f91cd6bf10.jpg",MEME_BAD=["assets/img/5c9821d2ae.jpg", "assets/img/b7bc48f5a6.jpg"];
const MEME_POOL={ok:[{s:MEME_OK,c:''},...[{"s": "assets/img/61fd649c27.jpg", "c": ""}, {"s": "assets/img/693e498e9f.jpg", "c": ""}, {"s": "assets/img/6fe2835fe6.jpg", "c": ""}, {"s": "assets/img/97d648d1bc.jpg", "c": ""}, {"s": "assets/img/e54b35c594.jpg", "c": ""}]],bad:[...MEME_BAD.map(s=>({s,c:''})),...[{"s": "assets/img/83dd81313d.jpg", "c": ""}, {"s": "assets/img/e9b5b639aa.jpg", "c": ""}, {"s": "assets/img/29b690b6b1.jpg", "c": ""}, {"s": "assets/img/f48fa1a38e.jpg", "c": ""}, {"s": "assets/img/98e455867a.jpg", "c": ""}, {"s": "assets/img/6d6bc67e5f.jpg", "c": ""}, {"s": "assets/img/bef14a610e.jpg", "c": ""}, {"s": "assets/img/8ae5557d00.jpg", "c": ""}, {"s": "assets/img/1110b5f2a0.jpg", "c": ""}, {"s": "assets/img/e9c7ae33da.jpg", "c": ""}, {"s": "assets/img/7e3b8495ec.jpg", "c": ""}, {"s": "assets/img/b18078a624.jpg", "c": ""}, {"s": "assets/img/ded766e63c.jpg", "c": ""}, {"s": "assets/img/f5ac73a533.jpg", "c": ""}, {"s": "assets/img/190f3e6960.jpg", "c": ""}]]};
MEME_POOL.ok.push(...[{"s": "assets/img/b0bd3b49ad.jpg", "c": ""}, {"s": "assets/img/d43b31edc3.jpg", "c": ""}, {"s": "assets/img/0447fc3e55.jpg", "c": ""}, {"s": "assets/img/4af342b097.jpg", "c": ""}, {"s": "assets/img/879995caf5.jpg", "c": ""}, {"s": "assets/img/8b626922b1.jpg", "c": ""}, {"s": "assets/img/4203c78500.jpg", "c": ""}]);
MEME_POOL.bad.push(...[{"s": "assets/img/428fe683b5.jpg", "c": ""}, {"s": "assets/img/2dc2736c79.jpg", "c": ""}, {"s": "assets/img/89f984dba1.jpg", "c": ""}, {"s": "assets/img/b88f50ffef.jpg", "c": ""}, {"s": "assets/img/940e0eadae.jpg", "c": ""}, {"s": "assets/img/27293305b7.jpg", "c": ""}, {"s": "assets/img/a1d23af3ee.jpg", "c": ""}, {"s": "assets/img/c1af9a57f4.jpg", "c": ""}, {"s": "assets/img/322e0e8000.jpg", "c": ""}, {"s": "assets/img/5e0295b623.jpg", "c": ""}, {"s": "assets/img/61d987217c.jpg", "c": ""}, {"s": "assets/img/29e8d382fd.jpg", "c": ""}, {"s": "assets/img/35ec539ea3.jpg", "c": ""}]);
MEME_POOL.ok.push(...[{"s": "assets/img/c3527a756e.jpg", "c": ""}, {"s": "assets/img/c8553b22d3.jpg", "c": ""}, {"s": "assets/img/47b9f11856.jpg", "c": ""}, {"s": "assets/img/7d8c3184cb.jpg", "c": ""}, {"s": "assets/img/45eeb28072.jpg", "c": ""}]);
MEME_POOL.bad.push(...[{"s": "assets/img/947ae4c9ec.jpg", "c": ""}, {"s": "assets/img/8dcd2c4de2.jpg", "c": ""}, {"s": "assets/img/920eb5ad4c.jpg", "c": ""}, {"s": "assets/img/aaa325c2d6.jpg", "c": ""}, {"s": "assets/img/85d17f4d11.jpg", "c": ""}, {"s": "assets/img/88f6e2f419.jpg", "c": ""}, {"s": "assets/img/8cfa389712.jpg", "c": ""}, {"s": "assets/img/1906855400.jpg", "c": ""}, {"s": "assets/img/d40c8c71c8.jpg", "c": ""}, {"s": "assets/img/9fd290f1b4.jpg", "c": ""}, {"s": "assets/img/802db268d6.jpg", "c": ""}]);
const MEME_BAG={ok:[],bad:[]},MEME_LAST={ok:-1,bad:-1};
function memeNext(ok){const k=ok?'ok':'bad',P=MEME_POOL[k],B=MEME_BAG[k];
 if(!B.length){for(let i=0;i<P.length;i++)B.push(i);for(let i=B.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[B[i],B[j]]=[B[j],B[i]]}
  if(B.length>1&&B[B.length-1]===MEME_LAST[k]){[B[0],B[B.length-1]]=[B[B.length-1],B[0]]}}
 const i=B.pop();MEME_LAST[k]=i;return P[i]}
let memeT=null,memeLast=-1,_ac=null;
function sfx(ok){try{
 const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
 _ac=_ac||new AC();if(_ac.state==='suspended')_ac.resume();
 const c=_ac,t0=c.currentTime+0.02,m=c.createGain();m.gain.value=.8;m.connect(c.destination);
 const tone=(f,st,du,type,vol,f2)=>{const o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(f,t0+st);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t0+st+du);g.gain.setValueAtTime(.0001,t0+st);g.gain.exponentialRampToValueAtTime(vol,t0+st+.02);g.gain.exponentialRampToValueAtTime(.0001,t0+st+du);o.connect(g);g.connect(m);o.start(t0+st);o.stop(t0+st+du+.05)};
 if(ok){
  tone(180,0,.18,'sine',.6,50);
  [523.25,659.25,783.99,1046.5,1318.5,1568].forEach((f,i)=>tone(f,.05+i*.08,.3,'triangle',.3));
  [1046.5,1318.5,1568].forEach(f=>tone(f,.56,.8,'square',.09));
  tone(784,.56,.8,'sawtooth',.07);
  for(let i=0;i<8;i++)tone(2000+Math.random()*1800,.62+i*.06,.14,'sine',.07);
  tone(1568,.6,.5,'sine',.15,2349);
 }else{
  tone(700,0,.2,'square',.14,140);
  [[392,.12],[370,.4],[349,.68]].forEach(x=>tone(x[0],x[1],.26,'sawtooth',.22,x[0]*.93));
  tone(330,.96,.8,'sawtooth',.26,170);
  tone(110,.96,.6,'sine',.3,55);
 }}catch(e){}}
function memePop(ok,opt){try{
 const old=document.getElementById('memeP');if(old)old.remove();clearTimeout(memeT);
 const mm=memeNext(ok),src=mm.s;
 const d=document.createElement('div');d.id='memeP';d.className=ok?'ok':'bad';
 d.innerHTML='<div class="mc'+(opt&&opt.html?' hx':'')+'"><img alt="meme" src="'+src+'">'+(opt&&opt.html?'<div class="mx">'+opt.html+'</div>':'')+'</div>';d.setAttribute('role','button');
 d.onclick=()=>{d.remove();clearTimeout(memeT);if(opt&&opt.onClose){try{opt.onClose()}catch(e){}}};
 document.body.appendChild(d);if(snd)sfx(ok);memeT=setTimeout(()=>{d.remove()},3500);
 
}catch(e){}}

window.exMemePop=memePop;})();
const EXMC=[['😎','ĐÚNG RỒI','EZ GAME'],['🕺','CHUẨN LUÔN','GIỎI QUÁ TRỜI'],['🤑','CÂU NÀY DỄ MÀ','ĐIỂM VÀO NHƯ NƯỚC'],['🔥','QUÁ ĐỈNH','ĐÚNG KHÔNG CẦN CHỈNH'],['🧠','IQ 200','CHỌN ĐÚNG LUÔN']];
const EXMW=[['😭','SAI RỒI BẠN ƠI','ĐỌC LẠI ĐOẠN VĂN ĐI'],['🤡','TƯỞ NG ĐÚNG','HÓA RA SAI'],['💀','RIP CÂU NÀY','MẤT ĐIỂM RỒI'],['🫠','CHỌN NHANH QUÁ','ĐỌC KỸ LẠI NHÉ'],['🙈','KHÔNG DÁM NHÌN','XEM GIẢI THÍCH BÊN DƯỚI']];
function exMeme(ok,sel,n){if(sel===undefined)return '';const m=(ok?EXMC:EXMW)[n%5];return `<div class="ex-meme" style="background:${ok?'linear-gradient(135deg,#166534,#052e16)':'linear-gradient(135deg,#991b1b,#450a0a)'}"><b>${m[1]}</b><span class="me">${m[0]}</span><b>${m[2]}</b></div>`}
function exRe(){const y=window.scrollY;document.getElementById('view').innerHTML=exPage(EXK);window.scrollTo(0,y)}
document.addEventListener('click',e=>{
 if(!/^#\/lms\/extra\/\d+$/.test(location.hash))return;
 const t=e.target.closest('[data-exq],[data-exgo],[data-exchk],[data-exrst]');if(!t)return;
 if(t.dataset.exq!==undefined){if(EXS.done||EXS.chk[+t.dataset.exq])return;const qn=+t.dataset.exq;EXS.ans[qn]=+t.dataset.exi;EXS.chk[qn]=true;exRe();if(window.exMemePop)exMemePop(EXS.ans[qn]===(exAll().find(q=>q.n===qn)||{}).a)}
 else if(t.dataset.exgo!==undefined){document.querySelectorAll('.ex-hl').forEach(x=>x.classList.remove('ex-hl'));const ids=t.dataset.exgo.split(',');ids.forEach(i=>{const el=document.getElementById(i);if(el)el.classList.add('ex-hl')});const f=document.getElementById(ids[0]);if(f)f.scrollIntoView({behavior:'smooth',block:'center'})}
 else if(t.dataset.exchk!==undefined){if(EXS.done)return;EXS.done=true;exRe();window.scrollTo(0,0);const sc=exAll().filter(q=>EXS.ans[q.n]===q.a).length;if(window.exMemePop)exMemePop(sc*2>=exAll().length)}
 else if(t.dataset.exrst!==undefined){EXS.ans={};EXS.chk={};EXS.done=false;exRe();window.scrollTo(0,0)}
});
const lSide=()=>`<li><a href="#/lms" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 ${location.hash.startsWith('#/lms')?'bg-orange-50 dark:bg-slate-800 font-semibold text-orange-600':''}"><span class="w-7 h-7 rounded-lg bg-orange-400 text-white grid place-items-center text-sm">🎯</span><span class="flex-1">Bổ trợ vins.lms</span><span class="text-xs text-slate-400">${lmsUnits(lmsEntries()).length}</span></a></li>`;

CGE.boot();
