/* ===== UNIT 6 UPGRADE · Lesson 6.3 + Use of English p.91–94 (nguồn: Student’s Book pp.126–127, Workbook pp.90–94) ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const calc=m=>{m.mx=m.steps.reduce((a,s)=>a+(s.t==="final"?(s.px||0):s.items.length*(s.x||0)),0)};
const after=(m,name,steps)=>{const i=m.steps.findIndex(s=>s.n===name);m.steps.splice(i<0?m.steps.length-1:i+1,0,...steps);calc(m)};
const before=(m,type,steps)=>{let i=-1;m.steps.forEach((s,k)=>{if(s.t===type)i=k});m.steps.splice(i<0?m.steps.length:i,0,...steps);calc(m)};

/* ---------- 6.3 · từ vựng (5 → 15 từ, có ví dụ) ---------- */
LBC["5.2"].vocab=[
["a ban on (phones at the table)","lệnh cấm (dùng điện thoại khi ăn)","n","There’s a ban on phones at the table in our house."],
["a phone-free zone","khu vực không dùng điện thoại","n","The kitchen is a phone-free zone."],
["screen time","thời gian sử dụng màn hình","n","My screen time is limited to two hours a day."],
["make your bed","dọn giường","v","I make my bed every morning."],
["ask permission","xin phép","v","You have to ask permission before you invite friends over."],
["keep your room tidy","giữ phòng gọn gàng","v","We have to keep our bedrooms tidy."],
["take turns","lần lượt, thay phiên","v","My brother and I take turns cleaning the bathroom."],
["do the vacuuming","hút bụi","v","It’s my turn to do the vacuuming."],
["slippers","dép đi trong nhà","n","Everyone wears slippers when they’re in the house."],
["be strict about","nghiêm khắc về","v","My dad is very strict about homework."],
["awkward","khó xử, ngượng ngùng","adj","It’s awkward when my friends are staying out late."],
["stay out late","ở ngoài đến khuya","v","I’m not allowed to stay out late on school nights."],
["a complete ban","lệnh cấm hoàn toàn","n","There isn’t a complete ban on phones."],
["get annoyed","bực mình","v","My dad gets annoyed if I look at my phone too often."],
["make sure","đảm bảo, chắc chắn","v","I always have to make sure my parents are OK with it first."]
];

/* ---------- 6.3 Learner’s Book mission ---------- */
after(MX["5.2"],"Exercise 6 · Choose the report",[
{i:"🧭",n:"Wh- word order",t:"mcq",x:3,ctx:"Extra practice (not from the book). After the question word, use statement order: subject + verb. Choose the correct report.",items:[
 M("“Where are you going?” → Raheem’s dad asked Raheem ___.",["where he was going","where was he going","where are you going"],0,"Subject + verb, and the tense moves back.","where he was going"),
 M("“What time is the film?” → Alisha asked ___.",["what time the film was","what time was the film","what time is the film"],0,"No question order.","what time the film was"),
 M("“Whose phone is this?” → Mum asked ___.",["whose phone it was","whose phone was it","whose is that phone"],0,"Subject + verb.","whose phone it was"),
 M("“How long can I stay?” → Jason asked his mum ___.",["how long he could stay","how long could he stay","how long he can stay"],0,"can → could.","how long he could stay")]},
{i:"📣",n:"Commands and requests",t:"mcq",x:3,ctx:"Extra practice (not from the book). tell / ask + person + (not) to + verb.",items:[
 M("“Clean the kitchen afterwards!” → Mum ___ her to clean the kitchen afterwards.",["told","said","asked if"],0,"told + person + to.","told her to clean"),
 M("“Don’t be late!” → Dad told Raheem ___ late.",["not to be","don’t be","to not being"],0,"not to + verb.","not to be"),
 M("“Please phone me when you get there.” → She asked him ___ her when he got there.",["to phone","phone","that phoned"],0,"asked + person + to.","to phone"),
 M("Which sentence is correct?",["She said me to come.","She told me to come.","She told to me come."],1,"told + person + to.","She told me to come.")]}
]);
before(MX["5.2"],"final",[
{i:"🔎",n:"Role-play check",t:"chk",x:5,items:[0],h:"🔎 READY TO REPORT? Tick each point before the final challenge.",list:["I asked for permission politely and gave a reason.","I used if / whether for yes/no questions.","I kept subject + verb order after a question word.","I moved the tense back (can → could, am going → was going).","I used told + person for instructions and said for statements."]}
]);

