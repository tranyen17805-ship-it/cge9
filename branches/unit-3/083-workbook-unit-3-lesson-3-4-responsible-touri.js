/* ===== WORKBOOK · Unit 3 · Lesson 3.4 Responsible tourism · THE RESPONSIBLE TRAVEL CHECK (mission key w2.3) ===== */
{const K='w2.3',
esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),
bx='mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700',
okc='!bg-green-100 !border-green-400',bdc='!bg-red-100 !border-red-400',
sup='<span class="ml-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">🧩 Web support · not from the Workbook</span>',
wc=t=>((t||'').match(/\S+/g)||[]).length,
inp=(S,k,ph)=>`<input data-g="${k}" value="${esc(S.t[k]||'')}" placeholder="${ph}" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/>`,
PH=["Yes, please!","Is it a kind of treehouse?","Where did you eat?","They’re beautiful!","No electricity then?","Did you see any wildlife?","Did you bring back any souvenirs?"],
DLG=[["S","Do you want to see some photos from our holiday in Thailand?"],["V",0],["S","This is our eco-hotel, up in the trees. It has a very low impact on the environment."],["V",1],["S","Sort of! The houses are owned by people in the village. We used solar energy for lighting and wood for a fire."],["V",2],["S","Only from the sun! The food was all locally sourced – the villagers prepared it for us."],["V",3],["S","In the village, with the families. On the second day we went into the forest with a local guide."],["V",4],["S","Yes – birds and monkeys! Look at this photo."],["V",5],["S","Thanks! We kept to the trail and we were told not to leave any rubbish. I bought something special too."],["V",6],["S","Yes! These wooden bowls were made by craft workers in the village."]],
GP=[
{a:0,tp:"Accepting an offer",fn:"accepting an offer",c:"Shuli asks “Do you want to see some photos…?” It is an offer. How do you say yes politely?"},
{a:1,tp:"Question about the hotel",fn:"asking for information",c:"Shuli says the hotel is up in the trees. What question could Victor ask about the hotel?"},
{a:4,tp:"Checking information about electricity",fn:"checking / inferencing information",c:"Shuli talks about solar energy and wood for a fire. What does Victor work out from that?"},
{a:2,tp:"Question about food",fn:"asking about food",c:"Shuli says the villagers prepared the food. What question naturally comes next? Her next sentence says where."},
{a:5,tp:"Question about wildlife",fn:"asking about wildlife",c:"Shuli mentions the forest and a local guide. Her answer is “birds and monkeys”."},
{a:3,tp:"Reaction to photos",fn:"reacting positively",c:"Shuli says “Look at this photo.” How does Victor react to a photo of birds and monkeys?"},
{a:6,tp:"Question about souvenirs",fn:"asking about souvenirs",c:"Shuli says she bought something special. Her next sentence is about wooden bowls."}],
CD=[["eco-friendly accommodation",1,"The hotel was an eco-hotel with a very low impact on the environment."],["air conditioning",0,"Shuli used solar energy for lighting and wood for a fire. Air conditioning is not mentioned."],["helping endangered species",0,"Shuli saw birds and monkeys, but she does not say she helped endangered species."],["international hotel chain",0,"The houses are owned by people in the village. It was not an international chain."],["litter",0,"They were told not to leave any rubbish."],["helping local economy",1,"The houses are owned by people in the village, and craft workers made the bowls."],["eating local produce",1,"Shuli says the food was all locally sourced."],["saving precious resources",1,"They used solar energy for lighting."],["buying local souvenirs",1,"The wooden bowls were made by craft workers in the village."],["wildlife products",0,"Shuli’s souvenirs were wooden bowls, not wildlife products."]],
EV=[["eco-friendly accommodation","It has a very low impact on the environment."],["helping local economy","The houses are owned by people in the village."],["eating local produce","The food was all locally sourced."],["saving precious resources","We used solar energy for lighting."],["buying local souvenirs","These wooden bowls were made by craft workers in the village."],["litter (NOT on Shuli’s holiday)","We were told not to leave any rubbish."]],
EO=[3,0,5,1,4,2],
FAC=["eco-friendly accommodation","local food","solar energy","the forest","wildlife","a local guide","no litter","local souvenirs"],
SCAF=["I’d like to … because …","I wouldn’t like … because …","I’d be interested in … because …","I don’t think I’d enjoy … because …"],
VL=[["🌱 Protecting nature","n"],["🏘️ Supporting local people","c"],["🍜 Eating local food","c"],["🐘 Protecting wildlife","n"],["🧹 Keeping places clean","n"],["🎨 Buying local products","c"],["🏨 Comfortable accommodation","k"]],
SC=["complete a conversation about a holiday","understand vocabulary connected with responsible tourism","identify what describes Shuli’s holiday","find evidence in the conversation","talk about what I would / wouldn’t like"],
prof=v=>{const n=v.filter(i=>VL[i][1]==='n').length,c=v.filter(i=>VL[i][1]==='c').length,k=v.filter(i=>VL[i][1]==='k').length;
 if(n&&c)return ['🌿🏘️','LOCAL + NATURE TRAVELLER','You care about the place and the people who live there.'];
 if(c>=2)return ['🏘️🎨','CULTURE & COMMUNITY TRAVELLER','You like to support local people, food and products.'];
 if(n>=2)return ['🌱🐘','NATURE & WILDLIFE TRAVELLER','You want to protect nature and keep places clean.'];
 if(k&&(n||c))return ['🏨'+(n?'🌱':'🏘️'),'COMFORT + '+(n?'NATURE':'LOCAL')+' TRAVELLER','Comfort matters, but so does the place you visit.'];
 if(k)return ['🏨','COMFORT TRAVELLER','You like a comfortable trip. Which responsible choice could you add?'];
 return ['🌍','CURIOUS TRAVELLER','Every choice you make as a traveller counts.']};

