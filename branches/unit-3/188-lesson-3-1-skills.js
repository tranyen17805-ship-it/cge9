
/* ===== Lesson 3.1 On holiday · thẻ thứ 3 "Skills practice" · Speaking: Talking about your vacation (Oxford Online English) ===== */
(function(){
if(window.__sp31)return;window.__sp31=1;
const KEY='cge9sp31',LINK='https://www.oxfordonlineenglish.com/talking-about-your-vacation',ID0=8310;
const C=(typeof card!=='undefined')?card:'rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm';
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const hi=t=>esc(t).replace(/\*(.+?)\*/g,'<b style="color:var(--ud)">$1</b>');
const plain=t=>String(t).replace(/\*/g,'');
const wc=t=>(String(t).trim().match(/\S+/g)||[]).length;
const ld=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return{}}};
const S=ld();S.s=S.s||0;S.q=S.q||{};S.t=S.t||{};S.d=S.d||{};S.m=S.m||{};S.c=S.c||{};S.x=S.x||{};if(S.v!==2){S.q={};S.v=2}
const sv=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const speak=t=>{try{const sy=window.speechSynthesis;if(!sy)return;sy.cancel();setTimeout(()=>{const u=new SpeechSynthesisUtterance(t),vs=sy.getVoices()||[],v=vs.find(v=>/^en[-_]GB/i.test(v.lang))||vs.find(v=>/^en/i.test(v.lang));u.lang='en-GB';u.rate=.85;if(v)u.voice=v;sy.speak(u);if(sy.paused)sy.resume()},80)}catch(e){}};
const snd=k=>{try{if(window.cgeSound)cgeSound(k)}catch(e){}};
try{const st=document.createElement('style');st.textContent='.spok{background:#dcfce7!important;border-color:#22c55e!important;color:#166534!important}.spno{background:#fee2e2!important;border-color:#ef4444!important;color:#991b1b!important}';document.head.appendChild(st)}catch(e){}
const K=(w,pos,ipa,vi,ex,em)=>({w,pos,ipa,vi,ex,em});
const Q=(q,o,a,e)=>({q,o,a,e});

