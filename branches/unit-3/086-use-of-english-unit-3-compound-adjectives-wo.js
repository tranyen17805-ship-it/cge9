/* ===== USE OF ENGLISH · Unit 3 · Compound adjectives (Workbook tr.50) · THE TRAVEL AD LAB (mission key u2.1) ===== */
{const K='u2.1',
esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),
bx='mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700',
okc='!bg-green-100 !border-green-400',bdc='!bg-red-100 !border-red-400',
sup='<span class="ml-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">🧩 Web support · not from the Workbook</span>',
inp=(S,k,ph)=>`<input data-g="${k}" value="${esc(S.t[k]||'')}" placeholder="${ph}" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/>`,
nrm=t=>(t||'').trim().toLowerCase().replace(/\s+/g,' '),
AD=[[["A",0],["five-day",1],["trip",0],["to Istanbul",0]],[["Visit a",0],["5000-year-old",1],["palace",0]],[["Stay in a",0],["well-run",1],["hotel",0]],[["Taste",0],["locally produced",1],["food and drink",0]],[["See the",0],["world-famous",1],["museums",0]],[["Buy",0],["handmade",1],["jewellery",0]]],
STR={"five-day":"five + day","5000-year-old":"5000 + year + old","well-run":"well + run","locally produced":"locally + produced","world-famous":"world + famous","handmade":"hand + made"},
BD=[{t:"five-day",p:["five","day"],x:["week","hour"]},{t:"well-run",p:["well","run"],x:["fast","good"]},{t:"world-famous",p:["world","famous"],x:["city","known"]},{t:"5000-year-old",p:["5000","year","old"],x:["years","age"]}],
HQ=["Because every two words need a hyphen.","Because the words work together as one adjective before a noun.","Because the second word is always a noun."],
CATS=["number + a noun","adverb + adjective","adverb with -ly + adjective","noun + adjective","a compound adjective that has become one word"],
I3=[["five-day",0],["5000-year-old",0],["well-run",1],["locally produced",2],["world-famous",3],["handmade",4]],
FW=["aged","minute","green","minded","well","world"],
FS=[["A five-"," video",1,"five-minute"],["A ","-eyed cat",2,"green-eyed"],["An open-"," person",3,"open-minded"],["A ","-made jacket",4,"well-made"],["A middle-"," man",0,"middle-aged"],["A ","-class stadium",5,"world-class"]],
HN=[["What kind of word normally follows a number in this compound adjective? Think of a unit of time.","A video that lasts five … (60 seconds).","First letter: m"],["The blank comes before “-eyed”. What kind of word describes eyes?","A cat with eyes the colour of grass.","First letter: g"],["“open-” joins with a word that describes a person’s attitude (an -ed form).","Someone who accepts new ideas is open-…","First letter: m"],["The blank tells us how the jacket was made: an adverb.","A jacket that was made in a good way.","First letter: w"],["The word after the hyphen shows a stage of life (a past participle).","A man who is not young and not old.","First letter: a"],["The blank comes before “-class” and describes the highest standard.","A stadium of the highest standard in the whole … ","First letter: w"]],
PR=[["French","speak",["speak","speaking","spoken"],1,"French-speaking"],["multi","colour",["colour","coloured","colouring"],1,"multi-coloured"],["average","size",["size","sized","sizing"],1,"average-sized"],["self","service",["service","serviced","servicing"],0,"self-service"],["old","fashion",["fashion","fashioned","fashioning"],1,"old-fashioned"],["low","cost",["cost","costed","costing"],0,"low-cost"]],
JN=["hyphen ( - )","space","joined"],
GI=[["Spanish-speaking countries","Spanish-spoken countries",1],["an average-sized room","an average size room",2],["a self-service buffet","a self-serviced buffet",1],["up-to-date information","up to date information",0]],
CHG=["hyphenation","participle form","both"],
TF=[["eight years old","an","boy",/^eight-year-old$/,"eight-year-old",["REMOVE plural -s: years → year","CONNECT: eight + year","ADD: -old → eight-year-old"]],["took three days","a","trip",/^three-day$/,"three-day",["REMOVE plural -s: days → day","CONNECT: three + day","→ three-day"]],["made at home","","bread",/^(homemade|home-made)$/,"homemade",["made at home → home + made","JOIN: one word","→ homemade"]],["had a good education","","students",/^well-educated$/,"well-educated",["had a good education → well + educated","adverb + past participle","→ well-educated"]],["has a dense population","a","town",/^densely populated$/,"densely populated",["has a dense population → densely populated","-ly adverb + participle: NO hyphen","→ densely populated"]],["has a kind heart","a","person",/^kind-hearted$/,"kind-hearted",["has a kind heart → kind + hearted","CONNECT with a hyphen","→ kind-hearted"]]],
CKL=[["🔤 FORM","I can recognise a compound adjective."],["🔤 FORM","I can combine words to make a compound adjective."],["🔤 FORM","I know when a hyphen is needed."],["🧠 GRAMMAR","I can use number + noun compounds."],["🧠 GRAMMAR","I can use adjective / adverb + participle forms."],["🧠 GRAMMAR","I can transform phrases into compound adjectives."],["✍️ ACCURACY","I checked spelling."],["✍️ ACCURACY","I checked word form."],["✍️ ACCURACY","I checked hyphens."]];

