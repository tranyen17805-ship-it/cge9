/* ===== UNIT 6 UPGRADE · Lessons 6.1–6.2 (nguồn: Student’s Book pp.121–125, Workbook pp.88–89) ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const calc=m=>{m.mx=m.steps.reduce((a,s)=>a+(s.t==="final"?s.px:s.items.length*(s.x||0)),0)};
const after=(m,name,steps)=>{const i=m.steps.findIndex(s=>s.n===name);m.steps.splice(i<0?m.steps.length-1:i+1,0,...steps);calc(m)};
const addEx=(lb,map)=>{lb.vocab=lb.vocab.map(v=>v[3]||!map[v[0]]?v:[v[0],v[1],v[2],map[v[0]]])};

/* ---------- 6.1 School rules · từ vựng (7 → 16 từ, có ví dụ) ---------- */
LBC["5.0"].vocab=[
["strict","nghiêm khắc, nghiêm ngặt","adj","Our school is very strict about uniform."],
["good behaviour","hành vi tốt","n","We get plus points for good behaviour every week."],
["respect","sự tôn trọng; tôn trọng","n/v","Not shouting in the corridors shows respect for others."],
["break the rules","vi phạm nội quy","v","If you break the rules, you get minus points."],
["get into trouble","gặp rắc rối, bị khiển trách","v","You’ll get into trouble if you forget your note."],
["get a detention","bị phạt ở lại trường","v","After three warnings, you get a detention."],
["stay behind after school","ở lại sau giờ học","v","He had to stay behind after school to finish his work."],
["verbal warning","lời cảnh cáo bằng miệng","n","The teacher gave me a verbal warning before the detention."],
["plus points / minus points","điểm cộng / điểm trừ","n","She got plus points for helping a new student."],
["absent","vắng mặt","adj","If you are absent, you must bring a note from your parents."],
["bring a note","mang giấy xin phép","v","Students are expected to bring a note from their parents."],
["interrupt","ngắt lời, làm gián đoạn","v","We’re not allowed to interrupt when someone is speaking."],
["punctual","đúng giờ","adj","We’re expected to be punctual and polite."],
["polite","lịch sự","adj","Students are expected to answer teachers in a polite way."],
["corridor","hành lang","n","You mustn’t shout or run in the corridors."],
["compulsory","bắt buộc","adj","A school uniform is compulsory at our school."]
];

/* ---------- 6.1 Learner’s Book mission ---------- */
after(MX["5.0"],"03 · Vocabulary file",[
{i:"🌱",n:"Word families",t:"mcq",x:3,ctx:"behave → behaviour · respect → respectful · punish → punishment. Choose the correct word form.",items:[
 M("Good ___ is important in the classroom.",["behave","behaviour","behaving"],1,"Cần danh từ sau tính từ good.","behaviour (noun)"),
 M("Students should ___ politely to visitors.",["behave","behaviour","behaviours"],0,"Cần động từ sau should.","behave (verb)"),
 M("She showed great ___ for her teacher.",["respectful","respect","respecting"],1,"Cần danh từ sau great.","respect (noun)"),
 M("Please be ___ to other students.",["respect","respecting","respectful"],2,"Cần tính từ sau be.","respectful (adjective)"),
 M("The ___ for breaking the rule was a detention.",["punish","punishment","punishing"],1,"Cần danh từ sau the.","punishment (noun)")]},
{i:"🔗",n:"Collocations",t:"mcq",x:3,ctx:"Choose the word that goes with the rest of the phrase.",items:[
 M("If you ___ the rules, you get minus points.",["break","follow","respect"],0,"Vi phạm nội quy = break the rules.","break the rules"),
 M("Teachers give a verbal ___ before a detention.",["warning","trouble","respect"],0,"Lời cảnh cáo bằng miệng.","verbal warning"),
 M("Students who are absent have to bring a ___ from their parents.",["note","detention","warning"],0,"Giấy xin phép.","bring a note"),
 M("You get ___ points for good behaviour.",["plus","minus","strict"],0,"Điểm cộng.","plus points"),
 M("Students who are late may have to ___ behind after school.",["stay","get","break"],0,"Ở lại sau giờ học.","stay behind"),
 M("We show ___ for others when we don’t interrupt.",["respect","trouble","strict"],0,"Show + danh từ.","show respect")]},
{i:"⚖️",n:"Reward or sanction?",t:"bucket",x:2,h:"⚖️ SORT IT. Is each school measure a reward or a sanction (a punishment or consequence)?",hint:"Reward = khuyến khích hành vi tốt. Sanction = hậu quả khi vi phạm.",lab:["🌟 REWARD","⚠️ SANCTION"],items:[["plus points for good behaviour",0],["minus points",1],["a verbal warning",1],["a detention",1],["staying behind after school",1],["good behaviour goes on your report",0]],sg:"💡 Pattern: breaking the rules → verbal warning → minus points → detention."}
]);
after(MX["5.0"],"05 · World rules challenge",[
{i:"🔍",n:"Error detective",t:"mcq",x:4,ctx:"Choose the correct sentence.",items:[
 M("Which sentence is correct?",["Students aren’t allow to use phones.","Students aren’t allowed to use phones.","Students aren’t allowed use phones."],1,"be + not + V3 + to + V.","aren’t allowed to use"),
 M("Which sentence is correct?",["We are expected be on time.","We expected to be on time.","We are expected to be on time."],2,"be + V3 + to + V.","are expected to be"),
 M("Which sentence says running is forbidden?",["You don’t have to run in the corridors.","You mustn’t run in the corridors.","You have to run in the corridors."],1,"Forbidden = mustn’t.","mustn’t"),
 M("Which sentence means “it isn’t necessary”?",["You mustn’t wear a tie.","You have to wear a tie.","You don’t have to wear a tie."],2,"Not necessary = don’t have to.","don’t have to"),
 M("Which question is correct?",["Are you suppose to know the rules?","Are you supposed to know the rules?","Are you supposed know the rules?"],1,"supposed + to + V.","Are you supposed to…?")]}
]);

