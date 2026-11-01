
(function(){
var PFX='cge9';
function collect(){var o={};try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k&&k.indexOf(PFX)===0)o[k]=localStorage.getItem(k)}}catch(e){}return o}
function pack(){return JSON.stringify({app:'cge9-backup',v:1,saved:new Date().toISOString(),data:collect()},null,1)}
function apply(txt){var j;try{j=JSON.parse(txt)}catch(e){return {err:'Nội dung không đúng định dạng JSON.'}}
 var d=j&&j.app==='cge9-backup'&&j.data;if(!d||typeof d!=='object')return {err:'Đây không phải file sao lưu của web này.'};
 var n=0;try{Object.keys(d).forEach(function(k){if(k.indexOf(PFX)===0&&typeof d[k]==='string'){localStorage.setItem(k,d[k]);n++}})}catch(e){return {err:'Không ghi được vào bộ nhớ trình duyệt.'}}
 return {n:n}}
function $(id){return document.getElementById(id)}
function msg(t,bad){var m=$('bkMsg');if(m){m.textContent=t;m.className='mt-3 text-sm '+(bad?'text-red-600':'text-green-700')}}
function doImport(txt){var r=apply(txt);if(r.err){msg(r.err,true);return}msg('✅ Đã nhập '+r.n+' mục. Đang tải lại trang…');setTimeout(function(){location.reload()},1200)}
async function doExport(){
 var txt=pack(),name='cge9-backup-'+new Date().toISOString().slice(0,10)+'.json';
 $('bkOut').value=txt;$('bkCopy').open=true;
 try{if(window.claude&&window.claude.use){var dl=await window.claude.use('downloads');if(dl){await dl.save({filename:name,data:txt});msg('✅ Đã gửi file sao lưu: '+name);return}}}
 catch(e){if(e&&e.code==='declined'){msg('Bạn đã hủy lưu file.',true);return}}
 try{var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'application/json'}));a.download=name;document.body.appendChild(a);a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},800);msg('Đã tạo file '+name+'. Nếu không thấy file tải về, hãy sao chép nội dung ở khung bên dưới và lưu vào Notepad với đuôi .json.')}
 catch(e){msg('Hãy sao chép nội dung ở khung bên dưới và lưu vào Notepad với đuôi .json.',true)}
}
function openModal(){
 if($('bkModal'))return;
 var m=document.createElement('div');m.id='bkModal';m.className='fixed inset-0 z-50 bg-black/40 grid place-items-center p-4';
 m.innerHTML='<div class="w-full max-w-lg max-h-[90vh] overflow-auto rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-5 shadow-xl text-sm">'
 +'<div class="flex items-center justify-between"><h3 class="text-lg font-bold">💾 Sao lưu / Khôi phục</h3><button data-bk="close" class="px-2 text-xl" aria-label="Đóng">✕</button></div>'
 +'<p class="mt-2 text-slate-500 dark:text-slate-300">Lưu các text bạn đã dán (transcript, bài đọc), tiến độ và từ đã lưu vào một file <b>.json</b>. Dùng file này để chuyển sang máy khác, trình duyệt khác hoặc bản web tải về.</p>'
 +'<p class="mt-2 text-xs text-slate-500">Hiện có <b id="bkCnt">0</b> mục dữ liệu trên trình duyệt này.</p>'
 +'<div class="mt-4"><button data-bk="export" class="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium">⬇️ Xuất file sao lưu</button></div>'
 +'<details id="bkCopy" class="mt-2"><summary class="cursor-pointer text-xs text-slate-500">Không tải được? Sao chép nội dung sao lưu</summary><textarea id="bkOut" readonly class="mt-2 w-full h-32 text-xs rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 p-2"></textarea></details>'
 +'<hr class="my-4 border-slate-200 dark:border-slate-600">'
 +'<label class="font-medium">⬆️ Nhập từ file sao lưu</label><input id="bkFile" type="file" accept=".json,application/json" class="mt-2 block w-full text-sm">'
 +'<details class="mt-2"><summary class="cursor-pointer text-xs text-slate-500">Hoặc dán nội dung sao lưu</summary><textarea id="bkIn" class="mt-2 w-full h-28 text-xs rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 p-2" placeholder="Dán nội dung file .json vào đây"></textarea><button data-bk="import" class="mt-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600">Nhập</button></details>'
 +'<p class="mt-3 text-xs text-slate-500">Khi nhập, các mục trùng tên sẽ được ghi đè bằng nội dung trong file.</p>'
 +'<p id="bkMsg" class="mt-3 text-sm"></p></div>';
 document.body.appendChild(m);
 $('bkCnt').textContent=Object.keys(collect()).length;
 $('bkFile').addEventListener('change',function(e){var f=e.target.files&&e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(){doImport(String(r.result))};r.onerror=function(){msg('Không đọc được file.',true)};r.readAsText(f)});
}
function closeModal(){var m=$('bkModal');if(m)m.remove()}
document.addEventListener('click',function(e){
 var t=e.target;
 if(t.closest&&t.closest('#bkBtn')){openModal();return}
 var b=t.closest&&t.closest('[data-bk]');
 if(b){var a=b.getAttribute('data-bk');if(a==='close')closeModal();else if(a==='export')doExport();else if(a==='import'){var v=$('bkIn').value.trim();if(!v){msg('Hãy dán nội dung sao lưu trước.',true);return}doImport(v)}return}
 if(t.id==='bkModal')closeModal();
});
})();
