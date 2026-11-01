
const common=['Improve your writing','Project challenge'];
const U=[
 ['Views and voices',['What helps you to learn?','Teenage psychology','Role models','Teenage voices','Facts and opinions','From ideas into words'],'Autobiography','🗣️'],
 ['Well-being',['Food for health','Food for thought','Are you getting enough sleep?','Moods and feelings','Keep a cool head','How to be happy'],'Fiction','💚'],
 ['Tourism',['On holiday','A holiday to remember','How was your holiday?','Responsible tourism','A different type of family holiday','Is tourism a good thing?'],'Fiction','✈️'],
 ['Science',['The science of colour','Deadly diseases','What makes us the same?','Live and let live','The circle of life','Views on zoos'],'Poetry','🔬'],
 ['Technology',['Social media and you','The home of the future','Digital media: good or bad?','Have a story personalised!','Technology meets archaeology',"In ten years' time…"],'Non-fiction','💻'],
 ['Rules and laws',['School rules','Family life','House rules','Doing the right thing','Rights and responsibilities','What happened?'],'Non-fiction','⚖️'],
 ['Competition',['Team or individual sports?','Unusual sports','Competitive and non-competitive sports','News reports of competitions','Wildlife photography','Describing a competition'],'Non-fiction','🏆'],
 ['The environment',['The weather','Global warming and extreme weather','Climate change','Sustainable fashion','Zero wasters','Sustainable cities'],'Poetry','🌍'],
 ['Achievements and ambitions',['Jobs','Helping young people achieve','Witness statements','Job candidates','Positive thinking','Young achievers'],'Fiction','🎯']
].map(u=>({name:u[0],emoji:u[3],lessons:[...u[1],...common,u[2]]}));

const W={5:['School rules','Family life','House rules','Doing the right thing','Right and wrong','The scene of the crime'],
6:['Team sports or individual sports?','Try this!','To compete or not to compete?','Two competitions','The art of photography','A towering achievement'],
7:['Let’s talk about the weather','Global warming and climate change','I’m very concerned about …','Zero waste','Living and growing','The air we breathe'],
8:['I’d like to be …','I’m over the moon!','Would you be good at …?','Achieving your dreams','The power of the mind','Young achievers']};
[5,6,7,8].forEach(i=>W[i].forEach((t,k)=>{if(i>5)U[i].lessons[k]=t}));
const P=[[8,9,10,15,16,17,22,23],[24,25,26,31,32,33,35,36],[40,41,42,47,48,49,54,55],[56,57,58,63,64,65,70,71],[72,73,74,79,80,81,86,87],[88,89,90,95,96,97,102,103],[104,105,106,111,112,113,118,119],[120,121,122,127,128,129,134,135],[136,137,138,143,144,145,150,151]];
const UOE=[
[[['-ing forms',11],['Present simple and present continuous',13]],[['Present simple passive',18],['Present continuous passive',20]]],
[[['Abstract nouns',27],['Comparative adjectives and adverbs',29]],[['must have, might have, should have + past participle',34],['Connectives',null],['Strong adjectives and intensifiers',null]]],
[[['Multi-word verbs',43],['Past continuous passive',45]],[['Compound adjectives',50],['Participle adjectives',52]]],
[[['Conjunctions',59],['Present and past simple passive',61]],[['Present perfect continuous',66],['Present perfect active and passive',68]]],
[[['Relative clauses',75],['Expressing the future',77]],[['To have something done',82],['Future continuous',84]]],
[[['Verbs in the passive followed by the infinitive',91],['Reported questions and statements',93]],[['Third conditional',98],['Past continuous',100]]],
[[['Past perfect simple and past perfect continuous',107],['Comparatives and superlatives',109]],[['Past perfect simple, active and passive',114],['Connectives',116]]],
[[['Adverbs of frequency',123],['Multi-word verbs',125]],[['Verbs followed by -ing',130],['Complex noun phrases',132]]],
[[['Relative clauses',139],['Participle clauses',141]],[['Reported speech – statements (revision)',146],['Dependent prepositions following adjectives',148]]]];
/* vins.lms – mới nhập Unit 1; thêm unit khác: LMS['u.l']=[[tên,loại,điểm,url]] (u,l tính từ 0) */
const LMS={'0.0':[['Lesson 1.1 What helps you to learn?','Quiz','10 điểm','','q12','Lesson 1.2 What helps you to learn?']],
'0.3':[['Lesson 1.4 Teenage Voices','Page','','','r15','Lesson 1.5 Views and Voices']],
'0.5':[['Reading Quiz','Quiz','0 điểm','','q17a','1.7a 📚 Reading Quiz'],['Listening Quiz','Quiz','0 điểm','https://voca.ro/1ovmj6ou1X3T','q17b','1.7b ☎️ Listening Quiz']],
'0.6':[['Lesson 1.7 Improve Your Writing','Page','','','w17','Lesson 1.7 Improve Your Writing']],'0.7':[['Lesson 1.8 Project Challenge','Page','','','p18','Lesson 1.8 Project Challenge']]};
LMS['1.1']=[['Vocabulary Practice','Quiz','1 điểm','','v22','Lesson 2.2: Vocabulary Practice'],['UoE – Adjective and Adverb Comparatives','Quiz','25 điểm','','c22a','Lesson 2.2 UoE - Adjective and Adverb Comparatives'],['UoE – Comparatives & Superlatives','Quiz','1 điểm','','c22b','Lesson 2.2: UoE - Comparatives & Superlatives']];
LMS['1.3']=[['2.4a Use of English','Quiz','18 điểm','','u24a']];
LMS['1.4']=[['Lesson 2.5 Keep a cool head','Page','','','k25']];
LMS['1.5']=[['2.6a Listening Practice','Quiz','','','l26']];
LMS['1.6']=[['Lesson 2.7 Improve your writing','Page','','','w27']];
LMS['1.7']=[['Lesson 2.8 Project challenge','Page','','','p28']];
const LMSU={1:[['Lesson 2.10 Unit review','Page','','','p210']],0:[['1.11a Skills Practice: Reading','Quiz','0 điểm','','q111a'],['1.11b UoE Practice','Quiz','0 điểm','','q111b']]};
/* Learner's Book / Work book – mới nhập lesson 1.1 */
const LBC={'0.0':{obj:['Nghe ý kiến của học sinh về việc nói chuyện trong lớp','Nêu quan điểm của bản thân','Ôn và dùng dạng -ing'],
 vocab:[['interrupt','ngắt lời'],['compare','so sánh'],['distract','làm xao nhãng'],['encourage','khuyến khích'],['tell off','mắng'],['get into trouble','gặp rắc rối'],['share ideas','chia sẻ ý tưởng'],['be supposed to','được kỳ vọng phải'],['concentrate on','tập trung vào']],
 gram:[{t:'Dạng -ing (-ing forms)',r:'Dạng -ing dùng sau một số động từ (enjoy, avoid, keep), sau giới từ, và làm chủ ngữ của câu.',ex:['Sharing ideas helps me to learn.','She asks a classmate instead of interrupting the teacher.']}],
 tips:['Sau giới từ (of, about, instead of…) luôn dùng V-ing, không dùng to-V.','Có thể đặt cụm V-ing làm chủ ngữ: Talking in class can distract others.','Học từ theo cụm (get into trouble, tell off) dễ nhớ hơn học từ lẻ.']}};
const WBC={'0.0':['Ex 1 – Giải ô chữ bằng từ vựng của lesson','Ex 2 – Trả lời các câu hỏi trong gợi ý về bản thân','Challenge – Viết đoạn ngắn về cách bạn học tốt nhất']};

