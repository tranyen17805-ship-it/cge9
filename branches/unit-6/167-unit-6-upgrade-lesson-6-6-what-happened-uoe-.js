/* ===== UNIT 6 UPGRADE · Lesson 6.6 What happened? + UoE p.98–101 (nguồn: Student’s Book pp.132–133, Workbook pp.97–101) ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const calc=m=>{m.mx=m.steps.reduce((a,s)=>a+(s.t==="final"?(s.px||0):s.items.length*(s.x||0)),0)};
const after=(m,name,steps)=>{const i=m.steps.findIndex(s=>s.n===name);m.steps.splice(i<0?m.steps.length-1:i+1,0,...steps);calc(m)};
const before=(m,type,steps)=>{let i=-1;m.steps.forEach((s,k)=>{if(s.t===type)i=k});m.steps.splice(i<0?m.steps.length:i,0,...steps);calc(m)};

/* ---------- 6.6 · từ vựng (9 → 18 từ, có ví dụ) ---------- */
LBC["5.5"].vocab=[
["witness","nhân chứng","n","A witness is someone who sees an event happen."],
["statement","lời khai","n","The police took a statement from each witness."],
["parked car","xe ô tô đỗ bên đường","n","There was a row of parked cars along the road."],
["wing mirror","gương chiếu hậu bên ngoài xe","n","He caught the van’s wing mirror and fell off his bike."],
["selfie stick","gậy tự sướng","n","He had a phone on a selfie stick in his left hand."],
["handlebars","ghi đông xe đạp","n","He was holding the handlebars with his right hand."],
["crash into","đâm vào","v","The cyclist crashed into the car door."],
["fall off","ngã khỏi","v","He fell off his bike but wasn’t badly hurt."],
["accident","tai nạn","n","It was just an accident as far as I could see."],
["pavement","vỉa hè","n","I was standing on the pavement at the end of the street."],
["cyclist","người đi xe đạp","n","The cyclist was passing a row of parked cars."],
["reliable","đáng tin cậy","adj","Which statement is the most reliable?"],
["inconsistency","điểm không nhất quán","n","Compare the two accounts and find the inconsistencies."],
["pedestrian zone","khu vực dành cho người đi bộ","n","I was walking through the pedestrian zone."],
["crowded","đông đúc","adj","The street was crowded and people were shopping."],
["helmet","mũ bảo hiểm","n","He was wearing a helmet, so he wasn’t badly hurt."],
["scarf","khăn quàng cổ","n","She was wearing a long scarf and a long coat."],
["fortunately","may mắn là","adv","Fortunately, he wasn’t going very fast."]
];