GR.w34ch=(st,S,D)=>{D.pl=D.pl||{};D.ok=D.ok||{};D.wr=D.wr||{};D.h=D.h||{};const N=GP.length,done=Object.keys(D.ok).length,used=Object.values(D.pl);
let cur=D.cur;if(cur===undefined||D.ok[cur])cur=GP.findIndex((_,g)=>!D.ok[g]);
const slot=g=>gB('g_w34sl',`data-g="${g}"`,D.pl[g]!==undefined?esc(PH[D.pl[g]]):`＿＿＿ (${g+1})`,cur===g,(D.ok[g]?okc:D.wr[g]?bdc:'')+' !px-2 !py-0.5 mx-1'),
chat=DLG.map(l=>l[0]==='S'?`<div class="flex"><div class="max-w-[90%] px-3 py-2 rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"><b>Shuli:</b> ${esc(l[1])}</div></div>`:`<div class="flex justify-end"><div class="max-w-[90%] px-3 py-2 rounded-2xl border border-slate-200 dark:border-slate-600 bg-blue-50 dark:bg-slate-700 text-sm"><b>Victor:</b> ${slot(l[1])}</div></div>`).join('\n'),
hn=cur>=0?(D.h[cur]||0):0,
hp=cur>=0?`<div class="${bx} border-2 border-orange-300"><p class="text-sm font-bold">🔎 Gap ${cur+1}</p>${D.wr[cur]?`<p class="mt-1 text-sm text-red-600">Not quite. 🔎 Context clue: ${esc(GP[cur].c)}</p>`:'<p class="mt-1 text-sm">Tap a phrase, then tap the gap. Stuck? Use a hint.</p>'}${hn>0?'<p class="mt-1 text-sm">💡 1 · Look at the sentence immediately before the gap.</p>':''}${hn>1?'<p class="mt-1 text-sm">💡 2 · Is Victor asking about the hotel, food, electricity, wildlife or souvenirs? Or is he reacting?</p>':''}${hn>2?`<p class="mt-1 text-sm">💡 3 · This line is: <b>${esc(GP[cur].tp)}</b>.</p>`:''}${hn<3?`<button data-act="g_w34ht" data-g="${cur}" class="mt-2 ${mbtn}">💡 Hint ${hn+1}/3</button>`:''}</div>`:'';
return mBox('💬 MISSION 01 · COMPLETE THE HOLIDAY CHAT · '+done+' / '+N,`<p class="mt-2 text-sm">Complete Victor’s lines. Tap a phrase, then tap a gap. Use the context before and after each gap. ${sup}</p>
<p class="mt-1 text-xs text-slate-500">Dialogue rebuilt from the lesson notes · compare your answers with Workbook p.47.</p>
<div class="${bx}"><p class="text-xs font-bold">PHRASE BOX</p><div class="mt-2 flex flex-wrap gap-2">${PH.map((p,j)=>gB('g_w34ph',`data-j="${j}" ${used.includes(j)?'disabled':''}`,esc(p),D.sel===j,used.includes(j)?'opacity-40':'')).join('')}</div></div>
<div class="${bx} space-y-2"><p class="text-xs font-bold">🏝️ SHULI &amp; VICTOR</p>${chat}</div>${hp}
${done<N?`<button data-act="g_w34ck" ${Object.keys(D.pl).length<N?'disabled':''} class="mt-3 ${mbtn}">Check answers</button>${Object.keys(D.pl).length<N?'<span class="ml-2 text-xs text-slate-500">Fill all 7 gaps first.</span>':''}`:`<p class="mt-3 text-sm font-semibold text-green-600">🎉 The conversation is complete!</p>
<div class="${bx}"><p class="text-sm font-bold">🗣️ What does each line do? Tap a line of Victor’s. ${sup}</p><div class="mt-2 flex flex-wrap gap-2">${GP.map((g,i)=>gB('g_w34fn',`data-g="${i}"`,esc(PH[g.a]),D.fv===i)).join('')}</div>${D.fv!==undefined?`<p class="mt-2 text-sm">“${esc(PH[GP[D.fv].a])}” → <b>${GP[D.fv].fn}</b></p>`:''}</div>`}`)};

