/* ===== WORK BOOK · USE OF ENGLISH – mục riêng, tổng hợp 36 chủ điểm ===== */
const uoeTheme=n=>/passive|have something done/i.test(n)?['🔁','Passive voice']:/multi-word/i.test(n)?['🧩','Multi-word verbs']:/reported/i.test(n)?['💬','Reported speech']:/must have|conditional/i.test(n)?['🎯','Modals & conditionals']:/clause|conjunction|connective/i.test(n)?['🔗','Clauses & linking words']:/noun|adjective|adverbs and|comparative|superlative|adverbs of/i.test(n)?['🏷️','Nouns, adjectives & adverbs']:['🕒','Tenses & verb forms'];
const uoeList=()=>{const r=[];UOE.forEach((gs,i)=>gs.forEach((ts,g)=>ts.forEach((t,n)=>r.push({i,g,n,name:t[0],pg:t[1],key:['u','v','y'][n]+i+'.'+g,dk:'uoe:'+i+'.'+g+'.'+n,th:uoeTheme(t[0])}))));return r};
const uoeLesson=g=>g?6:3;
const uoeHas=x=>!!(MX[x.key]||CGE.hasMX(x.key)||LMD['ue'+x.i+x.g+x.n]);
const uoeDone=()=>uoeList().filter(x=>done[x.dk]).length;
function uoeHub(theme){
  const all=uoeList(),dn=uoeDone();
  const cardH=x=>`<a href="#/uoe/${x.i}/${x.g}/${x.n}" class="${card} p-4 hover:shadow-md hover:-translate-y-0.5 transition block">
    <div class="flex items-start justify-between gap-2"><p class="text-xs text-slate-500">${theme?`Unit ${x.i+1} · `:''}Lesson ${x.i+1}.${uoeLesson(x.g)}${x.pg?' · tr.'+x.pg:''}</p>${done[x.dk]?'<span>✅</span>':''}</div>
    <h3 class="mt-1 font-semibold">${x.name}</h3>
    <p class="mt-2">${uoeHas(x)?badge('Có bài tương tác','bg-green-100 text-green-700'):badge('Sắp có','bg-slate-100 text-slate-500')}</p></a>`;
  const tab=(h,t,on)=>`<a href="${h}" class="px-4 py-2 rounded-xl text-sm font-medium border ${on?'bg-blue-600 text-white border-blue-600':'border-slate-300 dark:border-slate-600'}">${t}</a>`;
  let body;
  if(theme){const groups={};all.forEach(x=>{const k=x.th[0]+' '+x.th[1];(groups[k]=groups[k]||[]).push(x)});
    body=Object.keys(groups).map(k=>`<h2 class="mt-6 mb-3 text-lg font-bold">${k} <span class="text-sm font-normal text-slate-400">${groups[k].length}</span></h2><div class="grid gap-3 sm:grid-cols-2">${groups[k].map(cardH).join('')}</div>`).join('')}
  else body=U.map((u,i)=>`<h2 class="mt-6 mb-3 flex items-center gap-2 text-lg font-bold"><span class="w-7 h-7 rounded-lg bg-blue-600 text-white grid place-items-center text-xs">${i+1}</span>Unit ${i+1}: ${u.name}</h2><div class="grid gap-3 sm:grid-cols-2">${all.filter(x=>x.i===i).map(cardH).join('')}</div>`).join('');
  return `<h1 class="text-2xl font-bold">⚙️ Use of English</h1>
  <p class="mt-1 text-sm text-slate-500">Tổng hợp ngữ pháp và bài tập Use of English của cả 9 Unit · ${all.length} chủ điểm</p>
  <div class="${card} p-4 mt-4"><div class="flex justify-between text-sm mb-2"><span>Đã học ${dn}/${all.length}</span><span class="text-slate-500">${all.filter(uoeHas).length} bài tương tác</span></div>${bar(dn/all.length*100)}</div>
  <div class="mt-4 flex gap-2">${tab('#/uoe','📚 Theo Unit',!theme)}${tab('#/uoe/theme','🗂️ Theo chủ điểm ngữ pháp',theme)}${tab('#/uoe/test','📝 Kiểm tra',false)}</div>${body}`;
}
function uoeTopic(i,g,n){
  const all=uoeList(),idx=all.findIndex(x=>x.i===i&&x.g===g&&x.n===n);
  if(idx<0) return uoeHub();
  const x=all[idx],pv=all[idx-1],nx=all[idx+1],lk=y=>`#/uoe/${y.i}/${y.g}/${y.n}`;
  return `<p class="text-sm"><a class="text-blue-600" href="#/uoe">← Use of English</a></p>
  <p class="mt-2 text-xs font-bold text-orange-500">UNIT ${i+1} · ${U[i].name} · ${x.th[0]} ${x.th[1]}</p>
  <h1 class="text-2xl font-bold">${x.name}</h1>
  <p class="mt-1 text-sm text-slate-500">${x.pg?'Work book tr.'+x.pg+' · ':''}cùng chủ đề với lesson <a class="text-blue-600" href="#/lesson/${i}/${uoeLesson(g)-1}">${i+1}.${uoeLesson(g)}</a> (${idx+1}/${all.length})</p>
  <div class="mt-5">${MX[x.key]?`<div id="${['wbuoe','wbuoe2','wbuoe3'][n]}"></div>`:LMD['ue'+i+g+n]?lmsRender('ue'+i+g+n):`<div class="${card} p-5 text-sm text-slate-500">Chưa có bài tương tác cho phần này.</div>`}</div>
  <div class="mt-8 flex flex-wrap gap-3 justify-between items-center">${pv?`<a href="${lk(pv)}" class="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600">← Trước</a>`:'<span></span>'}
  <button data-act="uoedone" data-k="${x.dk}" class="px-5 py-3 rounded-xl bg-orange-400 hover:bg-orange-500 text-white font-semibold">${done[x.dk]?'✅ Đã học':'Đánh dấu đã học'}</button>
  ${nx?`<a href="${lk(nx)}" class="px-4 py-3 rounded-xl bg-blue-600 text-white">Tiếp →</a>`:'<span></span>'}</div>`;
}
function dashboard(){
  const t=total(),pct=Math.round(t/81*100);
  return `<h1 class="text-2xl font-bold">Tiến độ học tập 📊</h1>
  <div class="mt-4 grid grid-cols-3 gap-3 text-center">
    <div class="${card} p-4"><p class="text-2xl font-bold text-blue-600">${pct}%</p><p class="text-xs text-slate-500">Hoàn thành</p></div>
    <div class="${card} p-4"><p class="text-2xl font-bold text-blue-600">${t}</p><p class="text-xs text-slate-500">Lesson xong</p></div>
    <div class="${card} p-4"><p class="text-2xl font-bold text-orange-500">${U.filter((_,i)=>unitDone(i)===9).length}</p><p class="text-xs text-slate-500">Unit xong</p></div></div>
  <div class="${card} p-5 mt-5 space-y-4">${U.map((u,i)=>`<a href="#/unit/${i}" class="block"><div class="flex justify-between text-sm mb-1"><span>Unit ${i+1}: ${u.name}</span><span>${unitDone(i)}/9</span></div>${bar(unitDone(i)/9*100)}</a>`).join('')}</div>
  <a href="#/uoe" class="${card} p-5 mt-4 block"><div class="flex justify-between text-sm mb-1"><span>⚙️ Use of English</span><span>${uoeDone()}/${uoeList().length}</span></div>${bar(uoeDone()/uoeList().length*100)}</a>
  <button data-act="reset" class="mt-5 text-sm text-red-500 underline">Xóa toàn bộ tiến độ</button>`;
}

/* ---- router ---- */
const view=document.getElementById('view');