/* ---------- 6.1 Workbook mission ---------- */
after(MX["w5.0"],"Language support · give reasons",[
{i:"🧭",n:"Opinion language",t:"bucket",x:2,h:"🧭 SORT THE PHRASES. Do they show agreement, disagreement or a suggestion?",hint:"Think about the function of the phrase.",lab:["🙂 AGREE","🙁 DISAGREE","💡 SUGGEST"],items:[["I agree with this rule because it keeps us safe.",0],["I don’t think that’s fair.",1],["In my opinion, the rule is too strict.",1],["Students should be allowed to choose their seats.",2],["I think it’s a good idea because …",0],["It would be better if students could …",2]],sg:"💡 Use these phrases in Exercise 2 and in your final answer."}
]);
after(MX["w5.0"],"Improve my answer",[
{i:"🔎",n:"Is this rule good?",t:"mcq",x:3,ctx:"A good rule is clear, realistic and useful. Choose the better rule.",items:[
 M("Which rule is clear and realistic?",["Nobody can ever speak in school.","Students put their phones in a box at the start of each lesson.","Everyone must be perfect."],1,"Realistic = a school can really do it.","Phones in a box = clear and realistic"),
 M("Which rule explains why it is useful?",["Students should be quiet.","Students should be quiet during tests so everyone can concentrate.","Be quiet!"],1,"Look for the reason.","…so everyone can concentrate"),
 M("Which rule is realistic?",["Students can never leave the classroom.","Students may leave the classroom if they ask permission.","Teachers must never give homework."],1,"Think about what a school can really do.","Ask permission = realistic")]}
]);
calc(MX["w5.0"]);

/* ---------- 6.2 Family life · ví dụ cho từ vựng ---------- */
addEx(LBC["5.1"],{
"hectic":"Mornings are hectic in our house.",
"household chores":"Everyone in the family helps with household chores.",
"strategy":"The family used a business strategy to organise their home.",
"knots":"They looked for the ‘knots’ that were slowing things down.",
"pitch in":"All the children pitch in with the laundry.",
"resentment":"There’s no resentment over unfair workloads.",
"efficiency":"Kaizen improves efficiency at work.",
"employee":"Every employee can suggest improvements.",
"executive":"Eva worked as an executive for a pharmaceutical company.",
"management":"Good management saves time and stress.",
"practice":"Kaizen became a management practice around the world.",
"process":"Think about the whole process step by step.",
"productivity":"Regular breaks can increase productivity.",
"schedule":"They wrote a two-week schedule for the noticeboard.",
"set goals":"On Sundays they set goals for the coming fortnight.",
"system":"The system helped hospitals run more smoothly.",
"workload":"Breaking your workload into small steps reduces stress."});

