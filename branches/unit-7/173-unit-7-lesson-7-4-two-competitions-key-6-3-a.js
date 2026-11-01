/* ===== UNIT 7 · LESSON 7.4 · Two competitions (key 6.3) · Audio 42 · COMPETITION DETECTIVES ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});

/* ô audio 42 – dùng lại ô audio của 7.3 nhưng đổi lời hướng dẫn nghe */
GR.aud42=(st,S,D)=>GR.aud2(st,S,D)
 .replace(/<p><b>Cách nghe gợi ý \(3-pass\):<\/b>[^<]*<\/p>/,'<p><b>Cách nghe gợi ý:</b> '+st.tip+'</p>')
 .replace(/Bây giờ ghi chú quan điểm của hai người\./,st.nx||"");

LBC["6.3"]={
obj:[
"Nghe mô tả hai cuộc thi không phải thể thao (Audio 42)",
"Mô tả các vòng thi và những người tham gia một cuộc thi",
"Dùng thì quá khứ hoàn thành (past perfect simple) ở dạng chủ động và bị động",
"Viết và trình bày mô tả bí ẩn về một cuộc thi để các bạn đoán tên"],
vocab:[
["competition","cuộc thi; sự cạnh tranh","n","Apart from sport, there are many other kinds of competition."],
["competitor","người tham gia thi đấu","n","Every competitor wants to reach the final."],
["contest","cuộc thi, cuộc tranh tài","n","She entered a singing contest."],
["contestant","thí sinh","n","Each contestant has to bake a cake."],
["challenge","thử thách; cuộc thi đấu","n","The last challenge was the hardest."],
["challenger","người thách đấu","n","The challenger hoped to take the title."],
["championship","giải vô địch","n","The chess championship lasted two weeks."],
["champion","nhà vô địch","n","The champion was only 15 years old."],
["(qualifying) round","vòng (loại) / vòng sơ loại","n","Only the best players pass the qualifying round."],
["quarter-final","vòng tứ kết","n","Eight players take part in the quarter-finals."],
["semi-final","vòng bán kết","n","The winner of the semi-final goes into the final."],
["final","vòng chung kết","n","The final was watched by thousands of people."],
["compete for a title","tranh tài để giành danh hiệu","v","Two players compete for the title of champion."],
["win a title","giành danh hiệu","v","She won the title for the third time."]],
gram:[
{t:"Past perfect simple – chủ động",r:"Subject + had + past participle (V3). Dùng để nói về hành động xảy ra trước một thời điểm hoặc một hành động khác trong quá khứ.",ex:["The judges had selected the finalists.","Thousands of young people had applied."]},
{t:"Past perfect simple – bị động",r:"Subject + had been + past participle (V3). Chủ ngữ là người/vật nhận hành động; người thực hiện có thể không được nêu hoặc đi với by.",ex:["The finalists had been selected by the judges.","He had been chosen."]},
{t:"Tường thuật câu bị động",r:"Hiện tại hoàn thành bị động (have been helped) → quá khứ hoàn thành bị động (had been helped) khi tường thuật ở quá khứ.",ex:["“I have been helped to prepare …” → She said she had been helped to prepare …"]},
{t:"Ordinal numbers – số thứ tự",r:"1st first · 2nd second · 3rd third · 4th fourth.",ex:["She had won the championship for the third time."]}],
tips:[
"Audio 42 (Listening Exercises 2–3): web không có transcript. Học sinh đối chiếu với audio gốc; web không tự điền chi tiết về Zak Travess hay Ju Wenjun.",
"Thời lượng gợi ý: Warm-up 3–4 phút · Vocabulary 6 · Listening 12–15 · Grammar 10–12 · Mystery Competition 8–10 · Exit ticket 2.",
"Với học sinh dễ mất tập trung: cho dự đoán trước khi nghe và chỉ giao một nhóm câu hỏi mỗi lượt; dùng thẻ để sắp xếp các vòng thi; ở ngữ pháp, xác định chủ ngữ trước rồi mới chọn chủ động hay bị động.",
"Chia phần viết thành các chặng: chọn ý tưởng → ghi manh mối → viết 3–4 câu → đọc cho lớp đoán. Đan xen nghe, viết, nói để không kéo dài một nhiệm vụ.",
"Phần web bổ sung (không phải bài tập gốc): các hoạt động phân loại, mini-quiz, bước sắp xếp khung viết và checklist."]};