GR.w37sp=(st,S,D)=>{D.f=D.f||{};const n=Object.keys(D.f).length;
return mBox('👀 MISSION 01 · SPOT THE COMPOUND · '+n+' / 6',`<p class="mt-2 text-sm">Read the advertisement. Tap the words that work together as <b>one adjective</b>. ${sup}</p><p class="text-xs text-slate-500">Advertisement rebuilt from the lesson notes · compare with Workbook p.50.</p>
<div class="${bx}"><p class="font-extrabold">✈️ A five-day trip to Istanbul</p><div class="mt-2 space-y-2">${AD.map((l,li)=>`<div class="flex flex-wrap gap-1 items-center">${li?'<span>•</span>':''}${l.map((c,ci)=>gB('g_w37sp',`data-k="${li}.${ci}" data-t="${c[1]}"`,esc(c[0]),false,'!px-2 !py-1 '+(D.f[li+'.'+ci]?okc:D.w===li+'.'+ci?bdc:''))).join('')}</div>`).join('')}</div></div>
${D.w?'<p class="mt-2 text-sm text-red-600">Not a compound adjective. Look for two words that join together to describe a noun.</p>':''}
${n?`<div class="${bx}"><p class="text-xs font-bold">✅ COMPOUND ADJECTIVE · STRUCTURE</p>${Object.keys(D.f).map(k=>{const c=AD[k.split('.')[0]][k.split('.')[1]][0];return `<p class="text-sm">🟢 <b>${esc(c)}</b> = ${STR[c]}</p>`}).join('')}</div>`:''}`)};

GR.w37bd=(st,S,D)=>{D.dn=D.dn||{};D.b=D.b||[];const bi=D.bi||0;
if(bi>=BD.length)return mBox('🧩 MISSION 02 · BUILD THE ADJECTIVE',`<p class="mt-2 text-sm font-bold">Why is there a hyphen?</p><div class="mt-2 flex flex-col gap-2">${[1,2,0].map(k=>gB('g_w37hq',`data-k="${k}" ${D.hq?'disabled':''}`,esc(HQ[k]),D.hq&&k===1,D.hw===k&&!D.hq?bdc:'')).join('')}</div>${D.hw!==undefined&&!D.hq?'<p class="mt-2 text-sm text-red-600">Think about where the compound adjective goes: before a noun.</p>':''}${D.hq?'<p class="mt-2 text-sm font-semibold text-green-600">✅ The words work together as one adjective before a noun.</p>':''}`);
const t=BD[bi],all=t.p.concat(t.x),r=bi%all.length,bank=all.slice(r).concat(all.slice(0,r));
return mBox('🧩 MISSION 02 · BUILD THE ADJECTIVE · '+Object.keys(D.dn).length+' / 4',`<p class="mt-2 text-sm">Tap the word blocks in the right order to build the compound adjective. ${sup}</p>
<div class="${bx} text-center"><p class="text-xl font-extrabold">${D.dn[bi]?t.t:esc(D.b.join(' - ')||'＿＿＿')}</p></div>
${D.dn[bi]?`<p class="mt-2 text-sm text-green-600">🟢 ${t.p.join(' + ')} → <b>${t.t}</b></p><button data-act="g_w37bn" class="mt-2 ${mbtn}">Next →</button>`:`<div class="${bx}"><div class="flex flex-wrap gap-2">${bank.map(p=>gB('g_w37bp',`data-p="${p}" ${D.b.includes(p)?'disabled':''}`,esc(p),false,D.b.includes(p)?'opacity-40':'')).join('')}</div><button data-act="g_w37bu" ${D.b.length?'':'disabled'} class="mt-2 px-3 py-1 rounded-xl border border-slate-300 text-sm">↩️ Undo</button></div>${D.bad?'<p class="mt-2 text-sm text-red-600">That is not the compound adjective in the advertisement. Try again.</p>':''}`}`)};

