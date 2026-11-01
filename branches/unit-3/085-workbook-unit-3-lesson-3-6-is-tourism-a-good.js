/* ===== WORKBOOK · Unit 3 · Lesson 3.6 Is tourism a good thing? · THE TOURISM IMPACT LAB (mission key w2.5) ===== */
{const K='w2.5',
esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),
bx='mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700',
okc='!bg-green-100 !border-green-400',bdc='!bg-red-100 !border-red-400',
sup='<span class="ml-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">🧩 Web support · not from the Workbook</span>',
wc=t=>((t||'').match(/\S+/g)||[]).length,
inp=(S,k,ph)=>`<input data-g="${k}" value="${esc(S.t[k]||'')}" placeholder="${ph}" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/>`,
AR=["Mount Everest seems like a remote and untouched place, far away from the modern world.","But climbing Everest has become big business.","Tour operators charge thousands of dollars to organise expeditions and take climbers up Everest’s slopes.","The industry provides jobs for local people, such as small hotel owners and mountain guides.","Some of the money from the tours is spent on protecting the environment.","However, the tour routes are getting more and more crowded every year.","Climbers sometimes have to queue for more than an hour.","All the climbing is also causing erosion of the mountainside.","Climbers leave kilograms of litter behind them, and it is expensive to clean up."],
IMG=`<div class="${bx} text-center"><p class="text-4xl">🏔️</p><p class="text-xs text-slate-500">Photo of Mount Everest · add the source photo from the Workbook</p></div>`,
TT=["Climbers enjoy camping on Mount Everest","Crowds cause traffic jams on Mount Everest","Volunteers pick up litter after climbing trips"],
QS=[["What is increasing every year?",[5],"The tour routes are getting more and more crowded every year.",/crowd|climber|number|people|visitor|tour|queue|route/i],
["Who makes money from the tours?",[3],"Local people, such as small hotel owners and mountain guides, make money. (Tour operators also earn money.)",/hotel|guide|local|operator|people/i],
["What do climbers pay money for?",[2],"They pay tour operators to organise expeditions and take them up Everest’s slopes.",/expedition|organi|tour|slope|climb|trip|everest|guide/i],
["Why do you think climbers leave a lot of litter?",[8],"",null]],
IM=[["employs local people",1,"The industry provides jobs for local people."],["revenue used for environmental conservation",1,"Some of the money is spent on protecting the environment."],["routes getting more crowded",0,"The tour routes are getting more and more crowded every year."],["climbers queue for over an hour",0,"Climbers sometimes have to queue for more than an hour."],["erosion of the mountainside",0,"All the climbing is causing erosion of the mountainside."],["kilograms of litter",0,"Climbers leave kilograms of litter behind them."],["expensive to clean up",0,"It is expensive to clean the litter up."]],
TK=["Tourism is only beneficial.","Tourism is only harmful.","Tourism can have both benefits and costs."],
POS5=["Strongly against","Against","Not sure","For","Strongly for"],
FPR=["What could happen if tourism damages a protected area?","What would the area be like without crowds?","Who or what needs protection most?"],
APR=["Could tourism bring money or jobs to local people?","Could tourism money help conservation?","Could visitors learn to care about nature?"],
SUPP=["I think that…","One reason is that…","Another reason is that…","However,…","For these reasons,…"],
CHK=[["CONTENT","I clearly gave my opinion."],["CONTENT","I gave reasons for my opinion."],["CONTENT","My reasons relate to the statement."],["LANGUAGE","My sentences are complete."],["LANGUAGE","I checked spelling."],["LANGUAGE","I used suitable linking words."],["THINKING","I considered the issue rather than simply saying “good” or “bad”."],["THINKING","My opinion is supported by reasons."]],
SCK=["read an article and find its main idea","find evidence in a text to answer a question","identify the benefits and costs of tourism","give reasons for and against an idea","write a short paragraph with my opinion and reasons"],
STM="Tourists should be banned from protected natural areas.";