const STEPS=[
{em:'🧳',short:'Basic info',t:'Where, who with, how long?',goal:'Mở đầu câu trả lời: nói em đã đi đâu, đi với ai và đi bao lâu.',
 cards:[
  K('a couple of weeks','noun phrase','/ə ˈkʌpl əv ˈwiːks/','khoảng hai tuần','We stayed at my grandparents’ house for *a couple of weeks*.','📅📅'),
  K('a long weekend','noun phrase','/ə ˌlɒŋ ˈwiːkend/','kỳ nghỉ cuối tuần dài (3–4 ngày)','We took *a long weekend* in Hue because Monday was a public holiday.','🗓️🧳'),
  K('a group of friends','noun phrase','/ə ˌɡruːp əv ˈfrendz/','một nhóm bạn','I travelled with *a group of friends* from school.','👫👭'),
  K('the countryside','noun','/ðə ˈkʌntrisaɪd/','vùng nông thôn','We spent the summer in *the countryside*.','🌾🏡'),
  K('public holiday','noun','/ˌpʌblɪk ˈhɒlədeɪ/','ngày nghỉ lễ','Monday is a *public holiday*, so we have three days off.','🎌🗓️'),
  K('for ten days','phrase','/fə ˈten deɪz/','trong mười ngày (for + khoảng thời gian)','We stayed on the island *for ten days*.','⏳🏝️')],
 model:['I went to *the countryside* with my family for *a couple of weeks*.','My friend and I went to Hue for *a long weekend*.','I travelled to Sapa with *a group of friends* for five days.'],
 quiz:[
  Q('Which phrase means 3–4 days, usually Friday to Monday?',['a couple of weeks','a long weekend','a public holiday'],1,'A long weekend = kỳ nghỉ cuối tuần kéo dài 3–4 ngày.'),
  Q('Choose the correct pair: “I went to Da Nang ___ my cousins ___ ten days.”',['with / for','by / during','at / since'],0,'went with + người đi cùng; for + khoảng thời gian.'),
  Q('Which sentence gives where, who with AND how long?',['I had a great time.','My girlfriend and I went to Rome for a long weekend.','It was very relaxing.'],1,'Câu 2 có đủ 3 thông tin: Rome (đâu), my girlfriend and I (với ai), a long weekend (bao lâu).')],
 say:{p:'Where did you go for your last holiday? Who did you go with, and how long for? Viết 3 câu khác nhau.',f:'I went to … with … for … / … and I went to … for …',r:4,
  c:['Có nơi em đã đến','Có người đi cùng','Có khoảng thời gian (for …)'],
  m:'I went to Da Lat with my cousins for a long weekend. My family and I went to the beach for a couple of weeks. I travelled to Sapa with a group of friends for four days.'}},

{em:'🥾',short:'What you did',t:'What did you do on holiday?',goal:'Kể em đã làm gì: hoạt động, tham quan, ăn uống.',
 cards:[
  K('go hiking','verb phrase','/ɡəʊ ˈhaɪkɪŋ/','đi bộ đường dài (đồi, núi)','We *went hiking* in the hills near the village.','🥾⛰️'),
  K('hang out','phrasal verb','/ˌhæŋ ˈaʊt/','đi chơi, thư giãn không có mục đích cụ thể','In the evenings we just *hung out* in the garden.','😎🛋️'),
  K('go sightseeing','verb phrase','/ɡəʊ ˈsaɪtsiːɪŋ/','đi tham quan những nơi nổi tiếng','We *went sightseeing* in Hue: the Imperial City, the royal tombs and so on.','📸🏛️'),
  K('hit the beaches','informal phrase','/hɪt ðə ˈbiːtʃɪz/','(thân mật) đi biển, đi tận hưởng biển','After the city, we *hit the beaches* for a few days.','🏖️🎉'),
  K('go on a walking tour','verb phrase','/ɡəʊ ɒn ə ˈwɔːkɪŋ tʊə(r)/','đi tour đi bộ có hướng dẫn viên (trả tiền)','We *went on a walking tour* of the old town with a local guide.','🚶🗺️'),
  K('sample','verb','/ˈsɑːmpl/','nếm thử nhiều món khác nhau','We *sampled* the local cuisine every evening.','🍜🥢')],
 model:['We *went hiking* in the hills, and in the evenings we just *hung out* at the homestay.','We *went sightseeing* in Hue: the Imperial City, the royal tombs and so on.','Then we *hit the beaches* in Phu Quoc and *sampled* as much seafood as we could!'],
 quiz:[
  Q('“We just hung out in the village.” What does hang out mean?',['spend time in a relaxed way, with no special goal','work very hard','travel by bus'],0,'Hang out = dành thời gian thoải mái, không có mục tiêu cụ thể.'),
  Q('Which is a very informal way to say “we went to the beaches”?',['We hit the beaches.','We visited the beaches.','We were at the beaches.'],0,'Hit the beaches là cách nói thân mật, hay dùng khi đi chơi, tiệc tùng.'),
  Q('You try lots of different local dishes. Which verb fits?',['hike','sample','tour'],1,'Sample = thử nhiều món khác nhau.')],
 say:{p:'What did you do on your last holiday? Viết 2–3 câu và dùng ít nhất 2 cụm từ trong bộ thẻ.',f:'Mostly, we … We also … Then we …',r:4,
  c:['Dùng ít nhất 2 cụm từ mới','Có từ nối: Mostly / Also / Then','Mỗi câu nói được một hoạt động khác nhau'],
  m:'Mostly, we went hiking in the hills near the village. We also just hung out and played cards in the evenings. On the last day we went on a walking tour and sampled lots of local food.'}},

{em:'🏞️',short:'Place 1',t:'Describing a beautiful, peaceful place',goal:'Thay nice / good bằng tính từ cụ thể để miêu tả nơi em đến.',
 cards:[
  K('picturesque','adjective','/ˌpɪktʃəˈresk/','đẹp như tranh vẽ','a *picturesque* fishing village with colourful boats','🎨🏘️'),
  K('sleepy','adjective','/ˈsliːpi/','yên ắng, thanh bình (nơi chốn)','a *sleepy* little town where nothing ever happens','😴🏡'),
  K('dramatic scenery','noun phrase','/drəˈmætɪk ˈsiːnəri/','phong cảnh hùng vĩ, ấn tượng','The mountains gave us some *dramatic scenery*.','⛰️🌄'),
  K('stunning','adjective','/ˈstʌnɪŋ/','tuyệt đẹp, đẹp choáng ngợp','The beach was absolutely *stunning*.','🤩🏝️'),
  K('surrounded by','adjective phrase','/səˈraʊndɪd baɪ/','được bao quanh bởi','Our hotel was *surrounded by* mountains and rice fields.','🏨⛰️')],
 model:['Hoi An is a *picturesque*, *sleepy* old town with some *stunning* lantern-lit streets.','We stayed in a village *surrounded by* mountains with *dramatic scenery*.'],
 quiz:[
  Q('A village that is very quiet and peaceful is …',['sleepy','stunning','dramatic'],0,'Sleepy = rất yên tĩnh, thanh bình.'),
  Q('Which adjective is MORE specific than “nice”?',['nice','good','picturesque'],2,'Picturesque nói rõ hơn: đẹp như một bức tranh.'),
  Q('“Dramatic scenery” means the mountains are …',['very impressive and beautiful','boring and flat','crowded and noisy'],0,'Dramatic scenery = phong cảnh hùng vĩ, gây ấn tượng mạnh.')],
 say:{p:'Describe the place you visited with at least 3 interesting adjectives (no nice / good!).',f:'… is a very … place with some … scenery.',r:3,
  c:['Có ít nhất 3 tính từ cụ thể','Không dùng nice / good','Có nói nơi đó như thế nào (cảnh, không khí)'],
  m:'Da Lat is a picturesque, sleepy city surrounded by pine forests, with some stunning views of the hills.'}},

{em:'🏙️',short:'Place 2',t:'Describing a busy or touristy place',goal:'Miêu tả cả mặt thú vị và mặt khó chịu của một nơi đông đúc.',
 cards:[
  K('cosmopolitan','adjective','/ˌkɒzməˈpɒlɪtən/','đa văn hóa (nhiều người, nền văn hóa trộn lẫn)','Singapore is a very *cosmopolitan* city.','🌍🏙️'),
  K('overwhelming','adjective','/ˌəʊvəˈwelmɪŋ/','quá dữ dội, choáng ngợp (quá nhiều thứ cùng lúc)','The noise and the crowds were a bit *overwhelming*.','😵‍💫🔊'),
  K('there was so much going on','phrase','/ðeə wəz səʊ mʌtʃ ˈɡəʊɪŋ ɒn/','có quá nhiều thứ đang diễn ra','I couldn’t relax because *there was so much going on*.','🎪🚦'),
  K('fascinating','adjective','/ˈfæsɪneɪtɪŋ/','rất thú vị, hấp dẫn','The old town was *fascinating*.','🧐✨'),
  K('touristy','adjective','/ˈtʊərɪsti/','quá nhiều khách du lịch (mất đi nét nguyên bản)','It’s beautiful, but a bit *touristy* for me.','📷🧢'),
  K('out of this world','idiom','/ˌaʊt əv ðɪs ˈwɜːld/','tuyệt vời, ngon/hay không tưởng','The seafood was *out of this world*.','🌌😋')],
 model:['Ho Chi Minh City is very *cosmopolitan*, but it could be a little *overwhelming* because *there was so much going on*.','Hoi An is *fascinating*, though it’s quite *touristy*, too. The street food was *out of this world*.'],
 quiz:[
  Q('A city with many different people and cultures mixed together is …',['cosmopolitan','sleepy','touristy'],0,'Cosmopolitan = đa văn hóa, nhiều dân tộc cùng sống.'),
  Q('Too many people, noises and smells. You don’t know where to look. The city is …',['picturesque','overwhelming','sleepy'],1,'Overwhelming = quá nhiều thứ khiến em choáng ngợp.'),
  Q('Which word suggests a place has lost some of its original atmosphere because of tourism?',['touristy','fascinating','stunning'],0,'Touristy thường mang nghĩa hơi tiêu cực: quá nhiều du khách.')],
 say:{p:'Describe a busy or popular place you visited. Say one good thing AND one thing that was difficult or not so good.',f:'… is very … but it can be a little … The best thing was …',r:3,
  c:['Có 1 điều tích cực','Có 1 điều chưa tốt','Dùng ít nhất 2 từ mới trong bộ thẻ'],
  m:'Bangkok is very cosmopolitan, but it could be a little overwhelming because there was so much going on. The best thing was the food, which was out of this world.'}},

{em:'👍',short:'Like / dislike',t:'Saying what you liked and disliked',goal:'Nêu điều thích, điều không thích và luôn kèm lý do.',
 cards:[
  K('each day was pretty similar','phrase','/iːtʃ deɪ wəz ˈprɪti ˈsɪmɪlə/','mỗi ngày đều khá giống nhau (đơn điệu)','I got bored because *each day was pretty similar*.','🔁😐'),
  K('like nowhere I’d ever been before','phrase','/laɪk ˈnəʊweə aɪd ˈevə bɪn bɪˈfɔː/','không giống nơi nào em từng đến (độc đáo)','The island was *like nowhere I’d ever been before*.','🗺️✨'),
  K('I wasn’t so keen on …','phrase','/aɪ ˈwɒznt səʊ ˈkiːn ɒn/','mình không thích … lắm (thời quá khứ)','*I wasn’t so keen on* the food in the hotel.','🙁🍽️'),
  K('for my tastes','phrase','/fə maɪ ˈteɪsts/','theo gu của mình (làm lời chê nhẹ hơn)','It’s a nice area, but too developed *for my tastes*.','🎨🙂'),
  K('I liked … most of all','phrase','/aɪ laɪkt … məʊst əv ɔːl/','điều mình thích nhất là …','*I liked* the street food *most of all*.','🥇😍'),
  K('I wish I’d + past participle','phrase','/aɪ wɪʃ aɪd/','giá mà mình đã … (tiếc nuối chuyện quá khứ)','*I wish I’d* taken a warmer jacket.','🧥😬')],
 model:['I liked the atmosphere *most of all*, because the little streets felt like an old film.','I *wasn’t so keen on* Bangkok. It’s big and noisy *for my tastes*.','*I wish* we’d had more time to explore the city.'],
 quiz:[
  Q('Which phrase makes a negative opinion sound softer?',['for my tastes','without a doubt','in the end'],0,'“…for my tastes” cho thấy đây chỉ là quan điểm cá nhân, nghe nhẹ nhàng hơn.'),
  Q('Choose the correct form: “I wish we ___ more time in the city.”',['’d had','had have','would had'],0,'I wish + past perfect (had + V3) để nói tiếc nuối chuyện đã qua.'),
  Q('Which sentence gives a reason?',['It was relaxing but I got bored.','I got bored because each day was pretty similar.','I got bored.'],1,'Câu 2 có “because …”, giải thích vì sao.')],
 say:{p:'What did you like most? What didn’t you like? What would you change? Give reasons.',f:'I liked … most of all because … / I wasn’t so keen on … for my tastes. / I wish I’d …',r:5,
  c:['Có 1 điều thích + lý do (because)','Có 1 điều không thích + lý do','Có 1 câu I wish I’d …'],
  m:'I liked the food most of all, because every dish was fresh and different. I wasn’t so keen on the beach — it was too crowded for my tastes. I wish I’d booked a hotel closer to the sea.'}},

{em:'🧩',short:'Full answer',t:'Putting it all together',goal:'Ghép 4 phần thành một câu trả lời dài, trôi chảy: Where → What → Place → Like / dislike.',
 cards:[
  K('dotted around','phrasal verb','/ˈdɒtɪd əˈraʊnd/','nằm rải rác quanh (một khu vực)','There are small villages *dotted around* the lake.','⚫🏘️'),
  K('isolation','noun','/ˌaɪsəˈleɪʃn/','cảm giác bị tách biệt, cô lập','The emptiness gave me a feeling of *isolation*.','🏔️🧍'),
  K('solitude','noun','/ˈsɒlɪtjuːd/','sự ở một mình yên tĩnh (dễ chịu)','I enjoyed the *solitude* of the long walks.','🌲🧘'),
  K('open and welcoming','adjective phrase','/ˌəʊpən ənd ˈwelkəmɪŋ/','cởi mở, hiếu khách','The local people were so *open and welcoming*.','🤗🏡'),
  K('on the other hand','linking phrase','/ɒn ði ˈʌðə hænd/','mặt khác (đưa ra ý trái ngược)','I loved the beach. *On the other hand*, the town was crowded.','⚖️↔️'),
  K('even though','conjunction','/ˈiːvn ðəʊ/','mặc dù','*Even though* it was summer, the nights were cold.','☀️🥶')],
 model:[],
 quiz:[
  Q('What is a good order for a longer answer?',['Where / who / how long → What you did → Describe the place → Liked / disliked','Disliked → Place → Where → What you did','Describe the place → Where → Liked → What you did'],0,'Làm theo thứ tự 4 phần giúp câu trả lời rõ ràng và dễ nói liền mạch.'),
  Q('“On the other hand” is used to …',['introduce a contrasting idea','add a similar idea','finish your answer'],0,'On the other hand = mặt khác, để chuyển sang ý trái ngược.'),
  Q('Which pair describes being alone in a quiet, peaceful way?',['isolation and solitude','overwhelming and touristy','stunning and cosmopolitan'],0,'Isolation và solitude nói về việc ở một mình, tách biệt, yên tĩnh.')],
 say:{p:'Make a longer answer (5–7 câu): Where / who / how long → What you did → Describe the place → Liked + disliked. Đọc to 2–3 lần cho trôi chảy.',f:'I went to … with … for … Mostly, we … It was … I liked … most of all. On the other hand, I wasn’t so keen on …',r:7,
  c:['Có đủ 4 phần','Có ít nhất 3 tính từ cụ thể','Có từ nối (Then / On the other hand / Even though)','Em đã đọc to ít nhất 2 lần'],
  m:'I went to Da Lat with three classmates for a long weekend. We went hiking around the pine forests, then hung out in cafés and sampled lots of street food. Da Lat is a picturesque, sleepy city with some stunning views, though the centre can be a bit touristy. I liked the food most of all, because it was out of this world. On the other hand, I wasn’t so keen on the weather — it was too cold for my tastes. I wish I’d brought a warmer jacket.'}}
];

