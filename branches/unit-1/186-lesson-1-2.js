
/* ===== Lesson 1.2 · Learner’s Book redesign: Reading → Key words → Speaking → Group discussion, tích hợp Mission game ===== */
(function(){
const m=MX["0.1"];if(!m)return;
const MCQ=(q,o,a,h,r)=>({q,o,a,h,r});
/* 1) Khung Reading luôn hiện bên cạnh từng chặng (bấm từ để xem nghĩa) */
RDT["0.1"]={t:"Reading · Teenage psychology (extracts a–f)",
h:["<b>a</b> I think they should give us a bit more freedom and understanding. We need to feel independent and grown up, because we are in the process of becoming adults. And give us time, listen to us, talk to us, tell us what’s going on in your life!",
"<b>b</b> I often think they’re right and I’m wrong. They just see the world differently. And after all, I was like them once.",
"<b>c</b> You’re always trying to find the balance between keeping them safe and letting them go. In my experience, we are not good at ‘risk assessment’. For example, they want to go to a music festival and you don’t sleep because you’re terrified that they are going to get into all sorts of trouble. They go, they come back, and they’ve had a great time. They want to go on a cycle ride in the country with a couple of friends, and you’re very happy. They go, they come back, but one of them nearly had an accident when a car came too close.",
"<b>d</b> I don’t mind them telling me off when I do something wrong, but I wish they wouldn’t go on about it. Yes, I’ve made a mistake, I shouldn’t have done it, I’m sorry, now let’s move on.",
"<b>e</b> Most of the scientific evidence shows that today’s teenagers are more sensible than their parents were at that age. Brain scans of teenagers show that by the end of the second decade of life, teenagers have developed formidable powers of problem-solving, creativity, self-analysis, focus, ambition, communication and social flexibility. Twenty-year-olds are better than ten-year-olds at everything.",
"<b>f</b> There are a lot of negative stereotypes about us – that we’re lazy, we only think about ourselves, we just want to have a good time. But most of my friends work hard and want to do well.",
"<details class=\"text-sm\"><summary class=\"cursor-pointer font-bold text-blue-700\">📌 Key words: Psychology</summary><ul class=\"mt-1 list-disc pl-5 space-y-0.5\"><li><b>ambition</b>: ideas about what you want to do in the future</li><li><b>communication</b>: talking or writing to other people</li><li><b>creativity</b>: using your imagination to express yourself in art, writing, music, etc.</li><li><b>focus</b>: the ability to concentrate on something</li><li><b>problem-solving</b>: finding the answer to a difficult question or situation</li><li><b>self-analysis</b>: understanding yourself</li><li><b>social flexibility</b>: being able to get on with all sorts of people</li></ul></details>"].map(x=>"<p>"+x+"</p>").join(""),
n:"💡 Dùng khung này để tìm bằng chứng (evidence) ở mọi chặng: ai dùng “we/us”, ai nói “I was like them once”, ai dẫn khoa học."};
/* 2) Các chặng theo đúng thứ tự trong sách */
const cases=m.steps.find(s=>s.t==="cases");cases.i="📖";cases.n="Ex 1 · Who wrote it?";
m.steps=[
{i:"🔮",n:"Warm-up · Teen, parent or expert?",t:"think",x:5,h:"🔮 WARM-UP · Before you read: who might say each sentence? Make a guess.",bt:"Lock my guesses",items:[["I want more freedom.",[0,1],"TEENAGER"],["I worry when my children go out without me.",[0,1],"PARENT"],["Teenagers are developing strong problem-solving skills.",[0,1,2],"PSYCHOLOGIST"]]},
cases,
{i:"🔦",n:"Ex 2 · Context clue: formidable",t:"mcq",x:1,ctx:"Work in pairs. In extract e: “…teenagers have developed formidable powers of problem-solving…”. Follow 3 steps to work out what ‘formidable’ means.",items:[
MCQ("Step 1 · What sort of word is ‘formidable’?",["a noun","an adjective","a verb"],1,"It comes before the noun ‘powers’.","It is an adjective."),
MCQ("Step 2 · Which word does ‘formidable’ describe?",["powers","teenagers","brain scans"],0,"Look at the word right after it.","formidable describes ‘powers’."),
MCQ("Step 3 · Is the writer saying these powers are good or bad, strong or weak?",["bad and weak","good but weak","good and strong"],2,"The psychologist is praising today’s teenagers.","formidable = great, very impressive, demanding respect.")]},
{i:"🧪",n:"Ex 2 · Word detective",t:"mcq",x:3,ctx:"Now use the same strategy: part of speech → what it describes → good/bad, strong/weak. Use the extracts on the left. Can’t work it out? Check a dictionary.",items:[
MCQ("a · extract a: “We need to feel independent and grown up, because we are in the process of becoming adults.” What does ‘grown up’ mean?",["behaving like an adult","very tall","very old"],0,"Look at ‘becoming adults’.","grown up = adult, mature."),
MCQ("b · extract c: “we are not good at ‘risk assessment’” – the parent imagines trouble at a festival, but the danger was on the cycle ride. What is ‘risk assessment’?",["buying a ticket","deciding how dangerous something might be","planning a holiday"],1,"Think: what could go wrong?","risk assessment = thinking about how dangerous something could be."),
MCQ("c · extract c: “you don’t sleep because you’re terrified…”. How does the parent feel?",["a little bored","very proud","extremely frightened"],2,"The parent can’t sleep.","terrified = extremely frightened."),
MCQ("d · extract e: “Most of the scientific evidence shows…”. What is ‘evidence’?",["facts that show something is true","a personal opinion","a kind of test"],0,"Scientists use it to support an idea.","evidence = facts or signs that show something is true."),
MCQ("e · extract e: “today’s teenagers are more sensible than their parents”. What does ‘sensible’ mean?",["funny and noisy","reasonable, showing good judgement","tall and strong"],1,"The psychologist is being positive.","sensible = reasonable, showing good judgement."),
MCQ("f · extract e: “Brain scans of teenagers show…”. What is a ‘brain scan’?",["a school test","a book about the brain","a picture of the inside of the brain"],2,"Think about a hospital machine.","brain scan = a medical image of the brain."),
MCQ("g · extract e: “by the end of the second decade of life”. Twenty-year-olds are at the end of it. How long is a ‘decade’?",["one year","ten years","one hundred years"],1,"The second decade ends at age 20.","decade = a period of ten years."),
MCQ("h · extract f: “There are a lot of negative stereotypes about us – that we’re lazy…”. What is a ‘stereotype’?",["a fixed, often unfair idea about a group of people","a true fact about one person","a type of music"],0,"Are all teenagers lazy?","stereotype = a fixed idea about a group of people.")]},
{i:"📌",n:"Key words · Psychology",t:"mcq",x:1,ctx:"Match each definition with the correct key word. All seven words are in extract e.",items:[
MCQ("ideas about what you want to do in the future",["communication","ambition","focus"],1,"Think about your future goals.","ambition ✓"),
MCQ("talking or writing to other people",["communication","creativity","self-analysis"],0,"It is about other people.","communication ✓"),
MCQ("using your imagination to express yourself in art, writing, music, etc.",["problem-solving","ambition","creativity"],2,"Imagination + art.","creativity ✓"),
MCQ("the ability to concentrate on something",["focus","social flexibility","ambition"],0,"Concentrating.","focus ✓"),
MCQ("finding the answer to a difficult question or situation",["self-analysis","communication","problem-solving"],2,"Puzzles and difficult situations.","problem-solving ✓"),
MCQ("understanding yourself",["creativity","self-analysis","focus"],1,"Analysing yourself.","self-analysis ✓"),
MCQ("being able to get on with all sorts of people",["ambition","problem-solving","social flexibility"],2,"Getting on with everybody.","social flexibility ✓")]},
{i:"🗣️",n:"Ex 3 · Speaking · Ask and answer",t:"book",lbl:"QUESTION",sv:"Save answer",x:2,min:15,need:5,h:"🗣️ EX 3 · SPEAKING — Ask and answer with a partner, giving examples. Solo? Choose an option, write your answer and say it aloud. Answer 5 of the 7 questions.",items:[
["🧩","Problem-solving","a · Are you good at problem-solving?","Yes, I’m quite good. I like doing word puzzles and number puzzles.",["Yes, I’m quite good.","I’m OK.","Not really."],"like|because|for example|when|I (can|try|am)"],
["🎨","Creativity","b · Are you creative?","I’m creative because I like …",["Yes, definitely.","A little.","Not really."],"like|because|for example|when|I (can|try|am)"],
["🔍","Self-analysis","c · Are you able to analyse yourself? Can you always give reasons for the things you do and the way you feel?","Usually I can explain … but sometimes …",["Yes, usually.","Sometimes.","Not always."],"like|because|for example|when|but|I (can|try|am)"],
["🎯","Focus","d · Are you good at focussing on something, concentrating on it for a period of time?","I can concentrate on … for … minutes.",["Yes, I’m good.","It depends.","Not really."],"like|because|for example|when|minutes|I (can|try|am)"],
["🚀","Ambition","e · Are you ambitious?","In the future, I want to …",["Yes, very.","Quite.","Not really."],"want|hope|because|for example|would like"],
["💬","Communication","f · Are you a good communicator?","I’m (not) a good communicator because …",["Yes, I think so.","I’m OK.","Not really."],"like|because|for example|when|I (can|try|am)"],
["🌎","Social flexibility","g · Are you able to get on with all sorts of people?","I get on with … because …",["Yes, with everyone.","With most people.","Not always."],"like|because|for example|when|I (can|try|am|get)"]]},
{i:"👥",n:"Ex 4 · Group discussion: the psychologist’s book",t:"book",lbl:"CHAPTER",sv:"Save chapter",x:2,min:12,h:"👥 EX 4 · IF YOU WERE ADVISING THE PSYCHOLOGIST, WHAT WOULD YOU TELL HIM TO INCLUDE?",items:[
["👨‍👩‍👧","Friends & family","Your relationships with friends and family. Model (Student A): “People don’t understand that being a teenager can be difficult. You want to feel independent and grown up, but in your parents’ eyes you are still a child.”","Teenagers need …",[]],
["🏫","Daily routine","Daily routine (school, free time, sleep…). Choose, then say what is difficult.",
"The difficult thing is …",["school","homework","free time","sleep","friends","social media"]],
["❤️","Feelings","The way you feel. What do teenagers sometimes feel? Why?","Teenagers sometimes feel … because …",["😄 happy","😤 frustrated","😰 worried","😎 confident","😔 misunderstood","🤔 confused"]],
["⏳","13 vs 19","Student B: “There’s a big difference between being 13 and being 19.” Student C: “What do you mean?” Explain with Student D’s idea: “When you’re 13, 14, 15, you’re changing really quickly. By the time you’re 19, you’re an adult.”","Between 13 and 19, teenagers change from … to …",["body","feelings","friends","responsibility","independence"]]]},
{i:"🏆",n:"Final boss",t:"final",px:4,h:"🏆 FINAL BOSS – Advise the psychologist: what should his book about teenagers include?",hint:"Nói thành tiếng 60 giây (hoặc nói cùng nhóm), rồi viết lại ở đây. Gợi ý: I think the book should include … For example, … Adults should understand that … There’s a big difference between …",ph:"I think the book should include …",checks:[["1 opinion (I think…)","i think|in my opinion|i believe",1],["1 example (for example…)","for example|for instance",1],["2 psychology words","evidence|stereotype|decade|brain scan|risk assessment|sensible|grown up|terrified|formidable|problem-solving|creativity|self-analysis|focus|ambition|communication|social flexibility",2],["1 piece of advice (should…)","should|need to|must",1]],sk:["I gave my opinion.","I gave an example.","I used psychology vocabulary.","I corrected myself when necessary."]}];
m.q="How do teenagers think and act differently from adults?";
m.end={t:"🎉 MISSION COMPLETE – TEENAGE PSYCHOLOGY: CASE CLOSED.",did:"You investigated: ✓ Who wrote each extract ✓ Context clues ✓ 15 psychology words ✓ Your own teenage skills ✓ Advice for the psychologist’s book",r:"One thing I want adults to understand about teenagers is …"};
m.mx=m.steps.reduce((a,s)=>a+(s.t==="think"?s.x:s.t==="cases"?s.items.length*5:s.t==="final"?s.px+5:s.items.length*s.x),0);
MXG["Teenage Psychology Lab"]=[["🔮","1 · Big question",[0]],["📖","2 · Reading comprehension",[1,2,3,4]],["🗣️","5 · Speaking",[5,6]]];
/* 3) Mục tiêu + từ vựng của panel Learner’s Book */
const lb=LBC["0.1"];if(lb){lb.obj=["Đọc ý kiến về việc làm thiếu niên (read views on what it is like to be a teenager)","Thảo luận: bạn mong đợi điều gì trong một cuốn sách về tâm lý tuổi teen?","Trả lời: How do teenagers think and act differently from adults?"];
if(!lb.vocab.some(v=>v[0]==="communication"))lb.vocab.push(["communication","giao tiếp (nói/viết với người khác)","n"]);}
if(/^#\/lesson\/0\/1/.test(location.hash))window.dispatchEvent(new HashChangeEvent("hashchange"));
})();
