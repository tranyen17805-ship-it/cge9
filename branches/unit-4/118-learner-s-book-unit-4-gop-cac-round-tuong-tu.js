/* ===== Learner’s Book Unit 4 · gộp các round tương tự (4.1–4.8) ===== */
{const sig=a=>JSON.stringify(a),pt=s=>s.t==='final'?s.px:(s.t==='order'||s.t==='chk')?s.x:(s.items||[]).length*(s.x||0);
const mergeG=(k,groups)=>{const m=MX[k];if(!m)return;const S=m.steps,mp=[],out=[],used=new Set(),old=S.reduce((a,s)=>a+pt(s),0);
const can=(a,b)=>a.t===b.t&&a.aud===b.aud&&a.tr===b.tr&&(a.t==='mcq'||a.t==='book'||a.t==='chk'||(a.t==='bucket'&&sig(a.lab)===sig(b.lab)));
S.forEach((s,i)=>{if(used.has(i))return;const g=groups.find(g=>g[1]===i),ids=g?g.slice(1).filter(j=>S[j]&&!used.has(j)&&can(s,S[j])):[];
if(ids.length<2){mp[i]=out.length;out.push(s);return}
const L=ids.map(j=>S[j]),b={...s,n:g[0]},tot=L.reduce((a,x)=>a+pt(x),0);ids.forEach(j=>{used.add(j);mp[j]=out.length});
if(s.t==='chk'){b.list=[].concat(...L.map(x=>x.list));b.x=tot}else{b.items=[].concat(...L.map(x=>x.items));if(tot)b.x=Math.max(1,Math.round(tot/b.items.length))}
if(L.some(x=>x.rd))b.rd=1;if(s.t==='mcq')b.ctx=[...new Set(L.map(x=>x.ctx).filter(Boolean))].join(' ');
if(s.t==='book'){b.items=b.items.map((it,n)=>{it=it.slice();it[1]=String(n+1);return it});b.min=L.reduce((a,x)=>a+(x.min||0),0)}
if(s.t==='book'||s.t==='chk')b.h=[...new Set(L.map(x=>x.h).filter(Boolean))].join('\n\n');
out.push(b)});
m.steps=out;m.mx=m.mx-old+out.reduce((a,s)=>a+pt(s),0);
const G=MXG[m.title],seen=new Set();if(G)MXG[m.title]=G.map(g=>[g[0],g[1],[...new Set(g[2].map(i=>mp[i]).filter(i=>i!=null&&!seen.has(i)))].map(i=>(seen.add(i),i))]).filter(g=>g[2].length)};
mergeG('3.0',[['Think about it · -ing · shades',6,7,8]]);
mergeG('3.1',[['Why Jenner mattered · Understand the text · What am I?',5,6,7],['Active → passive',11,12]]);
mergeG('3.2',[['Words & DNA',4,5,6],['Fingerprints & differences',8,9],['Talk about it · speaking upgrade',13,14]]);
mergeG('3.3',[['Cause and effect · Questions a–e',5,6],['Evidence & numbers',7,8],['Reference & vocabulary',9,10,11],['Notice the grammar',15,16],['Advantages · Inventor for a day',21,22]]);
mergeG('3.4',[['Article A · facts & numbers',3,4],['Key words & words in context',7,8],['Herbivores · cause and effect',10,11],['Evidence & bias',13,14]]);
mergeG('3.5',[['Zoo words',2,3,4],['Exercises 2 & 3',5,6],['Video vocabulary & attitude',10,11],['Verb + preposition chunks',14,15],['Finish & build opinions',17,18],['Approve? · Zoo council',19,20]]);
mergeG('3.6',[['Essay words',2,3],['Model essay · True or false?',5,6,7],['Connective check',20,21],['Sentence → paragraph · hook',22,23]]);
mergeG('3.7',[['Notes & research',5,6],['Project 2 · pioneer questions',14,15]]);}
