
/* ===== Extra practice · dấu ✅ cho bài đã nộp (hiện ở danh sách Extra practice, nhớ sau khi tải lại trang) ===== */
(function(){
if(window.__exsub)return;window.__exsub=1;
const KEY='cge9.exsub';
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return {}}};
const save=o=>{try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}};
document.addEventListener('click',e=>{
 if(!/^#\/lms\/extra\/\d+$/.test(location.hash))return;
 const t=e.target.closest&&e.target.closest('[data-exchk],[data-exrst]');if(!t)return;
 const o=load(),n=+location.hash.split('/').pop();
 if(t.dataset.exchk!==undefined){if(typeof EXS!=='undefined'&&EXS.done){let sc=0,tot=0;try{const qs=exAll();tot=qs.length;sc=qs.filter(q=>EXS.ans[q.n]===q.a).length}catch(_){}o[n]={sc,tot,t:Date.now()};save(o)}}
 else{delete o[n];save(o)}
});
const _ep=window.extraPage||extraPage;
window.extraPage=function(id){let h=_ep(id);if(typeof h!=='string'||(id&&/^\d+$/.test(id)))return h;
 const o=load();
 Object.keys(o).forEach(n=>{const r=o[n],re=new RegExp('(<a href="#/lms/extra/'+n+'"[^>]*>)([\\s\\S]*?)(</a>)');
  h=h.replace(re,(m,a,b,c)=>a+'<div class="flex items-center gap-3"><div class="flex-1 min-w-0">'+b+'</div><span class="text-2xl shrink-0" title="Đã nộp bài'+(r.tot?' · '+r.sc+'/'+r.tot:'')+'">✅</span></div>'+c)});
 return h};
if(/^#\/lms\/extra\/?$/.test(location.hash))window.dispatchEvent(new HashChangeEvent('hashchange'));
})();