/* ----- câu hỏi luyện thêm (mc / multi / điền từ) ----- */
{const X=q=>(q.x=1,q),T=(q,a,e,h)=>X({q,a,e,h:h||'',t:1}),M=(q,o,a,e)=>X({q,o,a,e,m:1}),QQ=(q,o,a,e)=>X(Q(q,o,a,e));
STEPS[0].quiz.push(
 QQ('I went to the French Riviera ______ my family.',['and','with','in','plus'],1,'Go + to + nơi chốn + with + người đi cùng.'),
 T('In American English, you have or take a vacation, but in British English, you go on ______.',['holiday'],'Người Anh nói “go on holiday”.','7 chữ cái'),
 QQ('It was the summer bank holiday, so my husband and I went to Dubrovnik for a ______ weekend.',['big','long','lengthy','extended'],1,'“a long weekend” là cụm cố định.'),
 T('We went to the Algarve ______ a couple of weeks.',['for'],'for + khoảng thời gian.','Giới từ chỉ khoảng thời gian'));
STEPS[1].quiz.push(
 QQ('Which might you do on a “cultural” holiday?',['visit art galleries','sunbathe on the beach','write an essay','go to nightclubs'],0,'Kỳ nghỉ văn hóa: tham quan phòng tranh, bảo tàng, di tích.'),
 T('We did a coach tour of the region’s ancient castles, with a ______ who told great anecdotes about who lived in them.',['guide','tour guide'],'tour guide = hướng dẫn viên.','Người phụ trách tour'),
 M('We went ______ in the mountains. Our longest individual day was 25 kilometres! (Chọn tất cả đáp án đúng)',['trekking','hiking','visiting','walking'],[0,1,3],'go trekking / hiking / walking đều đúng. “go visiting” không dùng cho việc đi bộ đường dài.'),
 T('We spent two weeks just hanging ______ by the pool.',['out'],'hang out = thư giãn, đi chơi.','3 chữ cái'),
 QQ('I like going on active holidays and doing lots of __________ sports.',['acting','active','activity','adventure'],3,'adventure sports = thể thao mạo hiểm.'),
 QQ('We started with one of those _____________ buses that goes round all the main points of interest.',['sightseeing','sitevisiting','siteseeing','sightreading'],0,'sightseeing bus = xe buýt tham quan.'),
 M('After a hard day’s relaxing at the beach, we were ready to hit the _________. (Chọn tất cả đáp án đúng)',['beds','clubs','museums','bars'],[0,1,3],'hit the beds / clubs / bars đều là cách nói thân mật; hit the museums không tự nhiên.'),
 T('I love ______ the local cuisine wherever I go.',['sampling'],'sample = nếm thử nhiều món.','8 chữ cái'));
STEPS[2].quiz.push(
 QQ('We stayed in a lovely little village in the mountains – it was so ___________.',['picturebook','picturesque','pictureful','picturepostcard'],1,'picturesque = đẹp như tranh.'));
STEPS[3].quiz.push(
 T('The best thing was the seafood, which they’d brought in at the harbour right opposite the restaurant. It was out of this ______.',['world'],'out of this world = tuyệt vời.','5 chữ cái'),
 T('It was far too hot for me. I found it quite over________, in fact. (viết 8 chữ cái còn lại, hoặc cả từ)',['whelming','overwhelming'],'overwhelming = quá sức chịu đựng, choáng ngợp.','over + 8 chữ cái'));
STEPS[4].quiz.push(
 QQ('“I wasn’t so _______ on the buses. They were all really uncomfortable.”',['fond','keen','fan','pleased'],1,'I wasn’t so keen on … = mình không thích … lắm.'),
 QQ('“There’s lots going on in New York, but it’s far too busy and noisy for my _________.”',['wants','tastes','flavours','likes'],1,'for my tastes = theo gu của mình.'),
 T('Most of ______, I liked wandering around the antique shops.',['all'],'most of all = điều mình thích nhất.','3 chữ cái'),
 T('I wish we ______ stayed longer.',['had','’d',"'d"],'I wish + had + V3 = tiếc nuối chuyện đã qua.','Trợ động từ, 3 chữ cái'));
}

