/* ===== Lesson 4.1 – The Colour Lab (game mission, same engine as earlier lessons) ===== */

























































LBC['3.0']={obj:['Tìm hiểu cách chúng ta nhìn thấy màu sắc','Mô tả màu sắc và các sắc độ (shades) của màu'],vocab:[['research','nghiên cứu; bài nghiên cứu','v / n','Research shows that colour really does affect our minds and bodies.'],['affect','tác động đến, ảnh hưởng đến','v','Colour can affect our mood.'],['effect','sự tác động, ảnh hưởng','n','Blue has a calming effect on many people.'],['likely to','dễ (làm gì), có khả năng (làm gì)','phr','Teams in red are more likely to win matches.'],['work of art','tác phẩm nghệ thuật','n','This painting is a famous work of art.'],['leading expert','chuyên gia đầu ngành','n','A leading expert studied the sales of paintings.'],['conclude','kết luận','v','A leading expert concluded that red pictures sell for more.'],['fetch','bán được (với giá …)','v','Pictures with red in them fetch higher prices.'],['without','không có','prep','Pictures without red fetch lower prices.'],['recent','gần đây','adj','The expert analysed recent sales of works of art.'],['interpret','diễn giải','v','Colour is how our eyes interpret light.'],['perceive','nhận thức, nhận biết','v','Our brain perceives mixtures of light wavelengths.'],['mixture','hỗn hợp, sự pha trộn','n','Green is a mixture of blue and yellow light.'],['retina','võng mạc','n','Light falls on the retina at the back of the eye.'],['vision','tầm nhìn, thị giác','n','Human vision is trichromatic.'],['trichromatic','có ba loại tế bào nón (nhìn bằng ba màu cơ bản)','adj','Human vision is trichromatic.'],['tetrachromatic','có bốn loại tế bào nón (nhìn bằng bốn màu cơ bản)','adj','Birds are also tetrachromatic.'],['receptor','thụ thể','n','We have three different colour receptors in our eyes.'],['cone','tế bào nón (thụ thể tiếp nhận ánh sáng)','n','Each cone picks up different wavelengths of light.'],['detect','phát hiện','v','People who are colour-blind detect fewer colours.'],['properly','một cách đúng đắn, hiệu quả','adv','One type of receptor is not working properly.'],['extra','thêm, phụ','adj','Some people have an extra cone type in their eyes.'],['average','trung bình, bình thường','adj','The average person can see about one million colours.'],['approximately','khoảng, xấp xỉ','adv','The average person can see approximately one million colours.'],['shade','sắc độ màu','n','Birds see many different shades of colour.'],['colour-blind','mù màu','adj','Some people are colour-blind.'],['light','ánh sáng','n','Without enough light, we cannot see colours.'],['wavelength','bước sóng','n','Each colour has a different wavelength.'],['associate','liên tưởng, gắn với','v','We associate red with danger.'],['reddish','hơi đỏ, đỏ nhạt','adj','The sky had a reddish colour.'],['greyish','hơi xám','adj','The wall was a greyish colour.'],['yellowish','hơi vàng','adj','The paper was yellowish with age.']],gram:[{t:'after / before / when / while + -ing',r:'Liên từ nối các mệnh đề. Một số liên từ có thể đi với dạng -ing.',ex:['after learning about colour','while walking to school','before seeing the painting','when choosing colours']}],tips:['Mô tả sắc độ: dark / deep (đậm), light / pale (nhạt). Màu pha dùng -ish: yellowish-brown, greyish-white, reddish-brown.']};
RDT['3.0']={t:'The science of colour',h:['Research shows that colour really does affect our minds and bodies. The colour blue helps us to feel calm. Red, on the other hand, can make us feel angry. Football teams seem to play better when wearing red. They are more likely to win matches than those wearing other colours. After analysing recent sales of works of art, a leading expert concluded that pictures with red in them fetch higher prices than those without.','Colour is how our eyes interpret <b>light</b>. It is the way our brain perceives mixtures of different light <b>wavelengths</b> falling on the <b>retina</b> of the eyes.','Human vision is <b>trichromatic</b> – we have three different colour <b>receptors</b> (<b>cones</b>) in our eyes. These receptors are red, green and blue, and each is designed to pick up different wavelengths of light. People who are <b>colour-blind</b> detect fewer colours as one type of receptor is not working properly.','There are people who are <b>tetrachromatic</b>, which means they have an extra cone type in their eyes. The average person can see approximately one million colours, whereas people who have tetrachromatic vision can see 99 million. Birds are also tetrachromatic – they have four colour receptors and see things that we see as red as many different shades of colour. This is very useful for them while searching for food.'].map(x=>'<p>'+x+'</p>').join('')};

