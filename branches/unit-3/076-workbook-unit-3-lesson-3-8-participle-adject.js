/* ===== WORKBOOK · Unit 3 · Lesson 3.8 Participle adjectives · THE FEELING DETECTIVE (mission key w2.7) ===== */
{const K='w2.7',nz=t=>String(t||'').toLowerCase().replace(/\s+/g,' ').trim(),
ex=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),
bt='px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-bold disabled:opacity-40',
bx='mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700',
OK=t=>`<p class="mt-2 text-sm text-green-600">${t}</p>`,NO=t=>`<p class="mt-2 text-sm text-red-600">${t}</p>`,
RD='!bg-red-100 !border-red-400',GN='!bg-green-100 !border-green-500',
QF=["😮 A feeling (how someone feels)","🎢 The thing that causes a feeling"],
F=[["Travelling by train is so boring.","boring",1,"Is travelling by train feeling something, or is it creating a feeling?","boring describes the thing that causes the feeling."],
["The boys were tired of playing their game.","tired",0,"Do the boys feel something, or are they creating a feeling?","tired describes how the boys feel."],
["The film had a thrilling ending.","thrilling",1,"Is the ending feeling something, or is it creating a feeling?","thrilling describes the ending: it causes the feeling."],
["We were surprised by a man who was following us.","surprised",0,"Do we feel something, or are we creating a feeling?","surprised describes how we felt. (following is part of the verb was following.)"],
["They were walking uphill and all of them were exhausted.","exhausted",0,"Do they feel something, or are they creating a feeling?","exhausted describes how they felt. (walking is part of the verb were walking.)"],
["It was an amazing trip that will not be forgotten.","amazing",1,"Is the trip feeling something, or is it creating a feeling?","amazing describes the trip: it causes the feeling. (forgotten is part of a passive verb.)"]],
VB=["following","walking","forgotten","playing","travelling"],
M4=[["Good guides can make people more ","interest"," in history.","interested","interesting",0,"people","The guide is interesting → cause · People are interested → feel"],
["Both locals and tourists are getting really ","excite"," about the festival.","excited","exciting",0,"locals and tourists","The festival is exciting → cause · Tourists are excited → feel"],
["Airports can be really ","bore",".","bored","boring",1,"airports","Airports are boring → cause · Passengers are bored → feel"],
["The walk to the top of the hill was pretty ","tire",",","tired","tiring",1,"the walk","The walk is tiring → cause · We are tired → feel"],
["…but the view was ","amaze",".","amazed","amazing",1,"the view","The view is amazing → cause · We are amazed → feel"],
["A trip is more ","excite"," when you share it.","excited","exciting",1,"a trip","The trip is exciting → cause · Travellers are excited → feel"]],
CT=["Feeling vs cause","Need adjective form","Meaning / adjective choice"],
E=[[["…",["detail"]," information…"],1,["detailed"],1,"detail → detailed: you need an adjective form (a past participle)."],
[["…café was ",["close"],"… shop that was ",["opened"],"…"],1,["closed","open"],1,"close → closed · opened → open: check the form against the meaning. (Compare with your book/answer key.)"],
[["…staff were really ",["welcoming"],"…"],0,[],-1,"welcoming describes the staff: they cause the feeling of being welcome."],
[["…people get quite ",["stressful"],"…"],1,["stressed"],0,"stressful → stressed: people FEEL stressed; a situation is stressful."],
[["…a bit ",["concern"],"…"],1,["concerned"],1,"concern → concerned: a noun/verb form where an adjective is needed."],
[["…building was really ",["impressing"],"…"],1,["impressive"],2,"impressing → impressive: the building causes the feeling; choose the adjective that fits the meaning."],
[["…I felt totally ",["relax"],"…"],1,["relaxed"],1,"relax → relaxed: after felt you need an adjective describing the feeling."],
[["…we were all really ",["pleased"],"…"],0,[],-1,"pleased describes how we felt."]],
BS=["amuse","annoy","disappoint","excite","fascinate","tire"],
C=[["The trip was the most ","excite"," tour I have ever done.","exciting","excited",1,"the trip"],
["We were really ","tire"," at the end of the day…","tired","tiring",0,"we"],
["Some guests felt ","annoy"," about the noise…","annoyed","annoying",0,"some guests"],
["The tour guide’s explanations were ","amuse"," and often made us laugh.","amusing","amused",1,"the explanations"],
["…the most ","fascinate"," part of the tour.","fascinating","fascinated",1,"the part of the tour"],
["We were ","disappoint"," by the weather…","disappointed","disappointing",0,"we"]],
SCI=["MEANING: I can identify a participle adjective.","MEANING: I know what -ed usually describes.","MEANING: I know what -ing usually describes.","USE: I can choose the correct form from context.","USE: I can correct common adjective-form mistakes.","USE: I can explain why a form is correct.","PRODUCE: I can use an -ing adjective for a cause.","PRODUCE: I can use an -ed adjective for a feeling."],
inp=(k,w,S)=>`<input data-g="${k}" value="${ex(S.t[k]||'')}" autocomplete="off" class="px-2 py-1 ${w} rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/>`;
GR.w8f=(st,S,D)=>{D.st=D.st||{};D.wr=D.wr||{};D.qw=D.qw||{};
return mBox(st.h,`<p class="mt-2 text-sm">Tap the participle adjective in each sentence, then decide: feeling or cause?</p>`+F.map((f,i)=>{const s=D.st[i]||0;
return `<div class="${bx}"><p class="text-sm leading-8">${'abcdef'[i]}. ${f[0].split(' ').map((w,k)=>{const c=w.replace(/[.,]/g,'');return `<button data-act="g_w8fw" data-i="${i}" data-w="${c}" ${s?'disabled':''} class="px-1 rounded ${s&&nz(c)===f[1]?'bg-orange-200 dark:bg-orange-700 font-bold':'hover:bg-orange-100 dark:hover:bg-slate-600'}">${w}</button>`}).join(' ')}</p>${D.wr[i]&&!s?NO(VB.includes(D.wr[i])?`“${D.wr[i]}” is part of a verb here, not a participle adjective.`:'That word isn’t the participle adjective. Look for a word that describes a feeling or its cause.'):''}${s?`<p class="mt-2 text-sm font-semibold">Is “${f[1]}” describing a feeling or the thing causing a feeling?</p><div class="flex flex-col gap-2">${QF.map((q,v)=>gB('g_w8fa',`data-i="${i}" data-v="${v}" ${s>1?'disabled':''}`,q,s>1&&v===f[2],D.qw[i]===v&&s<2?RD:'')).join('')}</div>${s>1?OK('💡 '+f[4]+' +2 XP'):D.qw[i]!==undefined?NO('Not quite. Think: '+f[3]):''}`:''}</div>`}).join('')+(S.ok[S.s]?OK('🎉 Six participle adjectives found! +3 XP'):''))};
GR.w8m=(st,S,D)=>{D.f=D.f||{};D.n=D.n||{};D.why=D.why||{};
return mBox(st.h,`<p class="mt-2 text-xs italic text-slate-500">Sentences are rebuilt from the Practice 2 fragments in your book – compare with the book. Type the form, or tap -ed / -ing to try one.</p>`+M4.map((c,i)=>{const f=D.f[i],n=D.n[i]||0,ans=c[c[5]?4:3],v=nz(S.t['w8m'+i]);
return `<div class="${bx}"><p class="text-sm">${'abcdef'[i]}. ${c[0]}<b>${f?`<span class="text-green-600">${ans}</span>`:'______'}</b>${c[2]} <span class="text-slate-500">(${c[1]})</span></p>${f?OK(`✅ ${ans} – ${c[6]} ${c[5]?'cause(s)':'feel(s)'} the feeling. +4 XP`):`<div class="mt-2 flex flex-wrap gap-2 items-center">${inp('w8m'+i,'w-36',S)}${gB('g_w8mc',`data-i="${i}" data-v="0"`,'-ed',false)}${gB('g_w8mc',`data-i="${i}" data-v="1"`,'-ing',false)}${gB('g_w8mk',`data-i="${i}"`,'Check',false)}</div>`}${n&&!f?NO(`Who or what is described? → ${c[6]}. Does it feel the feeling or cause it?`+(v===c[c[5]?3:4]?' That is the other form: decide by meaning, not by looks.':'')):''}<button data-act="g_w8mw" data-i="${i}" class="mt-2 text-xs underline text-slate-500">🔍 Why?</button>${D.why[i]?`<p class="mt-1 text-xs">WHO/WHAT? ${c[7]}</p>`:''}</div>`}).join('')+(S.ok[S.s]?OK('🎉 All six forms chosen from context! +1 XP'):''))};
GR.w8e=(st,S,D)=>{D.j=D.j||{};D.jw=D.jw||{};D.fx=D.fx||{};D.fw=D.fw||{};D.cl=D.cl||{};D.cw=D.cw||{};D.dn=D.dn||{};
return mBox(st.h,`<p class="mt-2 text-xs italic text-slate-500">🔎 The web shows only the underlined parts. Read the full sentences in your book. Is the underlined form correct? If not, fix it – then say what kind of problem it is.</p>`+E.map((e,i)=>{const dn=D.dn[i],j=D.j[i];
return `<div class="${bx}"><p class="text-sm"><b>${'abcdefgh'[i]}.</b> ${e[0].map(p=>typeof p==='string'?p:`<u class="font-bold">${p[0]}</u>`).join('')}</p>${dn?'':`<div class="mt-2 flex gap-2">${gB('g_w8ej',`data-i="${i}" data-v="0"`,'🟢 Correct',j===0)}${gB('g_w8ej',`data-i="${i}" data-v="1"`,'🔴 Incorrect',j===1)}</div>`}${D.jw[i]&&!dn?NO('Look again: does this form fit the meaning of the sentence?'):''}${j===1&&!D.fx[i]&&!dn?`<div class="mt-2 flex flex-wrap gap-2 items-center"><span class="text-sm">Fix it:</span>${e[2].map((_,k)=>inp('w8e'+i+'_'+k,'w-32',S)).join('')}${gB('g_w8ek',`data-i="${i}"`,'Check',false)}</div>${D.fw[i]?NO('Not yet. Ask: feeling or cause? Does the sentence need an adjective form?'):''}`:''}${D.fx[i]&&!dn?`<p class="mt-2 text-sm text-green-600">✅ ${e[2].join(' · ')}</p><p class="mt-1 text-sm font-semibold">What kind of problem did you find?</p><div class="flex flex-wrap gap-2">${CT.map((t,v)=>gB('g_w8ec',`data-i="${i}" data-v="${v}"`,t,false,D.cw[i]===v?RD:'')).join('')}</div>`:''}${dn?OK('✅ '+e[4]+' +3 XP'):''}</div>`}).join('')+(S.ok[S.s]?OK('🎉 Error detective complete! +1 XP'):''))};
GR.w8c=(st,S,D)=>{D.cb=D.cb||{};D.cc=D.cc||{};D.cf=D.cf||{};D.cn=D.cn||{};D.bw=D.bw||{};D.qw=D.qw||{};
return mBox(st.h,`<p class="mt-2 text-sm">Word → Context → Form. Word bank: <b>${BS.join(' · ')}</b></p>`+C.map((c,i)=>{const b=D.cb[i],q=D.cc[i],f=D.cf[i],n=D.cn[i]||0,v=nz(S.t['w8c'+i]);
return `<div class="${bx}"><p class="text-sm">${'abcdef'[i]}. ${c[0]}<b>${f?`<span class="text-green-600">${c[3]}</span>`:'______'}</b>${c[2]}</p>${f?OK('✅ +4 XP'):`<p class="mt-2 text-xs font-semibold">1️⃣ WORD</p><div class="flex flex-wrap gap-2">${BS.map((w,k)=>gB('g_w8cb',`data-i="${i}" data-k="${k}"`,w,b===k,b===undefined&&D.bw[i]===k?RD:'')).join('')}</div>${b!==BS.indexOf(c[1])&&D.bw[i]!==undefined?NO('Does that word fit the meaning of this sentence?'):''}${b===BS.indexOf(c[1])?`<p class="mt-2 text-xs font-semibold">2️⃣ CONTEXT – the subject is “${c[6]}”. Does it feel the feeling or cause it?</p><div class="flex flex-col gap-2">${QF.map((t,k)=>gB('g_w8cq',`data-i="${i}" data-v="${k}"`,t,q===k&&q!==undefined&&(k===(c[5]?1:0)),D.qw[i]===k&&q===undefined?RD:'')).join('')}</div>${D.qw[i]!==undefined&&q===undefined?NO(`Does ${c[6]} feel something, or cause it?`):''}${q!==undefined?`<p class="mt-2 text-xs font-semibold">3️⃣ FORM</p><div class="flex gap-2 items-center">${inp('w8c'+i,'w-40',S)}${gB('g_w8ck',`data-i="${i}"`,'Check',false)}</div>${n?NO(v===c[4]?`The subject is “${c[6]}”. Does it feel the feeling, or cause it? → ${c[5]?'it causes it → -ing':'it feels it → -ed'}`:'Check the spelling: base word + -ed / -ing (watch the final -e).'):''}`:''}`:''}`}</div>`}).join('')+(S.ok[S.s]?OK('🎉 Perfect forms! +1 XP'):''))};
GR.w8t=(st,S,D)=>{const TP=["trip","place","activity","food","journey"],g=k=>(S.t['w8t'+k]||'').trim();
return mBox(st.h,`<p class="mt-2 text-xs italic text-slate-500">WEB EXTENSION – not from the textbook. Optional.</p><p class="mt-2 text-sm font-semibold">Choose a travel experience</p><div class="flex flex-wrap gap-2">${TP.map(t=>gB('g_w8tp',`data-v="${t}"`,t,D.tp===t)).join('')}</div><div class="${bx} text-sm space-y-2"><p>THING / EXPERIENCE → <b>-ING</b>: The ${D.tp||'…'} was ${inp('w8t0','w-32',S)}.</p><p>MY FEELING → <b>-ED</b>: I was ${inp('w8t1','w-32',S)}.</p></div>${D.bad?NO('Check: the thing causes the feeling (-ing) and you feel it (-ed). Choose an experience first.'):''}<div class="mt-3 flex gap-2"><button data-act="g_w8tk" class="${bt}">🌍 Save (+10 XP)</button><button data-act="g_w8ts" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 text-sm">Skip (optional)</button></div>${S.ok[S.s]?OK(D.pub?`✅ The ${D.tp} was ${ex(g(0))}. I was ${ex(g(1))}. +10 XP`:'Skipped.'):''}`)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-act^="g_w8"]');if(!b||b.disabled||GK!==K)return;const S=gS(K),s=S.s,D=gD(S,s),a=b.dataset.act,d=b.dataset,i=+d.i,v=+d.v;
if(a==='g_w8fw'){if(nz(d.w)===F[i][1])D.st[i]=1;else D.wr[i]=nz(d.w)}
else if(a==='g_w8fa'){if(v===F[i][2]){D.st[i]=2;gAw(S,'w8f'+i,2);if(F.every((_,k)=>D.st[k]===2)){S.ok[s]=1;gAw(S,'w8fb',3)}}else D.qw[i]=v}
else if(a==='g_w8mc'){S.t['w8m'+i]=M4[i][v?4:3]}
else if(a==='g_w8mk'){const c=M4[i];if(nz(S.t['w8m'+i])===c[c[5]?4:3]){D.f[i]=1;gAw(S,'w8m'+i,4);if(M4.every((_,k)=>D.f[k])){S.ok[s]=1;gAw(S,'w8mb',1)}}else D.n[i]=(D.n[i]||0)+1}
else if(a==='g_w8mw'){D.why[i]=!D.why[i]}
else if(a==='g_w8ej'){const e1=E[i];D.j[i]=v;if(v===(e1[1]?1:0)){D.jw[i]=0;if(!e1[1]){D.dn[i]=1;gAw(S,'w8e'+i,3);if(E.every((_,k)=>D.dn[k])){S.ok[s]=1;gAw(S,'w8eb',1)}}}else{D.jw[i]=1;D.j[i]=undefined}}
else if(a==='g_w8ek'){const e1=E[i];if(e1[2].every((x,k)=>nz(S.t['w8e'+i+'_'+k])===x))D.fx[i]=1;else D.fw[i]=1}
else if(a==='g_w8ec'){if(v===E[i][3]){D.dn[i]=1;gAw(S,'w8e'+i,3);if(E.every((_,k)=>D.dn[k])){S.ok[s]=1;gAw(S,'w8eb',1)}}else D.cw[i]=v}
else if(a==='g_w8cb'){const k=+d.k;if(BS[k]===C[i][1]){D.cb[i]=k;gAw(S,'w8cb'+i,1)}else D.bw[i]=k}
else if(a==='g_w8cq'){if(v===(C[i][5]?1:0)){D.cc[i]=v;gAw(S,'w8cq'+i,1)}else D.qw[i]=v}
else if(a==='g_w8ck'){const c=C[i];if(nz(S.t['w8c'+i])===c[3]){D.cf[i]=1;gAw(S,'w8c'+i,2);if(C.every((_,k)=>D.cf[k])){S.ok[s]=1;gAw(S,'w8cz',1)}}else D.cn[i]=(D.cn[i]||0)+1}
else if(a==='g_w8tp'){D.tp=d.v}
else if(a==='g_w8tk'){const x=(S.t.w8t0||'').trim().toLowerCase(),y=(S.t.w8t1||'').trim().toLowerCase();if(D.tp&&/ing$/.test(x)&&/ed$/.test(y)){D.pub=1;D.bad=0;S.ok[s]=1;gAw(S,'w8t',10)}else D.bad=1}
else if(a==='g_w8ts'){S.ok[s]=1}
gRender(K)});
MX[K]={code:"WORKBOOK 3.8",title:"The Feeling Detective",q:"Can you tell the difference between how someone feels and what causes the feeling? · RECOGNISE → CHOOSE FROM CONTEXT → DETECT ERRORS → PRODUCE",mx:130,
end:{t:"🏅 FEELING DETECTIVE – BADGE UNLOCKED",did:"You can now identify, choose and use participle adjectives to describe feelings and their causes: -ed → how you feel, -ing → what causes the feeling.",r:"Think of one example of your own: what causes a feeling, and how do you feel? Write both sentences."},steps:[
{i:"😮",n:"Mission 01 · What’s the difference?",t:"bucket",x:5,h:"😮 MISSION 01 – WHAT’S THE DIFFERENCE? Which card is about a person’s feeling and which is about a thing / experience?",lab:["😮 PERSON’S FEELING","🎢 THING / EXPERIENCE"],hint:"Who is feeling something, and what is creating the feeling?",items:[["I’m so excited!",0,"excited → HOW I FEEL"],["This ski trip is so exciting!",1,"exciting → WHAT CAUSES THE FEELING"]]},
{i:"🔍",n:"Mission 02 · Find the feeling",t:"w8f",h:"🔍 MISSION 02 – FIND THE FEELING (Focus 1)"},
{i:"⚖️",n:"Mission 03 · Cause or feeling?",t:"bucket",x:3,h:"⚖️ MISSION 03 – CAUSE OR FEELING? Sort the six participle adjectives.",lab:["🎢 CAUSES THE FEELING (-ING)","😮 FEELS THE FEELING (-ED)"],hint:"Does it create the feeling, or experience it?",items:[["boring",0],["tired",1],["thrilling",0],["surprised",1],["exhausted",1],["amazing",0]]},
{i:"🧠",n:"Mission 03 · The detective rule",t:"mcq",x:1,ctx:"🧠 THE DETECTIVE RULE: -ed → how you feel · -ing → what causes the feeling. Now use it.",items:[{q:"The trip is ________.",o:["excited","exciting"],a:1,h:"Is the trip creating the feeling?",r:"exciting – the trip causes the feeling."},{q:"I am ________.",o:["excited","exciting"],a:0,h:"Who feels it?",r:"excited – I feel it."}]},
{i:"🎯",n:"Mission 04 · Choose the right form",t:"w8m",h:"🎯 MISSION 04 – CHOOSE THE RIGHT FORM (Practice 2)"},
{i:"🚨",n:"Mission 05 · Error detective",t:"w8e",h:"🚨 MISSION 05 – ERROR DETECTIVE (Exercise 3)"},
{i:"🔥",n:"Final challenge · Build the perfect form",t:"w8c",h:"🔥 FINAL CHALLENGE – BUILD THE PERFECT FORM (Challenge 4)"},
{i:"🌍",n:"Optional · My travel feelings",t:"w8t",h:"🌍 OPTIONAL – MY TRAVEL FEELINGS (+10 XP)"},
{i:"🧐",n:"Self-check",t:"bucket",x:0,h:"🧐 FEELING DETECTIVE CHECK – I can…",lab:["✅ Yes","🔄 Not yet"],items:SCI.map(x=>[x,-1])}
]};}
