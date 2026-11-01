/* ===== LB 4.7 · Improve your writing – nâng cấp: bài mẫu đầy đủ, trang bài, vocab, mission ===== */
{
const P1='From the smallest insect to the largest mammal, animals are essential to life on Earth, so it is not surprising that humans find them fascinating. However, is it right to take animals from the wild and keep them in captivity in zoos and wildlife parks or should all wild animals live in freedom?',
P2='Children can learn about animals from books and films but seeing them in real life is much more exciting and helps to encourage enthusiasm for knowing about the natural world. A visit to the zoo is not only an enjoyable experience but it is also educational because visitors learn about the different species and what they need to survive. In addition, zoos and wildlife parks can protect animals from dangers that threaten their survival in the wild. Zoos have also succeeded in breeding animals that are endangered species, such as the giant panda, the Arabian oryx and the golden lion tamarin.',
P3='However, when animals are kept in a zoo or even in a wildlife park, they are not free to live as they would in the wild. For example, a lion in a zoo doesn’t need to hunt for its prey and it cannot leave its enclosure, so it is not a natural way of life for a wild animal. Cages and enclosures are necessary in order to keep visitors safe but they are a prison for the animals. While some species adapt well and live happily in captivity, others appear bored, stressed and unhappy.',
P4='Zoos and wildlife parks that provide good conditions for their animals are a pleasure to visit and help towards the survival of many species. Nevertheless, it does not seem right for humans to keep animals in captivity, particularly when it is possible to find out about wildlife and see them in their natural environment in films and in wildlife programmes on TV.';
const lab=(x,c)=>'<p class="font-bold '+c+' pt-1">'+x+'</p>';
RDT['3.6']={t:'Model essay – Are you for or against zoos?',h:'<p class="font-bold">Are you for or against zoos?</p>'+lab('Paragraph 1 · Introduction','text-blue-700')+'<p>'+P1+'</p>'+lab('Paragraph 2 · Reasons in favour of zoos','text-green-700')+'<p>'+P2+'</p>'+lab('Paragraph 3 · Reasons against zoos','text-red-700')+'<p>'+P3+'</p>'+lab('Paragraph 4 · Conclusion','text-purple-700')+'<p>'+P4+'</p>',n:'Nguyên văn bài luận mẫu (LB 4.7). Bấm vào từ để xem nghĩa và lưu từ.'};
/* ---- trang bài của lesson ---- */
{const o=window.rdBook;window.rdBook=function(k){
 if(k!=='3.6')return o?o(k):'';
 const r=RDT[k],W=window.lwWrap||(x=>x),cd='rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm',
 ul=a=>'<ul class="mt-1 space-y-1 text-sm">'+a.map(x=>'<li>'+x+'</li>').join('')+'</ul>',
 side=['Start with a sentence to draw the reader into the topic.','Introduce the main points of your argument.','Give reasons in support of zoos.','Give reasons against zoos.','Summarise the main points of the argument in your conclusion.','Finish by saying whether you are for or against zoos and explain why.','Use connectives to link your ideas.','Do research to find evidence to support your views and include it.'],
 tip=[['To list or add ideas','First, To start, In the first place… · Second, In addition, Furthermore… · Third, Finally'],['To introduce examples or give reasons','For example, such as, like, therefore, for this reason, because'],['To link contrasting ideas','However, but, although, while … whereas'],['To add emphasis','not only … but also …'],['To conclude','In conclusion, To conclude, To sum up']];
 return '<div class="mt-6"><h3 class="flex items-center gap-2 text-lg font-bold"><span class="w-7 h-7 rounded-lg bg-orange-400 text-white grid place-items-center text-sm">📖</span>Reading · 4.7 Improve your writing</h3><div class="mt-3 space-y-3">'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">Model essay</p><div class="mt-3 text-sm leading-relaxed space-y-3">'+W(r.h)+'</div><p class="mt-3 text-xs text-slate-500">💡 Bấm vào từ để xem nghĩa và lưu từ.</p></div>'
 +'<div class="'+cd+' p-4 bg-amber-50 dark:bg-slate-800"><p class="text-sm font-semibold">✅ Essay checklist (ghi chú bên lề trong sách)</p>'+ul(side)+'</div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">1  Read the model essay. Answer the questions.</p><p class="mt-2 text-sm font-bold">Paragraph 1 (Introduction)</p>'+ul(['a  Which words and phrases in the opening sentence tell you what the writer thinks about animals?','b  Why do you think the writer asks a question in the second sentence? Is this a good idea at the beginning of an essay?'])+'<p class="mt-2 text-sm font-bold">Paragraph 2</p>'+ul(['c  In your opinion, which of the reasons in favour of zoos provides the strongest argument for them?','d  Why does the writer give examples about species bred in captivity?'])+'<p class="mt-2 text-sm font-bold">Paragraph 3</p>'+ul(['e  What is the purpose of the second sentence?','f  Which parts of the third and fourth sentences give opinions rather than facts?'])+'<p class="mt-2 text-sm font-bold">Paragraph 4 (Conclusion)</p>'+ul(['g  What is the writer’s answer to the question “Are you for or against zoos?”'])+'</div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">2  Write a plan for your essay.</p>'+ul(['Introduce the topic of your argument.','Give reasons in favour of zoos.','Give reasons against zoos.','Conclude by summarising the main points of your argument. Make your overall opinion clear.'])+'</div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">3  Brainstorm ideas for and against zoos. Look back at Lesson 4.6 to help you. Make notes under two headings:</p><div class="mt-2 grid grid-cols-2 gap-2 text-sm"><div class="p-3 rounded-xl bg-green-50 dark:bg-slate-700"><b>For</b><br>fun for children<br>…</div><div class="p-3 rounded-xl bg-red-50 dark:bg-slate-700"><b>Against</b><br>animals in captivity<br>… bored and stressed</div></div></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">✍️ Writing tip · Connectives</p><p class="mt-1 text-sm">Connectives are words that link ideas within a text. Here are some examples you can use.</p><div class="mt-2 space-y-2 text-sm">'+tip.map(t=>'<div><span class="font-bold text-purple-700">'+t[0]+':</span> '+t[1]+'</div>').join('')+'</div></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">4  Write a first draft of your essay.</p>'+ul(['Make sure you link your ideas so that the meaning of your argument is clear. Check that you have followed all the points in Exercise 2.','Check the spelling, grammar and punctuation.','Show your draft to another student and ask for comments and suggestions.'])+'<p class="mt-3 text-sm font-semibold">5  Write a final version of your essay.</p></div>'
 +'</div></div>'}}
/* ---- vocab / flashcards ---- */
{const L=LBC['3.6'];
 L.obj=['Hiểu cấu trúc bài luận for-and-against (mở bài – ủng hộ – phản đối – kết luận) qua bài mẫu “Are you for or against zoos?”','Phân biệt fact và opinion, nhận biết và dùng connectives để nối ý','Lập dàn ý, brainstorm ý For/Against, viết bản nháp, tự kiểm tra, nhận phản hồi và viết bản cuối'];
 const V=[
 ['essential','thiết yếu, cần thiết','adj','Animals are essential to life on Earth.'],
 ['fascinating','hấp dẫn, lôi cuốn','adj','Humans find animals fascinating.'],
 ['captivity','sự nuôi nhốt, bị giam cầm','n','Is it right to keep animals in captivity?'],
 ['freedom','sự tự do','n','Should all wild animals live in freedom?'],
 ['enthusiasm','sự nhiệt tình, hứng thú','n','Seeing animals encourages enthusiasm for the natural world.'],
 ['the natural world','thế giới tự nhiên','n','Children learn about the natural world at the zoo.'],
 ['encourage','khuyến khích, thúc đẩy','v','A visit encourages enthusiasm for wildlife.'],
 ['enjoyable','thú vị, dễ chịu','adj','A visit to the zoo is an enjoyable experience.'],
 ['experience','trải nghiệm','n','It is not only an enjoyable experience but also educational.'],
 ['threaten','đe doạ','v','Zoos protect animals from dangers that threaten their survival.'],
 ['succeed in','thành công trong việc','phr v','Zoos have succeeded in breeding endangered species.'],
 ['prison','nhà tù','n','Cages are a prison for the animals.'],
 ['adapt well','thích nghi tốt','phr','Some species adapt well and live happily in captivity.'],
 ['conditions','điều kiện (sống)','n','Zoos that provide good conditions are a pleasure to visit.'],
 ['necessary','cần thiết','adj','Cages are necessary to keep visitors safe.'],
 ['in order to','để, nhằm','phr','Cages are necessary in order to keep visitors safe.'],
 ['natural environment','môi trường tự nhiên','n','We can see wildlife in its natural environment on TV.'],
 ['nevertheless','tuy nhiên, dù vậy','adv','Nevertheless, it does not seem right to keep animals in captivity.'],
 ['particularly','đặc biệt là','adv','It seems wrong, particularly when we can watch them on TV.'],
 ['whereas','trong khi (đối lập)','conj','Some zoos are good, whereas others are poor.'],
 ['while','trong khi; mặc dù','conj','While some species adapt well, others appear unhappy.'],
 ['although','mặc dù','conj','Although zoos are fun, animals lose their freedom.'],
 ['for this reason','vì lý do này','phr','For this reason, many people are against zoos.'],
 ['to sum up','tóm lại','phr','To sum up, I am against keeping animals in zoos.'],
 ['to conclude','để kết luận','phr','To conclude, zoos have both advantages and disadvantages.'],
 ['in the first place','trước hết','phr','In the first place, zoos educate visitors.'],
 ['not only … but also …','không những … mà còn …','phr','A zoo visit is not only enjoyable but also educational.'],
 ['main points','các ý chính','n','Summarise the main points in your conclusion.'],
 ['summarise','tóm tắt','v','In the conclusion, summarise your argument.'],
 ['draw the reader in','thu hút người đọc','phr','Start with a sentence that draws the reader in.'],
 ['evidence','bằng chứng','n','Do research to find evidence to support your views.']];
 const have=new Set(L.vocab.map(v=>v[0].toLowerCase()));V.forEach(v=>{if(!have.has(v[0].toLowerCase()))L.vocab.push(v)});
 L.gram=L.gram.concat([
 {t:'Cấu trúc câu từ bài mẫu',r:'not only … but also … (không những … mà còn) · While / Whereas + mệnh đề, mệnh đề khác (đối lập) · However, … / Nevertheless, … (đầu câu, có dấu phẩy) · in order to + V (mục đích) · so + mệnh đề (kết quả).',ex:['A visit to the zoo is not only an enjoyable experience but it is also educational.','While some species adapt well, others appear bored, stressed and unhappy.','Cages are necessary in order to keep visitors safe.']},
 {t:'Fact vs opinion trong bài luận',r:'Fact: kiểm chứng được (A lion in a zoo cannot leave its enclosure). Opinion: thể hiện đánh giá (they are a prison; others appear unhappy; it does not seem right…). Bài luận tốt dùng fact làm bằng chứng và opinion để rút ra kết luận.',ex:[]}]);
 L.tips=L.tips.concat(['Đoạn mở bài: một câu thu hút người đọc + một câu hỏi dẫn vào chủ đề (như bài mẫu).','Mỗi đoạn một ý chính; mở đoạn bằng connective (However, In addition…) để người đọc theo dõi.','Kết luận: tóm tắt ý chính và nói rõ bạn for hay against, kèm lý do.']);
}
/* ---- mission ---- */
{const m=MX['3.6'],Q=(q,o,a,h,r)=>({q,o,a,h,r}),idx=n=>m.steps.findIndex(s=>s.n===n),ins=(after,arr)=>{m.steps.splice(idx(after)+1,0,...arr)};
 ['Model essay – paragraph by paragraph','Essay detective','Claim → reason → example'].forEach(n=>{const i=idx(n);if(i>=0)m.steps[i].rd=1});
 ins('My first position',[
 {i:'📚',n:'Essay words',t:'mcq',x:2,rd:1,ctx:'Words from the model essay. Choose the best meaning.',items:[
  Q('“animals are essential to life on Earth” – essential =',['very important and necessary','a little interesting','dangerous'],0,'Without them life would be different.','absolutely necessary'),
  Q('“encourage enthusiasm for knowing about the natural world” – enthusiasm =',['strong interest and excitement','fear','boredom'],0,'A positive feeling.','strong interest'),
  Q('“keep them in captivity” – captivity =',['being kept in a place and not free','living in the wild','travelling abroad'],0,'The opposite of freedom.','not being free'),
  Q('“dangers that threaten their survival” – threaten =',['be likely to harm or destroy','help','feed'],0,'Dangers.','be a danger to'),
  Q('“Nevertheless, it does not seem right…” – Nevertheless =',['However / in spite of that','For example','In addition'],0,'It introduces a contrasting idea.','However'),
  Q('“particularly when it is possible to find out about wildlife” – particularly =',['especially','rarely','exactly'],0,'Special emphasis.','especially')]}]);
 ins('Model essay – paragraph by paragraph',[
 {i:'✅',n:'Model essay · True or false?',t:'mcq',x:1,rd:1,ctx:'Read the model essay again. Is each statement true or false?',items:[
  Q('Seeing animals in real life encourages enthusiasm for the natural world.',['True','False'],0,'Paragraph 2.','True – paragraph 2.'),
  Q('Zoos have bred giant pandas, Arabian oryx and golden lion tamarins.',['True','False'],0,'Paragraph 2, last sentence.','True.'),
  Q('The writer thinks cages and enclosures are a pleasure for the animals.',['True','False'],1,'Look for “prison”.','False – “a prison for the animals”.'),
  Q('The writer says all species are unhappy in captivity.',['True','False'],1,'“While some species adapt well…”','False – some adapt well.'),
  Q('Zoos with good conditions are an unpleasant place to visit.',['True','False'],1,'Paragraph 4, first sentence.','False – “a pleasure to visit”.'),
  Q('In the end the writer is against keeping animals in captivity.',['True','False'],0,'“it does not seem right…”','True – the conclusion.')]}]);
 ins('Essay detective',[
 {i:'🧱',n:'Essay structure',t:'order',x:6,rd:1,h:'🧱 Put the parts of a for-and-against essay in the correct order. Tap the cards one by one.',hint:'Start with a hook; the conclusion is last.',yl:'🧱 YOUR STRUCTURE',cards:['📌 Conclusion · summarise and say whether you are for or against, and why','🌍 Introduction · draw the reader in and introduce the main points','👎 Reasons against zoos','👍 Reasons in favour of zoos'],ans:[1,3,2,0],flow:['Introduction','For','Against','Conclusion'],ft:'🧠 STRUCTURE',bm:'Not quite. What comes first? What comes last? Undo or reset.'},
 {i:'🗂️',n:'Checklist · which paragraph?',t:'bucket',x:1,h:'🗂️ Match each point from the essay checklist with the paragraph where it belongs.',hint:'Look at the model essay.',lab:['1 · Introduction','2 · For zoos','3 · Against zoos','4 · Conclusion'],items:[['Start with a sentence to draw the reader into the topic.',0],['Introduce the main points of your argument.',0],['Give reasons in support of zoos.',1],['Give reasons against zoos.',2],['Summarise the main points of the argument.',3],['Finish by saying whether you are for or against zoos and explain why.',3]],sg:'💡 Connectives and evidence belong in every paragraph.'},
 {i:'🔎',n:'Paragraph 3 · Fact or opinion?',t:'bucket',x:1,rd:1,h:'🔎 Question f: Which parts of paragraph 3 give opinions rather than facts?',hint:'Can you check it, or does the writer judge?',lab:['🟢 FACT','🔴 OPINION'],items:[['A lion in a zoo doesn’t need to hunt for its prey.',0,'You can check it.'],['A lion in a zoo cannot leave its enclosure.',0,'A fact about captivity.'],['Cages and enclosures are necessary in order to keep visitors safe.',0,'A reason / purpose that can be checked.'],['… they are a prison for the animals.',1,'A judgement – a comparison.'],['… others appear bored, stressed and unhappy.',1,'“appear” – the writer’s interpretation.'],['It does not seem right for humans to keep animals in captivity.',1,'The writer’s opinion.']],sg:'💡 Good essays use facts as evidence and opinions to draw conclusions.'}]);
 ins('Connective lab',[
 {i:'🔗',n:'Find the connective in the essay',t:'mcq',x:1,rd:1,ctx:'Choose the connective used in the model essay.',items:[
  Q('Adds another reason in favour of zoos (paragraph 2).',['In addition','However','Nevertheless'],0,'It adds an idea.','In addition'),
  Q('Opens paragraph 3 to show a contrast.',['However','Furthermore','In conclusion'],0,'Contrast with paragraph 2.','However'),
  Q('Introduces the example of a lion.',['For example','Therefore','While'],0,'Example.','For example'),
  Q('“___ some species adapt well…, others appear bored.” Shows contrast.',['While','Because','In addition'],0,'Contrast inside one sentence.','While'),
  Q('Starts the conclusion’s final, contrasting view.',['Nevertheless','Firstly','For instance'],0,'The writer’s final position.','Nevertheless')]}]);
 m.mx+=12+6+6+6+6+5;
 const G=(ic,t,names)=>[ic,t,names.map(idx).filter(i=>i>=0)];
 MXG['The Essay Workshop']=[G('🌍','Warm-up',['Zoo dilemma','My first position']),G('📖','Reading · Model essay',['Essay words','Model essay – paragraph by paragraph','Model essay · True or false?','Essay detective','Essay structure','Checklist · which paragraph?','Paragraph 3 · Fact or opinion?','Claim → reason → example','Now say it yourself']),G('💡','Ideas · For or against',['For or against – idea bank','Choose two from each side','Strong or weak argument?','Upgrade the opinion']),G('⚙️','Use of English · Connectives',['Connective lab','Find the connective in the essay','Sentence → paragraph']),G('✍️','Writing · Plan, draft, edit & final version',['Essay plan','First draft','Self-edit detective','Peer review','Final version']),G('🗣️','Speaking · Change my mind',['Change my mind']),G('✅','Reflection & Self-check',['Reflection'])];
}
}