GR.w36rd=(st,S,D)=>{const ok=S.ok[S.s];
return mBox('🏔️ MISSION 01 · READ THE MOUNTAIN',`<p class="mt-2 text-sm">Read for the main idea first. Don’t worry about every word. ${sup}</p><p class="text-xs text-slate-500">Article rebuilt from the lesson notes · compare with Workbook p.49.</p>${IMG}
<div class="${bx}"><p class="text-sm leading-7">${AR.map(esc).join(' ')}</p></div>
<p class="mt-3 text-sm font-bold">What is this article mainly about?</p><div class="mt-2 flex flex-col gap-2">${TT.map((t,i)=>gB('g_w36rd',`data-i="${i}" ${ok?'disabled':''}`,['A. ','B. ','C. '][i]+esc(t),ok&&i===1,D.w===i&&!ok?bdc:'')).join('')}</div>
${D.w!==undefined&&!ok?`<div class="${bx}"><p class="text-sm font-bold">🤔 Think about the whole article.</p><p class="text-sm">Does it mainly describe: ○ enjoying a holiday? ○ increasing crowds and environmental problems? ○ volunteers cleaning the mountain?</p></div>`:''}
${ok?'<p class="mt-3 text-sm font-semibold text-green-600">✅ Good reading. The article focuses on the growing number of climbers and the effects of tourism on Mount Everest.</p>':''}`)};

GR.w36ev=(st,S,D)=>{D.q=D.q===undefined?0:D.q;D.ev=D.ev||{};D.an=D.an||{};const q=D.q,Q=QS[q],done=Object.keys(D.an).length;
const body=!D.ev[q]?`<p class="mt-2 text-sm">🔎 Go back to the text. Tap the sentence that helps you answer.</p>${D.bad?'<p class="text-sm text-red-600">That sentence doesn’t answer this question. Read again.</p>':''}`
:`<p class="mt-2 text-sm text-green-600">🟢 Evidence found.</p>${q===3?`<div class="${bx}"><p class="text-sm font-bold">💭 Thinking mode</p><p class="text-sm">The text tells you <b>what</b> happens. Now think about <b>why</b> it might happen. ${sup}</p></div>`:''}${inp(S,'w36q'+q,q===3?'I think climbers leave a lot of litter because …':q===1?'… and …':'your answer')}
${D.an[q]?`<p class="mt-2 text-sm text-green-600">✅ ${q===3?'This is an open question. Your answer should give a reasonable explanation.':'Possible answer: '+esc(Q[2])}</p>`:`<button data-act="g_w36an" class="mt-2 ${mbtn}">Check answer</button>${D.wa?`<p class="mt-2 text-sm text-red-600">${q===3?'Write at least 5 words and explain why.':'Look at the highlighted evidence again, then try a different answer.'}</p>`:''}`}`;
return mBox('🔎 MISSION 02 · FIND THE EVIDENCE · '+done+' / 4',`<div class="${bx}"><p class="text-xs font-bold">ARTICLE</p><div class="mt-2 flex flex-wrap gap-1">${AR.map((s,i)=>gB('g_w36st',`data-i="${i}"`,esc(s),false,'!text-left !text-sm '+(Object.keys(D.ev).some(k=>D.ev[k]&&QS[k][1].includes(i))?'!bg-yellow-100 !border-yellow-400':''))).join('')}</div></div>
<div class="${bx}"><p class="text-xs font-bold">EVIDENCE QUESTIONS</p><div class="mt-2 flex flex-col gap-2">${QS.map((x,i)=>gB('g_w36q',`data-i="${i}"`,'🔎 0'+(i+1)+' '+esc(x[0]),q===i,D.an[i]?okc:'')).join('')}</div></div>
<div class="${bx} border-2 border-orange-300"><p class="text-sm font-bold">0${q+1} ${esc(Q[0])}</p>${body}</div>`)};

