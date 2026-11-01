/* ===== Work book Unit 4 · gộp các round tương tự (4.1–4.3, 4.5–4.8) ===== */
{const sig=a=>JSON.stringify(a),pt=s=>s.t==='final'?s.px:(s.t==='order'||s.t==='chk')?s.x:(s.items||[]).length*(s.x||0);
const mergeG=(k,groups)=>{const m=MX[k];if(!m)return;const S=m.steps,mp=[],out=[],used=new Set(),old=S.reduce((a,s)=>a+pt(s),0);
const can=(a,b)=>a.t===b.t&&(a.t==='mcq'||a.t==='book'||a.t==='chk'||(a.t==='bucket'&&sig(a.lab)===sig(b.lab)));
S.forEach((s,i)=>{if(used.has(i))return;const g=groups.find(g=>g[1]===i),ids=g?g.slice(1).filter(j=>S[j]&&!used.has(j)&&can(s,S[j])):[];
if(ids.length<2){mp[i]=out.length;out.push(s);return}
const L=ids.map(j=>S[j]),b={...s,n:g[0]},tot=L.reduce((a,x)=>a+pt(x),0);ids.forEach(j=>{used.add(j);mp[j]=out.length});
if(s.t==='chk'){b.list=[].concat(...L.map(x=>x.list));b.x=tot}else{b.items=[].concat(...L.map(x=>x.items));if(tot)b.x=Math.max(1,Math.round(tot/b.items.length))}
if(s.t==='mcq')b.ctx=[...new Set(L.map(x=>x.ctx).filter(Boolean))].join(' ');
if(s.t==='book'){b.items=b.items.map((it,n)=>{it=it.slice();it[1]=String(n+1);return it});b.min=L.reduce((a,x)=>a+(x.min||0),0)}
if(s.t==='book'||s.t==='chk')b.h=[...new Set(L.map(x=>x.h).filter(Boolean))].join('\n\n');
out.push(b)});
m.steps=out;m.mx=m.mx-old+out.reduce((a,s)=>a+pt(s),0);
const G=MXG[m.title],seen=new Set();if(G)MXG[m.title]=G.map(g=>[g[0],g[1],[...new Set(g[2].map(i=>mp[i]).filter(i=>i!=null&&!seen.has(i)))].map(i=>(seen.add(i),i))]).filter(g=>g[2].length)};
mergeG('w3.0',[['Vocabulary check',3,4,5],['Humans, birds and dogs',7,9],['Colour words & word families',11,12,13]]);
mergeG('w3.1',[['Situations & responses',1,4],['Word sorter',3,5],['Medical writing',8,9]]);
mergeG('w3.2',[['Warm-up · Same or different DNA?',0,1],['Exercise 1 – Quiz',5,7],['Human Genome Project',8,9],['Compare & write',11,12,13]]);
mergeG('w3.4',[['Warm-up · What do they have in common?',0,1],['Who helps? Which text?',6,7],['The circle of life · one animal',11,12]]);
mergeG('w3.5',[['Opinion & reason',1,2],['Exercise 1 · Prepositions',4,5],['Tense check',13,14,15]]);
mergeG('w3.6',[['Why? · Exercise 1',1,2],['Opinion & argument sorter',3,4,6],['Connect the ideas',14,15],['Draft & checker',17,18],['Repair & highlight',19,20],['Peer review & improve',21,22]]);
mergeG('w3.7',[['Read the poem',1,2],['Position & visualise',4,5],['Questions 1–7',8,11,13],['Poetry camera',14,15],['Poem workshop',16,17],['Poem checks',18,19]]);}
