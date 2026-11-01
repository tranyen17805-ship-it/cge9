/* ===== UNIT 7 · LESSON 7.1 · Team sports or individual sports? (key 6.0) · Learner’s Book pp. 144–145 · Audio 38 ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const BEN="confiden|strength|strong|patien|relax|self-esteem|stress|concentrat|respect|communicat|relationship|work(?:ing)? better|get on better";
const PART="done|gone|seen|taken|given|swum|run|won|begun|made|heard|thought|known|written|chosen|felt|lost|met|read|said|sat|stood|left|kept|brought|bought|caught|taught|become|come|eaten|fallen|forgotten|got|gotten|grown|held|hit|hurt|let|put|set|shown|spoken|thrown|worn|torn|broken|driven|flown|drawn|hidden|ridden|risen|sung|sworn|woken";
const AUX="(?:\\bhad|\\bhadn[’']t|\\w[’']d)";
const ADV="(?:(?:never|already|just|only|not|ever|always|also)\\s+)*";
const PPS=AUX+"\\s+"+ADV+"(?:\\w+ed|"+PART+")\\b";
const PPC=AUX+"\\s+"+ADV+"been\\s+\\w+ing\\b";
const CHIPS_BEN=["confidence","strength","patience","relaxation","self-esteem","stress"];



LBC["6.0"]={
obj:[
"Tóm tắt điều mọi người nói về thể thao và các hoạt động (Audio 38)",
"Giải thích tác động và lợi ích của thể thao cá nhân và thể thao đồng đội",
"Dùng từ vựng về confidence, strength, patience, relaxation, self-esteem và stress",
"Dùng past perfect simple để nói về hành động xảy ra trước một mốc trong quá khứ",
"Dùng past perfect continuous để nói về hoạt động đang diễn ra trước một mốc trong quá khứ",
"Thảo luận lợi ích của thể thao với trẻ em và thanh thiếu niên, nêu ý kiến cá nhân"],
vocab:[
["confidence","sự tự tin","n","Sport can build your confidence."],
["confident","tự tin","adj","I feel more confident when I play with my team."],
["strength","sức mạnh, thể lực","n","Swimming builds strength in your arms and legs."],
["strong","khỏe, mạnh mẽ","adj","Regular training makes you stronger."],
["patience","sự kiên nhẫn","n","Learning a new skill takes patience."],
["patient","kiên nhẫn","adj","You have to be patient when you practise."],
["relaxation","sự thư giãn","n","For me, swimming is a form of relaxation."],
["relaxed","thư giãn, thoải mái","adj","I always feel relaxed after a long run."],
["self-esteem","lòng tự trọng; sự tự đánh giá tích cực","n","Reaching a goal can improve your self-esteem."],
["stress","căng thẳng","n","Exercise can help to reduce stress."],
["concentrate","tập trung","v","Sport teaches you to concentrate."],
["respect others","tôn trọng người khác","v","Team games teach us to respect others."],
["work better with others","hợp tác với người khác tốt hơn","v","Team sports help you work better with others."],
["get on better with other people","hòa thuận với người khác hơn","v","I get on better with other people since I joined the team."],
["build stronger relationships","xây dựng các mối quan hệ bền chặt hơn","v","Playing together helps us build stronger relationships."],
["improve your communication skills","cải thiện kỹ năng giao tiếp","v","Team games can improve your communication skills."],
["team sport","môn thể thao đồng đội","n","Rugby is a team sport."],
["individual sport","môn thể thao cá nhân","n","Swimming is usually an individual sport."],
["be into","rất thích, quan tâm đến","v","I’m really into swimming."],
["join in","tham gia một hoạt động chung","v","Everyone can join in the game."],
["take (something) up","bắt đầu một hoạt động hoặc môn thể thao","v","I took up taekwondo when I was young."],
["give (something) up","từ bỏ, ngừng làm điều gì","v","He gave up taekwondo when he was nine."]],
gram:[
{t:"Past perfect simple",r:"Cấu trúc: had + past participle (V3). Dùng để nói về một hành động hoặc trải nghiệm xảy ra TRƯỚC một thời điểm hoặc sự kiện khác trong quá khứ. Phủ định: hadn’t + V3 hoặc had never + V3. Ví dụ đầu lấy từ sách; các ví dụ còn lại do web bổ sung.",ex:["I’d done taekwondo since I was quite young, but gave it up when I was 9.","They had never played rugby before the training session."]},
{t:"Past perfect continuous",r:"Cấu trúc: had been + V-ing. Dùng để nhấn mạnh một hoạt động hoặc tình trạng ĐANG DIỄN RA (hoặc kéo dài một khoảng thời gian) trước một mốc trong quá khứ. Ví dụ đầu lấy từ sách; ví dụ còn lại do web bổ sung.",ex:["I’d just moved to a new school and I’d been having a difficult time.","She had been swimming for an hour when the lesson ended."]},
{t:"Chọn thì nào?",r:"Xác định sự kiện quá khứ ‘sau’ làm mốc, rồi hỏi: bạn muốn nói đến một hành động/trải nghiệm xảy ra trước (past perfect simple) hay nhấn mạnh hoạt động đang diễn ra hoặc thời gian kéo dài (past perfect continuous)? Cách chọn phụ thuộc vào ý muốn nhấn mạnh và loại động từ, không phải ‘hành động ngắn’ hay ‘dài’.",ex:["Before the match, we had practised together. (trải nghiệm trước mốc)","We had been practising for weeks when the match started. (hoạt động kéo dài trước mốc)"]}],
tips:[
"Audio 38 (Exercises 1, 2 và 4): web không có transcript. Câu trả lời nghe phải đối chiếu với audio gốc của sách — web không tự tạo lời thoại và không tuyên bố đáp án nghe chính thức.",
"They say that … dùng để nói điều mọi người thường nói hoặc tin. Ví dụ trong sách: They say that taekwondo can help you not only to become physically stronger but also to improve your mental strength.",
"Gợi ý hoàn thành Exercise 4 (a–e) chỉ dựa trên cấu trúc và ngữ cảnh, không phải đáp án chính thức của nhà xuất bản.",
"Phần web bổ sung (không phải nguyên văn Learner’s Book): ví dụ trong từ vựng, họ từ, ghép lợi ích–tình huống, grammar sorting/repair, khung nói và bài mẫu, Sports Impact Report."]
};

RDT["6.0"]={t:"Mission board · Lesson 7.1",h:"<p>Learner’s Book pp. 144–145 · <b>Audio 38</b> (Emir, Maya, Linh). Web không có transcript: dùng audio gốc của sách để kiểm tra câu trả lời nghe.</p><p class=\"font-bold pt-1\">Benefits</p><p>confidence · strength · patience · relaxation · self-esteem · stress</p><p class=\"font-bold pt-1\">Grammar</p><p>Past perfect simple: <b>had + V3</b><br>Past perfect continuous: <b>had been + V-ing</b></p><p class=\"font-bold pt-1\">Multi-word verbs</p><p>be into · join in · take up · give up</p>",n:"Bảng này chỉ nhắc nhanh; nội dung gốc nằm trong sách."};

/* ---- bước nghe: ô phát audio gốc (dán link hoặc chọn file) ---- */
const AUK="cge9au_38";
const auGet=()=>{try{return localStorage.getItem(AUK)||""}catch(e){return ""}};
GR.aud=(st,S,D)=>{const u=auGet(),ok=S.ok[S.s];return mBox(st.h,`<div class="mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-sm space-y-2">
<p><b>Cách nghe gợi ý:</b> Lần 1 – nghe ý chính, chưa cần viết. Sau đó dừng audio và hoàn thành bảng ở chặng kế tiếp. Nếu cần, nghe lại từng phần.</p>
<p class="text-xs text-slate-500">Cần audio gốc của sách (Track 38). Web không tự tạo bản thu thay thế. Dán link trực tiếp tới file âm thanh (.mp3, .m4a…) hoặc chọn file trên máy. Link YouTube không phát được ở đây.</p>
<audio id="au38" controls preload="none" class="w-full mt-2" ${u?`src="${esc(u)}"`:""}></audio>
<div class="flex flex-wrap gap-2 items-center"><input data-au="url" type="url" value="${esc(u)}" placeholder="Dán link audio 38 (https://…)" class="flex-1 min-w-[12rem] px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/><button data-act="au_save" class="${mch(0)}">💾 Lưu link</button></div>
<div class="flex flex-wrap gap-2 items-center"><label class="text-xs text-slate-500">Hoặc chọn file (chỉ dùng trong phiên này):</label><input data-au="file" type="file" accept="audio/*" class="text-xs"/></div>
<p id="au38msg" class="text-xs text-green-600"></p></div>
<button data-act="au_done" ${ok?"disabled":""} class="mt-3 ${mbtn}">${ok?"✅ Đã nghe xong":"✅ Tôi đã nghe xong lần 1"}</button>
${ok?`<p class="mt-2 text-sm text-green-600">⭐ +${st.x} XP · Bây giờ hoàn thành bảng ghi chú.</p>`:""}`)};
document.addEventListener("click",e=>{const b=e.target.closest('[data-act^="au_"]');if(!b||b.disabled)return;const gc=b.closest("[data-gk]");if(gc)GK=gc.dataset.gk;
 if(b.dataset.act==="au_save"){const inp=b.closest("[data-gk]")?b.closest("[data-gk]").querySelector('[data-au="url"]'):null,v=inp?inp.value.trim():"",msg=document.getElementById("au38msg"),a=document.getElementById("au38");
  if(v&&!/^https?:\/\//i.test(v)){if(msg){msg.className="text-xs text-red-600";msg.textContent="Link cần bắt đầu bằng http:// hoặc https://"}return}
  try{localStorage.setItem(AUK,v)}catch(_){}
  if(a){a.src=v;a.load()}if(msg){msg.className="text-xs text-green-600";msg.textContent=v?"Đã lưu link audio.":"Đã xoá link audio."}}
 else if(b.dataset.act==="au_done"){const S=gS(GK),s=S.s,st=MX[GK].steps[s];S.ok[s]=1;gAw(S,"au"+s,st.x||3);gRender(GK)}});
document.addEventListener("change",e=>{const t=e.target;if(t&&t.dataset&&t.dataset.au==="file"&&t.files&&t.files[0]){const a=document.getElementById("au38"),msg=document.getElementById("au38msg");if(a){a.src=URL.createObjectURL(t.files[0]);a.load()}if(msg){msg.className="text-xs text-green-600";msg.textContent="Đã nạp file: "+t.files[0].name}}});

MX["6.0"]={code:"07.1",title:"Sports Impact Investigator",
q:"How can sport change the way we feel, behave and connect with other people? · SNAP → LISTEN → EVIDENCE → BENEFITS → GRAMMAR → OPINION → REPORT",
end:{t:"🏅 MISSION COMPLETE – SPORTS IMPACT INVESTIGATOR",did:"You investigated how sport affects people: you listened to Emir, Maya and Linh, collected evidence, used vocabulary about confidence, strength, patience, relaxation, self-esteem and stress, compared the past perfect simple and continuous, shared an opinion about team and individual sports, and wrote a Sports Impact Report. 🏅 Badge: SPORTS IMPACT INVESTIGATOR",r:"One thing about sport that I want to investigate next is …"},
steps:[
/* ---------- STAGE 0 · QUICK START ---------- */
{i:"🏅",n:"00 · Sports Snap",t:"book",lbl:"SNAP",sv:"Save",x:3,min:8,h:"🏅 SPORTS SNAP (Getting started). Look at four sports: taekwondo, swimming, rugby and running. Which ones do you know? Which would you like to try? Choose a chip, then write one short sentence. There is no wrong answer.",items:[
["🏅","1","Which of these sports do you know?","I know … I have tried …",["Taekwondo","Swimming","Rugby","Running"],""],
["💬","2","Which one would you like to try? Why?","I would like to try … because …",["It helps me relax.","It makes me stronger.","I enjoy working with other people.","I like challenging myself."],"because"]]},
{i:"👥",n:"00 · Team or individual?",t:"bucket",x:2,h:"👥 SORT THE SPORTS. Is each sport usually a team sport or an individual sport? Some sports have different forms, so choose the most common way to play.",hint:"Think about the usual way people play: with a team, or on their own?",lab:["👥 TEAM","🧍 INDIVIDUAL"],items:[
["Rugby",0,"Rugby is played in teams."],
["Swimming",1,"Swimming is usually individual, although there are relay races for teams."],
["Taekwondo",1,"Taekwondo is usually practised and competed individually."],
["Volleyball",0,"Volleyball is a team sport."],
["Running",1,"Running is usually individual, although there are relay and team events."],
["Basketball",0,"Basketball is a team sport."]],
sg:"💡 Today you will investigate not only what sports people do, but also how sport affects their lives."},
/* ---------- STAGE 1 · LISTENING INVESTIGATION ---------- */
{i:"🎧",n:"01 · Audio 38 · First listen",t:"aud",x:3,items:[0],h:"🎧 AUDIO 38 · MEET THE THREE STUDENTS (Exercise 1). Listen to Emir, Maya and Linh. Focus on the main information, not every word: which sport or activity does each student enjoy, and is it a team sport or an individual activity?"},
{i:"📝",n:"01 · Listening notes",t:"book",lbl:"NOTE",sv:"Save",x:3,min:6,h:"📝 LISTENING NOTES (Exercise 1). Complete the table from the audio. Choose the type, then write the sport or activity. Your own notes are the answer – check them with the audio.",items:[
["🔵","Emir","What sport or activity does Emir enjoy? Team or individual?","Emir enjoys … It is a team sport / an individual activity.",["Team sport","Individual activity"],"team|individual"],
["🟣","Maya","What sport or activity does Maya enjoy? Team or individual?","Maya enjoys … It is a team sport / an individual activity.",["Team sport","Individual activity"],"team|individual"],
["🟠","Linh","What sport or activity does Linh enjoy? Team or individual?","Linh enjoys … It is a team sport / an individual activity.",["Team sport","Individual activity"],"team|individual"]]},
{i:"🧭",n:"01 · Listening strategy",t:"order",x:6,items:[0],h:"🧭 LISTENING STRATEGY · Listen for evidence. Before you answer questions 1–7, put the four strategy steps in the best order.",hint:"Who is speaking? What is the question about? What exactly did you hear? Then write.",cards:[
"C. Listen for evidence: a specific event, detail or explanation.",
"A. Identify the person: Emir, Maya or Linh?",
"D. Answer the question: write a short, focused answer.",
"B. Identify the topic: age, past experience, improvement, feelings or benefits?"],ans:[1,3,0,2],yl:"🎧 MY LISTENING ROUTE",ft:"🧠 LISTENING STRATEGY",flow:["1 · PERSON","2 · TOPIC","3 · EVIDENCE","4 · ANSWER"],bm:"Not quite. First decide who the question is about, then the topic, then listen for evidence, and only then write your answer. Undo or reset and try again."},
{i:"🔎",n:"01 · Checkpoint A · Emir",t:"book",lbl:"Q",sv:"Save",x:4,min:2,oc:1,h:"🔎 CHECKPOINT A · EMIR (Exercise 2, questions 1–3). Listen again. Answer with evidence from the audio, not a guess. Short answers are fine.",items:[
["🎂","1","How old is Emir?","Emir is … years old.",[],".{2,}"],
["⏳","2","What do we know about Emir when he was 9 and when he was 12?","When he was 9, … When he was 12, …",["When he was 9","When he was 12"],".{8,}"],
["🏫","3","How is Emir’s life different now from when he first started at his new school?","At first, … Now, …",["At first","Now"],".{8,}"]]},
{i:"🔎",n:"01 · Checkpoint B · Maya",t:"book",lbl:"Q",sv:"Save",x:4,min:8,oc:1,h:"🔎 CHECKPOINT B · MAYA (Exercise 2, questions 4–5). Listen for evidence. Question 5: think about the type of sport it is and its benefits.",items:[
["📈","4","How do you know that Maya has become a better swimmer?","I know Maya has improved because …",[],".{8,}"],
["💧","5","Why does Maya think swimming is a good sport to do? Think about the type of sport it is and its benefits.","Maya thinks swimming is a good sport because …",CHIPS_BEN,".{8,}"]]},
{i:"🔎",n:"01 · Checkpoint C · Linh",t:"book",lbl:"Q",sv:"Save",x:4,min:8,oc:1,h:"🔎 CHECKPOINT C · LINH (Exercise 2, questions 6–7). Use words from the vocabulary only if you really heard them.",items:[
["😄","6","How do we know that Linh and her friends really enjoyed the training session?","We know they enjoyed it because …",[],".{8,}"],
["🏉","7","What does Linh’s teacher say are the benefits of games like rugby?","Linh’s teacher says that games like rugby can help students …",["work better with others","respect others","concentrate","build stronger relationships"],".{8,}"]]},
{i:"⭐",n:"01 · Your reaction",t:"book",lbl:"OPEN",sv:"Save",x:4,min:15,h:"⭐ THINK AFTER LISTENING. There is no single correct answer. Use what you heard to explain your choice.",items:[
["⭐","1","Which student’s experience sounds most interesting to you? Why?","The most interesting experience is … because …",["Emir","Maya","Linh"],"because"]]},
/* ---------- STAGE 2 · BENEFITS LAB ---------- */
{i:"🧪",n:"02 · Word builder",t:"mcq",x:2,ctx:"Word families: confidence → confident · strength → strong → stronger · patience → patient · relaxation → relaxed. (Extra practice made for the web.) Choose the correct form.",items:[
M("Playing in a team made me feel more ___.",["confidence","confident","confidently"],1,"Cần tính từ sau feel.","feel confident"),
M("I want to become ___ so I can lift heavier weights.",["strongly","strength","stronger"],2,"Become + tính từ so sánh.","become stronger"),
M("You have to learn to be ___ when you practise a difficult skill.",["patient","patience","patiently"],0,"Be + tính từ.","be patient"),
M("A swim in the evening helps me feel ___.",["relaxation","relaxed","relax"],1,"Feel + tính từ.","feel relaxed"),
M("Regular exercise can help to reduce ___.",["stressed","stress","stressing"],1,"Reduce + danh từ.","reduce stress"),
M("Achieving small goals can improve your ___.",["self-esteem","confident","relaxed"],0,"Improve your + danh từ.","improve your self-esteem")]},
{i:"🎯",n:"02 · Match the benefit",t:"mcq",x:2,ctx:"Choose the benefit that best matches each situation. (Extra practice made for the web.)",items:[
M("You practise a difficult movement until you can do it correctly.",["strength","patience","relaxation"],1,"Practising again and again needs …","patience"),
M("You feel comfortable speaking to your teammates.",["strength","patience","confidence"],2,"You believe in yourself.","confidence"),
M("You train regularly and your body becomes more powerful.",["relaxation","confidence","strength"],2,"Your body gets …","strength"),
M("You play a game together and learn to communicate clearly.",["become stronger","feel relaxed","improve your communication skills"],2,"Clear communication.","improve your communication skills"),
M("You learn to accept other players’ abilities and decisions.",["concentrate","respect others","become stronger"],1,"Accepting other people.","respect others"),
M("You spend time exercising and feel calmer afterwards.",["relaxation","self-esteem","strength"],0,"Calm and comfortable.","relaxation")]},
{i:"🧩",n:"02 · Build a summary",t:"book",lbl:"SUMMARY",sv:"Save",x:4,min:12,oc:1,h:"🧩 BUILD A SUMMARY (Exercise 3). Use the frames to summarise what the students and the teacher said about the effects of sport. Write only what you heard. Challenge: use at least one benefit word.",items:[
["🔵","1","Emir","Emir says that …",[],".{10,}"],
["🟣","2","Maya","Maya thinks swimming is beneficial because …",[],".{10,}"],
["🟠","3","Linh and her friends","Linh and her friends enjoyed …",[],".{10,}"],
["🧑‍🏫","4","Linh’s teacher","Linh’s teacher explains that team games can help students …",[],".{10,}"],
["⭐","★","Challenge: write one sentence about sport, using a benefit word","I think team sports can improve … because …",CHIPS_BEN,BEN]]},
{i:"🔤",n:"02 · Multi-word verbs",t:"mcq",x:2,ctx:"Emir uses four multi-word verbs when he talks about taekwondo: be into · join in · take (something) up · give (something) up. Choose the best one.",items:[
M("I’m really ___ swimming. I go to the pool every week.",["into","up","in"],0,"be into = rất thích.","be into"),
M("The coach invited everyone to ___ the game.",["give up","join in","be into"],1,"join in = tham gia.","join in"),
M("She wanted to try something new, so she decided to ___ basketball last year.",["take up","give up","join in"],0,"Start a new activity.","take up"),
M("He was too busy, so he had to ___ the sport.",["be into","take up","give up"],2,"Stop doing it.","give up")]},
/* ---------- STAGE 3 · GRAMMAR TIME MACHINE ---------- */
{i:"⏳",n:"03 · Two timelines",t:"mcq",x:2,ctx:"Book example: “I’d done taekwondo since I was quite young, but gave it up when I was 9.” and “I’d just moved to a new school and I’d been having a difficult time.”",items:[
M("In the first sentence, which happened first?",["He did taekwondo.","He gave it up.","Both at the same time."],0,"I’d done = had done = earlier.","Doing taekwondo came first."),
M("What is the form of the past perfect simple?",["had been + -ing","had + past participle","was / were + -ing"],1,"Think of had + V3.","had + past participle"),
M("What is the form of the past perfect continuous?",["had + past participle","have been + -ing","had been + -ing"],2,"Had + been + V-ing.","had been + -ing"),
M("“I’d been having a difficult time” emphasises …",["a finished single action","a situation in progress before a past moment","a future plan"],1,"Continuous = in progress.","an activity or situation in progress")]},
{i:"🗂️",n:"03 · Grammar sorting",t:"bucket",x:2,h:"🗂️ GRAMMAR SORTING. Read each sentence. Which tense is used? (Extra practice sentences, not from the audio.)",hint:"had + V3 = past perfect simple · had been + V-ing = past perfect continuous.",lab:["⏪ PAST PERFECT SIMPLE","⏳ PAST PERFECT CONTINUOUS"],items:[
["I had finished my training before the coach arrived.",0,"had finished = had + V3."],
["She had been swimming for an hour when the lesson ended.",1,"had been swimming = had been + V-ing."],
["They had never played rugby before the training session.",0,"had never played = had + V3."],
["He had been practising every evening before the competition.",1,"had been practising = had been + V-ing."],
["By the time we arrived, the match had already started.",0,"had already started = had + V3."],
["We had been waiting for twenty minutes when the bus finally came.",1,"had been waiting = had been + V-ing."]],
sg:"💡 Look at the verb after had: V3 or been + V-ing?"},
{i:"📘",n:"03 · Exercise 4 · Complete the sentences",t:"book",lbl:"EX 4",sv:"Save",x:4,min:6,oc:1,h:"📘 EXERCISE 4. Complete sentences a–c with the past perfect simple, and d–e with the past perfect continuous. Type only the missing words (listen again if necessary).",items:[
["🅰️","a","Before she took lessons, Maya ______ never ______ about swimming technique.","had … (two words)",[],"\\bhad\\b\\s+\\w+"],
["🅱️","b","Before that, Linh ______ of rugby but she ______ a game.","had … / hadn’t …",[],"\\bhad\\b[\\s\\S]*(hadn.t|had not|never)"],
["🅲","c","Before the training session, most of Linh’s friends ______ never ______ a rugby ball.","had … (two words)",[],"\\bhad\\b\\s+\\w+"],
["🅳","d","Maya ______ about having lessons for some time when she saw an advert for swimming coaching.","had been …",[],"\\bhad\\s+been\\s+\\w+ing\\b"],
["🅴","e","Linh and her friends ______ only ______ for an hour when the coach blew the whistle.","had … been …",[],"\\bhad\\s+(?:only\\s+)?been\\s+\\w+ing\\b"]]},
{i:"✅",n:"03 · Check the forms",t:"mcq",x:2,ctx:"Suggested completions based on structure and context. This is a grammar suggestion, not an official publisher key – check the audio for the exact verbs.",items:[
M("a. Maya ______ never ______ about swimming technique. Which pattern?",["had been + -ing","had + past participle","have + past participle"],1,"Past perfect simple.","Suggested: had never thought."),
M("b. Linh ______ of rugby but she ______ a game. Which pattern?",["was + -ing","had been + -ing","had + past participle (hadn’t + past participle)"],2,"Past perfect simple, positive and negative.","Suggested: had heard of rugby but she hadn’t seen a game."),
M("c. Most of Linh’s friends ______ never ______ a rugby ball. Which pattern?",["had + past participle","has + past participle","had been + -ing"],0,"Past perfect simple.","Suggested: had never touched."),
M("d. Maya ______ about having lessons for some time when she saw an advert. Which pattern?",["had thought","had been thinking","was thinking"],1,"For some time = continuing activity.","Suggested: had been thinking."),
M("e. Linh and her friends ______ only ______ for an hour when the coach blew the whistle. Which pattern?",["had only played","have only been playing","had only been playing"],2,"An activity in progress before the whistle.","Suggested: had only been playing.")]},
{i:"🔧",n:"03 · Grammar repair",t:"mcq",x:2,ctx:"Find the mistake, then choose the correct version. (Extra practice made for the web.)",items:[
M("Before the match started, we had practise together.",["had practised","had been practise","have practised"],0,"had + past participle.","had practised"),
M("She had been train for two hours when her coach arrived.",["had training","had been training","had been trained"],1,"had been + V-ing.","had been training"),
M("They had never went swimming before that day.",["had never go","had never gone","never had went"],1,"Past participle of go = gone.","had never gone")]},
{i:"💬",n:"03 · They say …",t:"book",lbl:"SAY",sv:"Save",x:3,min:15,oc:1,h:"💬 LANGUAGE TIP · They say that … The book models: They say that taekwondo can help you not only to become physically stronger but also to improve your mental strength. Now write your own sentences.",items:[
["💬","1","Complete the sentence about team sports.","They say that playing team sports can help teenagers …",["improve communication skills","work better with others","build stronger relationships"],"they say|people say|some people"],
["🧍","2","Now complete a sentence about individual sports.","Some people believe that individual sports can help people …",["become more patient","build confidence","reduce stress"],"believe|say|think"]]},
/* ---------- STAGE 4 · SPORTS OPINION ARENA ---------- */
{i:"⚖️",n:"04 · Choose your side",t:"think",x:3,h:"⚖️ SPORTS OPINION ARENA (Exercise 5). Which are better for people of your age: team sports or individual sports? Choose a side – you can change your mind later.",lab:["👥 TEAM SPORTS","🧍 INDIVIDUAL SPORTS","🤝 BOTH, FOR DIFFERENT REASONS"],items:[["Which do you prefer?",[0,1,2],"preference"]],pr:"Why do you think so? Write one reason.",bt:"Lock my side",sg:"Locked! Now choose a benefit and build your argument."},
{i:"🧱",n:"04 · Benefit + reason",t:"book",lbl:"ARGUE",sv:"Save",x:4,min:20,h:"🧱 What are the benefits of sport for children and teenagers? Choose one benefit and give a reason or an example.",items:[
["⭐","1","Choose a benefit of sport and explain it","One important benefit of sport for teenagers is … For example, …",["Building confidence","Developing strength","Learning patience","Helping people relax","Improving self-esteem","Improving communication skills","Building stronger relationships"],"for example|because|so that"]]},
{i:"🏗️",n:"04 · Build a strong answer",t:"order",x:8,items:[0],h:"🏗️ THE 4-STEP SPEAKING STRUCTURE. Put the sentences in order: opinion, reason, example, other view. (It is a support frame, not the only way to speak.)",hint:"Opinion → This is because … → For example, … → However, …",cards:[
"C. For example, players have to listen to each other and work together.",
"A. I think team sports are better for teenagers.",
"D. However, individual sports can also help people build confidence and discipline.",
"B. This is because they help young people develop communication skills."],ans:[1,3,0,2],yl:"🗣️ MY ANSWER",ft:"🧠 SPEAKING FLOW",flow:["1 · OPINION","2 · REASON","3 · EXAMPLE","4 · OTHER VIEW"],bm:"Not quite. Start with your opinion, then give a reason (This is because …), add an example (For example, …) and finish with another view (However, …)."},
{i:"🔍",n:"04 · Model answer detective",t:"bucket",x:2,h:"🔍 MODEL ANSWER DETECTIVE. This is a supplementary model, not from the book. Sort each sentence by its job.",hint:"Opinion = what I think. Reason = why or an example. Other view = another side of the argument.",lab:["💡 OPINION","🧱 REASON","↔️ OTHER VIEW"],items:[
["I think both team sports and individual sports are beneficial for teenagers.",0],
["Team sports help us develop communication skills and build stronger relationships because we have to work with other people.",1],
["Individual sports, on the other hand, can help us become more patient and confident.",2],
["However, I think the best choice depends on each person’s interests and personality.",2]],
sg:"💡 You can agree or disagree with this model. Your own reasons matter most."},
{i:"🎤",n:"04 · 30-second challenge",t:"book",lbl:"SPEAK",sv:"Save",x:6,min:40,oc:1,h:"🎤 30-SECOND CHALLENGE. Write notes or a short draft first, then say it aloud without reading every word. Rules: speak for 30 seconds · give one clear opinion · use at least two expressions from the vocabulary section · give one reason or example.",items:[
["🎤","1","My 30-second answer","I think … because … For example, … However, …",["confidence","strength","patience","relaxation","self-esteem","communication skills"],"^(?=[\\s\\S]*(?:i think|in my opinion|i believe|personally|i prefer))(?=[\\s\\S]*(?:because|for example|for instance))[\\s\\S]*(?:"+BEN+")[\\s\\S]*(?:"+BEN+")"]]},
{i:"🤝",n:"04 · Partner round (optional)",t:"chk",x:3,items:[0],h:"🤝 PARTNER ROUND. Work with a classmate, a teacher or a family member. If you study alone, play both roles aloud. Tick each turn when you have done it.",list:["Speaker A gave an opinion.","Speaker B asked: “Why do you think so?”","Speaker A explained and gave an example.","We swapped roles (or I played both roles aloud)."]},
/* ---------- STAGE 5 · EXIT CHECK ---------- */
{i:"🏆",n:"05 · FINAL · Sports Impact Report",t:"final",px:10,h:"🏆 THE SPORTS IMPACT REPORT. Give a short report about how sport affects people. Write one short paragraph, then say it aloud.",hint:"Include: 1 a benefit of sport · 2 a comparison of team and individual sports · 3 one past perfect simple example · 4 one past perfect continuous example · 5 your opinion and a reason.",ph:"Sport can help people … Team sports …, whereas individual sports … Before the competition, I had … I had been … when … I think … because …",checks:[
["Mentions a benefit of sport",BEN,1],
["Compares team and individual sports","(?:team[^.!?]*individual|individual[^.!?]*team)",1],
["Uses the past perfect simple",PPS,1],
["Uses the past perfect continuous",PPC,1],
["Gives a personal opinion","i think|in my opinion|i believe|personally|i prefer|i feel",1],
["Gives a reason or example","because|for example|for instance|so that|as a result",1]],
sk:["I can identify the sports and activities mentioned by the three students.","I can summarise benefits of sport using the lesson vocabulary.","I can use the expressions be into, join in, take up and give up.","I can form the past perfect simple.","I can form the past perfect continuous.","I can explain my opinion about team and individual sports."]}
]};
MX["6.0"].mx=MX["6.0"].steps.reduce((a,s)=>a+(s.t==="final"?s.px+5:s.items.length*(s.x||0)),0);
}
/* mở thẳng link Lesson 7.1: dựng lại sau khi dữ liệu 7.1 đã nạp */
if(/^#\/lesson\//.test(location.hash))route();


