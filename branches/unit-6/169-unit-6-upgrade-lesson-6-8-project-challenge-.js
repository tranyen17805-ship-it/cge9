/* ===== UNIT 6 UPGRADE · Lesson 6.8 Project challenge (nguồn: Student’s Book pp.136–137) + mission Workbook p.103 (Robinson Crusoe) ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const calc=m=>{m.mx=m.steps.reduce((a,s)=>a+(s.t==="final"?(s.px||0):s.items.length*(s.x||0)),0)};
const after=(m,name,steps)=>{const i=m.steps.findIndex(s=>s.n===name);m.steps.splice(i<0?m.steps.length-1:i+1,0,...steps);calc(m)};
const before=(m,type,steps)=>{let i=-1;m.steps.forEach((s,k)=>{if(s.t===type)i=k});m.steps.splice(i<0?m.steps.length:i,0,...steps);calc(m)};

/* ---------- 6.8 · từ vựng (7 → 16, có ví dụ) ---------- */
LBC["5.7"].vocab=[
["in confidence","một cách bí mật, tin tưởng","phr","If someone tells you something in confidence, should you always keep their secret?"],
["zero tolerance","không khoan nhượng","n","Our school has a ‘zero tolerance’ policy on cyber-bullying."],
["cyber-bullying","bắt nạt trên mạng","n","She was a victim of cyber-bullying."],
["statement","bản tường trình, lời khai","n","Write the statement that the girl gave to the police."],
["chronological order","theo trình tự thời gian","n","Tell the story in chronological order."],
["fact","sự thật","n","Only give facts, not opinions."],
["opinion","ý kiến cá nhân","n","‘I think she was brave’ is an opinion."],
["podcast","chương trình thu âm (podcast)","n","You are going to record a conversation for a podcast."],
["social responsibility","trách nhiệm xã hội","n","The podcast is about social responsibility and citizenship."],
["citizenship","quyền và nghĩa vụ công dân","n","Citizenship means the rights and responsibilities of a citizen."],
["social media","mạng xã hội","n","A classmate put false information about her on social media."],
["report an incident","báo cáo một sự việc","v","She should report the incident to a member of staff."],
["member of staff","nhân viên, giáo viên của trường","n","Report it to a member of staff."],
["hesitate","ngập ngừng, do dự","v","It doesn’t matter if you hesitate or make mistakes."],
["draft","bản nháp","n","Ask another student to read your first draft."],
["peer","bạn cùng lứa, bạn học","n","A peer can comment on your draft."]
];

