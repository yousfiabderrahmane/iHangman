const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figurePart = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];
//Show hidden word
function displayWord() {
  wordEl.innerHTML = `
${selectedWord
  .split("") // string ----> array
  .map(
    (letter) =>
      `<span class="letter">
  ${correctLetters.includes(letter) ? letter : ""}
    </span>`
  )
  .join("")}`; // array ------> string
  const innerWord = wordEl.innerText.replace(/\n/g, ""); //remove roujou3 li satr
  if (innerWord === selectedWord) {
    finalMessage.innerText = `Congratulations ! You won ! 📀`;
    popup.style.display = "flex";
  }
}
displayWord();