/* xoay vị trí đáp án để đáp án đúng không luôn nằm ở cùng một chỗ */
STEPS.forEach((x,si)=>(x.quiz||[]).forEach((q,qi)=>{if(!q.o)return;const n=q.o.length,r=(qi*2+si+1)%n;if(!r)return;q.o=q.o.slice(r).concat(q.o.slice(0,r));q.a=Array.isArray(q.a)?q.a.map(j=>(j-r+n)%n):(q.a-r+n)%n}));
/* mỗi bộ thẻ = 1 GS riêng để dùng lại engine Thẻ ghi nhớ / Học / Ghép thẻ / Kiểm tra */
STEPS.forEach((x,j)=>{GS[ID0+j]={cards:x.cards,vocab:x.cards.map(c=>[c.w,c.vi])}});

const chips=()=>STEPS.map((x,i)=>`<button data-spgo="${i}" class="shrink-0 px-3 py-2 rounded-xl border-2 text-sm font-semibold text-left ${i===S.s?'':'border-slate-200 dark:border-slate-600'}" style="${i===S.s?'border-color:var(--u);background:var(--ub);color:var(--ud)':''}"><span class="block text-xs opacity-70">Bước ${i+1}${S.d[i]?' ✅':''}</span>${x.em} ${esc(x.short)}</button>`).join('');
const head=()=>{const n=STEPS.filter((_,i)=>S.d[i]).length,p=Math.round(n/STEPS.length*100);
return `<div class="${C} p-5" style="border:2px solid var(--u)"><p class="text-xs font-bold" style="color:var(--ud)">SKILLS PRACTICE · SPEAKING</p><h2 class="mt-1 text-xl font-bold">🎒 Talking about your vacation</h2><p class="mt-1 text-sm text-slate-600 dark:text-slate-300">Học cách kể về kỳ nghỉ bằng tiếng Anh theo 6 bước nhỏ. Mỗi bước gồm: bộ thẻ 5–6 từ → câu mẫu → quiz 3 câu → nhiệm vụ nói/viết. Học 10 phút mỗi bước là đủ.</p><a href="${LINK}" target="_blank" rel="noopener" class="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white" style="background:var(--u)">▶ Xem bài gốc trên Oxford Online English ↗</a><div class="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden"><div class="h-2 rounded-full" style="width:${p}%;background:var(--u)"></div></div><p class="mt-1 text-xs text-slate-500">${n}/${STEPS.length} bước hoàn thành</p></div><div class="mt-4 flex gap-2 overflow-x-auto pb-1">${chips()}</div>`};
/* Lưu ý âm thanh: trang có MutationObserver tự phát tiếng đúng/sai khi xuất hiện class "correct"/"wrong" ngay sau một cú bấm.
   Vì vậy chỉ câu vừa trả lời (fresh) mới dùng class đó; trạng thái đã lưu dùng class riêng spok/spno để không phát tiếng thừa. */
