/* ===== UNIT 7 · LESSON 7.2 · Try this! (key 6.1) · Learner’s Book pp. 146–147 · SPORTS EXPLORER ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const Q9="^(?=[\\s\\S]*\\?)";

/* alias: các chặng trước khi đọc không hiện khung bài đọc */
GR.mbthink=GR.think;GR.mbbook=GR.book;GR.mbmcq=GR.mcq;GR.mbbucket=GR.bucket;

LBC["6.1"]={
obj:["Đọc về hai môn thể thao: sepak takraw và kabaddi","Mô tả điều xảy ra trong mỗi môn thể thao","Nêu ý kiến về hai môn thể thao và lựa chọn của bản thân","Dùng từ vựng về giáo dục thể chất và luật chơi","Phân biệt contact / non-contact và competitive / non-competitive","Tìm thông tin cụ thể trong bài đọc và so sánh hai môn bằng bằng chứng"],
vocab:[
["physical education (PE)","giáo dục thể chất","n","We play volleyball in physical education."],
["competitive sport","môn thể thao có tính cạnh tranh (thi đấu để thắng)","n","A competitive sport has a winner and a loser."],
["non-competitive sport","hoạt động thể thao không đặt trọng tâm vào thắng thua","n","In a non-competitive sport, cooperation matters more than winning."],
["contact sport","môn thể thao có va chạm thể chất","n","Kabaddi is a contact sport."],
["non-contact sport","môn thể thao không có va chạm trực tiếp","n","Sepak takraw is a non-contact sport."],
["opposing team","đội đối phương","n","The attacker enters the opposing team’s half."],
["participant","người tham gia","n","Every participant follows the rules."],
["player","người chơi","n","Each kabaddi team has seven players."],
["attacking player","người chơi tấn công","n","The attacking player tries to touch opponents."],
["defender","người phòng thủ","n","The defenders try to stop the attacker."],
["to attack","tấn công","v","One player attacks the opposing team."],
["to defend","phòng thủ","v","The other players defend their side."],
["to score points","ghi điểm","v","A kabaddi attacker scores points by touching opponents."],
["to score a goal","ghi bàn","v","The team scores a goal."],
["rattan","song mây (dùng đan quả bóng sepak takraw)","n","The ball is made of woven rattan."],
["agility","sự nhanh nhẹn, linh hoạt","n","Kabaddi players need strength, speed and agility."],
["half-time","giờ nghỉ giữa hiệp","n","There is a five-minute break at half-time."]],
gram:[
{t:"Hai cặp khái niệm khác nhau",r:"Competitive / non-competitive: hoạt động có đặt trọng tâm vào thắng thua hay không. Contact / non-contact: có va chạm trực tiếp giữa người chơi hay không. Đừng gộp hai cặp: một môn có thể mang tính cạnh tranh mà không va chạm (ví dụ sepak takraw thi đấu).",ex:["Sepak takraw: non-contact; has competitive and non-competitive forms.","Kabaddi: competitive and contact."]},
{t:"Ngôn ngữ so sánh hai môn",r:"Dùng các khung: Both sports involve … · … is different from … because … · While … uses …, … involves … · In contrast, … · One similarity is … Chỉ dùng thông tin có trong bài đọc.",ex:["While sepak takraw uses a rattan ball, the description of kabaddi does not mention equipment.","In contrast, kabaddi is a contact sport."]}],
tips:[
"Scan để tìm thông tin cụ thể: body parts (feet, knees, chest, head) · material (rattan) · số người (2–4 / 7) · điều kiện thắng (21 điểm) · thời gian (45 phút gồm 5 phút nghỉ).",
"Kabaddi: bài đọc không nêu dụng cụ cụ thể, nên khi so sánh không tự thêm thông tin ngoài bài.",
"Câu hỏi mở (môn nào cần nhiều kỹ năng hơn? môn nào thú vị hơn?) được đánh giá bằng lý do, không có đáp án cố định.",
"Web bổ sung (không phải bài tập gốc): phân loại contact/competitive, reading checkpoints, Question Architect, bài mẫu và 60-second final. Phần đọc trên web là bản tóm lược từ sách tr. 147; hãy đối chiếu với sách."]};

