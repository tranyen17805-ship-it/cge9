/* ===== vins.lms · Unit 2 · Well-being ===== */
const mk=(arr)=>arr.map(r=>({q:r[0],o:r[1],a:r[2],e:r[3]}));
const W22=['bacteria','cell','crave','diabetes','disease','immune system','infection','recovery','restore','serotonin','steady','suppress','susceptible','virus'];
Object.assign(LMD,{
v22:{tasks:[{k:'sel',h:'Match each definition with the correct word.',o:W22,items:[
 ['the body’s cells & organs that fight illness & diseases','immune system'],['become well again after an illness','recovery'],['the simplest and smallest forms of life, found everywhere and is the cause of many diseases','bacteria'],['not changing and not interrupted','steady'],['a condition that bacteria & viruses enter the body','infection'],['return something to a good condition','restore'],['the smallest basic unit of a plant or animal','cell'],['likely to be affected by something','susceptible'],['an extremely small living thing causes illness for people, animals, plants, …','virus'],['the chemical that helps your moods & emotions in balance','serotonin'],['a disease that body can’t control the amount of sugar in the blood','diabetes'],['stop something working properly','suppress'],['really want something','crave'],['illness of people, animals, plants, … caused by infection / a failure of health','disease']].map((r,i)=>({q:(i+1)+'. '+r[0],a:W22.indexOf(r[1])}))}]},
c22a:{tasks:[{k:'mcq',h:'Choose the correct answer.',items:mk([
 ['1. My ______ written essay got a D grade.',['poorly','poor','more poorly','most poorly'],0],
 ['2. Some experts believe that smoking is ______ than drinking.',['dangerous','more dangerous','most dangerously','more dangerously'],1],
 ['3. Does this plan seem ______ probable than the other?',['realistic','realistically','more realistic','more realistically'],3],
 ['4. The driver of the van reacted ______ to the situation.',['angry','angrily','more angrily','most angrily'],1],
 ['5. Her test scores were the ______ I had ever seen.',['impressive','most impressive','more impressively','most impressively'],1],
 ['6. Of all the applicants, my sister spoke ______.',['intelligent','more intelligently','most intelligently','intelligently'],2],
 ['7. She behaved ______ than anyone else.',['shockingly','shocking','most shockingly','more shockingly'],3],
 ['8. George’s ______ puppy greeted everyone.',['friendly','friendlier','friendliest','more friendlier'],0],
 ['9. Of the two players, Mary is the ______.',['dedicated','most dedicated','more dedicated','dedicate'],2],
 ['10. Martha is, without a doubt, the ______ person I know.',['creative','most creatively','creatively','most creative'],3],
 ['11. Tom practiced his piano lessons ______ of all the students.',['most faithfully','more faithfully','faithfully','faithful'],0],
 ['12. My graduation day will be the ______ day of my life.',['happy','happily','more happy','happiest'],3],
 ['13. Bob is the ______ of all the football players.',['thin','thinner','thinly','thinnest'],3],
 ['14. The child behaved ______ at the party.',['wilder','wildly','more wilder','more wildly'],1],
 ['15. The patient seemed ______ than the doctor.',['healthy','healthier','more healthier','healthiest'],1],
 ['16. We ______ considered the man’s questions.',['careful','most carefully','more carefully','carefully'],3],
 ['17. He is an example of a ______ happy individual.',['perfect','perfectly','more perfect','most perfectly'],1],
 ['18. Barbara probably has the ______ manners of all the kids.',['nice','nicer','more nicely','nicest'],3],
 ['19. New York is ______ than my home town.',['largely','largest','larger','more largely'],2],
 ['20. Paris is one of the three ______ visited cities in Europe.',['frequently','frequent','more frequently','most frequently'],3],
 ['21. Dad gave the ______ reasons I’d ever heard.',['convincing','convincingly','more convincing','most convincing'],3],
 ['22. She ______ ran out of the room.',['swift','more swiftly','swiftly','most swiftly'],2],
 ['23. Of all the books on order, the ______ ordered history texts arrived first.',['most recently','recently','more recently','recent'],0],
 ['24. Dad seemed ______ happy today.',['unusual','unusually','more unusually','most unusually'],1],
 ['25. Sam played ______ than I did.',['more roughly','most roughly','rough','roughly'],0]])}]},
c22b:{tasks:[{k:'gap',h:'Rewrite the sentences without changing the meaning of the original sentences. Write between 2 and 5 words.',t:`1. This book is more interesting than that one.<br>⇒ That book is {1} this one.<br><br>2. She is taller than her brother.<br>⇒ Her brother is {2} she is.<br><br>3. This car is faster than the old one.<br>⇒ The old car is {3} this one.<br><br>4. Today is hotter than yesterday.<br>⇒ Yesterday was {4} than today.<br><br>5. He is the most dedicated employee in the company.<br>⇒ No other employee in the company is {5} he is.<br><br>6. She earns three times as much as her brother.<br>⇒ Her brother earns {6} she does.<br><br>7. This movie is more exciting than the book.<br>⇒ The book is {7} the movie.<br><br>8. He is richer than his neighbor.<br>⇒ His neighbor is {8} he is.<br><br>9. This problem is more complicated than the last one.<br>⇒ The last problem was {9} this one.<br><br>10. She is the best student in the class.<br>⇒ No other student in the class is {10} her.`,
 a:[['less interesting than','not as interesting as'],['shorter than','not as tall as'],['slower than','not as fast as'],['colder','cooler','less hot'],['more dedicated than','as dedicated as'],['one-third as much as','one third as much as','a third of what'],['less exciting than','not as exciting as'],['poorer than','not as rich as'],['less complicated than','not as complicated as','easier than'],['better than','as good as']]}]},
u24a:{tasks:[
 {k:'mcq',h:'Question 1',items:mk([['1. She didn’t attend the meeting. She _______ the email with the invitation.',['must have missed','must missed','should have missed','could miss'],0]])},
 {k:'gap',h:'Question 2',t:`2. They didn’t hear the alarm. They might have {1} (sleep) through it.`,a:[['slept']]},
 {k:'mcq',h:'Questions 3–10',items:[
  {q:'3. Select all the possible ways to complete the sentence: The door was open when I arrived. Someone ________ it open.',o:['could have left','should have left','must have left'],a:[0,2],m:1,e:'Suy đoán trong quá khứ: could/must have + V3. “should have” là lời trách, không hợp ở đây.'},
  {q:'4. He didn’t study for the exam, so he __________ failed.',o:['might have','must have','could have','can have'],a:1},
  {q:'5. I can’t find my phone anywhere. I must have __________ (leave) it in the car.',o:['left','been left','leave','been leaving'],a:0},
  {q:'6. Last weekend, they __________ (go) to the beach and had a great time.',o:['went','gone','were gone','go'],a:0},
  {q:'7. Which of the following are correct sentences? (Select all that apply)',o:['He must go to the doctor yesterday.','She should have called me last night.','They could have gone home earlier.','I must have left my bag in the car.'],a:[1,2,3],m:1},
  {q:'8. We __________ (finish) the project by the time the boss arrived.',o:['have finished','had finished','have been finished','had been finished','finished'],a:1},
  {q:'9. You __________ (visit) Paris if you ever get the chance.',o:['can','might have','could','should'],a:3},
  {q:'10. If you want to pass the test, you should __________ (study) harder.',o:['studied','study','studying','to study'],a:1}]},
 {k:'html',html:`<h4 class="font-bold">Question 11 · Listening (8 điểm)</h4><p class="mt-1">Listen to four people talking about things they did and now regret. For questions 1–8, choose the correct answer.</p><a href="https://test-english.com/listening/b1-b2/i-should-have-b2-english-listening-test/" target="_blank" rel="noopener" class="inline-block mt-2 px-4 py-2 rounded-xl bg-orange-400 text-white text-sm font-semibold">🎧 Mở bài nghe</a>`},
 {k:'sel',h:'Listening · choose A, B or C',note:'⚠️ Chưa có đáp án cho bài nghe này.',o:['A','B','C'],items:[
  {q:'1. Which of these things did Emma do? A. Left home early · B. Take a train · C. Made a good impression with her interviewer'},
  {q:'2. Which of these things did Emma NOT do? A. Book a taxi · B. Pack her things in the morning · C. Reschedule the interview'},
  {q:'3. Which of these things did Tyler do? A. Listen to his friend · B. Raise his voice · C. Take a step back'},
  {q:'4. Which of these things did Tyler NOT do? A. Misunderstand his friend · B. Have patience · C. Apologise several times'},
  {q:'5. Which of these things did James do? A. See that her colleague was struggling · B. Ask his colleague if she needed support · C. Learn something from helping her'},
  {q:'6. Which of these things did James NOT do? A. Ignore his colleague · B. Think someone would help her · C. Speak to her'},
  {q:'7. Which of these things did Maya do? A. Stay home · B. Prioritise her family · C. Go there for a couple of hours'},
  {q:'8. Which of these things did Maya NOT do? A. Get some rest · B. Have regrets · C. Make time for the event'}]}]},
k25:{tasks:[{k:'mcq',h:'2.5 Keep a cool head – Comparisons with intensifiers. Choose the best answer.',note:'⚠️ Bài đọc gốc chưa được nhập; đáp án được suy ra theo ngữ pháp và ngữ cảnh, bạn kiểm tra lại giúp.',items:mk([
 ['1. According to the reading, gentle parenting focuses ________ on empathy and respect than traditional parenting.',['slightly more','equally','much more','less'],2],
 ['2. Compared with harsh punishment, calm conversations are presented as ________ effective in helping children develop emotional self-control.',['much more','far less','no more','slightly less'],0],
 ['3. Gentle parenting requires ________ patience from parents, especially in stressful situations.',['considerably more','a little less','roughly the same amount','far less'],0],
 ['4. Gentle parenting requires ________ patience from parents, especially in stressful situations.',['roughly the same amount','considerably more','a little less','far less'],1],
 ['5. According to the reading, a strong parent-child relationship can be ________ more important for emotional development than simply controlling children’s behaviour.',['considerably','somewhat','much','a little'],0]])}]},
l26:{link:'https://engexam.info/fce-listening-practice-tests/fce-listening-practice-test-9/3/',tasks:[
 {k:'html',html:`<h4 class="font-bold">2.6a · Listening Practice</h4><p class="mt-2">You will hear five short extracts in which people are talking about happiness. For speakers 1–5, choose from the list (A–H) what each person says happiness means to them. Use the letters only once. There are three extra letters which you do not need to use.</p><ul class="mt-2 space-y-1"><li><b>A</b> – Having a happy personality allows you to cope effectively with problems.</li><li><b>B</b> – Happiness comes from having someone special to share your thoughts with.</li><li><b>C</b> – Happiness is all about the experience of overcoming problems.</li><li><b>D</b> – Happiness is a short escape from everyday routine.</li><li><b>E</b> – True happiness lies in making others happy.</li><li><b>F</b> – Older people are less happy than younger ones.</li><li><b>G</b> – Happiness is being thankful for what you have.</li><li><b>H</b> – Happiness comes from achieving your goals.</li></ul>`},
 {k:'sel',h:'Speakers 1–5',note:'⚠️ Chưa có đáp án cho bài nghe này.',o:['A','B','C','D','E','F','G','H'],items:[{q:'Speaker 1'},{q:'Speaker 2'},{q:'Speaker 3'},{q:'Speaker 4'},{q:'Speaker 5'}]}]},
w27:{tasks:[{k:'html',html:`<h4 class="font-bold">Lesson 2.7 · Improve your writing</h4><p class="mt-2">In this lesson, you will practise writing a descriptive paragraph. Descriptive writing helps readers imagine the picture clearly.</p>
 <h5 class="mt-4 font-semibold">When describing an image, remember to:</h5><ul class="mt-1 list-disc pl-5 space-y-1"><li>Give a summary of what you see.</li><li>Talk about where things are in the picture.</li><li>Add details (colours, shapes, actions, atmosphere).</li><li>Speculate about what’s happening in the picture.</li><li>Speculate about the context of the picture.</li><li>Give your opinion about it.</li></ul>
 <h5 class="mt-4 font-semibold">Language to use</h5><ul class="mt-1 list-disc pl-5 space-y-1"><li>Part of speech: adjectives and strong verbs.</li><li>Tenses: present simple, present continuous, present perfect, past perfect, and future tense as needed.</li></ul>
 <h5 class="mt-4 font-semibold">If something isn’t clear, use expressions like:</h5><ul class="mt-1 list-disc pl-5 space-y-1"><li>It looks like…</li><li>It might be…</li><li>He could be …ing</li><li>Maybe it’s a…</li></ul>`},
 {k:'write',h:'✍️ Your turn – describe a picture in one paragraph',checks:[['Where things are','on the (left|right)|in the (background|foreground|middle|centre|center)|behind|next to|in front of|at the (top|bottom)'],['Details (colour/atmosphere)','red|blue|green|yellow|white|black|dark|bright|colou?r|atmosphere|warm|cold'],['Speculation','it looks like|might be|could be|maybe|perhaps|seems to'],['Opinion','i think|in my opinion|i like|i believe|i find']]}]},
p28:{tasks:[{k:'html',html:`<h4 class="font-bold">Lesson 2.8 · Project challenge</h4><p class="mt-2">In this project, you will take part in a formal debate. Each team will be assigned a motion (a statement to argue for or against). Your goal is to prepare clear arguments, support them with facts, and use debate language confidently.</p>
 <h5 class="mt-4 font-semibold">Steps to prepare</h5><ol class="mt-1 list-decimal pl-5 space-y-2">
 <li><b>Know your role:</b> you will either argue For (Affirmative) or Against (Negative).</li>
 <li><b>Plan your arguments</b> using the Classroom Debate Planner: write at least 2 arguments for your side; collect supporting facts or examples; prepare your opening statement and closing argument.</li>
 <li><b>Work as a team:</b> decide who will present each part (Opening, Rebuttal, Closing).</li>
 <li><b>Use debate vocabulary:</b><ul class="mt-1 list-disc pl-5 italic"><li>First of all, I would like to say…</li><li>We disagree because…</li><li>Our opponents claim that…, but…</li><li>In summary, we want to point out…</li></ul></li>
 <li><b>Practise your delivery:</b> speak clearly, use connectives, and listen carefully to your opponents.</li></ol>
 <p class="mt-3">👉 During the debate, your team will present arguments, respond to the other side, and give a strong closing.</p>`}]},
p210:{tasks:[{k:'html',html:`<h4 class="font-bold">Lesson 2.10 · Unit review</h4><p class="mt-2">In this unit, you have explored the topic of health and happiness and raised your awareness of the different factors that affect our well-being. You have practised the listening skills and recognise inconsistencies in an argument. You have also worked on your reading and speaking fluency. You have watched a video and listened for specific information. You have read travel blogs and practised understanding the main ideas in these texts. In addition, you have been given an opportunity to explore the layout and other features of leaflets and produced your own leaflet giving safety tips to travellers. You have interviewed your peers about fitness using present perfect simple and continuous forms.</p>
 <h5 class="mt-4 font-semibold">💠 Lesson objective</h5><p class="mt-1">In this lesson, we can review and reinforce the knowledge and skills learned in the unit.</p>
 <h5 class="mt-3 font-semibold">I. Listening</h5><ol class="list-decimal pl-5"><li>Learners can understand specific information and details of a short talk about aspects of well-being.</li><li>Learners can recognise the opinions of speakers in talks about aspects of well-being.</li></ol>
 <h5 class="mt-3 font-semibold">II. Reading</h5><ol class="list-decimal pl-5"><li>Learners can recognise the opinions of the writers in short texts about different aspects of well-being.</li><li>Learners can distinguish between facts and opinions in a text about well-being.</li></ol>
 <h5 class="mt-3 font-semibold">III. Use of English</h5><ol class="list-decimal pl-5"><li>Comparatives</li><li>Past modal verbs</li><li>Abstract nouns</li><li>Connectives</li><li>Vocabulary</li></ol>`}]}
});