GR.w34sc=(st,S,D)=>{D.z=D.z||{};const sel=D.s,N=CD.length,pl=Object.keys(D.z).length,sc=CD.filter((c,i)=>D.z[i]===c[1]).length,
chip=i=>{const c=CD[i],t=D.ck?(D.z[i]===c[1]?okc:bdc):'';return gB('g_w34cd',`data-i="${i}"`,esc(c[0]),sel===i,t+' !px-2 !py-1')},
zone=(v,t,cls)=>`<div class="${bx} border-2 ${cls}"><p class="text-xs font-bold">${t}</p><div class="mt-2 flex flex-wrap gap-2 min-h-[2.5rem]">${CD.map((_,i)=>D.z[i]===v?chip(i):'').join('')}</div><button data-act="g_w34zn" data-v="${v}" ${sel===undefined?'disabled':''} class="mt-2 ${mbtn}">⬇️ Put the selected card here</button></div>`,
cl=D.ck&&D.cl!==undefined?CD[D.cl]:null;
return mBox('🔎 MISSION 02 · RESPONSIBLE OR NOT?',`<p class="mt-2 text-sm">Which words describe Shuli’s holiday? Tap a card, then tap a zone. Think about what Shuli said in the chat.</p>
<div class="${bx} text-center"><p class="font-extrabold">🏝️ SHULI’S HOLIDAY</p></div>
<div class="${bx}"><p class="text-xs font-bold">SCANNER · ${N-pl} cards left</p><div class="mt-2 flex flex-wrap gap-2">${CD.map((_,i)=>D.z[i]===undefined?chip(i):'').join('')}</div></div>
<div class="grid sm:grid-cols-2 gap-3">${zone(1,'🌱 DESCRIBES SHULI’S HOLIDAY ✓','border-green-300')}${zone(0,'🚫 DOESN’T DESCRIBE SHULI’S HOLIDAY ✗','border-slate-300')}</div>
<button data-act="g_w34sk" ${pl<N?'disabled':''} class="mt-3 ${mbtn}">Check</button>
${D.ck?`<p class="mt-3 text-sm font-bold ${sc>=8?'text-green-600':'text-red-600'}">🌱 ${sc}/${N} correct ${sc>=8?'· Passed!':'· Fix the red cards, then check again (8/10 to pass).'}</p><p class="text-xs text-slate-500">Tap any card to see the source clue.</p>`:''}
${cl?`<div class="${bx} border-2 border-orange-300"><p class="text-sm font-bold">${esc(cl[0])} ${cl[1]?'✓ describes':'✗ doesn’t describe'} her holiday</p><p class="mt-1 text-sm">🔎 Source clue: ${esc(cl[2])}</p></div>`:''}`)};

GR.w34ev=(st,S,D)=>{D.m=D.m||{};const N=EV.length,done=Object.keys(D.m).length;
return mBox('🔍 MISSION 03 · EVIDENCE CHECK · '+done+' / '+N,`<p class="mt-2 text-sm">Where did you find the evidence? Tap a claim, then tap the sentence from the chat that proves it. ${sup}</p>
<div class="${bx}"><p class="text-xs font-bold">CLAIM</p><div class="mt-2 space-y-2">${EV.map((e,i)=>`<div>${gB('g_w34ec',`data-i="${i}" ${D.m[i]?'disabled':''}`,esc(e[0]),D.s===i,D.m[i]?okc:'')}${D.m[i]?`<p class="mt-1 text-sm text-green-700">🟢 Evidence: “${esc(e[1])}”</p>`:''}</div>`).join('')}</div></div>
<div class="${bx}"><p class="text-xs font-bold">EVIDENCE FROM THE CHAT</p><div class="mt-2 flex flex-col gap-2">${EO.map(j=>gB('g_w34ee',`data-j="${j}" ${D.m[j]?'disabled':''}`,'“'+esc(EV[j][1])+'”',false,D.m[j]?'opacity-40':'')).join('')}</div></div>
${D.bad?`<p class="mt-2 text-sm text-red-600">${D.bad}</p>`:''}${done===N?'<p class="mt-2 text-sm font-semibold text-green-600">🎉 Every claim has evidence. Claim → evidence!</p>':''}`)};