/* ---------- 6.6 Learner’s Book mission (13 → 18 bước) ---------- */
after(MX["5.5"],"Find the inconsistencies",[
{i:"🧩",n:"Words in the statements",t:"mcq",x:2,ctx:"Choose the best meaning of the words in Witness A and Witness B (Student’s Book p. 132).",items:[
 M("pavement",["the path at the side of a road for people walking","a type of bicycle","a road for cars only"],0,"Witness B was standing on it.","pavement = path for walkers"),
 M("a row of parked cars",["cars standing in a line at the side of the road","cars driving fast","cars for sale"],0,"Both witnesses mention it.","a line of parked cars"),
 M("reliable",["can be trusted","very expensive","easy to forget"],0,"Which statement is the most reliable?","reliable = trustworthy"),
 M("inconsistency",["a difference between two accounts","a type of accident","a way to ride a bike"],0,"Compare the two statements.","a difference"),
 M("Fortunately, he wasn’t going very fast.",["It was lucky that he wasn’t going fast.","He didn’t want to go fast.","He was going very fast."],0,"Fortunately = luckily.","luckily"),
 M("as far as I could see",["from what I could see (maybe not everything)","everything I know","from a long distance"],0,"Witness B uses it.","from what I could see")]},
{i:"⚖️",n:"What makes a statement reliable?",t:"mcq",x:3,ctx:"Suggested answers (not an official key). Which statement is more reliable?",items:[
 M("Which witness is more reliable?",["Someone who saw the event directly","Someone who heard about it later","Someone who is a friend of the driver"],0,"Direct evidence.","who saw it directly"),
 M("Which statement is more reliable?",["It happened at 3.15 p.m. and the bike was red.","It happened sometime and the bike was some colour.","I think everyone was wrong."],0,"Specific details.","specific details"),
 M("A witness says: “It was just an accident as far as I could see.” This is …",["an opinion based on what they saw","an exact fact about the whole event","a lie"],0,"as far as I could see = limited view.","an opinion"),
 M("Different details in two statements mean …",["we need to check which details can be confirmed","one witness is lying","the accident did not happen"],0,"Different ≠ lying.","check, don’t assume")]}
]);
after(MX["5.5"],"04 · Choose the tense",[
{i:"🎬",n:"Scene, interruption or intention?",t:"bucket",x:2,h:"🎬 SORT THE SENTENCES. Is the past continuous used for a scene / background, an interrupted action or a past intention?",hint:"scene = describes what was happening · interrupted = action in progress + past simple · intention = was / were going to.",lab:["🎬 SCENE / BACKGROUND","⏸️ INTERRUPTED ACTION","🎯 PAST INTENTION"],items:[["I was standing on the pavement at the end of the street.",0],["He was looking at the phone when someone opened the car door.",1],["He had his arm out to show that he was going to turn left.",2],["He was wearing a blue T-shirt and blue jeans.",0],["I wasn’t paying attention when I opened the door.",1],["I was going to get my bag from the back of the car.",2]]}
]);
after(MX["5.5"],"Support your verdict",[
{i:"📋",n:"Fact or opinion?",t:"bucket",x:2,h:"📋 SORT THE STATEMENTS from Witness A and B. A statement should give facts; opinions and guesses are less reliable.",hint:"Fact = something you can check. Opinion / guess = I think, as far as I could see, fortunately.",lab:["📋 FACT","💭 OPINION / GUESS"],items:[["He was wearing a blue T-shirt and blue jeans.",0],["I think he got too close to a silver van.",1],["Someone in a silver Mercedes opened the car door.",0],["It was just an accident as far as I could see.",1],["He fell off his bike.",0],["Fortunately, he wasn’t going very fast.",1]],sg:"💡 In Project 2 (a witness statement) you must give facts, not opinions."}
]);
before(MX["5.5"],"final",[
{i:"🔎",n:"Report check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR REPORT before the final challenge.",list:["I used information from both witnesses.","I described the scene with the past continuous.","I used the past simple for the event that interrupted it.","I separated facts from opinions.","I explained which details are inconsistent."]}
]);

