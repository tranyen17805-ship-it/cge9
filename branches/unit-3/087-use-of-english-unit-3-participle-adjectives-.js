/* ===== USE OF ENGLISH · Unit 3 · Participle adjectives (Workbook tr.52) · THE FEELING DETECTIVE (mission key v2.1) ===== */
{const K='v2.1',
esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),
bx='mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700',
okc='!bg-green-100 !border-green-400',bdc='!bg-red-100 !border-red-400',
sup='<span class="ml-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">🧩 Web support · wording rebuilt, check Workbook p.52</span>',
inp=(S,k,ph)=>`<input data-g="${k}" value="${esc(S.t[k]||'')}" placeholder="${esc(ph)}" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/>`,
nrm=t=>(t||'').trim().toLowerCase().replace(/\s+/g,' '),
cap=t=>t.charAt(0).toUpperCase()+t.slice(1),
ZN=["🧍 PERSON’S FEELING","🎿 THING / EXPERIENCE"],
CD=[["😮","I’m so excited!",0,"HOW I FEEL","I’m excited = I feel the excitement."],["🎢","This ski trip is so exciting!",1,"WHAT CAUSES THE FEELING","The trip is exciting = it causes the excitement."]],
CK=[["Present and past participles can both be an","adjective","."],["A past participle (-ed) usually describes how you","feel","."],["A present participle (-ing) usually describes the thing that","causes","the feeling."]],
SE=[["Travelling by train is so boring.","boring",1,"travelling by train"],["The boys were tired of playing their game.","tired",0,"the boys"],["The film had a thrilling ending.","thrilling",1,"the film’s ending"],["We were surprised by a man who was following us.","surprised",0,"we"],["They were walking uphill and all of them were exhausted.","exhausted",0,"all of them"],["It was an amazing trip that will not be forgotten.","amazing",1,"the trip"]],
ZS=["🎢 CAUSES THE FEELING · -ING","😮 FEELS THE FEELING · -ED"],
I3=[["boring",0],["tired",1],["thrilling",0],["surprised",1],["exhausted",1],["amazing",0]],
RG=[["The trip is","exciting",["excited","exciting"]],["I am","excited",["exciting","excited"]]],
PQ=[["A good guide can make people more "," in history.","interest","interested","interesting","ed","people","They feel the interest."],["Both locals and tourists are getting really "," about the festival.","excite","excited","exciting","ed","locals and tourists","They feel the excitement."],["Airports can be really "," places for travellers.","bore","bored","boring","ing","airports","They cause the boredom."],["The walk to the top of the hill was pretty ",",","tire","tired","tiring","ing","the walk","It causes the tiredness."],["but the view was ","!","amaze","amazed","amazing","ing","the view","It causes the amazement."],["A trip with friends is more "," than a trip alone.","excite","excited","exciting","ing","a trip","It causes the excitement."]],
CLS=["Feeling vs cause (-ed / -ing)","Need an adjective form","Meaning / adjective choice"],
HT=["Who feels it, and what causes it?","Which adjective form fits after this word?","Is this the right adjective for the meaning?"],
ER=[["You can find <u>detail</u> information on the website.",0,/^detailed$/,"detailed",1,"“detail” is a noun; before “information” we need the adjective form: detailed.","fix it…"],
["The café was <u>close</u>, so we went to a shop that was <u>opened</u>.",0,/^(?=.*closed)(?=.*\bopen\b)/,"closed / open",1,"The café was closed; the shop was open (adjective forms, not “close” or “opened”).","fix both: … / …"],
["The staff were really <u>welcoming</u>.",1,null,"",0,"Correct: the staff cause a welcome feeling, so -ing is right.","" ],
["Some people get quite <u>stressful</u> about travelling.",0,/^stressed$/,"stressed",0,"The people feel the stress, so -ed: stressed. (“stressful” describes what causes stress.)","fix it…"],
["I was a bit <u>concern</u> about the flight.",0,/^concerned$/,"concerned",1,"After “was” we need an adjective form: concerned.","fix it…"],
["The building was really <u>impressing</u>.",0,/^impressive$/,"impressive",2,"The building causes admiration, and the adjective needed is impressive.","fix it…"],
["I felt totally <u>relax</u> after the spa day.",0,/^relaxed$/,"relaxed",1,"After “felt” we need an adjective form: relaxed.","fix it…"],
["We were all really <u>pleased</u>.",1,null,"",0,"Correct: we feel pleased, so -ed is right.",""]],
FB=[["The trip was the most "," tour I have ever done.","excite","exciting","excited","the trip","ing"],["We were really "," at the end of the day, so we went to bed early.","tire","tiring","tired","we","ed"],["Some guests felt "," about the noise from the street.","annoy","annoying","annoyed","some guests","ed"],["The tour guide’s explanations were "," and often made us laugh.","amuse","amusing","amused","the explanations","ing"],["The old fort was the most "," part of the tour.","fascinate","fascinating","fascinated","the old fort","ing"],["We were "," by the weather, so we stayed inside.","disappoint","disappointing","disappointed","we","ed"]],
TK=["trip","place","activity","food","journey"],
CKL=[["🔎 I UNDERSTAND","I can identify a participle adjective."],["🔎 I UNDERSTAND","I know what -ed usually describes."],["🔎 I UNDERSTAND","I know what -ing usually describes."],["🎯 I CAN USE IT","I can choose the correct form from context."],["🎯 I CAN USE IT","I can correct common adjective-form mistakes."],["🎯 I CAN USE IT","I can explain why a form is correct."],["✍️ I CAN PRODUCE IT","I can use an -ing adjective for a cause."],["✍️ I CAN PRODUCE IT","I can use an -ed adjective for a feeling."]];

