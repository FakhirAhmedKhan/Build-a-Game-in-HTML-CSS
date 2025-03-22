// DOM Element selection
const input = document.querySelector("input"),
  Guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100) + 1; // Random number (1-100)
let chances = 10;

function checkGuess() {
  let inputValue = Number(input.value); // Convert input to number

  if (chances > 0) {
    chances--; // Decrease chance

    if (inputValue === randomNum) {
      Guess.textContent = "Congratulations! You guessed it right!";
      Guess.style.color = "#28a745"; // Green color
      checkButton.textContent = "Retry karo bhai!";
      checkButton.disabled = true;
    } else if (inputValue > randomNum && inputValue <= 100) {
      Guess.textContent = "Your guess is too high!";
      Guess.style.color = "#333";
    } else if (inputValue < randomNum && inputValue > 0) {
      Guess.textContent = "Your guess is too low!";
      Guess.style.color = "#333";
    } else {
      Guess.textContent = "Invalid input! Enter a number between 1 and 100.";
      Guess.style.color = "#DE0611"; // Red color
    }

    remainChances.textContent = `Chances left: ${chances}`;
  }

  if (chances === 0) {
    Guess.textContent = "You lost the game!";
    Guess.style.color = "#DE0611";
    checkButton.textContent = "Replay";
    input.disabled = true;
    checkButton.disabled = true;
  }

  if (chances < 0) {
    window.location.reload(); // Reload page on replay
  }

  input.value = ""; // Clear input after each guess
}

// Click event for button
checkButton.addEventListener("click", checkGuess);

// Keyboard event for Enter key
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