/* ---------- 6.6 Workbook p.97 mission (7 → 12 bước) ---------- */
after(MX["w5.5"],"Vocabulary toolkit",[
{i:"🗂️",n:"Detail detective",t:"bucket",x:2,h:"🗂️ SORT THE DETAILS from the witness account (Workbook p. 97). What type of detail is each one?",hint:"Weather · appearance · clothing · position · action.",lab:["🌦️ WEATHER","💇 APPEARANCE","👕 CLOTHING","📍 POSITION","🏃 ACTION"],items:[["It was raining.",0],["a woman with dark hair",1],["a long scarf and a long coat",2],["Behind her on the right was a man on a bike.",3],["They were eating a sandwich and some snacks.",4],["a woman with short hair and glasses",1],["wearing trousers and boots",2]],sg:"💡 Checking each type of detail one by one helps you find the ten mistakes."},
{i:"📍",n:"Describing position",t:"mcq",x:2,ctx:"Extra practice (not from the book). Choose the correct position word.",items:[
 M("___ her on the right was a man on a bike.",["Behind","Between","Through"],0,"Behind = at the back of.","Behind"),
 M("A man and a teenager were standing ___ the left.",["on","at","in"],0,"on the left / on the right.","on the left"),
 M("A woman was riding her bike ___ me.",["towards","between","behind of"],0,"towards = in my direction.","towards"),
 M("I was walking ___ the pedestrian zone.",["through","across of","between"],0,"through = from one side to the other inside an area.","through"),
 M("People were riding bikes ___ one side of the road.",["on","at","to"],0,"on one side.","on one side")]},
{i:"👗",n:"with, wearing or in?",t:"mcq",x:2,ctx:"Describe people accurately. Choose the correct word.",items:[
 M("A woman ___ dark hair was riding her bike.",["with","wearing","in"],0,"with + hair.","with"),
 M("He was ___ a helmet.",["wearing","with in","having on"],0,"wearing + clothes / helmet.","wearing"),
 M("A woman ___ short hair and glasses was also riding a bike.",["with","wearing","in the"],0,"with + hair, glasses.","with"),
 M("The man was ___ a jacket and a hat.",["wearing","with","carrying on"],0,"wearing + clothes.","wearing")]}
]);
after(MX["w5.5"],"Grammar booster",[
{i:"🗣️",n:"Witness voice",t:"mcq",x:2,ctx:"Extra practice (not from the book). Choose the best verb form for a witness statement.",items:[
 M("I ___ along the road when I saw a cyclist.",["was walking","walked","am walking"],0,"Background action.","was walking"),
 M("A man ___ a helmet. (describing him)",["was wearing","wore to","is wearing"],0,"Describing a person.","was wearing"),
 M("Suddenly, the cyclist ___ off his bike.",["fell","was falling","has fallen"],0,"Sudden event.","fell"),
 M("People ___ in the street when the accident happened.",["were shopping","shopped","are shopping"],0,"Scene / background.","were shopping"),
 M("Which sentence is correct?",["She was riding towards me.","She was ride towards me.","She riding towards me."],0,"was + V-ing.","was riding")]}
]);
before(MX["w5.5"],"final",[
{i:"🔎",n:"Statement check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR STATEMENT before the final challenge.",list:["I described the scene first.","I used the past continuous for actions in progress.","I described appearance and clothing with with / wearing.","I only wrote facts I am sure about.","I used the past simple for the sudden event."]}
]);

