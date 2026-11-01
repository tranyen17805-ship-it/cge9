
/* ===== Extra practice · in đậm từ / câu được nhắc trong câu hỏi (The word “…” in paragraph N · underlined sentence) ngay trong đoạn văn ===== */
(function(){
if(window.__exkey)return;window.__exkey=1;
const st=document.createElement('style');
st.textContent='.ex-key{font-weight:800;background:rgba(250,204,21,.45);border-radius:4px;padding:0 2px;box-decoration-break:clone;-webkit-box-decoration-break:clone}.ex-key-s{font-weight:800;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:3px;background:rgba(250,204,21,.28);border-radius:4px;box-decoration-break:clone;-webkit-box-decoration-break:clone}.ex-qn{display:inline-block;margin-left:2px;padding:0 4px;border-radius:9999px;background:#f97316;color:#fff;font-size:10px;font-weight:700;line-height:15px;vertical-align:super;text-decoration:none}.dark .ex-key{background:rgba(250,204,21,.3)}';
document.head.appendChild(st);
const norm=t=>String(t).replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/\s+/g,' ').trim();
const esc=t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function marks(P){
 const M={};/* "pi|si" -> [{a,b,n,s}] */
 const add=(pi,si,a,b,n,sent)=>{const k=pi+'|'+si;(M[k]=M[k]||[]).push({a,b,n,s:sent})};
 P.qs.forEach(q=>{
  const parts=String(q.q).split(/<br\s*\/?>/i),head=parts[0],pm=/paragraph (\d+)/i.exec(head),pn=pm?+pm[1]:0;
  const ev=(q.ev||[]);
  /* 1) câu bị gạch chân: nằm sau <br><i>“…” */
  if(/underlined sentence/i.test(head)&&parts[1]){
   const m=/[“"]([\s\S]+)[”"]/.exec(parts[1].replace(/<[^>]+>/g,''));
   if(m){const want=norm(m[1]);let hit=null;
    P.paras.forEach((para,pi)=>{if(pn&&pi+1!==pn)return;para.forEach((sent,si)=>{if(!hit&&norm(sent)===want)hit=[pi,si]})});
    if(hit){const sent=P.paras[hit[0]][hit[1]];add(hit[0],hit[1],0,sent.length,q.n,true)}
    else{const raw=m[1].trim().toLowerCase();
     P.paras.forEach((para,pi)=>{if(hit||(pn&&pi+1!==pn))return;para.forEach((sent,si)=>{if(hit)return;const ix=sent.toLowerCase().indexOf(raw);if(ix>=0){hit=1;add(pi,si,ix,ix+raw.length,q.n,true)}})});
     if(!hit)P.paras.forEach((para,pi)=>{if(hit||(pn&&pi+1!==pn))return;para.forEach((sent,si)=>{if(!hit&&(norm(sent).indexOf(want)>=0||want.indexOf(norm(sent))>=0)){hit=1;add(pi,si,0,sent.length,q.n,true)}})})}}
   return}
  /* 2) từ / cụm từ trong ngoặc kép: The word “…” in paragraph N */
  const re=/[“"]([^”"]+)[”"]/g;let m;
  while((m=re.exec(head))){
   const w=m[1].trim(),cands=[];
   for(const flags of ['','i']){
    const rx=new RegExp('(?<![A-Za-z])'+esc(w)+'(?![A-Za-z])',flags+'g');
    P.paras.forEach((para,pi)=>{if(pn&&pi+1!==pn)return;para.forEach((sent,si)=>{let r;rx.lastIndex=0;while((r=rx.exec(sent)))cands.push([pi,si,r.index,r.index+r[0].length])})});
    if(cands.length)break}
   if(!cands.length)continue;
   const inEv=cands.filter(c=>ev.some(e=>e[0]===c[0]+1&&e[1]===c[1]+1));
   const c=(inEv.length?inEv:cands)[0];
   add(c[0],c[1],c[2],c[3],q.n,false)}
 });
 return M}
function apply(P){
 const M=marks(P);if(!Object.keys(M).length)return P.paras;
 return P.paras.map((para,pi)=>para.map((sent,si)=>{
  const L=(M[pi+'|'+si]||[]).slice().sort((x,y)=>x.a-y.a);if(!L.length)return sent;
  let out='',pos=0;
  L.forEach(x=>{if(x.a<pos)return;
   out+=sent.slice(pos,x.a)+`<span class="${x.s?'ex-key-s':'ex-key'}">${sent.slice(x.a,x.b)}</span><span class="ex-qn" title="Câu ${x.n}">${x.n}</span>`;pos=x.b});
  return out+sent.slice(pos)}))}
const _ex=window.exPage||exPage;
window.exPage=function(k){
 const P=EX1[k||0];if(!P||!P.paras||!P.qs)return _ex(k);
 const orig=P.paras;let h;
 try{P.paras=apply(P);h=_ex(k)}finally{P.paras=orig}
 return h};
if(/^#\/lms\/extra\/\d+$/.test(location.hash))window.dispatchEvent(new HashChangeEvent('hashchange'));
})();
