
/* ===== Extra practice · Mid-term Test 05 · mục "1 Từ vựng" của từng bài = bộ công cụ đầy đủ (Thẻ ghi nhớ · Học · Ghép thẻ · Kiểm tra) ===== */
(function(){
if(window.__xv05)return;window.__xv05=1;
const PMX={n:'noun',v:'verb',adj:'adjective',adv:'adverb',phr:'phrase','phr v':'phrasal verb',prep:'preposition',conj:'conjunction','n phr':'noun phrase','adj phr':'adjective phrase',idiom:'idiom','v-ing':'verb + -ing'};
const posX=p=>String(p||'').split('/').map(x=>PMX[x.trim()]||x.trim()).filter(Boolean).join(' / ');
const T5=EX1.filter(p=>p.vocab&&/Mid-term Test 05|MID-TERM REVISION PRACTICE TEST 01/.test(p.head||''));
const gid=p=>9010+T5.indexOf(p);
function ensure(p){const id=gid(p),g=GS[id]=GS[id]||{};if(!g.cards||!g.cards.length){const seen={};g.cards=[];p.vocab.forEach(v=>{const k=String(v[1]).toLowerCase().trim();if(seen[k])return;seen[k]=1;g.cards.push({w:v[1],pos:posX(v[3]),ipa:v[2]||'',vi:v[4],ex:v[5]||'',em:v[0]||'📘'})});g.vocab=g.cards.map(c=>[c.w,c.vi])}return g}
function reset(){try{fcStop();mtStop()}catch(e){}VQ.mt=null;VQ.lopen=0;VQ.sort='orig';VQ.ln={on:0,set:0,adv:0,mode:'learn',q:null,done:0,last:-1,seen:{},tick:0,stat:{ok:0,bad:0}};VQ.ts={ph:'setup',cfg:{n:10,ans:'both',tf:0,mc:1,mt:0,wr:0},qs:[],resp:{},res:null};FC.ord=null;FC.u=-1;FC.i=0;FC.flip=0;FC.done=0;FC.mode='all'}
function inner(id){const d=gsGet(id),TB=[['cards','🗂️','Thẻ ghi nhớ'],['learn','🧠','Học'],['match','🧩','Ghép thẻ'],['test','📝','Kiểm tra']];VQ.u=id;
 return `<div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">${TB.map(t=>`<button data-xvt="${t[0]}" class="px-2 py-3 rounded-xl border-2 text-sm font-semibold ${FC.tab===t[0]?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${t[1]} ${t[2]}</button>`).join('')}</div><div class="mt-4">${FC.tab==='cards'?`<div id="fcBox">${fcInner(id,d)}</div>`:`<div id="vqBox">${vqPanel(id,d)}</div>`}</div><div id="vqList" class="mt-8">${vqList(id,d)}</div>`}
const _old=window.exfcHtml||exfcHtml;
window.exfcHtml=function(p){const j=T5.indexOf(p);if(j<0)return _old(p);const id=gid(p),g=ensure(p);if(VQ.u!==id||FC.u!==id){reset();FC.tab='cards'}
 return `<div id="xvBox" data-xid="${id}" data-xp="${p.id}"><h3 class="mt-3 text-base font-bold">📚 Useful words from the lesson</h3><p class="mt-1 text-xs text-slate-500">${g.cards.length} từ / cụm từ của bài này. Lật thẻ, học theo vòng, ghép thẻ rồi tự kiểm tra.</p><div id="xvIn">${inner(id)}</div></div>`};
document.addEventListener('click',e=>{const b=e.target.closest('[data-xvt]');if(!b)return;const box=document.getElementById('xvBox'),In=document.getElementById('xvIn');if(!box||!In)return;const p=T5.find(x=>x.id===box.dataset.xp);if(!p)return;try{fcStop();mtStop()}catch(_){}VQ.mt=null;FC.tab=b.dataset.xvt;ensure(p);In.innerHTML=inner(gid(p))});
if(/^#\/lms\/extra\/(9|1[0-4])$/.test(location.hash))window.dispatchEvent(new HashChangeEvent('hashchange'));
})();
