
/* ===== Lesson 1.1 · Mission 1.1 = Bài tập thực hành theo sách. Mỗi bài trong Learner’s Book là một round trên bản đồ ===== */
(function(){
const KEY='cge9l11m';
let S={};try{S=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){S={}}
S.ok=S.ok||{};S.aw=S.aw||{};S.xp=S.xp||0;S.t=S.t||{};S.s=S.s||0;S.v='map';
const sv=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const esc=t=>String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const norm=t=>String(t||'').toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g,' ').trim();
const wc=s=>(String(s||'').trim().match(/\S+/g)||[]).length;
const snd=ok=>{try{if(window.cgeSound)window.cgeSound(ok?'correct':'wrong')}catch(e){}};
const aw=(k,n)=>{if(!S.aw[k]){S.aw[k]=1;S.xp=(S.xp||0)+n}};
const BTN='px-4 py-2 rounded-xl bg-blue-600 text-white font-medium disabled:opacity-40';
const GHOST='px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 text-sm';
const TA='mt-3 w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm';
const cl=(on,ck,good)=>ck&&on?(good?'border-green-500 bg-green-50 dark:bg-slate-700':'border-red-400 bg-red-50 dark:bg-slate-700'):on?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600';
const TITLE='Does talking in class help or hurt learning?';

/* ---------- dữ liệu (theo Learner’s Book 1.1) ---------- */
const LBL={for:'For (ủng hộ)',against:'Against (phản đối)',mixed:'Mixed (lưỡng lự)'};
const E1=[
['Eva','for','Hỏi bạn bên cạnh thay vì ngắt lời cô giáo, nên bạn ấy ủng hộ.'],
['Tarak','for','Nói chuyện nhỏ về bài học giúp học nhờ so sánh đáp án, nên bạn ấy ủng hộ.'],
['Anna','against','Nói chuyện làm xao nhãng việc học và giáo viên mệt vì phải nhắc, nên bạn ấy phản đối.'],
['Joseph','for','Giáo viên cho phép và khuyến khích nói nhỏ về bài đang làm, nên bạn ấy ủng hộ.'],
['Han','mixed','Hay bị mắng vì tán gẫu, nhưng giờ tiếng Tây Ban Nha cần nói nhiều: “yes and no, it depends”.'],
['Milo','mixed','Chia sẻ ý tưởng giúp học, nhưng người khác nói chuyện sai lúc làm bạn khó tập trung.']];
const E2=[
[['If you ','interrupt',' someone while they are speaking, you …'],['tell them to be quiet','speak while they are speaking'],1,'interrupt = nói chen vào khi người khác đang nói.','Don’t interrupt me while I’m talking.'],
[['If you ','compare',' two things, you …'],['look at the ways they are similar or different','add them together'],0,'compare = so sánh, xem điểm giống và khác.','Compare your answers with a partner.'],
[['If you ','distract',' someone, you …'],['take their attention away from something','upset them'],0,'distract = làm ai xao nhãng.','My phone distracts me when I study.'],
[['If you ','encourage',' someone to do something, you …'],['want them to believe they can do something','want them to be careful about doing something'],0,'encourage = khuyến khích, làm ai tin mình làm được.','My teacher encourages me.'],
[['If you ','tell',' someone ','off',', you …'],['tell them to go away','speak angrily to them because they have done something wrong'],1,'tell someone off = mắng ai vì làm sai.','The teacher told him off.'],
[['If you ','get into trouble',' for doing something, you …'],['are worried about something','are in a situation where you have done something wrong'],1,'get into trouble = gặp rắc rối vì đã làm điều sai.','I got into trouble for chatting.'],
[['If you ','share ideas',', you …'],['let other people know what they are','keep them secret'],0,'share ideas = chia sẻ ý tưởng cho người khác biết.','Sharing ideas helps me learn.'],
[['If you ','are supposed to',' do something, …'],['people expect you to do it','you’re ready to do it'],0,'be supposed to = được mong đợi / có nhiệm vụ phải làm.','We’re supposed to be quiet in the library.'],
[['If you ','concentrate',' on something, you …'],['give it all your attention','are puzzled by it'],0,'concentrate on = tập trung hoàn toàn vào.','I concentrate on my homework.']];
const RAW3=[
['Eva',['Often asks a classmate instead of ',['interrupting'],' the teacher.']],
['Tarak',['Says that you can learn by ',['comparing'],' answers.']],
['Anna',['Says that talking in class ',['distracts'],' you from getting on with your work.']],
['Joseph',['Teachers ',['encourage'],' students to talk quietly during the lesson, if it’s about work.']],
['Han',['Teachers sometimes ',['tell'],' students ',['off'],' for talking in class. Han ',['gets into'],' trouble for chatting to her friends.']],
['Milo',[['sharing'],' ideas helps him to learn. Sometimes people talk when they’re not ',['supposed'],' to, so you can’t ',['concentrate on','concentrate'],' what you’re doing.']]];
const ANS=[];const R3=RAW3.map(r=>[r[0],r[1].map(p=>{if(Array.isArray(p)){ANS.push(p);return ANS.length-1}return p})]);
const ok3=i=>{const v=norm((S.e3||{})[i]);return !!v&&ANS[i].some(a=>norm(a)===v)};
const BANK=['interrupt','compare','distract','encourage','tell off','get into trouble','share ideas','be supposed to','concentrate on'];
const UQ=[
['Our teachers don’t mind us ___ quietly.',['to talk','talk','talking'],2,'Sau “mind” dùng V-ing.'],
['I sometimes get into trouble for ___ in class.',['chatting','to chat','chat'],0,'Sau giới từ “for” dùng V-ing.'],
['___ ideas helps me to learn.',['Sharing','Share','To sharing'],0,'V-ing làm chủ ngữ của câu.'],
['She asks a classmate instead of ___ the teacher.',['interrupt','to interrupt','interrupting'],2,'Sau giới từ “instead of” dùng V-ing.'],
['Han is good at ___ answers with her friends.',['to compare','comparing','compare'],1,'Sau giới từ “at” dùng V-ing.'],
['I enjoy ___ in groups.',['working','to work','work'],0,'Sau “enjoy” dùng V-ing.']];
const CHK5=['-ing sau giới từ','-ing làm chủ ngữ','≥ 3 từ vựng ở Ex 2','nhắc người For / Against / Mixed'];
const VOC=['interrupt','distract','encourage','tell someone off','get into trouble','share ideas','concentrate'];

/* ---------- điều kiện qua round ---------- */
const G={
0:()=>!!S.c0,
1:()=>!!S.c1&&E1.every(r=>(S.e1||{})[r[0]]===r[1]),
2:()=>!!S.c2&&E2.every((r,i)=>(S.e2||{})[i]===r[2]),
3:()=>!!S.c3&&ANS.every((a,i)=>ok3(i)),
4:()=>{const f=S.fin;return !!(f&&f.o&&f.r&&f.e&&f.v>=3)&&(!S.sc||!!S.sc.done)},
5:()=>wc(S.t.a5)>=25,
6:()=>!!S.cu&&UQ.every((r,i)=>(S.u||{})[i]===r[2])};

/* ---------- thân từng round (render lại từng phần khi bấm) ---------- */
const b0=()=>{const w=S.w||{},side=S.side,why=S.why;
return `<p class="mt-2 text-sm">Do you like working in groups or do you prefer working on your own? Are there times when it’s good to talk in a lesson?</p><div class="mt-2 flex flex-wrap gap-2">${[['groups','👥 In groups'],['alone','🧍 On my own'],['depends','🤔 It depends']].map(o=>`<button data-l11="w" data-v="${o[0]}" class="${mch(w.p===o[0])}">${o[1]}</button>`).join('')}</div>
<p class="mt-5 font-semibold">Students should be allowed to talk during lessons.</p><div class="mt-3 grid grid-cols-2 gap-3">${[['good','👍 GOOD IDEA'],['bad','👎 BAD IDEA']].map(x=>`<button data-l11="side" data-v="${x[0]}" class="px-4 py-4 rounded-xl border-2 font-bold ${cl(side===x[0])}">${x[1]}</button>`).join('')}</div>${side?`<p class="mt-4 text-sm">Interesting. Why?</p><div class="mt-2 flex flex-wrap gap-2">${(side==='good'?CG:CB).map(r=>`<button data-l11="why" data-v="${esc(r)}" class="${mch(why===r)}">${r}</button>`).join('')}</div><p class="mt-4 text-sm">Tell us why.</p><textarea data-l11t="court" rows="3" placeholder="I think talking in class is ___ because ___." class="${TA}">${esc(S.t.court||'')}</textarea><button data-l11="lock" ${why?'':'disabled'} class="mt-3 ${BTN}">Lock my opinion</button>`:''}${S.c0?'<p class="mt-3 text-green-600 font-semibold">🎉 Opinion unlocked! +10 XP</p>':''}`};
const b1=()=>{const a=S.e1||{},ck=S.c1;let ok=0;
const rows=E1.map(r=>{const v=a[r[0]],good=v===r[1];if(ck&&good)ok++;
return `<div class="p-3 mt-2 rounded-xl bg-slate-100 dark:bg-slate-700"><div class="flex flex-wrap items-center gap-2"><b class="w-16">${r[0]}</b>${['for','against','mixed'].map(o=>`<button data-l11="e1" data-s="${r[0]}" data-v="${o}" class="px-3 py-1.5 rounded-xl border-2 text-sm font-semibold ${cl(v===o,ck,good)}">${o==='for'?'👍 For':o==='against'?'👎 Against':'🤔 Mixed'}</button>`).join('')}</div>${ck&&v?`<p class="mt-2 text-xs ${good?'text-green-600':'text-red-600'}">${good?'✅ ':'❌ Đáp án: '+LBL[r[1]]+'. '}${r[2]}</p>`:''}</div>`}).join('');
const all=Object.keys(a).length===E1.length;
return rows+`<div class="mt-3 flex flex-wrap items-center gap-3"><button data-l11="c1" ${all?'':'disabled'} class="${BTN}">Kiểm tra</button><button data-l11="r1" class="${GHOST}">Làm lại</button>${ck?`<span class="text-sm font-semibold">${ok}/${E1.length}</span>`:''}</div>${ck&&ok===E1.length?'<p class="mt-2 text-sm text-green-600 font-semibold">🎉 Chính xác! Bạn đã phân biệt đúng 3 nhóm ý kiến.</p>':''}`};
const b2=()=>{const a=S.e2||{},ck=S.c2;let ok=0;
const rows=E2.map((r,i)=>{const v=a[i],good=v===r[2];if(ck&&good)ok++;
return `<div class="p-3 mt-2 rounded-xl bg-slate-100 dark:bg-slate-700"><p class="text-sm font-medium">${'abcdefghi'[i]}. ${r[0].map((x,j)=>j%2?`<b class="text-blue-700 dark:text-blue-300">${x}</b>`:x).join('')}</p><div class="mt-2 grid gap-2 sm:grid-cols-2">${r[1].map((o,j)=>`<button data-l11="e2" data-q="${i}" data-o="${j}" class="text-left px-3 py-2 rounded-xl border-2 text-sm ${cl(v===j,ck,good)}">${o}</button>`).join('')}</div>${ck&&v!==undefined?`<p class="mt-2 text-xs ${good?'text-green-600':'text-red-600'}">${good?'✅ ':'❌ '}${r[3]} <i class="text-slate-500">${r[4]}</i></p>`:''}</div>`}).join('');
const all=Object.keys(a).length===E2.length;
return rows+`<div class="mt-3 flex flex-wrap items-center gap-3"><button data-l11="c2" ${all?'':'disabled'} class="${BTN}">Kiểm tra</button><button data-l11="r2" class="${GHOST}">Làm lại</button>${ck?`<span class="text-sm font-semibold">${ok}/${E2.length}</span>`:''}</div>`};
const b3=()=>{const ck=S.c3,sh=S.s3,e=S.e3||{};let ok=0;
const rows=R3.map(r=>`<div class="p-3 mt-2 rounded-xl bg-slate-100 dark:bg-slate-700"><p class="text-sm leading-9"><b class="text-blue-700 dark:text-blue-300">${r[0]}:</b> ${r[1].map(p=>{if(typeof p==='string')return esc(p);const g=ok3(p);if(ck&&g)ok++;const v=e[p]||'';const c=ck?(g?'border-green-500 bg-green-50 dark:bg-slate-700':'border-red-400 bg-red-50 dark:bg-slate-700'):'border-slate-300 dark:border-slate-600';return `<input data-l11i="${p}" value="${esc(v)}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${p===ANS.length-1?'9rem':'7.5rem'}" class="mx-1 px-2 py-0.5 rounded-lg border-2 bg-transparent text-sm ${c}" aria-label="blank ${p+1}"/>${sh?`<span class="text-xs text-green-600">(${ANS[p][0]})</span>`:''}`}).join('')}</p></div>`).join('');
return `<div class="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-slate-700 text-sm"><p class="text-xs font-bold text-orange-500">WORD BANK · các động từ in đậm ở Ex 2</p><p class="mt-1 flex flex-wrap gap-2">${BANK.map(w=>`<span class="px-2 py-0.5 rounded-lg border border-slate-300 dark:border-slate-500">${w}</span>`).join('')}</p><p class="mt-2 text-xs text-slate-500">Chia động từ đúng dạng (-ing, -s…). Mỗi ô trống một từ, trừ “concentrate on”.</p></div>${rows}<div class="mt-3 flex flex-wrap items-center gap-3"><button data-l11="c3" class="${BTN}">Kiểm tra</button><button data-l11="sh3" class="${GHOST}">${sh?'Ẩn đáp án':'Hiện đáp án'}</button><button data-l11="r3" class="${GHOST}">Làm lại</button>${ck?`<span class="text-sm font-semibold">${ok}/${ANS.length}</span>`:''}</div>${ck&&ok===ANS.length?'<p class="mt-2 text-sm text-green-600 font-semibold">🎉 Hoàn thành ghi chú của nhà báo!</p>':''}`};
const b4=()=>{const so=S.so||{},f=S.fin,c=(ok,t)=>`<li>${ok?'✅':'⬜'} ${t}</li>`;
const sorting=SO.map((q,i)=>`<div class="mt-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-700"><p class="text-sm font-medium">${i+1}. ${q[0]}</p><div class="mt-2 flex gap-2"><button data-l11="so" data-i="${i}" data-v="1" class="${mch(so[i]==='1')}">🟢 HELPFUL</button><button data-l11="so" data-i="${i}" data-v="0" class="${mch(so[i]==='0')}">🔴 UNHELPFUL</button></div>${so[i]===undefined?'':(+so[i]===q[1]?`<p class="mt-2 text-sm text-green-600">✅ ${q[1]?'Helpful':'Unhelpful'}. ${q[2]}</p>`:'<p class="mt-2 text-sm text-red-600">Not quite. Think again.</p>')}</div>`).join('');
return `<p class="mt-3 text-sm font-semibold">🧠 Bước 1 · Chuẩn bị ý: kiểu nói chuyện nào giúp học?</p>${sorting}
<div class="mt-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm italic">“I agree with Milo. Sharing ideas helps me to learn. But I’m also a bit like Han, because I sometimes get into trouble for chatting with my friends.”</div>
<div class="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-slate-700 text-sm"><b>💡 Speaking tip:</b> Be careful to use -ing forms in the correct places. If you make a mistake when you are speaking, just stop and correct it: <i>“I sometimes get into trouble for chat with my … I mean, for chatting with … my friends.”</i></div>
<p class="mt-5 text-sm font-semibold">🏆 Bước 2 · Final Boss: What do you think about talking in class? Share your view in 60 seconds.</p><p class="text-sm text-slate-500">Nói thành tiếng trong 60 giây (hoặc nói với nhóm), rồi viết lại ý của bạn. Gợi ý: I agree with … / I think … because … For example, … However, …</p><textarea data-l11t="final" rows="4" placeholder="I think talking in class can …" class="${TA}">${esc(S.t.final||'')}</textarea><div class="mt-2 flex flex-wrap gap-2 text-xs">${VOC.map(w=>`<span class="px-2 py-1 rounded-full bg-orange-100 text-orange-600">${w}</span>`).join('')}</div><button data-l11="fin" class="mt-3 ${BTN}">Check my speech</button>${f?`<ul class="mt-3 text-sm space-y-1">${c(f.o,'an opinion (I think… / I agree…)')}${c(f.r,'a reason (because…)')}${c(f.e,'an example (for example…)')}${c(f.v>=3,'at least 3 vocabulary words ('+f.v+')')}</ul>`:''}${S.sc?`<div class="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-slate-700"><p class="font-semibold text-sm">🔄 CAN YOU IMPROVE IT?</p><p class="text-sm mt-1">“${esc(S.sc.q)}” – Something is missing. Which is correct?</p><div class="mt-2 flex gap-2">${[S.sc.v,S.sc.v+'s'].map(x=>`<button data-l11="sc" data-v="${x}" ${S.sc.done?'disabled':''} class="${mch(S.sc.pick===x)}">${x}</button>`).join('')}</div>${S.sc.done?'<p class="mt-2 text-green-600 text-sm">🎉 You corrected your own mistake! +5 XP</p>':S.sc.pick?'<p class="mt-2 text-red-600 text-sm">After an -ing subject, the verb takes -s (it is like “it”). Try again.</p>':''}</div>`:''}`};
const recap=()=>{if(!G[3]())return '<p class="mt-3 text-xs text-slate-500">💡 Hoàn thành đúng Ex 3 để hiện ghi chú hoàn chỉnh của nhà báo ở đây.</p>';
return `<div class="mt-3 p-3 rounded-xl bg-green-50 dark:bg-slate-700 text-sm"><p class="text-xs font-bold text-green-700 dark:text-green-300">📝 GHI CHÚ CỦA NHÀ BÁO (từ Ex 3)</p><ul class="mt-1 space-y-1">${R3.map(r=>{let s=r[1].map(p=>typeof p==='string'?p:ANS[p][0]).join('');s=s.charAt(0).toUpperCase()+s.slice(1);return `<li><b>${r[0]}:</b> ${esc(s)}</li>`}).join('')}</ul></div>`};
const b5=()=>{const c=S.ck||{};
return `${recap()}<textarea data-l11t="a5" rows="7" placeholder="For some of them, talking in class is a good thing, because … For others, … And some students have mixed feelings: …" class="${TA}">${esc(S.t.a5||'')}</textarea><p class="mt-1 text-xs text-slate-500">Số từ: <b id="l11wc">${wc(S.t.a5)}</b> (viết ít nhất 25 từ để qua round, +10 XP).</p><p class="mt-3 text-sm font-semibold">Tự kiểm tra bài viết của bạn (+2 XP mỗi ý):</p><div class="mt-2 flex flex-wrap gap-2">${CHK5.map((x,i)=>`<button data-l11="e5c" data-i="${i}" class="${mch(!!c[i])}">${c[i]?'☑':'☐'} ${x}</button>`).join('')}</div>`};
const b6=()=>{const a=S.u||{},ck=S.cu;let ok=0;
const rows=UQ.map((r,i)=>{const v=a[i],good=v===r[2];if(ck&&good)ok++;
return `<div class="p-3 mt-2 rounded-xl bg-slate-100 dark:bg-slate-700"><p class="text-sm font-medium">${i+1}. ${r[0].replace('___','<b>_____</b>')}</p><div class="mt-2 flex flex-wrap gap-2">${r[1].map((o,j)=>`<button data-l11="u" data-q="${i}" data-o="${j}" class="px-3 py-1.5 rounded-xl border-2 text-sm ${cl(v===j,ck,good)}">${o}</button>`).join('')}</div>${ck&&v!==undefined?`<p class="mt-2 text-xs ${good?'text-green-600':'text-red-600'}">${good?'✅ ':'❌ '}${r[3]}</p>`:''}</div>`}).join('');
const all=Object.keys(a).length===UQ.length;
return rows+`<div class="mt-3 flex flex-wrap items-center gap-3"><button data-l11="cu" ${all?'':'disabled'} class="${BTN}">Kiểm tra</button><button data-l11="ru" class="${GHOST}">Làm lại</button>${ck?`<span class="text-sm font-semibold">${ok}/${UQ.length}</span>`:''}</div>`};
const BODY={0:b0,1:b1,2:b2,3:b3,4:b4,5:b5,6:b6};

/* ---------- khung từng round ---------- */
const aud=l=>window.audBox?window.audBox(l):'';
const dyn=n=>`<div data-l11b="${n}">${BODY[n]()}</div>`;
const STAGE=[
()=>mBox('⚖️ WARM-UP · CLASSROOM COURT',dyn(0)),
()=>mBox('🎧 EX 1 · LISTENING DETECTIVE',`<p class="mt-2 text-sm">Listen to this interview between a journalist and six students: Eva, Tarak, Anna, Joseph, Han and Milo. What do the students think about talking in class? <b>Who is for it? Who is against it? Who has mixed feelings?</b></p>${aud(['t2:0'])}${dyn(1)}`),
()=>mBox('📚 EX 2 · WORD DETECTIVE',`<p class="mt-2 text-sm">Choose the correct meaning of each of the words in <b>bold</b>. To help you, you can listen again.</p><button data-aud="t2" class="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold">▶ Nghe lại</button>${dyn(2)}`),
()=>mBox('📝 EX 3 · JOURNALIST’S NOTES',`<p class="mt-2 text-sm">Listen again. Use the verbs in bold in Exercise 2 in the correct form to complete the journalist’s notes.</p>${aud(['t2:1'])}${dyn(3)}`),
()=>mBox('🗣️ EX 4 · SPEAKING · FINAL BOSS',`<p class="mt-2 text-sm">What do you think about talking in class? Work in groups and share your views.</p>${dyn(4)}`),
()=>mBox('✍️ EX 5 · WRITING',`<p class="mt-2 text-sm">Here is the beginning of a magazine article that the journalist wrote after interviewing the students. Use the notes in Exercise 3 and your own ideas to complete it.</p><div class="mt-3 p-4 rounded-xl border-l-4 border-l-orange-400 bg-slate-50 dark:bg-slate-700 text-sm leading-7">You might get into trouble for chatting in class, but education experts have found that talking to your classmates can be helpful. “Students should be encouraged to explain things to each other and to discuss things,” they say. I talked to some students to find out what they thought about talking in class. For some of them, talking in class is a good thing, because …</div>${dyn(5)}`),
()=>mBox('⚙️ USE OF ENGLISH · -ING FORMS',`<p class="mt-2 text-sm">Remember that we use -ing forms in three ways. Then choose the correct form.</p><div class="mt-3 grid gap-2"><div class="p-3 rounded-xl bg-blue-50 dark:bg-slate-700 text-sm"><b>1 · After certain verbs:</b> <i>Our teachers don’t mind us talking quietly.</i></div><div class="p-3 rounded-xl bg-blue-50 dark:bg-slate-700 text-sm"><b>2 · After prepositions:</b> <i>I sometimes get into trouble for chatting in class.</i></div><div class="p-3 rounded-xl bg-blue-50 dark:bg-slate-700 text-sm"><b>3 · As the subject of a verb:</b> <i>Sharing ideas helps me to learn.</i></div></div>${dyn(6)}`)];
const endHtml=()=>mBox('🎉 MISSION COMPLETE – Talking in Class: Case Closed.',`<p class="mt-2 text-sm">You unlocked: 🎧 Listening Detective · 📚 9 classroom words · 🗣️ Giving opinions · ✍️ Magazine article · 🔄 Self-correction · ⚙️ -ing forms</p><p class="mt-2 font-bold text-orange-500">⭐ Your XP: ${S.xp||0} / 100</p><p class="mt-3 text-sm font-semibold">Reflection</p><p class="text-sm">“I used to think talking in class was …”</p><textarea data-l11t="r1" rows="2" placeholder="…" class="${TA}">${esc(S.t.r1||'')}</textarea><p class="text-sm mt-2">“…, but now I think …”</p><textarea data-l11t="r2" rows="2" placeholder="…" class="${TA}">${esc(S.t.r2||'')}</textarea><button data-l11="finish" class="mt-3 ${BTN} !bg-orange-400">${S.fd?'✅ Lesson finished':'Finish lesson'}</button>`);

/* ---------- vẽ bản đồ + round ---------- */
const head=el=>mHead(el,'m','01.1',TITLE,'',S.xp||0,100,MS.map(x=>[x[0],x[1]]),S.s,S.ok,S.v==='play');
const nav=()=>mNav('m',true,S.s>=MS.length,MS.every((_,j)=>j===S.s||S.ok[j]));
const calc=()=>{if(wc(S.t.a5)>=25)aw('w',10);MS.forEach((_,j)=>{S.ok[j]=G[j]()?1:0})};
const updTop=()=>{const el=document.getElementById('mission');if(!el)return;const h=document.getElementById('l11head');if(h)h.innerHTML=head(el);const nv=document.getElementById('l11nav');if(nv)nv.innerHTML=nav()};
const post=()=>{calc();sv();updTop()};
function render(){const el=document.getElementById('mission');if(!el)return;calc();const s=S.s,pl=S.v==='play';
el.innerHTML=`<div id="l11head">${head(el)}</div>`+(pl?`<div class="mt-3" id="l11stage">${s<MS.length?STAGE[s]():endHtml()}</div><div id="l11nav">${nav()}</div>`:'')}
const refresh=n=>{const b=document.querySelector('[data-l11b="'+n+'"]');if(b)b.innerHTML=BODY[n]();post()};
window.l11Render=render;
window.l11Html=()=>`<div id="l11"><div class="${card} p-4 border-l-4 border-l-blue-600 mb-4"><p class="text-sm">Mỗi bài trong Learner’s Book là một <b>round</b> trên bản đồ: <b>Warm-up → Ex 1 → Ex 2 → Ex 3 → Ex 4 → Ex 5 → Use of English</b>. Hoàn thành round để mở round kế tiếp và kiếm đủ <b>100 XP</b>. Bài nghe <b>Track 2</b> nằm ngay trong Ex 1 và Ex 3, Ex 2 có nút nghe lại; trình phát nằm ở cuối màn hình nên bạn vừa nghe vừa làm bài được. Mở “Transcript” khi cần để đọc theo.</p></div><div id="mission"></div></div>`;

/* ---------- sự kiện ---------- */
document.addEventListener('click',e=>{
if(location.hash!=='#/lesson/0/0')return;
const g=e.target.closest&&e.target.closest('[data-act]');
if(g&&/^m_(go|prev|next)$/.test(g.dataset.act)&&!g.disabled&&document.getElementById('l11head')){const a=g.dataset.act,i=+g.dataset.i;
 if(a==='m_go'){S.s=i;S.v='play'}
 else if(a==='m_prev'){S.v='map'}
 else if(a==='m_next'){const nx=MS.findIndex((_,j)=>j>S.s&&!S.ok[j]),nz=nx>=0?nx:MS.findIndex((_,j)=>!S.ok[j]);if(S.ok[S.s]){S.s=nz<0?MS.length:nz;S.v='play'}else if(S.s+1<MS.length){S.s=S.s+1;S.v='play'}else S.v='map'}
 else return;
 sv();render();const m=document.getElementById('mission');if(m&&m.scrollIntoView)m.scrollIntoView({behavior:'smooth',block:'start'});return}
const b=e.target.closest&&e.target.closest('[data-l11]');if(!b)return;const a=b.dataset.l11,d=b.dataset,mk=k=>{S[k]=S[k]||{}};
if(a==='w'){S.w={p:d.v};refresh(0)}
else if(a==='side'){S.side=d.v;S.why='';refresh(0)}
else if(a==='why'){S.why=d.v;refresh(0)}
else if(a==='lock'){S.c0=1;aw('c',10);refresh(0)}
else if(a==='e1'){mk('e1');S.e1[d.s]=d.v;S.c1=0;refresh(1)}
else if(a==='c1'){S.c1=1;E1.forEach(r=>{if((S.e1||{})[r[0]]===r[1])aw('e1'+r[0],2)});refresh(1);snd(G[1]())}
else if(a==='r1'){S.e1={};S.c1=0;refresh(1)}
else if(a==='e2'){mk('e2');S.e2[d.q]=+d.o;S.c2=0;refresh(2)}
else if(a==='c2'){S.c2=1;E2.forEach((r,i)=>{if((S.e2||{})[i]===r[2])aw('e2'+i,2)});refresh(2);snd(G[2]())}
else if(a==='r2'){S.e2={};S.c2=0;refresh(2)}
else if(a==='c3'){S.c3=1;ANS.forEach((x,i)=>{if(ok3(i))aw('e3'+i,1)});refresh(3);snd(G[3]())}
else if(a==='sh3'){S.s3=S.s3?0:1;refresh(3)}
else if(a==='r3'){S.e3={};S.c3=0;S.s3=0;refresh(3)}
else if(a==='so'){mk('so');S.so[d.i]=d.v;if(+d.v===SO[+d.i][1])aw('so'+d.i,1);refresh(4)}
else if(a==='fin'){const t=S.t.final||'',n=(t.match(/interrupt|distract|encourag|tell(s|ing)? \w+ off|told \w+ off|trouble|share|sharing ideas|concentrat/gi)||[]).length;
 const f={o:/i think|in my opinion|i believe|i agree|i disagree|a bit like/i.test(t),r:/because/i.test(t),e:/for example|for instance/i.test(t),v:Math.min(n,7)};S.fin=f;
 const m=t.match(/\b(talking|chatting|sharing)\b(?: [a-z]+){0,3}?(?<! (?:can|may|might|could|will|should|to|also|not|and)) (help|distract|encourage)\b/i);
 S.sc=m?{q:m[0],v:m[2].toLowerCase(),done:0,pick:''}:null;if(!m&&f.o)aw('sc',5);
 if(f.o&&f.r&&f.e&&f.v>=3)aw('fin',10);refresh(4);snd(f.o&&f.r&&f.e&&f.v>=3)}
else if(a==='sc'){S.sc.pick=d.v;if(d.v===S.sc.v+'s'){S.sc.done=1;aw('sc',5)}refresh(4)}
else if(a==='e5c'){mk('ck');const on=!S.ck[d.i];S.ck[d.i]=on?1:0;if(on)aw('ck'+d.i,2);refresh(5)}
else if(a==='u'){mk('u');S.u[d.q]=+d.o;S.cu=0;refresh(6)}
else if(a==='cu'){S.cu=1;UQ.forEach((r,i)=>{if((S.u||{})[i]===r[2])aw('u'+i,2)});refresh(6);snd(G[6]())}
else if(a==='ru'){S.u={};S.cu=0;refresh(6)}
else if(a==='finish'){S.fd=1;try{done[key(0,0)]=true;save();renderSide(0)}catch(err){}sv();const st=document.getElementById('l11stage');if(st)st.innerHTML=endHtml()}});
document.addEventListener('input',e=>{const t=e.target;if(!t||!t.dataset)return;
if(t.dataset.l11i!=null){S.e3=S.e3||{};S.e3[t.dataset.l11i]=t.value;sv()}
else if(t.dataset.l11t){const k=t.dataset.l11t;S.t[k]=t.value;
 if(k==='a5'){const w=document.getElementById('l11wc');if(w)w.textContent=wc(t.value);post()}else sv()}});

if(location.hash==='#/lesson/0/0')window.dispatchEvent(new HashChangeEvent('hashchange'));
})();