/* ---------- UoE p.98–99 · Third conditional (8 → 14 bước) ---------- */
after(MX["u5.1"],"Focus 2 · Circle the correct words (e–g)",[
{i:"🔁",n:"From fact to imagined",t:"mcq",x:2,ctx:"Extra practice (not from the book). Real past event → imagined third conditional.",items:[
 M("Fact: I got up late, so I missed the bus. → If I ___ earlier, I wouldn’t have missed the bus.",["had got up","got up","would get up"],0,"if + past perfect.","had got up"),
 M("Fact: She didn’t study, so she failed. → If she ___, she wouldn’t have failed.",["had studied","studied","would study"],0,"if + past perfect.","had studied"),
 M("Fact: We didn’t check the weather, so we got wet. → If we had checked the weather, we ___ wet.",["wouldn’t have got","won’t get","hadn’t got"],0,"would + have + V3.","wouldn’t have got"),
 M("Fact: He forgot his keys, so he couldn’t get in. → If he ___ his keys, he could have got in.",["hadn’t forgotten","didn’t forget","wouldn’t forget"],0,"negative past perfect.","hadn’t forgotten"),
 M("Fact: They were worried, so they called the doctor. → If they ___ worried, they wouldn’t have called the doctor.",["hadn’t been","weren’t","wouldn’t have been"],0,"hadn’t + V3.","hadn’t been")]},
{i:"✂️",n:"Short forms",t:"mcq",x:2,ctx:"In speech, had and would are often shortened to ’d.",items:[
 M("“If I’d known, I’d have helped.” =",["If I had known, I would have helped.","If I did know, I would help.","If I would know, I had helped."],0,"’d = had (first) / would (second).","had … would have"),
 M("“I wouldn’t’ve missed the bus.” =",["I wouldn’t have missed the bus.","I wasn’t missing the bus.","I wouldn’t had missed the bus."],0,"’ve = have.","wouldn’t have"),
 M("In “If she’d looked at the bill, she’d have noticed”, the first ’d is …",["had","would","did"],0,"if + had + V3.","had"),
 M("“I’d have done the same.” — here ’d is …",["would","had","did"],0,"’d + have + V3 = would have.","would")]},
{i:"➖",n:"Negative and positive conditions",t:"mcq",x:2,items:[
 M("If I hadn’t played football, I ___ on time for lessons.",["would’ve been","had been","wouldn’t be"],0,"would have + V3.","would’ve been"),
 M("If she ___ the bill, she would have noticed the mistake.",["had checked","would check","checked"],0,"if + past perfect.","had checked"),
 M("We ___ the match if we had practised more.",["would have won","had won","would win"],0,"would have + V3.","would have won"),
 M("They wouldn’t have called the doctor if they ___ worried.",["hadn’t been","weren’t","wouldn’t have been"],0,"hadn’t + V3.","hadn’t been")]}
]);
after(MX["u5.1"],"Practice 3 · Correct two mistakes in each sentence",[
{i:"❓",n:"Third conditional questions",t:"mcq",x:2,ctx:"Question form: What / Would + subject + have + V3 + if + subject + had + V3?",items:[
 M("Which question is correct?",["What would you have done if you had forgotten your passport?","What you would have done if you had forgotten your passport?","What would you have do if you had forgotten your passport?"],0,"Question word + would + subject + have + V3.","What would you have done …?"),
 M("Which question is correct?",["Would he have gone to the dentist if he had broken his tooth?","Would he have go to the dentist if he had break his tooth?","Would he had gone to the dentist if he had broken his tooth?"],0,"V3 in both clauses.","gone … broken"),
 M("Which question is correct?",["What would you have done if you had been in my position?","What would you done if you had been in my position?","What you would have if you had been in my position?"],0,"would + have + V3.","would you have done"),
 M("Complete: ___ you have helped if you had known?",["Would","Had","Did"],0,"Would + subject + have + V3.","Would")]},
{i:"💭",n:"If only and I wish",t:"mcq",x:2,ctx:"If only / I wish + past perfect = regret about the past.",items:[
 M("If only I ___ my house keys this morning!",["hadn’t forgotten","didn’t forget","wouldn’t forget"],0,"past perfect.","hadn’t forgotten"),
 M("I wish we ___ our warm coats. It’s freezing in here.",["had worn","wore","would wear"],0,"past perfect.","had worn"),
 M("I wish I ___ the test. (I didn’t pass.)",["had passed","passed","would pass"],0,"regret about the past.","had passed"),
 M("Which sentence shows regret?",["If only I had listened!","If I listen, I will learn.","I listen to the teacher."],0,"if only + had + V3.","If only I had listened!"),
 M("Which sentence is correct?",["If only I had told a teacher!","If only I would have told a teacher!","If only I told have a teacher!"],0,"No would after if only here.","had told")]}
]);
before(MX["u5.1"],"final",[
{i:"🔎",n:"Grammar check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR GRAMMAR before the final challenge.",list:["I used if + past perfect in the if-clause.","I used would / could / might + have + past participle in the main clause.","I did not use would in the if-clause.","I used if only / I wish + past perfect to show regret.","I used a comma when the if-clause comes first."]}
]);