/* ---------- 6.8 Learner’s Book mission (11 → 18 bước) ---------- */
after(MX["5.7"],"Project 1 · Read the dilemma",[
{i:"🧩",n:"Words in the project",t:"mcq",x:2,ctx:"Choose the best meaning of the words in Projects 1 and 2 (Student’s Book pp. 136–137).",items:[
 M("zero tolerance",["not accepting a behaviour at all","very small","a type of punishment"],0,"zero = none.","no tolerance"),
 M("in confidence",["secretly, trusting someone","in a loud voice","in public"],0,"If someone tells you something in confidence…","secretly"),
 M("hesitate",["pause because you are not sure","speak very fast","stop the recording"],0,"It doesn’t matter if you hesitate.","pause"),
 M("cyber-bullying",["bullying that happens online","bullying in the playground","a school rule"],0,"cyber = online.","online bullying"),
 M("chronological order",["in the order that events happened","in alphabetical order","from the most to least important"],0,"Describe the events in the order in which they occurred.","time order"),
 M("first draft",["the first version of a piece of writing","the final copy","a type of exam"],0,"Then ask another student to comment.","first version")]}
]);
after(MX["5.7"],"Podcast planner",[
{i:"⏮️",n:"If only … might have …",t:"mcq",x:3,ctx:"The dilemma uses a third conditional: “If only I had mentioned it to a teacher at school, we might have been able to help her.”",items:[
 M("If only I ___ mentioned it to a teacher!",["had","would","have"],0,"if only + had + V3.","had mentioned"),
 M("We ___ been able to help her.",["might have","might","had"],0,"might have + V3.","might have"),
 M("Which sentence shows regret?",["If only I had told someone.","I will tell someone.","I tell someone."],0,"past perfect.","If only I had told someone."),
 M("What would you have done? Choose a correct answer.",["I would have reported it to a member of staff.","I would report it yesterday.","I would had reported it."],0,"would have + V3.","would have reported")]}
]);
after(MX["5.7"],"Speaking toolkit",[
{i:"💬",n:"Discussion phrases",t:"bucket",x:2,h:"💬 SORT THE PHRASES from the Speaking tip and the project box. What does each phrase do?",hint:"Agree · acknowledge another view · disagree politely · correct yourself or check.",lab:["🙂 AGREE","🤔 ACKNOWLEDGE","↔️ DISAGREE POLITELY","🛠️ CORRECT OR CHECK"],items:[["I agree with you about …",0],["I think you’re right …",0],["I see your point …",1],["That’s a good point …",1],["I can see what you mean but …",2],["What I meant to say was …",3],["Did you mean to say …?",3]]},
{i:"🔎",n:"Podcast check",t:"chk",x:5,items:[0],h:"🔎 READY TO RECORD? Tick each point before you record.",list:["Everyone knows when they will speak.","I have at least one idea about what I would have done.","I have a polite way to disagree.","I will respond to what other people say.","I know how to correct myself if I make a mistake."]}
]);
after(MX["5.7"],"Evidence checklist",[
{i:"⏱️",n:"Time order words",t:"mcq",x:2,ctx:"Extra practice (not from the book). Choose the best word to show the order of events.",items:[
 M("I woke up at around midnight. ___, I smelled smoke.",["Then","Because","Although"],0,"Next event.","Then"),
 M("I woke my parents. ___, I carried my sister downstairs.",["After that","Although","If"],0,"Next event.","After that"),
 M("We all got out of the house. ___, we were all unhurt.",["Finally","Firstly","In the beginning"],0,"Last event.","Finally"),
 M("___ I smelled smoke, I woke my parents.",["As soon as","Although","Unless"],0,"As soon as = immediately after.","As soon as")]},
{i:"🗣️",n:"Reporting words accurately",t:"mcq",x:3,ctx:"If you heard anybody say anything, report their words as accurately as possible.",items:[
 M("You heard a neighbour shout “Fire!”. Which is best?",["A neighbour shouted, “Fire!”","A neighbour probably shouted something.","I think the neighbour was scared."],0,"Exact words, no guess.","A neighbour shouted, “Fire!”"),
 M("Which sentence reports what someone said clearly?",["My dad said, “We must leave now.”","My dad said something about leaving.","My dad was very brave."],0,"Clear and factual.","My dad said, “We must leave now.”"),
 M("Which sentence should NOT be in the statement?",["I think the fire was caused by a candle.","I smelled smoke.","I woke my parents."],0,"If you’re not sure, don’t say it.","the guess about the candle")]}
]);
before(MX["5.7"],"final",[
{i:"🔎",n:"Statement check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR STATEMENT before the final reflection.",list:["I wrote in the first person (I / my).","The events are in chronological order.","I only gave facts, not opinions.","I did not write anything I am not sure about.","Another student read my first draft and commented."]}
]);

