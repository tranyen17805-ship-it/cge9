/* ===== LB 4.5 · The circle of life – nâng cấp: bài đọc đầy đủ, vocab, mission ===== */
{
const KW=['extinct','habitat loss','herbivores?','hunting','in captivity','interdependent','in the wild','poachers?','pollinators?','prey'];
const kw=s=>s.replace(new RegExp('\\b('+KW.join('|')+')\\b','gi'),'<b>$1</b>');
const hd=x=>'<p class="font-bold text-blue-700 pt-1">'+x+'</p>';
const A=[
'An animal or plant species is declared extinct when it has not been seen for many years. The rate of extinction is now increasing quickly. Between 30% and 50% of all species could become extinct by 2050.',
'The disappearance of so many animals, insects and plants is due mainly to human activity, through habitat loss, pollution and climate change. Towns and cities are expanding into rural areas, which means that animals don’t have enough food, water and shelter. Plastics and chemicals such as pesticides contaminate the soil. Air, water, noise and light pollution also harm wildlife and the ecosystem.',
'Hunting reduces the number of animals in the wild. People pay to kill wildlife such as elephants, lions and other big cats. According to the African Wildlife Association, Africa’s lion population has decreased in size by approximately 42% in the past 20 years. Fish, reptiles, spiders, birds and mammals are captured and sold as pets; poachers kill wild animals to sell their body parts. Every year, according to the National Geographic Society, poachers take more than 38 million animals from Brazil. Most are birds, which become pets.',
'Animal and plant life are interdependent. We rely on bees, butterflies and other pollinators to make plants grow, to feed herbivores as well as humans. In the wild, the reduction in herbivores means that predators whose prey are animals like deer, zebra and antelope don’t have enough food. Some animals and insects are particularly dependent on each other: there are birds that feed on the insects that live on a hippopotamus. If hippos become extinct, so do the birds. A study by researchers at Oregon State University concluded that about 60% of large herbivores are in danger of extinction.',
'Fortunately, conservation programmes are making progress. For example, in 1985, there were fewer than 100 rhinos left in the wild. Now, there are around 21,000. Numbers of giant pandas have also increased with around 1800 currently living in the wild and around 300 in captivity. Consequently, they are considered to be ‘vulnerable’ rather than ‘endangered’.'];
const B=[
'Extinction is a natural process. Take the example of the dodo. It simply wasn’t strong enough to survive. Ask people to name a species that has become extinct and it’s always the dodo. But the dodo became extinct four centuries ago.',
'We are told that loss of habitat means that animals find it hard to survive. Animals and plants adapt to new surroundings: foxes learn to live in cities, camels and cactus plants survive in the desert, polar bears live in the Arctic. Of course, there are always programmes on TV that show us how the ice is melting and the polar bears are finding it hard to survive, and warning of the dangers of oil and gas exploration destroying their habitat. But there is no reason why you can’t use the Arctic for oil and gas and still leave plenty of space for bears. The people who want to stop this are just anti-big business. They just want to stop those of us who work hard to provide oil and gas for the people of this world. The Arctic is a big place. There’s enough room for human beings and animals.',
'People also claim that we are responsible for climate change. They seem to forget that climate change has been happening for millions of years. Yes, the Earth is getting warmer, but we just have to get used to it.',
'Hunting is another issue that receives a lot of attention in the media, but people forget that animals hunt animals: there are predators and there is prey. Cats prey on mice, lions prey on zebras. They kill far more than human beings kill. There are still plenty of mice; there are still plenty of zebras. And let’s remember that sometimes bad news is fake news.'];
const P=a=>a.map(x=>'<p>'+kw(x)+'</p>').join('');
RDT['3.4']={t:'The circle of life – Article A & Article B',h:hd('Article A')+P(A)+hd('Article B')+P(B),n:'Nguyên văn Article A và Article B (LB 4.5). Từ khoá environmental science được in đậm – bấm vào từ để xem nghĩa và lưu từ.'};
/* ---- trang bài đọc của lesson ---- */
{const o=window.rdBook;window.rdBook=function(k){
 if(k!=='3.4')return o?o(k):'';
 const r=RDT[k],W=window.lwWrap||(x=>x),cd='rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm',
 chip=x=>'<span class="inline-block px-2 py-1 m-0.5 rounded-lg bg-white/70 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs">'+x+'</span>',
 ul=a=>'<ul class="mt-1 space-y-1 text-sm">'+a.map(x=>'<li>'+x+'</li>').join('')+'</ul>',
 keys=['extinct','habitat loss','herbivore','hunting','in captivity','interdependent','in the wild','poacher','pollinator','prey'],
 fig=[['Species that could be extinct by 2050','30%–50%'],['Fall in Africa’s lion population (20 years)','≈ 42%'],['Animals taken from Brazil every year','> 38 million'],['Large herbivores in danger of extinction','≈ 60%'],['Rhinos in the wild: 1985 → now','< 100 → ≈ 21,000'],['Giant pandas: wild / in captivity','≈ 1800 / ≈ 300']];
 return '<div class="mt-6"><h3 class="flex items-center gap-2 text-lg font-bold"><span class="w-7 h-7 rounded-lg bg-orange-400 text-white grid place-items-center text-sm">📖</span>Reading · 4.5 The circle of life</h3><div class="mt-3 space-y-3">'
 +'<div class="'+cd+' p-4 bg-amber-50 dark:bg-slate-800"><p class="text-sm"><b>In this lesson you will…</b> read two texts about endangered species and differentiate between fact and opinion.</p><p class="mt-2 text-sm font-semibold">Key words · Environmental science</p><div>'+keys.map(chip).join('')+'</div></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">1  Read these two articles. They are on the same topic. How are they different?</p><div class="mt-3 text-sm leading-relaxed space-y-3">'+W(r.h)+'</div><p class="mt-3 text-xs text-slate-500">💡 Bấm vào từ để xem nghĩa và lưu từ.</p></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">📊 Facts & figures · Article A</p><div class="mt-2 overflow-x-auto"><table class="text-sm w-full"><tbody>'+fig.map(f=>'<tr class="border-t border-slate-200 dark:border-slate-700"><td class="py-1 pr-3">'+f[0]+'</td><td class="py-1 font-semibold whitespace-nowrap">'+f[1]+'</td></tr>').join('')+'</tbody></table></div></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">2  Read the articles again and find the words and phrases in the environmental science key words box. Work with a partner to say what they mean.</p><p class="mt-1 text-sm italic">A: Extinct. That’s when an animal disappears for ever.</p></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">3  Read the dictionary definitions of the words objective and biased, then answer the questions about the articles.</p>'+ul(['<b>objective</b>: influenced only by facts and not by feelings','<b>biased</b>: supporting or opposing a particular person or thing in an unfair way, by allowing personal opinions to influence your judgement'])+'<div class="mt-2">'+ul(['a  Is one article more objective than the other? Support your answer with examples.','b  Is one article biased? What makes you think this?','c  Reread the second paragraph in Article B (‘We are told that …’). What do we learn about the writer?'])+'</div></div>'
 +'<div class="'+cd+' p-4"><p class="text-sm font-semibold">4  Speaking: work in small groups. You have been invited to take part in a television debate on endangered species. Use these questions in your debate.</p>'+ul(['What is the evidence that plant and animal species are endangered?','Why are plant and animal species disappearing?','Does everyone agree that this is a serious problem?','What can be done?'])+'</div>'
 +'</div></div>'}}
/* ---- vocab / flashcards ---- */
{const L=LBC['3.4'];
 L.obj=['Đọc hai bài viết cùng chủ đề về loài có nguy cơ tuyệt chủng (Article A – khách quan, Article B – thiên vị)','Phân biệt fact (sự thật) và opinion (ý kiến)','Dùng 10 từ khoá environmental science để nói về nguyên nhân và hệ quả của tuyệt chủng','Phân tích bài viết objective hay biased, tìm evidence và tham gia tranh luận trên truyền hình'];
 const V=[
 ['species','loài (sinh vật)','n','Between 30% and 50% of all species could become extinct by 2050.'],
 ['endangered','có nguy cơ tuyệt chủng, nguy cấp','adj','The giant panda used to be an endangered species.'],
 ['vulnerable','dễ bị tổn hại; (loài) sắp nguy cấp','adj','Pandas are now vulnerable rather than endangered.'],
 ['conservation programme','chương trình bảo tồn','n','Conservation programmes are making progress.'],
 ['climate change','biến đổi khí hậu','n','Human activity is a cause of climate change.'],
 ['pollution','sự ô nhiễm','n','Air, water, noise and light pollution harm wildlife.'],
 ['contaminate','làm ô nhiễm, làm nhiễm bẩn','v','Chemicals such as pesticides contaminate the soil.'],
 ['pesticide','thuốc trừ sâu','n','Pesticides can kill useful insects as well as pests.'],
 ['shelter','nơi trú ẩn, chỗ ở','n','Animals need food, water and shelter.'],
 ['rural','thuộc nông thôn','adj','Towns are expanding into rural areas.'],
 ['expand','mở rộng, phát triển','v','Cities expand and animals lose their habitat.'],
 ['capture','bắt, bắt giữ','v','Birds are captured and sold as pets.'],
 ['body parts','các bộ phận cơ thể (động vật)','n','Poachers kill animals to sell their body parts.'],
 ['approximately','xấp xỉ, khoảng','adv','The lion population fell by approximately 42%.'],
 ['decrease','giảm, sự giảm','v/n','The population has decreased in size.'],
 ['increase','tăng, sự tăng','v/n','Numbers of giant pandas have increased.'],
 ['reduction','sự giảm bớt','n','A reduction in herbivores means less food for predators.'],
 ['population','quần thể; dân số','n','Africa’s lion population has decreased.'],
 ['rate','tốc độ; tỷ lệ','n','The rate of extinction is now increasing quickly.'],
 ['researcher','nhà nghiên cứu','n','Researchers at Oregon State University did the study.'],
 ['according to','theo như (nguồn)','phr','According to the National Geographic Society, poachers take 38 million animals.'],
 ['fortunately','may mắn thay','adv','Fortunately, conservation programmes are making progress.'],
 ['consequently','do đó, vì vậy','adv','Numbers increased; consequently, pandas are “vulnerable”.'],
 ['dependent on','phụ thuộc vào','adj phr','Some birds are dependent on hippos.'],
 ['adapt','thích nghi','v','Foxes adapt to life in cities.'],
 ['surroundings','môi trường xung quanh','n','Animals adapt to new surroundings.'],
 ['natural process','quá trình tự nhiên','n','The writer says extinction is a natural process.'],
 ['dodo','chim dodo (đã tuyệt chủng)','n','The dodo became extinct four centuries ago.'],
 ['exploration','sự thăm dò, khai thác (dầu khí)','n','Oil and gas exploration may destroy habitats.'],
 ['big business','các tập đoàn lớn','n','The writer calls his opponents “anti-big business”.'],
 ['claim','khẳng định, cho rằng; lời khẳng định','v/n','People claim that we are responsible for climate change.'],
 ['responsible for','chịu trách nhiệm về','adj phr','Are humans responsible for climate change?'],
 ['issue','vấn đề, chủ đề gây tranh luận','n','Hunting is another issue in the media.'],
 ['the media','truyền thông, báo chí','n','Hunting receives a lot of attention in the media.'],
 ['fake news','tin giả','n','Sometimes bad news is fake news.'],
 ['get used to','quen với','phr','We just have to get used to it.'],
 ['plenty of','nhiều, dồi dào','phr','There are still plenty of zebras.'],
 ['hippopotamus','hà mã','n','Birds feed on insects that live on a hippopotamus.'],
 ['insect','côn trùng','n','Bees and other insects are pollinators.']];
 const have=new Set(L.vocab.map(v=>v[0].toLowerCase()));V.forEach(v=>{if(!have.has(v[0].toLowerCase()))L.vocab.push(v)});
 L.gram=(L.gram||[]).concat([
 {t:'Objective vs biased language',r:'Objective: dùng số liệu, nguồn (according to…, approximately, X% …), từ trung tính. Biased: dùng nhãn và từ đánh giá (just, anti-…, those of us who…, “we just have to…”), bỏ qua quan điểm khác.',ex:['Some people oppose oil and gas exploration in the Arctic. (objective)','The people who want to stop this are just anti-big business. (biased)']},
 {t:'Nói về số liệu và thay đổi',r:'according to + nguồn · approximately/around/more than/fewer than + số · decrease/increase by X% · from … to … · between X and Y.',ex:['Africa’s lion population has decreased by approximately 42%.','There were fewer than 100 rhinos in 1985. Now there are around 21,000.']}]);
 L.tips=(L.tips||[]).concat(['Đọc Article A trước: mỗi đoạn có một nguồn hoặc số liệu (%, million, 1985…). Article B gần như không có nguồn.','Article B: chú ý nhãn gán cho người khác (“just anti-big business”) và “we just have to get used to it”.','Ngoài thực tế, hãy tự hỏi: Ai nói? Có nguồn không? Có bỏ qua quan điểm khác không?','Debate: Evidence → Reasons → Opinion → Solution (What can be done?).']);
}
/* ---- mission ---- */
{const m=MX['3.4'],Q=(q,o,a,h,r)=>({q,o,a,h,r}),idx=n=>m.steps.findIndex(s=>s.n===n),
 ins=(after,arr)=>{m.steps.splice(idx(after)+1,0,...arr)};
 m.steps[idx('Read the two articles')].rd=1;
 m.steps[idx('Read the two articles')].items.push(['📊','2','Which article gives statistics? Give two examples.','Article A gives … and …',[],'42|38 million|60|21,000|1800|30|50|lion|rhino|panda|brazil']);
 ['Two voices, one topic','Key words','Fact or opinion?','Evidence detective'].forEach(n=>{const i=idx(n);if(i>=0)m.steps[i].rd=1});
 ins('Read the two articles',[
 {i:'📘',n:'Article A · What does it say?',t:'mcq',x:1,rd:1,ctx:'Read Article A again, then choose the best answer.',items:[
  Q('When is a species declared extinct?',['When it has not been seen for many years','When all its babies die','When it moves to a zoo'],0,'Paragraph 1.','It is declared extinct when it has not been seen for many years.'),
  Q('What is the main reason so many species are disappearing?',['Natural changes in the weather','Human activity','Too many pollinators'],1,'“due mainly to …”','Human activity – habitat loss, pollution and climate change.'),
  Q('Why do animals in rural areas lack food, water and shelter?',['Towns and cities are expanding into rural areas','Farmers keep them in captivity','Predators eat all the plants'],0,'Paragraph 2.','Because towns and cities are expanding.'),
  Q('What does the hippo example show?',['Animals and insects can depend on each other','Hippos are predators','Birds are pollinators'],0,'“If hippos become extinct, so do the birds.”','Some animals are particularly dependent on each other.'),
  Q('Why are giant pandas now “vulnerable” rather than “endangered”?',['Their numbers have increased','They only live in zoos','Poachers have stopped'],0,'Last paragraph.','Conservation programmes have increased their numbers.')]},
 {i:'📊',n:'Numbers & facts',t:'mcq',x:1,rd:1,ctx:'Find the numbers in Article A.',items:[
  Q('Between 30% and 50% of all species could become extinct by …',['2030','2050','2100'],1,'Paragraph 1.','By 2050.'),
  Q('According to the African Wildlife Association, Africa’s lion population has decreased by approximately … in 20 years.',['24%','42%','60%'],1,'Hunting paragraph.','About 42%.'),
  Q('Every year poachers take more than … animals from Brazil.',['3.8 million','38 million','380 million'],1,'National Geographic Society.','More than 38 million.'),
  Q('About … of large herbivores are in danger of extinction (Oregon State University).',['16%','30%','60%'],2,'Interdependent paragraph.','About 60%.'),
  Q('Rhinos in the wild: 1985 → now',['fewer than 100 → around 21,000','around 1,000 → around 2,100','fewer than 100 → around 2,100'],0,'Last paragraph.','Fewer than 100 in 1985; around 21,000 now.'),
  Q('Giant pandas: in the wild / in captivity',['around 300 / around 1800','around 1800 / around 300','around 1800 / around 3000'],1,'Last paragraph.','Around 1800 in the wild and around 300 in captivity.')]},
 {i:'📙',n:'Article B · What does the writer think?',t:'bucket',x:1,rd:1,h:'📙 Read Article B again. Does the writer say this?',hint:'Check the text – don’t guess from the topic.',lab:['✅ Article B says this','❌ Article B does NOT say this'],items:[
  ['The dodo became extinct about four hundred years ago.',0,'First paragraph.'],
  ['Foxes, camels and polar bears can all live in new surroundings.',0,'Second paragraph – animals adapt.'],
  ['Oil and gas exploration in the Arctic should be stopped.',1,'The writer says there is enough room for oil, gas and bears.'],
  ['Climate change has been happening for millions of years.',0,'Third paragraph.'],
  ['Humans kill more animals than predators do.',1,'The writer says animals kill far more than humans.'],
  ['Some bad news is fake news.',0,'Last sentence.']],sg:'💡 Now compare: Article A gives sources and numbers; Article B gives the writer’s attitude.'}]);
 ins('Key words',[
 {i:'🧩',n:'Words in context',t:'mcq',x:1,rd:1,ctx:'Use the context in the articles to choose the best meaning.',items:[
  Q('“Plastics and chemicals such as pesticides contaminate the soil.” contaminate =',['make dirty or poisonous','make richer','clean'],0,'Pollution harms wildlife.','To make something dirty or poisonous.'),
  Q('“…animals don’t have enough food, water and shelter.” shelter =',['a safe place to live or hide','a kind of food','a hunting tool'],0,'What do animals need besides food and water?','A place that protects you.'),
  Q('“…decreased by approximately 42%.” approximately =',['exactly','about, not exactly','less than'],1,'Statistics are often not exact.','About / around.'),
  Q('“Consequently, they are considered to be ‘vulnerable’…” Consequently =',['As a result','However','For example'],0,'Numbers increased → so …','As a result.'),
  Q('“Animals and plants adapt to new surroundings.” adapt =',['change to fit new conditions','disappear','become bigger'],0,'Foxes live in cities.','Change to suit new conditions.'),
  Q('A “vulnerable” species is one that is …',['likely to be harmed or lost','already extinct','safe from danger'],0,'Between safe and endangered.','Easily harmed or in danger.')]}]);
 ins('What if the herbivores disappear?',[
 {i:'🔄',n:'Cause and effect',t:'mcq',x:1,rd:1,ctx:'Match each cause from Article A with its effect.',items:[
  Q('Towns and cities are expanding into rural areas. →',['Animals don’t have enough food, water and shelter.','Pandas become vulnerable.','Rhino numbers increase.'],0,'Habitat loss.','Less space means less food, water and shelter.'),
  Q('Poachers kill animals and capture birds to sell. →',['The number of animals in the wild falls.','Herbivores increase.','Pollution decreases.'],0,'Hunting reduces numbers.','Hunting and poaching reduce wild populations.'),
  Q('The number of herbivores falls. →',['Predators don’t have enough food.','Plants grow faster.','Hippos become extinct.'],0,'Who eats herbivores?','Predators lose their prey.'),
  Q('Conservation programmes work. →',['Rhino and panda numbers rise.','More habitat is lost.','Species become extinct faster.'],0,'Last paragraph.','Rhino and panda numbers increase.')]}]);
 m.mx+=30;
 MXG['Critical Reader Mission']=[['🌍','Warm-up',[0,1]],['📖','Reading · Article A & B',[2,3,4,5,6]],['📚','Vocabulary · Environmental science',[7,8,9,10,11]],['🔎','Critical reading · Fact, opinion & bias',[12,13,14,15]],['⚙️','Language & Writing · Change the voice · Argument map',[16,17]],['🗣️','Speaking · TV debate',[18,19,20]],['✅','Reflection & Self-check',[21]]];
}
}