/* ---------- 6.3 Workbook p.90 mission (7 → 13 bước) ---------- */
after(MX["w5.2"],"Ex 2 · Find the correct writer",[
{i:"✅",n:"True, false or not given?",t:"mcq",x:3,ctx:"Read the three blogs again (Workbook p. 90). Choose True, False or Not given.",items:[
 M("Leila and her brother take turns cleaning the bathroom.",["True","False","Not given"],0,"Leila’s blog.","True"),
 M("Nabil is never allowed to use his phone.",["True","False","Not given"],1,"There isn’t a complete ban on phones.","False"),
 M("Danuta has to be home before 10 p.m.",["True","False","Not given"],1,"Check the time in her blog.","False: before 9 p.m."),
 M("Nabil’s dad checks his homework every evening.",["True","False","Not given"],2,"This is not mentioned.","Not given"),
 M("Danuta always asks her parents’ permission before she goes anywhere.",["True","False","Not given"],0,"If I want to go anywhere … make sure my parents are OK.","True")]},
{i:"🧠",n:"Meaning in context",t:"mcq",x:2,ctx:"Words from the blogs. Choose the best meaning.",items:[
 M("awkward",["embarrassing or uncomfortable","very exciting","easy to do"],0,"Danuta: it’s really awkward when my friends stay out late.","awkward = uncomfortable"),
 M("a complete ban",["a rule that forbids something completely","a small suggestion","a type of phone"],0,"Nabil: there isn’t a complete ban on phones.","a complete ban = totally forbidden"),
 M("gets annoyed",["becomes a little angry","becomes very happy","falls asleep"],0,"Nabil’s dad gets annoyed if he looks at it too often.","gets annoyed = a little angry"),
 M("take turns",["do something one after another, sharing the job","do something alone","refuse to do something"],0,"Leila: my brother and I take turns.","take turns = share a job"),
 M("stay out late",["not come home until late","stay in the house","arrive early at school"],0,"Danuta’s friends are staying out late.","stay out late = come home late")]},
{i:"💭",n:"Rule or feeling?",t:"bucket",x:2,h:"💭 SORT THE SENTENCES from the blogs. Is it a rule or a feeling / opinion?",hint:"A rule says what people must or mustn’t do. A feeling or opinion shows how the writer reacts.",lab:["📜 RULE","💭 FEELING / OPINION"],items:[["Everyone wears slippers when they’re in the house.",0],["It’s not that bad.",1],["I’m not allowed to watch TV until my homework is done.",0],["My dad gets annoyed if I look at my phone too often.",1],["I always have to be back before 9 p.m.",0],["Sometimes it’s really awkward when my friends are staying out late.",1]],sg:"💡 Rules use have to / be allowed to / always. Feelings use words like awkward, annoyed, not that bad."}
]);
after(MX["w5.2"],"Sentence patterns",[
{i:"🔁",n:"Say it another way",t:"mcq",x:3,ctx:"Choose the sentence that keeps the same meaning (be allowed / expected + to).",items:[
 M("Nabil: “I’m not allowed to watch TV until my homework is done.” → Nabil ___ watch TV until his homework is done.",["isn’t allowed to","doesn’t allow to","not allowed to"],0,"be + not + allowed + to.","isn’t allowed to"),
 M("Danuta: “I always have to be back before 9 p.m.” → Danuta ___ be back before 9 p.m.",["is expected to","expects to","is expect to"],0,"be + V3 + to.","is expected to"),
 M("“Everyone wears slippers in the house.” → Everyone ___ wear slippers in the house.",["is expected to","expected to","expects to"],0,"Passive with to + verb.","is expected to"),
 M("Danuta’s parents ___ her to tell them where she is going.",["expect","are expected","expecting"],0,"Active: parents expect her to…","expect")]},
{i:"📝",n:"Blog planner",t:"book",lbl:"BLOG",sv:"Save",x:4,min:10,h:"📝 PLAN your blog (Exercise 3). Use the blog patterns: The main rules in our home are about … / I’m not allowed to … until … / I always have to … / I agree / don’t agree because …",items:[
 ["1️⃣","1","What are the main rules in your home?","The main rules in our home are about …",["tidy","homework","phones","chores"],"rules|about"],
 ["2️⃣","2","What are you (not) allowed to do?","I’m not allowed to … until …",["allowed to","until"],"allowed|until|have to"],
 ["3️⃣","3","Do you agree with the rules? Why?","I agree / I don’t agree because …",["because","fair","strict"],"because|agree"]]}
]);
before(MX["w5.2"],"final",[
{i:"🔎",n:"Blog check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR BLOG before the final challenge.",list:["I answered all three blog questions.","I used have to / be allowed to / be expected to.","I gave one reason for my opinion.","I wrote about my own home, not the blogs I read."]}
]);

