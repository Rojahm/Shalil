let rand1 = document.querySelector("#rand1");
let rand2 = document.querySelector("#rand2");
let rand3 = document.querySelector("#rand3");
let img = document.querySelector("#random-img");
let luckBtn = document.querySelector("#lucky-button");
let resetBtn = document.querySelector("#reset-button");

let emojis = [
  "🍧",
  "🌈",
  "🍨",
  "🍭",
  "🌞",
  "☀",
  "🌻",
  "😎",
  "👧",
  "🐣",
  "🐥",
  "🐤",
  "🎀",
  "🎈",
  "🎗",
  "👙",
  "👛",
  "🩰",
  "💄",
  "🪀",
  "🔮",
  "🧿",
  "🪁",
  "💎",
  "💋",
  "👒",
  "👠",
  "🛍",
  "👗",
  "🎁",
  "🎢",
  "🎪",
  "🦝",
  "🦄",
  "😽",
];
let maxNumber = emojis.length;
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
function resetSlot(event) {
  event.preventDefault();
  document.querySelector("#init-state1").classList.remove("d-none");
  document.querySelector("#init-state2").classList.remove("d-none");
  document.querySelector("#init-state3").classList.remove("d-none");
  resetBtn.classList.add("d-none");
  luckBtn.classList.remove("d-none");
  spinned = 0;
  rand1.classList.add("d-none");
  rand2.classList.add("d-none");
  rand3.classList.add("d-none");
  document.querySelector("#box1").classList.remove("active");
  document.querySelector("#box2").classList.remove("active");
  document.querySelector("#box3").classList.remove("active");
  img.classList.add("d-none");
}
function randomEmoji(event) {
  event.preventDefault();
  document.querySelector("#init-state1").classList.add("d-none");
  document.querySelector("#init-state2").classList.add("d-none");
  document.querySelector("#init-state3").classList.add("d-none");

  let contan1 = [];
  let contan2 = [];
  let contan3 = [];
  for (let index = 0; index < 6; index++) {
    contan1 += emojis[randomNumber(maxNumber)];
    contan2 += emojis[randomNumber(maxNumber)];
    contan3 += emojis[randomNumber(maxNumber)];
  }
  rand1.innerHTML = contan1;
  rand2.innerHTML = contan2;
  rand3.innerHTML = contan3;

  document.querySelector("#box1").classList.add("active");
  document.querySelector("#box2").classList.add("active");
  document.querySelector("#box3").classList.add("active");

  document.querySelector("#box3").addEventListener("transitionend", () => {
    console.log("ended");
    img.src = `img/${randomNumber(7)}.jpg`;
  });
  img.classList.remove("d-none");
  spinned = 1;
  luckBtn.classList.add("d-none");
  resetBtn.classList.remove("d-none");
  rand1.classList.remove("d-none");
  rand2.classList.remove("d-none");
  rand3.classList.remove("d-none");
}

luckBtn.addEventListener("click", randomEmoji);
resetBtn.addEventListener("click", resetSlot);
