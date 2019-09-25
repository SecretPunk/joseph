/*jshint esversion: 6 */

const VALIDLETTERS = "JOSEPHjoseph";
const SOUNDPATH = "resources/sounds/";

document.addEventListener("keydown", handleKey);

function handleKey(event) {

  var pressedKey = event.key;

  if (VALIDLETTERS.includes(pressedKey)) {
    var letter = pressedKey.toUpperCase();
    animateLetter(letter);
    playSound(letter);
  }
}

function animateLetter(letter) {

  var letterElement = document.querySelector("." + letter);

  letterElement.classList.add("pressed");

  setTimeout(function() {
    letterElement.classList.remove("pressed");
  }, 1200);
}

function playSound(letter) {

  new Audio(SOUNDPATH + letter + ".mp3").play();
}

