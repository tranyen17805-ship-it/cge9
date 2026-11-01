/* ===== UNIT 6 UPGRADE · Lesson 6.7 Improve your writing (nguồn: Student’s Book pp.134–135, Workbook p.102) ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const calc=m=>{m.mx=m.steps.reduce((a,s)=>a+(s.t==="final"?(s.px||0):s.items.length*(s.x||0)),0)};
const after=(m,name,steps)=>{const i=m.steps.findIndex(s=>s.n===name);m.steps.splice(i<0?m.steps.length-1:i+1,0,...steps);calc(m)};
const before=(m,type,steps)=>{let i=-1;m.steps.forEach((s,k)=>{if(s.t===type)i=k});m.steps.splice(i<0?m.steps.length:i,0,...steps);calc(m)};

/* sửa tên trường: Miraflores */
MX["5.6"].steps.forEach(s=>{["ctx","h","n"].forEach(f=>{if(typeof s[f]==="string")s[f]=s[f].replace("Mira Flores","Miraflores")})});

/* ---------- 6.7 · cụm từ (8 → 20, có ví dụ) ---------- */
LBC["5.6"].vocab=[
["I would be very grateful if you could …","Tôi rất biết ơn nếu bạn có thể … (lịch sự)","phr","I would be very grateful if you could tell me about your school."],
["I’d appreciate any information …","Tôi rất trân trọng mọi thông tin …","phr","I’d appreciate any information you can send me."],
["Thank you for your email.","Cảm ơn email của bạn.","phr","Thank you for your email. I think your project sounds very interesting."],
["I would be delighted to …","Tôi rất vui được …","phr","I would be delighted to answer your questions about my school."],
["When it comes to …","Khi nói đến …","phr","When it comes to the classroom, we’re expected to be polite."],
["Overall, I think …","Nhìn chung, tôi nghĩ …","phr","Overall, I think that our rules are quite reasonable."],
["I hope my answers are helpful.","Hy vọng câu trả lời của tôi hữu ích.","phr","I hope my answers are helpful. Best wishes, Anisha"],
["Best wishes,","Trân trọng / Chúc bạn mọi điều tốt đẹp,","phr","Best wishes, Isabel"],
["I’m writing to you because …","Tôi viết thư cho bạn vì …","phr","I’m writing to you because we’re doing a project about schools around the world."],
["I look forward to hearing from you","Mong sớm nhận được hồi âm của bạn","phr","I look forward to hearing from you, and I’d appreciate any information you can send me."],
["To start with, …","Trước hết, …","phr","To start with, what time are you expected to arrive at school?"],
["Finally, …","Cuối cùng, …","phr","Finally, do you have any anti-bullying rules?"],
["In terms of …","Về mặt …, xét về …","phr","In terms of anti-bullying policies, we are encouraged to report bullying."],
["as long as …","miễn là …","conj","We can talk freely, as long as we don’t shout."],
["tone","giọng điệu (của bài viết)","n","The tone of Isabel’s email is quite formal but friendly."],
["compulsory","bắt buộc","adj","Is a school uniform compulsory at your school?"],
["paragraph","đoạn văn","n","The email has several short paragraphs, one for each topic."],
["anti-bullying policy","chính sách chống bắt nạt","n","Our school has an anti-bullying policy."],
["tutor group","lớp chủ nhiệm (nhóm do giáo viên phụ trách)","n","If you are late, you go straight to your tutor group."],
["school secretary","thư ký nhà trường","n","If you are late, you have to report to the school secretary."]
];

