/* ===== UNIT 6 UPGRADE · Lesson 6.4 Doing the right thing (nguồn: Student’s Book pp.128–129, Workbook p.95) ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const calc=m=>{m.mx=m.steps.reduce((a,s)=>a+(s.t==="final"?(s.px||0):s.items.length*(s.x||0)),0)};
const after=(m,name,steps)=>{const i=m.steps.findIndex(s=>s.n===name);m.steps.splice(i<0?m.steps.length-1:i+1,0,...steps);calc(m)};
const before=(m,type,steps)=>{let i=-1;m.steps.forEach((s,k)=>{if(s.t===type)i=k});m.steps.splice(i<0?m.steps.length:i,0,...steps);calc(m)};

/* ---------- 6.4 · từ vựng (6 → 15 từ, có ví dụ) ---------- */
LBC["5.3"].vocab=[
["moral dilemma","tình huống khó xử về đạo đức","n","Finding money on the school field is a moral dilemma."],
["responsible","có trách nhiệm","adj","Reza felt responsible for the younger boy."],
["regret","sự hối tiếc; hối tiếc","n/v","Rona felt regret that she hadn’t told a teacher."],
["keep a secret","giữ bí mật","v","Should you keep a friend’s secret if she is unhappy?"],
["persuade","thuyết phục","v","If only I had persuaded my friend to talk to a teacher."],
["go back to …","quay lại …","v","Bella could have gone back to the café."],
["in my position","ở hoàn cảnh của tôi","phr","What would you have done if you’d been in my position?"],
["sort (it) out","giải quyết (vấn đề)","v","The teacher would have sorted it out."],
["make things worse","làm mọi chuyện tệ hơn","v","She thought telling someone would make things worse."],
["straight away","ngay lập tức","adv","Should I have told someone straight away?"],
["charge (someone) for","tính tiền (ai) cho …","v","The café only charged me for one item."],
["on the other hand","mặt khác","phr","On the other hand, someone else might have found the money."],
["bill","hóa đơn","n","She looked carefully at the bill."],
["waitress","nữ phục vụ bàn","n","The waitress was new to the job."],
["attitude","thái độ","n","Rona’s attitude is full of regret."]
];

/* ---------- 6.4 Learner’s Book mission (15 → 20 bước) ---------- */
after(MX["5.3"],"Check with the posts",[
{i:"🧩",n:"Words in the posts",t:"mcq",x:2,ctx:"Choose the best meaning of the words in the three posts (Student’s Book p. 128).",items:[
 M("sort it out",["solve a problem","throw something away","tell a secret"],0,"The teacher would have sorted it out.","sort out = solve"),
 M("make things worse",["cause more problems","make something better","stop a problem"],0,"Rona’s friend feared this.","cause more problems"),
 M("charged (for one item)",["asked to pay for","given as a free gift","stopped by police"],0,"Bella’s bill.","charged = asked to pay"),
 M("on the other hand",["used to give a different point of view","used to end a letter","used to ask a question"],0,"Brandon gives two sides.","a contrasting point"),
 M("in my position",["in the same situation as me","in my seat","in my place on the map"],0,"What would you have done…?","in my situation"),
 M("straight away",["immediately","slowly","tomorrow"],0,"Rona asks about telling someone.","immediately")]}
]);
after(MX["5.3"],"If only",[
{i:"🎚️",n:"would, could or might?",t:"mcq",x:3,ctx:"would have = sure about the imagined result · could have = it was possible · might have = less certain.",items:[
 M("If Bella had gone back, she ___ told the waitress about the mistake. (it was possible)",["could have","would have to","must have"],0,"Possibility.","could have"),
 M("If Rona had told a teacher, the teacher ___ sorted it out. (Rona is sure)",["would have","might not have","can have"],0,"Rona’s own words.","would have"),
 M("If Brandon had left the money, someone else ___ found it and kept it. (possible, not certain)",["might have","would have","had"],0,"Brandon says someone else might have found it.","might have"),
 M("Which sentence is the most certain?",["If I had known, I would have helped.","If I had known, I might have helped.","If I had known, I could have helped."],0,"would = most certain.","would have")]},
{i:"🔀",n:"Reverse the clauses",t:"mcq",x:3,ctx:"The if-clause can come first or second. Use a comma when it comes first.",items:[
 M("“If you had been in my position, what would you have done?” = What would you have done ___?",["if you had been in my position","if you were in my position","if you have been in my position"],0,"Same form, new order.","if you had been in my position"),
 M("“She would have noticed the mistake if she had looked more carefully.” = If ___, she would have noticed the mistake.",["she had looked more carefully","she would look more carefully","she looked more carefully"],0,"If + past perfect.","she had looked more carefully"),
 M("Which sentence is punctuated correctly?",["If we had left earlier, we would have caught the bus.","If we had left earlier we, would have caught the bus.","If we had left earlier would we have caught the bus."],0,"Comma after the if-clause.","If we had left earlier, we would have…")]},
{i:"🛠️",n:"Error repair",t:"mcq",x:3,ctx:"Choose the corrected sentence.",items:[
 M("If I would have known, I would have helped.",["If I had known, I would have helped.","If I knew, I would have helped.","If I would known, I would helped."],0,"No would in the if-clause.","If I had known"),
 M("If she had looked at the bill, she would noticed the mistake.",["If she had looked at the bill, she would have noticed the mistake.","If she looked at the bill, she would noticed the mistake.","If she had looked at the bill, she had noticed the mistake."],0,"would have + V3.","would have noticed"),
 M("If only I told a teacher!",["If only I had told a teacher!","If only I would tell a teacher!","If only I have told a teacher!"],0,"if only + past perfect.","had told"),
 M("What would you have do?",["What would you have done?","What would you had done?","What you would have done?"],0,"would have + V3.","would have done")]}
]);
before(MX["5.3"],"final",[
{i:"🔎",n:"Discussion check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR ANSWER before the final challenge.",list:["I said clearly what I would have done.","I gave a reason for my decision.","I used if + past perfect, would / could / might have + V3.","I used if only + past perfect to show regret.","I thought about the other person’s feelings."]}
]);