GR.w37pt=(st,S,D)=>{D.pl=D.pl||{};const N=I3.length,n=Object.keys(D.pl).length;
const chip=i=>gB('g_w37i3',`data-i="${i}" ${D.pl[i]!==undefined?'disabled':''}`,esc(I3[i][0]),D.s===i,D.pl[i]!==undefined?okc:'');
return mBox('🔬 MISSION 03 · WHAT’S THE PATTERN? · '+n+' / '+N,`<p class="mt-2 text-sm">Tap a compound adjective, then tap its pattern.</p>
<div class="${bx}"><div class="flex flex-wrap gap-2">${I3.map((_,i)=>D.pl[i]===undefined?chip(i):'').join('')}</div></div>
<div class="mt-3 space-y-2">${CATS.map((c,ci)=>`<div class="${bx} !mt-0 flex flex-wrap items-center gap-2"><button data-act="g_w37c3" data-c="${ci}" ${D.s===undefined?'disabled':''} class="${mbtn} !text-sm">${c}</button>${I3.map((_,i)=>D.pl[i]===ci?`<span class="px-2 py-1 rounded-lg ${okc} border text-sm font-bold">${esc(I3[i][0])}</span>`:'').join('')}</div>`).join('')}</div>
${D.msg?'<p class="mt-2 text-sm text-red-600">Not this pattern. Look at the first word: is it a number, an adverb (-ly or not) or a noun?</p>':''}
${n===N?`<div class="${bx}"><p class="text-xs font-bold">🗺️ COMPOUND BUILDER MAP</p><p class="mt-1 text-sm font-bold">COMPOUND ADJECTIVES</p>${CATS.map((c,ci)=>`<p class="text-sm ml-3">├── ${c}: <b>${I3.filter(x=>x[1]===ci).map(x=>x[0]).join(', ')}</b></p>`).join('')}</div>`:''}`)};

GR.w37fc=(st,S,D)=>{D.pl=D.pl||{};D.ok=D.ok||{};D.wr=D.wr||{};D.h=D.h||{};const N=FS.length,n=Object.keys(D.ok).length,used=Object.values(D.pl);
return mBox('🎯 MISSION 04 · FOCUS · COMPLETE IT · '+n+' / '+N,`<p class="mt-2 text-sm">Tap a word, then tap a blank. Check to see the compound adjective.</p>
<div class="${bx}"><p class="text-xs font-bold">WORD BANK</p><div class="mt-2 flex flex-wrap gap-2">${FW.map((w,j)=>gB('g_w37fw',`data-j="${j}" ${used.includes(j)?'disabled':''}`,w,D.s===j,used.includes(j)?'opacity-40':'')).join('')}</div></div>
${FS.map((f,i)=>{const h=D.h[i]||0;return `<div class="${bx}"><p class="text-sm">${esc(f[0])}${gB('g_w37fb',`data-i="${i}"`,D.pl[i]!==undefined?FW[D.pl[i]]:'＿＿＿',false,(D.ok[i]?okc:D.wr[i]?bdc:'')+' !px-2 !py-0.5 mx-1')}${esc(f[1])}</p>
${D.ok[i]?`<p class="mt-1 text-sm text-green-600">🟢 ${f[3]}</p>`:D.pl[i]!==undefined?`<button data-act="g_w37fk" data-i="${i}" class="mt-2 ${mbtn} !text-sm">Check</button>`:''}
${D.wr[i]&&!D.ok[i]?`<p class="mt-1 text-sm text-red-600">Not quite. Look at the word next to the blank.</p>`:''}${HN[i].slice(0,h).map((t,k)=>`<p class="mt-1 text-sm">💡 ${k+1} · ${esc(t)}</p>`).join('')}${D.wr[i]&&!D.ok[i]&&h<3?`<button data-act="g_w37fh" data-i="${i}" class="mt-1 px-3 py-1 rounded-xl border border-slate-300 text-sm">💡 Hint ${h+1}/3</button>`:''}</div>`}).join('')}`)};

