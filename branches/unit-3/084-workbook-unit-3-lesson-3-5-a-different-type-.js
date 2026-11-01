/* ===== WORKBOOK · Unit 3 · Lesson 3.5 A different type of family holiday · THE WILDLIFE CONSERVATION LAB (mission key w2.4) ===== */
{const K='w2.4',
esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),
bx='mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700',
okc='!bg-green-100 !border-green-400',bdc='!bg-red-100 !border-red-400',
sup='<span class="ml-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">🧩 Web support · not from the Workbook</span>',
wc=t=>((t||'').match(/\S+/g)||[]).length,
WD=[["endan","gered"],["spe","cies"],["mon","itor"],["conser","vation"],["pro","tect"],["sur","vival"],["ne","glect"],["co","existence"]],
WS=WD.map(p=>p[0]+p[1]),
DF=["At risk of becoming extinct.","Types of animals, birds or fish.","Watching and observing something to check its safety.","Protecting something from destruction.","Keep safe from harm or injury.","Continuing to live, despite problems.","Not looking after something.","When species live together."],
CN=["a danger of disappearing","a group of the same kind of animal","keeping an eye on","keeping nature safe","stopping harm","staying alive","no care","sharing a place"],
RL=[["risk","extinct","rare"],["animals","birds","fish"],["watch","check","safety"],["protect","destruction","nature"],["safe","harm","injury"],["live","problems","continue"],["care","missing","ignored"],["live together","species","share"]],
QZ=[[2,[2,4,0,6]],[5,[1,5,3,7]],[6,[6,0,7,4]],[7,[3,7,2,5]]],
bank=w=>{const p=WD[w],a=[p[1],WD[(w+3)%8][1],p[0],WD[(w+5)%8][0]],r=w%4;return a.slice(r).concat(a.slice(0,r))},
dopts=w=>{const a=[w,(w+2)%8,(w+4)%8],r=(w+1)%3;return a.slice(r).concat(a.slice(0,r))},
cw=D=>D.cur!==undefined?D.cur:WD.findIndex((_,i)=>!(D.ok||{})[i]),
PS=["Visit our wildlife sanctuary! We work hard to ",0," wildlife from harm. Many of our animals are ",1," species, so we ",2," their numbers carefully to check that they are safe, and we do everything we can to ensure their ",3,". The ",4," of forests and rivers is our main aim, because the ",5," of their natural habitat is putting animals in danger. We also look after animals that have been neglected or mistreated. Join us, and help create the peaceful ",6," of humans and wildlife."],
GW=[4,0,2,5,3,6,7],B3=[3,0,6,4,7,5,2],
CF=["protect wildlife","endangered species","monitor their numbers","ensure their survival","the conservation of forests and rivers","the neglect of their natural habitat","the coexistence of humans and wildlife"],
RS=[[["wildlife needs to be kept safe from harm","wildlife needs to be watched and counted","wildlife needs to be left without care"],0],
[["the species are at risk of becoming extinct","the species live together peacefully","the species are not looked after"],0],
[["we watch and observe to check they are safe","we keep them safe from harm","we do not look after them"],0],
[["the animals must continue to live despite problems","the animals must be watched","the animals are not looked after"],0],
[["forests and rivers need protecting from destruction","forests and rivers should be ignored","forests and rivers live together"],0],
[["nobody is looking after the habitat","people are watching the habitat","people are protecting the habitat"],0],
[["humans and wildlife living together","humans and wildlife at risk","humans and wildlife being watched"],0]],
MAP=[["🐦 ANIMALS",[1,0]],["🔍 ACTIONS",[2,4]],["🌳 ENVIRONMENT",[3]],["❤️ OUTCOMES",[5,7]],["⚠️ PROBLEMS",[6]]],
COL=["ensure + survival","neglect + natural habitat","neglected + animals","coexistence of A and B (humans and wildlife)"],
Q=[["We need to ensure the survival of endangered species because","w35a0"],["The conservation of rainforests is important because","w35a1"]],
CHI=["🌳 protect ecosystems","🐾 protect animals","🌍 future generations","🏠 protect natural habitats","⚖️ maintain balance"],
SIT=[["🐘","A species is becoming endangered.",0],["🌳","A rainforest is being destroyed.",3],["🐒","Animals are being neglected.",6],["🏘️","People and wildlife are having difficulty living together.",7]],
VOC=[0,3,6,7],ACT=["monitor","protect","conserve"],
CKL=["build the eight wildlife vocabulary words","understand their meanings","use them in a wildlife context","understand the wildlife sanctuary text","explain why endangered species should be protected","explain why rainforest conservation matters"];
const ra=a=>a.map(x=>`<span class="px-2 py-0.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm">${esc(x)}</span>`).join(' → ');

