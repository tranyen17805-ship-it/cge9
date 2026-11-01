
/* ===== Fix: bấm "🗺️ Về bản đồ" → giữ vị trí danh sách chặng (không cuộn lên đầu trang) · áp dụng cho mọi mission ===== */
(function(){
if(window.__mapKeep)return;window.__mapKeep=1;
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('[data-act="g_prev"],[data-act="m_prev"]');
  if(!b||b.disabled)return;
  /* lấy khung mission TRƯỚC khi các handler khác vẽ lại nội dung */
  var box=b.closest('[data-gk]')||b.closest('#mission')||document.getElementById('mission');
  if(!box)return;
  var go=function(){
    if(!document.body.contains(box))return;
    var r=box.getBoundingClientRect();
    var y=window.scrollY+r.bottom-window.innerHeight+16;
    window.scrollTo({top:Math.max(0,y),behavior:'instant'});
  };
  requestAnimationFrame(function(){go();requestAnimationFrame(go)});
  setTimeout(go,80);
},true);
})();
