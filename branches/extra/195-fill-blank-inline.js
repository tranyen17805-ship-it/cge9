
/* ===== Extra practice · bài điền từ: đáp án vừa chọn được chèn thẳng vào chỗ trống trong đoạn văn bên trái ===== */
(function(){
if(window.__exfill)return;window.__exfill=1;
const st=document.createElement('style');
st.textContent='.ex-fill{display:inline;padding:1px 6px;border-radius:8px;font-weight:700;border:1.5px solid;box-decoration-break:clone;-webkit-box-decoration-break:clone}.ex-fill.ok{background:#dcfce7;border-color:#22c55e;color:#166534}.ex-fill.bad{background:#fee2e2;border-color:#ef4444;color:#991b1b;text-decoration:line-through}.ex-fill.miss{background:#fef3c7;border-color:#f59e0b;color:#92400e}.dark .ex-fill.ok{background:#14532d;color:#bbf7d0}.dark .ex-fill.bad{background:#7f1d1d;color:#fecaca}.dark .ex-fill.miss{background:#78350f;color:#fde68a}';
document.head.appendChild(st);
const _ex=window.exPage||exPage;
window.exPage=function(k){
 const h=_ex(k);if(typeof h!=='string'||typeof EXS==='undefined')return h;
 const P=EX1[EXK];if(!P||!P.qs)return h;
 return h.replace(/\((\d+)\) ?_{3,}/g,(m,n)=>{
  const q=P.qs.find(x=>x.n===+n);if(!q)return m;
  const sel=EXS.ans[q.n],rev=EXS.done||!!EXS.chk[q.n];
  if(sel===undefined){return EXS.done?`(${n}) <span class="ex-fill miss" title="Chưa trả lời">${q.o[q.a]}</span>`:m}
  if(!rev)return m;
  if(sel===q.a)return `(${n}) <span class="ex-fill ok">${q.o[sel]}</span>`;
  return `(${n}) <span class="ex-fill bad">${q.o[sel]}</span> <span class="ex-fill ok">${q.o[q.a]}</span>`});
};
if(/^#\/lms\/extra\/\d+$/.test(location.hash))window.dispatchEvent(new HashChangeEvent('hashchange'));
})();