GR.w35bw=(st,S,D)=>{D.ok=D.ok||{};D.b=D.b||[];const N=8,done=Object.keys(D.ok).length,w=cw(D);
const all=done===N&&D.ok[w]&&D.cur===undefined;
const head='🧩 MISSION 01 · BUILD THE WORD · '+done+' / '+N;
if(w<0)return mBox(head,`<p class="mt-2 text-sm font-semibold text-green-600">🎉 You built all 8 words!</p>${WS.map((x,i)=>`<p class="mt-1 text-sm">🟢 <b>${x}</b> = ${DF[i].toLowerCase()}</p>`).join('')}`);
const word=WS[w];
if(D.ok[w])return mBox(head,`<div class="${bx} text-center"><p class="text-xs font-bold">FORM → WORD → MEANING</p><p class="mt-1">${WD[w][0]} + ${WD[w][1]}</p><p class="text-2xl font-extrabold">${word} <button data-act="g_w35sp" data-w="${word}" class="ml-1 px-2 rounded-lg border border-slate-300 text-base">🔊</button></p><p class="mt-1 text-sm text-green-600">🟢 ${word} = ${DF[w].toLowerCase()}</p></div><button data-act="g_w35nx" class="mt-3 ${mbtn}">${done<N?'Next word →':'See all 8 words →'}</button>`);
if(D.ph===1)return mBox(head,`<div class="${bx} text-center"><p class="text-2xl font-extrabold">${word} <button data-act="g_w35sp" data-w="${word}" class="ml-1 px-2 rounded-lg border border-slate-300 text-base">🔊</button></p><p class="text-xs text-slate-500">Say it, then choose the meaning.</p></div><p class="mt-3 text-sm font-bold">What does “${word}” mean?</p><div class="mt-2 flex flex-col gap-2">${dopts(w).map(k=>gB('g_w35df',`data-k="${k}"`,esc(DF[k]),false,D.dw===k?bdc:'')).join('')}</div>${D.dw!==undefined?'<p class="mt-2 text-sm text-red-600">Not quite. Think about the parts of the word and try another meaning.</p>':''}`);
return mBox(head,`<p class="mt-2 text-sm">Word ${done+1} of ${N}. Tap two word parts, in order, to build a word. ${sup}</p>
<div class="${bx} text-center"><p class="text-xl font-extrabold tracking-wide">${esc(D.b[0]||'＿＿＿')} <span class="text-slate-400">+</span> ${esc(D.b[1]||'＿＿＿')}</p></div>
<div class="${bx}"><p class="text-xs font-bold">WORD PARTS</p><div class="mt-2 flex flex-wrap gap-2">${bank(w).map(p=>gB('g_w35pt',`data-p="${p}" ${D.b.includes(p)||D.b.length>=2?'disabled':''}`,p,false,D.b.includes(p)?'opacity-40':'')).join('')}</div><button data-act="g_w35un" ${D.b.length?'':'disabled'} class="mt-2 px-3 py-1 rounded-xl border border-slate-300 text-sm">↩️ Undo</button></div>
${D.bd?'<p class="mt-2 text-sm text-red-600">Those two parts do not make a word. Try again.</p>':''}`)};

GR.w35wm=(st,S,D)=>{D.vis=D.vis||{};D.qa=D.qa||{};D.qw=D.qw||{};const nv=Object.keys(D.vis).length,sw=D.sw,nq=Object.keys(D.qa).length;
return mBox('🔎 MISSION 02 · WHAT DOES IT MEAN? · '+nv+' / 8',`<p class="mt-2 text-sm">Tap each word to see its meaning, the big idea and related ideas. ${sup}</p>
<div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">${WS.map((x,i)=>gB('g_w35wm',`data-i="${i}"`,x.toUpperCase(),sw===i,D.vis[i]?okc+' !font-bold':'')).join('')}</div>
${sw!==undefined?`<div class="${bx} border-2 border-orange-300"><p class="font-extrabold">${WS[sw].toUpperCase()}</p><p class="mt-1 text-sm"><b>① Meaning:</b> ${DF[sw]}</p><p class="mt-1 text-sm"><b>② Concept:</b> ${CN[sw]}</p><p class="mt-1 text-sm"><b>③ Related idea:</b> ${ra(RL[sw])}</p></div>`:''}
${nv===8?`<p class="mt-3 text-sm font-bold">Which word do these related ideas lead to?</p>${QZ.map((q,i)=>`<div class="${bx}"><p class="text-sm">${ra(RL[q[0]])} → <b>?</b></p><div class="mt-2 flex flex-wrap gap-2">${q[1].map(k=>gB('g_w35qz',`data-q="${i}" data-o="${k}" ${D.qa[i]?'disabled':''}`,WS[k],D.qa[i]&&k===q[0],D.qw[i]===k?bdc:'')).join('')}</div>${D.qa[i]?`<p class="mt-1 text-sm text-green-600">✅ ${WS[q[0]]} = ${DF[q[0]].toLowerCase()}</p>`:''}</div>`).join('')}`:'<p class="mt-3 text-xs text-slate-500">Open all 8 words to unlock the quick check.</p>'}`)};

