/* ===== UNIT 7 · LESSON 7.3 · To compete or not to compete? (key 6.2) · Audio 39 · THE GREAT SPORTS DEBATE ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const CMP="\\b(?:more|less|most|least|better|best|worse|worst|farther|further|farthest|furthest|than|\\w+est|as \\w+ as)\\b";


/* ô audio dùng chung (key riêng cho mỗi track) */
const axGet=k=>{try{return localStorage.getItem("cge9au_"+k)||""}catch(e){return ""}};
GR.aud2=(st,S,D)=>{const k=st.ak,u=axGet(k),ok=S.ok[S.s];return mBox(st.h,`<div class="mt-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-sm space-y-2">
<p><b>Cách nghe gợi ý (3-pass):</b> Lần 1 – chỉ nghe quan điểm chính. Lần 2 – ghi từ khóa, lý do, ví dụ. Lần 3 – nghe phản biện: mâu thuẫn, thiên kiến, phản ứng của người dẫn chương trình.</p>
<p class="text-xs text-slate-500">Cần audio gốc của sách (Track ${k}). Web không tự tạo bản thu hay transcript. Dán link trực tiếp tới file âm thanh (.mp3, .m4a…) hoặc chọn file trên máy. Link YouTube không phát được ở đây.</p>
<audio id="ax${k}" controls preload="none" class="w-full mt-2" ${u?`src="${esc(u)}"`:""}></audio>
<div class="flex flex-wrap gap-2 items-center"><input data-ax="url" data-ak="${k}" type="url" value="${esc(u)}" placeholder="Dán link audio ${k} (https://…)" class="flex-1 min-w-[12rem] px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent text-sm"/><button data-act="ax_save" data-ak="${k}" class="${mch(0)}">💾 Lưu link</button></div>
<div class="flex flex-wrap gap-2 items-center"><label class="text-xs text-slate-500">Hoặc chọn file (chỉ dùng trong phiên này):</label><input data-ax="file" data-ak="${k}" type="file" accept="audio/*" class="text-xs"/></div>
<p id="ax${k}msg" class="text-xs text-green-600"></p></div>
<button data-act="ax_done" ${ok?"disabled":""} class="mt-3 ${mbtn}">${ok?"✅ Đã nghe xong":"✅ Tôi đã nghe xong lần 1"}</button>
${ok?`<p class="mt-2 text-sm text-green-600">⭐ +${st.x} XP · Bây giờ ghi chú quan điểm của hai người.</p>`:""}`)};
document.addEventListener("click",e=>{const b=e.target.closest('[data-act^="ax_"]');if(!b||b.disabled)return;const gc=b.closest("[data-gk]");if(gc)GK=gc.dataset.gk;const k=b.dataset.ak;
 if(b.dataset.act==="ax_save"){const inp=document.querySelector(`[data-ax="url"][data-ak="${k}"]`),v=inp?inp.value.trim():"",msg=document.getElementById("ax"+k+"msg"),a=document.getElementById("ax"+k);
  if(v&&!/^https?:\/\//i.test(v)){if(msg){msg.className="text-xs text-red-600";msg.textContent="Link cần bắt đầu bằng http:// hoặc https://"}return}
  try{localStorage.setItem("cge9au_"+k,v)}catch(_){}
  if(a){a.src=v;a.load()}if(msg){msg.className="text-xs text-green-600";msg.textContent=v?"Đã lưu link audio.":"Đã xoá link audio."}}
 else if(b.dataset.act==="ax_done"){const S=gS(GK),s=S.s,st=MX[GK].steps[s];S.ok[s]=1;gAw(S,"ax"+s,st.x||3);gRender(GK)}});
document.addEventListener("change",e=>{const t=e.target;if(t&&t.dataset&&t.dataset.ax==="file"&&t.files&&t.files[0]){const k=t.dataset.ak,a=document.getElementById("ax"+k),msg=document.getElementById("ax"+k+"msg");if(a){a.src=URL.createObjectURL(t.files[0]);a.load()}if(msg){msg.className="text-xs text-green-600";msg.textContent="Đã nạp file: "+t.files[0].name}}});

LBC["6.2"]={
obj:["Nghe một cuộc phỏng vấn radio và tóm tắt quan điểm của Matthew và Judy (Audio 39)","Nhận ra thiên kiến (bias), bằng chứng và mâu thuẫn trong lập luận","Hiểu từ vựng liên quan đến thi đấu và cạnh tranh","Dùng tính từ và trạng từ so sánh hơn và so sánh nhất","Tham gia thảo luận lớp bằng từ nối và cách hỏi làm rõ ý (You said that …)"],
vocab:[
["be turned off (by)","mất hứng, không còn thích (điều gì)","v","Some students are turned off by competitive sport."],
["be put off","bị làm cho không thích, nản lòng","v","I was put off by the long training sessions."],
["all very well","cũng được, tốt trong một số trường hợp (nhưng…)","adj","Winning is all very well, but it isn’t everything."],
["a fact of life","điều tồn tại và bạn phải chấp nhận","n","Competition is a fact of life."],
["pick yourself up","đứng dậy, hồi phục nhanh và thử lại","v","When you lose, you have to pick yourself up and try again."],
["competition","sự cạnh tranh; cuộc thi","n","Competition can be motivating."],
["bias","thiên kiến; sự thiên vị","n","Her personal dislike of competitions shows bias."],
["evidence","bằng chứng","n","A good argument needs evidence."],
["inconsistency","sự mâu thuẫn, không nhất quán","n","The presenter notices an inconsistency."],
["rewarding","đáng giá, mang lại cảm giác xứng đáng","adj","Team sport can be very rewarding."],
["sociable","thích giao tiếp, hòa đồng","adj","Sport can make you feel more sociable."],
["concerned","lo lắng, quan tâm","adj","We should be concerned about children’s well-being."],
["satisfied","hài lòng","adj","Are you satisfied with your results?"],
["presenter","người dẫn chương trình","n","The presenter asks Matthew and Judy questions."]],
gram:[
{t:"Comparatives – so sánh hơn",r:"Từ ngắn: thêm -er (high → higher). Tận cùng -y: đổi y → i + -er (happy → happier). Từ dài: more + adj/adv (more patient, more carefully). Bất quy tắc: good/well → better; bad/badly → worse; far → farther/further.",ex:["Sport can make you feel better about yourself.","He plays more carefully than he did last year."]},
{t:"Superlatives – so sánh nhất",r:"Từ ngắn: the + -est (the highest, the fastest, the happiest). Từ dài: the most + adj/adv. Bất quy tắc: the best, the worst, the farthest/furthest.",ex:["That’s the most valuable lesson you can learn.","Of all the runners, Minh ran the farthest."]},
{t:"Các cấu trúc khác",r:"as + adj/adv + as (bằng nhau) · not as … as (không bằng) · less + adj/adv + than (kém hơn) · the least + adj/adv (ít nhất).",ex:["Run as fast as the others.","Not as fast as the others.","Less stressed than before.","The least stressful job."]}],
tips:[
"Audio 39 (Listening Exercises 1–2 và việc tìm adjectives/adverbs người nói dùng): web không có transcript. Đối chiếu với audio gốc; web không tự tạo lời của Matthew, Judy hay người dẫn chương trình.",
"Để hỏi làm rõ ý trong thảo luận, bắt đầu bằng You said that … rồi đặt câu hỏi.",
"Từ nối hữu ích khi tranh luận: and, but, so, however, although.",
"Phần web bổ sung (không phải bài tập gốc): phân loại warm-up, Fact/Opinion/Bias, Use it!, mini practice và phân loại so sánh, khung tranh luận, Rewrite challenge, 30-second verdict."]};

MX["6.2"]={code:"07.3",title:"The Great Sports Debate",
q:"Should we compete or not? · WARM-UP → LISTEN → VOCABULARY → GRAMMAR → DEBATE → VERDICT",
end:{t:"🏅 MISSION COMPLETE – THE GREAT SPORTS DEBATE",did:"You sorted competitive and non-competitive activities, listened critically to Matthew and Judy, decoded phrases about competition, used comparatives and superlatives, built and defended an argument, asked clarifying questions and gave a 30-second verdict. 🏅 Badge: SPORTS DEBATER",r:"One argument that changed or strengthened my opinion today is …"},
steps:[
/* STAGE 0 */
{i:"⚡",n:"00 · Pick a side",t:"bucket",x:2,h:"⚡ PICK A SIDE (30 seconds). Is each activity competitive or non-competitive? Choose the most usual way to do it.",hint:"Competitive = people try to win or beat others. Non-competitive = fun, health or relaxation.",lab:["🏆 COMPETITIVE","🌿 NON-COMPETITIVE"],items:[
["A football tournament",0,"A tournament has winners."],
["Yoga for relaxation",1,"The aim is relaxation, not winning."],
["A 100-metre race",0,"Runners race to win."],
["Dancing for fun with friends",1,"The aim is fun together."],
["A chess championship",0,"A championship has a winner."],
["Practising swimming to improve your health",1,"The aim is health."]]},
{i:"💬",n:"00 · Talk about it",t:"book",lbl:"TALK",sv:"Save",x:3,min:10,oc:1,h:"💬 How many competitive and non-competitive sports and activities can you think of? Then explain your preferences. Frame: I prefer … because … However, I think …",items:[
["🏆","1","List some competitive and some non-competitive activities.","Competitive: … Non-competitive: …",[],".{8,}"],
["⚖️","2","Which type do you prefer? Is competition always a good thing?","I prefer … because … However, I think …",["I prefer","However"],"because|however|think"],
["🌿","3","Can you enjoy a sport without trying to win?","I think you can / can’t enjoy a sport without trying to win because …",[],"because|think|yes|no|can"]]},
/* STAGE 1 */
{i:"🔮",n:"01 · Predict the views",t:"think",x:3,h:"🔮 BEFORE LISTENING (Audio 39). Who might support competitive sport? Who might support non-competitive sport? Predict – you will check with the audio.",lab:["🎙️ MATTHEW","🎙️ JUDY","❓ NOT SURE YET"],items:[["Who might support competitive sport?",[0,1,2],"competitive"],["Who might support non-competitive sport?",[0,1,2],"non-competitive"]],pr:"Why do you think so?",bt:"Lock my predictions",sg:"Locked! Now listen and check."},
{i:"🎧",n:"01 · Audio 39 · First listen",t:"aud2",ak:"39",x:3,items:[0],h:"🎧 AUDIO 39 · THE RADIO INTERVIEW (Exercise 1). Listen to the interview. Pass 1 – gist: only listen for the main view of Matthew and of Judy."},
{i:"📝",n:"01 · Task 1 · Matthew and Judy",t:"book",lbl:"VIEW",sv:"Save",x:4,min:10,oc:1,h:"📝 TASK 1. How would you summarise the views of Matthew and Judy? Write notes from the audio, then listen again to check. Your own notes are the answer.",items:[
["🎙️","Matthew","Matthew’s view","Matthew thinks that … because …",["competitive","non-competitive"],".{10,}"],
["🎙️","Judy","Judy’s view","Judy thinks that … because …",["competitive","non-competitive"],".{10,}"]]},
{i:"🧭",n:"01 · 3-pass method",t:"order",x:6,items:[0],h:"🧭 LISTENING STRATEGY. Put the three listening passes in the best order.",hint:"Main idea first, then details, then critical thinking.",cards:[
"C. Pass 3 – Critical listening: find contradictions, signs of bias and the presenter’s reaction.",
"A. Pass 1 – Gist: find the main view of Matthew and Judy.",
"B. Pass 2 – Evidence: note keywords, reasons and examples each speaker gives."],ans:[1,2,0],yl:"🎧 MY LISTENING ROUTE",ft:"🧠 3-PASS METHOD",flow:["PASS 1 · GIST","PASS 2 · EVIDENCE","PASS 3 · CRITICAL LISTENING"],bm:"Not quite. First the gist, then the evidence, and last the critical listening."},
{i:"🔎",n:"01 · Task 2 · Details 1–2",t:"book",lbl:"Q",sv:"Save",x:4,min:10,oc:1,h:"🔎 TASK 2 (Exercise 2, questions 1–2). Listen again (pass 2) and write evidence from the audio, not a guess.",items:[
["🏆","1","According to Judy, why is competitive sport better than non-competitive sport?","According to Judy, competitive sport is better because …",[],".{10,}"],
["🔁","2","At one point the presenter notices an inconsistency in what Judy says (“But you just said …”). What is the inconsistency?","The inconsistency is that Judy says … but …",[],".{10,}"]]},
{i:"🕵️",n:"01 · Task 2 · Details 3–5",t:"book",lbl:"Q",sv:"Save",x:4,min:10,oc:1,h:"🕵️ TASK 2 (questions 3–5). Pass 3 – critical listening. Use examples from what you heard.",items:[
["🎤","3","Can you tell what the presenter thinks of what Matthew and Judy say?","I think the presenter … because …",[],".{10,}"],
["📚","4","Do both Matthew and Judy support their views with evidence? Give examples.","Matthew … For example, … Judy …",["evidence","for example"],".{10,}"],
["⚠️","5","Is either Matthew or Judy biased? Do their personal opinions lead them to conclusions that are not based on fact?","I think … is / isn’t biased because …",["biased","not based on fact"],".{10,}"]]},
{i:"🧪",n:"01 · Fact, opinion or bias?",t:"bucket",x:2,h:"🧪 FACT, OPINION OR BIAS? (practice sentences, not from the audio). Fact = can be checked. Opinion = what someone thinks. Bias = a personal feeling pushes the person to a conclusion not based on fact.",hint:"Can you check it? Does a personal feeling lead to an unfair general conclusion?",lab:["📏 FACT","💭 OPINION","⚠️ BIAS"],items:[
["Competitive sport is better than non-competitive sport.",1,"A personal judgement – it cannot be proved."],
["I dislike competitions, so competitions are bad for every child.",2,"A personal dislike is used to reach a conclusion about everyone."],
["The race lasted ten minutes.",0,"It can be checked with a clock."],
["Children should never lose because losing makes them unhappy.",1,"A value judgement (“should”) based on a general claim – opinion."]]},
/* STAGE 2 */
{i:"🧩",n:"02 · Exercise 3 · Meanings",t:"mcq",x:2,ctx:"Exercise 3. Choose the correct meaning of the phrases in bold.",items:[
M("a. For students who are <b>turned off</b> by competitive sport, non-competitive sport is more important.",["who really enjoy","who don’t enjoy at all"],1,"Turned off = lost interest.","who don’t enjoy at all"),
M("b. We don’t want them to be <b>put off</b> because they can’t jump as high.",["to be made to dislike something","to be told they are no good"],0,"Put off = discouraged.","to be made to dislike something"),
M("c. ‘Non-competitive’ sport is <b>all very well</b>, but does it prepare you for life?",["OK in some situations","good in all situations"],0,"The “but” shows a doubt.","OK in some situations"),
M("d. Competition is <b>a fact of life</b>.",["is good for you","exists and you have to accept it"],1,"Fact = real; of life = everywhere.","exists and you have to accept it"),
M("e. If you lose, you’ve got to <b>pick yourself up</b> and try again.",["choose something different","recover as quickly as you can"],1,"Pick up after a fall.","recover as quickly as you can")]},
{i:"🗣️",n:"02 · Use it!",t:"book",lbl:"USE",sv:"Save",x:3,min:15,h:"🗣️ Use each phrase in your own sentence. You will need them in the debate.",items:[
["😕","1","I sometimes feel turned off by …","I sometimes feel turned off by …",[],"turned off"],
["🚫","2","One thing that can put me off a sport is …","One thing that can put me off a sport is …",[],"put (me )?off"],
["🌍","3","I think competition is a fact of life because …","I think competition is a fact of life because …",[],"fact of life"],
["💪","4","When I fail at something, I try to pick myself up by …","When I fail at something, I try to pick myself up by …",[],"pick (myself|yourself) up|picking myself up"]]},
/* STAGE 3 */
{i:"📈",n:"03 · Choose the correct form",t:"mcq",x:2,ctx:"Comparatives and superlatives. (Practice made for the web; item 3 uses the frame as … as.)",items:[
M("My sister is ___ at tennis than I am.",["good","better","best"],1,"Than → comparative.","better"),
M("This is one of ___ lessons I have learned from sport.",["more valuable","the most valuable","valuable"],1,"One of the → superlative.","the most valuable"),
M("Lan cannot run as ___ as Mai.",["fast","faster","the fastest"],0,"as … as → base form.","as fast as"),
M("He plays ___ than he did last year.",["carefully","more carefully","the most carefully"],1,"Than → comparative.","more carefully"),
M("Of all the runners, Minh ran ___.",["far","farther","the farthest"],2,"Of all → superlative.","the farthest"),
M("I feel ___ stressed than before.",["less","least","fewer"],0,"Less … than.","less stressed than"),
M("It was ___ stressful job I have ever had.",["less","the least","lesser"],1,"The least + adjective.","the least stressful"),
M("The happy team became ___ after winning.",["more happy","happier","happiest"],1,"-y → -ier.","happier")]},
{i:"👂",n:"03 · Notice the language",t:"book",lbl:"NOTICE",sv:"Save",x:4,min:8,oc:1,h:"👂 Exercise: look at the list. Adjectives: high, happy, patient, rewarding, good, bad, far. Adverbs: fast, high, carefully, well, badly. Which ones do Matthew and Judy use, and what are they referring to? Listen again to Audio 39 – do not guess.",items:[
["🎙️","Matthew","Words Matthew uses, and what they refer to","Matthew uses … to talk about …",["high","happy","patient","rewarding","good","bad","far","fast","carefully","well","badly"],".{8,}"],
["🎙️","Judy","Words Judy uses, and what they refer to","Judy uses … to talk about …",["high","happy","patient","rewarding","good","bad","far","fast","carefully","well","badly"],".{8,}"]]},
{i:"📘",n:"03 · Exercise 4 · Complete",t:"book",lbl:"EX 4",sv:"Save",x:4,min:6,oc:1,h:"📘 EXERCISE 4. Choose comparative or superlative forms to fill the gaps with one or two words. Type only the missing words, in order.",items:[
["🅰️","a","Non-competitive sport can make them feel ______ (good) about themselves, ______ (relaxed) and ______ (sociable).","better … more relaxed … more sociable",[],"better[\\s\\S]*(more|less)\\s+relaxed[\\s\\S]*(more|less)\\s+sociable"],
["🅱️","b","We don’t want them to be put off because they can’t compete with those who jump the ______ (high), or run the ______ (fast).","the highest … the fastest",[],"highest[\\s\\S]*fastest"],
["🅲","c","If you lose, you’ve got to pick yourself up and try again. That’s the ______ (valuable) lesson you can learn in life.","the most valuable",[],"most valuable"],
["🅳","d","You might not be able to run as ______ (fast) as the others, but perhaps you’re ______ (good) at longer distances. You may be able to run ______ (far) than the others.","as fast … better … farther",[],"fast[\\s\\S]*better[\\s\\S]*(farther|further)"],
["🅴","e","We should be much ______ (concerned) than we are that children are ______ (satisfied) with their lives than they were ten years ago.","more concerned … less satisfied",[],"more concerned[\\s\\S]*less satisfied"]]},
{i:"✅",n:"03 · Check Exercise 4",t:"mcq",x:2,ctx:"Suggested forms based on structure and meaning (not an official publisher key).",items:[
M("a. feel ___ about themselves",["good","better","the best"],1,"Comparison with before.","Suggested: better … more relaxed … more sociable."),
M("b. the ___ / the ___ (high / fast)",["the highest … the fastest","higher … faster","more high … more fast"],0,"Those who jump the …","the highest … the fastest"),
M("c. the ___ lesson",["more valuable","most valuable","the most valuable"],2,"The + most + adjective.","the most valuable"),
M("d. run as ___ as the others; better at …; run ___ than the others",["fast … better … farther / further","faster … best … farthest","fast … good … far"],0,"as … as uses the base form.","as fast as … better … farther/further"),
M("e. much ___ than we are … ___ satisfied than they were",["less concerned … more satisfied","more concerned … less satisfied","most concerned … least satisfied"],1,"Children are less satisfied than ten years ago.","more concerned … less satisfied")]},
{i:"🧮",n:"03 · Comparative or superlative?",t:"bucket",x:2,h:"🧮 SORT THE SENTENCES (practice made for the web).",hint:"-er/more … than = comparative · the -est/the most/the least = superlative · as … as/less … than = equality or less.",lab:["📈 COMPARATIVE","🏅 SUPERLATIVE","⚖️ AS … AS / LESS … THAN"],items:[
["She runs faster than her brother.",0],
["He is the happiest player on the team.",1],
["This drill is not as difficult as the last one.",2],
["It was the least stressful race of the year.",1],
["I feel less nervous than before.",2],
["Chess is more demanding than I thought.",0]]},
/* STAGE 4 */
{i:"🧑‍🤝‍🧑",n:"04 · Choose your team",t:"think",x:3,h:"🧑‍🤝‍🧑 THE GREAT SPORTS DEBATE (Exercise 5). Choose the position your team will defend. You do not have to agree with it personally.",lab:["🅰️ COMPETITIVE IS BETTER","🅱️ NON-COMPETITIVE IS BETTER","🅲 BOTH ARE EQUALLY IMPORTANT","🅳 IT DEPENDS"],items:[["Which position will your team present?",[0,1,2,3],"position"]],pr:"Why will you defend this position? Write your main reason.",bt:"Lock my team",sg:"Locked! Now build the argument."},
{i:"🧱",n:"04 · Build your argument",t:"book",lbl:"ARG",sv:"Save",x:4,min:12,h:"🧱 Prepare what your team will say. Try to include phrases from Exercises 3 and 4.",items:[
["1️⃣","1","Main argument","Our group believes that … because …",["Our group believes that","One reason is that"],"believe|think|because"],
["2️⃣","2","Example or evidence","For example, …",["For example"],"for example|for instance|such as"],
["3️⃣","3","A point the other side might make","However, we understand that …",["However","Although"],"however|although|might say|understand|some people"]]},
{i:"🏗️",n:"04 · Speaking frame",t:"order",x:8,items:[0],h:"🏗️ Put a short team speech in order: opening, reasons and example, contrast, conclusion.",hint:"Opening → reason + example → however … → overall …",cards:[
"C. However, we understand that some students feel turned off by competition.",
"A. Our group believes that competitive sport is better.",
"D. Overall, we believe competition is useful because it teaches us to pick ourselves up.",
"B. One reason is that it is more motivating. For example, players have a clear goal."],ans:[1,3,0,2],yl:"🎤 OUR SPEECH",ft:"🧠 SPEECH FLOW",flow:["OPENING","REASON + EXAMPLE","CONTRASTING POINT","CONCLUSION"],bm:"Not quite. Open with your position, give a reason with an example, add a contrasting point, then conclude."},
{i:"⬆️",n:"04 · Rewrite challenge",t:"book",lbl:"UPGRADE",sv:"Save",x:4,min:15,oc:1,h:"⬆️ MAKE YOUR ARGUMENT STRONGER. Rewrite each simple sentence with a comparison (more … than, the most …, as … as, less … than…).",items:[
["1️⃣","1","Competitive sport is good.","Competitive sport can be more … than …",["more … than","the most"],CMP],
["2️⃣","2","Non-competitive sport is useful.","Non-competitive sport can be …",["less … than","as … as"],CMP],
["3️⃣","3","Losing is bad.","Losing can be … because …",["the worst","not as … as"],CMP]]},
{i:"❓",n:"04 · Question time",t:"book",lbl:"ASK",sv:"Save",x:4,min:15,oc:1,h:"❓ After a team speaks, ask a question starting with “You said that …”. Extra challenge: the answer must use a comparative or a superlative.",items:[
["🙋","1","Write a question for another team.","You said that … Why do you think so?",["You said that"],"you said that[\\s\\S]*\\?"],
["🎤","2","Answer it in one or two sentences, using a comparative or superlative.","I think … is more … than … because …",["more … than","the most"],CMP]]},
{i:"📋",n:"04 · Debate checklist",t:"chk",x:4,items:[0],h:"📋 Tick each point when your team has done it. You may swap roles, stand up or use note cards.",list:["We chose a position and gave a main argument.","We gave an example or evidence.","We mentioned a point the other side might make.","We used phrases from Exercises 3 and 4.","We asked or answered a “You said that …” question."]},
/* STAGE 5 */
{i:"🏆",n:"05 · FINAL · 30-second verdict",t:"final",px:10,h:"🏆 YOUR FINAL VERDICT. “Should children take part in competitive sport, non-competitive sport, or both?” Write a short answer, then say it in 30 seconds. State your position, give a reason or example, use at least two comparative or superlative structures, and one linking word: and, but, so or however.",hint:"I think children should … because … It is more … than … However, … the most important …",ph:"I think children should take part in both because … Competitive sport is more … than … but non-competitive sport is the best way to … However, …",checks:[
["States a position","competitive|non-competitive|both",1],
["Gives a reason or example","because|for example|for instance|so that",1],
["Uses two comparative / superlative structures","\\b(?:more \\w+|less \\w+|the most \\w+|the least \\w+|the \\w+est|\\w+er than|better|best|worse|worst|farther|further|as \\w+ as)\\b",2],
["Uses a linking word","\\b(?:and|but|so|however)\\b",1]],
sk:["I can summarise two different opinions about sport.","I can identify an opinion, evidence and possible bias.","I understand the key vocabulary from the interview.","I can form comparative and superlative adjectives and adverbs.","I can give an opinion and respond to a contrasting argument."]}
]};
MX["6.2"].mx=MX["6.2"].steps.reduce((a,s)=>a+(s.t==="final"?s.px+5:/think|order|chk/.test(s.t)?(s.x||0):s.items.length*(s.x||0)),0);
}
/* mở thẳng link Lesson 7.3 */
if(/^#\/lesson\//.test(location.hash))route();

