// SECTION FADE IN
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));


// NAVBAR SCROLL EFFECT
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// =================================
// AURA FARMER
// =================================

const auraFarmerFrames = [
  "images/hero_idle1.png",
  "images/hero_idle2.png",
  "images/hero_idle3.png",
  "images/hero_idle4.png",
  "images/hero_idle5.png",
  "images/hero_idle6.png",
  "images/hero_idle7.png",
  "images/hero_idle8.png"
]

let auraFarmerFrame = 0;

setInterval(() => {
  
  auraFarmerFrame++;

  if(auraFarmerFrame >= auraFarmerFrames.length){
    auraFarmerFrame = 0;
  }

  document.getElementById("auraFarmerGif").src = auraFarmerFrames[auraFarmerFrame];
}, 120);

const auraFrames = [
  "images/aura1.png",
  "images/aura2.png",
  "images/aura3.png",
  "images/aura4.png",
  "images/aura5.png",
  "images/aura6.png",
  "images/aura7.png",
  "images/aura8.png"
  
]

let auraFrame = 0;

setInterval(() => {
  
  auraFrame++;

  if(auraFrame >= auraFrames.length){
    auraFrame = 0;
  }

  document.getElementById("auraGif").src = auraFrames[auraFrame];

}, 120);

const slimeFrames = [
  "images/slime_walk1.png",
  "images/slime_walk2.png",
  "images/slime_walk3.png",
  "images/slime_walk4.png",
  "images/slime_walk5.png",
  "images/slime_walk6.png",
  "images/slime_walk7.png",
  "images/slime_walk8.png"
]

let slimeFrame = 0;

setInterval(() => {
  
  slimeFrame++;

  if(slimeFrame >= slimeFrames.length){
    slimeFrame = 0;
  }

  document.getElementById("slimeGif").src = slimeFrames[slimeFrame];

}, 120);


const slimeRedFrames = [
  "images/slime_red_walk1.png",
  "images/slime_red_walk2.png",
  "images/slime_red_walk3.png",
  "images/slime_red_walk4.png",
  "images/slime_red_walk5.png",
  "images/slime_red_walk6.png",
  "images/slime_red_walk7.png",
  "images/slime_red_walk8.png"
]

let slimeRedFrame = 0;

setInterval(() => {
  
  slimeRedFrame++;

  if(slimeRedFrame >= slimeRedFrames.length){
    slimeRedFrame = 0;
  }

  document.getElementById("slimeRedGif").src = slimeRedFrames[slimeRedFrame];

}, 120);

const slimeGrayFrames = [
  "images/slime_gray_walk1.png",
  "images/slime_gray_walk2.png",
  "images/slime_gray_walk3.png",
  "images/slime_gray_walk4.png",
  "images/slime_gray_walk5.png",
  "images/slime_gray_walk6.png",
  "images/slime_gray_walk7.png",
  "images/slime_gray_walk8.png",
]

let slimeGrayFrame = 0;

setInterval(() => {
  
  slimeGrayFrame++;

  if(slimeGrayFrame >= slimeGrayFrames.length){
    slimeGrayFrame = 0;
  }

  document.getElementById("slimeGrayGif").src = slimeGrayFrames[slimeGrayFrame];

}, 120);

const slimeBossFrames = [
  "images/slime_boss_walk1.png",
  "images/slime_boss_walk2.png",
  "images/slime_boss_walk3.png",
  "images/slime_boss_walk4.png",
  "images/slime_boss_walk5.png",
  "images/slime_boss_walk6.png",
  "images/slime_boss_walk7.png",
  "images/slime_boss_walk8.png"
]

let slimeBossFrame = 0;

setInterval(() => {
  
  slimeBossFrame++;

  if(slimeBossFrame >= slimeBossFrames.length){
    slimeBossFrame = 0;
  }

  document.getElementById("slimeBossGif").src = slimeBossFrames[slimeBossFrame];

}, 120);