/* ---------- 6.7 Learner’s Book mission (11 → 18 bước) ---------- */
after(MX["5.6"],"Tone tracker · Explain",[
{i:"🎩",n:"Quite formal or too informal?",t:"bucket",x:2,h:"🎩 SORT THE SENTENCES. Which are suitable for a polite but friendly email to someone you don’t know well, and which are too informal?",hint:"Look at the vocabulary, punctuation and full forms.",lab:["🎩 QUITE FORMAL & FRIENDLY","😀 TOO INFORMAL"],items:[["I would be very grateful if you could tell me about your school.",0],["Hey! Tell me about your school!!",1],["I’d appreciate any information you can send me.",0],["Thx for ur email lol.",1],["I look forward to hearing from you.",0],["Write back soon!!!",1]],sg:"💡 Isabel and Anisha use full sentences, polite phrases and no slang."},
{i:"🙏",n:"Make it polite",t:"mcq",x:3,ctx:"Extra practice (not from the book). Choose the politer sentence.",items:[
 M("Which sentence is politer?",["Tell me about your school.","I would be very grateful if you could tell me about your school.","You must tell me about your school."],1,"Polite request.","I would be very grateful if you could…"),
 M("Which opening is politer?",["Thank you for your email. I would be delighted to answer your questions.","Got your email. Here are the answers.","Answers below."],0,"Thank + offer.","Thank you for your email…"),
 M("Which closing is politer?",["I hope my answers are helpful. Best wishes, Anisha","That’s it. Bye.","Done."],0,"Polite closing.","I hope my answers are helpful."),
 M("Which sentence is politer?",["Send me any information.","I’d appreciate any information you can send me.","I want information now."],1,"I’d appreciate…","I’d appreciate any information")]}
]);
after(MX["5.6"],"04 · Plan your reply",[
{i:"🗂️",n:"Paragraph map",t:"mcq",x:2,ctx:"Isabel’s email has one short paragraph per topic. What is each paragraph about?",items:[
 M("“To start with, what time are you expected to arrive at school in the morning? What happens if you’re late?”",["Arrival time and lateness","Uniform","Phones"],0,"First paragraph of questions.","arrival and lateness"),
 M("“Is a school uniform compulsory at your school? … Are there any rules about hairstyles or jewellery?”",["Uniform and appearance","Break time","Homework"],0,"Uniform, hairstyles, jewellery.","uniform"),
 M("“What rules do you have about behaviour in the classroom? Are you allowed to take phones to school?”",["Classroom behaviour and phones","Outside the classroom","Anti-bullying"],0,"Classroom + phones.","classroom behaviour"),
 M("“What about rules outside the classroom? … moving around the school between lessons or at break time?”",["Rules outside the classroom","Uniform","Arrival time"],0,"Outside the classroom.","outside the classroom"),
 M("“Finally, do you have any anti-bullying rules or guidelines? … What are your views, overall?”",["Anti-bullying rules and your overall views","Arrival time","Phones"],0,"Last paragraph.","anti-bullying + views")]},
{i:"🔢",n:"Answer in order",t:"mcq",x:3,ctx:"Anisha answers the questions in the same order as Isabel asked them.",items:[
 M("After thanking Isabel, what should your first topic be?",["Arrival time and being late","Your overall opinion","Anti-bullying rules"],0,"Follow Isabel’s order.","arrival time first"),
 M("Where should your overall opinion go?",["At the end","In the first paragraph","In the middle of the uniform paragraph"],0,"Give your opinion at the end.","at the end"),
 M("How should you organise your email?",["One short paragraph for each topic","One very long paragraph","A list of single words"],0,"Easy to read.","one short paragraph per topic")]}
]);
after(MX["5.6"],"Polite expression sorter",[
{i:"📜",n:"Rules language in the email",t:"mcq",x:2,ctx:"Anisha uses a range of structures to talk about rules. Choose the correct one.",items:[
 M("We ___ to arrive at school by 8.30 a.m.",["are expected","expect","expecting"],0,"be + V3 + to.","are expected to"),
 M("We’re not ___ to interrupt when someone is speaking.",["meant","meaning","mean"],0,"be meant to ≈ be supposed to.","meant"),
 M("If we want to ask a question, we ___ put up our hand.",["have to","are to put","must to"],0,"have to + V.","have to"),
 M("We’re ___ to report bullying to a staff member.",["encouraged","encouraging","encourage"],0,"be + V3 + to.","encouraged"),
 M("We can move around and talk quite freely, ___ we don’t shout.",["as long as","so that","although"],0,"condition: only if…","as long as")]},
{i:"⏮️",n:"A third conditional in the email",t:"mcq",x:3,ctx:"Anisha writes: “It’s never happened, but if I had seen someone being bullied, I would have talked to my tutor group teacher about it.”",items:[
 M("What does this sentence tell us?",["She has not seen bullying, but she imagines what she would have done.","She saw bullying and talked to a teacher.","She does not want to talk to a teacher."],0,"Third conditional = imagined past.","imagined situation"),
 M("Complete: If I ___ someone being bullied, I would have told a teacher.",["had seen","would see","saw to"],0,"if + past perfect.","had seen"),
 M("Complete: I ___ talked to my tutor group teacher about it.",["would have","had","would"],0,"would have + V3.","would have")]}
]);
before(MX["5.6"],"final",[
{i:"🔎",n:"Email check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR EMAIL before you write the final version.",list:["I started politely (Dear …, Thank you for your email).","I answered every question in Isabel’s order.","I used one short paragraph for each topic.","I used rules language (are expected to, have to, are encouraged to …).","I gave my opinion at the end and closed politely (Best wishes)."]}
]);

