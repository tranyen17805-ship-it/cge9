
/* ===== Extra practice · giữ nguyên vị trí cuộn của khung đoạn văn khi chọn đáp án (trang được vẽ lại sau mỗi lần chọn) ===== */
(function(){
if(window.__exscroll)return;window.__exscroll=1;
const _re=window.exRe||exRe;
window.exRe=function(){
 const a=document.querySelector('#view aside'),t=a?a.scrollTop:0;
 _re();
 const b=document.querySelector('#view aside');if(b&&t)b.scrollTop=t};
})();