/* ---------- 6.4 Workbook p.95 mission (9 → 16 bước) ---------- */
after(MX["w5.3"],"Case A · Magda and the locked car",[
{i:"🔎",n:"Case A · Facts check",t:"mcq",x:2,ctx:"Check the facts in Magda’s situation (Workbook p. 95).",items:[
 M("What did Magda first think the man was doing?",["Trying to see what the time was","Trying to steal the car","Cleaning the window"],0,"At first…","Trying to see the time"),
 M("What did she see after a couple of minutes?",["Him trying the door handle of the car","Him driving away","Him calling the police"],0,"After a couple of minutes…","Trying the door handle"),
 M("What did Magda realise?",["The man was locked out of the car","The car belonged to her dad","The man was a thief"],0,"She realised…","He was locked out"),
 M("What did she do next?",["Walked home quickly and told her dad","Phoned the police","Went to her violin lesson"],0,"Her dad went out to help.","Told her dad")]}
]);
after(MX["w5.3"],"Case B · Jamal and the stranger",[
{i:"🔎",n:"Case B · Facts check",t:"mcq",x:2,ctx:"Check the facts in Jamal’s situation (Workbook p. 95).",items:[
 M("Where was Jamal?",["At the bus stop on his way to school","In the school playground","In a café"],0,"On his way to school.","At the bus stop"),
 M("What did the man do?",["Went round the side of the house and started climbing over the gate","Knocked on the front door","Ran to the bus stop"],0,"He didn’t go to the front door.","Climbed over the gate"),
 M("Why didn’t Jamal do anything?",["The bus arrived","He didn’t see the man","He phoned the police"],0,"Just then…","The bus arrived")]}
]);
after(MX["w5.3"],"Case C · Reza and the younger boy",[
{i:"🔎",n:"Case C · Facts check",t:"mcq",x:2,ctx:"Check the facts in Reza’s situation (Workbook p. 95).",items:[
 M("Where was Reza?",["In the school playground with his friends","At a bus stop","In a café"],0,"With his friends.","School playground"),
 M("What had the three boys done?",["Taken the younger boy’s school bag and thrown it to each other","Lost their own bags","Given him a present"],0,"They’d taken…","Taken and thrown the bag"),
 M("Why did Reza phone the school office?",["He was worried about the boy and wanted to tell them what was happening","He wanted to go home","He was late for a lesson"],0,"Reza was worried.","To report what was happening")]}
]);
after(MX["w5.3"],"Grammar booster",[
{i:"🔁",n:"Third conditional · three cases",t:"mcq",x:3,ctx:"Use the three cases to practise if + past perfect, would / could / might have + V3.",items:[
 M("If Magda ___ the man was locked out, she might have stopped.",["had realised","would realise","realised"],0,"if + past perfect.","had realised"),
 M("If Jamal ___ the bus, he could have told someone.",["had missed","missed","would have missed"],0,"if + past perfect.","had missed"),
 M("If Reza ___ the school office, the younger boy might still have been upset.",["hadn’t phoned","didn’t phone","wouldn’t have phoned"],0,"negative past perfect.","hadn’t phoned"),
 M("Which sentence is correct?",["If I had seen it, I would have told a teacher.","If I would have seen it, I would tell a teacher.","If I had seen it, I would told a teacher."],0,"If + had V3, would have V3.","If I had seen it, I would have told"),
 M("Which sentence expresses regret?",["If only Jamal had told someone!","If Jamal tells someone, …","Jamal would tell someone."],0,"if only + past perfect.","If only Jamal had told someone!")]},
{i:"🛡️",n:"Safe or risky?",t:"bucket",x:2,h:"🛡️ SORT THE RESPONSES. Which are safe and helpful, risky, or not helpful? (Suggested answers, not an official key.)",hint:"Think about safety: for you, for the other person and for the situation.",lab:["✅ SAFE & HELPFUL","⚠️ RISKY","❌ NOT HELPFUL"],items:[["Phone the school office about the bullying.",0],["Tell a trusted adult what you saw.",0],["Climb the gate to follow the man.",1],["Shout angrily at the three boys.",1],["Pretend you saw nothing and never tell anyone.",2],["Call the police if someone might be in danger.",0]],sg:"💡 Safe responses involve a trusted adult or the right authority."},
{i:"🧱",n:"Opinion · alternative · reason",t:"bucket",x:2,h:"🧱 BUILD A STRONG ANSWER. Is each sentence an opinion, an alternative or a reason?",hint:"Opinion = would you have done the same? Alternative = what would / wouldn’t you have done? Reason = why?",lab:["💬 OPINION","🔁 ALTERNATIVE","🧩 REASON"],items:[["I think Magda did the right thing.",0],["I would have asked the man if he needed help.",1],["I wouldn’t have ignored the problem.",1],["This is because an adult could solve the problem safely.",2],["I would have done the same.",0],["That way nobody would have got hurt.",2]],sg:"💡 Use all three parts in the final challenge."}
]);
before(MX["w5.3"],"final",[
{i:"🔎",n:"Answer check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR ANSWER before the final challenge.",list:["I said whether I would have done the same.","I explained what I would (or wouldn’t) have done.","I gave at least one reason.","I used would have / wouldn’t have correctly."]}
]);
}