MX["6.3"]={code:"07.4",title:"Competition Detectives",
q:"Điều tra hai cuộc thi · WARM-UP → VOCABULARY → LISTENING → GRAMMAR → MYSTERY COMPETITION → EXIT TICKET",
end:{t:"🏅 MISSION COMPLETE – COMPETITION DETECTIVES",did:"You named competitions beyond sport, built the competition map, investigated two news reports, used the past perfect simple in the active and passive voice, and wrote a mystery description for your class to guess. 🔎 Badge: COMPETITION DETECTIVE",r:"One clue that helped me solve a competition today was …"},
steps:[
/* STAGE 0 */
{i:"🔎",n:"00 · Name That Competition!",t:"bucket",x:1,h:"🔎 NAME THAT COMPETITION! Apart from sports competitions, what other sorts of competition are there? Mark the ones you already know.",hint:"Choose the option that is true for you.",lab:["✅ I know it","🤔 New to me"],items:[
["🧁 Baking competition",-1,"A competition where people bake and are judged."],
["🎤 Singing competition",-1,"Contestants sing and are judged."],
["♟️ Chess championship",-1,"Players compete in a board game."],
["🔤 Spelling bee",-1,"Contestants spell words correctly."],
["📸 Photography competition",-1,"Photographers compete with their pictures."],
["🔬 Science fair",-1,"Students present science projects."],
["💃 Dance competition",-1,"Dancers perform and are judged."],
["✍️ Essay-writing contest",-1,"Writers compete with their essays."]]},
{i:"🗣️",n:"00 · Speaking challenge (20 seconds)",t:"book",lbl:"SAY",sv:"Save",x:3,min:8,oc:1,h:"🗣️ SPEAKING CHALLENGE. Choose one competition and talk for 20 seconds. Frame: In a … competition, contestants have to … The winner is the person who …",items:[
["🏆","1","What is the competition?","It is a … competition.",[],".{8,}"],
["🧑‍🤝‍🧑","2","Who takes part in it?","Contestants / competitors are …",[],".{8,}"],
["📝","3","What do participants have to do?","In a … competition, contestants have to …",[],"have to|must|need to|.{12,}"],
["🥇","4","How does someone win?","The winner is the person who …",[],"winner|win|who|.{10,}"]]},
/* STAGE 1 */
{i:"🗺️",n:"01 · Event or person?",t:"bucket",x:2,h:"🗺️ BUILD THE COMPETITION MAP. Is the word an EVENT (cuộc thi/sự kiện) or a PERSON (người tham gia)?",hint:"Event = what takes place. Person = who takes part or wins.",lab:["🎪 EVENT","🧑 PERSON"],items:[
["competition",0,"An event."],["competitor",1,"A person who takes part."],
["contest",0,"An event."],["contestant",1,"A person who takes part in a contest."],
["challenge",0,"An event or task."],["challenger",1,"A person who challenges someone."],
["championship",0,"An event."],["champion",1,"A person who has won."]]},
{i:"🔗",n:"01 · Quick matching challenge",t:"mcq",x:2,ctx:"Match each word with the correct definition.",items:[
M("competitor",["A person who takes part in a competition","The final stage of a competition","A person who has won a championship"],0,"Competitor comes from compete.","A person who takes part in a competition"),
M("semi-final",["The stage before the final","The first prize","A person who challenges someone"],0,"Semi- means half; it comes just before the final.","The stage before the final"),
M("champion",["Someone who judges a contest","A person who has won a championship","A qualifying round"],1,"A champion is a winner.","A person who has won a championship"),
M("qualifying round",["A stage used to decide who progresses","The last game in a competition","The person who wins"],0,"It is an early stage.","A stage used to decide who progresses")]},
{i:"🧩",n:"01 · Put the stages in order",t:"order",x:6,items:[0],h:"🧩 PUT THE STAGES IN ORDER. Arrange the stages from earliest to latest.",hint:"Early rounds first, the last match at the end.",cards:[
"C. Semi-final","A. Qualifying round","D. Final","B. Quarter-final"],ans:[1,3,0,2],yl:"🏁 MY ORDER",ft:"🧠 STAGES OF A COMPETITION",flow:["QUALIFYING ROUND","QUARTER-FINAL","SEMI-FINAL","FINAL"],bm:"Not quite. Start with the qualifying round and finish with the final. Undo or reset and try again."},
/* STAGE 2 */
{i:"🔮",n:"02 · Predict the reports",t:"think",x:3,h:"🔮 BEFORE LISTENING (Audio 42). You will hear two news reports of competitions. Predict what kind of competition each one is about. You will check with the audio.",lab:["🧁 Cooking / baking","🎤 Music / singing","♟️ Board game / chess","🔬 Science / school"],items:[["Report 1 is probably about …",[0,1,2,3],"report 1"],["Report 2 is probably about …",[0,1,2,3],"report 2"]],pr:"Why do you think so?",bt:"Lock my predictions",sg:"Locked! Now listen to Audio 42 and check."},
{i:"🎧",n:"02 · Audio 42 · Listen",t:"aud42",ak:"42",x:3,items:[0],tip:"Lần 1 – nghe ý chính: hai bản tin nói về cuộc thi nào? Lần 2 – nghe chi tiết để trả lời từng nhóm câu hỏi. Report 1: Junior Bake Off. Report 2: World Women’s Chess Championship.",nx:"Bây giờ trả lời câu hỏi lớn.",h:"🎧 AUDIO 42 · TWO COMPETITION REPORTS (Exercises 2–3). Listen to these two news reports of competitions."},
{i:"❓",n:"02 · Task 2.1 · Big picture",t:"think",x:3,h:"❓ TASK 2.1 (Exercise 2). Have both competitions already finished? Choose your answer, then check it with Audio 42.",lab:["Yes, both competitions have finished.","No, at least one competition has not finished.","I’m not sure yet."],items:[["Have both competitions already finished?",[0,1,2],"finished"]],pr:"What did you hear that helped you decide? Do not guess from the names of the competitions.",bt:"Lock my answer",sg:"Locked! Listen again and check the clue you wrote."},
{i:"🧁",n:"02 · Task 2.2 · Questions 1–3",t:"book",lbl:"Q",sv:"Save",x:4,min:10,oc:1,h:"🧁 TASK 2.2 (Exercise 3, questions 1–3). Answer from Audio 42, not from a guess.",items:[
["🧁","1","What is Junior Bake Off?","Junior Bake Off is …",[],".{10,}"],
["🪜","2","What are the stages of Junior Bake Off? Use the words in the Vocabulary box to help you describe them.","The stages are … First, … Then, …",["qualifying round","quarter-final","semi-final","final"],".{10,}"],
["🌟","3","In Junior Bake Off, what is a “showstopper”?","A showstopper is …",[],".{10,}"]]},
{i:"🎂",n:"02 · Task 2.2 · Questions 4–6",t:"book",lbl:"Q",sv:"Save",x:4,min:3,oc:1,h:"🎂 TASK 2.2 (questions 4–6). Listen again and note the specific details.",items:[
["🎂","4","What is Zak’s “showstopper”?","Zak’s showstopper is …",[],".{5,}"],
["🍂","5","At what time of year did the World Women’s Chess Championship take place?","It took place in …",[],"spring|summer|autumn|fall|winter|january|february|march|april|may|june|july|august|september|october|november|december|month|season"],
["🏅","6","How many times has Ju Wenjun won the championship?","She has won it … times.",[],"\\b(once|twice|one|two|three|four|five|six|seven|eight|nine|ten|\\d+)\\b|times?"]]},
{i:"♟️",n:"02 · Task 2.2 · Questions 7–8",t:"book",lbl:"Q",sv:"Save",x:4,min:10,oc:1,h:"♟️ TASK 2.2 (questions 7–8). Use the audio and your own knowledge of competitions.",items:[
["⚖️","7","“At six games all, the result was decided by a tie-break.” What do you think a tie-break is? Do other games have something similar? Think of tennis and football, for example.","A tie-break is … In tennis, … In football, …",[],".{12,}"],
["💭","8","How has playing chess influenced Ju Wenjun?","Playing chess has influenced her by …",[],".{10,}"]]},
{i:"🎯",n:"02 · Mini mission · What is a tie-break?",t:"book",lbl:"EXPLAIN",sv:"Save",x:3,min:10,oc:1,h:"🎯 MINI MISSION. Explain in English in your own way. Not every sport uses the same tie-break rule, so compare tennis and football carefully.",items:[
["🧩","1","Complete the sentence.","A tie-break is used when …",[],".{10,}"],
["🎾","2","Say what happens in tennis.","In tennis, …",[],".{8,}"],
["⚽","3","Say what happens in football.","In football, …",[],".{8,}"]]},
/* STAGE 3 */
{i:"🔍",n:"03 · Active or passive?",t:"bucket",x:2,h:"🔍 DISCOVER THE GRAMMAR. First find the subject: does it DO the action (active) or RECEIVE it (passive)?",hint:"Active: had + V3. Passive: had been + V3.",lab:["💪 ACTIVE (had + V3)","📩 PASSIVE (had been + V3)"],items:[
["Thousands of young people had applied.",0,"The young people did the action (applied)."],
["He had been chosen.",1,"He received the action – the person who chose him is not named."],
["The judges had selected the finalists.",0,"The judges did the action."],
["The finalists had been selected by the judges.",1,"The finalists received the action."],
["Zak had prepared an impressive showstopper.",0,"Zak did the action (prepared)."],
["An impressive showstopper had been prepared by Zak.",1,"The showstopper received the action."]]},
{i:"✏️",n:"03 · Grammar challenge",t:"mcq",x:2,ctx:"Choose the correct form. (Practice made for the web.) Remember: passive = had been + V3.",items:[
M("1. The judges ___ the winner before the ceremony began.",["had announced","had been announced"],0,"The judges do the action, and “the winner” is the object – active.","had announced"),
M("2. The championship trophy ___ before the final interview.",["had presented","had been presented"],1,"The trophy receives the action – passive.","had been presented"),
M("3. Many contestants ___ for the competition.",["had applied","had been applied"],0,"Apply for has no passive here; the contestants do the action.","had applied"),
M("4. The final round ___ before the audience arrived.",["had completed","had been completed"],1,"The round receives the action – passive.","had been completed"),
M("5. The champion said she ___ hard for months.",["had trained","had been trained"],0,"She did the action (trained) – active.","had trained")]},
{i:"📰",n:"03 · Reporting a passive statement",t:"mcq",x:2,ctx:"Direct: “I have been helped to prepare for the championship by my personal coach.” Reported: Ju Wenjun said she had been helped to prepare … (have been helped → had been helped). Practice made for the web.",items:[
M("“I have been helped by my coach.” → She said she ___ by her coach.",["have been helped","had been helped","had helped"],1,"Reported in the past: had been + V3.","had been helped"),
M("“The first games have been played in Shanghai.” → He said the first games ___ in Shanghai.",["have been played","had been played","had played"],1,"have been played → had been played.","had been played"),
M("Which structure is past perfect PASSIVE?",["had + V3","had been + V3","have been + V3"],1,"Past perfect passive = had been + V3.","had been + V3")]},
{i:"📘",n:"03 · Exercise · Complete the sentences",t:"book",lbl:"EX",sv:"Save",x:4,min:6,h:"📘 ORIGINAL GRAMMAR EXERCISE. Choose the past perfect simple active or passive to complete the sentences. Type only the missing words. You can listen to Audio 42 again to check.",items:[
["🅰️","a","It was one of the best moments of his life when 13-year-old Zak Travess found out that he ______ the chance to appear on Junior Bake Off. (give)","had been given",[],"had\\s+been\\s+given"],
["🅱️","b","When we met, she ______ the title of Women’s World Chess Champion, the greatest honour in women’s chess, for the third time. (just / award)","had just been awarded",[],"had\\s+just\\s+been\\s+awarded"],
["🅲","c","Her opponent ______ great determination and skill. (show)","had shown",[],"had\\s+shown"],
["🅳","d","The first six games ______ in Shanghai, before the players flew to Vladivostok for the remaining six. (play)","had been played",[],"had\\s+been\\s+played"]]},
{i:"✅",n:"03 · Check answers and explanations",t:"mcq",x:2,ctx:"Check the answers and see why. (Suggested forms based on structure and meaning.)",items:[
M("a. Zak found out that he ___ the chance to appear.",["had given","had been given","was giving"],1,"He receives the chance – passive.","had been given"),
M("b. she ___ the title … for the third time.",["had just awarded","had just been awarded","just awarded"],1,"She receives the title – passive; just goes after had.","had just been awarded"),
M("c. Her opponent ___ great determination and skill.",["had shown","had been shown","was showing"],0,"The opponent does the action – active.","had shown"),
M("d. The first six games ___ in Shanghai.",["had played","had been played","were playing"],1,"The games receive the action – passive.","had been played")]},
{i:"🔢",n:"03 · Remember · Ordinal numbers",t:"mcq",x:2,ctx:"Ordinal numbers: 1st first · 2nd second · 3rd third · 4th fourth.",items:[
M("She had won the championship for the ___ time. (3rd)",["three","third","threeth"],1,"3rd = third.","third"),
M("It was his ___ semi-final. (4th)",["four","fourth","fourd"],1,"4th = fourth.","fourth"),
M("She had come ___ in the qualifying round. (2nd)",["two","second","twoth"],1,"2nd = second.","second")]},
/* STAGE 4 */
{i:"🗂️",n:"04 · Choose your competition",t:"book",lbl:"PLAN",sv:"Save",x:3,min:6,oc:1,h:"🗂️ MYSTERY COMPETITION (Writing and speaking, Exercise 5). Think of a real competition in your country, for example baking, singing, photography, a school contest or a local cultural event. Fill in the planning card. Do not write its name!",items:[
["🎪","1","What kind of competition is it?","It is a … competition.",["baking","singing","chess","spelling","photography","science","dance","writing"],".{6,}"],
["🪜","2","What are the stages?","There is a … round, then …",["qualifying round","quarter-final","semi-final","final"],".{6,}"],
["🧑‍🤝‍🧑","3","Who takes part?","Contestants / competitors are …",[],".{6,}"],
["🧩","4","What clues will help the class guess?","Clue 1: … Clue 2: …",[],".{6,}"]]},
{i:"🧱",n:"04 · Writing frame",t:"order",x:6,items:[0],h:"🧱 WRITING FRAME. Put the four parts of a mystery description in the best order.",hint:"Start by introducing, then the stages, then the judges and prize, and end by asking.",cards:[
"C. The judges look for … The winner receives …",
"A. This competition attracts many participants every year. Before the final round, contestants have to …",
"D. Can you guess which competition I am describing?",
"B. Several competitors are selected to progress to the next stage. By the time the final begins, …"],ans:[1,3,0,2],yl:"📝 MY DESCRIPTION",ft:"🧠 MYSTERY FLOW",flow:["INTRODUCE","STAGES","JUDGES + PRIZE","ASK THE CLASS"],bm:"Not quite. Introduce first, then the stages, then the judges and prize, and finish with the question."},
{i:"✍️",n:"04 · Write the mystery",t:"book",lbl:"WRITE",sv:"Save",x:5,min:30,oc:1,h:"✍️ WRITE YOUR MYSTERY DESCRIPTION (3–4 sentences) without naming the competition. Extra challenge: use at least one sentence in the past perfect active and one in the past perfect passive, if suitable for the real competition.",items:[
["📝","1","Main description (3–4 sentences, no name!)","This competition attracts many participants every year. Before the final round, contestants have to …",[],".{30,}"],
["💪","2","One sentence in the past perfect ACTIVE (had + V3)","By the time the final begins, the contestants had …",[],"\\bhad\\s+(?!been\\b)\\w+"],
["📩","3","One sentence in the past perfect PASSIVE (had been + V3)","By then, the finalists had been …",[],"\\bhad\\s+been\\s+\\w+"]]},
{i:"📋",n:"04 · Check before reading aloud",t:"chk",x:4,items:[0],h:"📋 CHECK YOUR DESCRIPTION. Tick each point when it is true.",list:[
"I did not say the name of the competition.",
"I gave clues about the stages and the people who take part.",
"I used the past perfect active (had + V3), if suitable.",
"I used the past perfect passive (had been + V3), if suitable.",
"I can read it aloud and finish with “Can you guess which competition I am describing?”"]},
{i:"🎲",n:"04 · Class guessing game",t:"book",lbl:"GUESS",sv:"Save",x:3,min:8,oc:1,h:"🎲 CLASS GUESSING GAME. Listen to a classmate’s description. You may ask a maximum of three questions. The presenter answers only with information from the description. After a correct guess, say which clue helped you.",items:[
["❓","1","Your first question","Is it a competition for …?",[],".{8,}"],
["❓","2","Your second question","Do contestants have to …?",[],".{8,}"],
["❓","3","Your third question","Is there a … round?",[],".{8,}"],
["🔎","4","Your guess and the clue that helped you","I think it is … because the clue … helped me.",[],"because|clue|think"]]},
/* STAGE 5 */
{i:"🏆",n:"05 · FINAL · Competition Expert",t:"final",px:10,h:"🏆 YOUR FINAL MISSION. Write your best mystery description (3–5 sentences) without naming the competition. Use competition vocabulary, one past perfect active sentence, one past perfect passive sentence and finish with a question for the class.",hint:"This competition attracts … Before the final round, contestants have to … By the time the final begins, … had been … Can you guess …?",ph:"This competition attracts many participants every year. Before the final round, the contestants had … By the time the final begins, only three competitors had been … The judges look for … Can you guess which competition I am describing?",checks:[
["Uses stage vocabulary (round, quarter-final, semi-final, final)","qualifying|quarter-final|semi-final|final|round|stage",2],
["Mentions the people involved (contestant, competitor, judge, champion…)","competitor|contestant|champion|challenger|judge|participant",1],
["Past perfect active (had + V3)","\\bhad (?!been\\b)\\w+",1],
["Past perfect passive (had been + V3)","\\bhad been \\w+",1],
["Ends by asking the class to guess","guess|which competition",1]],
sk:["I can name competition stages and people involved.","I can understand the main information in the two news reports.","I can distinguish past perfect active from passive.","I can describe a competition without naming it."]}
]};
MX["6.3"].mx=MX["6.3"].steps.reduce((a,s)=>a+(s.t==="final"?s.px+5:/think|order|chk/.test(s.t)?(s.x||0):s.items.length*(s.x||0)),0);
}
/* mở thẳng link Lesson 7.4 */
if(/^#\/lesson\//.test(location.hash))route();