GR.w38df=(st,S,D)=>{D.a=D.a||{};D.g=D.g||{};D.w=D.w||{};const na=Object.keys(D.a).length;
return mBox('😮 MISSION 01 · WHAT’S THE DIFFERENCE? · '+na+' / 2',`<p class="mt-2 text-sm">Two sentences, one word family. Where does each sentence belong?</p>
${CD.map((c,i)=>`<div class="${bx}"><p class="text-lg font-extrabold">${c[0]} ${esc(c[1])}</p><div class="mt-2 flex flex-wrap gap-2">${ZN.map((z,k)=>gB('g_w38dz',`data-i="${i}" data-k="${k}" ${D.a[i]?'disabled':''}`,z,D.a[i]&&k===c[2],D.w[i]===k&&!D.a[i]?bdc:'')).join('')}</div>${D.a[i]?`<p class="mt-2 text-sm text-green-600">🟢 ${c[3]} · ${esc(c[4])}</p>`:D.w[i]!==undefined?'<p class="mt-2 text-sm text-red-600">Not yet. Is this about a person’s feeling, or about the thing that creates it?</p>':''}</div>`).join('')}
${na===2?`<div class="${bx}"><p class="text-xs font-bold">🔎 CHECK! Complete the rule</p>${CK.map((c,i)=>`<p class="mt-2 text-sm">${esc(c[0])} <b>${D.g[i]?c[1]:'＿＿＿'}</b> ${esc(c[2])}</p>${D.g[i]?'':`<div class="mt-1 flex flex-wrap gap-2">${(i%2?['causes','feel','adjective']:['feel','adjective','causes']).map(o=>gB('g_w38dg',`data-i="${i}" data-o="${o}"`,o,false,D.w['g'+i]===o?bdc:'')).join('')}</div>`}`).join('')}</div>`:''}`)};

