const slider=document.querySelector(".slider");
const slides=document.querySelectorAll(".slide");
const nextBtn=document.getElementById("nextBtn");
const prevBtn=document.getElementById("prevBtn");
const startBtn=document.getElementById("startBtn");
const bgMusic=document.getElementById("bgMusic");

let currentIndex=0;

function updateSlider(){
slider.style.transform=`translateX(-${currentIndex*100}vw)`;
}

nextBtn.onclick=()=>{
if(currentIndex<slides.length-1){
currentIndex++;
updateSlider();
}
};

prevBtn.onclick=()=>{
if(currentIndex>0){
currentIndex--;
updateSlider();
}
};

startBtn.onclick=()=>{
currentIndex=1;
updateSlider();
bgMusic.currentTime=0;
bgMusic.play().catch(()=>{});
};

/* MINI GAME */
const gameArea=document.getElementById("gameArea");
const colorCounter=document.getElementById("colorCounter");
const gameMessage=document.getElementById("gameMessage");

let splashCount=0;

const colors=["#ff4e50","#fc913a","#f9d423","#a8e063","#56ccf2","#bb6bd9"];

gameArea.onclick=(e)=>{
splashCount++;
colorCounter.textContent=`Colors Spread: ${splashCount}`;

const splash=document.createElement("div");
splash.style.position="absolute";
splash.style.width="80px";
splash.style.height="80px";
splash.style.borderRadius="50%";
splash.style.background=colors[Math.floor(Math.random()*colors.length)];
splash.style.left=`${e.clientX-40}px`;
splash.style.top=`${e.clientY-40}px`;
splash.style.opacity="0.8";
splash.style.transition="0.6s ease";
gameArea.appendChild(splash);

setTimeout(()=>{splash.style.opacity="0";splash.style.transform="scale(1.5)";},50);
setTimeout(()=>{splash.remove();},600);

if(splashCount===15){
gameMessage.style.display="block";
}
};

/* SECRET MESSAGE + TYPEWRITER */
const secretBubble=document.getElementById("secretBubble");
const finalMessage=document.getElementById("finalMessage");
const typeText=document.getElementById("typeText");

const message=`Holi is called the festival of colors 🎨,
but some colors don’t come from gulaal. 🌸
They come from people. 💛
From the way one person enters your life
and suddenly everything feels softer. ✨
You don’t even realise
when their name starts sounding like comfort. 🌷
When their presence starts feeling like home. 🏡
You don’t need to touch them,
don’t need to stand close,
don’t even need to say anything. 🤍
Still, their existence adds color
to your ordinary days. 🌈
Some people don’t throw colors on you,
they become the color of your life. 🎨💞
You start smiling differently 😊,
thinking differently 💭,
feeling differently 💫,
and you don’t even know when it happened.
Holi lasts one day,
but the color someone leaves on your heart
sometimes never fades. 💖✨

Happy Holiii guyssss ✨🔫`;

let typingStarted=false;

secretBubble.onclick=()=>{
if(typingStarted)return;
typingStarted=true;

finalMessage.style.display="block";

let i=0;
function typeWriter(){
if(i<message.length){
typeText.innerHTML+=message.charAt(i);
i++;
setTimeout(typeWriter,30);
}
}
typeWriter();
};
