/* ===== LB 4.6 · Views on zoos – nâng cấp: trang bài, vocab, mission ===== */
{
{const o=window.rdBook;window.rdBook=function(k){
 if(k!=='3.5')return o?o(k):'';
 const cd='rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm',
 chip=x=>'<span class="inline-block px-2 py-1 m-0.5 rounded-lg bg-white/70 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs">'+x+'</span>',
 ul=a=>'<ul class="mt-1 space-y-1 text-sm">'+a.map(x=>'<li>'+x+'</li>').join('')+'</ul>',
 keys=['enclosure','instinct','keeper','breed','genetic diversity','cage','wildlife park','release (into the wild)'],
 defs=[['a','to allow animals bred in captivity to live in freedom in their natural habitat','release'],['b','variety of genetic characteristics in a species','genetic diversity'],['c','the natural way an animal behaves','instinct'],['d','a large park where wildlife live in captivity','wildlife park'],['e','a structure of bars or wires in which animals are kept','cage'],['f','an area surrounded by a fence in which animals are kept','enclosure'],['g','to reproduce','breed'],['h','a person who looks after animals in a zoo','keeper']],
 sp=[['a','Amir','against'],['b','Isla',''],['c','Huyen',''],['d','Onel',''],['e','Shashi',''],['f','Kareem','']],
 op=['a  Going to the zoo is a great day out for families.','b  If people want to see wild animals, they should watch wildlife programmes on TV.','c  It goes against wild animals’ natural instincts to be kept in cages or enclosures.','d  Seeing animals in a zoo helps people to identify with and care about wildlife.','e  Zoos breed endangered species and release them into the wild.','f  Taking animals from the wild reduces genetic diversity.'],
 ex4=[['a','I think that animals in zoos suffer ___ stress and boredom.','from'],['b','There are zoos that specialise ___ breeding animals, such as the giant panda, in captivity.','in'],['c','In zoos and wildlife parks, endangered species can be protected ___ dangers such as habitat loss and being killed by poachers and hunters.','from'],['d','Breeding endangered species in zoos to release into the wild can save them ___ extinction.','from'],['e','I don’t agree ___ people who say that zoos can provide a good environment for animals.','with'],['f','I don’t approve ___ any species being taken from the wild.','of'],['g','Zoos are a good way of introducing people ___ the amazing variety of species.','to'],['h','But you should also listen ___ the experts who say that taking animals from the wild reduces genetic diversity.','to'],['i','The survival of many species in the wild will depend ___ people protecting their habitats.','on']],
 ch=[['in','believe in · succeed in · <b>specialise in</b>'],['from','suffer from · <b>protect from</b> · <b>save from</b>'],['of','die of · <b>approve of</b>'],['on','<b>depend on</b> · concentrate on · rely on'],['to','belong to · <b>introduce to</b> · <b>listen to</b>'],['with','agree with · compare with']];
 return '<div class="mt-6"><h3 class="flex items-center gap-2 text-lg font-bold"><span class="w-7 h-7 rounded-lg bg-orange-400 text-white grid place-items-center text-sm">📖</span>Reading · 4.6 Views on zoos</h3><div class="mt-3 space-y-3">'
 +'<div class="'+cd+' p-4 bg-amber-50 dark:bg-slate-800"><p class="text-sm"><b>In this lesson you will…</b> listen to, understand and exchange opinions about zoos · use verbs followed by prepositions.</p><p class="mt-2 text-sm font-semibold">Key words</p><div>'+keys.map(chip).join('')+'</div><p class="mt-3 text-sm">💬 <b>Why do zoos exist?</b></p></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">Vocabulary · 1  You will hear these words and phrases in the interview in Exercise 2. To prepare, match the words to the definitions.</p>'+ul(defs.map(d=>d[0]+'  '+d[1]))+'<details class="mt-2 text-sm"><summary class="cursor-pointer text-blue-600">Xem đáp án</summary><p class="mt-1">'+defs.map(d=>d[0]+' = <b>'+d[2]+'</b>').join(' · ')+'</p></details></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">Listening · 2  Listen to six people talking about zoos. Who is in favour of zoos? Who is against them? Write ‘for’ or ‘against’ for each person.</p>'+ul(sp.map(s=>s[0]+'  '+s[1]+(s[2]?'  <b>'+s[2]+'</b> (ví dụ)':'')))+'<p class="mt-2 text-xs text-slate-500">Đáp án b–f phụ thuộc vào file nghe của sách – nghe rồi ghi vào bước “Exercise 2” trong mission.</p></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">3  Listen again. Which person gives each of these opinions?</p>'+ul(op)+'</div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">Use of English · Dependent prepositions following verbs</p><p class="mt-1 text-sm">There are no rules about which prepositions follow certain verbs. It’s best to learn and use them as often as you can. <b>Copy and complete the chart when you’ve done Exercise 4.</b></p><div class="mt-2 overflow-x-auto"><table class="text-sm w-full"><tbody>'+ch.map(c=>'<tr class="border-t border-slate-200 dark:border-slate-700"><td class="py-1 pr-3 font-bold text-purple-700">'+c[0]+'</td><td class="py-1">'+c[1]+'</td></tr>').join('')+'</tbody></table></div><p class="mt-1 text-xs text-slate-500">In đậm = các cụm bạn tự điền sau Exercise 4.</p></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">4  Complete these sentences with the correct prepositions. Then put each verb + preposition in the correct place in the Use of English box.</p>'+ul(ex4.map(e=>e[0]+'  '+e[1]))+'<details class="mt-2 text-sm"><summary class="cursor-pointer text-blue-600">Xem đáp án</summary><p class="mt-1">'+ex4.map(e=>e[0]+' <b>'+e[2]+'</b>').join(' · ')+'</p></details></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">Speaking · 5  Work in small groups. Discuss these questions.</p>'+ul(['a  Do you approve of animals being kept in zoos?','b  What do zoos and wildlife parks succeed in doing?'])+'</div>'
 +'</div></div>'}}
/* ---- vocab / flashcards ---- */
{const L=LBC['3.5'];
 L.obj=['Nghe, hiểu và trao đổi ý kiến về vườn thú (for / against)','Dùng động từ + giới từ (dependent prepositions): suffer from, specialise in, protect from, depend on…','Dùng từ vựng zoo để nêu ý kiến và tham gia thảo luận nhóm'];
 const V=[
 ['wildlife','động vật hoang dã','n','Zoos help people care about wildlife.'],
 ['wildlife programme','chương trình về thế giới hoang dã','n','Watch wildlife programmes if you want to see wild animals.'],
 ['natural habitat','môi trường sống tự nhiên','n','Zoos cannot copy an animal’s natural habitat.'],
 ['great day out','một ngày đi chơi tuyệt vời','phr','A zoo is a great day out for families.'],
 ['identify with','đồng cảm với, thấy mình ở trong','phr v','Visitors identify with animals and care about them.'],
 ['care about','quan tâm đến','phr v','People care about wildlife after they see it.'],
 ['in favour of','ủng hộ, tán thành','phr','Amir is not in favour of zoos.'],
 ['against','chống lại, phản đối','prep','Isla is against keeping animals in cages.'],
 ['go against','đi ngược lại, trái với','phr v','Cages go against wild animals’ natural instincts.'],
 ['endangered species','loài có nguy cơ tuyệt chủng','n','Zoos breed endangered species.'],
 ['reduce','làm giảm','v','Taking animals from the wild reduces genetic diversity.'],
 ['survival','sự sống sót','n','The survival of many species depends on their habitats.'],
 ['protect from','bảo vệ khỏi','phr v','Endangered species can be protected from poachers.'],
 ['save from','cứu khỏi','phr v','Breeding programmes can save species from extinction.'],
 ['introduce to','giới thiệu (ai) với/về','phr v','Zoos introduce people to the variety of species.'],
 ['listen to','lắng nghe','phr v','You should listen to the experts.'],
 ['stress','căng thẳng','n','Some animals suffer from stress and boredom.'],
 ['boredom','sự buồn chán','n','Boredom can make animals behave abnormally.'],
 ['expert','chuyên gia','n','Experts say taking animals from the wild is harmful.'],
 ['variety','sự đa dạng, nhiều loại','n','The zoo shows the amazing variety of species.'],
 ['provide','cung cấp','v','Can zoos provide a good environment?']];
 const have=new Set(L.vocab.map(v=>v[0].toLowerCase()));V.forEach(v=>{if(!have.has(v[0].toLowerCase()))L.vocab.push(v)});
 L.gram=L.gram.concat([{t:'Bảng dependent prepositions (Exercise 4)',r:'in: believe in, succeed in, specialise in · from: suffer from, protect from, save from · of: die of, approve of · on: depend on, concentrate on, rely on · to: belong to, introduce to, listen to · with: agree with, compare with.',ex:['Zoos specialise in breeding endangered species.','Endangered species can be protected from poachers.','I don’t approve of any species being taken from the wild.']},
 {t:'Sau giới từ: danh từ hoặc V-ing',r:'verb + preposition + noun / pronoun / V-ing. Muốn dùng một hành động sau giới từ, dùng V-ing (hoặc being + V3 cho bị động).',ex:['Zoos succeed in teaching people about wildlife.','Do you approve of animals being kept in zoos?']}]);
 L.tips=L.tips.concat(['Ex 2: nghe lấy ý chính (for / against), Ex 3: nghe chi tiết để biết ai nói câu nào.','Mẹo: copy bảng 6 cột in – from – of – on – to – with vào vở và bổ sung mỗi khi gặp cụm mới.']);
}
/* ---- mission ---- */
{const m=MX['3.5'],Q=(q,o,a,h,r)=>({q,o,a,h,r}),idx=n=>m.steps.findIndex(s=>s.n===n),ins=(after,arr)=>{m.steps.splice(idx(after)+1,0,...arr)},
 PP=['a  Amir','b  Isla','c  Huyen','d  Onel','e  Shashi','f  Kareem'],NM=['Amir','Isla','Huyen','Onel','Shashi','Kareem'];
 ins('What does the word DO?',[
 {i:'🧩',n:'More zoo words',t:'mcq',x:2,ctx:'Words and phrases from the exercises in this lesson.',items:[
  Q('Going to the zoo is a great ______ for families.',['day out','day off','day in'],0,'A trip for fun.','a great day out'),
  Q('Programmes about animals in nature are ______ programmes.',['wildlife','wildflower','wild'],0,'Wild animals = wildlife.','wildlife programmes'),
  Q('Zoos can help people ______ with wildlife and care about it.',['identify','invite','insist'],0,'identify with …','identify with'),
  Q('Isla is “in favour of” zoos. She …',['supports zoos','opposes zoos','ignores zoos'],0,'in favour of = for.','supports'),
  Q('A species in danger of disappearing for ever is ______.',['endangered','abnormal','genetic'],0,'In danger.','endangered'),
  Q('Cages go ______ wild animals’ natural instincts.',['against','for','with'],0,'go against = be opposite to.','go against')]},
 {i:'🎧',n:'Exercise 2 · For or against?',t:'book',lbl:'EX 2',sv:'Save',x:2,min:5,h:'🎧 Listen to six people talking about zoos (audio của sách). Write for or against for each person. Example: a Amir – against.',items:[['🎧','b','Isla','for / against',['for','against'],'for|against'],['🎧','c','Huyen','for / against',['for','against'],'for|against'],['🎧','d','Onel','for / against',['for','against'],'for|against'],['🎧','e','Shashi','for / against',['for','against'],'for|against'],['🎧','f','Kareem','for / against',['for','against'],'for|against']]},
 {i:'👂',n:'Exercise 3 · Who gives each opinion?',t:'book',lbl:'EX 3',sv:'Save',x:2,min:8,h:'👂 Listen again. Which person gives each opinion? Choose the speaker and note the words that helped you decide.',items:[
  ['💬','a','Going to the zoo is a great day out for families.','Words that helped me decide …',NM,'.{2,}'],
  ['💬','b','If people want to see wild animals, they should watch wildlife programmes on TV.','Words that helped me decide …',NM,'.{2,}'],
  ['💬','c','It goes against wild animals’ natural instincts to be kept in cages or enclosures.','Words that helped me decide …',NM,'.{2,}'],
  ['💬','d','Seeing animals in a zoo helps people to identify with and care about wildlife.','Words that helped me decide …',NM,'.{2,}'],
  ['💬','e','Zoos breed endangered species and release them into the wild.','Words that helped me decide …',NM,'.{2,}'],
  ['💬','f','Taking animals from the wild reduces genetic diversity.','Words that helped me decide …',NM,'.{2,}']]}]);
 ins('Verb chunks',[
 {i:'📋',n:'Complete the chart',t:'bucket',x:1,h:'📋 Copy and complete the chart (Exercise 4). Which column does each verb + preposition belong to? Verbs from Ex 4: specialise, protect, save, approve, depend, introduce, listen.',hint:'Think of the whole chunk: specialise ___ → specialise in.',lab:['in','from','of','on','to','with'],items:[['specialise',0],['protect',1],['save',1],['approve',2],['depend',3],['introduce',4],['listen',4]],sg:'💡 Chart: in – believe, succeed, specialise · from – suffer, protect, save · of – die, approve · on – depend, concentrate, rely · to – belong, introduce, listen · with – agree, compare.'}]);
 m.mx+=12+10+12+7;
 const G=(ic,t,names)=>[ic,t,names.map(idx).filter(i=>i>=0)];
 MXG['Zoo Council']=[G('🌍','Warm-up',['Zoo or wild?','The zoo dilemma']),G('📚','Vocabulary · Zoo words',['Match before you listen','What does the word DO?','More zoo words']),G('🎧','Listening · Views on zoos',['Exercise 2 · For or against?','Exercise 3 · Who gives each opinion?','Listen – should animals be kept in zoos?','Video: for or against?','Who said it?','Video vocabulary','Attitude and argument','For or against?']),G('⚙️','Use of English · Dependent prepositions',['Complete with the right preposition','Verb chunks','Complete the chart','Build the sentence','Finish my sentence','Opinion builder']),G('🗣️','Speaking · Zoo Council debate',['Do you approve?','Zoo council','Change my mind']),G('✅','Reflection & Self-check',['Reflection'])];
}
}

