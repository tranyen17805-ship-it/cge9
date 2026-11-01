/* ===== BỔ TRỢ VINS.LMS – chia theo kỹ năng (route #/lms) ===== */
const LC=[['vocab','📚','Từ vựng'],['grammar','⚙️','Ngữ pháp'],['reading','📖','Reading'],['listening','🎧','Listening'],['writing','✍️','Writing'],['speaking','🎤','Speaking']];
const lx=(c,m)=>'#/lms/x/'+c;
function lmsEntries(){ if(window.CGE_INDEX&&CGE_INDEX.lmsEntries)return CGE_INDEX.lmsEntries.map(e=>Object.assign({},e));
 const E=[],add=(cat,u,t,m,h)=>E.push({cat,u,t,m,h});
 add('vocab',1,'Vocabulary Practice','Quiz · 1 điểm',lx('v22'));
 add('grammar',0,'Lesson 1.2 What helps you to learn? (-ing / to-infinitive)','Quiz · 10 điểm',lx('q12'));
 add('grammar',0,'1.11b UoE Practice','Quiz',lx('q111b'));
 add('grammar',1,'UoE – Adjective and Adverb Comparatives','Quiz · 25 điểm',lx('c22a'));
 add('grammar',1,'UoE – Comparatives & Superlatives','Quiz',lx('c22b'));
 add('grammar',1,'2.4a Use of English','Quiz · 18 điểm',lx('u24a'));
 add('grammar',1,'2.5 Keep a cool head – Comparisons with intensifiers','Quiz',lx('k25'));
 uoeList().forEach(x=>{if(x.i!==0&&(LMD['ue'+x.i+x.g+x.n]||MX[x.key]))add('grammar',x.i,'UoE: '+x.name,'Chủ điểm ngữ pháp','#/uoe/'+x.i+'/'+x.g+'/'+x.n)});
 TT.forEach((T,i)=>add('grammar',[0,0,0,1,1,1,1][i],'Kiểm tra Practice '+(i+1)+': '+T.n,tCount(T)+' câu','#/uoe/test/'+(i+1)));
 add('reading',0,'Lesson 1.5 Views and Voices – Reading quiz (Stereotypes)','Page + Quiz',lx('r15'));
 add('reading',0,'1.7a 📚 Reading Quiz','Quiz',lx('q17a'));
 add('reading',0,'1.11a Skills Practice: Reading','Quiz',lx('q111a'));
 SKL.filter(x=>x.sk==='Reading').forEach(x=>add('reading',x.u,x.t,'Quiz'+(x.pts?' · '+x.pts:''),'#/skills/'+x.id));
 RT.forEach((T,i)=>add('reading',[0,1,0,1][i],T.n,tCount(T)+' câu','#/skills/practice/'+(i+1)));
 add('listening',0,'1.7b ☎️ Listening Quiz','Quiz + audio',lx('q17b'));
 add('listening',1,'2.6a Listening Practice','Quiz + audio',lx('l26'));
 SKL.filter(x=>x.sk==='Listening').forEach(x=>add('listening',x.u,x.t,'Quiz + audio'+(x.pts?' · '+x.pts:''),'#/skills/'+x.id));
 add('writing',0,'Lesson 1.7 Improve Your Writing (email to a penfriend)','Page + viết bài',lx('w17'));
 add('writing',1,'Lesson 2.7 Improve your writing (describe a picture)','Page + viết bài',lx('w27'));
 add('writing',1,'Writing Practice 1: Photo Description','Viết ≥ 100 từ','#/writing/1');
 add('writing',1,'Writing Practice 2: Email Writing','Viết 90–110 từ','#/writing/2');
 add('grammar',1,'Lesson 2.10 Unit review','Page · ôn tập cuối unit',lx('p210'));
 add('speaking',0,'Lesson 1.8 Project Challenge (presentation)','Page',lx('p18'));
 add('speaking',1,'Lesson 2.8 Project challenge (formal debate)','Page',lx('p28'));
 U.forEach((u,i)=>i===0?0:[2,5].forEach(l=>add('speaking',i,'Lesson '+(i+1)+'.'+(l+1)+' '+u.lessons[l],'Speaking · Learner\'s Book','#/lesson/'+i+'/'+l)));
 Object.keys(LBC).forEach(k=>{const v=LBC[k]&&LBC[k].vocab;if(v&&v.length&&k.split('.')[0]!=='0'){const [i,l]=k.split('.').map(Number);add('vocab',i,'Từ vựng · '+U[i].lessons[l],v.length+' từ','#/lesson/'+i+'/'+l)}});
 const LMN={
'#/lms/x/q12':'Chọn đáp án đúng: -ing hay to + V',
'#/lms/x/q111b':'Chia động từ: -ing / to + V và các thì',
'#/uoe/test/1':'Present Simple Passive: chia động từ, viết lại câu bị động',
'#/uoe/test/2':'Present Continuous Passive: chọn đáp án, chia động từ, viết lại câu',
'#/uoe/test/3':'Gerund & Infinitive: chọn đáp án, chia động từ',
'#/uoe/test/4':'Danh từ trừu tượng: tìm từ, chọn từ, điền từ',
'#/uoe/test/5':'Từ nối: điền liên từ vào chỗ trống',
'#/uoe/test/6':'So sánh hơn: điền dạng so sánh, viết lại câu',
'#/uoe/test/7':'Động từ khuyết thiếu quá khứ: chọn đáp án, hoàn thành câu',
'#/lms/x/r15':'Đọc hiểu Stereotypes: nối câu chủ đề với đoạn, điền từ',
'#/lms/x/q17a':'Đọc hiểu về cách thuyết trình: nối ý, điền từ',
'#/lms/x/q111a':'Đọc hiểu FOMO: chọn đáp án, điền từ',
'#/skills/practice/1':'Đọc hiểu It is great to be a teenager: chọn đáp án',
'#/skills/practice/2':'Đọc hiểu The Importance of Eating Well: chọn đáp án',
'#/skills/practice/3':'Đọc hiểu FOMO: nối hai vế câu',
'#/skills/practice/4':'Đọc hiểu Teens and sleep: chọn đáp án',
'#/lms/x/q17b':'Nghe về cách thuyết trình: chọn Y/N, hoàn thành bảng',
'#/lms/x/w17':'Viết email cho bạn qua thư (penfriend)',
'#/lms/x/p18':'Dự án nhóm: chuẩn bị bài thuyết trình',
'#/lms/x/v22':'Từ vựng: nối định nghĩa với từ',
'#/lms/x/c22a':'So sánh hơn (tính từ, trạng từ): chọn đáp án',
'#/lms/x/c22b':'So sánh hơn và so sánh nhất: viết lại câu',
'#/lms/x/u24a':'Use of English tổng hợp: chọn đáp án, điền từ, nghe',
'#/lms/x/k25':'So sánh với từ nhấn mạnh: chọn đáp án',
'#/lms/x/p210':'Ôn tập cuối Unit 2',
'#/lms/x/l26':'Nghe 5 người nói: chọn đáp án A, B hoặc C',
'#/skills/rd-2a':'Đọc hiểu Emotions and Behavior: chọn đáp án',
'#/skills/ls-2a':'Nghe podcast về từ chỉ cảm xúc: chọn đáp án',
'#/skills/ls-2b':'Nghe về ăn uống lành mạnh cho thanh thiếu niên: chọn đáp án, điền từ',
'#/skills/ls-2c':'Nghe về thanh thiếu niên và tranh cãi với cha mẹ: chọn đáp án',
'#/skills/ls-2d':'Nghe bài thuyết trình dự án ăn uống lành mạnh: điền từ',
'#/skills/ls-2e':'Nghe 5 người nói về hạnh phúc: nối người nói với ý kiến',
'#/lms/x/w27':'Viết đoạn văn mô tả một bức tranh',
'#/lms/x/p28':'Dự án nhóm: tranh luận chính thức (formal debate)',
'#/writing/1':'Viết mô tả một bức ảnh',
'#/writing/2':'Viết email gửi ban biên tập'};
  E.forEach(e=>{if(LMN[e.h])e.t=LMN[e.h];else e.t=e.t.replace(/^UoE: /,'Luyện ngữ pháp: ').replace(/^Từ vựng · /,'Học từ vựng: ').replace(/^(Lesson \d+\.\d+ .*)$/,e.cat==='speaking'?'Luyện nói: $1':'$1')});
  return E}
