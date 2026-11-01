/* ===== Xáo trật tự câu hỏi: không để cùng đáp án/cùng pattern đứng cạnh nhau ===== */
CGE._shuf=CGE._shuf||new Set();
CGE.shuffleNew=function(){
{const rng=sd=>{let a=sd>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}},
hs=s=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0},
sh=(arr,r)=>{for(let i=arr.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr},
lbl=o=>/^[A-D]\b/.test(String(o)),
fixAdj=(arr,key,r)=>{const g={};arr.forEach(x=>{(g[key(x)]=g[key(x)]||[]).push(x)});const out=[];let last;while(out.length<arr.length){const ks=Object.keys(g).filter(q=>g[q].length&&q!==String(last));let pool=ks.length?ks:Object.keys(g).filter(q=>g[q].length);const mx=Math.max(...pool.map(q=>g[q].length));pool=pool.filter(q=>g[q].length===mx);const q=pool[Math.floor(r()*pool.length)];out.push(g[q].shift());last=q}arr.splice(0,arr.length,...out);return arr};
for(const k of Object.keys(MX)){const m=MX[k];if(!m||!m.steps)continue;if(CGE._shuf.has(k))continue;CGE._shuf.add(k);m.steps.forEach((st,si)=>{const r=rng(hs(k+'|'+si));
 if(st.t==='bucket'&&Array.isArray(st.items)&&st.items.length>2){const ans=new Set(st.items.map(x=>x[1]));if(ans.size>1&&!ans.has(-1)){sh(st.items,r);fixAdj(st.items,x=>x[1],r)}}
 else if(st.t==='mcq'&&Array.isArray(st.items)){st.items.forEach((q,qi)=>{if(!q||!Array.isArray(q.o)||q.o.length<2||q.o.some(lbl)||typeof q.a!=='number')return;const rr=rng(hs(k+'|'+si+'|'+qi)),cor=q.o[q.a],o=sh(q.o.slice(),rr);q.o=o;q.a=o.indexOf(cor)});
  /* tránh 3 câu liền cùng vị trí đáp án */
  for(let t=0;t<4;t++){let bad=false;for(let i=2;i<st.items.length;i++){const a=st.items[i],b=st.items[i-1],c=st.items[i-2];if(a.a===b.a&&b.a===c.a&&a.o.length>1&&!a.o.some(lbl)){bad=true;const cor=a.o[a.a],n=(a.a+1)%a.o.length;[a.o[a.a],a.o[n]]=[a.o[n],a.o[a.a]];a.a=a.o.indexOf(cor)}}if(!bad)break}}
 else if(st.t==='order'&&Array.isArray(st.cards)&&Array.isArray(st.ans)&&st.cards.every(c=>/^[A-Z1-9]\. /.test(c))){
  const a=st.ans,mono=a.every((v,i)=>v===i)||a.every((v,i)=>v===a.length-1-i);
  if(mono||a.length>2&&a.every((v,i)=>i===0||v===a[i-1]+1)){const n=st.cards.length,idx=sh([...Array(n).keys()],r),nc=idx.map((o,i)=>String.fromCharCode(65+i)+'. '+st.cards[o].slice(3)),inv=[];idx.forEach((o,i)=>inv[o]=i);const na=a.map(v=>inv[v]);if(!na.every((v,i)=>v===i)){st.cards=nc;st.ans=na}}}
});}}
};