/* ---------- Use of English p.91–92 · Verbs in the passive followed by the infinitive (8 → 14 bước) ---------- */
after(MX["u5.0"],"Focus 1 · Present simple passive",[
{i:"🔄",n:"Active → passive",t:"mcq",x:2,ctx:"Extra practice (not from the book). Choose the passive + infinitive sentence with the same meaning.",items:[
 M("They expect students to wear a uniform.",["Students are expected to wear a uniform.","Students expect to wear a uniform.","Students are expecting to wear a uniform."],0,"Object → subject.","are expected to wear"),
 M("Teachers encourage us to read.",["We’re encouraged to read.","We encourage to read.","We’re encouraging to read."],0,"be + V3 + to.","We’re encouraged to read."),
 M("They don’t allow us to use phones.",["We aren’t allowed to use phones.","We don’t allowed to use phones.","We aren’t allow to use phones."],0,"Negative passive.","We aren’t allowed to"),
 M("The school asks students to send homework by email.",["Students are asked to send homework by email.","Students ask to send homework by email.","Students are ask to send homework by email."],0,"be + asked + to.","are asked to send"),
 M("People think teenagers need more sleep.",["Teenagers are thought to need more sleep.","Teenagers think to need more sleep.","Teenagers are thinking to need more sleep."],0,"Like Focus e: is thought to be.","are thought to need")]},
{i:"🚦",n:"Rules language",t:"bucket",x:2,h:"🚦 SORT THE RULES. Is each one expected / asked, permitted or not permitted?",hint:"expected, asked, encouraged = what people should do · allowed = permitted · not allowed = forbidden.",lab:["📌 EXPECTED / ASKED / ENCOURAGED","✅ PERMITTED","⛔ NOT PERMITTED"],items:[["We’re expected to be punctual.",0],["We’re allowed to use calculators.",1],["We’re not allowed to interrupt.",2],["We’re asked to work together.",0],["Students aren’t allowed to run.",2],["We’re encouraged to share our ideas.",0],["Students are allowed to bring a snack.",1]]}
]);
after(MX["u5.0"],"Practice 2 · be supposed to or I suppose?",[
{i:"🪞",n:"Supposed to: rule or reality?",t:"mcq",x:3,ctx:"Get it right! be supposed to = meant to happen, sometimes when the opposite is true.",items:[
 M("“The lesson is supposed to start at 9.30, but we’re always five minutes late.” What does this tell us?",["The lesson should start at 9.30, but it usually doesn’t.","The lesson starts at exactly 9.30.","The lesson starts at 9.35 by rule."],0,"supposed to = meant to.","meant to, but doesn’t"),
 M("“We’re not supposed to tell anyone – it’s a secret.” means …",["We shouldn’t tell anyone.","We can’t hear anyone.","We don’t think anyone knows."],0,"Not supposed = shouldn’t.","We shouldn’t tell anyone."),
 M("“I suppose that’s why she didn’t come.” means …",["I think that is the reason.","That was the rule.","She was meant to come."],0,"Active I suppose = I think / I guess.","I think / I guess")]},
{i:"❓",n:"Negatives and questions",t:"mcq",x:2,items:[
 M("___ we expected to wear a tie?",["Are","Do","Have"],0,"Question: be + subject.","Are"),
 M("I ___ allowed to use my phone in lessons.",["am not","don’t","not"],0,"Negative: be + not.","am not"),
 M("___ you encouraged to work in groups?",["Are","Do","Is"],0,"you → are.","Are"),
 M("Which question is correct?",["Is he allowed to leave early?","Does he allowed to leave early?","Is he allow to leave early?"],0,"be + subject + V3 + to.","Is he allowed to"),
 M("Which negative is correct?",["She isn’t expected to cook dinner.","She doesn’t expected to cook dinner.","She isn’t expect to cook dinner."],0,"be + not + V3.","isn’t expected to")]},
{i:"🛠️",n:"Error repair",t:"mcq",x:3,ctx:"Choose the corrected sentence.",items:[
 M("We are expected arrive at 8.30.",["We are expected to arrive at 8.30.","We are expecting arrive at 8.30.","We expect to arrived at 8.30."],0,"Missing to.","are expected to arrive"),
 M("Students aren’t allow to eat in class.",["Students aren’t allowed to eat in class.","Students aren’t allowing to eat in class.","Students don’t allowed to eat in class."],0,"Past participle.","aren’t allowed"),
 M("I’m suppose to finish this today.",["I’m supposed to finish this today.","I’m supposing to finish this today.","I suppose to finish this today."],0,"be + supposed + to.","I’m supposed to"),
 M("Are you encourage to read?",["Are you encouraged to read?","Do you encouraged to read?","Are you encouraging to read?"],0,"be + V3.","Are you encouraged")]}
]);
before(MX["u5.0"],"final",[
{i:"🔎",n:"Grammar check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR GRAMMAR before the final challenge.",list:["I form the passive with be + past participle.","I add to + verb after allowed / expected / encouraged / asked / supposed.","I can make negatives and questions with be.","I know I suppose is active and means I think."]}
]);