GR.w38ff=(st,S,D)=>{D.f=D.f||{};D.r=D.r||{};D.q=D.q||{};const n=Object.keys(D.r).length,cur=SE.findIndex((_,i)=>!D.r[i]),s=SE[cur]||[];
return mBox('🔍 MISSION 02 · FIND THE FEELING · '+n+' / 6',`<p class="mt-2 text-sm">Click the <b>participle adjective</b> in each sentence. Then decide: feeling or cause?</p>
${SE.map((x,i)=>D.r[i]?`<p class="mt-2 text-sm text-green-600">🟢 ${esc(x[0])}<br>💡 <b>${x[1]}</b> ${x[2]?'describes the thing that causes the feeling.':'describes how '+x[3]+' feel.'}</p>`:'').join('')}
${cur<0?'<p class="mt-3 text-sm font-semibold text-green-600">✅ Six participle adjectives found and explained.</p>':`<div class="${bx}"><p class="text-xs font-bold">SENTENCE ${cur+1} / 6</p><div class="mt-2 flex flex-wrap gap-1">${s[0].split(' ').map((w,j)=>gB('g_w38tk',`data-i="${cur}" data-j="${j}" ${D.f[cur]?'disabled':''}`,esc(w),D.f[cur]&&w.replace(/[.,]/g,'')===s[1],'!px-2 !py-1 '+(D.w===cur+'.'+j?bdc:''))).join('')}</div>
${D.w&&!D.f[cur]?'<p class="mt-2 text-sm text-red-600">Not the participle adjective. Look for the word that describes a feeling, or the thing that causes it.</p>':''}
${D.f[cur]?`<p class="mt-3 text-sm font-bold">Is <u>${s[1]}</u> describing a feeling or the thing causing a feeling?</p><div class="mt-2 flex flex-col gap-2">${gB('g_w38qa',`data-i="${cur}" data-k="0"`,'😮 A feeling',false)}${gB('g_w38qa',`data-i="${cur}" data-k="1"`,'🎢 The thing causing a feeling',false)}</div>${D.q[cur]?`<p class="mt-2 text-sm text-red-600">Not quite. Think about “${s[3]}”: is it feeling something, or creating a feeling?</p>`:''}`:''}</div>`}`)};

GR.w38sc=(st,S,D)=>{D.pl=D.pl||{};D.rg=D.rg||{};D.w=D.w||{};const N=I3.length,n=Object.keys(D.pl).length,done=n===N;
return mBox('⚖️ MISSION 03 · CAUSE OR FEELING? · '+n+' / 6',`<p class="mt-2 text-sm">Tap a word, then tap the side where it belongs.</p>
<div class="${bx}"><div class="flex flex-wrap gap-2">${I3.map((w,i)=>gB('g_w38i3',`data-i="${i}" ${D.pl[i]!==undefined?'disabled':''}`,w[0],D.s===i,D.pl[i]!==undefined?'opacity-40':'')).join('')}</div></div>
<div class="mt-3 space-y-2">${ZS.map((z,c)=>`<div class="${bx} !mt-0"><button data-act="g_w38zn" data-c="${c}" ${D.s===undefined?'disabled':''} class="${mbtn} !text-sm">${z}</button><div class="mt-2 flex flex-wrap gap-2">${I3.map((w,i)=>D.pl[i]===c?`<span class="px-2 py-1 rounded-lg bg-green-100 border border-green-400 text-sm text-green-800 font-semibold">${w[0]}</span>`:'').join('')}</div></div>`).join('')}</div>
${D.msg?'<p class="mt-2 text-sm text-red-600">Not there. Is this word the thing that creates the feeling, or the feeling itself? Think of the sentence it came from.</p>':''}
${done?`<div class="${bx} border-2 border-orange-300"><p class="font-extrabold">🕵️ THE DETECTIVE RULE</p><p class="mt-1 text-sm"><b>-ed</b> → how you feel<br><b>-ing</b> → what causes the feeling</p><p class="mt-3 text-xs font-bold">Now use it:</p>${RG.map((r,j)=>`<p class="mt-2 text-sm">${r[0]} <b>${D.rg[j]?r[1]:'＿＿＿'}</b>.</p>${D.rg[j]?'':`<div class="flex flex-wrap gap-2">${r[2].map((o,k)=>gB('g_w38rg',`data-i="${j}" data-k="${k}"`,o,false,D.w['r'+j]===k?bdc:'')).join('')}</div>`}`).join('')}</div>`:''}`)};