GR.w37pr=(st,S,D)=>{D.f=D.f||{};D.j=D.j||{};D.ok=D.ok||{};D.wr=D.wr||{};const n=Object.keys(D.ok).length;
return mBox('✏️ MISSION 05 · PRACTICE · MAKE IT RIGHT · '+n+' / 6',`<p class="mt-2 text-sm">Build a compound adjective from each pair: choose the word form and how to join the words.</p>
${PR.map((p,i)=>{const pv=D.f[i]!==undefined?p[0]+(D.j[i]===0?'-':D.j[i]===1?' ':D.j[i]===2?'':'＋')+p[2][D.f[i]]:null;return `<div class="${bx}"><p class="text-sm font-bold">${p[0]} + ${p[1]}</p>
<p class="mt-1 text-xs">Word form</p><div class="flex flex-wrap gap-2">${p[2].map((o,k)=>gB('g_w37pf',`data-i="${i}" data-k="${k}" ${D.ok[i]?'disabled':''}`,o,D.f[i]===k)).join('')}</div>
<p class="mt-2 text-xs">Join with</p><div class="flex flex-wrap gap-2">${JN.map((o,k)=>gB('g_w37pj',`data-i="${i}" data-k="${k}" ${D.ok[i]?'disabled':''}`,o,D.j[i]===k)).join('')}</div>
<p class="mt-2 text-center text-lg font-extrabold">${D.ok[i]?p[4]:esc(pv||'＿＿＿')}</p>
${D.ok[i]?'<p class="text-sm text-center text-green-600">🟢 Correct</p>':`<button data-act="g_w37pc" data-i="${i}" ${pv===null||D.j[i]===undefined?'disabled':''} class="mt-1 ${mbtn} !text-sm">Check</button>`}${D.wr[i]&&!D.ok[i]?`<p class="mt-1 text-sm text-red-600">${D.wr[i]===1?'The joining is not right. When a compound adjective comes before a noun, how are its words usually joined?':'Check the word form. Which form does a compound adjective need here?'}</p>`:''}</div>`}).join('')}`)};

GR.w37gr=(st,S,D)=>{D.c=D.c||{};D.ch=D.ch||{};D.w=D.w||{};const n=Object.keys(D.ch).length;
return mBox('🚦 GET IT RIGHT · HYPHEN TRAFFIC LIGHT · '+n+' / 4',`<p class="mt-2 text-sm">Which one is correct? Then say what changed.</p>
${GI.map((g,i)=>{const o=i%2?[1,0]:[0,1];return `<div class="${bx}"><div class="flex flex-col gap-2">${o.map(k=>gB('g_w37go',`data-i="${i}" data-k="${k}" ${D.c[i]?'disabled':''}`,(D.c[i]?(k===0?'🟢 ':'🔴 '):'')+esc(g[k]),D.c[i]&&k===0,D.w[i]===k&&!D.c[i]?bdc:'')).join('')}</div>
${D.c[i]?`<p class="mt-2 text-sm font-bold">What changed?</p><div class="flex flex-wrap gap-2">${CHG.map((c,k)=>gB('g_w37gc',`data-i="${i}" data-k="${k}" ${D.ch[i]?'disabled':''}`,c,D.ch[i]&&k===g[2],D.w['c'+i]===k&&!D.ch[i]?bdc:'')).join('')}</div>${i===3?`<p class="text-xs text-slate-500">${sup} The incorrect form is a web contrast.</p>`:''}`:(D.w[i]!==undefined?'<p class="mt-1 text-sm text-red-600">Look again at the hyphens and the word form.</p>':'')}</div>`}).join('')}
${n===4?`<div class="${bx} border-2 border-orange-300"><p class="font-bold">💡 GET IT RIGHT</p><p class="text-sm">Compound adjectives often include a present or past participle form. But not every compound adjective follows exactly the same pattern (self-service, up-to-date).</p></div>`:''}`)};