const qOne=(q,qi,fresh)=>{const st=S.q[S.s+'_'+qi]||{w:[],ok:0,sel:[],v:'',n:0},bad=st.n||st.w.length,C1=fresh?'correct':'spok',W1=fresh?'wrong':'spno';
 const fb=st.ok?`<p class="${fresh?'correct ':''}mt-2 text-sm text-green-700 dark:text-green-400">✅ ${esc(q.e)}</p>`:(bad?`<p class="${fresh?'wrong ':''}mt-2 text-sm text-red-600">❌ Chưa đúng, thử lại nhé.${q.h?' Gợi ý: '+esc(q.h)+'.':''}</p>`:'');
 const hd=`<p class="text-sm font-semibold">${qi+1}. ${esc(q.q)}</p>`;let b;
 if(q.t)b=`<div class="mt-2 flex gap-2"><input data-spti="${qi}" value="${esc(st.v||'')}" ${st.ok?'disabled':''} autocomplete="off" placeholder="Type the missing word" class="flex-1 min-w-0 px-3 py-2 rounded-xl border-2 text-sm bg-transparent ${st.ok?'border-green-500':bad?'border-red-400':'border-slate-300 dark:border-slate-600'}"><button data-sptc="${qi}" ${st.ok?'disabled':''} class="px-4 py-2 rounded-xl text-white text-sm font-semibold ${st.ok?'opacity-50':''}" style="background:var(--u)">Check</button></div>${fb}`;
 else if(q.m)b=`<div class="mt-2 grid gap-2">${q.o.map((o,oi)=>{const on=(st.sel||[]).includes(oi),hit=st.ok&&q.a.includes(oi);return `<button data-spms="${qi}" data-spo="${oi}" ${st.ok?'disabled':''} class="opt text-left px-3 py-2 rounded-xl border-2 text-sm ${hit?C1:on?'border-blue-600':'border-slate-200 dark:border-slate-600'}">${hit?'✅':on?'☑️':'⬜'} ${esc(o)}</button>`}).join('')}</div><button data-spmc="${qi}" ${st.ok?'disabled':''} class="mt-2 px-4 py-2 rounded-xl text-white text-sm font-semibold ${st.ok?'opacity-50':''}" style="background:var(--u)">Check</button>${fb}`;
 else b=`<div class="mt-2 grid gap-2">${q.o.map((o,oi)=>{const cls=st.ok&&oi===q.a?C1:st.w.includes(oi)?W1:'';return `<button data-spq="${qi}" data-spo="${oi}" ${st.ok?'disabled':''} class="opt text-left px-3 py-2 rounded-xl border-2 border-slate-200 dark:border-slate-600 text-sm ${cls}">${esc(o)}</button>`}).join('')}</div>${fb}`;
 return `<div id="spQ${qi}" class="p-3 rounded-xl bg-slate-50 dark:bg-slate-700 mt-3">${hd}${b}</div>`};