GR.w38pc=(st,S,D)=>{D.ok=D.ok||{};D.wr=D.wr||{};const n=Object.keys(D.ok).length;
return mBox('🎯 MISSION 04 · CHOOSE THE RIGHT FORM · '+n+' / 6',`<p class="mt-2 text-sm">Complete each sentence. Type the word, or tap <b>-ed</b> / <b>-ing</b> to fill it in. ${sup}</p>
<button data-act="g_w38ph" class="mt-2 ${mbtn} !text-sm">🔍 Why? ${D.why?'ON':'OFF'}</button>
${PQ.map((p,i)=>{const g=p[p[5]==='ed'?3:4];return `<div class="${bx}"><p class="text-sm">${esc(p[0])}<b>${D.ok[i]?g:'＿＿＿'}</b>${esc(p[1])} <span class="text-xs">(${p[2]})</span></p>${D.why?`<p class="mt-1 text-xs">WHO / WHAT? <b>${p[6]}</b> → ${p[5]==='ed'?'feel(s) the feeling':'cause(s) the feeling'}</p>`:''}
${D.ok[i]?`<p class="mt-1 text-sm text-green-600">🟢 Who / what? ${p[6]}. ${p[7]} ✅ ${g}</p>`:`<div class="mt-2 flex flex-wrap gap-2 items-center">${gB('g_w38pf',`data-i="${i}" data-k="0"`,'-ed',false,'!px-3 !py-1')}${gB('g_w38pf',`data-i="${i}" data-k="1"`,'-ing',false,'!px-3 !py-1')}</div>${inp(S,'w38p'+i,'type the form of “'+p[2]+'”')}<button data-act="g_w38pk" data-i="${i}" class="mt-2 ${mbtn} !text-sm">Check</button>${D.wr[i]?`<p class="mt-1 text-sm text-red-600">${D.wr[i]}</p>`:''}`}</div>`}).join('')}`)};

GR.w38ed=(st,S,D)=>{D.d=D.d||{};D.fx=D.fx||{};D.cl=D.cl||{};D.ok=D.ok||{};D.w=D.w||{};const n=Object.keys(D.ok).length,cur=ER.findIndex((_,i)=>!D.ok[i]),L='abcdefgh',e=ER[cur]||[];
return mBox('🚨 MISSION 05 · ERROR DETECTIVE · '+n+' / 8',`<p class="mt-2 text-sm">🔎 Is the <u>underlined</u> part correct? If not, fix it and name the problem. ${sup}</p>
${ER.map((x,i)=>D.ok[i]?`<p class="mt-2 text-sm text-green-600">🟢 ${L[i]}. ${x[0]}${x[1]?'':' → <b>'+x[3]+'</b> · '+CLS[x[4]]}<br>💡 ${x[5]}</p>`:'').join('')}
${cur<0?'<p class="mt-3 text-sm font-semibold text-green-600">✅ Case closed! Not every error is -ed vs -ing: some need an adjective form or a different adjective.</p>':`<div class="${bx}"><p class="text-xs font-bold">CASE ${L[cur]}</p><p class="mt-1">${e[0]}</p>
${!D.d[cur]?`<div class="mt-3 flex gap-2">${gB('g_w38ed',`data-i="${cur}" data-k="1"`,'🟢 Correct',false)}${gB('g_w38ed',`data-i="${cur}" data-k="0"`,'🔴 Incorrect',false)}</div>`:''}
${D.d[cur]&&!D.fx[cur]?`<p class="mt-3 text-sm font-bold">🔴 Incorrect. Fix it:</p>${inp(S,'w38e'+cur,e[6])}<button data-act="g_w38ef" data-i="${cur}" class="mt-2 ${mbtn} !text-sm">Check</button>`:''}
${D.fx[cur]&&!D.cl[cur]?`<p class="mt-3 text-sm text-green-600">🟢 ${e[3]}</p><p class="mt-2 text-sm font-bold">What kind of problem did you find?</p><div class="mt-2 flex flex-col gap-2">${CLS.map((c,k)=>gB('g_w38ec',`data-i="${cur}" data-k="${k}"`,c,false,D.w['c'+cur]===k?bdc:'')).join('')}</div>`:''}
${D.w[cur]?`<p class="mt-2 text-sm text-red-600">${D.w[cur]}</p>`:''}</div>`}`)};

