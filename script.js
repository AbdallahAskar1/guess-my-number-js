"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
let highscore = 0;
let score = 20;

function displayMessage(message) {
      document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no number
  if (!guess) {
    displayMessage("No Number🚫");
  }
  //when player win
  else if (guess === number) {
    document.querySelector(".number").textContent = number;
    displayMessage("Correct Number🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      
      displayMessage( guess > number ? "Too high" : "Too low");
      score--;

        document.querySelector(".score").textContent = score;
    }
  } else {
   displayMessage("You Lost!");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").value = score;

  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
