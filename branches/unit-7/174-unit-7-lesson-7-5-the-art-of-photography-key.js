/* ===== UNIT 7 · LESSON 7.5 · The art of photography (key 6.4) · THE YOUNG PHOTOGRAPHER AWARDS ===== */
{
const M=(q,o,a,h,r)=>({q,o,a,h,r});
const KW=["background","flash","out of focus","silhouette","tripod","zoom lens"];
const two=(()=>{const p=[];for(let i=0;i<KW.length;i++)for(let j=i+1;j<KW.length;j++)p.push("(?=[\\s\\S]*\\b"+KW[i]+"\\b)(?=[\\s\\S]*\\b"+KW[j]+"\\b)");return "^(?:"+p.join("|")+")"})();
const ANY=KW.join("|");

RDT["6.4"]={t:"Mission board · Lesson 7.5",h:"<p class=\"font-bold pt-1\">RSPCA Young Photographer Awards (tóm tắt)</p><p>Cuộc thi muốn khuyến khích sự quan tâm đến nhiếp ảnh và sự trân trọng, hiểu biết về các loài vật quanh ta. Ai từ <b>18 tuổi trở xuống</b> đều có thể tham gia; điều quan trọng là tận hưởng quá trình và sáng tạo.</p><p class=\"font-bold pt-1\">About the RSPCA</p><p>Tổ chức từ thiện về động vật ở Anh, nhằm bảo đảm động vật được chăm sóc và đối xử tốt.</p><p class=\"font-bold pt-1\">Photo description</p><p>Title → Subject → Details → Meaning</p>",n:"Bản tóm tắt bằng lời của web – đối chiếu nguyên văn trong sách (Reading, Exercise 1). Ảnh trong sách không có trên web nên không được mô tả ở đây."};

LBC["6.4"]={
obj:[
"Hiểu mục đích của cuộc thi RSPCA Young Photographer Awards",
"Dùng chính xác từ vựng nhiếp ảnh",
"Giải thích kỹ thuật chụp ảnh động vật và thiên nhiên",
"Viết tiêu đề và mô tả cho ảnh; so sánh với bạn học và giải thích lựa chọn",
"Nêu và bảo vệ ý kiến: nhiếp ảnh có phải là nghệ thuật không?"],
vocab:[
["background /ˈbækɡraʊnd/","phần nền phía sau chủ thể trong ảnh","n","The background is full of green leaves."],
["flash /flæʃ/","đèn flash, ánh sáng bổ sung khi chụp","n","I used the flash because the room was dark."],
["out of focus /ˌaʊt əv ˈfəʊkəs/","không được lấy nét, bị nhòe","adj phr","The flowers in the background are out of focus."],
["silhouette /ˌsɪluˈet/","hình bóng tối trên nền sáng","n","The bird’s silhouette stands out against the sunset."],
["tripod /ˈtraɪpɒd/","chân máy ảnh ba chân giúp giữ máy ổn định","n","A tripod helps me keep the camera steady."],
["zoom lens /ˈzuːm lenz/","ống kính zoom, đổi tiêu cự để chụp ở nhiều khoảng cách","n","A zoom lens is useful for photographing distant birds."]],
gram:[
{t:"Cấu trúc một mô tả ảnh",r:"1 Title (tên ngắn, dễ nhớ) → 2 Subject (thấy gì, đang làm gì) → 3 Details (ánh sáng, màu sắc, phông nền, vị trí) → 4 Meaning (cảm xúc hoặc ý nghĩa). Đây là khung gợi ý, không bắt buộc; chỉ mô tả chi tiết bạn thật sự quan sát được.",ex:["A Moment of Freedom","A bird is spreading its wings above the water.","The sunlight reflects off the water, while the background is out of focus."]},
{t:"Nêu và bảo vệ ý kiến",r:"I think … because … · One thing I particularly like is … · However, it could be improved by … · Overall, I would say …",ex:["What I like most about this photograph is …","This photograph stands out because …"]}],
tips:[
"Ảnh trong sách (Exercises 3–5) không có trên web: học sinh dùng ảnh thật trong sách, web không mô tả thay.",
"Exercise 2 (Tips from the experts): web chỉ có các mảnh câu từ văn bản bạn cung cấp nên không tự điền đáp án cho mẹo 1–2; đối chiếu với câu đầy đủ trong sách.",
"Thời lượng 45–50 phút: Warm-up 4–5 · Reading 7–8 · Vocabulary 10 · Critical thinking 4–5 · Speaking 7–8 · Writing 8–10 · Peer feedback và exit 5–7.",
"Gợi ý cho học sinh dễ mất tập trung: đổi hoạt động sau vài phút; một chỉ dẫn mỗi lượt (chủ thể → phông nền → tiêu đề); cho chỉ vào một chi tiết trong ảnh trước khi mô tả; nghỉ vận động ngắn sau phần từ vựng; bắt đầu bằng tiêu đề và hai câu mô tả rồi thêm chi tiết; khen cụ thể một lựa chọn từ hay một quan sát có căn cứ.",
"Phần web bổ sung (không phải bài tập gốc): các hoạt động phân loại, mini-quiz, khung viết, checklist phản hồi bạn học và bài nộp cuối."]};

MX["6.4"]={code:"07.5",title:"The Young Photographer Awards",
q:"Trở thành nhiếp ảnh gia trẻ · WARM-UP → READING → VOCABULARY → SPEAKING → WRITING → EXHIBITION → FINAL ENTRY",
end:{t:"📸 MISSION COMPLETE – THE YOUNG PHOTOGRAPHER AWARDS",did:"You gave your opinion about photography as art, explored the Young RSPCA competition, used six photography key words, discussed techniques for photographing animals, wrote titles and descriptions, compared ideas with a partner and submitted your own award entry. 📸 Badge: YOUNG PHOTOGRAPHER",r:"The photography idea I want to try next is …"},
steps:[
/* STAGE 0 */
{i:"🖼️",n:"00 · Choose your position",t:"think",x:3,h:"🖼️ IS PHOTOGRAPHY ART? People disagree about whether photography is an art, like painting. What do you think?",lab:["Yes. Photography is definitely an art.","Sometimes. It depends on the photographer.","No. Photography is different from traditional art.","I’m not sure yet."],items:[["Do you think photography is an art?",[0,1,2,3],"position"]],pr:"Explain your opinion. Think about creativity, emotion, composition, lighting and the photographer’s choices.",bt:"Lock my opinion",sg:"Locked! Keep your reason – you will use it again at the end."},
{i:"⏱️",n:"00 · 30-second photographer",t:"bucket",x:1,h:"⏱️ THE 30-SECOND PHOTOGRAPHER CHALLENGE. You have only 30 seconds to photograph a wild animal. What would you pay attention to FIRST? Mark each idea.",hint:"Choose what is true for you – be ready to explain.",lab:["⭐ First","➖ Later"],items:[
["The animal’s expression or behaviour",-1,"Expression and behaviour show what the animal is doing."],
["The background",-1,"The background can help or distract."],
["The direction of the light",-1,"Light changes colour and mood."],
["The distance from the animal",-1,"Distance affects what equipment you need."],
["The story or emotion I want to capture",-1,"A story gives the photograph meaning."]]},
/* STAGE 1 */
{i:"📖",n:"01 · Understand the text",t:"mcq",x:2,ctx:"Read the competition introduction in your book (Reading, Exercise 1), then answer.",items:[
M("1. What is the main aim of the competition?",["To train professional photographers","To encourage interest in photography and appreciation of animals","To sell photographs of animals"],1,"Look at the first sentence of the introduction.","To encourage interest in photography and appreciation of animals"),
M("2. Who can enter the competition?",["Only professional photographers","Only children under 12","Anyone aged 18 or under"],2,"Find the age limit.","Anyone aged 18 or under"),
M("3. What does the RSPCA aim to do?",["Make sure animals are looked after and treated well","Organise all photography competitions in Britain","Teach people how to use a camera"],0,"Read “About the RSPCA”.","Make sure animals are looked after and treated well")]},
{i:"🧐",n:"01 · Is it a good introduction?",t:"think",x:3,h:"🧐 EVALUATE (original question). Is it a good introduction? Give reasons for your answer. There is no single correct answer – use information from the text.",lab:["Yes, very effective.","It is effective in some ways, but it could be improved.","No, it does not give enough information."],items:[["Do you think the introduction is effective?",[0,1,2],"effective"]],pr:"Support your opinion with reasons. Does it explain the purpose, who can enter, and encourage creativity?",bt:"Lock my opinion",sg:"Locked! Now say it aloud with the frame."},
{i:"🗣️",n:"01 · Speaking frame",t:"book",lbl:"SAY",sv:"Save",x:3,min:10,oc:1,h:"🗣️ SPEAK. Use the frame to give your opinion of the introduction.",items:[
["1️⃣","1","Opinion and reason","I think it is a good introduction because …",[],".{12,}"],
["2️⃣","2","Something you like","One thing I particularly like is …",[],".{10,}"],
["3️⃣","3","An improvement","However, it could be improved by …",[],".{10,}"],
["4️⃣","4","Conclusion","Overall, I would say …",[],".{8,}"]]},
/* STAGE 2 */
{i:"🧰",n:"02 · Learn the six key words",t:"mcq",x:2,ctx:"The Photographer’s Toolkit. Choose the best meaning.",items:[
M("background",["phần nền phía sau chủ thể","ống kính cho phép đổi tiêu cự","hình bóng tối trên nền sáng"],0,"Back + ground: the area behind.","phần nền phía sau chủ thể"),
M("flash",["đèn cung cấp ánh sáng bổ sung","chân máy ba chân","không được lấy nét"],0,"It gives extra light.","đèn cung cấp ánh sáng bổ sung"),
M("out of focus",["không được lấy nét rõ, bị nhòe","hình bóng tối","đèn flash"],0,"Not sharp.","không được lấy nét rõ, bị nhòe"),
M("silhouette",["hình bóng tối trên nền sáng","phần nền","ống kính zoom"],0,"A dark shape against a bright background.","hình bóng tối trên nền sáng"),
M("tripod",["chân máy ba chân giúp giữ máy ổn định","đèn flash","ống kính zoom"],0,"Tri- = three; it keeps the camera steady.","chân máy ba chân giúp giữ máy ổn định"),
M("zoom lens",["ống kính zoom đổi tiêu cự","chân máy","phần nền"],0,"Zoom in and out.","ống kính zoom đổi tiêu cự")]},
{i:"🎯",n:"02 · Match the situation",t:"mcq",x:2,ctx:"Choose the best photography word for each situation.",items:[
M("1. You want to photograph a bird high in a tree without getting closer.",["Tripod","Zoom lens","Flash"],1,"You need to bring a far subject closer.","Zoom lens"),
M("2. You need to keep your camera steady during a long exposure.",["Background","Tripod","Silhouette"],1,"Steady = a three-legged support.","Tripod"),
M("3. The animal looks sharp, but the trees behind it look blurry.",["Out of focus","Flash","Background"],2,"The blurry part is behind the animal – the background.","Background"),
M("4. You photograph a bird against a bright sunset, so it appears as a dark shape.",["Silhouette","Zoom lens","Tripod"],0,"A dark shape on a bright background.","Silhouette"),
M("5. You want to add light when photographing in a dark indoor space.",["Background","Flash","Out of focus"],1,"Extra light.","Flash"),
M("6. The area behind the main subject makes the photograph look messy.",["Zoom lens","Silhouette","Background"],2,"The area behind the subject.","Background")]},
{i:"🧠",n:"02 · Exercise 2 · Tips from the experts",t:"book",lbl:"TIP",sv:"Save",x:3,min:3,oc:1,h:"🧠 ORIGINAL EXERCISE 2. Use the words in the key words box to complete the tips on taking photos for the competition: background · flash · out of focus · silhouette · tripod · zoom lens. Read each full tip in your book and type only the missing word(s).",items:[
["1️⃣","1","Tip 1 in your book: “A ______ …”. Which word fits the meaning?","Write the word from the box",KW,ANY],
["2️⃣","2","Tip 2 in your book: “A ______ …”. Which word fits the meaning?","Write the word from the box",KW,ANY],
["3️⃣","3","“Whether you’re indoors or outdoors, try taking photos with and without a ______.”","Write the word from the box",KW,"flash"],
["4️⃣","4","“Try making a ______ …”","Write the word from the box",KW,"silhouette"],
["5️⃣","5","“A ______ that is …”","Write the first missing word",KW,"background"],
["6️⃣","6","“… that is ______ …” (describe the background)","Write the second missing word",KW,"out of focus"]]},
{i:"🦊",n:"02 · Which technique would you use?",t:"book",lbl:"CASE",sv:"Save",x:3,min:12,oc:1,h:"🦊 PHOTOGRAPHER’S DECISION. Choose a technique and explain your choice. Frame: I would use a … because … This technique would help me … However, I would need to be careful about …",items:[
["🦊","1","You want to photograph a shy fox without frightening it.","I would use a … because …",KW,".{15,}"],
["🌅","2","You want to take a clear photograph of a bird at sunset.","I would use a … because …",KW,".{15,}"],
["🎯","3","You want the animal to stand out while the background looks blurry.","I would use … because …",KW,".{15,}"],
["🌑","4","You want to photograph an animal in a dark environment.","I would use a … because …",KW,".{15,}"]]},
/* STAGE 3 */
{i:"⚖️",n:"03 · Think like a judge",t:"bucket",x:1,h:"⚖️ THINK LIKE A COMPETITION JUDGE. How important is each quality in a photograph? (An extension activity – not the official RSPCA criteria.)",hint:"Choose what you personally think.",lab:["⭐ Essential","👍 Important","➖ Less important"],items:[
["Creativity – an interesting or original idea",-1,"Originality makes a photograph memorable."],
["Animal appreciation – people notice and value animals",-1,"This matches the aim of the competition."],
["Composition – background, light and focus help the subject stand out",-1,"Composition guides the viewer’s eye."],
["Emotional impact – curious, happy, surprised or thoughtful",-1,"Emotion creates a connection."]]},
{i:"🐦",n:"03 · The photographer’s dilemma",t:"mcq",x:2,ctx:"You are photographing a bird. It is far away, the light is changing, and you have only a few seconds. Choose the best action.",items:[
M("1. The bird is too far away to photograph clearly.",["Use a zoom lens","Use a tripod only","Change the background"],0,"You need to bring it closer.","Use a zoom lens"),
M("2. Your camera moves slightly while you take a photograph.",["Use a flash in every situation","Use a tripod to keep the camera steady","Make the subject out of focus"],1,"Steady camera.","Use a tripod"),
M("3. The sun is behind the bird, making it look like a dark shape.",["Try creating a silhouette","Move the background into focus","Use a tripod to change the light"],0,"Dark shape on a bright background.","Try creating a silhouette")]},
{i:"💬",n:"03 · Discuss my choices",t:"book",lbl:"WHY",sv:"Save",x:3,min:12,oc:1,h:"💬 Explain which quality you chose as ESSENTIAL and why.",items:[
["⭐","1","Which quality is most essential, and why?","I think … is the most essential quality because …",["creativity","animal appreciation","composition","emotional impact"],".{15,}"]]},
/* STAGE 4 */
{i:"🏷️",n:"04 · Question A · Titles and descriptions",t:"bucket",x:2,h:"🏷️ QUESTION A. “Please give each photo a title and write a description.” Why do you think the judges ask for this? Do you agree with each reason?",hint:"Does the reason explain why words help the photograph?",lab:["👍 I agree","👎 I don’t agree"],items:[
["A title can make the photograph more memorable.",0,"A short title is easy to remember."],
["A description can explain the story behind the photograph.",0,"Words add the story."],
["The title and description can help viewers understand the photographer’s idea.",0,"They show the photographer’s intention."],
["A description means the photograph does not need to be interesting.",1,"A good photograph must still be interesting; words support it."],
["Words can draw attention to details that viewers might otherwise miss.",0,"Words guide the viewer’s eye."]]},
{i:"🗨️",n:"04 · Explain Question A",t:"book",lbl:"SAY",sv:"Save",x:3,min:20,oc:1,h:"🗨️ Explain your opinion in 2–3 sentences.",items:[["🏷️","1","Why do you think the judges ask for a title and a description?","I think the judges ask for this because …",[],".{25,}"]]},
{i:"🕊️",n:"04 · Question B · Birds in flight",t:"book",lbl:"ADVICE",sv:"Save",x:4,min:15,h:"🕊️ QUESTION B. What advice would you give someone who wants to photograph birds in flight? Choose THREE ideas and turn each into your own advice.",items:[
["1️⃣","1","Advice 1 – choose an idea","You should … because …",["Use a zoom lens","Keep the camera steady","Pay attention to the background","Think about the light","Be patient","Focus on the bird"],".{15,}"],
["2️⃣","2","Advice 2 – choose a different idea","It is also important to …",["Use a zoom lens","Keep the camera steady","Pay attention to the background","Think about the light","Be patient","Focus on the bird"],".{15,}"],
["3️⃣","3","Advice 3 – choose a third idea","Finally, remember to …",["Use a zoom lens","Keep the camera steady","Pay attention to the background","Think about the light","Be patient","Focus on the bird"],".{15,}"]]},
{i:"❤️",n:"04 · Question C · Which photo do you like best?",t:"book",lbl:"NOTE",sv:"Save",x:4,min:15,h:"❤️ QUESTION C. Use the actual photographs in your Lesson 7.5 pages (the web does not show or describe them). Choose your favourite and complete the speaking notes.",items:[
["📷","1","Which photograph are you discussing?","I am discussing …",["The first photograph","The second photograph","The third photograph","Another photograph"],".{6,}"],
["🔍","2","What do you like about it?","What I like most about this photograph is …",["The animal or subject","The colours and lighting","The composition","The background","The emotion or story","The creativity"],"what i like|like|because|stands out|captured|makes me feel|draws attention"],
["💭","3","Give your reasons using the useful expressions.","The photographer has captured … This photograph stands out because … It makes me feel … because …",[],"captured|stands out|makes me feel|draws attention|light makes|what i like"]]},
/* STAGE 5 */
{i:"🧩",n:"05 · Structure of a photo description",t:"order",x:6,items:[0],h:"🧩 LEARN THE STRUCTURE. Put the four parts of a photo description in order.",hint:"Name it → say what you see → add details → explain the feeling.",cards:[
"C. Details – light, colours, background. Example: The sunlight reflects off the water, while the background is out of focus.",
"A. Title – a short, memorable name. Example: A Moment of Freedom",
"D. Meaning – the mood or idea. Example: The image creates a feeling of freedom.",
"B. Subject – what you can see. Example: A bird is spreading its wings above the water."],ans:[1,3,0,2],yl:"🖼️ MY DESCRIPTION PLAN",ft:"🧠 FOUR PARTS",flow:["TITLE","SUBJECT","DETAILS","MEANING"],bm:"Not quite. Start with the title, then the subject, then details, and finish with the meaning."},
{i:"📝",n:"05 · Exercise 4 · Title and describe",t:"book",lbl:"PHOTO",sv:"Save",x:4,min:3,need:2,h:"📝 ORIGINAL EXERCISE 4. Use the photographs in your textbook. Describe only what you can see. Complete at least ONE photograph (title + description); do more if you can. Start small: a title and two descriptive sentences.",items:[
["📷","1","Photograph 1 – my title","My title: …",[],".{3,}"],
["✍️","1","Photograph 1 – my description (what you see, details, meaning)","A … is … The light … The background … It makes me feel …",[],".{30,}"],
["📷","2","Photograph 2 – my title","My title: …",[],".{3,}"],
["✍️","2","Photograph 2 – my description","…",[],".{30,}"],
["📷","3","Photograph 3 – my title","My title: …",[],".{3,}"],
["✍️","3","Photograph 3 – my description","…",[],".{30,}"]]},
{i:"✨",n:"05 · Improve your descriptive language",t:"book",lbl:"UPGRADE",sv:"Save",x:4,min:20,oc:1,h:"✨ Rewrite each basic sentence to make it more descriptive. These are practice sentences, not descriptions of the textbook photographs.",items:[
["🐦","1","Original: “The bird is beautiful.” (appearance, movement, colours)","The bird …",[],".{25,}"],
["🌲","2","Original: “The animal is standing in the forest.” (light, surroundings, atmosphere)","In the …, the animal …",[],".{25,}"],
["📸","3","Original: “The photograph is interesting.” (what makes it stand out?)","The photograph stands out because …",[],".{25,}"]]},
/* STAGE 6 */
{i:"🤝",n:"06 · Partner exchange",t:"chk",x:4,items:[0],h:"🤝 THE PHOTOGRAPHY EXHIBITION (Speaking, Exercise 5). Compare what you wrote for Exercise 4 with a classmate. Tick each round when you have done it.",list:[
"Round 1 – I read my title aloud, described the photograph without reading every word, and explained why I chose the title.",
"Round 2 – We compared interpretations: same title? Which details did we both notice? Did my partner notice something I missed?",
"Round 3 – I named one strong detail in my partner’s description and suggested one way to make it clearer or more vivid."]},
{i:"👀",n:"06 · Peer feedback",t:"book",lbl:"FEEDBACK",sv:"Save",x:3,min:12,oc:1,h:"👀 PEER FEEDBACK. Give specific feedback, not only general praise.",items:[
["👍","1","One thing my partner did well","One thing you did well is …",[],".{12,}"],
["💡","2","One suggestion for improvement","You could … to make it clearer / more vivid.",[],"could|should|try|maybe|add|more|instead|suggest|what about"]]},
{i:"☑️",n:"06 · Feedback checklist",t:"chk",x:4,items:[0],h:"☑️ Check your partner’s description. Tick each point that is true.",list:[
"The title is memorable and relevant.",
"The description identifies the main subject.",
"The writer includes specific, observable details.",
"The vocabulary is varied and appropriate.",
"The writer explains the mood or meaning where relevant.",
"The description is clear and easy to follow."]},
{i:"🔮",n:"06 · Can two people see the same photo differently?",t:"book",lbl:"TALK",sv:"Save",x:4,min:20,oc:1,h:"🔮 FINAL DISCUSSION. Choose one question and answer it. Challenge: use at least two photography keywords and one example from your discussion. (Why might two people give the same photograph different titles? Can a photograph tell a story without words? What makes a description interesting rather than simply accurate? Does a good photograph always need expensive equipment?)",items:[
["💬","1","Your answer – use two keywords from the toolkit","I think … For example, … ",KW,two]]},
/* STAGE 7 */
{i:"🏆",n:"07 · FINAL · Your award-winning photograph",t:"final",px:10,h:"🏆 THE YOUNG PHOTOGRAPHER’S FINAL PITCH. Imagine you are submitting a photograph of the natural world to the Young RSPCA competition. Write three parts: Title: … Description: … Why: … (why should people notice this photograph?)",hint:"Title: short and memorable. Description: subject, details (light, background) and meaning – use two photography keywords. Why: use because.",ph:"Title: A Moment of Freedom\nDescription: A bird is … The background is …\nWhy: People should notice this photograph because …",checks:[
["Has a title","title\\s*:",1],
["Has a description","description\\s*:",1],
["Explains why people should notice it","why\\s*:|because",2],
["Uses two different photography keywords","\\b(background|flash|out of focus|silhouette|tripod|zoom lens)\\b",2],
["Describes light, colour, mood or feeling","light|colour|color|mood|feel|emotion|sunset|sunlight|freedom",1]],
sk:["I can explain the purpose of the Young RSPCA competition.","I can use the six photography keywords correctly.","I can discuss techniques for photographing animals.","I can choose an effective title for a photograph.","I can write a clear and descriptive photo description.","I can compare my ideas with a partner and give feedback."]}
]};
MX["6.4"].mx=MX["6.4"].steps.reduce((a,s)=>a+(s.t==="final"?s.px+5:/think|order|chk/.test(s.t)?(s.x||0):s.items.length*(s.x||0)),0);
}
/* mở thẳng link Lesson 7.5 */
if(/^#\/lesson\//.test(location.hash))route();

