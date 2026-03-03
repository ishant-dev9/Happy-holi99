/* ===============================
   GLOBAL VARIABLES
=============================== */

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

let currentIndex = 0;
const totalSlides = slides.length;


/* ===============================
   SLIDER FUNCTION
=============================== */

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}


/* ===============================
   BUTTON NAVIGATION
=============================== */

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});


/* ===============================
   START BUTTON (PAGE 1)
   - Moves to next slide
   - Starts background music
=============================== */

startBtn.addEventListener("click", () => {
    currentIndex = 1;
    updateSlider();

    // Play music (user interaction required)
    bgMusic.play().catch(() => {});
});


/* ===============================
   SWIPE DETECTION (Mobile)
=============================== */

let startX = 0;
let endX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (startX - endX > 50) {
        // Swipe Left
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    }

    if (endX - startX > 50) {
        // Swipe Right
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
}


/* ===============================
   MINI GAME – COLOR SPLASH
=============================== */

const gameArea = document.getElementById("gameArea");
const colorCounter = document.getElementById("colorCounter");
const gameMessage = document.getElementById("gameMessage");

let splashCount = 0;

// Random Holi colors
const colors = [
    "#ff4e50",
    "#fc913a",
    "#f9d423",
    "#a8e063",
    "#56ccf2",
    "#bb6bd9"
];

gameArea.addEventListener("click", (e) => {

    splashCount++;
    colorCounter.textContent = `Colors Spread: ${splashCount}`;

    // Create splash
    const splash = document.createElement("div");
    splash.style.position = "absolute";
    splash.style.width = "80px";
    splash.style.height = "80px";
    splash.style.borderRadius = "50%";
    splash.style.background = colors[Math.floor(Math.random() * colors.length)];
    splash.style.left = `${e.clientX - 40}px`;
    splash.style.top = `${e.clientY - 40}px`;
    splash.style.opacity = "0.8";
    splash.style.pointerEvents = "none";
    splash.style.transition = "0.6s ease";

    gameArea.appendChild(splash);

    // Fade out effect
    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.transform = "scale(1.5)";
    }, 50);

    setTimeout(() => {
        splash.remove();
    }, 600);

    // Show hidden message after 15 splashes
    if (splashCount === 15) {
        gameMessage.style.display = "block";
    }
});


/* ===============================
   SECRET BUBBLE REVEAL
=============================== */

const secretBubble = document.getElementById("secretBubble");
const finalMessage = document.getElementById("finalMessage");

secretBubble.addEventListener("click", () => {
    finalMessage.style.display = "block";

    // Optional: soft music fade out
    bgMusic.volume = 0.3;

    setTimeout(() => {
        bgMusic.volume = 0.1;
    }, 2000);
});