/* ---------- Mission Workbook p.103 · Robinson Crusoe (6 → 14 bước) ---------- */
after(MX["w5.7"],"Meet the two castaways",[
{i:"🔎",n:"Facts check",t:"mcq",x:2,ctx:"Read the information in Workbook p. 103 again.",items:[
 M("Who wrote Robinson Crusoe?",["Daniel Defoe","Alexander Selkirk","Rutger Bregman"],0,"A British novelist.","Daniel Defoe"),
 M("In what style is the book written?",["Like a diary","Like a newspaper","Like a poem"],0,"The hero gives an account…","like a diary"),
 M("Why did people first think it was a true story?",["The book was published with Robinson Crusoe’s name as the author.","It had real photographs.","It was in a newspaper."],0,"At first…","Crusoe’s name was on the book"),
 M("What happened to the other sailors on Crusoe’s ship?",["They drowned.","They were rescued.","They built a boat."],0,"His ship was destroyed in a storm.","They drowned."),
 M("What worried Selkirk?",["The physical condition of the ship","The weather","The food"],0,"He refused to continue the journey.","the ship’s condition"),
 M("What happened to the few men who survived from Selkirk’s ship?",["They were sent to a Peruvian prison, where they died.","They found Selkirk.","They sailed home."],0,"Those few men who survived…","sent to a Peruvian prison")]},
{i:"🏝️",n:"Island words",t:"mcq",x:2,ctx:"Extra practice (not from the book). Choose the best meaning.",items:[
 M("stranded",["unable to leave a place","very happy","very strong"],0,"Crusoe was stranded on a desert island.","stranded = stuck, unable to leave"),
 M("a castaway",["a person left alone after a shipwreck","a type of ship","a sailor’s hat"],0,"Imagine you are a castaway.","castaway"),
 M("a desert island",["an island where nobody lives","an island with a desert","an island with many people"],0,"Uninhabited island.","an island with no people"),
 M("rescued",["saved from danger","left alone","sent to prison"],0,"Selkirk was rescued after four years.","saved"),
 M("send signals for help",["make a sign so that people can find you","cook food","write a diary"],0,"Exercise 2b.","signals = signs for help"),
 M("shelter",["a place that protects you from weather or danger","a type of food","a ship"],0,"A survival need.","a protecting place")]},
{i:"🗂️",n:"Same or different?",t:"bucket",x:2,h:"🗂️ SORT THE DETAILS about Robinson Crusoe and Alexander Selkirk.",hint:"Think: what is true of both, only Crusoe, or only Selkirk?",lab:["🟰 BOTH","🟦 ONLY ROBINSON CRUSOE","🟧 ONLY ALEXANDER SELKIRK"],items:[["He was alone on an island.",0],["He was rescued in the end.",0],["He was stranded for 28 years.",1],["He lived alone for four years.",2],["He is a fictional character.",1],["He was a real Scottish sailor.",2],["His ship was destroyed in a storm.",1],["The captain left him on the island with food and water.",2]],sg:"💡 Use this chart for Exercise 1: What is the same? What is different?"}
]);
after(MX["w5.7"],"Ex 1 · Same and different",[
{i:"🔗",n:"Compare language",t:"mcq",x:2,ctx:"Choose the best word to compare the two stories.",items:[
 M("___ Robinson Crusoe and Alexander Selkirk were stranded on an island.",["Both","Unlike","Whereas"],0,"Both = the same.","Both"),
 M("Crusoe was stranded for 28 years, ___ Selkirk was alone for four years.",["whereas","because","so"],0,"contrast.","whereas"),
 M("___ Crusoe, Selkirk was a real person.",["Unlike","Both","Like"],0,"difference.","Unlike"),
 M("Crusoe is a character in a novel. ___, Selkirk really lived.",["However","Because","Both"],0,"contrast between sentences.","However"),
 M("Which sentence is correct?",["Both of them were rescued.","Both of them was rescued.","Both them were rescued."],0,"Both of them + were.","Both of them were rescued.")]}
]);
after(MX["w5.7"],"Ex 2B · Survival rules",[
{i:"🛟",n:"Survival rules language",t:"mcq",x:2,ctx:"Use in order to / so that to give the purpose of a rule.",items:[
 M("I would exercise every day ___ keep fit.",["in order to","so that to","because to"],0,"in order to + verb.","in order to"),
 M("I would light a fire ___ ships could see the smoke.",["so that","in order to","to that"],0,"so that + clause.","so that"),
 M("I would write a diary ___ stay positive.",["in order to","so that to","for to"],0,"in order to + verb.","in order to"),
 M("Which is a good rule for sending signals for help?",["Make a big fire or an SOS sign on the beach.","Stay quiet all day.","Hide in a cave."],0,"Be seen.","Make a big fire / SOS sign")]}
]);
after(MX["w5.7"],"Diary language",[
{i:"⏱️",n:"Diary tenses",t:"mcq",x:2,ctx:"A diary uses the past simple for what happened and will / would for plans. Choose the best form.",items:[
 M("Today I ___ a shelter with branches.",["built","build","was build"],0,"Past simple.","built"),
 M("Yesterday I ___ some fresh water.",["found","find","was finding to"],0,"Past simple.","found"),
 M("Tomorrow, I ___ to find more food.",["will try","tried","have tried"],0,"Plan for tomorrow.","will try"),
 M("If I had a boat, I ___ leave the island.",["would","will","had"],0,"Imaginary situation.","would")]},
{i:"🗒️",n:"Plan your diary",t:"book",lbl:"DIARY",sv:"Save",x:5,min:10,h:"🗒️ PLAN your diary entry before you write it. Use your answers from Exercise 2.",items:[
 ["1️⃣","1","Opening","Dear Diary, Today was my first day on the island …",["Dear Diary","Today was"],"dear diary|today"],
 ["2️⃣","2","How you felt","I felt … because …",["terrified","lonely","hopeful","relieved"],"felt"],
 ["3️⃣","3","What you found or did","I found … I decided to …",["found","decided to","built","looked for"],"found|decided|built"],
 ["4️⃣","4","Survival rules and plans","I would … in order to … / so that …",["in order to","so that","would"],"would|in order to|so that"],
 ["5️⃣","5","Ending: tomorrow","Tomorrow, I will …",["Tomorrow","will"],"tomorrow|will"]]}
]);
before(MX["w5.7"],"final",[
{i:"🔎",n:"Diary check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR DIARY before the final challenge.",list:["I started with Dear Diary and said what day it was.","I described my feelings.","I used the past simple for what happened.","I explained my survival rules with in order to / so that / would.","I ended with plans for tomorrow."]}
]);
}


