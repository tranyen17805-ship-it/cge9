/* ===== LB 4.8 · Project challenge – bài đọc, fact file, vocab flashcard, bài luyện ===== */
{
const esc=x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const FF=[['Name','Amur leopard','báo Amur'],['Scientific name','Panthera pardus orientalis','tên khoa học'],['Endangered status','critically endangered','cực kỳ nguy cấp'],['Population (estimated)','84 individuals','ước tính 84 cá thể'],['Habitats','forests in the east of Russia','rừng ở phía đông nước Nga'],['Features','solitary, fast, strong','sống đơn độc, nhanh, khoẻ'],['Lifespan','10–15 years in the wild, up to 20 years in captivity','tuổi thọ: 10–15 năm ngoài tự nhiên, tới 20 năm khi nuôi nhốt'],['Major threat','illegal wildlife trade','buôn bán động vật hoang dã trái phép']];
const FT='Poachers kill the leopards in order to sell their beautiful spotted fur. Habitat loss and lack of prey are also a problem.',PS='stop poaching, increase prey population (deer, wild boar), protect habitat',GN='Russia created a new protected area for the Amur leopards in 2012. It’s called ‘Land of the Leopard National Park’.';
const P1=['First do some research to find out about some endangered species. Select one you think is interesting.','Tell your group about the animal you have selected, giving the reasons for your choice. The group discusses all the suggestions and then makes a collective decision.','Research and write notes about the animal. Look at the notes about the Amur leopard to help you.','Find a photo of the animal. Write a caption for it to use as the title for your fact file.','Write your notes on the fact file.','Give a presentation to the class based on your fact file. Explain why you have chosen to feature this species.'];
const P2=['Work in groups. Discuss who you will choose as the subject of your speech.','Find out about the life and achievements of the scientist you have chosen. Divide the research questions among the members of the group.','Each member of the group writes their section of the speech, using the information they have found.','Take turns to read out what you have written. The rest of the group listens and suggests corrections to the grammar and pronunciation.','Make notes giving the key information for your section, so that you can give your part of the speech without reading it.','Practise giving your speech from your notes.','Give your speech.','Ask for comments and questions from your audience.'];
const RQ=['Where and when did the scientist live?','What did he / she discover?','How was the discovery received at the time?','How did the discovery help people?'];
const TP=['Take a few deep breaths and relax first.','Look at the audience as you speak – don’t look down.','Speak slowly and calmly.','Smile.'];
const ffH='<p class="font-bold">The world’s rarest wild cat</p>'+FF.map(r=>'<p><b>'+r[0]+':</b> '+r[1]+'</p>').join('')+'<p>'+FT+'</p><p><b>Positive steps:</b> '+PS+'</p><p><b>Good news:</b> '+GN+'</p>';
RDT['3.7']={t:'Project challenge · Amur leopard fact file',h:ffH,n:'Nguyên văn ghi chú mẫu (LB 4.8). Bấm vào từ để xem nghĩa và lưu từ.'};
const o=window.rdBook;window.rdBook=function(k){const h=o?o(k):'';if(k!=='3.7')return h;
const cd='rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm',W=window.lwWrap||(x=>x),
ul=a=>'<ol class="mt-1 space-y-1 text-sm list-decimal pl-5">'+a.map(x=>'<li>'+W(esc(x))+'</li>').join('')+'</ol>',
sp=t=>'<button data-act="lv_s" data-t="'+esc(t)+'" class="px-3 py-1 rounded-lg border border-slate-300 dark:border-slate-600 text-xs">🔊 Nghe</button>',
hd=(i,c,t)=>'<h3 class="flex items-center gap-2 text-lg font-bold"><span class="w-7 h-7 rounded-lg '+c+' text-white grid place-items-center text-sm">'+i+'</span>'+t+'</h3>';
return h+'<div class="mt-6">'+hd('📖','bg-orange-400','Reading · 4.8 Project challenge')+'<div class="mt-3 space-y-3">'
+'<div class="'+cd+' p-4"><p class="font-semibold text-sm">Project 1: A species in danger of extinction</p><p class="mt-1 text-sm">You are going to make a fact file about an animal species in danger of extinction.</p>'+ul(P1)+'<ul class="mt-2 text-sm space-y-1"><li>• What did you like most about doing this project?</li><li>• What did you learn about working as part of a team?</li></ul></div>'
+'<div class="'+cd+' p-4 bg-amber-50 dark:bg-slate-800"><div class="flex items-center justify-between gap-2"><p class="font-semibold text-sm">🐆 The world’s rarest wild cat · fact file</p>'+sp(FF.map(r=>r[0]+': '+r[1]).join('. ')+'. '+FT+' Positive steps: '+PS+'. Good news: '+GN)+'</div><div class="mt-2 text-sm divide-y divide-slate-200 dark:divide-slate-700">'+FF.map(r=>'<div class="py-1.5 grid grid-cols-[8.5rem_1fr] gap-2"><b>'+r[0]+'</b><span>'+W(esc(r[1]))+'<br><span class="text-xs text-slate-500">'+r[2]+'</span></span></div>').join('')+'</div><p class="mt-2 text-sm">'+W(esc(FT))+'</p><p class="mt-1 text-sm"><b>Positive steps:</b> '+W(esc(PS))+'</p><p class="mt-1 text-sm"><b>Good news:</b> '+W(esc(GN))+'</p><details class="mt-2 text-sm"><summary class="cursor-pointer text-purple-700 font-semibold">🇻🇳 Nghĩa các phần</summary><p class="mt-1">Kẻ săn trộm giết báo để bán bộ lông đốm đẹp. Mất môi trường sống và thiếu con mồi cũng là vấn đề. Bước tích cực: chấm dứt săn trộm, tăng số lượng con mồi (hươu, lợn rừng), bảo vệ môi trường sống. Tin vui: năm 2012 Nga lập khu bảo tồn mới cho báo Amur, gọi là Vườn quốc gia “Vùng đất của loài báo”.</p></details></div>'
+'<div class="'+cd+' p-4"><p class="font-semibold text-sm">Project 2: A medical pioneer</p><p class="mt-1 text-sm">You are going to prepare and give a three-minute speech about Edward Jenner, Marie Curie, Louis Pasteur, Al-Zahrawi, Ugur Sahin and Ozlem Tureci, or another important scientist who has made a difference to world health.</p>'+ul(P2)+'<p class="mt-3 text-sm font-semibold">Research questions</p><ul class="mt-1 text-sm space-y-1">'+RQ.map(x=>'<li>• '+W(esc(x))+'</li>').join('')+'</ul><p class="mt-3 text-sm font-semibold">If you are feeling nervous…</p><ul class="mt-1 text-sm space-y-1">'+TP.map(x=>'<li>• '+W(esc(x))+'</li>').join('')+'</ul><div class="mt-2">'+sp(RQ.join(' ')+' '+TP.join(' '))+'</div><ul class="mt-2 text-sm space-y-1"><li>• What was the most useful or interesting aspect of doing this project?</li><li>• How did it affect the way you feel about speaking in public?</li></ul></div>'
+'</div></div>'};
/* ---- vocab / flashcard ---- */
const L=LBC['3.7'],V=[
['extinction','sự tuyệt chủng','n','The Amur leopard is in danger of extinction.'],
['individual','cá thể','n','There are about 84 individuals in the wild.'],
['solitary','sống đơn độc','adj','Leopards are solitary animals.'],
['scientific name','tên khoa học','n','The scientific name is Panthera pardus orientalis.'],
['estimated','ước tính','adj','The estimated population is 84.'],
['illegal wildlife trade','buôn bán động vật hoang dã trái phép','n','The major threat is illegal wildlife trade.'],
['poacher','kẻ săn trộm','n','Poachers kill leopards for their fur.'],
['spotted fur','bộ lông đốm','n','They sell the beautiful spotted fur.'],
['in order to','để, nhằm','phr','Poachers kill them in order to sell their fur.'],
['habitat loss','mất môi trường sống','n','Habitat loss is also a problem.'],
['prey','con mồi','n','There is a lack of prey.'],
['wild boar','lợn rừng','n','Wild boar and deer are prey.'],
['protected area','khu bảo tồn','n','Russia created a new protected area.'],
['national park','vườn quốc gia','n','It is called Land of the Leopard National Park.'],
['positive step','bước đi tích cực','n','A positive step is to stop poaching.'],
['in captivity','trong điều kiện nuôi nhốt','phr','Leopards live up to 20 years in captivity.'],
['collective decision','quyết định chung của nhóm','n','The group makes a collective decision.'],
['select','chọn','v','Select a species you think is interesting.'],
['presentation','bài thuyết trình','n','Give a presentation to the class.'],
['team','nhóm, đội','n','What did you learn about working as part of a team?'],
['achievement','thành tựu','n','Find out about the scientist’s achievements.'],
['discovery','phát hiện, khám phá','n','What did he or she discover? How was the discovery received?'],
['make a difference','tạo nên sự khác biệt','phr','Scientists make a difference to world health.'],
['divide','chia (việc)','v','Divide the research questions among the group.'],
['pronunciation','phát âm','n','The group suggests corrections to pronunciation.'],
['nervous','lo lắng, hồi hộp','adj','If you are feeling nervous, take a few deep breaths.'],
['calmly','một cách bình tĩnh','adv','Speak slowly and calmly.'],
['comment','nhận xét','n','Ask for comments and questions from your audience.']];
const have=new Set(L.vocab.map(v=>v[0].toLowerCase()));V.forEach(v=>{if(!have.has(v[0].toLowerCase()))L.vocab.push(v)});
L.gram=(L.gram||[]).concat([{t:'Ghi chú (notes) → câu đầy đủ',r:'Fact file dùng cụm danh từ, bỏ chủ ngữ/động từ (Habitats: forests in the east of Russia). Khi thuyết trình, nói thành câu đầy đủ: The Amur leopard lives in forests in the east of Russia.',ex:['Population: 84 individuals → There are only about 84 Amur leopards left.']},{t:'Nêu lý do chọn: because / in order to',r:'I chose … because … (lý do) · … in order to + V (mục đích) · One reason is … Another reason is …',ex:['We chose the Amur leopard because it is critically endangered.','Poachers kill leopards in order to sell their fur.']},{t:'Nói về cuộc đời nhà khoa học',r:'Past simple: lived, discovered, was received, helped. Thêm mốc thời gian: in 1796, at that time, later.',ex:['Edward Jenner lived in England. He discovered the first vaccine.']}]);
L.tips=(L.tips||[]).concat(['Fact file: mỗi mục một cụm ngắn; khi nói, chuyển thành câu đầy đủ.','Chọn loài vì lý do rõ ràng (số lượng, mối đe dọa, tin vui) rồi cả nhóm quyết định chung.','Speech: mỗi bạn một câu hỏi nghiên cứu, rồi nói bằng ghi chú, không đọc.']);
/* ---- bài luyện ---- */
const m=MX['3.7'],Q=(q,o,a,h,r)=>({q,o,a,h,r}),idx=n=>m.steps.findIndex(s=>s.n===n),pt=s=>s.t==='final'?s.px:(s.t==='order'||s.t==='chk')?s.x:(s.items||[]).length*(s.x||0);
const old=m.steps.slice(),N=[];const add=(after,arr)=>{const i=idx(after);if(i<0)return;m.steps.splice(i+1,0,...arr);arr.forEach(s=>N.push(s))};
add('Endangered?',[
{i:'🐆',n:'Amur leopard · fact file',t:'mcq',x:1,rd:1,ctx:'Read the fact file about the Amur leopard. Choose the best answer.',items:[
Q('What is the Amur leopard’s endangered status?',['critically endangered','not endangered','extinct'],0,'Look at “Endangered status”.','critically endangered'),
Q('About how many Amur leopards are there?',['84','840','8,400'],0,'Population (estimated).','84 individuals'),
Q('Where do Amur leopards live?',['forests in the east of Russia','deserts in Africa','mountains in Peru'],0,'Habitats.','forests in the east of Russia'),
Q('Why do poachers kill the leopards?',['to sell their spotted fur','to protect farms','to study them'],0,'“in order to sell …”','to sell their beautiful spotted fur'),
Q('What happened in 2012?',['Russia created a protected area for the leopards','The leopards became extinct','Poaching increased'],0,'Good news.','Land of the Leopard National Park'),
Q('How long can they live in captivity?',['up to 20 years','up to 10 years','up to 2 years'],0,'Lifespan.','up to 20 years')]},
{i:'🗂️',n:'Threats and positive steps',t:'bucket',x:1,rd:1,h:'🗂️ Sort the notes from the fact file.',hint:'Is it a problem – or something that helps the leopards?',lab:['🌍 HABITAT','⚠️ THREAT','✅ POSITIVE STEP'],items:[['forests in the east of Russia',0],['illegal wildlife trade',1],['habitat loss',1],['lack of prey',1],['stop poaching',2],['increase prey population (deer, wild boar)',2],['protect habitat',2]],sg:'💡 Your own fact file needs all three: habitat, threats, positive steps.'},
{i:'🧩',n:'Project words',t:'mcq',x:1,rd:1,ctx:'Words from the project. Choose the best meaning.',items:[
Q('solitary =',['living alone','living in a group','very fast'],0,'Leopards …','living alone'),
Q('poacher =',['a person who illegally kills wild animals','a zoo keeper','a scientist'],0,'Poachers kill leopards.','illegal hunter'),
Q('collective decision =',['a decision made by the whole group','a decision made by the teacher','a secret decision'],0,'Group work.','decision by the group'),
Q('caption =',['short text with a photo','a long essay','a kind of animal'],0,'Step 4.','text under a photo'),
Q('achievement =',['something important you have done','a mistake','a holiday'],0,'Scientists’ …','a success'),
Q('discovery =',['finding something new','losing something','a short speech'],0,'What did he discover?','finding something new')]}]);
add('Project brief',[{i:'🧱',n:'Project 1 · six steps',t:'order',x:6,rd:1,h:'🧱 Put the six steps of Project 1 in the correct order. Tap the cards one by one.',hint:'Research and choose first; the presentation is last.',yl:'🧱 PROJECT 1',cards:['Find a photo and write a caption for the title.','Research endangered species and select one.','Give a presentation to the class.','Tell your group about your choice and decide together.','Write your notes on the fact file.','Research and write notes about the animal.'],ans:[1,3,5,0,4,2],flow:['Select','Decide','Notes','Photo','Fact file','Present'],ft:'🧠 PROJECT STEPS',bm:'Not quite. What do you do before you choose? What is last? Undo or reset.'}]);
add('Fact file builder',[{i:'🖼️',n:'Caption & reasons',t:'book',lbl:'FACT FILE',sv:'Save',x:3,min:20,h:'🖼️ Steps 2 and 4. Write a caption for your photo (it is the title of your fact file) and give reasons for your choice. Model caption: The world’s rarest wild cat.',items:[['🖼️','1','Your caption (title)','The world’s … / The … in danger',[],'.{8,}'],['💬','2','Why did you choose this species?','We chose … because … Another reason is …',[],'because|reason']]}]);
add('Speaking tips',[{i:'🩺',n:'Project 2 · speech check',t:'mcq',x:1,rd:1,ctx:'Project 2: A medical pioneer. Choose the best answer.',items:[
Q('How long is the speech?',['three minutes','thirty minutes','three seconds'],0,'Project 2 introduction.','three minutes'),
Q('Which is a research question?',['How did the discovery help people?','What is your favourite food?','Where is the school?'],0,'Four research questions.','How did the discovery help people?'),
Q('What does the group do while one student reads out their section?',['listens and suggests corrections to grammar and pronunciation','sleeps','leaves the room'],0,'Step 4.','listens and suggests corrections'),
Q('Why make notes of the key information?',['to give your part without reading it','to hand in to the teacher','to copy from a book'],0,'Step 5.','to speak without reading'),
Q('If you feel nervous, you should …',['take a few deep breaths and relax','speak very fast','look at the floor'],0,'Speaking tips.','take deep breaths')]}]);
m.mx+=N.reduce((a,s)=>a+pt(s),0);
const G=MXG[m.title];if(G){const g2=G.map(g=>[g[0],g[1],g[2].map(i=>m.steps.indexOf(old[i])).filter(i=>i>=0)]);
N.map(s=>m.steps.indexOf(s)).sort((a,b)=>a-b).forEach(j=>{const g=g2.find(g=>g[2].includes(j-1));if(g)g[2].push(j)});g2.forEach(g=>g[2].sort((a,b)=>a-b));MXG[m.title]=g2}
}
