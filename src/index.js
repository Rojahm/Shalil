let rand1 = document.querySelector("#rand1");
let rand2 = document.querySelector("#rand2");
let rand3 = document.querySelector("#rand3");
let img = document.querySelector("#random-img");
let luckBtn = document.querySelector("#lucky-button");
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
function randomEmoji() {
  rand1.innerHTML = emojis[randomNumber(maxNumber)];
  rand2.innerHTML = emojis[randomNumber(maxNumber)];
  rand3.innerHTML = emojis[randomNumber(maxNumber)];
  img.src = `img/${randomNumber(7)}.jpg`;
}
function shuffle() {
  rand1.innerHTML = 1;
  rand1.innerHTML = emojis[1];
  rand1.innerHTML = emojis[2];
  rand1.innerHTML = emojis[2];
  rand1.innerHTML = emojis[3];
  rand1.innerHTML = 5;
}
luckBtn.addEventListener("click", randomEmoji);