/* ---------- 6.2 Workbook mission (6 → 12 bước) ---------- */
after(MX["w5.1"],"Ex 2 · Match the definitions",[
{i:"🗝️",n:"Key words · Business studies",t:"mcq",x:2,ctx:"Key words from the Student’s Book box. Choose the best meaning.",items:[
 M("efficiency",["doing something well without wasting time or effort","a list of jobs for each person","the people who work for a company"],0,"Efficient = làm nhanh, không lãng phí.","efficiency = working well, no waste"),
 M("management practice",["a way of running a business or a team","a school sports lesson","a problem in a system"],0,"Cách điều hành, quản lý.","a way of managing"),
 M("schedule",["a plan that shows when things will happen","a very small step","a type of job"],0,"Lịch trình.","schedule = a timed plan"),
 M("set goals",["decide what you want to achieve","stop working for a while","break a rule"],0,"Goal = mục tiêu.","set goals = decide targets"),
 M("household chores",["jobs you do to keep a home clean and tidy","jobs in a big company","school subjects"],0,"Việc nhà.","household chores = cleaning, cooking…")]},
{i:"🧩",n:"Same chunks, new sentences",t:"mcq",x:3,ctx:"The article uses useful chunks: a good idea to · make sure · as … as possible · as well as · a list of · a schedule for. Complete the new sentences.",items:[
 M("It’s a good idea ___ make a list before you go shopping.",["to","for","of"],0,"a good idea + to + V.","a good idea to"),
 M("Please make ___ you lock the door.",["sure","well","like"],0,"make sure (that).","make sure"),
 M("Finish the project as soon ___ possible.",["than","as","like"],1,"as soon as possible.","as … as possible"),
 M("She plays the piano as well ___ the guitar.",["as","like","of"],0,"as well as = và cả.","as well as"),
 M("Here is a list ___ the things we need.",["for","of","in"],1,"a list of + danh từ.","a list of"),
 M("Make a schedule ___ your revision.",["of","for","as"],1,"a schedule for.","a schedule for")]},
{i:"✅",n:"True, false or not given?",t:"mcq",x:3,ctx:"Read “Managing your time” (Workbook p. 89) again. Choose True, False or Not given.",items:[
 M("The process of reviewing productivity can only be used in companies.",["True","False","Not given"],1,"The article says it can also be applied to studying and household tasks.","False"),
 M("Breaking your workload into small steps can reduce stress.",["True","False","Not given"],0,"Look at the second paragraph.","True"),
 M("The article says you should study without breaks to be more productive.",["True","False","Not given"],1,"Too long without a break → productivity decreases.","False"),
 M("Making a schedule helps you decide when you can complete each goal.",["True","False","Not given"],0,"Make a schedule for when you can complete each goal.","True"),
 M("The writer says employees should work longer hours.",["True","False","Not given"],2,"This is not mentioned.","Not given")]},
{i:"🪜",n:"Time-management steps",t:"order",x:10,items:[0],h:"🪜 Put the advice from the article in order.",hint:"Follow the order of the article: review → goals → list → schedule → small steps → breaks.",cards:["A. Make a schedule for when you can complete each goal.","B. Review your productivity regularly.","C. Plan breaks so your concentration does not reduce.","D. Make a list of tasks and decide which are most important.","E. Break your workload into small steps.","F. Set realistic goals."],ans:[1,5,3,0,4,2],yl:"🪜 YOUR PLAN",ft:"🪜 PLAN READY",flow:["REVIEW","SET GOALS","LIST TASKS","SCHEDULE","SMALL STEPS","BREAKS"],bm:"Not quite. The article starts with reviewing productivity, then setting goals, listing tasks, making a schedule, breaking the workload into steps and planning breaks."}
]);
{const m=MX["w5.1"];const i=m.steps.findIndex(s=>s.n==="My weekly time system");
 m.steps.splice(i,0,{i:"🔧",n:"Fix the plan",t:"mcq",x:3,ctx:"Choose the more realistic option.",items:[
  M("Which goal is realistic?",["Learn all of Unit 6 in one hour tonight.","Review the Unit 6 vocabulary for 20 minutes after dinner.","Never use my phone again."],1,"Realistic = small and doable.","20 minutes after dinner"),
  M("Which schedule includes a break?",["Study for four hours without stopping.","Study 25 minutes, rest 5 minutes, study 25 minutes.","Study all night."],1,"The article says to plan breaks.","25 + 5 + 25"),
  M("Which sentence breaks the workload into small steps?",["I will do all my homework tonight.","First I’ll read the text, then I’ll answer the questions, then I’ll check my work.","I’ll do it someday."],1,"Small steps = first, then, then.","first… then… then…")]});
 const j=m.steps.findIndex(s=>s.t==="final");
 m.steps.splice(j,0,{i:"🔎",n:"Plan check",t:"chk",x:5,items:[0],h:"🔎 IS YOUR PLAN GOOD? Tick each point before the final challenge.",list:["My goals are realistic.","My schedule says when I will do each task.","My workload is divided into small steps.","I planned at least one break.","I can explain why my plan will work."]});
 calc(m);}
}