GR.w34my=(st,S,D)=>{D.p=D.p||{};const ch=Object.keys(D.p).map(Number);
return mBox('💭 CHALLENGE · MY RESPONSIBLE HOLIDAY',`<p class="mt-2 text-sm">What would you like / not like about Shuli’s holiday? <b>Step 1:</b> choose.</p>
${FAC.map((f,i)=>`<div class="${bx} flex flex-wrap items-center gap-2"><span class="text-sm font-medium mr-2">${esc(f)}</span>${gB('g_w34lk',`data-i="${i}" data-v="1"`,'❤️ I would like',D.p[i]===1)}${gB('g_w34lk',`data-i="${i}" data-v="0"`,'🙅 I wouldn’t like',D.p[i]===0)}</div>`).join('')}
${ch.length?`<p class="mt-3 text-sm"><b>Step 2:</b> Why? Finish each sentence. ${sup}</p><div class="${bx}"><p class="text-xs font-bold">SENTENCE HELP</p><ul class="mt-1 text-sm list-disc pl-5">${SCAF.map(x=>`<li>${x}</li>`).join('')}</ul></div>${ch.map(i=>`<div class="${bx}"><p class="text-sm">${D.p[i]===1?'I’d like':'I wouldn’t like'} <b>${esc(FAC[i])}</b> because…</p>${inp(S,'w34e'+i,'because …')}</div>`).join('')}
<button data-act="g_w34cx" class="mt-3 ${mbtn}">Check my ideas</button>${D.bad?`<p class="mt-2 text-sm text-red-600">${D.bad}</p>`:''}${D.sd?'<p class="mt-2 text-sm font-semibold text-green-600">🎉 You explained what you would and wouldn’t like!</p>':''}`:''}`)};

GR.w34tv=(st,S,D)=>{D.v=D.v||[];const p=D.pr?prof(D.v):null;
return mBox('🌍 OPTIONAL · MY TRAVEL VALUES',`<p class="mt-2 text-sm">What matters most to you when you travel? Choose up to 3. ${sup}</p><div class="${bx}"><div class="flex flex-wrap gap-2">${VL.map((v,i)=>gB('g_w34vs',`data-i="${i}" ${!D.v.includes(i)&&D.v.length>=3?'disabled':''}`,v[0],D.v.includes(i))).join('')}</div></div>
<div class="mt-3 flex flex-wrap gap-2"><button data-act="g_w34vp" ${D.v.length?'':'disabled'} class="${mbtn}">Make my profile</button><button data-act="g_w34vk" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600">Skip this part →</button></div>
${D.sk&&!p?'<p class="mt-2 text-sm text-slate-500">Skipped. Press “Hoàn thành chặng” to continue.</p>':''}${p?`<div class="${bx} text-center"><p class="text-3xl">${p[0]}</p><p class="mt-1 text-xs font-bold">YOUR RESPONSIBLE TRAVELLER PROFILE</p><p class="font-extrabold">${p[1]}</p><p class="text-sm">${p[2]}</p></div>`:''}`)};

