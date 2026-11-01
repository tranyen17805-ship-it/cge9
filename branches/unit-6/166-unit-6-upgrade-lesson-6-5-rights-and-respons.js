/* ===== UNIT 6 UPGRADE · Lesson 6.5 Rights and responsibilities (nguồn: Student’s Book pp.130–131, Workbook p.96) ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const calc=m=>{m.mx=m.steps.reduce((a,s)=>a+(s.t==="final"?(s.px||0):s.items.length*(s.x||0)),0)};
const after=(m,name,steps)=>{const i=m.steps.findIndex(s=>s.n===name);m.steps.splice(i<0?m.steps.length-1:i+1,0,...steps);calc(m)};
const before=(m,type,steps)=>{let i=-1;m.steps.forEach((s,k)=>{if(s.t===type)i=k});m.steps.splice(i<0?m.steps.length:i,0,...steps);calc(m)};
const TF=["True","False"];

/* ---------- 6.5 · từ vựng (9 → 18 từ, có ví dụ) ---------- */
LBC["5.4"].vocab=[
["work part-time / full-time","làm việc bán thời gian / toàn thời gian","v","At 14 you can work part-time with your school’s permission."],
["leave home","ra ở riêng, rời nhà","v","At 16 you can leave home with your parents’ permission."],
["get married","kết hôn","v","At 18 you can get married."],
["join the army","nhập ngũ","v","At 16 you can join the army."],
["open a bank account","mở tài khoản ngân hàng","v","At 13 you can open your own bank account."],
["do jury service","làm bồi thẩm đoàn","v","You can do jury service when you are 18."],
["give blood","hiến máu","v","At 18 you can give blood."],
["mature","trưởng thành, chín chắn","adj","A mature person can make careful decisions."],
["responsibility","trách nhiệm","n","With every right comes a responsibility."],
["earnings","tiền kiếm được","n","It is important to keep track of your earnings."],
["trade","nghề thủ công, nghề (cần học)","n","He wanted to learn a trade."],
["mechanic","thợ cơ khí","n","He got good training as a mechanic."],
["homesick","nhớ nhà","adj","At first I was homesick and missed my family."],
["independence","sự độc lập","n","I started to enjoy my independence."],
["be called up","được triệu tập","v","I was called up to do jury duty last year."],
["citizen","công dân","n","Jury service is an important service every citizen should do."],
["set a good example","làm gương tốt","v","Giving blood sets a good example to other people."],
["general election","tổng tuyển cử","n","I was happy when I was old enough to vote in the general election."]
];

/* ---------- 6.5 Learner’s Book mission (13 → 18 bước) ---------- */
after(MX["5.4"],"02 · Age detective",[
{i:"✅",n:"UK list · true or false?",t:"mcq",x:2,ctx:"Use the “In the UK …” list in your book (pp. 130). Choose True or False.",items:[
 M("In the UK list, you can buy a pet at 12.",TF,0,"At 12 you can…","True"),
 M("At 16 you can vote.",TF,1,"Voting is at 18.","False: 18"),
 M("At 14 you can work part-time with your school’s permission.",TF,0,"At 14 you can…","True"),
 M("At 17 you can learn to drive.",TF,0,"At 17 you can…","True"),
 M("At 12 you can open your own bank account.",TF,1,"It is 13.","False: 13"),
 M("At 18 you can own a house.",TF,0,"At 18 you can…","True")]}
]);
after(MX["5.4"],"Use the collocations",[
{i:"📏",n:"Age language",t:"mcq",x:2,ctx:"Extra practice (not from the book). Use too / enough and can / can’t correctly.",items:[
 M("I think you’re ___ young to be responsible for an animal.",["too","enough","very much"],0,"too + adjective = more than is good.","too young"),
 M("He is old ___ to vote.",["enough","too","so"],0,"adjective + enough.","old enough"),
 M("At 18 you ___ vote in the UK.",["can","must to","may to"],0,"can + verb.","can"),
 M("Under 13, you ___ open your own bank account in the UK list.",["can’t","don’t can","not can"],0,"can’t + verb.","can’t"),
 M("Which sentence is correct?",["She is too young to drive.","She is too young for drive.","She is young too to drive."],0,"too + adjective + to + verb.","too young to drive")]}
]);
after(MX["5.4"],"04 · Are age limits fair?",[
{i:"🗨️",n:"Agree or disagree?",t:"bucket",x:2,h:"🗨️ SORT THE LANGUAGE for Exercise 3. Does each phrase agree, disagree or ask for an opinion?",hint:"A: What do you think about being able to buy a pet when you’re 12? B: I don’t agree with it. I think you’re too young …",lab:["🙂 AGREE","🙁 DISAGREE","❓ ASK FOR OPINION"],items:[["What do you think about … ?",2],["I don’t agree with it.",1],["I think you’re too young to …",1],["I agree with that because …",0],["That’s a good point.",0],["What do you think?",2]],sg:"💡 Add a reason: I don’t agree because … / I agree because …"}
]);
after(MX["5.4"],"Mini debate",[
{i:"⚖️",n:"Rights and responsibilities",t:"mcq",x:3,ctx:"Suggested answers (not an official key). Match each right with a sensible responsibility.",items:[
 M("Right: the right to education. Responsibility:",["go to school and try your best","stay at home","ignore teachers"],0,"Education needs effort.","go to school and try your best"),
 M("Right: the right to express your opinion. Responsibility:",["listen to others and be respectful","shout at others","never speak"],0,"Respect.","listen and be respectful"),
 M("Right: the right to safety and protection. Responsibility:",["follow safety rules and look after others","break the rules","hide problems"],0,"Safety is shared.","follow safety rules"),
 M("Right: the right to privacy. Responsibility:",["respect other people’s privacy","share other people’s secrets","post private photos"],0,"Treat others as you want to be treated.","respect others’ privacy")]}
]);
before(MX["5.4"],"final",[
{i:"🔎",n:"Research check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR RESEARCH before the final challenge.",list:["I used a reliable source and wrote its name.","I wrote any conditions (for example, permission or exceptions).","I did not assume Vietnam is the same as the UK.","I compared my list with the UK list.","I gave a reason for my opinion about age limits."]}
]);

