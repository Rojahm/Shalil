let rand1 = document.querySelector("#rand1");
let rand2 = document.querySelector("#rand2");
let rand3 = document.querySelector("#rand3");
let img = document.querySelector("#random-img");
let luckBtn = document.querySelector("#lucky-button");
let resetBtn = document.querySelector("#reset-button");
let boxes = document.querySelectorAll(".init-state");
let insides = document.querySelectorAll(".inside");
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
  for (let box of boxes) {
    box.classList.remove("d-none");
  }

  resetBtn.classList.add("d-none");
  luckBtn.classList.remove("d-none");
  // rand1.classList.add("d-none");
  // rand2.classList.add("d-none");
  // rand3.classList.add("d-none");

  for (let inside of insides) {
    inside.classList.add("d-none");
    inside.classList.remove("active");
  }

  img.classList.add("d-none");
}
function randomEmoji(event) {
  event.preventDefault();
  for (let box of boxes) {
    box.classList.add("d-none");
  }
  for (let inside of insides) {
    inside.classList.remove("d-none");
    inside.classList.add("active");
  }

  let contan1 = [""];
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

  document.querySelector("#box3").addEventListener("transitionend", () => {
    console.log("ended");
    img.src = `img/${randomNumber(7)}.jpg`;
  });
  img.classList.remove("d-none");
  luckBtn.classList.add("d-none");
  resetBtn.classList.remove("d-none");
  rand1.classList.remove("d-none");
  rand2.classList.remove("d-none");
  rand3.classList.remove("d-none");
}

luckBtn.addEventListener("click", randomEmoji);
resetBtn.addEventListener("click", resetSlot);