GR.w37tf=(st,S,D)=>{D.ok=D.ok||{};D.wr=D.wr||{};const n=Object.keys(D.ok).length;
return mBox('🔥 CHALLENGE 3 · TURN PHRASES INTO COMPOUNDS · '+n+' / 6',`<p class="mt-2 text-sm">Rewrite the phrase as a compound adjective before the noun. <span class="text-xs text-slate-500">(The Workbook heading says “compound nouns”, but you are making compound adjectives.)</span></p>
${TF.map((t,i)=>`<div class="${bx}"><p class="text-sm"><b>${esc(t[0])}</b> → ${esc(t[1])} <b>${D.ok[i]?t[4]:'＿＿＿＿＿'}</b> ${esc(t[2])}</p>
${D.ok[i]?`<div class="mt-1 text-sm text-green-600">${t[5].map(x=>'↓ '+esc(x)).join('<br>')}</div><p class="mt-1 text-xs">✔ word form · ✔ hyphen · ✔ position: before the noun</p>`:`${inp(S,'w37t'+i,'type the compound adjective')}<button data-act="g_w37tc" data-i="${i}" class="mt-2 ${mbtn} !text-sm">Check</button>${D.wr[i]?`<p class="mt-1 text-sm text-red-600">${D.wr[i]}</p>`:''}`}</div>`).join('')}
${n===6?`<div class="${bx} border-2 border-orange-300"><p class="font-bold">📍 POSITION</p><p class="text-sm">Before the noun: It is a <b>well-run</b> hotel.<br>After the noun, the hyphen can change: The hotel is <b>well run</b>.</p></div>`:''}`)};

GR.w37ad=(st,S,D)=>{const f=k=>(S.t[k]||'').trim();
return mBox('🌍 OPTIONAL · BUILD A TRAVEL AD',`<p class="mt-2 text-sm">Make a mini travel ad with compound adjectives. ${sup}</p>
<div class="${bx}"><p class="text-xs font-bold">DESTINATION</p>${inp(S,'w37d0','Istanbul / your own destination')}<p class="mt-2 text-xs font-bold">TRIP · __-day</p>${inp(S,'w37d1','five')}<p class="mt-2 text-xs font-bold">HOTEL · __-run</p>${inp(S,'w37d2','well / family')}<p class="mt-2 text-xs font-bold">FOOD · __ produced</p>${inp(S,'w37d3','locally')}<p class="mt-2 text-xs font-bold">ATTRACTIONS · __-famous</p>${inp(S,'w37d4','world')}</div>
<div class="mt-3 flex flex-wrap gap-2"><button data-act="g_w37am" class="${mbtn}">Make my ad</button><button data-act="g_w37ak" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600">Skip this part →</button></div>${D.bad?'<p class="mt-2 text-sm text-red-600">Fill in all five boxes.</p>':''}
${D.sd?`<div class="${bx} border-2 border-orange-300"><p class="font-extrabold">✈️ A ${esc(f('w37d1'))}-day trip to ${esc(f('w37d0'))}</p><p class="text-sm">• Stay in a ${esc(f('w37d2'))}-run hotel.</p><p class="text-sm">• Try ${esc(f('w37d3'))} produced food.</p><p class="text-sm">• Visit ${esc(f('w37d4'))}-famous places.</p></div>`:''}${D.sk?'<p class="mt-2 text-sm text-slate-500">Skipped. Press “Hoàn thành chặng” to continue.</p>':''}`)};