GR.w35sa=(st,S,D)=>{D.pl=D.pl||{};D.ok=D.ok||{};const N=GW.length,done=Object.keys(D.ok).length,used=Object.values(D.pl);
let cur=D.cur;if(cur===undefined||D.ok[cur])cur=GW.findIndex((_,g)=>!D.ok[g]);
const slot=g=>gB('g_w35sl',`data-g="${g}"`,D.pl[g]!==undefined?WS[D.pl[g]]:`＿＿＿ (${g+1})`,cur===g,(D.ok[g]?okc:'')+' !px-2 !py-0.5 mx-1'),
txt=PS.map(p=>typeof p==='number'?slot(p):esc(p)).join(''),
pn=cur>=0&&D.pl[cur]!==undefined?`<div class="${bx} border-2 border-orange-300"><p class="text-sm font-bold">🔍 CONTEXT CLUE · gap ${cur+1}: why does “${WS[D.pl[cur]]}” fit?</p><div class="mt-2 flex flex-col gap-2">${[0,1,2].map(x=>(x+cur)%3).map(k=>gB('g_w35rs',`data-g="${cur}" data-o="${k}"`,esc(RS[cur][0][k]),false)).join('')}</div></div>`:(cur>=0?`<p class="mt-2 text-xs text-slate-500">Tap a word in the box, then tap gap ${cur+1}.</p>`:'');
return mBox('🌳 MISSION 03 · SAVE THE SANCTUARY · '+done+' / '+N,`<p class="mt-2 text-sm">Complete the text with words from Mission 01. Place a word, then explain why it fits. ${sup}</p><p class="text-xs text-slate-500">Text rebuilt from the lesson notes · compare with Workbook p.48.</p>
<div class="${bx}"><p class="text-xs font-bold">WORD BOX</p><div class="mt-2 flex flex-wrap gap-2">${B3.map(j=>gB('g_w35cd',`data-j="${j}" ${used.includes(j)?'disabled':''}`,WS[j],D.sel===j,used.includes(j)?'opacity-40':'')).join('')}</div></div>
<div class="${bx}"><p class="text-sm leading-9">${txt}</p></div>${pn}${D.msg?`<p class="mt-2 text-sm text-red-600">${D.msg}</p>`:''}
${done===N?`<p class="mt-3 text-sm font-semibold text-green-600">🎉 Text complete!</p><div class="${bx}"><p class="text-xs font-bold">✅ CONFIRMED</p>${CF.map(x=>`<p class="text-sm">🟢 ${x}</p>`).join('')}</div>
<div class="${bx}"><p class="text-xs font-bold">🗺️ CONTEXT MAP ${sup}</p><div class="mt-2 grid sm:grid-cols-2 gap-2">${MAP.map(m=>`<div class="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600"><p class="text-xs font-bold">${m[0]}</p><p class="text-sm">${m[1].map(i=>'<mark class="bg-yellow-200 text-slate-900 rounded px-1">'+WS[i]+'</mark>').join(' ')}</p></div>`).join('')}</div></div>
<div class="${bx}"><p class="text-xs font-bold">🔗 COLLOCATIONS FROM THE TEXT</p><p class="mt-1 text-sm">${COL.join(' · ')}</p></div>`:''}`)};