/* ---------- 6.7 Workbook p.102 mission (4 → 13 bước) ---------- */
after(MX["w5.6"],"Ex 1 · Match the questions with the topics",[
{i:"📬",n:"Jackie’s email · facts",t:"mcq",x:2,ctx:"Read Jackie’s email again (Workbook p. 102).",items:[
 M("Who is writing to whom?",["Jackie is writing to Leila","Leila is writing to Jackie","The teacher is writing to Leila"],0,"Dear Leila … Jackie.","Jackie → Leila"),
 M("Why is Jackie writing?",["She is doing a project about classroom rules in schools around the world","She wants to buy a phone","She wants Leila to visit"],0,"I’m writing to you because …","for a project"),
 M("What does “some or all of the following questions” mean?",["Leila can answer a few or every question","Leila must answer only one","Leila must answer all five"],0,"some or all","some or all"),
 M("Which sentence is a polite request?",["I would be very grateful if you could tell me about your school.","Tell me about your school.","You must write back."],0,"Polite language.","I would be very grateful if you could …")]},
{i:"✉️",n:"Build Jackie’s email",t:"order",x:10,items:[0],h:"✉️ Put the parts of Jackie’s email in order.",hint:"Greeting → reason for writing → polite request → questions → closing sentence → sign-off.",cards:["A. Best wishes, Jackie","B. Dear Leila,","C. The five questions (Technology, Break time, Group work, Asking questions, Giving feedback)","D. I look forward to hearing from you and I’d appreciate any information you can send me.","E. I’m writing to you because we’re doing a project about classroom rules in schools around the world.","F. I would be very grateful if you could tell me about your school by answering some or all of the following questions."],ans:[1,4,5,2,3,0],yl:"✉️ YOUR EMAIL",ft:"✉️ EMAIL READY",flow:["GREETING","REASON","POLITE REQUEST","QUESTIONS","CLOSING SENTENCE","SIGN-OFF"],bm:"Not quite. Start with the greeting, then explain why you are writing, make a polite request, list the questions, add a closing sentence and sign off."}
]);
after(MX["w5.6"],"Plan your ideas",[
{i:"📏",n:"Rules language",t:"bucket",x:2,h:"📏 SORT THE SENTENCES. Is it compulsory, forbidden, permitted or expected / encouraged?",hint:"have to = compulsory · not allowed / can’t = forbidden · allowed = permitted · expected / encouraged = what the school wants.",lab:["✅ HAVE TO","⛔ NOT ALLOWED","🟢 ALLOWED","⭐ EXPECTED / ENCOURAGED"],items:[["We have to be quiet during tests.",0],["We aren’t allowed to eat in class.",1],["We are allowed to use the internet in the library.",2],["We are encouraged to work in groups.",3],["We’re expected to give a presentation each term.",3],["We can’t use our phones in lessons.",1]]},
{i:"💬",n:"Answer the question",t:"mcq",x:3,ctx:"Extra practice (not from the book). Choose the answer that really answers Jackie’s question.",items:[
 M("“Are you allowed to use phones in class?”",["We aren’t allowed to use phones in lessons, but we can use them at break time.","I like pizza very much.","Phones are made in many countries."],0,"Answer the question.","We aren’t allowed… but…"),
 M("“Are you encouraged to work in groups or individually?”",["We’re encouraged to work in groups, but we also work on our own sometimes.","I have a big family.","Groups are fun."],0,"Both options.","encouraged… groups… on our own"),
 M("“What do you do if you don’t understand something?”",["We put up our hand and ask the teacher or another student.","We never have lessons.","I’m always late."],0,"Say what you do.","put up our hand"),
 M("“Do other students comment on your presentation?”",["Yes, they give us feedback and ask questions at the end.","No, I have a new bike.","Presentations are long."],0,"Relevant details.","give feedback")]}
]);
after(MX["w5.6"],"Useful language",[
{i:"🎩",n:"Opening and closing",t:"mcq",x:2,ctx:"Choose the best sentence for a polite but friendly email.",items:[
 M("Which opening is best?",["Dear Jackie, Thank you for your email.","Hi!!","Jackie."],0,"Greeting + thanks.","Dear Jackie, Thank you…"),
 M("Which sentence offers help politely?",["I would be delighted to answer your questions.","Ask me.","I answer."],0,"Polite offer.","I would be delighted to…"),
 M("Which closing sentence is best?",["I hope my answers are helpful.","See you, bye.","That’s all lol."],0,"Polite closing.","I hope my answers are helpful."),
 M("Which sign-off is best?",["Best wishes,","Bye,","Whatever,"],0,"Friendly and polite.","Best wishes,")]},
{i:"🔗",n:"Linking words",t:"mcq",x:2,ctx:"Use linking words to make your answers longer and clearer.",items:[
 M("We aren’t allowed to use phones in lessons, ___ we can use them at break time.",["but","because","so that"],0,"contrast.","but"),
 M("We can use the internet ___ a teacher gives permission.",["as long as","although","because of"],0,"condition.","as long as"),
 M("I think the rule is fair ___ it keeps lessons quiet.",["because","however","but"],0,"reason.","because"),
 M("___, I think the rules in my school are reasonable.",["Overall","However","Because"],0,"Conclusion.","Overall"),
 M("We often work in groups. ___, we do projects together.",["For example","Although","As long as"],0,"example.","For example")]},
{i:"🛠️",n:"Fix the sentence",t:"mcq",x:3,ctx:"Choose the correct sentence.",items:[
 M("Which sentence is correct?",["We are allowed to use phones at break time.","We are allow to use phones at break time.","We allowed to use phones at break time."],0,"be + V3 + to.","are allowed to"),
 M("Which sentence is correct?",["We aren’t allowed to eat in class.","We aren’t allowed eat in class.","We don’t allowed to eat in class."],0,"to + verb.","aren’t allowed to eat"),
 M("Which sentence is correct?",["We are encouraged to work in groups.","We are encourage to work in groups.","We encouraged to work in groups."],0,"be + V3.","are encouraged"),
 M("Which sentence is correct?",["We have to be quiet during the lesson.","We has to be quiet during the lesson.","We have to being quiet during the lesson."],0,"have to + V.","have to be")]},
{i:"📝",n:"Draft one paragraph",t:"book",lbl:"PARA",sv:"Save",x:5,min:10,h:"📝 Choose ONE of Jackie’s topics and write a short paragraph (3 sentences): the rule, an exception or detail, and your opinion.",items:[
 ["1️⃣","1","The rule at your school","At my school, we are allowed to / aren’t allowed to … / We have to …",["are allowed to","aren’t allowed to","have to","are encouraged to"],"allowed|have to|encouraged|expected"],
 ["2️⃣","2","An exception or detail","However, … / but … / as long as …",["but","however","as long as","for example"],"but|however|as long as|for example"],
 ["3️⃣","3","Your opinion","I think this rule is … because …",["fair","reasonable","strict","because"],"think|because"]]}
]);
before(MX["w5.6"],"final",[
{i:"🔎",n:"Email check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR EMAIL before the final challenge.",list:["I started with Dear Jackie, and thanked her.","I answered the topics in Jackie’s order.","I used rules language (are allowed to, have to, are encouraged to).","I used linking words (but, as long as, because).","I closed politely (I hope my answers are helpful. Best wishes,)."]}
]);
}


