/* ===== Chế độ học kiểu Quizlet: Learn · Match · Test · danh sách thuật ngữ ===== */
const vqSh=a=>{a=[...a];for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a};
const vqNorm=t=>String(t||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
const vqLev=(a,b)=>{const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=[...Array(n+1).keys()];for(let x=1;x<=m;x++){const c=[x];for(let y=1;y<=n;y++)c[y]=Math.min(p[y]+1,c[y-1]+1,p[y-1]+(a[x-1]===b[y-1]?0:1));p=c}return p[n]};
function vqGrade(inp,correct,side){const n=vqNorm(inp);if(!n)return 'bad';let c;if(side==='term')c=[vqNorm(correct)];else{const base=correct.replace(/\([^)]*\)/g,' ');c=[vqNorm(correct.replace(/[()]/g,' ')),vqNorm(base),...base.split(/[\/,;]/).map(vqNorm)].filter(Boolean)}if(c.includes(n))return 'ok';return c.some(x=>x.length>=5&&vqLev(n,x)<=1)?'near':'bad'}
const vqDef={shuf:0,star:0,sfx:1,qmc:1,qwr:1,qsp:1,qtf:0,qfl:0,ans:'term',img:'term',fix:'retype',tts:0,rsize:'5'};
const vqS=d=>Object.assign({},vqDef,d.ls||{});
const VQ={u:2,sort:'orig',ln:{on:0,set:0,adv:0,mode:'learn',q:null,done:0,last:-1,seen:{},tick:0,stat:{ok:0,bad:0}},mt:null,mtT:null,ts:{ph:'setup',cfg:{n:10,ans:'both',tf:0,mc:1,mt:0,wr:0},qs:[],resp:{},res:null}};
const vqSw=(on,act,k,lab)=>`<div class="flex items-center justify-between py-2"><span class="text-sm">${lab}</span><button data-vq="${act}" data-k="${k}" role="switch" aria-checked="${on?'true':'false'}" aria-label="${lab}" class="relative w-11 h-6 rounded-full shrink-0 ${on?'bg-blue-600':'bg-slate-300 dark:bg-slate-600'}"><span class="absolute top-0.5 w-5 h-5 rounded-full bg-white" style="left:${on?22:2}px"></span></button></div>`;
const vqSelH=(k,v,o)=>`<select data-vqsel="${k}" class="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm">${o.map(x=>`<option value="${x[0]}" ${x[0]===v?'selected':''}>${x[1]}</option>`).join('')}</select>`;
const vqBtn='px-4 py-2 rounded-xl text-sm font-semibold';
const vqTxt=(c,side)=>side==='term'?c.w:c.vi;
const vqInfo=c=>`<p class="mt-1 text-sm">${c.em} <b>${c.w}</b> <span class="text-slate-500">${c.ipa}</span> — ${c.vi}</p><p class="mt-1 text-xs italic text-slate-500">${gsEsc(c.ex).replace(/\*(.+?)\*/g,'<b>$1</b>')}</p>`;
/* ---------- LEARN ---------- */
function lnSet(i,d){const S=vqS(d),L=VQ.ln,P=(k,ic,on)=>`<button data-vq="set" data-k="${k}" aria-pressed="${on?'true':'false'}" class="flex-1 py-3 rounded-2xl border-2 text-xl ${on?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${ic}</button>`;
return `<div class="mt-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-700"><div class="flex gap-2"><span class="sr-only">Tuỳ chọn</span>${P('shuf','🔀',S.shuf)}${P('star','⭐',S.star)}${P('sfx','🔊',S.sfx)}</div><p class="mt-1 text-xs text-slate-500 text-center">Trộn thẻ · Học thuật ngữ có gắn sao · Hiệu ứng âm thanh</p>
<div class="mt-3 flex items-center justify-between gap-2"><span class="text-sm font-bold">Số từ mỗi vòng</span>${vqSelH('ls_rsize',String(S.rsize),[['3','3 từ'],['5','5 từ'],['7','7 từ'],['10','10 từ'],['0','Tất cả']])}</div><p class="text-xs text-slate-500">Học xong một vòng mới sang các từ tiếp theo. Áp dụng từ phiên học mới.</p>
<p class="mt-3 text-sm font-bold">Loại câu hỏi</p>${vqSw(S.qmc,'set','qmc','Trắc nghiệm')}${vqSw(S.qtf,'set','qtf','Đúng / Sai')}${vqSw(S.qfl,'set','qfl','Thẻ ghi nhớ')}${vqSw(S.qwr,'set','qwr','Tự luận (viết)')}${vqSw(S.qsp,'set','qsp','Chính tả (nghe và gõ)')}
<button data-vq="adv" class="mt-1 text-sm font-semibold text-blue-600">${L.adv?'Ẩn bớt tuỳ chọn':'Xem tất cả các tuỳ chọn'}</button>
${L.adv?`<div class="mt-3 space-y-2"><div class="flex items-center justify-between gap-2"><span class="text-sm">Trả lời bằng</span>${vqSelH('ls_ans',S.ans,[['term','Thuật ngữ'],['def','Định nghĩa'],['both','Cả hai']])}</div><div class="flex items-center justify-between gap-2"><span class="text-sm">Xem hình ảnh với</span>${vqSelH('ls_img',S.img,[['term','Thuật ngữ'],['def','Định nghĩa'],['both','Cả hai'],['none','Không']])}</div><div class="flex items-center justify-between gap-2"><span class="text-sm">Tuỳ chọn sửa sai</span>${vqSelH('ls_fix',S.fix,[['retype','Gõ lại đáp án đúng'],['show','Chỉ hiện đáp án']])}</div>${vqSw(S.tts,'set','tts','Chuyển văn bản thành lời nói')}<div class="flex flex-wrap gap-2 pt-1"><button data-vq="lnstart" data-m="write" class="${vqBtn} border-2 border-blue-600">✍️ Chế độ Viết · Bắt đầu</button><button data-vq="lnstart" data-m="spell" class="${vqBtn} border-2 border-blue-600">🎧 Chế độ Chính tả · Bắt đầu</button></div></div>`:''}</div>`}
function vqLadder(S,mode){if(mode==='write')return [['wr']];if(mode==='spell')return [['sp']];let first=['mc','tf','fl'].filter(t=>S['q'+t]);const st=[];if(!first.length&&!S.qwr&&!S.qsp)first=['mc'];if(first.length)st.push(first);if(S.qwr)st.push(['wr']);if(S.qsp)st.push(['sp']);return st}
const vqTN={mc:'Trắc nghiệm',tf:'Đúng/Sai',fl:'Thẻ',wr:'Viết',sp:'Chính tả'};
const vqLadLabel=st=>st.map(x=>x.map(t=>vqTN[t]).join('/')).join(' → ');
const lnStage=(d,g,L,k)=>L.mode==='learn'?((d.mst||{})[g.cards[k].w]||0):((L.sess||{})[k]||0);
function lnDeck(i,d){const S=vqS(d),g=GS[i];d.fs=d.fs||{};return g.cards.map((c,k)=>k).filter(k=>!S.star||d.fs[g.cards[k].w])}
function lnChunks(i,d,mode){const S=vqS(d),g=GS[i],mx=mode==='learn'?vqLadder(S,'learn').length:1;d.mst=d.mst||{};
let rem=lnDeck(i,d).filter(k=>mode!=='learn'||(d.mst[g.cards[k].w]||0)<mx);if(S.shuf)rem=vqSh(rem);const size=+S.rsize||0,ch=[];
if(!rem.length)return [];if(!size||size>=rem.length)return [rem];for(let j=0;j<rem.length;j+=size)ch.push(rem.slice(j,j+size));
if(ch.length>1&&ch[ch.length-1].length<3){const l=ch.pop();ch[ch.length-1]=ch[ch.length-1].concat(l)}return ch}
function lnPick(i,d){const L=VQ.ln,g=GS[i],S=vqS(d);d.mst=d.mst||{};d.fs=d.fs||{};L.sess=L.sess||{};L.empty=0;L.done=0;L.rdone=0;L.q=null;
const deck=lnDeck(i,d);if(!deck.length){L.empty=1;return}
const steps=vqLadder(S,L.mode),mx=steps.length,stg=k=>lnStage(d,g,L,k),ids=(L.rounds&&L.rounds[L.ri])||[],rem=ids.filter(k=>stg(k)<mx);
if(!rem.length){if(!L.rounds||L.ri>=L.rounds.length-1)L.done=1;else L.rdone=1;return}
let pool=rem.filter(k=>k!==L.last);if(!pool.length)pool=rem;
pool.sort((a,b)=>(stg(a)-stg(b))||((L.seen[a]||-1)-(L.seen[b]||-1))||(S.shuf?Math.random()-.5:ids.indexOf(a)-ids.indexOf(b)));
const k=S.shuf?pool[Math.floor(Math.random()*Math.min(3,pool.length))]:pool[0],st=stg(k),P=steps[Math.min(st,mx-1)],type=P[Math.floor(Math.random()*P.length)];
const dir=type==='sp'?'d2t':(S.ans==='both'?(Math.random()<.5?'d2t':'t2d'):(S.ans==='term'?'d2t':'t2d')),all=g.cards.map((c,x)=>x),others=vqSh(all.filter(x=>x!==k)),q={k,type,dir,res:null,reveal:0};
q.opts=vqSh([k,...others.slice(0,3)]);q.tfTrue=Math.random()<.5;q.tfk=q.tfTrue?k:others[0];L.q=q;L.seen[k]=++L.tick;L.last=k}
function lnAnswer(i,d,val){const L=VQ.ln,q=L.q,g=GS[i],S=vqS(d),c=g.cards[q.k],aSide=q.dir==='d2t'?'term':'def',correct=vqTxt(c,aSide);d.mst=d.mst||{};L.sess=L.sess||{};let ok=false,near=false;
if(q.type==='mc')ok=val===q.k;else if(q.type==='tf')ok=val===q.tfTrue;else if(q.type==='fl')ok=!!val;else{const r=vqGrade(val,correct,aSide);ok=r!=='bad';near=r==='near'}
const mx=vqLadder(S,L.mode).length,cur=lnStage(d,g,L,q.k),nv=ok?Math.min(mx,cur+1):Math.max(0,cur-1);q.prev=cur;q.res={ok,near,given:val};
if(L.mode==='learn')d.mst[c.w]=nv;else L.sess[q.k]=nv;
if(ok)L.stat.ok++;else L.stat.bad++;gsSet(i,d);if(S.sfx&&window.cgeSound)cgeSound(ok?'correct':'wrong');if(S.tts||q.type==='sp')fcSay(c.w)}
function lnQ(i,d){const L=VQ.ln,q=L.q,g=GS[i],S=vqS(d),c=g.cards[q.k],pSide=q.dir==='d2t'?'def':'term',aSide=q.dir==='d2t'?'term':'def',res=q.res,correct=vqTxt(c,aSide);
const label=q.type==='sp'?'Chính tả':(pSide==='def'?'Định nghĩa':'Thuật ngữ'),img=q.type!=='sp'&&(S.img==='both'||S.img===pSide)?c.em+' ':'';
let prompt;if(q.type==='sp')prompt=`<div class="mt-3 flex flex-wrap gap-2"><button data-vq="say" class="${vqBtn} bg-blue-600 text-white">🔊 Nghe</button><button data-vq="say" data-slow="1" class="${vqBtn} border-2 border-blue-600">🐢 Nghe chậm</button></div><p class="mt-2 text-xs text-slate-500">Gõ lại đúng chính tả từ bạn nghe được.</p>`;
else prompt=`<p class="mt-3 text-2xl">${img}${gsEsc(vqTxt(c,pSide))} ${pSide==='term'?'<button data-vq="say" aria-label="Phát âm" class="ml-1 text-lg align-middle">🔊</button>':''}</p>`;
let act='';
if(q.type==='mc'){act=`<p class="mt-5 text-sm text-slate-500">Chọn đáp án đúng</p><div class="mt-2 grid gap-2 sm:grid-cols-2">${q.opts.map((o,n)=>{const right=o===q.k,pick=res&&res.given===o;return `<button data-vq="mc" data-o="${o}" ${res?'disabled':''} class="text-left px-4 py-3 rounded-xl border-2 text-sm ${res&&right?'border-green-500 bg-green-50 dark:bg-slate-700':pick?'border-red-400 bg-red-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}"><span class="inline-grid place-items-center w-6 h-6 mr-2 rounded-full bg-slate-100 dark:bg-slate-600 text-xs">${n+1}</span>${gsEsc(vqTxt(g.cards[o],aSide))}</button>`}).join('')}</div>`}
else if(q.type==='tf'){act=`<p class="mt-3 text-xl text-slate-600 dark:text-slate-300">= ${gsEsc(vqTxt(g.cards[q.tfk],aSide))}</p><p class="mt-4 text-sm text-slate-500">Đúng hay sai?</p><div class="mt-2 flex gap-2">${[['1','Đúng'],['0','Sai']].map(x=>`<button data-vq="tf" data-v="${x[0]}" ${res?'disabled':''} class="${vqBtn} flex-1 border-2 ${res&&((x[0]==='1')===q.tfTrue)?'border-green-500 bg-green-50 dark:bg-slate-700':res&&res.given===(x[0]==='1')?'border-red-400 bg-red-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${x[1]}</button>`).join('')}</div>`}
else if(q.type==='fl'){act=!q.reveal?`<button data-vq="rev" class="mt-5 ${vqBtn} bg-blue-600 text-white">Hiện đáp án</button>`:`<div class="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700"><p class="text-xl font-semibold">${gsEsc(correct)}</p>${vqInfo(c)}</div><div class="mt-3 flex gap-2"><button data-vq="fl" data-v="0" class="${vqBtn} flex-1 border-2 border-orange-400">✗ Chưa nhớ</button><button data-vq="fl" data-v="1" class="${vqBtn} flex-1 border-2 border-green-500">✓ Đã nhớ</button></div>`}
else{act=`<p class="mt-5 text-sm text-slate-500">${aSide==='term'?'Gõ từ tiếng Anh':'Gõ nghĩa tiếng Việt'}</p><input id="vqAns" data-vqin="ans" ${res?'disabled':''} value="${res?gsEsc(String(res.given||'')):''}" placeholder="Nhập câu trả lời…" autocomplete="off" autocapitalize="none" spellcheck="false" class="mt-2 w-full px-4 py-3 rounded-xl border-2 text-sm bg-transparent ${res?(res.ok?'border-green-500':'border-red-400'):'border-slate-300 dark:border-slate-600'}"/>${res?'':`<div class="mt-2 flex gap-2"><button data-vq="sub" class="${vqBtn} bg-blue-600 text-white">Trả lời</button></div>`}`}
let fb='';const needFix=res&&!res.ok&&(q.type==='wr'||q.type==='sp')&&S.fix==='retype'&&!res.fixed;
if(res&&q.type!=='fl'){fb=`<div class="mt-4 p-3 rounded-xl ${res.ok?'bg-green-50 dark:bg-slate-700':'bg-red-50 dark:bg-slate-700'}"><p class="font-semibold ${res.ok?'text-green-600':'text-red-600'}">${res.ok?(res.over?'Đã tính là đúng ✔':res.near?'Gần đúng! Đáp án: '+gsEsc(correct):'Chính xác! 🎉'):'Chưa đúng. Đáp án: '+gsEsc(correct)}</p>${vqInfo(c)}${!res.ok&&(q.type==='wr'||q.type==='sp')&&!res.over?`<button data-vq="over" class="mt-2 text-xs underline text-blue-600">Tôi đã trả lời đúng</button>`:''}${needFix?`<p class="mt-3 text-sm font-semibold">Gõ lại đáp án đúng để tiếp tục:</p><div class="mt-1 flex gap-2"><input id="vqFix" data-vqin="fix" autocomplete="off" autocapitalize="none" spellcheck="false" class="flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/><button data-vq="fixchk" class="${vqBtn} bg-blue-600 text-white">Xác nhận</button></div>`:`<button data-vq="next" class="mt-3 ${vqBtn} bg-blue-600 text-white">Tiếp tục ↵</button>`}</div>`}
const idk=!res&&q.type!=='fl'?`<div class="mt-4 text-right"><button data-vq="idk" class="text-sm font-semibold text-blue-600">Bạn không biết?</button></div>`:'';
return `<div class="mt-4 p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-600"><p class="text-xs text-slate-500">${label}</p>${prompt}${act}${fb}${idk}</div>`}
function lnHtml(i,d){const L=VQ.ln,g=GS[i],S=vqS(d);d.mst=d.mst||{};d.fs=d.fs||{};L.sess=L.sess||{};
const steps=vqLadder(S,L.mode),mx=steps.length,deck=lnDeck(i,d),tot=deck.length,stg=k=>lnStage(d,g,L,k),mast=deck.filter(k=>stg(k)>=mx).length,fam=deck.filter(k=>stg(k)>0&&stg(k)<mx).length;
const top=`<div class="flex items-center justify-between"><h4 class="text-sm font-semibold">🧠 Học${L.mode==='write'?' · Chế độ Viết':L.mode==='spell'?' · Chế độ Chính tả':''}</h4><button data-vq="gear" aria-label="Tuỳ chọn" class="w-10 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 text-lg">⚙️</button></div>`;
const bar=tot?`<div class="mt-3 flex items-center gap-2"><span class="w-9 h-9 rounded-full bg-green-600 text-white grid place-items-center text-sm font-bold">${mast}</span><div class="flex-1 h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex"><div class="bg-green-500" style="width:${mast/tot*100}%"></div><div class="bg-amber-400" style="width:${fam/tot*100}%"></div></div><span class="w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-600 grid place-items-center text-sm font-bold">${tot}</span></div><p class="mt-1 text-xs text-slate-500">🟢 Đã thuộc ${mast} · 🟡 Đang học ${fam} · ⚪ Mới ${tot-mast-fam}</p>`:'';
const ids=(L.rounds&&L.rounds[L.ri])||[],rn=L.rounds?L.rounds.length:0,rsum=ids.reduce((x,k)=>x+Math.min(mx,stg(k)),0);
const rinfo=(L.on&&rn&&ids.length)?`<div class="mt-3 p-3 rounded-xl bg-blue-50 dark:bg-slate-700 text-sm"><div class="flex justify-between"><b>Vòng ${L.ri+1}/${rn} · ${ids.length} từ</b><span>${ids.filter(k=>stg(k)>=mx).length}/${ids.length} đã thuộc</span></div><div class="mt-2 h-2 rounded-full bg-white dark:bg-slate-600 overflow-hidden"><div class="h-2 bg-blue-600" style="width:${rsum/(ids.length*mx)*100}%"></div></div><p class="mt-1 text-xs text-slate-500">Mỗi từ lần lượt: ${vqLadLabel(steps)}</p></div>`:'';
let body;
if(!tot)body=`<p class="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm">Chưa có thuật ngữ nào gắn sao. Hãy gắn sao vài thẻ hoặc tắt "Học thuật ngữ có gắn sao".</p>`;
else if(!L.on){const ch=lnChunks(i,d,'learn');body=`<div class="mt-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-700 text-center"><p class="text-3xl">🧠</p><p class="mt-2 font-semibold">Học theo từng vòng nhỏ</p><p class="mt-1 text-sm">${ch.length?`${tot-mast} từ chưa thuộc chia thành <b>${ch.length} vòng</b> (${ch.map(x=>x.length).join(' + ')} từ).`:'Bạn đã thuộc tất cả các từ!'}</p><p class="mt-1 text-xs text-slate-500">Mỗi vòng, từng từ lần lượt đi qua: ${vqLadLabel(steps)}. Xong vòng mới sang các từ tiếp theo, không phải học cả ${tot} từ cùng lúc.</p><div class="mt-4 flex flex-wrap gap-2 justify-center"><button data-vq="lnstart" data-m="learn" class="${vqBtn} bg-blue-600 text-white">${mast+fam?'Tiếp tục học':'Bắt đầu học'}</button><button data-vq="lnstart" data-m="write" class="${vqBtn} border-2 border-blue-600">✍️ Chế độ Viết</button><button data-vq="lnstart" data-m="spell" class="${vqBtn} border-2 border-blue-600">🎧 Chế độ Chính tả</button>${mast+fam?`<button data-vq="lnreset" class="${vqBtn} border-2 border-slate-300">Học lại từ đầu</button>`:''}</div></div>`}
else if(L.rdone){const nx=(L.rounds[L.ri+1]||[]);body=`<div class="mt-4 p-6 rounded-2xl bg-green-50 dark:bg-slate-700 text-center"><p class="text-4xl">🎉</p><p class="mt-2 text-lg font-bold">Hoàn thành vòng ${L.ri+1}/${rn}!</p><ul class="mt-3 text-sm text-left inline-block">${ids.map(k=>`<li class="mt-1">✅ ${g.cards[k].em} <b>${g.cards[k].w}</b> — ${g.cards[k].vi}</li>`).join('')}</ul><p class="mt-3 text-sm">Còn ${rn-L.ri-1} vòng nữa (${nx.length} từ tiếp theo). Nghỉ một chút rồi học tiếp nhé!</p><div class="mt-3 flex flex-wrap gap-2 justify-center"><button data-vq="rnext" class="${vqBtn} bg-blue-600 text-white">Bắt đầu vòng ${L.ri+2}</button><button data-vq="lnexit" class="${vqBtn} border-2 border-slate-300">Để sau</button></div></div>`}
else if(L.done||!L.q)body=`<div class="mt-4 p-8 rounded-2xl bg-green-50 dark:bg-slate-700 text-center"><p class="text-4xl">🏆</p><p class="mt-2 text-lg font-bold">Bạn đã thuộc ${mast}/${tot} thuật ngữ!</p><p class="mt-1 text-sm">Trả lời đúng ${L.stat.ok} · sai ${L.stat.bad} · ${rn} vòng</p><div class="mt-4 flex flex-wrap gap-2 justify-center"><button data-vq="lnreset" class="${vqBtn} bg-blue-600 text-white">Học lại từ đầu</button><button data-vq="lnexit" class="${vqBtn} border-2 border-slate-300">Xong</button></div></div>`;
else body=lnQ(i,d)+`<div class="mt-3 text-right"><button data-vq="lnexit" class="text-xs text-slate-500 underline">Thoát phiên học</button></div>`;
return top+(L.set?lnSet(i,d):'')+bar+rinfo+body}
/* ---------- MATCH ---------- */
function mtStop(){if(VQ.mtT){clearInterval(VQ.mtT);VQ.mtT=null}}
function mtStart(i,d){const g=GS[i];d.fs=d.fs||{};mtStop();let idx=g.cards.map((c,k)=>k);if(vqS(d).star&&idx.some(k=>d.fs[g.cards[k].w]))idx=idx.filter(k=>d.fs[g.cards[k].w]);const pick=vqSh(idx).slice(0,6),tiles=[];pick.forEach(k=>{tiles.push({k,s:'t'},{k,s:'d'})});VQ.mt={tiles:vqSh(tiles),sel:null,gone:{},wrong:null,t0:Date.now(),done:0,time:0,n:pick.length,rdy:1};
VQ.mtT=setInterval(()=>{const el=document.getElementById('mtTime'),M=VQ.mt;if(!el||!M||M.done){mtStop();return}el.textContent=((Date.now()-M.t0)/1000).toFixed(1)+'s'},100)}
function mtHtml(i,d){const M=VQ.mt,g=GS[i];if(!M||!M.tiles)return `<div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-700 text-center"><p class="text-4xl">🧩</p><p class="mt-2 text-lg font-bold">Ghép thẻ</p><p class="mt-1 text-sm text-slate-500">Ghép mỗi thuật ngữ với nghĩa của nó thật nhanh. Càng nhanh càng tốt!</p>${d.best?`<p class="mt-2 text-sm">🏆 Kỷ lục của bạn: <b>${d.best.toFixed(1)}s</b></p>`:''}<button data-vq="mtstart" class="mt-4 ${vqBtn} bg-blue-600 text-white">Bắt đầu chơi</button></div>`;
if(M.done)return `<div class="p-8 rounded-2xl bg-green-50 dark:bg-slate-700 text-center"><p class="text-4xl">🎉</p><p class="mt-2 text-lg font-bold">Hoàn thành trong ${M.time.toFixed(1)} giây!</p><p class="mt-1 text-sm">${M.rec?'🏆 Kỷ lục mới!':'🏆 Kỷ lục: '+(d.best||M.time).toFixed(1)+'s'}</p><button data-vq="mtstart" class="mt-4 ${vqBtn} bg-blue-600 text-white">Chơi lại</button></div>`;
return `<div class="flex items-center justify-between"><p class="text-sm text-slate-500">Bấm hai thẻ để ghép cặp thuật ngữ và nghĩa.</p><p class="text-xl font-bold tabular-nums" id="mtTime">0.0s</p></div><div class="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">${M.tiles.map((t,j)=>{const c=g.cards[t.k],gone=M.gone[j],sel=M.sel===j,bad=M.wrong&&M.wrong.includes(j);return `<button data-vq="mt" data-j="${j}" ${gone?'disabled':''} class="min-h-[84px] p-3 rounded-xl border-2 text-sm font-semibold ${gone?'opacity-0 pointer-events-none':sel?'border-blue-600 bg-blue-50 dark:bg-slate-700':bad?'border-red-400 bg-red-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800'}">${t.s==='t'?'<span class="text-lg">'+c.em+'</span><br>'+c.w:gsEsc(c.vi)}</button>`}).join('')}</div>`}
/* ---------- TEST ---------- */
function tsGen(i,d){const g=GS[i],T=VQ.ts,C=T.cfg;let types=['tf','mc','mt','wr'].filter(t=>C[t]);if(!types.length){C.mc=1;types=['mc']}
const n=Math.max(1,Math.min(+C.n||10,g.cards.length)),idx=vqSh(g.cards.map((c,k)=>k)).slice(0,n),by={tf:[],mc:[],mt:[],wr:[]};idx.forEach((k,j)=>by[types[j%types.length]].push(k));
const dirOf=()=>C.ans==='both'?(Math.random()<.5?'d2t':'t2d'):(C.ans==='term'?'d2t':'t2d'),all=g.cards.map((c,x)=>x),qs=[];
by.tf.forEach(k=>{const o=vqSh(all.filter(x=>x!==k)),tr=Math.random()<.5;qs.push({type:'tf',k,dir:dirOf(),tfTrue:tr,tfk:tr?k:o[0]})});
by.mc.forEach(k=>{qs.push({type:'mc',k,dir:dirOf(),opts:vqSh([k,...vqSh(all.filter(x=>x!==k)).slice(0,3)])})});
if(by.mt.length)qs.push({type:'mt',ks:by.mt,dir:dirOf(),choices:vqSh(by.mt)});
by.wr.forEach(k=>{qs.push({type:'wr',k,dir:dirOf()})});
T.qs=qs;T.resp={};T.res=null;T.ph='run'}
function tsGradeAll(i){const g=GS[i],T=VQ.ts,items=[];
T.qs.forEach((q,qi)=>{const ans=q.dir==='d2t'?'term':'def',pr=q.dir==='d2t'?'def':'term';
if(q.type==='tf'){const r=T.resp[qi];items.push({qi,ok:r!==undefined&&r===q.tfTrue,prompt:vqTxt(g.cards[q.k],pr)+' = '+vqTxt(g.cards[q.tfk],ans),correct:q.tfTrue?'Đúng':'Sai',given:r===undefined?'(bỏ trống)':r?'Đúng':'Sai'})}
else if(q.type==='mc'){const r=T.resp[qi];items.push({qi,ok:r===q.k,prompt:vqTxt(g.cards[q.k],pr),correct:vqTxt(g.cards[q.k],ans),given:r===undefined?'(bỏ trống)':vqTxt(g.cards[r],ans)})}
else if(q.type==='mt'){q.ks.forEach((k,j)=>{const r=T.resp[qi+'_'+j];items.push({qi,j,ok:r===k,prompt:vqTxt(g.cards[k],pr),correct:vqTxt(g.cards[k],ans),given:r===undefined||r===''?'(bỏ trống)':vqTxt(g.cards[+r],ans)})})}
else{const r=T.resp[qi]||'',gr=vqGrade(r,vqTxt(g.cards[q.k],ans),ans);items.push({qi,ok:gr!=='bad',prompt:vqTxt(g.cards[q.k],pr),correct:vqTxt(g.cards[q.k],ans),given:r||'(bỏ trống)'})}});
T.res={items,score:items.filter(x=>x.ok).length,total:items.length}}
function tsHtml(i,d){const g=GS[i],T=VQ.ts,C=T.cfg;
if(T.ph==='setup')return `<div class="p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-600"><h4 class="text-lg font-bold">Thiết lập bài kiểm tra</h4><div class="mt-4 flex items-center justify-between gap-3"><span class="text-sm">Câu hỏi <span class="text-slate-500">(tối đa ${g.cards.length})</span></span><input type="number" min="1" max="${g.cards.length}" value="${C.n}" data-vqin="tsn" class="w-20 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm text-center"/></div><div class="mt-2 flex items-center justify-between gap-3"><span class="text-sm">Trả lời bằng</span>${vqSelH('ts_ans',C.ans,[['term','Thuật ngữ'],['def','Định nghĩa'],['both','Cả hai']])}</div><div class="mt-2 border-t border-slate-200 dark:border-slate-600 pt-1">${vqSw(C.tf,'tsset','tf','Đúng/Sai')}${vqSw(C.mc,'tsset','mc','Trắc nghiệm')}${vqSw(C.mt,'tsset','mt','Ghép thẻ')}${vqSw(C.wr,'tsset','wr','Tự luận')}</div><div class="mt-3 text-right"><button data-vq="tsstart" class="${vqBtn} bg-blue-600 text-white">Bắt đầu làm kiểm tra</button></div></div>`;
const R=T.res,H={tf:'Đúng/Sai',mc:'Trắc nghiệm',mt:'Ghép thẻ',wr:'Tự luận'};let lastType='',html='';
if(R){const pct=Math.round(R.score/R.total*100);html+=`<div class="p-5 rounded-2xl ${pct>=80?'bg-green-50':'bg-amber-50'} dark:bg-slate-700 text-center"><p class="text-4xl">${pct>=80?'🎉':'💪'}</p><p class="mt-1 text-2xl font-bold">${R.score}/${R.total} · ${pct}%</p><p class="text-sm text-slate-500">${pct>=80?'Rất tốt!':'Hãy ôn lại các từ sai rồi làm lại nhé.'}</p><div class="mt-3 flex flex-wrap gap-2 justify-center"><button data-vq="tsretry" class="${vqBtn} bg-blue-600 text-white">Làm bài mới</button><button data-vq="tsback" class="${vqBtn} border-2 border-slate-300">Thiết lập lại</button></div></div>`}
T.qs.forEach((q,qi)=>{if(q.type!==lastType){html+=`<p class="mt-5 text-sm font-bold">${H[q.type]}</p>`;lastType=q.type}
const ans=q.dir==='d2t'?'term':'def',pr=q.dir==='d2t'?'def':'term',lab=pr==='def'?'Định nghĩa':'Thuật ngữ',res=(k)=>R?R.items.find(x=>x.qi===qi&&(k===undefined||x.j===k)):null,mark=r=>r?(r.ok?'<p class="mt-2 text-sm text-green-600">✅ Đúng</p>':`<p class="mt-2 text-sm text-red-600">❌ Bạn chọn: ${gsEsc(r.given)} · Đáp án: <b>${gsEsc(r.correct)}</b></p>`):'';
if(q.type==='tf'){const r=T.resp[qi],rs=res();html+=`<div class="mt-2 p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600"><p class="text-xs text-slate-500">${lab} · ${ans==='term'?'Thuật ngữ':'Định nghĩa'}</p><p class="mt-1">${gsEsc(vqTxt(g.cards[q.k],pr))} <span class="text-slate-500">=</span> ${gsEsc(vqTxt(g.cards[q.tfk],ans))}</p><div class="mt-2 flex gap-2">${[['1','Đúng'],['0','Sai']].map(x=>`<button data-vq="tsr" data-q="${qi}" data-v="${x[0]}" ${R?'disabled':''} class="${vqBtn} flex-1 border-2 ${r===(x[0]==='1')?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${x[1]}</button>`).join('')}</div>${mark(rs)}</div>`}
else if(q.type==='mc'){const r=T.resp[qi],rs=res();html+=`<div class="mt-2 p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600"><p class="text-xs text-slate-500">${lab}</p><p class="mt-1 text-lg">${gsEsc(vqTxt(g.cards[q.k],pr))}</p><div class="mt-2 grid gap-2 sm:grid-cols-2">${q.opts.map(o=>`<button data-vq="tsr" data-q="${qi}" data-v="${o}" ${R?'disabled':''} class="text-left px-3 py-2 rounded-xl border-2 text-sm ${r===o?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${gsEsc(vqTxt(g.cards[o],ans))}</button>`).join('')}</div>${mark(rs)}</div>`}
else if(q.type==='mt'){html+=`<div class="mt-2 p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600"><p class="text-xs text-slate-500">Ghép mỗi mục với đáp án đúng</p>${q.ks.map((k,j)=>{const r=T.resp[qi+'_'+j],rs=res(j);return `<div class="mt-3"><p class="text-sm font-semibold">${j+1}. ${gsEsc(vqTxt(g.cards[k],pr))}</p><select data-vqsel="tsm" data-q="${qi}" data-j="${j}" ${R?'disabled':''} class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"><option value="">— Chọn đáp án —</option>${q.choices.map(o=>`<option value="${o}" ${String(r)===String(o)?'selected':''}>${gsEsc(vqTxt(g.cards[o],ans))}</option>`).join('')}</select>${mark(rs)}</div>`}).join('')}</div>`}
else{const rs=res();html+=`<div class="mt-2 p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600"><p class="text-xs text-slate-500">${lab}</p><p class="mt-1 text-lg">${gsEsc(vqTxt(g.cards[q.k],pr))}</p><input data-vqin="tw" data-q="${qi}" ${R?'disabled':''} value="${gsEsc(T.resp[qi]||'')}" placeholder="${ans==='term'?'Gõ từ tiếng Anh…':'Gõ nghĩa tiếng Việt…'}" autocomplete="off" autocapitalize="none" spellcheck="false" class="mt-2 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/>${mark(rs)}</div>`}});
if(!R)html+=`<div class="mt-5 flex gap-2 justify-end"><button data-vq="tsback" class="${vqBtn} border-2 border-slate-300">Thiết lập lại</button><button data-vq="tssubmit" class="${vqBtn} bg-blue-600 text-white">Nộp bài</button></div>`;
return html}
/* ---------- DANH SÁCH THUẬT NGỮ ---------- */
function vqList(i,d){const g=GS[i];d.fs=d.fs||{};d.mst=d.mst||{};let o=g.cards.map((c,k)=>k);
if(VQ.sort==='az')o.sort((a,b)=>g.cards[a].w.localeCompare(g.cards[b].w));else if(VQ.sort==='star')o.sort((a,b)=>(d.fs[g.cards[b].w]?1:0)-(d.fs[g.cards[a].w]?1:0)||a-b);else if(VQ.sort==='new')o.sort((a,b)=>(d.mst[g.cards[a].w]||0)-(d.mst[g.cards[b].w]||0)||a-b);
const B=['⚪ Mới','🟡 Đang học','🟢 Đã thuộc'],mxL=vqLadder(vqS(d),'learn').length,bi=c=>{const v=d.mst[c.w]||0;return v>=mxL?2:v>0?1:0};
const op=!!VQ.lopen;
return `<div class="flex items-center justify-between flex-wrap gap-2"><button data-vq="lopen" aria-expanded="${op?'true':'false'}" class="flex items-center gap-2 text-left py-1"><span class="inline-grid place-items-center w-7 h-7 rounded-full border-2 border-slate-300 dark:border-slate-600 text-sm">${op?'▾':'▸'}</span><h3 class="text-base font-bold">Thuật ngữ trong học phần (${g.cards.length})</h3><span class="text-xs text-slate-500">${op?'Bấm để thu gọn':'Bấm để xem'}</span></button>${op?vqSelH('sort',VQ.sort,[['orig','Thứ tự gốc'],['az','A → Z'],['star','⭐ Gắn sao trước'],['new','Chưa thuộc trước']]):''}</div>${op?`<div class="mt-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-700/50 flex flex-col gap-3">${o.map(k=>{const c=g.cards[k];return `<div class="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm"><div class="flex items-center justify-between"><span class="text-xs text-slate-500">${B[bi(c)]}</span><div class="flex items-center gap-1"><button data-vq="lstar" data-w="${c.w}" aria-label="Gắn sao" class="w-9 h-9 rounded-full text-lg">${d.fs[c.w]?'⭐':'☆'}</button><button data-vq="sayw" data-w="${c.w}" aria-label="Phát âm" class="w-9 h-9 rounded-full text-lg">🔊</button></div></div><div class="grid gap-3 sm:grid-cols-2"><div><p class="font-semibold">${c.em} ${c.w}</p><p class="text-xs text-slate-500">${[c.ipa,c.pos].filter(Boolean).join(' · ')}</p></div><div><p class="text-sm">${c.vi}</p><p class="mt-1 text-xs italic text-slate-500">${gsEsc(c.ex).replace(/\*(.+?)\*/g,'<b>$1</b>')}</p></div></div></div>`}).join('')}</div>`:''}`}
/* ---------- điều phối ---------- */
function vqPanel(i,d){return FC.tab==='learn'?lnHtml(i,d):FC.tab==='match'?mtHtml(i,d):tsHtml(i,d)}
function vqRender(){const i=VQ.u,d=gsGet(i),b=document.getElementById('vqBox');if(b)b.innerHTML=vqPanel(i,d);vqRenderList()}
function vqRenderList(){const l=document.getElementById('vqList');if(l)l.innerHTML=vqList(VQ.u,gsGet(VQ.u))}
function vqAct(a,b){const i=VQ.u,d=gsGet(i),g=GS[i],L=VQ.ln,S=vqS(d),q=L.q,T=VQ.ts;
const inp=id=>{const e=document.getElementById(id);return e?e.value:''};
if(a==='lopen'){VQ.lopen=!VQ.lopen;vqRenderList();return}
else if(a==='gear'){L.set=!L.set}
else if(a==='adv'){L.adv=!L.adv}
else if(a==='set'){d.ls=d.ls||{};d.ls[b.dataset.k]=S[b.dataset.k]?0:1;gsSet(i,d)}
else if(a==='lnstart'){L.mode=b.dataset.m||'learn';L.on=1;L.stat={ok:0,bad:0};L.last=-1;L.sess={};L.rounds=lnChunks(i,d,L.mode);L.ri=0;lnPick(i,d);if(L.q&&(S.tts)&&L.q.dir==='t2d')fcSay(g.cards[L.q.k].w)}
else if(a==='lnreset'){const idx=g.cards.map((c,k)=>k).filter(k=>!S.star||(d.fs&&d.fs[g.cards[k].w]));d.mst=d.mst||{};idx.forEach(k=>{delete d.mst[g.cards[k].w]});gsSet(i,d);L.on=0;L.done=0;L.rdone=0;L.q=null;L.seen={};L.sess={};L.rounds=null;L.mode='learn'}
else if(a==='rnext'){L.ri++;L.rdone=0;lnPick(i,d);if(L.q&&S.tts&&L.q.dir==='t2d')fcSay(g.cards[L.q.k].w)}
else if(a==='lnexit'){L.on=0;L.mode='learn';L.q=null;L.rdone=0;L.rounds=null}
else if(a==='mc'){if(q&&!q.res)lnAnswer(i,d,+b.dataset.o)}
else if(a==='tf'){if(q&&!q.res)lnAnswer(i,d,b.dataset.v==='1')}
else if(a==='sub'){if(q&&!q.res)lnAnswer(i,d,inp('vqAns'))}
else if(a==='idk'){if(q&&!q.res)lnAnswer(i,d,q.type==='mc'||q.type==='tf'?null:'')}
else if(a==='rev'){if(q)q.reveal=1}
else if(a==='fl'){if(q&&!q.res){lnAnswer(i,d,b.dataset.v==='1');lnPick(i,d)}}
else if(a==='over'){if(q&&q.res&&!q.res.ok){q.res.ok=true;q.res.over=1;const mx=vqLadder(S,L.mode).length,nv=Math.min(mx,(q.prev||0)+1);if(L.mode==='learn')d.mst[g.cards[q.k].w]=nv;else L.sess[q.k]=nv;L.stat.bad=Math.max(0,L.stat.bad-1);L.stat.ok++;gsSet(i,d)}}
else if(a==='fixchk'){if(q&&q.res){const c=g.cards[q.k],ans=q.dir==='d2t'?c.w:c.vi;if(vqGrade(inp('vqFix'),ans,q.dir==='d2t'?'term':'def')!=='bad')q.res.fixed=1}}
else if(a==='next'){if(q&&q.res){lnPick(i,d);if(L.q&&S.tts&&L.q.dir==='t2d')fcSay(g.cards[L.q.k].w)}}
else if(a==='say'){if(q)fcSay(g.cards[q.k].w,b.dataset.slow?0.55:0.85)}
else if(a==='sayw'){fcSay(b.dataset.w)}
else if(a==='lstar'){d.fs=d.fs||{};d.fs[b.dataset.w]=d.fs[b.dataset.w]?0:1;gsSet(i,d);vqRenderList();return}
else if(a==='mtstart'){mtStart(i,d)}
else if(a==='mt'){const M=VQ.mt;if(!M||M.done||M.wrong)return;const j=+b.dataset.j;if(M.gone[j]||M.sel===j)return;
 if(M.sel===null){M.sel=j}else{const x=M.tiles[M.sel],y=M.tiles[j];if(x.k===y.k&&x.s!==y.s){M.gone[M.sel]=1;M.gone[j]=1;M.sel=null;if(window.cgeSound)cgeSound('correct');if(Object.keys(M.gone).length>=M.tiles.length){M.done=1;M.time=(Date.now()-M.t0)/1000;mtStop();if(!d.best||M.time<d.best){M.rec=true;d.best=M.time;gsSet(i,d)}else M.rec=false}}
 else{M.wrong=[M.sel,j];M.sel=null;if(window.cgeSound)cgeSound('wrong');setTimeout(()=>{if(VQ.mt===M){M.wrong=null;vqRender()}},550)}}}
else if(a==='tsset'){T.cfg[b.dataset.k]=T.cfg[b.dataset.k]?0:1}
else if(a==='tsstart'){tsGen(i,d)}
else if(a==='tsr'){if(T.res)return;const qi=+b.dataset.q,qq=T.qs[qi];T.resp[qi]=qq.type==='tf'?b.dataset.v==='1':+b.dataset.v}
else if(a==='tssubmit'){tsGradeAll(i);if(window.cgeSound&&VQ.ts.res.score===VQ.ts.res.total)cgeSound('correct')}
else if(a==='tsretry'){tsGen(i,d)}
else if(a==='tsback'){T.ph='setup';T.res=null;T.resp={}}
if((a==='lnstart'||a==='next')&&L.q&&L.q.type==='sp')fcSay(g.cards[L.q.k].w);
vqRender()}
function vqSelChange(s){const i=VQ.u,d=gsGet(i),k=s.dataset.vqsel;
if(k==='sort'){VQ.sort=s.value;vqRenderList();return}
if(k==='ts_ans'){VQ.ts.cfg.ans=s.value;return}
if(k==='tsm'){if(VQ.ts.res)return;VQ.ts.resp[s.dataset.q+'_'+s.dataset.j]=s.value===''?undefined:+s.value;return}
if(k.startsWith('ls_')){d.ls=d.ls||{};d.ls[k.slice(3)]=s.value;gsSet(i,d);vqRender()}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-vq]');if(!b||b.disabled)return;if(!document.getElementById('vqBox')&&!document.getElementById('vqList'))return;vqAct(b.dataset.vq,b)});
document.addEventListener('change',e=>{const s=e.target.closest&&e.target.closest('[data-vqsel]');if(s)vqSelChange(s)});
document.addEventListener('input',e=>{const t=e.target.closest&&e.target.closest('[data-vqin]');if(!t)return;const k=t.dataset.vqin;if(k==='tsn')VQ.ts.cfg.n=+t.value;else if(k==='tw')VQ.ts.resp[+t.dataset.q]=t.value});
document.addEventListener('keydown',e=>{if(!document.getElementById('vqBox')||FC.tab!=='learn')return;const L=VQ.ln,q=L.q,tg=e.target;
if(e.key==='Enter'){if(tg.id==='vqAns'){e.preventDefault();vqAct('sub',tg)}else if(tg.id==='vqFix'){e.preventDefault();vqAct('fixchk',tg)}else if(q&&q.res&&(q.res.ok||q.res.fixed||q.type==='mc'||q.type==='tf'||vqS(gsGet(VQ.u)).fix!=='retype')&&tg.tagName!=='BUTTON'){e.preventDefault();vqAct('next',tg)}}
else if(/^[1-4]$/.test(e.key)&&q&&!q.res&&q.type==='mc'&&!/INPUT|TEXTAREA|SELECT/.test(tg.tagName||'')){const o=q.opts[+e.key-1];if(o!==undefined)vqAct('mc',{dataset:{o}})}});
const fcDue=(d,w)=>!(d.sr&&d.sr[w])||d.sr[w].due<=Date.now();
function gsVocab(i,d){VQ.u=i;const TB=[['cards','🗂️','Thẻ ghi nhớ'],['learn','🧠','Học'],['match','🧩','Ghép thẻ'],['test','📝','Kiểm tra']];
return `<div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">${TB.map(t=>`<button data-gs="tab" data-i="${i}" data-t="${t[0]}" class="px-2 py-3 rounded-xl border-2 text-sm font-semibold ${FC.tab===t[0]?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${t[1]} ${t[2]}</button>`).join('')}</div><div class="mt-4">${FC.tab==='cards'?`<div id="fcBox">${fcInner(i,d)}</div>`:`<div id="vqBox">${vqPanel(i,d)}</div>`}</div><div id="vqList" class="mt-8">${vqList(i,d)}</div>`}

function gsWords(i,d){const V=GS[i].vocab,N=V.length;d.w=d.w||{};const opts=k=>{const o=[k,(k+1)%N,(k+3)%N,(k+5)%N].filter((x,j,a)=>a.indexOf(x)===j);const r=[...o].sort((a,b)=>((a*7+k*3)%N)-((b*7+k*3)%N));return r},ok=V.filter((x,k)=>d.w[k]===x[0]).length;
return `<h4 class="mt-6 text-sm font-semibold">✏️ Choose the English word · ${ok}/${N}</h4><p class="mt-1 text-xs text-slate-500">Đọc nghĩa tiếng Việt và chọn từ tiếng Anh đúng. Chọn sai vẫn được chọn lại.</p>${V.map((x,k)=>{const c=d.w[k],right=c===x[0];return `<div class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700"><p class="text-sm font-semibold">${k+1}. ${x[1]}</p><div class="mt-2 flex flex-wrap gap-2">${opts(k).map(j=>{const w=V[j][0];return `<button data-gs="w" data-i="${i}" data-k="${k}" data-o="${w}" ${right?'disabled':''} class="px-3 py-1.5 rounded-xl border-2 text-sm ${right&&w===x[0]?'border-green-500 bg-green-50 dark:bg-slate-600':c===w?'border-red-400 bg-red-50 dark:bg-slate-600':'border-slate-200 dark:border-slate-500'}">${w}</button>`}).join('')}</div>${right?`<p class="mt-2 text-sm text-green-600">✅ Correct! <b>${x[0]}</b></p>`:c!==undefined?'<p class="mt-2 text-sm text-red-600">Not quite. Try another word.</p>':''}</div>`}).join('')}${ok===N?'<p class="mt-4 text-sm font-semibold text-green-600">🎉 You know all the words! Now you are ready to watch.</p>':''}`}
function gsMore(i,d){const g=GS[i];if(!g.quiz)return '';d.q=d.q||{};d.t=d.t||{};d.p=d.p||{};d.g=d.g||{};const ok=g.quiz.filter((x,k)=>d.q[k]===x.a).length,gok=g.sum.filter((x,k)=>d.g[k]===x[1]).length,H=(n,t,sub)=>`<h2 class="text-lg font-bold"><span class="inline-grid place-items-center w-7 h-7 mr-2 rounded-full bg-blue-600 text-white text-sm">${n}</span>${t}</h2><p class="mt-1 text-xs text-slate-500">${sub}</p>`;
return `<section class="${card} mt-5 p-5">${H(1,'Before you watch','Chuẩn bị cho video: quan sát tranh, đoán nội dung và làm quen với từ khó.')}
<h3 class="mt-4 text-base font-bold">🖼️ Look and think</h3><div class="mt-2 mx-auto max-w-md rounded-xl overflow-hidden border-2 border-sky-200 shadow-sm">${g.img}</div><ul class="mt-3 text-sm list-disc pl-5 space-y-1">${(g.look||['What can you see in the picture?','Where is the person? What is he or she doing?','What is he or she thinking about?','Do you ever daydream about a place? Where?']).map(x=>`<li>${x}</li>`).join('')}</ul><button data-gs="hint" data-i="${i}" class="mt-3 px-4 py-2 rounded-xl border-2 border-amber-400 text-sm font-semibold">💡 ${d.h?'Hide hint':'Show hint'}</button>${d.h?`<p class="mt-2 p-3 rounded-xl bg-amber-50 dark:bg-slate-700 text-sm">${g.hint||'The person is waiting for a train, but in his or her mind he or she is somewhere else. Look at the thought bubble: where would this person rather be? This idea is the topic of the video.'}</p>`:''}<textarea data-gst="${i}" data-k="b1" rows="2" placeholder="${g.ph||'In the picture I can see … I think he or she is thinking about …'}" class="mt-3 w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm">${gsEsc(d.t.b1||'')}</textarea>
<p class="mt-4 text-sm font-semibold">🔮 Predict: which ideas do you think the speaker will talk about? (tick all you expect)</p><div class="mt-2 flex flex-col gap-2">${g.pred.map(x=>`<button data-gs="p" data-i="${i}" data-k="${x[0]}" class="text-left px-4 py-2 rounded-xl border-2 text-sm ${d.p[x[0]]?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${d.p[x[0]]?'☑':'☐'} ${x[1]}</button>`).join('')}</div>
<h3 class="mt-6 text-base font-bold">📚 Useful words from the video</h3><p class="mt-1 text-xs text-slate-500">Đọc kỹ các từ này trước khi xem video.</p>${gsVocab(i,d)}</section>
<section class="${card} mt-5 p-5">${H(2,'While you watch · '+ok+'/'+g.quiz.length,'Xem video và chọn câu trả lời đúng. Chọn sai vẫn được chọn lại.')}${g.quiz.map((x,k)=>{const c=d.q[k],right=c===x.a;return `<div class="mt-4"><p class="text-sm font-semibold">${k+1}. ${x.q}</p><div class="mt-2 flex flex-col gap-2">${x.o.map((o,j)=>`<button data-gs="q" data-i="${i}" data-q="${k}" data-o="${j}" ${right?'disabled':''} class="text-left px-4 py-2 rounded-xl border-2 text-sm ${right&&j===x.a?'border-green-500 bg-green-50 dark:bg-slate-700':c===j?'border-red-400 bg-red-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${'ABC'[j]}) ${o}</button>`).join('')}</div>${right?`<p class="mt-2 text-sm text-green-600">✅ Correct! ${x.e}</p>`:c!==undefined?'<p class="mt-2 text-sm text-red-600">Not quite. Watch that part again and try another answer.</p>':''}</div>`}).join('')}${ok===g.quiz.length?'<p class="mt-4 text-sm font-semibold text-green-600">🎉 Great listening! You understood the main ideas of the video.</p>':''}</section>
<section class="${card} mt-5 p-5">${H(3,'After you watch','Nhìn lại video: kiểm tra dự đoán, tóm tắt và nêu ý kiến của em.')}
<p class="mt-4 text-sm font-semibold">✅ Check your predictions</p><button data-gs="rev" data-i="${i}" class="mt-2 px-4 py-2 rounded-xl border-2 border-blue-600 text-sm font-semibold">${d.rev?'Hide answers':'Show what the video said'}</button>${d.rev?`<ul class="mt-3 flex flex-col gap-2">${g.pred.map(x=>`<li class="px-4 py-2 rounded-xl text-sm ${x[2]?'bg-green-50 dark:bg-slate-700':'bg-red-50 dark:bg-slate-700'}">${x[2]?'✅ Mentioned':'❌ Not mentioned'} · ${x[1]} <span class="text-xs text-slate-500">${d.p[x[0]]?(x[2]?'(You predicted it!)':'(You ticked this one)'):(x[2]?'(You did not tick this)':'')}</span></li>`).join('')}</ul>`:''}
<p class="mt-5 text-sm font-semibold">📝 Complete the summary · ${gok}/${g.sum.length}</p><div class="mt-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-700 text-sm leading-8">${g.sum.map((x,k)=>{const c=d.g[k],right=c===x[1];return x[0]+(right?`<b class="text-green-600">${x[1]}</b>`:`<span class="inline-flex flex-wrap gap-1 align-middle">${x[2].map((o,j)=>`<button data-gs="g" data-i="${i}" data-g="${k}" data-o="${o}" class="px-2 py-0.5 rounded-lg border-2 text-xs ${c===o?'border-red-400 bg-red-50':'border-slate-300 dark:border-slate-500'}">${o}</button>`).join('')}</span>`)+x[3]}).join('')}</div>${gok===g.sum.length?'<p class="mt-2 text-sm text-green-600">🎉 Well done! You can summarise the video in your own words.</p>':''}
${g.after.map(x=>`<div class="mt-5"><p class="text-xs font-bold text-orange-500">${x[1]} ${x[2]}</p><p class="mt-1 text-sm font-semibold">${x[3]}</p><textarea data-gst="${i}" data-k="${x[0]}" rows="2" placeholder="${x[4]}" class="mt-2 w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm">${gsEsc(d.t[x[0]]||'')}</textarea></div>`).join('')}</section>`}
function startPage(i){const g=GS[i];if(!g)return unit(i);const d=gsGet(i),V=['Agree','Disagree','Not sure'],H=g.hd||{k:`UNIT ${i+1} ${U[i].emoji}`,t:`${i+1} ${U[i].name}`,s:'Getting started',bk:`#/unit/${i}`,bl:`← ${U[i].name}`};
return `<a href="${H.bk}" class="text-sm text-blue-600">${H.bl}</a>
<div class="mt-2 rounded-3xl bg-blue-600 text-white p-6"><p class="text-sm text-orange-300 font-bold">${H.k}</p><h1 class="text-2xl font-bold">${H.t}</h1><p class="mt-1 text-blue-100">${H.s}</p></div>
<section class="${card} mt-5 p-5"><h2 class="text-lg font-bold">${g.gt||'🎯 In this unit you will…'}</h2><ul class="mt-3 grid gap-2 sm:grid-cols-2">${g.goals.map(x=>`<li class="flex items-start gap-3 p-3 rounded-xl bg-blue-50 dark:bg-slate-700"><span class="text-xl">${x[0]}</span><span class="text-sm">${x[1]}</span></li>`).join('')}</ul></section>
<section class="${card} mt-5 p-5"><h2 class="text-lg font-bold">💭 Think and discuss</h2><p class="mt-2 text-xl font-semibold">${g.q}</p><div class="mt-3 flex flex-wrap gap-2">${V.map(v=>`<button data-gs="v" data-i="${i}" data-v="${v}" class="px-4 py-2 rounded-xl border-2 text-sm font-semibold ${d.v===v?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${v}</button>`).join('')}</div><textarea data-gsn="${i}" rows="3" placeholder="Why? Give a reason or an example from your own experience…" class="mt-3 w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm">${gsEsc(d.n||'')}</textarea></section>
<section class="${card} mt-5 p-5"><h2 class="text-lg font-bold">▶️ Watch this!</h2>${g.yt?`<a href="${g.yt}" target="_blank" rel="noopener" class="mt-3 flex items-center gap-4 p-4 rounded-2xl bg-slate-900 text-white hover:opacity-90 transition"><span class="w-14 h-14 rounded-full bg-red-600 grid place-items-center text-2xl">▶</span><span><b class="block">Open the video on YouTube</b><span class="text-xs text-slate-300">Mở trong tab mới, xem xong quay lại để trả lời câu hỏi bên trên.</span></span></a>`:`<div class="mt-3 p-5 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 text-center text-sm text-slate-500"><span class="block text-3xl">🎬</span><b class="block mt-1">Video đang được cập nhật</b>Video khởi động cho unit này sẽ được thêm sau. Em có thể bắt đầu với câu hỏi thảo luận ở trên.</div>`}</section>
${gsMore(i,d)}
<button data-gs="done" data-i="${i}" class="mt-5 px-5 py-3 rounded-2xl font-semibold ${d.done?'bg-green-600 text-white':'bg-blue-600 text-white'}">${d.done?'✅ Completed':'Mark as done'}</button>`}
document.addEventListener('click',e=>{const b=e.target.closest('[data-gs]');if(!b)return;const i=+b.dataset.i,d=gsGet(i);if(b.dataset.gs==='v')d.v=b.dataset.v;else if(b.dataset.gs==='p'){d.p=d.p||{};d.p[b.dataset.k]=d.p[b.dataset.k]?0:1}else if(b.dataset.gs==='rev'){d.rev=d.rev?0:1}else if(b.dataset.gs==='g'){const k=+b.dataset.g,o=b.dataset.o;d.g=d.g||{};d.g[k]=o;if(window.cgeSound)cgeSound(o===GS[i].sum[k][1]?'correct':'wrong')}else if(b.dataset.gs==='hint'){d.h=d.h?0:1}else if(b.dataset.gs==='w'){const k=+b.dataset.k,o=b.dataset.o;if(b.disabled)return;d.w=d.w||{};d.w[k]=o;if(window.cgeSound)cgeSound(o===GS[i].vocab[k][0]?'correct':'wrong')}else if(b.dataset.gs==='tab'){fcStop();mtStop();VQ.mt=null;FC.tab=b.dataset.t}else if(b.dataset.gs==='tchk'){d.tc=1;d.t=d.t||{};const V=GS[i].cards;if(V.every((c,k)=>(d.t['tw'+k]||'').trim().toLowerCase()===c.w.toLowerCase())&&window.cgeSound)cgeSound('correct')}else if(b.dataset.gs==='treset'){d.tc=0;d.t=d.t||{};Object.keys(d.t).forEach(k=>{if(/^tw\d+$/.test(k))delete d.t[k]})}else if(b.dataset.gs==='q'){if(b.disabled)return;const k=+b.dataset.q,o=+b.dataset.o;d.q=d.q||{};d.q[k]=o;if(window.cgeSound)cgeSound(o===GS[i].quiz[k].a?'correct':'wrong')}else{d.done=d.done?0:1;if(d.done&&window.cgeSound)cgeSound('correct')}gsSet(i,d);view.innerHTML=startPage(i)});
document.addEventListener('input',e=>{const u=e.target.closest&&e.target.closest('[data-gst]');if(u){const i=+u.dataset.gst,d=gsGet(i);d.t=d.t||{};d.t[u.dataset.k]=u.value;gsSet(i,d);return}const t=e.target.closest&&e.target.closest('[data-gsn]');if(!t)return;const i=+t.dataset.gsn,d=gsGet(i);d.n=t.value;gsSet(i,d)});

function route(){
  const p=(location.hash||'#/').slice(2).split('/'); let html;
  if(p[0]==='unit') html=unit(+p[1]);
  else if(p[0]==='lesson') html=lesson(+p[1],+p[2]);
  else if(p[0]==='check') html=checkPage(+p[1]);
  else if(p[0]==='start') html=startPage(+p[1]);
  else if(p[0]==='skills') html=p[1]==='practice'?(p[2]?tPage(+p[2],1):rHub()):(p[1]==='reading'||p[1]==='listening'||!p[1])?skillsHub(p[1]):skillItem(p[1]);
  else if(p[0]==='uoe'&&p[1]==='test') html=p[2]?tPage(+p[2]):tHub();
  else if(p[0]==='uoe') html=p.length>=4?uoeTopic(+p[1],+p[2],+p[3]):uoeHub(p[1]==='theme');
  else if(p[0]==='lms'&&p[1]==='extra') html=extraPage(p[2]);
  else if(p[0]==='lms') html=lmsPage(p[1],p[2],p[3]);
  else if(p[0]==='writing') html=writing(+p[1]||0);
  else if(p[0]==='dashboard') html=dashboard();
  else html=home();
  {const ui=(p[0]==='skills'&&p[1]==='ls-1a')?0:(['unit','lesson','check','start'].includes(p[0])||(p[0]==='uoe'&&p.length>=4)||(p[0]==='lms'&&p[1]==='u'&&p[2]!=='more'))?+(p[0]==='lms'?p[2]:p[1]):-1;document.documentElement.dataset.u=ui>=0&&ui<9?ui:'x'}
  view.innerHTML=html; window.scrollTo(0,0);
  document.body.classList.remove('menu-open');
  if(p[0]==='lesson') initLesson();
  if(p[0]==='lesson'&&MX['w'+p[1]+'.'+p[2]]) gRender('w'+p[1]+'.'+p[2]);
  if(p[0]==='uoe'&&p.length>=4){const kk=['u','v','y'][+p[3]]+p[1]+'.'+p[2];if(MX[kk])gRender(kk)}
  if(p[0]==='check') gRender(p[1]+'.9');
  if(p[0]==='writing') wInit();
  renderSide(p[0]==='unit'||p[0]==='lesson'||p[0]==='check'||p[0]==='start'?+p[1]:-1,p[0]==='uoe',p[0]==='skills');
}
function renderSide(cur){
  const h=location.hash,E=lmsEntries(),on=h.startsWith('#/uoe')?'grammar':h.startsWith('#/writing')?'writing':h.startsWith('#/skills')?'reading':(h.match(/^#\/lms\/u\/(\w+)/)||[])[1]||(h==='#/lms'?'all':'');
  document.getElementById('wbList').innerHTML=lmsUnits(E).map(c=>`<li><a href="#/lms/u/${c.k}" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 ${on===c.k?'bg-orange-50 dark:bg-slate-800 font-semibold text-orange-600':''}"><span class="w-7 h-7 rounded-lg bg-orange-400 text-white grid place-items-center text-sm">${c.e}</span><span class="flex-1">${c.i<0?c.t:'Unit '+(c.i+1)}</span><span class="text-xs text-slate-400">${c.n}</span></a></li>`).join('');
  document.getElementById('wbList').insertAdjacentHTML('beforeend',`<li><a href="#/lms/extra" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 ${h.startsWith('#/lms/extra')?'bg-orange-50 dark:bg-slate-800 font-semibold text-orange-600':''}"><span class="w-7 h-7 rounded-lg bg-orange-400 text-white grid place-items-center text-sm">💪</span><span class="flex-1">Extra practice</span><span class="text-xs text-slate-400">${CGE.extraCount()}</span></a></li>`);
  document.getElementById('unitList').innerHTML=U.map((u,i)=>`<li><a href="#/unit/${i}" class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 ${i===cur?'bg-blue-50 dark:bg-slate-800 font-semibold text-blue-700 dark:text-blue-300':''}"><span class="w-7 h-7 rounded-lg bg-blue-600 text-white grid place-items-center text-xs font-bold">${i+1}</span><span class="flex-1">${u.name}</span><span class="text-xs text-slate-400">${unitDone(i)}/9</span></a></li>`).join('');
}
window.addEventListener('hashchange',()=>CGE.navigate());

/* ---- interactions ---- */
let sel=null, order=[];
function initLesson(){
  sel=null; order=[];
  const L=document.getElementById('mL'),R=document.getElementById('mR');
  if(!L){mInit();return}
  const rnd=a=>[...a].sort(()=>Math.random()-.5);
  L.innerHTML=rnd(cur.MATCH).map(m=>`<button data-act="mL" data-k="${m[0]}" class="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 text-sm">${m[0]}</button>`).join('');
  R.innerHTML=rnd(cur.MATCH).map(m=>`<button data-act="mR" data-k="${m[0]}" class="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 text-sm">${m[1]}</button>`).join('');
  drawR();
}
function drawR(){
  document.getElementById('rOut').innerHTML=order.map(w=>`<span class="px-3 py-1 rounded-lg bg-blue-600 text-white">${w}</span>`).join('');
  const pool=cur.SENT.map((w,i)=>[w,i]).filter(x=>!order.includes(x[1]+'|'+x[0])).sort((a,b)=>(a[0].charCodeAt(0)*7+a[1]*3)%11-(b[0].charCodeAt(0)*7+b[1]*3)%11);
  document.getElementById('rPool').innerHTML=pool.map(([w,i])=>`<button data-act="rw" data-w="${w}" data-i="${i}" class="px-3 py-1 rounded-lg border border-slate-300 dark:border-slate-600">${w}</button>`).join('');
}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]'); if(!b) return;
  const a=b.dataset.act;
  if(a==='menu'){if(window.innerWidth>=1024){const c=document.body.classList.toggle('side-closed');try{localStorage.setItem('cge9side',c?'1':'0')}catch(_){}}else document.body.classList.toggle('menu-open')}
  else if(a==='theme'){const d=document.documentElement.classList.toggle('dark');try{localStorage.setItem('theme',d?'dark':'light')}catch(_){}}
  else if(a==='uoe'){const n=b.dataset.n;document.querySelectorAll('[data-uoe]').forEach(x=>x.classList.toggle('hidden',x.dataset.uoe!==n));document.querySelectorAll('.uoebtn').forEach(x=>{const on=x===b;x.classList.toggle('bg-blue-600',on);x.classList.toggle('text-white',on);x.classList.toggle('border-blue-600',on)})}
  else if(a==='tab'){
    document.querySelectorAll('[data-p]').forEach(x=>x.classList.toggle('hidden',x.dataset.p!==b.dataset.t));
    document.querySelectorAll('.tabbtn').forEach(x=>{const on=x===b;x.classList.toggle('bg-blue-600',on);x.classList.toggle('text-white',on);x.classList.toggle('border-blue-600',on)})}
  else if(a==='mc'){
    const q=cur.Q[+b.dataset.q],box=b.closest('.qbox'),fb=box.querySelector('.fb');
    box.querySelectorAll('.opt').forEach(x=>x.classList.remove('correct','wrong'));
    const ok=+b.dataset.o===q.a; b.classList.add(ok?'correct':'wrong');
    fb.classList.remove('hidden'); fb.textContent=(ok?'✅ Đúng! ':'❌ Chưa đúng. ')+q.e;
  }
  else if(a==='fill'){
    const v=document.getElementById('fill').value.trim().toLowerCase(),f=document.getElementById('fillfb');
    f.textContent=cur.FILL.a.includes(v)?'✅ Chính xác!':'❌ Thử lại nhé'; f.style.color=cur.FILL.a.includes(v)?'#16a34a':'#dc2626';
  }
  else if(a==='mL'){document.querySelectorAll('[data-act=mL]').forEach(x=>x.style.outline='');sel=b.dataset.k;b.style.outline='2px solid #2563eb'}
  else if(a==='mR'){
    if(!sel){document.getElementById('mfb').textContent='Chọn một từ bên trái trước.';return}
    const ok=sel===b.dataset.k;
    if(ok){b.disabled=true;b.className+=' correct';const l=document.querySelector(`[data-act=mL][data-k="${sel}"]`);l.disabled=true;l.style.outline='';l.className+=' correct'}
    document.getElementById('mfb').textContent=ok?'✅ Đúng!':'❌ Chưa khớp, thử lại.'; sel=null;
    if(document.querySelectorAll('[data-act=mR]:not(:disabled)').length===0) document.getElementById('mfb').textContent='🎉 Hoàn thành matching!';
  }
  else if(a==='rw'){order.push(b.dataset.i+'|'+b.dataset.w);drawR();
    document.getElementById('rOut').innerHTML=order.map(x=>`<span class="px-3 py-1 rounded-lg bg-blue-600 text-white">${x.split('|')[1]}</span>`).join('');
    if(order.length===cur.SENT.length){const s=order.map(x=>x.split('|')[1]).join(' ');const ok=s===cur.SENT.join(' ');
      const f=document.getElementById('rfb');f.textContent=ok?'✅ Đúng thứ tự!':'❌ Chưa đúng: '+s;f.style.color=ok?'#16a34a':'#dc2626'}}
  else if(a==='rReset'){order=[];document.getElementById('rfb').textContent='';drawR()}
  else if(a==='uoedone'){const k=b.dataset.k;done[k]=!done[k];save();b.textContent=done[k]?'✅ Đã học':'Đánh dấu đã học'}
  else if(a==='complete'){const k=key(b.dataset.u,b.dataset.l);done[k]=!done[k];save();b.textContent=done[k]?'✅ Đã hoàn thành':'Đánh dấu hoàn thành';renderSide(+b.dataset.u)}
  else if(a==='reset'){if(confirm('Xóa toàn bộ tiến độ?')){done={};save();route()}}
});

try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}
