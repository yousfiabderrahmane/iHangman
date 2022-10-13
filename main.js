const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "dog",
  "cat",
  "summer",
  "water",
  "festival",
  "browser",
  "web",
  "pencil",
  "gum",
  "joyboy",
  "ace",
  "luffy",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);
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
    finalMessage.innerText = `Congratulations ! You won ! 🥀`;

    popup.style.display = "flex";
  }
}
// update the wrong letter
function updateWrongLettersEl() {
  // display wrong letter
  wrongLettersEl.innerHTML = `
  ${wrongLetters.length > 0 ? `<p>Wrong </p>` : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  // display figure parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });
  //check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = `Unfortunately, you lost ! 😪 `;
    popup.style.display = "flex";
  }
}

//show the notification
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

//keydown letter press
window.addEventListener("keydown", (e) => {
  //   console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});
// restart game and play again
playAgainBtn.addEventListener("click", () => {
  //empty the arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();
  popup.style.display = "none";
});

//fade in
const gameContainer = document.getElementById("game-container");
const title = document.getElementById("title");
setTimeout(() => {
  gameContainer.classList.add("fade");
}, 350);
setTimeout(() => {
  title.classList.add("fade");
}, 100);

displayWord();