RDT["6.1"]={t:"Reading · Sepak takraw & Kabaddi",h:
"<p class=\"font-bold text-blue-700 pt-1\">Sepak takraw</p>"+
"<p>Môn vận động giống bóng chuyền, nhưng người chơi <b>không được dùng tay</b> đưa bóng qua lưới: họ dùng <b>bàn chân, đầu gối, ngực và đầu</b>.</p>"+
"<p>Quả bóng làm từ <b>rattan</b> (song mây mọc quanh cây lớn trong rừng mưa ở châu Phi, Malaysia và Philippines), thường được đan để làm đồ nội thất.</p>"+
"<p>Thường chơi trên sân trong nhà <b>gấp đôi sân cầu lông</b>, cũng có thể chơi ngoài trời. <b>Không va chạm trực tiếp</b>. Mỗi đội có <b>hai đến bốn</b> người. Đội đầu tiên đạt <b>21 điểm</b> thắng.</p>"+
"<p>Nguồn gốc: <b>Malaysia, thế kỷ 15</b>. Một số hình thức trước đây không cạnh tranh mà là màn trình diễn kỹ năng phối hợp để rèn cơ thể và độ linh hoạt. Ở Myanmar có hình thức <b>chinlone</b>: người chơi phối hợp, không đối đầu, di chuyển uyển chuyển và giữ bóng trên không càng lâu càng tốt.</p>"+
"<p class=\"font-bold text-blue-700 pt-2\">Kabaddi</p>"+
"<p>Môn đối kháng <b>có tính cạnh tranh và có va chạm</b>, giữa hai đội, mỗi đội <b>bảy</b> người.</p>"+
"<p>Trận đấu <b>45 phút</b> gồm <b>5 phút nghỉ giữa hiệp</b>; trong nhà hoặc ngoài trời, sân <b>13 m × 10 m</b> chia đôi bằng một đường kẻ trắng.</p>"+
"<p>Để ghi điểm, một người tấn công hít một hơi thật sâu, vào nửa sân đối phương, <b>liên tục hô “kabaddi kabaddi”</b> và cố chạm càng nhiều đối thủ càng tốt mà không bị bắt. Được <b>một điểm cho mỗi người chạm được</b>, rồi phải về sân mình trước khi phải lấy hơi lần tiếp theo. Phòng thủ cố bắt người tấn công hoặc ngăn họ quay về.</p>"+
"<p>Cần <b>sức mạnh, tốc độ và sự nhanh nhẹn</b>. Được cho là bắt nguồn ở <b>Tamil Nadu, Ấn Độ, khoảng 4.000 năm trước</b>.</p>",
n:"Bản tóm lược từ Learner’s Book tr. 147 – hãy đối chiếu với bài đọc gốc trong sách."};