GR.w35my=(st,S,D)=>{const k=n=>wc(S.t[Q[n][1]])>=4;
return mBox('💭 CHALLENGE · WHY DOES IT MATTER?',`<p class="mt-2 text-sm">Finish the two thoughts. Tap an idea to start, or write your own. ${sup}</p>
${Q.map((q,n)=>`<div class="${bx}"><p class="text-sm font-bold">${q[0]}…</p><div class="mt-2 flex flex-wrap gap-2">${CHI.map((c,j)=>gB('g_w35ch',`data-q="${n}" data-j="${j}"`,c,false,'!text-xs')).join('')}</div>${gTA(S,q[1],'because …')}${n===0?`<details class="mt-2"><summary class="text-sm cursor-pointer font-semibold">🧠 Optional · go deeper</summary><p class="mt-1 text-xs">What happens if we don’t?</p>${`<input data-g="w35b0" value="${esc(S.t.w35b0||'')}" placeholder="This means that …" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/>`}<p class="mt-2 text-xs">So…</p><input data-g="w35b1" value="${esc(S.t.w35b1||'')}" placeholder="Therefore, …" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/></details>`:''}</div>`).join('')}
<button data-act="g_w35cx" class="mt-3 ${mbtn}">Check my ideas</button>${D.bad?`<p class="mt-2 text-sm text-red-600">${D.bad}</p>`:''}${S.ok[S.s]?'<p class="mt-2 text-sm font-semibold text-green-600">🎉 You turned vocabulary into ideas!</p>':''}`)};

GR.w35cd=(st,S,D)=>{D.v=D.v||{};D.vw=D.vw||{};D.ac=D.ac||{};
return mBox('🌱 OPTIONAL · CONSERVATION DECISION',`<p class="mt-2 text-sm">Problem → vocabulary → action. ${sup}</p>
${SIT.map((s,i)=>`<div class="${bx}"><p class="text-sm font-bold">${s[0]} ${s[1]}</p><div class="mt-2 flex flex-wrap gap-2">${VOC.map(j=>gB('g_w35dv',`data-i="${i}" data-j="${j}" ${D.v[i]?'disabled':''}`,WS[j],D.v[i]&&j===s[2],D.vw[i]===j?bdc:'')).join('')}</div>
${D.v[i]?`<p class="mt-2 text-xs font-bold">What should happen?</p><div class="mt-1 flex flex-wrap gap-2">${ACT.map(a=>gB('g_w35da',`data-i="${i}" data-a="${a}"`,a,D.ac[i]===a)).join('')}</div>${D.ac[i]?`<p class="mt-2 text-sm text-green-600">✅ ${esc(s[1])} → <b>${WS[s[2]]}</b> → we should <b>${D.ac[i]}</b>.</p>`:''}`:''}</div>`).join('')}
<button data-act="g_w35sk" class="mt-3 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600">Skip this part →</button>${D.sk?'<p class="mt-2 text-sm text-slate-500">Skipped. Press “Hoàn thành chặng” to continue.</p>':''}`)};

GR.w35ck=(st,S,D)=>{D.k=D.k||{};
return mBox('✅ SELF-CHECK · 🐘 CAN I…',`<div class="mt-2 space-y-2">${CKL.map((x,i)=>gB('g_w35ck',`data-i="${i}"`,(D.k[i]?'✅ ':'☐ ')+'I can '+x+'.',D.k[i],'w-full text-left')).join('')}</div>${CKL.every((_,i)=>D.k[i])?'<p class="mt-2 text-sm font-semibold text-green-600">🏆 All ticked! Finish the lesson to earn your badge.</p>':'<p class="mt-2 text-xs text-slate-500">Tick every skill you can do. Not sure? Go back and practise.</p>'}`)};

MX[K]={code:"WORKBOOK 3.5",title:"The Wildlife Conservation Lab",mx:110,q:"Can you use the language of wildlife conservation to understand and talk about protecting animals? · WORD PARTS → WORD → MEANING → CONTEXT → IDEA",
end:{t:"🏆 WILDLIFE CONSERVATION EXPLORER – BADGE EARNED",did:"You built eight wildlife words, understood their meanings, used them in a wildlife sanctuary text and explained why conservation matters. FORM → WORD → MEANING → CONTEXT → IDEA.",r:"One word I want to remember: … One idea I remember: …"},steps:[
{i:"🐘",n:"Mission brief",t:"bucket",x:0,h:"🐘 THE WILDLIFE CONSERVATION LAB – 🧩 BUILD the words · 🔎 UNDERSTAND them · 🌳 USE them in a sanctuary text · 💭 EXPLAIN why it matters.",lab:["▶️ START"],items:[["Can you use the language of wildlife conservation to understand and talk about protecting animals?",-1]],sg:"WORD PARTS → WORD → MEANING → CONTEXT → IDEA"},
{i:"🧩",n:"Mission 01 · Build the Word",id:"bw",t:"w35bw",x:30},
{i:"🔎",n:"Mission 02 · What Does It Mean?",id:"wm",t:"w35wm",x:20},
{i:"🌳",n:"Mission 03 · Save the Sanctuary",id:"sa",t:"w35sa",x:30},
{i:"💭",n:"Challenge · Why Does It Matter?",id:"my",t:"w35my",x:20},
{i:"🌱",n:"Optional · Conservation Decision",id:"cd",t:"w35cd",x:0},
{i:"📋",n:"Self-check",id:"ck",t:"w35ck",x:10}
]};