const qScore=()=>{const x=STEPS[S.s];return 'Đã đúng '+x.quiz.filter((_,qi)=>(S.q[S.s+'_'+qi]||{}).ok).length+'/'+x.quiz.length};
const qz=()=>STEPS[S.s].quiz.map((q,qi)=>qOne(q,qi,0)).join('')+`<p id="spSc" class="mt-3 text-xs text-slate-500">${qScore()}</p>`;
const rq1=qi=>{const el=document.getElementById('spQ'+qi);if(el)el.outerHTML=qOne(STEPS[S.s].quiz[qi],qi,1);const sc=document.getElementById('spSc');if(sc)sc.textContent=qScore()};
const asm=()=>STEPS.slice(0,5).map((_,j)=>(S.t[j]||'').trim()).filter(Boolean).join(' ');
const say=()=>{const x=STEPS[S.s],k=S.s,v=S.t[k]||'';
 const ck=x.say.c.map((t,j)=>{const on=S.c[k+'_'+j];return `<li><button data-spc="${j}" class="flex items-start gap-2 text-left text-sm"><span class="mt-0.5">${on?'☑️':'⬜'}</span><span>${esc(t)}</span></button></li>`}).join('');
 const extra=k===5?`<div class="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm"><p class="font-semibold">📎 Các câu em đã viết ở bước 1–5</p><p class="mt-1 text-slate-600 dark:text-slate-300">${asm()?esc(asm()):'Chưa có. Hãy quay lại làm nhiệm vụ ở các bước trước, rồi ghép lại ở đây.'}</p>${asm()?'<button data-spfill="1" class="mt-2 px-3 py-1.5 rounded-lg border-2 text-xs font-semibold" style="border-color:var(--u)">Chép vào ô bên dưới để chỉnh sửa</button>':''}</div>`:'';
 return `<p class="text-sm font-semibold">${esc(x.say.p)}</p><p class="mt-1 text-xs text-slate-500">Khung gợi ý: <i>${esc(x.say.f)}</i></p>${extra}<textarea data-spw="${k}" rows="${x.say.r}" placeholder="Viết câu trả lời của em ở đây…" class="mt-3 w-full p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm">${esc(v)}</textarea><p class="mt-1 text-xs text-slate-500"><span id="spWc">${wc(v)}</span> từ · Viết xong hãy đọc to câu trả lời của em.</p><ul class="mt-3 space-y-2">${ck}</ul><button data-spm="1" class="mt-3 px-3 py-2 rounded-xl border-2 text-sm font-semibold" style="border-color:var(--u)">${S.m[k]?'Ẩn':'Xem'} câu trả lời mẫu</button>${S.m[k]?`<div class="mt-2 p-3 rounded-xl text-sm" style="background:var(--ub)">${hi(x.say.m)} <button data-spsay="${esc(x.say.m)}" class="ml-1 text-xs underline">🔊 Nghe</button></div>`:''}`};