GR.w38fb=(st,S,D)=>{D.ok=D.ok||{};D.wr=D.wr||{};const n=Object.keys(D.ok).length;
return mBox('🔥 FINAL CHALLENGE · BUILD THE PERFECT FORM · '+n+' / 6',`<p class="mt-2 text-sm">Word → Context → Form. Find the subject, decide cause or feeling, then build the form. ${sup}</p>
${FB.map((f,i)=>{const g=f[6]==='ing'?f[3]:f[4];return `<div class="${bx}"><p class="text-xs font-bold">WORD · ${f[2]}</p><p class="mt-1 text-sm">${esc(f[0])}<b>${D.ok[i]?g:'＿＿＿'}</b>${esc(f[1])}</p>${D.ok[i]?`<div class="mt-1 text-sm text-green-600">↓ Subject: ${f[5]}<br>↓ ${f[6]==='ing'?'It causes the feeling':'They feel the feeling'}<br>↓ -${f[6]}<br>✅ ${g}</div>`:`${inp(S,'w38f'+i,'type the form of “'+f[2]+'”')}<button data-act="g_w38fc" data-i="${i}" class="mt-2 ${mbtn} !text-sm">Check</button>${D.wr[i]?`<p class="mt-1 text-sm text-red-600">${D.wr[i]}</p>`:''}`}</div>`}).join('')}`)};

GR.w38tm=(st,S,D)=>{const f=k=>(S.t[k]||'').trim();
return mBox('🌍 OPTIONAL · MY TRAVEL FEELINGS',`<p class="mt-2 text-sm">Pick one travel experience. Thing → <b>-ing</b>, me → <b>-ed</b>. <span class="text-xs">(Web extension · not from the Workbook · +10 XP)</span></p><div class="mt-2 flex flex-wrap gap-2">${TK.map((t,k)=>gB('g_w38ox',`data-k="${k}"`,t,D.k===k)).join('')}</div>
${D.k===undefined?'':`<div class="${bx}"><p class="text-xs font-bold">THE ${TK[D.k].toUpperCase()} → -ING</p><p class="text-sm">The ${TK[D.k]} was …</p>${inp(S,'w38o0','e.g. tiring')}<p class="mt-2 text-xs font-bold">ME → -ED</p><p class="text-sm">I was …</p>${inp(S,'w38o1','e.g. tired')}</div>`}
${D.bad?'<p class="mt-2 text-sm text-red-600">Choose an experience, then write an -ing word for the thing and an -ed word for you.</p>':''}
<div class="mt-3 flex flex-wrap gap-2"><button data-act="g_w38om" class="${mbtn}">Make my sentences</button><button data-act="g_w38ok" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600">Skip this part</button></div>
${D.sd?`<div class="${bx} border-2 border-orange-300"><p class="font-extrabold">🎢 The ${TK[D.k]} was ${esc(f('w38o0'))}.</p><p class="font-extrabold">😮 I was ${esc(f('w38o1'))}.</p></div>`:''}`)};

GR.w38ck=(st,S,D)=>{D.k=D.k||{};let last='';
return mBox('🧐 SELF-CHECK · I CAN…',`<div class="mt-2 space-y-2">${CKL.map((c,i)=>{const h=c[0]!==last?`<p class="mt-2 text-xs font-bold">${c[0]}</p>`:'';last=c[0];return h+gB('g_w38kc',`data-i="${i}"`,(D.k[i]?'✅ ':'☐ ')+esc(c[1]),D.k[i],'w-full text-left')}).join('')}</div>${CKL.every((_,i)=>D.k[i])?'<p class="mt-2 text-sm font-semibold text-green-600">🏅 All ticked! Finish the lesson to earn your badge.</p>':'<p class="mt-2 text-xs text-slate-500">Tick every skill you can do.</p>'}`)};