MX[K]={code:"WORKBOOK 3.4",title:"The Responsible Travel Check",mx:110,q:"Can you recognise what responsible tourism looks like – and talk about it? · RECOGNISE → UNDERSTAND → CLASSIFY → PERSONALISE",
end:{t:"🏆 RESPONSIBLE TRAVELLER – BADGE EARNED",did:"You completed a holiday chat, classified what describes Shuli’s holiday, found evidence in the conversation, and said what you would and wouldn’t like. COMPLETE → CLASSIFY → EVIDENCE → PERSONALISE.",r:"One responsible-tourism idea I remember: … One thing I would like to try: …"},steps:[
{i:"🌱",n:"Mission brief",t:"bucket",x:0,h:"🌱 THE RESPONSIBLE TRAVEL CHECK – 💬 COMPLETE the holiday chat · 🔎 CLASSIFY Shuli’s holiday · 🔍 FIND the evidence · 💭 SAY what you would like.",lab:["▶️ START"],items:[["Can you recognise what responsible tourism looks like – and talk about it?",-1]],sg:"RECOGNISE → UNDERSTAND → CLASSIFY → PERSONALISE"},
{i:"💬",n:"Mission 01 · Holiday Chat",id:"ch",t:"w34ch",x:30},
{i:"🔎",n:"Mission 02 · Responsible or Not?",id:"sc",t:"w34sc",x:30},
{i:"🔍",n:"Mission 03 · Evidence Check",id:"ev",t:"w34ev",x:20},
{i:"💭",n:"Challenge · My Responsible Holiday",id:"my",t:"w34my",x:20},
{i:"🌍",n:"Optional · My Travel Values",id:"tv",t:"w34tv",x:0},
{i:"📋",n:"Self-check",t:"bucket",x:2,h:"🌱 RESPONSIBLE TRAVEL CHECK – Can I…",lab:["✅ Yes","🔄 Not yet"],items:SC.map(x=>["I can "+x+".",-1])}
]};

document.addEventListener('click',e=>{const b=e.target.closest('[data-act^="g_w34"]');if(!b||b.disabled||GK!==K)return;const S=gS(K),D=gD(S,S.s),a=b.dataset.act,d=b.dataset,i=+d.i,N=GP.length;
if(a==='g_w34ph'){D.sel=D.sel===+d.j?undefined:+d.j}
else if(a==='g_w34sl'){const g=+d.g;if(!D.ok[g]){if(D.sel!==undefined){D.pl[g]=D.sel;D.sel=undefined;delete D.wr[g]}else if(D.pl[g]!==undefined&&D.cur===g){delete D.pl[g];delete D.wr[g]}D.cur=g}}
else if(a==='g_w34ht'){D.h[+d.g]=Math.min(3,(D.h[+d.g]||0)+1)}
else if(a==='g_w34ck'){GP.forEach((p,g)=>{if(D.pl[g]!==undefined&&!D.ok[g]){if(D.pl[g]===p.a){D.ok[g]=1;delete D.wr[g];gAw(S,'ch'+g,4)}else D.wr[g]=1}});D.cur=undefined;if(Object.keys(D.ok).length===N){gAw(S,'chb',2);S.ok[S.s]=1}}
else if(a==='g_w34fn'){D.fv=+d.g}
else if(a==='g_w34cd'){if(D.ck)D.cl=i;D.s=D.s===i?undefined:i}
else if(a==='g_w34zn'){if(D.s!==undefined){D.z[D.s]=+d.v;D.s=undefined;D.ck=0}}
else if(a==='g_w34sk'){if(Object.keys(D.z).length===CD.length){D.ck=1;if(CD.filter((c,j)=>D.z[j]===c[1]).length>=8){gAw(S,'sc',30);S.ok[S.s]=1}}}
else if(a==='g_w34ec'){D.s=D.s===i?undefined:i;D.bad=''}
else if(a==='g_w34ee'){const j=+d.j;if(D.s===undefined)D.bad='Choose a claim first.';else if(j===D.s){D.m[j]=1;D.s=undefined;D.bad='';gAw(S,'ev'+j,3);if(EV.every((_,k)=>D.m[k])){gAw(S,'evb',2);S.ok[S.s]=1}}else D.bad='Not this one. Look back at the chat: which sentence proves that claim?'}
else if(a==='g_w34lk'){const v=+d.v;if(D.p[i]===v)delete D.p[i];else D.p[i]=v;D.sd=0;D.bad=''}
else if(a==='g_w34cx'){const ok=v=>Object.keys(D.p).filter(k=>D.p[k]===v&&wc(S.t['w34e'+k])>=3).length;if(ok(1)>=1&&ok(0)>=1){D.sd=1;D.bad='';gAw(S,'my',20);S.ok[S.s]=1}else D.bad='Choose at least one thing you would like and one you wouldn’t like, and finish each “because…” (3+ words).'}
else if(a==='g_w34vs'){const x=D.v.indexOf(i);if(x>=0)D.v.splice(x,1);else if(D.v.length<3)D.v.push(i);D.pr=0}
else if(a==='g_w34vp'){D.pr=1;S.ok[S.s]=1}
else if(a==='g_w34vk'){D.sk=1;S.ok[S.s]=1}
gRender(K)});
}