const nav=()=>{const i=S.s;return `<button data-spgo="${Math.max(0,i-1)}" ${i?'':'disabled'} class="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 ${i?'':'opacity-40'}">← Bước trước</button><button data-spdone="1" class="px-5 py-3 rounded-xl text-white font-semibold" style="background:${S.d[i]?'#16a34a':'var(--u)'}">${S.d[i]?'✅ Đã hoàn thành bước này':'Hoàn thành bước '+(i+1)}</button><button data-spgo="${Math.min(STEPS.length-1,i+1)}" ${i<STEPS.length-1?'':'disabled'} class="px-4 py-3 rounded-xl text-white ${i<STEPS.length-1?'':'opacity-40'}" style="background:var(--u)">Bước tiếp →</button>`};
const body=()=>{const x=STEPS[S.s],i=S.s;
 const mdl=x.model.length?`<div class="${C} p-5 mt-4"><h4 class="font-bold">② Từ được dùng như thế nào?</h4><ul class="mt-3 space-y-2">${x.model.map(m=>`<li class="flex items-start gap-2 p-3 rounded-xl text-sm" style="background:var(--ub)"><span class="flex-1">${hi(m)}</span><button data-spsay="${esc(plain(m))}" class="shrink-0 text-xs underline">🔊</button></li>`).join('')}</ul></div>`:`<div class="${C} p-5 mt-4"><h4 class="font-bold">② Cấu trúc câu trả lời dài</h4><ol class="mt-3 space-y-2 text-sm">${['Where / who with / how long?','What did you do?','What was the place like?','What did you like and dislike? Why?'].map((t,j)=>`<li class="flex items-start gap-3 p-3 rounded-xl" style="background:var(--ub)"><b style="color:var(--ud)">${j+1}</b><span>${t}</span></li>`).join('')}</ol><p class="mt-3 text-xs text-slate-500">Dùng lại các câu em đã viết ở bước 1–5, nối bằng Then / On the other hand / Even though.</p></div>`;
 return `<div class="${C} p-5 mt-4"><p class="text-xs font-bold" style="color:var(--ud)">BƯỚC ${i+1}/${STEPS.length}</p><h3 class="text-lg font-bold">${x.em} ${esc(x.t)}</h3><p class="mt-1 text-sm text-slate-600 dark:text-slate-300">🎯 ${esc(x.goal)}</p></div><div class="${C} p-5 mt-4"><h4 class="font-bold">① Học ${x.cards.length} thẻ</h4><p class="mt-1 text-xs text-slate-500">Lật thẻ → Học → Ghép thẻ → Kiểm tra. Chỉ ${x.cards.length} thẻ nên em học xong trong vài phút.</p><div id="spFc"></div></div>${mdl}<div class="${C} p-5 mt-4"><h4 class="font-bold">③ Quick check</h4><div id="spQz" class="mt-3">${qz()}</div></div><div class="${C} p-5 mt-4"><h4 class="font-bold">④ Your turn</h4><div id="spSay" class="mt-2">${say()}</div></div><div id="spNav" class="mt-5 flex flex-wrap gap-3 justify-between">${nav()}</div>`};
const section=()=>`<section data-p="sp" class="hidden"><div id="spRoot"><div id="spHead">${head()}</div><div id="spBody">${body()}</div></div></section>`;

/* ----- engine thẻ dùng chung (cùng cách lvBox của các lesson khác) ----- */
let MOUNT=false;
const reset=()=>{try{fcStop();mtStop()}catch(e){}VQ.mt=null;VQ.lopen=0;VQ.sort='orig';VQ.ln={on:0,set:0,adv:0,mode:'learn',q:null,done:0,last:-1,seen:{},tick:0,stat:{ok:0,bad:0}};VQ.ts={ph:'setup',cfg:{n:10,ans:'both',tf:0,mc:1,mt:0,wr:0},qs:[],resp:{},res:null};FC.ord=null;FC.u=-1;FC.i=0;FC.flip=0;FC.done=0;FC.mode='all'};
const inner=id=>{const d=gsGet(id),TB=[['cards','🗂️','Thẻ ghi nhớ'],['learn','🧠','Học'],['match','🧩','Ghép thẻ'],['test','📝','Kiểm tra']];VQ.u=id;
 return `<div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">${TB.map(t=>`<button data-spt="${t[0]}" class="px-2 py-3 rounded-xl border-2 text-sm font-semibold ${FC.tab===t[0]?'border-blue-600 bg-blue-50 dark:bg-slate-700':'border-slate-200 dark:border-slate-600'}">${t[1]} ${t[2]}</button>`).join('')}</div><div class="mt-4">${FC.tab==='cards'?`<div id="fcBox">${fcInner(id,d)}</div>`:`<div id="vqBox">${vqPanel(id,d)}</div>`}</div><div id="vqList" class="mt-8">${vqList(id,d)}</div>`};
const mountFc=()=>{const box=document.getElementById('spFc');if(!box)return;const id=ID0+S.s;if(VQ.u!==id||FC.u!==id)reset();FC.tab='cards';box.innerHTML=inner(id)};
const mountSp=()=>{if(!document.getElementById('spRoot'))return;const In=document.getElementById('lvIn');if(In&&!('sp' in In.dataset)){In.dataset.sp=In.innerHTML;In.innerHTML=''}MOUNT=true;mountFc()};
const unmountSp=()=>{if(!MOUNT)return;MOUNT=false;try{speechSynthesis.cancel()}catch(_){}try{fcStop();mtStop()}catch(e){}VQ.mt=null;const box=document.getElementById('spFc');if(box)box.innerHTML='';const In=document.getElementById('lvIn');if(In&&('sp' in In.dataset)){In.innerHTML=In.dataset.sp;delete In.dataset.sp;reset();const b=In.querySelector('[data-lvt="cards"]');if(b)b.click()}};
const rHead=()=>{const e=document.getElementById('spHead');if(e)e.innerHTML=head()};
const rBody=()=>{const e=document.getElementById('spBody');if(!e)return;try{speechSynthesis.cancel()}catch(_){}try{fcStop();mtStop()}catch(_){}VQ.mt=null;e.innerHTML=body();if(MOUNT)mountFc()};

