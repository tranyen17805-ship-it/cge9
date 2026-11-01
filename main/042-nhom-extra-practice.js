/* ===== NHÓM EXTRA PRACTICE =====
   ids = số cuối của route (#/lms/extra/N). Thứ tự trong ids = thứ tự hiển thị.
   Khi thêm đề cho Test 01 / Test 02: điền id vào mảng ids tương ứng. Bài chưa nằm trong nhóm nào sẽ tự rơi vào mục "Khác". */
const EXTRA_GROUPS=[
{title:'Mid-term Test 01',ids:[]},
{title:'Mid-term Test 02',ids:[]},
{title:'Mid-term Test 03',ids:[1,2,8]},
{title:'Mid-term Test 04',ids:[3,4,5,6,7]},
{title:'Mid-term Test 05',ids:[9,10,11,12,13,14]},
{title:'Mid-term Revision Practice Test 01',ids:[15]},
{title:'Đề số 1 · 2 · 3 · 4 · 5',ids:[16,17,18,19,20]}
];
function extraPage(id){
 if(id==='1'||id==='2'||id==='3'||id==='4'||id==='5'||id==='6'||id==='7'||id==='8'||id==='9'||id==='10'||id==='11'||id==='12'||id==='13'||id==='14')return exPage(+id-1);
 const item=x=>`<a href="${x.h}" class="${card} p-4 hover:shadow-md hover:-translate-y-0.5 transition block"><p class="font-medium text-sm">${x.t}</p><p class="text-xs text-slate-500 mt-1">${x.m||''}</p></a>`;
 const idOf=x=>String(x.h).split('/').pop(),inG={};EXTRA_GROUPS.forEach(g=>g.ids.forEach(n=>inG[n]=1));
 const grid=a=>`<div class="mt-3 grid gap-3 sm:grid-cols-2">${a.map(item).join('')}</div>`;
 const sec=(title,list)=>`<details open class="mt-6"><summary class="cursor-pointer select-none text-lg font-bold flex items-center gap-2">📁 ${title}<span class="text-xs font-normal text-slate-400">${list.length} bài</span></summary>${list.length?grid(list):`<div class="${card} mt-3 p-5 text-center border-dashed"><p class="text-sm text-slate-500">Chưa có nội dung · sẽ được bổ sung sau.</p></div>`}</details>`;
 const rest=EXTRA_PRACTICE.filter(x=>!inG[idOf(x)]);
 const grouped=EXTRA_GROUPS.map(g=>sec(g.title,g.ids.map(n=>EXTRA_PRACTICE.find(x=>idOf(x)===String(n))).filter(Boolean))).join('')+(rest.length?sec('Khác',rest):'');
 const body=EXTRA_PRACTICE.length?grouped:`<div class="${card} mt-6 p-8 text-center"><p class="text-4xl">💪</p><p class="mt-3 font-semibold">Chưa có nội dung</p><p class="mt-1 text-sm text-slate-500">Các bài Extra practice sẽ được bổ sung tại đây.</p></div>`;
 return `<p class="text-sm"><a class="text-blue-600" href="#/lms">← Bổ trợ (vins.lms)</a></p><h1 class="mt-2 text-2xl font-bold">💪 Extra practice</h1>${body}`}