document.addEventListener('click',e=>{const b=e.target.closest('[data-act^="g_w35"]');if(!b||b.disabled||GK!==K)return;const S=gS(K),D=gD(S,S.s),a=b.dataset.act,d=b.dataset,i=+d.i,w=cw(D),vq=()=>{if(Object.keys(D.vis||{}).length===8&&Object.keys(D.qa||{}).length===4)S.ok[S.s]=1};
if(a==='g_w35sp'){try{const u=new SpeechSynthesisUtterance(d.w);u.lang='en-GB';speechSynthesis.cancel();speechSynthesis.speak(u)}catch(x){}}
else if(a==='g_w35pt'){D.b.push(d.p);D.bd=0;if(D.b.length===2){if(D.b.join('')===WS[w]){D.ph=1;D.cur=w}else{D.b=[];D.bd=1}}}
else if(a==='g_w35un'){D.b.pop();D.bd=0}
else if(a==='g_w35df'){const k=+d.k;if(k===w){D.ok[w]=1;D.cur=w;D.ph=0;D.b=[];D.dw=undefined;gAw(S,'bw'+w,3);if(Object.keys(D.ok).length===8){gAw(S,'bwb',6);S.ok[S.s]=1}}else D.dw=k}
else if(a==='g_w35nx'){D.cur=undefined;D.ph=0;D.b=[];D.dw=undefined;D.bd=0}
else if(a==='g_w35wm'){D.sw=i;if(!D.vis[i]){D.vis[i]=1;gAw(S,'wm'+i,2)}vq()}
else if(a==='g_w35qz'){const q=+d.q,o=+d.o;if(o===QZ[q][0]){D.qa[q]=1;delete D.qw[q];if(Object.keys(D.qa).length===4)gAw(S,'wmb',4)}else D.qw[q]=o;vq()}
else if(a==='g_w35cd'&&S.s===3){D.sel=D.sel===+d.j?undefined:+d.j}
else if(a==='g_w35sl'){const g=+d.g;if(!D.ok[g]){if(D.sel!==undefined){D.pl[g]=D.sel;D.sel=undefined;D.msg=''}else if(D.pl[g]!==undefined&&D.cur===g){delete D.pl[g]}D.cur=g}}
else if(a==='g_w35rs'){const g=+d.g,o=+d.o,wr=D.pl[g]===GW[g],rr=o===RS[g][1];if(!rr)D.msg='Not quite. Read the words around the gap again.';else if(!wr){D.msg='Your reason fits a different word: “'+DF[GW[g]].toLowerCase()+'” Which word means that? Try another word.';delete D.pl[g]}else{D.ok[g]=1;D.msg='';D.cur=undefined;gAw(S,'sa'+g,4);if(GW.every((_,j)=>D.ok[j])){gAw(S,'sab',2);S.ok[S.s]=1}}}
else if(a==='g_w35ch'){const key=Q[+d.q][1],t=CHI[+d.j].replace(/^\S+\s/,'');S.t[key]=(S.t[key]||'').replace(/\s+$/,'')+(S.t[key]?' ':'')+t}
else if(a==='g_w35cx'){const k=n=>wc(S.t[Q[n][1]])>=4;if(k(0))gAw(S,'my0',10);if(k(1))gAw(S,'my1',10);if(k(0)&&k(1)){D.bad='';S.ok[S.s]=1}else D.bad='Write at least 4 words for each sentence. Say WHY.'}
else if(a==='g_w35dv'){const j=+d.j;if(j===SIT[i][2]){D.v[i]=1;delete D.vw[i]}else D.vw[i]=j}
else if(a==='g_w35da'){D.ac[i]=d.a;if(SIT.every((_,j)=>D.ac[j]))S.ok[S.s]=1}
else if(a==='g_w35sk'){D.sk=1;S.ok[S.s]=1}
else if(a==='g_w35ck'){D.k[i]=!D.k[i];if(CKL.every((_,j)=>D.k[j])){gAw(S,'ck',10);S.ok[S.s]=1}}
gRender(K)});
}