/* ----- chèn thẻ thứ 3 vào lesson 3.1 ----- */
const _lesson=window.lesson||lesson;
window.lesson=function(i,l){const h=_lesson.apply(this,arguments);MOUNT=false;if(i!==2||l!==0||typeof h!=='string')return h;
 const btn='<button data-act="tab" data-t="sp" class="tabbtn whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium border border-slate-300 dark:border-slate-600">🎯 Skills practice</button>';
 let o=h.replace('📝 Work book</button>','📝 Work book</button>'+btn);
 o=o.replace('<section data-p="wb" class="hidden">',section()+'<section data-p="wb" class="hidden">');
 if(/\/sp$/.test(location.hash))setTimeout(()=>{const b=document.querySelector('[data-act="tab"][data-t="sp"]');if(b)b.click()},0);
 return o};

/* ----- sự kiện ----- */
document.addEventListener('click',e=>{const T=e.target.closest&&e.target.closest('[data-act="tab"]');if(T){if(T.dataset.t==='sp')mountSp();else unmountSp();return}
 const root=document.getElementById('spRoot');if(!root||!root.contains(e.target))return;
 const g=e.target.closest('[data-spgo]');
 if(g){if(g.disabled)return;S.s=+g.dataset.spgo;sv();rHead();rBody();const r=document.getElementById('spRoot');if(r)r.scrollIntoView({behavior:'smooth',block:'start'});return}
 const t=e.target.closest('[data-spt]');
 if(t){const box=document.getElementById('spFc');if(!box)return;try{fcStop();mtStop()}catch(_){}VQ.mt=null;FC.tab=t.dataset.spt;box.innerHTML=inner(ID0+S.s);return}
 const gst=qi=>{const k=S.s+'_'+qi;return S.q[k]=S.q[k]||{w:[],ok:0,sel:[],v:'',n:0}};
 const q=e.target.closest('[data-spq]');
 if(q){if(q.disabled)return;const qi=+q.dataset.spq,o=+q.dataset.spo,st=gst(qi),Z=STEPS[S.s].quiz[qi];if(o===Z.a)st.ok=1;else{if(!st.w.includes(o))st.w.push(o);st.n=1}sv();rq1(qi);return}
 const ms=e.target.closest('[data-spms]');
 if(ms){if(ms.disabled)return;const qi=+ms.dataset.spms,st=gst(qi),o=+ms.dataset.spo,j=st.sel.indexOf(o);if(j<0)st.sel.push(o);else st.sel.splice(j,1);sv();const on=j<0;ms.textContent=(on?'☑️ ':'⬜ ')+STEPS[S.s].quiz[qi].o[o];ms.classList.toggle('border-blue-600',on);ms.classList.toggle('border-slate-200',!on);return}
 const mc=e.target.closest('[data-spmc]');
 if(mc){if(mc.disabled)return;const qi=+mc.dataset.spmc,st=gst(qi),Z=STEPS[S.s].quiz[qi];if([...Z.a].sort().join()===[...st.sel].sort().join())st.ok=1;else st.n=1;sv();rq1(qi);return}
 const tc=e.target.closest('[data-sptc]');
 if(tc){if(tc.disabled)return;const qi=+tc.dataset.sptc,st=gst(qi),Z=STEPS[S.s].quiz[qi],inp=document.querySelector('[data-spti="'+qi+'"]');if(inp)st.v=inp.value;const v=String(st.v||'').trim().toLowerCase().replace(/[.!?]$/,'');if(Z.a.includes(v))st.ok=1;else st.n=1;sv();rq1(qi);return}
 const m=e.target.closest('[data-spm]');
 if(m){S.m[S.s]=S.m[S.s]?0:1;sv();document.getElementById('spSay').innerHTML=say();return}
 const c=e.target.closest('[data-spc]');
 if(c){const k=S.s+'_'+c.dataset.spc;S.c[k]=S.c[k]?0:1;sv();document.getElementById('spSay').innerHTML=say();return}
 const f=e.target.closest('[data-spfill]');
 if(f){S.t[5]=asm();sv();document.getElementById('spSay').innerHTML=say();return}
 const d=e.target.closest('[data-spdone]');
 if(d){S.d[S.s]=S.d[S.s]?0:1;sv();if(S.d[S.s])snd('correct');rHead();document.getElementById('spNav').innerHTML=nav();return}
 const s=e.target.closest('[data-spsay]');
 if(s){speak(s.dataset.spsay);return}
});
document.addEventListener('input',e=>{const ti=e.target.closest&&e.target.closest('[data-spti]');if(ti){const k=S.s+'_'+ti.dataset.spti;const st=S.q[k]=S.q[k]||{w:[],ok:0,sel:[],v:'',n:0};st.v=ti.value;sv();return}const w=e.target.closest&&e.target.closest('[data-spw]');if(!w)return;S.t[w.dataset.spw]=w.value;sv();const c=document.getElementById('spWc');if(c)c.textContent=wc(w.value)});

/* mở lại lesson 3.1 nếu đang đứng ở đó */
if(/^#\/lesson\/2\/0/.test(location.hash))route();
})();

document.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const t=e.target.closest&&e.target.closest('[data-spti]');if(!t)return;e.preventDefault();const b=document.querySelector('[data-sptc="'+t.dataset.spti+'"]');if(b)b.click()});