const SWT=(c,q)=>`<span class="inline-block align-middle w-14 h-9 rounded-lg border border-slate-300" style="background:${c}"></span> ${q}`,SW2=(a,b,q)=>`<span class="inline-block align-middle w-9 h-9 rounded-lg border" style="background:${a}"></span> + <span class="inline-block align-middle w-9 h-9 rounded-lg border" style="background:${b}"></span> ${q}`;
MX["3.0"]={code:"04.1",title:"The Colour Lab",q:"Do all humans and animals see colour in the same way? · ASSOCIATE → PREDICT → INVESTIGATE → DESCRIBE → EXPLAIN",
end:{t:"🏆 MISSION COMPLETE – COLOUR SCIENTIST",did:"You explored how colours make us feel, how light, the retina and cones let us see colour, how trichromatic and tetrachromatic vision differ, how to describe shades, and how to use after / before / when / while + -ing. 🏅 Badge: COLOUR SCIENTIST",r:"I used to think everyone sees colour in the same way, but now I think …"},steps:[
{i:"🌈",n:"What colour is it?",t:"bucket",x:0,h:"🌈 WARM-UP. Which colour do you associate with each word? There are no right or wrong answers.",hint:"",lab:["🟥 red","🟧 orange","🟨 yellow","🟦 blue","🟩 green","🟪 purple"],items:[["🔥 warm",-1],["🧊 cold",-1],["😊 happy",-1],["😔 depressed",-1],["🤩 enthusiastic",-1],["⚡ energetic",-1],["😌 calm",-1]],sg:"💡 Maybe colours affect the way we feel. But how do we actually see them?"},
{i:"🔬",n:"Make a prediction",t:"think",x:5,h:"🔬 THE BIG QUESTION. Make a prediction – you will test it at the end.",lab:["🟢 YES","🔴 NO","🟡 I DON’T KNOW"],items:[["Do all humans and animals see colour in the same way?",[0,1,2],"prediction"]],pr:"Why do you think so?",bt:"Lock my prediction",sg:"Prediction locked! Let’s investigate."},
{i:"📖",n:"Reading detective",t:"mcq",x:3,n:"Reading detective – The science of colour",ctx:"Read the text on the left, then find the evidence.",items:[{q:"According to the text, what is colour?",o:["The way our eyes interpret light","A part of the eye","A type of cone"],a:0,h:"Find the sentence that begins “Colour is…”.",r:"Colour is how our eyes interpret light."},{q:"Which part of the eye receives light wavelengths?",o:["the cone","the retina","the brain"],a:1,h:"Find the sentence about the retina.",r:"The retina."},{q:"What are colour receptors called?",o:["shades","cones","wavelengths"],a:1,h:"Look for the word for colour receptors.",r:"Cones."},{q:"How would you describe someone who can’t see certain colours?",o:["colour-blind","tetrachromatic","energetic"],a:0,h:"Find the word for people who see fewer colours.",r:"Colour-blind."},{q:"What is the difference between trichromatic and tetrachromatic vision?",o:["three types of cone vs four types of cone","one colour vs two colours","day vs night vision"],a:0,h:"How many cones does each type have?",r:"Tri- = three, tetra- = four."},{q:"Why does tetrachromatic vision help birds when looking for food?",o:["They can see more colours and shades","They can fly faster","They can see in the dark"],a:0,h:"Think about why extra cones help.",r:"More shades help them find food."}]},
{i:"👁️",n:"How do we see colour?",t:"order",x:10,h:"👁️ BUILD THE PATH. Tap the steps in the order that light becomes colour.",hint:"Start with light and finish with colour.",yl:"🧬 THE PATH",cards:["🧠 The brain interprets the signals","💡 Light enters the eye","🌈 We see colour","🔺 Cones detect the wavelengths","🎯 Light falls on the retina"],ans:[1,4,3,0,2],flow:["Light","Eye","Retina","Cones","Brain","Colour"],ft:"🧠 FLOW",bm:"Not quite. Light first – then where does it fall? Who detects it? Who interprets? Undo or reset."},
{i:"👁️",n:"Meet the cones",t:"mcq",x:4,items:[{q:"How many types of colour receptors do most humans have?",o:["2","3","4"],a:1,h:"Check the text.",r:"Three: that is trichromatic vision."},{q:"So, do our eyes actually “contain” colours?",o:["Yes, colours are inside our eyes","No – our eyes receive light and the brain interprets it as colour"],a:1,h:"What falls on the retina?",r:"Eyes receive light; the brain interprets it."},{q:"Which statement is correct?",o:["Humans have four colour receptors.","Humans have three colour receptors.","Humans don’t have colour receptors."],a:1,h:"Reread the paragraph about human vision.",r:"Humans have three."}]},
{i:"🐦",n:"Humans vs birds",t:"bucket",x:2,h:"🐦 SORT THE FACTS. Who does each fact describe?",hint:"Compare the numbers in the text.",lab:["👤 HUMANS (trichromatic)","🐦 BIRDS (tetrachromatic)"],items:[["3 colour receptors",0,"Trichromatic = three."],["4 colour receptors",1,"Tetrachromatic = four."],["around 1 million colours",0],["up to 99 million colours (tetrachromatic vision)",1],["more shades to help find food",1]],sg:"💡 More receptors = more shades – and that can help birds find food."},
{i:"⏰",n:"after / before / when / while",t:"mcq",x:2,n:"Think about it",ctx:"Choose the best conjunction.",items:[{q:"Do you understand more about how birds find food ______ learning they are tetrachromatic?",o:["after","before","while"],a:0,h:"Learn first, understand later.",r:"after learning"},{q:"Why do designers know what to look for ______ choosing colours that go well together?",o:["after","when","before"],a:1,h:"At the moment of choosing.",r:"when choosing"},{q:"To prepare for an art exhibition, is it helpful to read about an artist ______ seeing their work?",o:["before","after","while"],a:0,h:"Prepare first.",r:"before seeing"},{q:"Did you see anything colourful ______ walking to school?",o:["before","while","after"],a:1,h:"At the same time as walking.",r:"while walking"},{q:"Do you think you’re more aware of colour ______ learning how we see it?",o:["when","before","after"],a:2,h:"Learning came first.",r:"after learning"}]},
{i:"🛠️",n:"Fix the -ing",t:"mcq",x:3,items:[{q:"Which is correct?",o:["while walk to school","while walking to school"],a:1,h:"After while → -ing.",r:"while walking to school"},{q:"Which is correct?",o:["after learning about colours","after learn about colours"],a:0,h:"After after → -ing.",r:"after learning about colours"},{q:"Which is correct?",o:["before see the painting","before seeing the painting"],a:1,h:"After before → -ing.",r:"before seeing the painting"}]},
{i:"🎨",n:"Shade detective",t:"mcq",x:2,n:"Shade detective",ctx:"Dark / deep · light / pale · mixed: yellowish-brown, greyish-white, reddish-brown.",items:[{q:SWT("#1e3a8a","How would you describe this colour?"),o:["dark blue","pale blue","reddish-brown"],a:0,h:"Light or dark?",r:"dark blue"},{q:SWT("#bfd9f7","How would you describe this colour?"),o:["dark blue","pale blue","deep green"],a:1,h:"Light or dark?",r:"pale blue"},{q:SW2("#facc15","#8b5a2b","makes…"),o:["yellowish-brown","pale yellow","dark red"],a:0,h:"Mixed colours use -ish.",r:"yellowish-brown"},{q:SW2("#c0392b","#8b5a2b","makes…"),o:["greyish-white","reddish-brown","pale grey"],a:1,h:"Mixed colours use -ish.",r:"reddish-brown"},{q:SW2("#9ca3af","#ffffff","makes…"),o:["greyish-white","deep orange","light pink"],a:0,h:"Mixed colours use -ish.",r:"greyish-white"}]},
{i:"🗣️",n:"Colour expert",t:"book",lbl:"CALM",sv:"Save",x:5,min:15,h:"🗣️ Come back to the warm-up. Which colour do you associate with “calm”? Choose, then explain – say it aloud too.",items:[["🎨","1","Which colour do you associate with “calm”, and why?","I associate … with calm because …",["red","orange","yellow","blue","green","purple"],"because"]]},
{i:"🧪",n:"The Colour Scientist",t:"final",h:"🧪 FINAL MISSION. Your friend asks: “Why don’t humans and birds see colours in exactly the same way?” Explain it in your own words.",hint:"Use at least 3 key words: light · retina · cone · receptor · trichromatic · tetrachromatic.",ph:"Humans have … so …",px:6,checks:[["Used at least 3 key words","light|retina|cones?|receptors?|trichromatic|tetrachromatic",3],["Compared humans and birds","humans?|birds?",2],["Gave a reason (because / so)","because|so ",1]],sk:["I used at least 3 key words","I explained the difference between humans and birds","I spoke for about 60 seconds"]}
]};
