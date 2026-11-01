
/* ===== Sound effects (Web Audio, không cần file ngoài) ===== */
(function(){
var AC=window.AudioContext||window.webkitAudioContext,ctx=null,on=true,lastClick=0,lastPlay=0;
try{on=localStorage.getItem('cge9snd')!=='0'}catch(_){}
function get(){if(!AC)return null;if(!ctx){try{ctx=new AC()}catch(_){return null}}if(ctx.state==='suspended')ctx.resume();return ctx}
function tone(f,t0,d,type,vol,f2){var c=get();if(!c)return;var o=c.createOscillator(),g=c.createGain(),t=c.currentTime+t0;
 o.type=type||'sine';o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);
 g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+0.012);g.gain.exponentialRampToValueAtTime(0.0001,t+d);
 o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+d+0.05)}
var S={
 tick:function(){tone(820,0,0.045,'sine',0.035)},
 correct:function(){tone(523,0,0.14,'triangle',0.09);tone(659,0.09,0.14,'triangle',0.09);tone(784,0.18,0.28,'triangle',0.1)},
 wrong:function(){tone(220,0,0.28,'sawtooth',0.05,140);tone(165,0.1,0.3,'square',0.035,110)}
};
function play(n){if(!on)return;try{S[n]()}catch(_){}}
window.cgeSound=play;
function btnLabel(){var b=document.getElementById('sndBtn');if(b){b.textContent=on?'🔊':'🔇';b.title=on?'Âm thanh: bật (bấm để tắt)':'Âm thanh: tắt (bấm để bật)'}}
document.addEventListener('click',function(e){
 lastClick=Date.now();
 var sb=e.target.closest&&e.target.closest('#sndBtn');
 if(sb){on=!on;try{localStorage.setItem('cge9snd',on?'1':'0')}catch(_){}btnLabel();if(on){get();play('tick')}return}
 if(e.target.closest&&e.target.closest('button,a,[data-act],[data-fc],[data-fcx],.opt'))play('tick');
},true);
function has(n,c){return n.nodeType===1&&(n.classList.contains(c)||!!n.querySelector('.'+c))}
function start(){
 btnLabel();
 new MutationObserver(function(ms){
  if(Date.now()-lastClick>700)return;
  var ok=false,bad=false;
  ms.forEach(function(m){
   if(m.type==='attributes'){var t=m.target,old=m.oldValue||'';
    if(t.classList.contains('correct')&&!/\bcorrect\b/.test(old))ok=true;
    if(t.classList.contains('wrong')&&!/\bwrong\b/.test(old))bad=true}
   else m.addedNodes.forEach(function(n){if(has(n,'correct'))ok=true;if(has(n,'wrong'))bad=true})
  });
  if(!ok&&!bad)return;
  var now=Date.now();if(now-lastPlay<250)return;lastPlay=now;
  setTimeout(function(){play(bad?'wrong':'correct')},60);
 }).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class'],attributeOldValue:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
