/* ===== LB 4.7 · Round 2 – đọc có chú thích, đáp án Ex 1, nghe đọc, thêm vocab & bài luyện ===== */
{
const esc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const CN=/\b(In addition|However|For example|Nevertheless|While|such as|because|in order to|not only|but it is also|particularly|so)\b/g;
const AN=[
['Paragraph 1 · Introduction','blue',[
['From the smallest insect to the largest mammal, animals are essential to life on Earth, so it is not surprising that humans find them fascinating.','🎣 Hook','Câu mở thu hút người đọc; từ thể hiện thái độ tích cực: essential, fascinating.'],
['However, is it right to take animals from the wild and keep them in captivity in zoos and wildlife parks or should all wild animals live in freedom?','❓ Question','Nêu vấn đề tranh luận và báo hiệu bài sẽ xét cả hai phía.']]],
['Paragraph 2 · Reasons in favour of zoos','green',[
['Children can learn about animals from books and films but seeing them in real life is much more exciting and helps to encourage enthusiasm for knowing about the natural world.','👍 Reason 1','Lý do: thấy động vật ngoài đời khơi dậy hứng thú.'],
['A visit to the zoo is not only an enjoyable experience but it is also educational because visitors learn about the different species and what they need to survive.','👍 Reason 2','Lý do: giáo dục. Cấu trúc not only … but also … để nhấn mạnh.'],
['In addition, zoos and wildlife parks can protect animals from dangers that threaten their survival in the wild.','👍 Reason 3','In addition thêm một lý do nữa: bảo vệ động vật.'],
['Zoos have also succeeded in breeding animals that are endangered species, such as the giant panda, the Arabian oryx and the golden lion tamarin.','📌 Evidence','Ví dụ cụ thể làm lý do thuyết phục hơn.']]],
['Paragraph 3 · Reasons against zoos','red',[
['However, when animals are kept in a zoo or even in a wildlife park, they are not free to live as they would in the wild.','👎 Claim','However chuyển sang phía đối lập.'],
['For example, a lion in a zoo doesn’t need to hunt for its prey and it cannot leave its enclosure, so it is not a natural way of life for a wild animal.','📌 Example','Ví dụ minh hoạ cho câu trước.'],
['Cages and enclosures are necessary in order to keep visitors safe but they are a prison for the animals.','💭 Opinion','“a prison” là ẩn dụ, thể hiện quan điểm của người viết.'],
['While some species adapt well and live happily in captivity, others appear bored, stressed and unhappy.','⚖️ Balance','While nêu sự đối lập, cho thấy người viết công bằng.']]],
['Paragraph 4 · Conclusion','purple',[
['Zoos and wildlife parks that provide good conditions for their animals are a pleasure to visit and help towards the survival of many species.','🤝 Concession','Thừa nhận mặt tốt của vườn thú (tóm tắt phía FOR).'],
['Nevertheless, it does not seem right for humans to keep animals in captivity, particularly when it is possible to find out about wildlife and see them in their natural environment in films and in wildlife programmes on TV.','🏁 Final opinion','Nevertheless chuyển sang kết luận cuối: nêu quan điểm và lý do.']]]];
const TR=['Từ loài côn trùng nhỏ nhất đến loài động vật có vú lớn nhất, động vật rất cần thiết cho sự sống trên Trái Đất, nên không có gì ngạc nhiên khi con người thấy chúng hấp dẫn. Tuy nhiên, bắt động vật khỏi tự nhiên và nuôi nhốt trong vườn thú, công viên hoang dã có đúng không, hay mọi động vật hoang dã nên được sống tự do?',
'Trẻ em có thể học về động vật qua sách và phim, nhưng thấy chúng ngoài đời thú vị hơn nhiều và giúp khơi dậy hứng thú tìm hiểu thế giới tự nhiên. Đến vườn thú không chỉ thú vị mà còn mang tính giáo dục, vì du khách biết về các loài và điều chúng cần để tồn tại. Ngoài ra, vườn thú có thể bảo vệ động vật khỏi những mối nguy đe doạ sự sống còn ngoài tự nhiên. Vườn thú cũng đã nhân giống thành công các loài có nguy cơ tuyệt chủng, như gấu trúc khổng lồ, linh dương sừng thẳng Ả Rập và khỉ sư tử vàng.',
'Tuy nhiên, khi bị nuôi trong vườn thú hay công viên hoang dã, động vật không được sống tự do như ngoài tự nhiên. Ví dụ, sư tử trong vườn thú không cần săn mồi và không thể rời khỏi khu rào, nên đó không phải lối sống tự nhiên của loài hoang dã. Chuồng và khu rào cần thiết để giữ an toàn cho du khách nhưng lại là nhà tù với động vật. Trong khi một số loài thích nghi tốt và sống vui, những loài khác tỏ ra chán nản, căng thẳng và không vui.',
'Vườn thú có điều kiện tốt cho động vật là nơi thú vị để tham quan và góp phần giúp nhiều loài sống sót. Tuy nhiên, việc con người nuôi nhốt động vật có vẻ không đúng, nhất là khi ta có thể tìm hiểu và xem chúng trong môi trường tự nhiên qua phim và chương trình truyền hình.'];
const KEY=[['a','Words/phrases: essential to life on Earth, not surprising, fascinating → the writer thinks animals are important and amazing.'],['b','The question introduces the debate and makes the reader think; it signals that both sides will be discussed. Yes, it is a good way to open.'],['c','Open answer. Example: breeding endangered species is the strongest reason, because it directly saves species from extinction.'],['d','They are evidence: real examples (giant panda, Arabian oryx, golden lion tamarin) prove that zoos help survival.'],['e','It gives an example (a lion) to support the first sentence: animals in zoos are not free.'],['f','Opinions: “they are a prison for the animals” and “others appear bored, stressed and unhappy”.'],['g','Mostly against: although good zoos have benefits, the writer thinks it does not seem right to keep animals in captivity.']];
const o=window.rdBook;window.rdBook=function(k){const h=o?o(k):'';if(k!=='3.6')return h;
const cd='rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm',W=window.lwWrap||(x=>x),col={blue:'text-blue-700',green:'text-green-700',red:'text-red-700',purple:'text-purple-700'},
hl=t=>esc(t).replace(CN,'<mark class="px-1 rounded bg-yellow-200 dark:bg-yellow-700/60 text-inherit">$1</mark>'),
an=AN.map((p,i)=>'<div class="'+cd+' p-4"><div class="flex items-center justify-between gap-2"><p class="font-bold '+col[p[1]]+'">'+p[0]+'</p><button data-act="lv_s" data-t="'+esc(p[2].map(s=>s[0]).join(' '))+'" class="px-3 py-1 rounded-lg border border-slate-300 dark:border-slate-600 text-xs">🔊 Nghe</button></div><div class="mt-2 space-y-2 text-sm">'+p[2].map(s=>'<div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-700/50"><span class="inline-block mr-1 px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">'+s[1]+'</span>'+W(hl(s[0]))+'<p class="mt-1 text-xs text-slate-500">'+s[2]+'</p></div>').join('')+'</div><details class="mt-2 text-sm"><summary class="cursor-pointer text-purple-700 font-semibold">🇻🇳 Dịch nghĩa đoạn này</summary><p class="mt-1">'+TR[i]+'</p></details></div>').join(''),
key=KEY.map(x=>'<details class="rounded-xl border border-slate-200 dark:border-slate-700 p-2 text-sm"><summary class="cursor-pointer font-semibold">Question '+x[0]+' · gợi ý đáp án</summary><p class="mt-1">'+x[1]+'</p></details>').join('');
return h+'<div class="mt-6"><h3 class="flex items-center gap-2 text-lg font-bold"><span class="w-7 h-7 rounded-lg bg-orange-400 text-white grid place-items-center text-sm">🔬</span>Essay anatomy · đọc kỹ từng câu</h3><p class="mt-1 text-xs text-slate-500">Từ nối được tô vàng. Bấm 🔊 để nghe, bấm từ để xem nghĩa và lưu từ.</p><div class="mt-3 space-y-3">'+an+'</div></div><div class="mt-6"><h3 class="flex items-center gap-2 text-lg font-bold"><span class="w-7 h-7 rounded-lg bg-green-500 text-white grid place-items-center text-sm">✅</span>Exercise 1 · tự kiểm tra đáp án</h3><p class="mt-1 text-xs text-slate-500">Trả lời trước, rồi mới mở gợi ý.</p><div class="mt-3 space-y-2">'+key+'</div></div>'}
/* ---- thêm từ vựng / flashcard ---- */
const L=LBC['3.6'],V=[
['species','loài','n','Zoos teach visitors about different species.'],
['endangered species','loài có nguy cơ tuyệt chủng','n','The giant panda is an endangered species.'],
['wildlife park','công viên động vật hoang dã','n','Zoos and wildlife parks protect animals.'],
['enclosure','khu rào nuôi nhốt','n','A lion cannot leave its enclosure.'],
['prey','con mồi','n','A lion in a zoo doesn’t need to hunt for its prey.'],
['hunt','săn mồi','v','Wild lions hunt for prey.'],
['breed','nhân giống, gây giống','v','Zoos have succeeded in breeding endangered animals.'],
['survival','sự sống sót','n','Zoos help towards the survival of many species.'],
['in the wild','ngoài tự nhiên','phr','Some animals face dangers in the wild.'],
['mammal','động vật có vú','n','The writer mentions the largest mammal.'],
['wildlife programme','chương trình về động vật hoang dã','n','We can watch wildlife programmes on TV.'],
['visitor','du khách','n','Cages keep visitors safe.'],
['bored','chán, buồn chán','adj','Some animals appear bored in captivity.'],
['stressed','căng thẳng','adj','Some animals appear stressed and unhappy.'],
['unnatural','không tự nhiên','adj','Captivity is an unnatural life for a wild animal.'],
['giant panda','gấu trúc khổng lồ','n','The giant panda is an endangered species.'],
['Arabian oryx','linh dương sừng thẳng Ả Rập','n','Zoos have bred the Arabian oryx.'],
['golden lion tamarin','khỉ sư tử vàng','n','The golden lion tamarin is bred in zoos.'],
['draft','bản nháp','n','Write a first draft of your essay.'],
['brainstorm','động não, nghĩ ý tưởng','v','Brainstorm ideas for and against zoos.'],
['suggestion','gợi ý, đề xuất','n','Ask another student for comments and suggestions.'],
['link ideas','nối các ý','phr','Use connectives to link your ideas.']];
const have=new Set(L.vocab.map(v=>v[0].toLowerCase()));V.forEach(v=>{if(!have.has(v[0].toLowerCase()))L.vocab.push(v)});
/* ---- bài luyện mới ---- */
const m=MX['3.6'],Q=(q,o,a,h,r)=>({q,o,a,h,r}),idx=n=>m.steps.findIndex(s=>s.n===n),ins=(after,arr)=>{const i=idx(after);if(i>=0)m.steps.splice(i+1,0,...arr)},
pts=s=>s.t==='final'?s.px:(s.t==='order'||s.t==='chk')?s.x:s.items.length*(s.x||0);
const N=[];const add=(after,arr)=>{ins(after,arr);arr.forEach(s=>N.push(s))};
add('Essay words',[{i:'🧩',n:'Zoo words 2',t:'mcq',x:1,rd:1,ctx:'More words from the model essay. Choose the best meaning.',items:[
Q('“it cannot leave its enclosure” – enclosure =',['an area with a fence or walls','a kind of food','a TV programme'],0,'Think of cages.','a fenced area for animals'),
Q('“a lion … doesn’t need to hunt for its prey” – prey =',['an animal that another animal hunts','a visitor','a cage'],0,'A lion hunts it.','an animal hunted for food'),
Q('“succeeded in breeding animals” – breeding =',['producing young animals','killing animals','feeding animals'],0,'Pandas and oryx.','producing babies'),
Q('“endangered species” – endangered =',['in danger of disappearing','very dangerous','easy to find'],0,'The giant panda.','at risk of extinction'),
Q('“help towards the survival of many species” – survival =',['continuing to live','being born','being kept in a cage'],0,'The opposite of dying out.','staying alive')]}]);
add('Model essay · True or false?',[
{i:'🔍',n:'Ex 1 · Questions a–d',t:'mcq',x:1,rd:1,ctx:'Exercise 1, paragraphs 1 and 2. Choose the best answer.',items:[
Q('a. Which words in the opening sentence show what the writer thinks about animals?',['essential … fascinating','smallest insect … largest mammal','Earth … humans'],0,'Positive words.','essential to life, fascinating'),
Q('b. Why does the writer ask a question in sentence 2?',['To introduce the debate and make the reader think','To give a fact','To end the essay'],0,'It starts the argument.','It introduces the issue and signals both sides.'),
Q('d. Why does the writer give examples of species bred in captivity?',['As evidence that zoos help survival','To show animals are unhappy','To start the conclusion'],0,'Evidence supports reasons.','They prove the reason is true.')]},
{i:'🔍',n:'Ex 1 · Questions e–g',t:'mcq',x:1,rd:1,ctx:'Exercise 1, paragraphs 3 and 4. Choose the best answer.',items:[
Q('e. What is the purpose of the second sentence of paragraph 3?',['To give an example that supports the first sentence','To change the topic','To repeat the conclusion'],0,'It starts with For example.','It gives an example (the lion).'),
Q('g. What is the writer’s answer to “Are you for or against zoos?”',['Mostly against, although good zoos have benefits','Completely for zoos','The writer has no opinion'],0,'Look at Nevertheless.','Against keeping animals in captivity.')]}]);
add('Find the connective in the essay',[{i:'🔗',n:'Choose the connective',t:'mcq',x:1,rd:1,ctx:'Choose the best connective for each sentence.',items:[
Q('Zoos educate visitors. ___, they protect endangered species.',['In addition','However','For example'],0,'Adding a reason.','In addition'),
Q('Some animals adapt well, ___ others appear bored.',['while','because','such as'],0,'Contrast in one sentence.','while'),
Q('Zoos breed rare animals, ___ the giant panda.',['such as','although','finally'],0,'Introduces examples.','such as'),
Q('___, zoos have both advantages and disadvantages.',['To sum up','For example','However'],0,'Concluding.','To sum up'),
Q('A zoo visit is ___ enjoyable ___ educational.',['not only … but also','although … but','because … so'],0,'Emphasis.','not only … but also')]}]);
add('Checklist · which paragraph?',[{i:'🧱',n:'Rebuild paragraph 3',t:'order',x:4,rd:1,h:'🧱 Put the sentences of paragraph 3 in the correct order. Tap the cards one by one.',hint:'Claim first, then the example, then the opinion, then the balance.',yl:'🧱 PARAGRAPH 3',cards:['While some species adapt well and live happily in captivity, others appear bored, stressed and unhappy.','However, when animals are kept in a zoo or even in a wildlife park, they are not free to live as they would in the wild.','Cages and enclosures are necessary in order to keep visitors safe but they are a prison for the animals.','For example, a lion in a zoo doesn’t need to hunt for its prey and it cannot leave its enclosure, so it is not a natural way of life for a wild animal.'],ans:[1,3,2,0],flow:['Claim','Example','Opinion','Balance'],ft:'🧠 PARAGRAPH STRUCTURE',bm:'Not quite. Which sentence starts with However? Undo or reset.'}]);
add('Sentence → paragraph',[{i:'🎣',n:'Hook and question',t:'book',lbl:'OPENING',sv:'Save',x:3,min:20,h:'🎣 Write your opening: one sentence to draw the reader in, then a question about zoos. Model: From the smallest insect to the largest mammal, animals are essential … However, is it right to …?',items:[['🎣','1','Your hook (1 sentence)','Animals are … / From the … to the …',[],'.{20,}'],['❓','2','Your question (1 sentence)','However, is it right to …?',[],'\\?']]}]);
m.mx+=N.reduce((a,s)=>a+pts(s),0);
const G=(ic,t,names)=>[ic,t,names.map(idx).filter(i=>i>=0)];
MXG['The Essay Workshop']=[G('🌍','Warm-up',['Zoo dilemma','My first position']),G('📖','Reading · Model essay',['Essay words','Zoo words 2','Model essay – paragraph by paragraph','Model essay · True or false?','Ex 1 · Questions a–d','Ex 1 · Questions e–g','Essay detective','Essay structure','Checklist · which paragraph?','Rebuild paragraph 3','Paragraph 3 · Fact or opinion?','Claim → reason → example','Now say it yourself']),G('💡','Ideas · For or against',['For or against – idea bank','Choose two from each side','Strong or weak argument?','Upgrade the opinion']),G('⚙️','Use of English · Connectives',['Connective lab','Find the connective in the essay','Choose the connective','Sentence → paragraph']),G('✍️','Writing · Plan, draft, edit & final version',['Hook and question','Essay plan','First draft','Self-edit detective','Peer review','Final version']),G('🗣️','Speaking · Change my mind',['Change my mind']),G('✅','Reflection & Self-check',['Reflection'])];
}