GR.w37ck=(st,S,D)=>{D.k=D.k||{};let last='';
return mBox('🧐 SELF-CHECK · I CAN…',`<div class="mt-2 space-y-2">${CKL.map((c,i)=>{const h=c[0]!==last?`<p class="mt-2 text-xs font-bold">${c[0]}</p>`:'';last=c[0];return h+gB('g_w37kc',`data-i="${i}"`,(D.k[i]?'✅ ':'☐ ')+esc(c[1]),D.k[i],'w-full text-left')}).join('')}</div>${CKL.every((_,i)=>D.k[i])?'<p class="mt-2 text-sm font-semibold text-green-600">🏅 All ticked! Finish the lesson to earn your badge.</p>':'<p class="mt-2 text-xs text-slate-500">Tick every skill you can do.</p>'}`)};

MX[K]={code:"USE OF ENGLISH",title:"The Travel Ad Lab",mx:130,q:"Can you build accurate compound adjectives and use them to describe people, places and travel experiences? · NOTICE → BUILD → CONTROL → CORRECT → TRANSFORM → USE",
end:{t:"🏅 COMPOUND ADJECTIVE BUILDER – BADGE EARNED",did:"You spotted compound adjectives in an advertisement, built them, sorted their patterns, completed and corrected them, and turned phrases into compound adjectives. You can now build, transform and use compound adjectives accurately.",r:"My favourite compound adjective is … One hyphen rule I remember: …"},steps:[
{i:"✈️",n:"Mission brief",t:"bucket",x:0,h:"✈️ THE TRAVEL AD LAB – 👀 SPOT · 🧩 BUILD · 🔬 PATTERN · 🎯 CONTROL · 🚦 CHECK · 🔥 TRANSFORM.",lab:["▶️ START"],items:[["Can you build accurate compound adjectives and use them to describe people, places and travel experiences?",-1]],sg:"SEE THE PATTERN → BUILD THE FORM → CONTROL → CHECK → TRANSFORM → USE"},
{i:"👀",n:"Mission 01 · Spot the Compound",id:"sp",t:"w37sp",x:10},
{i:"🧩",n:"Mission 02 · Build the Adjective",id:"bd",t:"w37bd",x:20},
{i:"🔬",n:"Mission 03 · What’s the Pattern?",id:"pt",t:"w37pt",x:15},
{i:"🎯",n:"Mission 04 · Focus",id:"fc",t:"w37fc",x:20},
{i:"✏️",n:"Mission 05 · Practice",id:"pr",t:"w37pr",x:25},
{i:"🚦",n:"Get It Right",id:"gr",t:"w37gr",x:10},
{i:"🔥",n:"Challenge · Transformation",id:"tf",t:"w37tf",x:20},
{i:"🌍",n:"Optional · Travel Ad",id:"ad",t:"w37ad",x:10},
{i:"🧐",n:"Self-check",id:"ck",t:"w37ck",x:0}
]};