GR.w36mp=(st,S,D)=>{D.pl=D.pl||{};const N=IM.length,pl=Object.keys(D.pl).length,sel=D.s;
const chip=i=>gB('g_w36ic',`data-i="${i}"`,esc(IM[i][0]),sel===i,D.pl[i]!==undefined?okc+' !px-2 !py-1':'!px-2 !py-1'),
zone=(v,t,c)=>`<div class="${bx} border-2 ${c}"><p class="text-xs font-bold">${t}</p><div class="mt-2 flex flex-wrap gap-2 min-h-[2.5rem]">${IM.map((_,i)=>D.pl[i]===v?chip(i):'').join('')}</div><button data-act="g_w36iz" data-v="${v}" ${sel===undefined?'disabled':''} class="mt-2 ${mbtn}">⬇️ Put the selected card here</button></div>`;
const sum=pl===N?`<div class="${bx}"><p class="text-xs font-bold">💡 TOURISM IMPACT SUMMARY</p><p class="text-center font-extrabold mt-1">TOURISM ON EVEREST</p><div class="mt-2 grid sm:grid-cols-2 gap-2"><div class="p-2 rounded-xl bg-green-50 border border-green-200"><p class="text-xs font-bold">🟢 BENEFITS</p>${IM.filter(x=>x[1]).map(x=>`<p class="text-sm">• ${esc(x[0])}</p>`).join('')}</div><div class="p-2 rounded-xl bg-red-50 border border-red-200"><p class="text-xs font-bold">🔴 COSTS / PROBLEMS</p>${IM.filter(x=>!x[1]).map(x=>`<p class="text-sm">• ${esc(x[0])}</p>`).join('')}</div></div></div>
<p class="mt-3 text-sm font-bold">What did you discover?</p><div class="mt-2 flex flex-col gap-2">${TK.map((t,i)=>gB('g_w36tk',`data-i="${i}" ${D.tk?'disabled':''}`,esc(t),D.tk&&i===2,D.tw===i&&!D.tk?bdc:'')).join('')}</div>${D.tw!==undefined&&!D.tk?'<p class="mt-2 text-sm text-red-600">Look at your map. Are there items on both sides?</p>':''}${D.tk?'<p class="mt-2 text-sm font-semibold text-green-600">✅ Tourism can help a place and harm it at the same time.</p>':''}`:'';
return mBox('🗺️ MISSION 03 · THE TOURISM IMPACT MAP · '+pl+' / '+N,`<p class="mt-2 text-sm">Sort the evidence from the article. Tap a card, then tap a zone. ${sup}</p><div class="${bx} text-center"><p class="font-extrabold">🏔️ MOUNT EVEREST</p></div>
<div class="${bx}"><p class="text-xs font-bold">EVIDENCE</p><div class="mt-2 flex flex-wrap gap-2">${IM.map((_,i)=>D.pl[i]===undefined?chip(i):'').join('')}</div></div>
<div class="grid sm:grid-cols-2 gap-3">${zone(1,'🟢 BENEFITS','border-green-300')}${zone(0,'🔴 COSTS / PROBLEMS','border-red-300')}</div>
${D.msg?`<p class="mt-2 text-sm text-red-600">${D.msg}</p>`:''}${sum}`)};

GR.w36fa=(st,S,D)=>{const col=(t,p,pr,c)=>`<div class="${bx} border-2 ${c}"><p class="text-xs font-bold">${t}</p><ul class="mt-1 text-xs list-disc pl-4">${pr.map(x=>`<li>${x}</li>`).join('')}</ul>${[0,1,2].map(i=>`<div class="mt-2"><p class="text-xs font-bold">Reason ${i+1}</p>${inp(S,'w36'+p+i,'reason …')}<p class="mt-1 text-xs">Why? <span class="text-slate-500">(claim → reason)</span></p>${inp(S,'w36'+p+'y'+i,'This is a reason because …')}</div>`).join('')}</div>`;
return mBox('⚖️ MISSION 04 · FOR OR AGAINST?',`<div class="${bx} text-center"><p class="text-xs font-bold">STATEMENT</p><p class="text-lg font-extrabold">“${STM}”</p></div>
<p class="mt-3 text-sm font-bold">Step 1 · Where do you stand? <span class="font-normal text-xs">(no right or wrong)</span></p><div class="mt-2 flex flex-wrap gap-2">${POS5.map((p,i)=>gB('g_w36ps',`data-i="${i}"`,(i===0?'◀ ':'')+p+(i===4?' ▶':''),D.pos===i)).join('')}</div>
<p class="mt-3 text-sm font-bold">Step 2 · Build the argument board. ${sup}</p><div class="grid md:grid-cols-2 gap-3">${col('👍 FOR','f',FPR,'border-green-300')}${col('👎 AGAINST','a',APR,'border-red-300')}</div>
<button data-act="g_w36fk" class="mt-3 ${mbtn}">Check my board</button>${D.bad?`<p class="mt-2 text-sm text-red-600">${D.bad}</p>`:''}${S.ok[S.s]?'<p class="mt-2 text-sm font-semibold text-green-600">🎉 Six reasons, each with a “why”. You can see both sides!</p>':''}`)};