/* ---------- Use of English p.93–94 · Reported questions and statements (8 → 14 bước) ---------- */
after(MX["v5.0"],"Check! 2 · Tense chart",[
{i:"🕰️",n:"Time and place changes",t:"mcq",x:2,ctx:"Extra practice (not from the book). When we report, time words, place words and pronouns often change too.",items:[
 M("“I’ll meet you here tomorrow.” → She said she would meet me ___ the next day.",["there","here","where"],0,"here → there.","there"),
 M("“I’m busy today.” → He said he was busy ___.",["that day","today","this day"],0,"today → that day.","that day"),
 M("“I’m leaving now.” → She said she was leaving ___.",["then","now","soon"],0,"now → then.","then"),
 M("“I saw her yesterday.” → He said he had seen her ___.",["the day before","tomorrow","next day"],0,"yesterday → the day before.","the day before"),
 M("“I like your bag.” → She told me she liked ___ bag.",["my","your","her"],0,"Pronouns change with the speaker.","my")]}
]);
after(MX["v5.0"],"Focus 1 · Recover the original words",[
{i:"📣",n:"Commands and requests",t:"mcq",x:2,ctx:"tell / ask + person + (not) to + verb.",items:[
 M("“Please wait for me.” → She asked me ___ for her.",["to wait","wait","that I wait"],0,"asked + person + to.","to wait"),
 M("“Don’t be late.” → She told me ___ late.",["not to be","to not be","don’t be"],0,"not to + verb.","not to be"),
 M("“Close the door.” → He told Sam ___ the door.",["to close","closing","close"],0,"told + person + to.","to close"),
 M("“Could you help me?” → Adam asked me ___ him.",["to help","helping","if help"],0,"request → asked + to.","to help"),
 M("Which sentence is correct?",["She told me to wait.","She said me to wait.","She told to me wait."],0,"told + person.","She told me to wait.")]},
{i:"🧭",n:"Reported question order",t:"mcq",x:2,ctx:"Use if / whether for yes/no questions. Use subject + verb order (not verb + subject).",items:[
 M("“Are you coming?” → She asked ___.",["if I was coming","was I coming","if was I coming"],0,"if + subject + verb.","if I was coming"),
 M("“Where is the school gate?” → He asked ___.",["where the school gate was","where was the school gate","where is the school gate"],0,"Subject + verb.","where the school gate was"),
 M("“Have you finished?” → She asked ___.",["whether I had finished","had I finished","whether had I finished"],0,"Present perfect → past perfect.","whether I had finished"),
 M("“What are you doing?” → He asked me ___.",["what I was doing","what was I doing","what am I doing"],0,"Subject + verb, tense back.","what I was doing"),
 M("Which sentence is correct?",["She asked me if I was busy.","She asked me was I busy.","She asked me if was I busy."],0,"No question order.","if I was busy")]}
]);
after(MX["v5.0"],"Practice 2 · Reporting verbs",[
{i:"📰",n:"Reporting written sources",t:"mcq",x:2,ctx:"Get it right! With written sources we often use it + said / mentioned.",items:[
 M("On the website, it ___ that under 16s could get in for half price.",["mentioned","told","asked"],0,"it = the website.","mentioned"),
 M("In her message, she ___ that she was running a bit late.",["said","told","asked"],0,"said that…","said"),
 M("The advert didn’t ___ how much the tickets were.",["mention","tell","request"],0,"mention + wh-clause.","mention"),
 M("In “In the article, it said that …”, what does it refer to?",["the article","the writer","the reader"],0,"it = the text, not the writer.","the article")]},
{i:"🛠️",n:"Error repair",t:"mcq",x:3,ctx:"Choose the correct sentence. Use the tense changes from the chart.",items:[
 M("Which sentence is correct?",["She said me that she was tired.","She told me that she was tired.","She told that she was tired."],1,"told + person.","She told me that she was tired."),
 M("Which sentence is correct?",["He asked me where did I live.","He asked me where I lived.","He asked me where do I live."],1,"Statement order.","where I lived"),
 M("Which sentence is correct?",["She asked if could I help.","She asked if I could help.","She asked that I could help."],1,"if + subject + could.","if I could help"),
 M("Which sentence is correct?",["He told me don’t be late.","He told me not to be late.","He told me to not being late."],1,"told + person + not to.","not to be late")]}
]);
before(MX["v5.0"],"final",[
{i:"🧵",n:"Jason’s conversation · line by line",t:"book",lbl:"LINE",sv:"Save",x:4,min:8,h:"🧵 Report Jason’s conversation one line at a time (Workbook p. 94, Challenge 3). Use asked if / asked + wh- / said / told. Then put your sentences together in the final challenge.",items:[
 ["1️⃣","1","Jason: “Can I go over to my friend’s house after school?”","Jason asked his mother if …",["asked","if / whether","could"],"asked.*(if|whether)"],
 ["2️⃣","2","Mother: “Who do you want to visit?”","His mother asked him who …",["asked","who","wanted"],"asked.*who"],
 ["3️⃣","3","Jason: “I want to go over to Luke’s. We’re doing a school project together.”","Jason said (that) he wanted … and they were …",["said","wanted","were doing"],"said|told"],
 ["4️⃣","4","Mother: “OK, that’s fine, but please phone me when you get there.”","His mother said … but she asked him to …",["said","asked him to","got there"],"asked|told|said"],
 ["5️⃣","5","Jason: “Thanks, Mum! How long can I stay?”","Jason thanked her and asked how long …",["thanked","how long","could"],"asked.*how long"],
 ["6️⃣","6","Mother: “Don’t be any later than 7 p.m.”","His mother told him not to …",["told him","not to"],"told.*not to"]],
 sg:"💡 Mẫu tham khảo (AI soạn, không phải đáp án sách): Jason asked his mother if he could go over to his friend’s house after school. His mother asked him who he wanted to visit. Jason said he wanted to go over to Luke’s and that they were doing a school project together. His mother said it was fine but asked him to phone her when he got there. Jason thanked her and asked how long he could stay. His mother told him not to be any later than 7 p.m."},
{i:"🔎",n:"Grammar check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR REPORT before the final challenge.",list:["I moved the tense back (can → could, are → were).","I used if / whether for yes/no questions and kept subject + verb order.","I used told + person and asked + person.","I used (not) to + verb for commands and requests.","I changed pronouns and time words when needed."]}
]);
}


