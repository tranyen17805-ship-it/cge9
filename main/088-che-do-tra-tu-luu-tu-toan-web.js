/* ===== CHẾ ĐỘ TRA TỪ + LƯU TỪ (toàn web) ===== */
{const X=`mistreated|adj|bị đối xử tệ
malnourished|adj|suy dinh dưỡng
neglected|adj|bị bỏ bê
accommodation|n|chỗ ở
volunteer|n|tình nguyện viên
trail|n|đường mòn
dolphin|n|cá heo
trust|v|tin tưởng
experienced|adj|có kinh nghiệm
comfortable|adj|thoải mái
elephant|n|con voi
wildlife|n|động vật hoang dã
conservation|n|bảo tồn
community|n|cộng đồng
research|v|nghiên cứu
behaviour|n|hành vi
farmer|n|nông dân
peacefully|adv|một cách hòa bình
monitor|v|theo dõi, giám sát
injury|n|vết thương
fence|n|hàng rào
mend|v|sửa chữa
villager|n|dân làng
coexistence|n|sự cùng tồn tại
surrounded|adj|được bao quanh
palace|n|cung điện
medieval|adj|thuộc thời Trung cổ
ruling|adj|cầm quyền
fresco|n|bích họa
renaissance|n|thời Phục hưng
arch|n|vòm cuốn
ceiling|n|trần nhà
reserve|n|khu bảo tồn
deer|n|hươu, nai
maze|n|mê cung
orchard|n|vườn cây ăn quả
vineyard|n|vườn nho
circular|adj|hình tròn, vòng quanh
route|n|tuyến đường
amphitheatre|n|đấu trường lộ thiên
gladiator|n|đấu sĩ La Mã
contest|n|cuộc thi đấu
opera|n|nhạc kịch opera
balcony|n|ban công
romantic|adj|lãng mạn
explore|v|khám phá
wish|n|điều ước
cycling|n|môn đạp xe
architecture|n|kiến trúc
boring|adj|chán
realise|v|nhận ra
flame|n|ngọn lửa
hill|n|đồi
bank|n|bờ (sông)
remains|n|tàn tích
temple|n|đền
mosaic|n|tranh khảm
lighthouse|n|hải đăng
picnic|n|buổi dã ngoại
rocky|adj|nhiều đá
forest|n|rừng
relaxing|adj|thư giãn
pollution|n|ô nhiễm
infrastructure|n|cơ sở hạ tầng
developing|adj|đang phát triển
economy|n|nền kinh tế
tradition|n|truyền thống
souvenir|n|quà lưu niệm
inspired|adj|được truyền cảm hứng
rewarding|adj|đáng giá, bổ ích
custom|n|phong tục
identity|n|bản sắc
resident|n|cư dân
resort|n|khu nghỉ dưỡng
afford|v|đủ khả năng chi trả
expedition|n|chuyến thám hiểm
slope|n|sườn dốc
revenue|n|doanh thu
operator|n|đơn vị tổ chức tour
crowded|adj|đông đúc
queue|n|hàng người xếp
erode|v|xói mòn
isolated|adj|biệt lập
untouched|adj|nguyên sơ
employ|v|thuê, tạo việc làm
llama|n|lạc đà llama
challenging|adj|đầy thử thách
breathtaking|adj|đẹp đến nghẹt thở
guide|n|hướng dẫn viên
ceviche|n|món gỏi cá kiểu Peru
vegetarian|adj|ăn chay
delicious|adj|ngon
pottery|n|đồ gốm
handmade|adj|làm thủ công
incredible|adj|không thể tin được
unusual|adj|khác thường
recommend|v|giới thiệu, khuyên dùng
bike|n|xe đạp
lake|n|hồ
village|n|làng
square|n|quảng trường`;
X.split('\n').forEach(l=>{const p=l.split('|');if(p[2]&&!GL[p[0]])GL[p[0]]=[p[1],p[2]]});
for(let n=0;n<=8;n++){const b=LBC['2.'+n];if(b&&b.vocab)b.vocab.forEach(v=>{const k=String(v[0]).toLowerCase();if(!GL[k]&&!/[ (\/]/.test(k))GL[k]=['',v[1]]})}}
let LWON=false;try{LWON=localStorage.getItem('cge9lw')==='1'}catch(e){}
const svGet=()=>{try{return JSON.parse(localStorage.getItem('cge9sv')||'[]')}catch(e){return []}};
const svPut=a=>{try{localStorage.setItem('cge9sv',JSON.stringify(a))}catch(e){}};
const curK=()=>{const p=location.hash.split('/');return p[1]==='lesson'?p[2]+'.'+p[3]:null};
window.lwSavedH=k=>{const a=svGet().filter(x=>x.k===k);if(!a.length)return '';return `<div class="mt-3 grid sm:grid-cols-2 gap-3 text-sm">${a.map(x=>fcCard([x.w,x.vi||'(tra Cambridge)',x.pos],x)).join('')}</div>`};
const lwSyncBtn=()=>{const b=document.querySelector('[data-act="lwmode"]');if(b)b.classList.toggle('bg-orange-100',LWON);document.body.classList.toggle('lw-on',LWON)};
function addSave(w){const p=document.getElementById('lwpop');if(!p||!w)return;{const key=(lwLemma(w)||w).toLowerCase(),d=FCD[key];if(d){const row=p.firstElementChild;if(d[0])row.insertAdjacentHTML('afterend',`<p class="mt-1 text-sm font-semibold text-orange-600">${d[0]}</p>`);if(d[1])p.insertAdjacentHTML('beforeend',`<p class="mt-2 text-xs italic text-slate-500">“${d[1]}”</p>`)}}const k=curK(),key=(lwLemma(w)||w).toLowerCase(),has=k&&svGet().some(x=>x.w===key&&x.k===k);const d=document.createElement('div');d.className='mt-3';d.innerHTML=k?`<button data-act="lw_save" data-w="${w}" class="px-3 py-1.5 rounded-lg ${has?'bg-green-100 text-green-700':'bg-orange-400 text-white'} text-sm font-semibold">${has?'✅ Đã thêm vào mục Từ vựng':'⭐ Lưu từ'}</button>`:'<span class="text-xs text-slate-500">Mở một lesson để lưu từ vào mục Từ vựng.</span>';p.appendChild(d)}
const lwPop0=lwPop;lwPop=sp=>{lwPop0(sp);addSave(sp.dataset.w)};
function wordAt(x,y){let r;if(document.caretRangeFromPoint)r=document.caretRangeFromPoint(x,y);else if(document.caretPositionFromPoint){const q=document.caretPositionFromPoint(x,y);if(q){r=document.createRange();r.setStart(q.offsetNode,q.offset)}}if(!r||r.startContainer.nodeType!==3)return '';const t=r.startContainer.textContent,i=r.startOffset,re=/[\p{L}’'-]/u;let a=i,b=i;while(a>0&&re.test(t[a-1]))a--;while(b<t.length&&re.test(t[b]))b++;const w=t.slice(a,b).replace(/^[-'’]+|[-'’]+$/g,'');if(!/^[A-Za-z][A-Za-z’'-]*$/.test(w))return '';const q=document.createRange();q.setStart(r.startContainer,a);q.setEnd(r.startContainer,b);const ok=[...q.getClientRects()].some(c=>x>=c.left-3&&x<=c.right+3&&y>=c.top-3&&y<=c.bottom+3);return ok?w:''}
document.addEventListener('click',e=>{const b=e.target.closest('[data-act="lwmode"],[data-act="lw_save"],[data-act="lw_del"]');if(b){const a=b.dataset.act;if(a==='lwmode'){LWON=!LWON;try{localStorage.setItem('cge9lw',LWON?'1':'0')}catch(_){}lwSyncBtn();const p=document.getElementById('lwpop');if(p)p.classList.add('hidden')}
else if(a==='lw_save'){const w=b.dataset.w,k=curK(),key=(lwLemma(w)||w).toLowerCase(),g=GL[key],A=svGet();if(k&&!A.some(x=>x.w===key&&x.k===k)){A.push({w:key,pos:g?g[0]:'',vi:g?g[1]:'',k});svPut(A);svRefresh()}b.className='px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-sm font-semibold';b.textContent='✅ Đã thêm vào mục Từ vựng'}
else if(a==='lw_del'){svPut(svGet().filter(x=>!(x.w===b.dataset.w&&x.k===b.dataset.k)));svRefresh()}return}
if(!LWON||e.target.closest('button,a,input,textarea,select,summary,[data-act],#lwpop,header,#sidebar,.lw'))return;const w=wordAt(e.clientX,e.clientY);if(w)lwPop({dataset:{w}})});