GR.w36ch=(st,S,D)=>{D.k=D.k||{};const par=S.t.w36par||'',w=wc(par),PL=["🟢 I agree","🟡 I’m partly convinced","🔴 I disagree"];
return mBox('🔥 FINAL MISSION · YOUR TOURISM VERDICT',`<div class="${bx} text-center"><p class="text-lg font-extrabold">“${STM}”</p><p class="text-xs text-slate-500">What is your opinion? Write a short paragraph.</p></div>
<p class="mt-3 text-sm font-bold">Step 1 · My position</p><div class="mt-2 flex flex-wrap gap-2">${PL.map((p,i)=>gB('g_w36cp',`data-i="${i}"`,p,D.p===i)).join('')}</div>
<p class="mt-3 text-sm font-bold">Step 2 · Build before writing ${sup}</p>${[['My opinion','w36o0'],['Reason 1','w36o1'],['Reason 2','w36o2'],['Conclusion','w36o3']].map((x,i)=>`<div class="${bx}"><p class="text-xs font-bold">${i?'↓ ':''}${x[0]}</p>${inp(S,x[1],'…')}</div>`).join('')}
<p class="mt-3 text-sm font-bold">Step 3 · Write your short paragraph</p><div class="mt-2 flex flex-wrap gap-2">${SUPP.map((s,i)=>gB('g_w36sp',`data-i="${i}"`,esc(s),false,'!text-xs')).join('')}</div><p class="text-xs text-slate-500">Writing support: tap to add a starter. You write the ideas.</p>${gTA(S,'w36par','Write your opinion here …')}<p class="text-xs text-slate-500">${w} words · aim for 35+</p>
<p class="mt-3 text-sm font-bold">Step 4 · 🧐 Opinion checker</p><div class="mt-2 space-y-2">${CHK.map((c,i)=>gB('g_w36ck',`data-i="${i}"`,(D.k[i]?'✅ ':'☐ ')+'<span class="text-xs font-bold">'+c[0]+'</span> · '+esc(c[1]),D.k[i],'w-full text-left')).join('')}</div>
<button data-act="g_w36cx" class="mt-3 ${mbtn}">Finish my verdict</button>${D.bad?`<p class="mt-2 text-sm text-red-600">${D.bad}</p>`:''}${S.ok[S.s]?'<p class="mt-2 text-sm font-semibold text-green-600">🏅 Verdict complete. You looked at both sides and formed your own opinion!</p>':''}`)};

GR.w36ru=(st,S,D)=>{
return mBox('🌏 OPTIONAL · MY TOURISM RULE',`<p class="mt-2 text-sm">If you could make ONE rule for tourists visiting protected natural areas, what would it be? ${sup}</p><div class="mt-2 flex gap-2">${gB('g_w36rs','data-i="0"','Tourists should…',D.r===0)}${gB('g_w36rs','data-i="1"','Tourists shouldn’t…',D.r===1)}</div>${inp(S,'w36r1','… (the rule)')}<p class="mt-2 text-sm">Because…</p>${inp(S,'w36r2','because …')}
<div class="mt-3 flex flex-wrap gap-2"><button data-act="g_w36ru" class="${mbtn}">Save my rule</button><button data-act="g_w36rk" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600">Skip this part →</button></div>${D.bad?`<p class="mt-2 text-sm text-red-600">${D.bad}</p>`:''}${D.sv?`<div class="${bx} text-center"><p class="font-bold">Tourists ${D.r?'shouldn’t':'should'} ${esc(S.t.w36r1)}</p><p class="text-sm">because ${esc(S.t.w36r2)}</p></div>`:''}${D.sk?'<p class="mt-2 text-sm text-slate-500">Skipped. Press “Hoàn thành chặng” to continue.</p>':''}`)};

MX[K]={code:"WORKBOOK 3.6",title:"The Tourism Impact Lab",mx:120,q:"Can you look at the impact of tourism, understand different sides of an issue, and form your own opinion? · READ → FIND EVIDENCE → IMPACTS → BOTH SIDES → REASONS → OPINION",
end:{t:"🏅 TOURISM THINKER – BADGE EARNED",did:"You read about Mount Everest, found evidence, mapped benefits and costs, built reasons for and against, and wrote your own tourism verdict. READ → EVIDENCE → IMPACT → BOTH SIDES → OPINION.",r:"One benefit of tourism: … One problem tourism can cause: …"},steps:[
{i:"🏔️",n:"Mission 00 · Enter the Impact Lab",t:"bucket",x:5,h:"🏔️ THE TOURISM IMPACT LAB – Mount Everest looks isolated. But is it really untouched? Your mission: Read. Investigate. Think. Decide.",lab:["Agree","Not sure","Disagree"],items:[["“Tourism can help a place and harm it at the same time.” (No right or wrong answer – just predict.)",-1]],sg:"🔓 Mission 01 unlocked"},
{i:"📖",n:"Mission 01 · Read the Mountain",id:"rd",t:"w36rd",x:20},
{i:"🔎",n:"Mission 02 · Find the Evidence",id:"ev",t:"w36ev",x:30},
{i:"🗺️",n:"Mission 03 · Tourism Impact Map",id:"mp",t:"w36mp",x:20},
{i:"⚖️",n:"Mission 04 · For or Against?",id:"fa",t:"w36fa",x:20},
{i:"🔥",n:"Final Mission · Your Tourism Verdict",id:"ch",t:"w36ch",x:25},
{i:"🌏",n:"Optional · My Tourism Rule",id:"ru",t:"w36ru",x:0},
{i:"📋",n:"Self-check",t:"bucket",x:0,h:"🏔️ TOURISM IMPACT CHECK – I can…",lab:["✅ Yes","🔄 Not yet"],items:SCK.map(x=>["I can "+x+".",-1])}
]};