MX[K]={code:"USE OF ENGLISH",title:"The Feeling Detective",mx:130,q:"Can you tell the difference between how someone feels and what causes the feeling? · NOTICE → FIND → SORT → CHOOSE → CORRECT → PRODUCE",
end:{t:"🏅 FEELING DETECTIVE – BADGE EARNED",did:"You can now identify, choose and use participle adjectives to describe feelings and their causes: -ed for how you feel, -ing for what causes the feeling.",r:"One sentence with an -ing adjective (the cause) and one with an -ed adjective (the feeling): …"},steps:[
{i:"🎭",n:"Mission brief",t:"bucket",x:0,h:"🎭 THE FEELING DETECTIVE – 😮 DIFFERENCE · 🔍 FIND · ⚖️ SORT · 🎯 CHOOSE · 🚨 CORRECT · 🔥 BUILD.",lab:["▶️ START"],items:[["Can you tell the difference between how someone feels and what causes the feeling?",-1]],sg:"WHO FEELS IT? → WHAT CAUSES IT? → CHOOSE THE FORM"},
{i:"😮",n:"Mission 01 · What’s the Difference?",id:"df",t:"w38df",x:10},
{i:"🔍",n:"Mission 02 · Find the Feeling",id:"ff",t:"w38ff",x:15},
{i:"⚖️",n:"Mission 03 · Cause or Feeling?",id:"sc",t:"w38sc",x:20},
{i:"🎯",n:"Mission 04 · Choose the Right Form",id:"pc",t:"w38pc",x:25},
{i:"🚨",n:"Mission 05 · Error Detective",id:"ed",t:"w38ed",x:25},
{i:"🔥",n:"Final Challenge · Build the Perfect Form",id:"fb",t:"w38fb",x:25},
{i:"🌍",n:"Optional · My Travel Feelings",id:"tm",t:"w38tm",x:10},
{i:"🧐",n:"Self-check",id:"ck",t:"w38ck",x:0}
]};