const lmsTabs=cur=>`<div class="mt-4 flex gap-2 flex-wrap">${LC.map(c=>`<a href="#/lms/${c[0]}" class="px-3 py-2 rounded-xl text-sm font-medium border ${c[0]===cur?'bg-blue-600 text-white border-blue-600':'border-slate-300 dark:border-slate-600'}">${c[1]} ${c[2]}</a>`).join('')}</div>`;
const LSEC=[['📚 Từ vựng',['vocab']],['⚙️ Ngữ pháp',['grammar']],['🎯 Kỹ năng',['reading','listening','writing','speaking']]];
const LSUB={reading:'📖 Reading',listening:'🎧 Listening',writing:'✍️ Writing',speaking:'🎤 Speaking'};
const lmsUnits=E=>{const r=[];U.forEach((u,i)=>{const n=E.filter(x=>x.u===i).length;if(n)r.push({k:String(i),i,n,t:'Unit '+(i+1)+': '+u.name,e:u.emoji})});const m=E.filter(x=>x.u<0).length;if(m)r.push({k:'more',i:-1,n:m,t:'Luyện tập bổ sung',e:'📝'});return r};
function lmsPage(cat,id,tab){const E=lmsEntries();
 if(cat==='x'){const e=E.find(x=>x.h===lx(id))||{t:id,u:0};
  if(!LMD[id])return lmsPage();
  const uk=e.u<0?'more':e.u,ut=e.u<0?'Luyện tập bổ sung':'Unit '+(e.u+1)+': '+U[e.u].name,tk=e.cat;
  return `<p class="text-sm"><a class="text-blue-600" href="#/lms/u/${uk}/${tk}">← ${ut}</a></p><h1 class="mt-2 text-2xl font-bold">${e.t}</h1><div class="mt-4">${lmsRender(id)}</div>`}
 const item=x=>`<a href="${x.h}" class="${card} p-4 hover:shadow-md hover:-translate-y-0.5 transition block"><p class="font-medium text-sm">${x.t}</p><p class="text-xs text-slate-500 mt-1">${x.m}</p></a>`;
 const grid=l=>`<div class="grid gap-3 sm:grid-cols-2">${l.map(item).join('')}</div>`;
 if(cat==='u'){const us=lmsUnits(E),cu=us.find(x=>x.k===String(id));
  if(!cu)return lmsPage();
  const L=E.filter(x=>x.u===cu.i);
  const tabs=`<div class="mt-4 flex gap-2 flex-wrap">${us.map(x=>`<a href="#/lms/u/${x.k}" class="px-3 py-2 rounded-xl text-sm font-medium border ${x.k===cu.k?'bg-blue-600 text-white border-blue-600':'border-slate-300 dark:border-slate-600'}">${x.i<0?'📝 Bổ sung':'Unit '+(x.i+1)}</a>`).join('')}</div>`;
  const SECS=[['vocab','📚 Từ vựng'],['grammar','⚙️ Ngữ pháp'],['reading','📖 Reading'],['listening','🎧 Listening'],['writing','✍️ Writing'],['speaking','🎤 Speaking']];
  const body='<div class="mt-6 space-y-3">'+SECS.map(([k,n])=>{const l=L.filter(x=>x.cat===k);return l.length?`<details class="group ${card} overflow-hidden" ${tab===k?'open':''}><summary class="flex items-center gap-3 p-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden"><span class="font-bold flex-1">${n}</span><span class="text-xs text-slate-400">${l.length} bài</span><span class="text-slate-400 transition-transform group-open:rotate-90">▶</span></summary><div class="px-4 pb-4"><div class="grid gap-3 sm:grid-cols-2">${l.map(item).join('')}</div></div></details>`:''}).join('')+'</div>';
  return `<p class="text-sm"><a class="text-blue-600" href="#/lms">← Bổ trợ (vins.lms)</a></p><h1 class="mt-2 text-2xl font-bold">${cu.e} ${cu.t}</h1>${tabs}${body}`}
 return `<h1 class="text-2xl font-bold">🎯 Bổ trợ (vins.lms)</h1><p class="mt-1 text-sm text-slate-500">Chọn Unit, trong mỗi Unit chia theo Từ vựng · Ngữ pháp · Kỹ năng.</p><div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${lmsUnits(E).map(x=>`<a href="#/lms/u/${x.k}" class="${card} p-5 hover:shadow-md hover:-translate-y-0.5 transition block border-l-4 border-l-orange-400"><span class="text-3xl">${x.e}</span><p class="mt-2 font-bold">${x.t}</p><p class="text-xs text-slate-500">${x.n} bài</p></a>`).join('')}<a href="#/lms/extra" class="${card} p-5 hover:shadow-md hover:-translate-y-0.5 transition block border-l-4 border-l-orange-400"><span class="text-3xl">💪</span><p class="mt-2 font-bold">Extra practice</p><p class="text-xs text-slate-500">${CGE.extraCount()} bài</p></a></div>`}