MX["6.1"]={code:"07.2",title:"Sports Explorer",
q:"How are different sports played, and what makes each sport interesting? · GUESS → EXPLORE → READ → INVESTIGATE → COMPARE → PRESENT",
end:{t:"🏅 MISSION COMPLETE – SPORTS EXPLORER",did:"You predicted how two sports are played, unlocked key words about physical education, read about sepak takraw and kabaddi, found evidence, wrote questions, compared the two sports in a chart and in sentences, chose your sport and gave a 60-second description. 🏅 Badge: SPORTS EXPLORER",r:"One thing I want to find out about another unusual sport is …"},
steps:[
/* STAGE 0 · SPORTS DETECTIVE */
{i:"🔍",n:"00 · What sport is this?",t:"mbthink",x:3,h:"🔍 SPORTS DETECTIVE (Exercise 1). Study the two clues and predict which sport each one describes. You have not read the texts yet, so “Not sure yet” is allowed.",lab:["🦶 SEPAK TAKRAW","🏃 KABADDI","❓ NOT SURE YET"],items:[
["Clue A: Players use their feet, knees, chest and head to move a ball over a net. They cannot use their hands.",[0,1,2],"A"],
["Clue B: One attacking player enters the opposing team’s half, tries to touch opponents and must return without being caught.",[0,1,2],"B"]],pr:"Which words in the clue helped you? Write them.",bt:"Lock my predictions",sg:"Locked! How can we find out whether our predictions are correct? By reading and finding evidence."},
{i:"📺",n:"00 · Enjoyable to watch",t:"mbbook",lbl:"TALK",sv:"Save",x:3,min:12,h:"📺 GETTING STARTED. Which sport is most enjoyable to watch? Why? There is no wrong answer.",items:[
["📺","1","Which sport is most enjoyable to watch? Why?","I enjoy watching … because …",["exciting","fast","skilful","teamwork"],"because"]]},
/* STAGE 1 · PE TOOLKIT */
{i:"🧰",n:"01 · Key words: meanings",t:"mbmcq",x:2,ctx:"Key words, p. 146. Choose the best meaning.",items:[
M("physical education (PE)",["a school subject with exercise and sports","a science lesson about the body","a sports shop"],0,"PE = giáo dục thể chất.","a school subject with exercise and sports"),
M("a competitive sport",["players compete to win","players only cooperate","a sport without rules"],0,"Compete = thi đấu.","players compete to win"),
M("a non-competitive activity",["cooperation or taking part matters more than winning","a very dangerous sport","a game with two teams of seven"],0,"Non-competitive = không đặt nặng thắng thua.","cooperation or taking part matters more than winning"),
M("a contact sport",["players have physical contact with each other","players are separated by a net","players use only their feet"],0,"Contact = va chạm.","physical contact between players"),
M("a participant",["a person who takes part","a person who sells tickets","a type of ball"],0,"Take part = tham gia.","a person who takes part"),
M("an opposing team",["the team you play against","your own team","the referee’s team"],0,"Opposing = đối phương.","the team you play against")]},
{i:"🎬",n:"01 · People and actions",t:"mbmcq",x:2,ctx:"Choose the best word or phrase.",items:[
M("The ___ player tries to touch opponents and return safely.",["defending","attacking","opposing"],1,"The one who attacks.","attacking"),
M("The ___ try to stop the attacker.",["defenders","participants","referees"],0,"They defend.","defenders"),
M("In kabaddi, an attacker ___ points by touching opponents.",["scores","defends","joins"],0,"Score points.","scores points"),
M("In football, a team can ___ a goal.",["defend","score","attack to"],1,"Score a goal.","score a goal"),
M("Every team must ___ its own side from the attackers.",["score","defend","participate"],1,"Protect your side = defend.","defend")]},
{i:"🏆",n:"01 · Competitive or non-competitive?",t:"mbbucket",x:2,h:"🏆 SORT THE SITUATIONS. Use the description in each sentence.",hint:"Competitive = trying to win. Non-competitive = cooperating, taking part or performing skills together.",lab:["🏆 COMPETITIVE","🤝 NON-COMPETITIVE"],items:[
["Two teams play to win a match.",0],
["Participants cooperate to keep a ball in the air for as long as possible, without opposing teams.",1],
["Players score points to beat the other team.",0],
["A group of friends passes a ball just for fun and exercise.",1]]},
{i:"💥",n:"01 · Contact or non-contact?",t:"mbbucket",x:2,h:"💥 SORT THE SITUATIONS. This pair is different from the last one: it is about physical contact.",hint:"Contact = players touch or tackle opponents. Non-contact = players do not normally touch opponents.",lab:["💥 CONTACT","🚫 NON-CONTACT"],items:[
["Players physically tackle or make contact with opponents.",0],
["Players are separated by a net and do not normally touch opponents during play.",1],
["A defender tries to catch an attacker with his hands.",0],
["Players use their feet to pass a ball over a net.",1]],
sg:"💡 A sport can be competitive without contact (sepak takraw) or competitive with contact (kabaddi)."},
/* STAGE 2 · READING INVESTIGATION */
{i:"🔮",n:"02 · Predict before reading",t:"mbbook",lbl:"PREDICT",sv:"Save",x:3,min:15,oc:1,h:"🔮 Look at the pictures in your book (p. 146). Do you recognise the sports? What do you think players have to do in each? You will check your ideas after reading.",items:[
["🦶","1","Sport 1: What do you think players have to do?","I think the players have to …",["It looks similar to …","The main objective might be …"],"think|looks|might"],
["🏃","2","Sport 2: What do you think players have to do? Contact or non-contact?","I think it is a contact / non-contact sport because …",["It looks similar to …","I think the players have to …"],"think|looks|because"]]},
{i:"🦶",n:"02 · Checkpoint A · Sepak takraw",t:"mcq",x:2,ctx:"📖 Use the reading panel. Scan for the specific information.",items:[
M("What parts of the body can players use to move the ball?",["feet, knees, chest and head","hands, arms and feet","only the feet"],0,"Look for the body parts.","feet, knees, chest and head"),
M("What is the ball made of?",["plastic","rattan","leather"],1,"A kind of woven cane.","rattan"),
M("How many players are there in each team?",["seven","two to four","eleven"],1,"Look for the numbers.","two to four"),
M("How does a team win a usual competitive game?",["by being the first to reach 21 points","by scoring most goals in 45 minutes","by keeping the ball up longest"],0,"Look for 21.","first team to reach 21 points"),
M("How is chinlone different from competitive sepak takraw?",["players cooperate and do not compete to win","players use their hands","it is played on a smaller court"],0,"Think of Myanmar.","it is non-competitive and cooperative")]},
{i:"🏃",n:"02 · Checkpoint B · Kabaddi",t:"mcq",x:2,ctx:"📖 Use the reading panel. Catch the rules.",items:[
M("How many players are there in each team?",["five","seven","eleven"],1,"Look for the number.","seven"),
M("How long does a game last, including the half-time break?",["90 minutes","30 minutes","45 minutes, with a 5-minute break"],2,"Look for time.","45 minutes including a 5-minute half-time break"),
M("What does the attacking player try to do?",["touch as many opponents as possible without being caught","score a goal with their feet","hit a ball over a net"],0,"A raid.","touch as many opponents as possible without being caught"),
M("What must the attacker keep doing in the opposing half?",["saying “kabaddi kabaddi”","staying silent","passing a ball"],0,"The chant.","keep saying “kabaddi kabaddi”"),
M("What physical abilities do players need?",["height and patience","strength, speed and agility","balance and a ball"],1,"Three abilities.","strength, speed and agility"),
M("Where is kabaddi thought to come from, and when?",["Malaysia, 15th century","Tamil Nadu, India, about 4,000 years ago","Myanmar, 100 years ago"],1,"Origin.","Tamil Nadu, about 4,000 years ago")]},
{i:"❓",n:"02 · Question Architect · Sepak takraw",t:"book",lbl:"ANSWER",sv:"Save",x:3,min:10,oc:1,h:"❓ EXERCISE 2. Read the descriptions. What are the questions for these answers? Write one question for each answer, starting with Can, What, How big, How many, Why or Where.",items:[
["🅰️","a","Answer: “No, you can only use your feet, knees, chest and head.”","Can you …?",[],Q9+"(?=[\\s\\S]*(hand|use|allowed|only))"],
["🅱️","b","Answer: “Rattan.”","What is …?",[],Q9+"(?=[\\s\\S]*(made|ball|material))"],
["🅲","c","Answer: “It’s twice the size of a badminton court.”","How big …?",[],Q9+"(?=[\\s\\S]*(size|big|large|court))"],
["🅳","d","Answer: “Between two and four players.”","How many …?",[],Q9+"(?=[\\s\\S]*(how many|players|team))"],
["🅴","e","Answer: “It’s different because it’s a non-competitive sport.”","Why …?",[],Q9+"(?=[\\s\\S]*(different|difference|chinlone|why|how))"]]},
{i:"❓",n:"02 · Question Architect · Kabaddi",t:"book",lbl:"ANSWER",sv:"Save",x:3,min:10,oc:1,h:"❓ EXERCISE 2 (continued). Write one question for each answer about kabaddi.",items:[
["🅵","f","Answer: “There are seven players in each team.”","How many …?",[],Q9+"(?=[\\s\\S]*(how many|players|team))"],
["🅶","g","Answer: “Forty-five minutes.”","How long …?",[],Q9+"(?=[\\s\\S]*(long|minutes|last|time))"],
["🅷","h","Answer: “Kabaddi kabaddi.”","What …?",[],Q9+"(?=[\\s\\S]*(what|shout|say|call|word|chant))"],
["🅸","i","Answer: “Tamil Nadu, about 4000 years ago.”","Where …?",[],Q9+"(?=[\\s\\S]*(where|when|origin|start|come|begin))"]]},
{i:"🧐",n:"02 · Question quality check",t:"mcq",x:2,ctx:"Suggested questions (possible wording, not the only correct form). Which question fits each answer best?",items:[
M("“Rattan.”",["Where is kabaddi from?","What is the ball made of?","How many players are there?"],1,"Answer = a material.","What is the ball made of?"),
M("“Forty-five minutes.”",["How long does a kabaddi game last?","How many players are in a team?","How big is the court?"],0,"Answer = time.","How long does a kabaddi game last?"),
M("“Between two and four players.”",["How long is the game?","How big is the court?","How many players are there in each team?"],2,"Answer = a number of players.","How many players are there in each team?"),
M("“Tamil Nadu, about 4000 years ago.”",["Is kabaddi a contact sport?","What is the ball made of?","Where is kabaddi said to have originated, and approximately when?"],2,"Place and time.","Where and when did kabaddi originate?"),
M("“It’s twice the size of a badminton court.”",["How big is a sepak takraw court compared with a badminton court?","How many players are there?","What do players shout?"],0,"Answer compares sizes.","How big is the court compared with a badminton court?"),
M("“No, you can only use your feet, knees, chest and head.”",["Can you use your hands to play sepak takraw?","How long does a game last?","What is chinlone?"],0,"Yes/No answer.","Can you use your hands to play sepak takraw?")]},
/* STAGE 3 · COMPARISON LAB */
{i:"🤔",n:"03 · Think about it A · Skill",t:"think",x:3,h:"🤔 EXERCISE 3a. Which requires more skill, volleyball or sepak takraw? (Open question: your reason matters more than your choice.)",lab:["🏐 VOLLEYBALL","🦶 SEPAK TAKRAW","⚖️ BOTH, DIFFERENT SKILLS"],items:[["Which requires more skill?",[0,1,2],"skill"]],pr:"Explain your choice. Think about which body parts players use.",bt:"Lock my answer",sg:"Locked! Your reason is what counts."},
{i:"🫁",n:"03 · Think about it B · “Kabaddi”",t:"book",lbl:"WHY",sv:"Save",x:5,min:20,h:"🫁 EXERCISE 3b. Why does the attacking player have to keep saying “kabaddi”? Go back to the rules in the reading panel and use the breath rule in your answer.",items:[
["🫁","1","Why must the attacker keep saying “kabaddi kabaddi”?","The attacker must keep saying “kabaddi kabaddi” because …",["breath","return","rule"],"breath|breathe|return|rule|prove|show"]]},
{i:"🗂️",n:"03 · Sort the features",t:"bucket",x:2,h:"🗂️ WHICH SPORT? Sort each fact: sepak takraw, kabaddi, or both. Use only the reading.",hint:"Check the reading panel.",lab:["🦶 SEPAK TAKRAW","🏃 KABADDI","🤝 BOTH"],items:[
["Players cannot use their hands to move the ball over the net.",0],
["An attacker enters the opposing half and tries to touch opponents.",1],
["Teams have two to four players.",0],
["Teams have seven players.",1],
["It can be played indoors or outdoors.",2],
["It is a non-contact sport.",0],
["It is a contact sport.",1],
["The first team to reach 21 points wins.",0],
["A game lasts 45 minutes, with a five-minute break.",1],
["It uses a woven rattan ball.",0],
["Two teams play against each other.",2]]},
{i:"📊",n:"03 · Rebuild the comparison chart",t:"book",lbl:"CHART",sv:"Save",x:4,min:8,oc:1,h:"📊 EXERCISE 4. Complete the comparison chart for sepak takraw and kabaddi. Write both sports in each box (Sepak takraw: … / Kabaddi: …). Use only information from the descriptions.",items:[
["💥","1","Contact / non-contact","Sepak takraw: … Kabaddi: …",["non-contact","contact"],"contact[\\s\\S]*contact"],
["🏆","2","Competitive / non-competitive","Sepak takraw: … Kabaddi: …",["competitive","non-competitive"],"^(?=[\\s\\S]*competitive)(?=[\\s\\S]*(both|non.?competitive|cooperat|chinlone|form))"],
["👥","3","Teams and players","Sepak takraw: … Kabaddi: …",[],"(2|two)[\\s\\S]*(4|four)[\\s\\S]*(7|seven)"],
["🧺","4","Equipment","Sepak takraw: … Kabaddi: …",["rattan ball"],"^(?=[\\s\\S]*rattan)(?=[\\s\\S]*(not|none|no |n/a|unknown|—))"],
["⏱️","5","Time limit / winning condition","Sepak takraw: … Kabaddi: …",["21 points","45 minutes"],"21[\\s\\S]*45|45[\\s\\S]*21"],
["🏟️","6","Location","Sepak takraw: … Kabaddi: …",["indoors","outdoors"],"indoor[\\s\\S]*outdoor|outdoor[\\s\\S]*indoor"]]},
{i:"✅",n:"03 · Check the tricky boxes",t:"mcq",x:2,ctx:"Three boxes need care. Check them against the reading.",items:[
M("Is sepak takraw competitive or non-competitive?",["only competitive","both: competitive games and non-competitive forms such as chinlone","only non-competitive"],1,"Remember chinlone.","Both, depending on the form played."),
M("What equipment does the kabaddi description mention?",["a rattan ball","a net","none is specified in the description"],2,"Do not add facts that are not in the text.","Not specified in the supplied description."),
M("Which pair is correct?",["Sepak takraw: contact · Kabaddi: non-contact","Sepak takraw: non-contact · Kabaddi: contact","Both are contact sports"],1,"Net vs raid.","Sepak takraw: non-contact; kabaddi: contact."),
M("Which time or winning facts match each sport?",["Kabaddi: first to 21 points · Sepak takraw: 45 minutes","Sepak takraw: first to 21 points · Kabaddi: 45 minutes with a 5-minute break","Both: 45 minutes"],1,"21 points = sepak takraw.","Sepak takraw: 21 points · Kabaddi: 45 min incl. 5-minute half-time.")]},
{i:"✍️",n:"03 · Compare using full sentences",t:"book",lbl:"COMPARE",sv:"Save",x:4,min:20,oc:1,h:"✍️ Turn the chart into sentences. Frames: Both sports involve … · Sepak takraw is different from kabaddi because … · While sepak takraw uses …, kabaddi involves … · In sepak takraw, the first team to … wins. · In contrast, kabaddi players must … · One similarity is …",items:[
["👥","1","Compare the number of players.","Each sepak takraw team has …, while each kabaddi team has …",["While","whereas"],"(two|2|four|4)[\\s\\S]*(seven|7)|(seven|7)[\\s\\S]*(two|2|four|4)"],
["🏁","2","Compare the scoring system or winning condition.","In sepak takraw, the first team to … wins. In kabaddi, …",["In contrast"],"21|45|point|wins|touch"],
["⚖️","3","Explain one important difference.","Sepak takraw is different from kabaddi because …",["Sepak takraw is different from kabaddi because"],"different|because|while|whereas|in contrast|unlike"]]},
/* STAGE 4 · CHOOSE YOUR SPORT */
{i:"🏗️",n:"04 · Build a description",t:"order",x:8,items:[0],h:"🏗️ SPEAKING STRUCTURE (Exercise 5). Put the sentences in order: introduce · how it is played · rules · opinion.",hint:"Introduce → explain how → rules → opinion.",cards:[
"C. There are two teams of two to four players. The first team to reach 21 points wins.",
"A. Sepak takraw is an action-packed sport similar to volleyball.",
"D. I would choose sepak takraw because I enjoy sports that require balance and coordination.",
"B. Players use their feet, knees, chest and head to move the ball over a net."],ans:[1,3,0,2],yl:"🎙️ MY COMMENTARY",ft:"🧠 DESCRIPTION FLOW",flow:["1 · INTRODUCE","2 · HOW IT IS PLAYED","3 · RULES","4 · OPINION"],bm:"Not quite. Introduce the sport first, explain how it is played, give the rules, and end with your opinion."},
{i:"🔍",n:"04 · Model detective · Kabaddi",t:"bucket",x:2,h:"🔍 SAMPLE COMMENTARY (supplementary model). Sort each sentence by its job. The opinion in the model is only an example.",hint:"Introduce = what is it? How/rules = facts. Opinion = personal view.",lab:["🎬 INTRODUCE","⚙️ HOW / RULES","💬 OPINION"],items:[
["Kabaddi is a competitive contact sport played between two teams of seven players.",0],
["A game lasts for 45 minutes, including a five-minute break at half-time.",1],
["During a raid, one attacking player enters the opposing team’s half and tries to touch as many defenders as possible without being caught.",1],
["I would like to watch kabaddi because the game requires strength, speed and agility.",2]]},
{i:"🎙️",n:"04 · Your turn: choose your sport",t:"book",lbl:"CHOOSE",sv:"Save",x:5,min:20,h:"🎙️ Which sport would you choose? Pick a chip, then write notes. Use facts from the reading and your own reason. You may disagree with the model.",items:[
["⭐","1","Choose your sport and say why","I would choose … because …",["Sepak takraw","Kabaddi","Both"],"because"],
["📌","2","Add at least two accurate facts","Facts: …",["21 points","45 minutes","seven players","two to four players","rattan ball","raid"],"21|45|seven|7|two to four|rattan|breath|chant|raid|tamil|myanmar|chinlone|half-time"]]},
{i:"📋",n:"04 · Speaking checklist",t:"chk",x:4,items:[0],h:"📋 Tick each point when you have done it. Partner option: Student A (commentator) describes one sport; Student B (coach) asks one rules question; swap. If you study alone, play both roles aloud.",list:["I introduced the sport.","I explained how it is played.","I included at least two accurate facts.","I used vocabulary from the lesson.","I gave my opinion and explained why."]},
/* STAGE 5 · EXIT CHALLENGE */
{i:"🏆",n:"05 · FINAL · 60-Second Sports Explorer",t:"final",px:10,h:"🏆 DESCRIBE. COMPARE. CHOOSE. Imagine you are introducing an unusual sport to a friend who has never heard of it. In about 60 seconds: introduce it, explain how it is played, give two rule facts, compare it with the other sport, and say whether you would like to try it or watch it.",hint:"Use the reading panel for facts. Frames: … is a … sport. · Players … · There are … · In contrast, … · I would like to try / watch … because …",ph:"Kabaddi is a competitive contact sport. Players … There are … while sepak takraw … I would like to … because …",checks:[
["Introduces a sport","sepak takraw|kabaddi",1],
["Explains how it is played","\\b(use|uses|enter|enters|touch|touches|raid|attack|attacking|defend|kick|move|keep|shout|shouting|chant|return)\\b",1],
["Gives two accurate facts","21 points|45 minutes|seven players|7 players|two to four|2.{1,4}4 players|rattan|tamil nadu|4,?000|myanmar|chinlone|half-time|indoors|outdoors|13 ?m",2],
["Compares with the other sport","while|whereas|in contrast|both|similar|different|unlike|on the other hand|however",1],
["Uses lesson vocabulary","contact|competitive|opposing|participant|player|attack|defend|score|physical education",2],
["Gives an opinion with a reason","(i would (like|choose|prefer)|i think|in my opinion|i prefer)[\\s\\S]*because|because[\\s\\S]*(i would|i think)",1]],
sk:["I can identify the main features of sepak takraw and kabaddi.","I can find specific facts in a descriptive text.","I can explain the difference between contact and non-contact sports.","I can distinguish competitive and non-competitive forms of sport.","I can use the key words to describe players, actions and scoring.","I can compare two sports and explain my opinion."]}
]};
MX["6.1"].mx=MX["6.1"].steps.reduce((a,s)=>a+(s.t==="final"?s.px+5:/think|order|chk/.test(s.t)?(s.x||0):s.items.length*(s.x||0)),0);
}
/* mở thẳng link Lesson 7.2 */
if(/^#\/lesson\//.test(location.hash))route();