/* ---------- UoE p.100–101 · Past continuous (9 → 16 bước) ---------- */
after(MX["v5.1"],"Focus 2 · Choose the verb forms (d–f)",[
{i:"🔀",n:"Past simple or continuous?",t:"mcq",x:2,ctx:"Extra practice (not from the book). Choose the best form.",items:[
 M("At 8 p.m. yesterday, I ___ TV.",["was watching","watched","watch"],0,"Action in progress at a time.","was watching"),
 M("She ___ the door and went in.",["opened","was opening","has opened"],0,"Completed action in a sequence.","opened"),
 M("While we ___ football, it started to rain.",["were playing","played","play"],0,"Background action.","were playing"),
 M("He ___ his leg when he fell off the bike.",["broke","was breaking","breaks"],0,"Sudden event.","broke"),
 M("It was a lovely evening; the stars ___ and the air was warm.",["were shining","shone to","shines"],0,"Scene description.","were shining"),
 M("They ___ the bus when it drove past.",["weren’t waiting for","didn’t waiting for","not waiting for"],0,"Negative past continuous.","weren’t waiting for")]},
{i:"⏳",n:"When or while?",t:"mcq",x:2,ctx:"while + past continuous (long action) · when + past simple (short action).",items:[
 M("___ I was walking home, it started to rain.",["While","When","During"],0,"while + was walking.","While"),
 M("I was walking home ___ it started to rain.",["when","while","during"],0,"when + short action.","when"),
 M("She was cooking ___ the phone rang.",["when","while","during"],0,"short interruption.","when"),
 M("___ they were playing football, the lights went out.",["While","When","Since"],0,"while + past continuous.","While")]},
{i:"❓",n:"Negatives and questions",t:"mcq",x:2,items:[
 M("___ you sleeping when I called?",["Were","Did","Was"],0,"you → were.","Were"),
 M("He ___ wearing a helmet.",["wasn’t","didn’t","weren’t"],0,"he → wasn’t.","wasn’t"),
 M("What ___ they doing when the accident happened?",["were","did","was"],0,"they → were.","were"),
 M("Which question is correct?",["Was she carrying her phone?","Did she carrying her phone?","Was she carry her phone?"],0,"Was + subject + V-ing.","Was she carrying…?"),
 M("Which sentence is correct?",["We weren’t going very fast.","We didn’t going very fast.","We wasn’t going very fast."],0,"weren’t + V-ing.","weren’t going")]},
{i:"🎯",n:"Past intention: was / were going to",t:"mcq",x:2,items:[
 M("We ___ go to the park, but it was too cold.",["were going to","are going to","go to"],0,"Past intention.","were going to"),
 M("I ___ call you, but my phone died.",["was going to","am going to","will"],0,"Past intention not carried out.","was going to"),
 M("Which sentence shows an intention that did not happen?",["She was going to buy flowers, but she had no time.","She bought flowers.","She is going to buy flowers."],0,"but = it did not happen.","was going to … but"),
 M("They ___ leave early, so they packed their bags.",["were going to","are going to","will to"],0,"Past plan.","were going to")]}
]);
after(MX["v5.1"],"Practice 3 · Past continuous in conversations",[
{i:"🛠️",n:"Common errors",t:"mcq",x:2,ctx:"Choose the correct sentence.",items:[
 M("Which sentence is correct?",["I was walking when I saw a rabbit.","I was walking when I was seeing a rabbit.","I walked when I was seeing a rabbit."],0,"Interrupting event = past simple.","I was walking when I saw"),
 M("Which sentence is correct?",["I knew him very well.","I was knowing him very well.","I am knowing him very well."],0,"know is a state verb.","knew"),
 M("Which sentence is correct?",["The sun was shining and the birds were singing.","The sun shone and the birds sang when.","The sun was shine and the birds were sing."],0,"was / were + V-ing.","was shining … were singing"),
 M("Which sentence is correct?",["They were living in Japan when they met.","They lived in Japan when they were meeting.","They were live in Japan when they met."],0,"long action + when + event.","were living … met")]}
]);
before(MX["v5.1"],"final",[
{i:"🖼️",n:"Describe the scene",t:"book",lbl:"SCENE",sv:"Save",x:4,min:8,h:"🖼️ Build a mini story step by step. Use the past continuous for the scene, the past simple for the interruption and was / were going to for an intention.",items:[
 ["1️⃣","1","Set the scene: weather, place, people","It was … and people were …",["was raining","were walking","was shining"],"was|were"],
 ["2️⃣","2","What were you doing?","I was … when …",["was walking","was cycling","when"],"was.*when"],
 ["3️⃣","3","What interrupted you?","Suddenly, …",["Suddenly","opened","crashed"],"suddenly|when"],
 ["4️⃣","4","What were you going to do?","I was going to … but …",["was going to","but"],"going to"]]},
{i:"🔎",n:"Grammar check",t:"chk",x:5,items:[0],h:"🔎 CHECK YOUR STORY before the final challenge.",list:["I used was / were + V-ing for the scene and actions in progress.","I used the past simple for the sudden event.","I used when / while correctly.","I used was / were going to for an intention.","I did not use state verbs (know, like) in the continuous."]}
]);
}