/* ---------- 6.5 Workbook p.96 mission (7 → 14 bước) ---------- */
after(MX["w5.4"],"Ex 1 · Text E",[
{i:"🔎",n:"Texts A–E · facts check",t:"mcq",x:2,ctx:"Read the completed texts (Workbook p. 96). Choose the best answer.",items:[
 M("Text A: why is it important to keep track of your earnings?",["Especially if you want to save up for something special","Because the bank asks you to","So you can buy a pet"],0,"Look at the end of Text A.","to save up for something special"),
 M("Text B: why did the writer join the army at 17?",["To learn a trade, because college was too expensive","To travel abroad","To vote in the election"],0,"The writer couldn’t afford college or training school.","to learn a trade"),
 M("Text B: what training did the writer get?",["Training as a mechanic","Training as a doctor","Training as a teacher"],0,"After learning to drive a lorry.","as a mechanic"),
 M("Text C: how did the writer feel at university at first?",["Homesick, but later enjoyed independence","Very independent from the start","Bored by the lectures"],0,"After the first term…","homesick, then independent"),
 M("Text D: why did the writer need permission?",["To take time off work for jury duty","To leave home","To open a bank account"],0,"The writer was working full-time.","to take time off work"),
 M("Text E: which reason is NOT given for giving blood?",["It gives you a free holiday","You can help sick people","It sets a good example"],0,"Firstly, secondly, thirdly …","a free holiday is not mentioned")]},
{i:"🗂️",n:"Which text is it?",t:"bucket",x:2,h:"🗂️ SORT THE SENTENCES. Which text do they come from?",hint:"A = first job · B = army · C = university · D = jury duty · E = giving blood.",lab:["💼 TEXT A","🪖 TEXT B","🎓 TEXT C","⚖️ TEXT D","🩸 TEXT E"],items:[["I only had a part-time job on Saturdays.",0],["I learned to drive a lorry.",1],["I was so homesick!",2],["I had to get permission to take time off work.",3],["You can get a free medical check.",4],["It was tough but I got good training.",1]]}
]);
after(MX["w5.4"],"Vocabulary booster",[
{i:"🧩",n:"Collocations in new sentences",t:"mcq",x:2,ctx:"Extra practice (not from the book). Complete the sentences with the correct collocation.",items:[
 M("She wants to ___ a bank account at 13.",["open","make","do"],0,"open a bank account.","open"),
 M("He decided to ___ the army at 18.",["join","get","give"],0,"join the army.","join"),
 M("You must be 18 to ___ in the election.",["vote","do","get"],0,"vote in an election.","vote"),
 M("My brother ___ home when he went to university.",["left","did","opened"],0,"left home.","left"),
 M("People who ___ blood can help patients.",["give","join","open"],0,"give blood.","give")]},
{i:"⏱️",n:"Past tenses in the texts",t:"mcq",x:2,ctx:"The texts use the past simple and the past continuous. Choose the correct form.",items:[
 M("I ___ home when I was 18 and went off to university.",["left","was leaving","have left"],0,"Finished action in the past.","left"),
 M("I ___ full-time, so I had to get permission to take time off work.",["was working","worked to","work"],0,"Background action.","was working"),
 M("I ___ the army when I was 17.",["joined","was joining","join"],0,"Past simple.","joined"),
 M("I ___ to drive a lorry and got good training.",["learned","was learn","learn"],0,"Past simple.","learned")]},
{i:"🔢",n:"Firstly, secondly, thirdly",t:"mcq",x:2,ctx:"Text E gives reasons in order. Choose the correct sequencing word.",items:[
 M("___, you can help people who are sick or have been in an accident.",["Firstly","Thirdly","Finally he"],0,"The first reason.","Firstly"),
 M("___, you can get a free medical check.",["Secondly","Firstly","Lastly it"],0,"The second reason.","Secondly"),
 M("___, it sets a good example to other people.",["Thirdly","Secondly","Firstly"],0,"The third reason.","Thirdly")]},
{i:"🗒️",n:"Opinion planner",t:"book",lbl:"PLAN",sv:"Save",x:4,min:10,h:"🗒️ PLAN Exercise 2. Choose two actions and say if you will do them in the future. Use: I will … because … / I won’t … because … / I think everyone should … because …",items:[
 ["1️⃣","1","Action 1: what will (or won’t) you do?","I will / I won’t … because …",["open a bank account","vote","give blood","learn to drive"],"will|won.t"],
 ["2️⃣","2","Action 2: what will (or won’t) you do?","I will / I won’t … because …",["join the army","do jury duty","leave home to study"],"will|won.t"],
 ["3️⃣","3","Do you think everyone should do this? Why?","I think everyone should … because …",["because","should","as soon as"],"should|because"],
 ["4️⃣","4","Use a sequencing word (Firstly, Secondly …)","Firstly, … Secondly, …",["Firstly","Secondly","Thirdly"],"firstly|secondly|first"]]}
]);
before(MX["w5.4"],"final",[
{i:"🔎",n:"Writing check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR WRITING before the final challenge.",list:["I wrote about two actions.","I said what I will or won’t do in the future.","I gave a reason for each action.","I used the collocations correctly (open a bank account, give blood …).","I used a sequencing word."]}
]);
}