document.addEventListener('click',e=>{const b=e.target.closest('[data-act^="g_w36"]');if(!b||b.disabled||GK!==K)return;const S=gS(K),D=gD(S,S.s),a=b.dataset.act,d=b.dataset,i=+d.i;
if(a==='g_w36rd'){if(i===1){S.ok[S.s]=1;gAw(S,'rd',20)}else D.w=i}
else if(a==='g_w36q'){D.q=i;D.bad=0;D.wa=0}
else if(a==='g_w36st'){const q=D.q;if(!D.ev[q]){if(QS[q][1].includes(i)){D.ev[q]=1;D.bad=0;gAw(S,'ev'+q,2)}else D.bad=1}}
else if(a==='g_w36an'){const q=D.q,v=(S.t['w36q'+q]||'').trim(),ok=q===3?wc(v)>=5:(wc(v)>=2&&QS[q][3].test(v));if(ok){D.an[q]=1;D.wa=0;gAw(S,'an'+q,5);if(Object.keys(D.an).length===4){gAw(S,'evb',2);S.ok[S.s]=1}}else D.wa=1}
else if(a==='g_w36ic'){if(D.pl[i]===undefined)D.s=D.s===i?undefined:i;D.msg=''}
else if(a==='g_w36iz'){const s=D.s;if(s!==undefined){if(IM[s][1]===+d.v){D.pl[s]=+d.v;D.s=undefined;D.msg='';gAw(S,'im'+s,2)}else D.msg='Not this side. 🔎 Check the article: “'+esc(IM[s][2])+'” Does this help the place or cause a problem?'}}
else if(a==='g_w36tk'){if(i===2){D.tk=1;gAw(S,'tk',6);S.ok[S.s]=1}else D.tw=i}
else if(a==='g_w36ps'){D.pos=i}
else if(a==='g_w36fk'){const R=['f','a'],ids=[];R.forEach(p=>[0,1,2].forEach(n=>ids.push(p+n)));const rs=ids.filter(k=>wc(S.t['w36'+k])>=3),ys=ids.filter(k=>wc(S.t['w36'+k[0]+'y'+k[1]])>=3);
 if(D.pos===undefined)D.bad='Choose where you stand first.';else if(rs.length<6)D.bad='Write all 6 reasons (3+ words each). '+rs.length+' / 6 so far.';else if(ys.length<3)D.bad='Add a “Why?” to at least 3 reasons. '+ys.length+' / 3 so far.';else{D.bad='';gAw(S,'fp',2);rs.forEach(k=>gAw(S,'r'+k,2));ys.slice(0,3).forEach(k=>gAw(S,'y'+k,2));S.ok[S.s]=1}}
else if(a==='g_w36cp'){D.p=i}
else if(a==='g_w36sp'){S.t.w36par=(S.t.w36par||'').replace(/\s+$/,'')+(S.t.w36par?' ':'')+SUPP[i]+' '}
else if(a==='g_w36ck'){D.k[i]=!D.k[i]}
else if(a==='g_w36cx'){const fr=['w36o0','w36o1','w36o2','w36o3'].every(k=>wc(S.t[k])>=2),w=wc(S.t.w36par),ck=CHK.every((_,j)=>D.k[j]);
 if(D.p===undefined)D.bad='Choose your position first.';else if(!fr)D.bad='Fill in all 4 parts of “My argument” first.';else if(w<35)D.bad='Write at least 35 words ('+w+' so far).';else if(!ck)D.bad='Tick every box in the opinion checker when it is true for your paragraph.';else{D.bad='';gAw(S,'fr',5);gAw(S,'par',12);gAw(S,'ck',8);S.ok[S.s]=1}}
else if(a==='g_w36rs'){D.r=i}
else if(a==='g_w36ru'){if(D.r!==undefined&&wc(S.t.w36r1)>=2&&wc(S.t.w36r2)>=2){D.sv=1;D.bad='';S.ok[S.s]=1}else D.bad='Choose should / shouldn’t, then write your rule and a reason.'}
else if(a==='g_w36rk'){D.sk=1;S.ok[S.s]=1}
gRender(K)});
}