document.addEventListener('click',e=>{const b=e.target.closest('[data-act^="g_w38"]');if(!b||b.disabled||GK!==K)return;const S=gS(K),D=gD(S,S.s),a=b.dataset.act,d=b.dataset,i=+d.i,k=+d.k;
if(a==='g_w38dz'){D.a=D.a||{};D.w=D.w||{};if(k===CD[i][2]){D.a[i]=1;delete D.w[i];gAw(S,'df'+i,2)}else D.w[i]=k}
else if(a==='g_w38dg'){const c=CK[i];if(d.o===c[1]){D.g[i]=1;delete D.w['g'+i];gAw(S,'dg'+i,2)}else D.w['g'+i]=d.o}
else if(a==='g_w38tk'){const s=SE[i],w=s[0].split(' ')[+d.j].replace(/[.,]/g,'');if(w===s[1]){D.f[i]=1;D.w=''}else D.w=i+'.'+d.j}
else if(a==='g_w38qa'){if(k===SE[i][2]){D.r[i]=1;gAw(S,'ff'+i,2);if(Object.keys(D.r).length===6){gAw(S,'ffb',3);S.ok[S.s]=1}}else D.q[i]=1}
else if(a==='g_w38i3'){D.s=D.s===i?undefined:i;D.msg=0}
else if(a==='g_w38zn'){const c=+d.c;if(D.s!==undefined){if(I3[D.s][1]===c){D.pl[D.s]=c;gAw(S,'sc'+D.s,2);D.s=undefined;D.msg=0;if(Object.keys(D.pl).length===I3.length)gAw(S,'scb',2)}else D.msg=1}}
else if(a==='g_w38rg'){if(RG[i][2][k]===RG[i][1]){D.rg[i]=1;delete D.w['r'+i];gAw(S,'rg'+i,3);if(Object.keys(D.rg).length===2)S.ok[S.s]=1}else D.w['r'+i]=k}
else if(a==='g_w38ph'){D.why=!D.why}
else if(a==='g_w38pf'){S.t['w38p'+i]=PQ[i][k?4:3];D.wr[i]=''}
else if(a==='g_w38pk'){const p=PQ[i],v=nrm(S.t['w38p'+i]),g=p[p[5]==='ed'?3:4],o=p[p[5]==='ed'?4:3];
 if(v===g){D.ok[i]=1;D.wr[i]='';gAw(S,'pc'+i,4);if(Object.keys(D.ok).length===6){gAw(S,'pcb',1);S.ok[S.s]=1}}
 else if(!v)D.wr[i]='Type an answer, or tap -ed / -ing first.';
 else if(v===o)D.wr[i]='Who is experiencing the feeling? What is causing it? Look at “'+p[6]+'”: '+(p[5]==='ed'?'they feel it, so use -ed.':'it causes the feeling, so use -ing.');
 else D.wr[i]='Check the form: “'+p[2]+'” + -ed or -ing (watch the final -e).'}
else if(a==='g_w38ed'){const x=ER[i];if(k===(x[1]?1:0)){D.d[i]=1;D.w[i]='';if(x[1]){D.ok[i]=1;gAw(S,'ed'+i,3)}else gAw(S,'ed'+i,1);if(Object.keys(D.ok).length===8){gAw(S,'edb',1);S.ok[S.s]=1}}else D.w[i]='Look again at the underlined part. Does its form fit the sentence? Who feels it, or what causes it?'}
else if(a==='g_w38ef'){const x=ER[i],v=nrm(S.t['w38e'+i]);if(x[2].test(v)){D.fx[i]=1;D.w[i]='';gAw(S,'ef'+i,1)}else D.w[i]=v?'Not yet. Hint: '+HT[x[4]]:'Type your correction first.'}
else if(a==='g_w38ec'){const x=ER[i];if(k===x[4]){D.cl[i]=1;D.ok[i]=1;D.w[i]='';delete D.w['c'+i];gAw(S,'ec'+i,1);if(Object.keys(D.ok).length===8){gAw(S,'edb',1);S.ok[S.s]=1}}else{D.w['c'+i]=k;D.w[i]='Not quite. Compare the wrong word with your fix: what changed?'}}
else if(a==='g_w38fc'){const f=FB[i],v=nrm(S.t['w38f'+i]),g=f[6]==='ing'?f[3]:f[4],o=f[6]==='ing'?f[4]:f[3];
 if(v===g){D.ok[i]=1;D.wr[i]='';gAw(S,'fb'+i,4);if(Object.keys(D.ok).length===6){gAw(S,'fbb',1);S.ok[S.s]=1}}
 else if(!v)D.wr[i]='Type the form of “'+f[2]+'” first.';
 else if(v===o)D.wr[i]='The subject is '+f[5]+'. '+(f[6]==='ing'?'Does it feel “'+v+'”, or does it cause the feeling? It causes it → -ing.':'Who feels the feeling here? '+cap(f[5])+' feel it → -ed.');
 else D.wr[i]='Check the form of “'+f[2]+'”: the context needs -'+f[6]+'.'}
else if(a==='g_w38ox'){D.k=k;D.sd=0;D.bad=0}
else if(a==='g_w38om'){const x=(S.t.w38o0||'').trim(),y=(S.t.w38o1||'').trim();if(D.k!==undefined&&/ing$/i.test(x)&&/ed$/i.test(y)){D.sd=1;D.bad=0;gAw(S,'tm',10);S.ok[S.s]=1}else D.bad=1}
else if(a==='g_w38ok'){D.sk=1;S.ok[S.s]=1}
else if(a==='g_w38kc'){D.k[i]=!D.k[i];if(CKL.every((_,j)=>D.k[j]))S.ok[S.s]=1}
gRender(K)});
}


/* mở thẳng link lesson: dựng lại sau khi mọi mission đã nạp */
if(/^#\/lesson\//.test(location.hash))route();