document.addEventListener('click',e=>{const b=e.target.closest('[data-act^="g_w37"]');if(!b||b.disabled||GK!==K)return;const S=gS(K),D=gD(S,S.s),a=b.dataset.act,d=b.dataset,i=+d.i,k=+d.k;
if(a==='g_w37sp'){if(+d.t){if(!D.f[d.k]){D.f[d.k]=1;gAw(S,'sp'+d.k,1);if(Object.keys(D.f).length===6){gAw(S,'spb',4);S.ok[S.s]=1}}D.w=''}else D.w=d.k}
else if(a==='g_w37bp'){const bi=D.bi||0,t=BD[bi];D.b.push(d.p);D.bad=0;if(D.b.length===t.p.length){if(D.b.join('-')===t.t){D.dn[bi]=1;D.b=[];gAw(S,'bd'+bi,3)}else{D.b=[];D.bad=1}}}
else if(a==='g_w37bu'){D.b.pop()}
else if(a==='g_w37bn'){D.bi=(D.bi||0)+1;D.b=[];D.bad=0}
else if(a==='g_w37hq'){if(k===1){D.hq=1;gAw(S,'hq',8);S.ok[S.s]=1}else D.hw=k}
else if(a==='g_w37i3'){D.s=D.s===i?undefined:i;D.msg=0}
else if(a==='g_w37c3'){const c=+d.c;if(D.s!==undefined){if(I3[D.s][1]===c){D.pl[D.s]=c;gAw(S,'pt'+D.s,2);D.s=undefined;D.msg=0;if(Object.keys(D.pl).length===I3.length){gAw(S,'ptb',3);S.ok[S.s]=1}}else D.msg=1}}
else if(a==='g_w37fw'){D.s=D.s===+d.j?undefined:+d.j}
else if(a==='g_w37fb'){if(!D.ok[i]){if(D.s!==undefined){D.pl[i]=D.s;D.s=undefined;D.wr[i]=0}else if(D.pl[i]!==undefined)delete D.pl[i]}}
else if(a==='g_w37fk'){if(D.pl[i]===FS[i][2]){D.ok[i]=1;D.wr[i]=0;gAw(S,'fc'+i,3);if(Object.keys(D.ok).length===FS.length){gAw(S,'fcb',2);S.ok[S.s]=1}}else{D.wr[i]=1;D.h[i]=Math.max(D.h[i]||0,1)}}
else if(a==='g_w37fh'){D.h[i]=Math.min(3,(D.h[i]||0)+1)}
else if(a==='g_w37pf'){D.f[i]=k;D.wr[i]=0}
else if(a==='g_w37pj'){D.j[i]=k;D.wr[i]=0}
else if(a==='g_w37pc'){const p=PR[i];if(D.j[i]!==0)D.wr[i]=1;else if(D.f[i]!==p[3])D.wr[i]=2;else{D.ok[i]=1;D.wr[i]=0;gAw(S,'pr'+i,4);if(Object.keys(D.ok).length===6){gAw(S,'prb',1);S.ok[S.s]=1}}}
else if(a==='g_w37go'){if(k===0){D.c[i]=1;delete D.w[i]}else D.w[i]=k}
else if(a==='g_w37gc'){if(k===GI[i][2]){D.ch[i]=1;delete D.w['c'+i];gAw(S,'gr'+i,2);if(Object.keys(D.ch).length===4){gAw(S,'grb',2);S.ok[S.s]=1}}else D.w['c'+i]=k}
else if(a==='g_w37tc'){const t=TF[i],v=nrm(S.t['w37t'+i]),sv=v.replace(/[-\s]/g,'');
 if(t[3].test(v)){D.ok[i]=1;D.wr[i]='';gAw(S,'tf'+i,3);if(Object.keys(D.ok).length===6){gAw(S,'tfb',2);S.ok[S.s]=1}}
 else if(!v)D.wr[i]='Type your answer first.';
 else if(/years|days/.test(v)&&sv.replace(/s/g,'')===t[4].replace(/[-\s]/g,'').replace(/s/g,''))D.wr[i]='① Word form: a compound adjective before a noun does not take a plural -s.';
 else if(sv===t[4].replace(/[-\s]/g,''))D.wr[i]=i===4?'② Hyphen: no hyphen after an adverb ending in -ly.':'② Hyphen: the words work as ONE adjective before the noun. Check where the hyphen goes.';
 else D.wr[i]='① Word form: check the form of each word. Which words from the phrase do you need, and in which form?'}
else if(a==='g_w37am'){if(['w37d0','w37d1','w37d2','w37d3','w37d4'].every(x=>(S.t[x]||'').trim())){D.sd=1;D.bad=0;gAw(S,'ad',10);S.ok[S.s]=1}else D.bad=1}
else if(a==='g_w37ak'){D.sk=1;S.ok[S.s]=1}
else if(a==='g_w37kc'){D.k[i]=!D.k[i];if(CKL.every((_,j)=>D.k[j]))S.ok[S.s]=1}
gRender(K)});
}


