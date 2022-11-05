'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const scoreMessage = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
let numberText = document.querySelector('.number');
let message = document.querySelector('.message');

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let initialScore = 20;

checkBtn.addEventListener('click', function () {
  const inputGuess = Number(document.querySelector('.guess').value);

  if (!inputGuess) {
    message.textContent = '⛔No Number!';
  } else if (inputGuess === secretNumber) {
    numberText.textContent = secretNumber;
    message.textContent = '🎉Correct Number';
    highScore.textContent = initialScore;
  } else if (inputGuess > secretNumber) {
    message.textContent = '📉Too high';
    initialScore--;
    scoreMessage.textContent = initialScore;
  } else if (inputGuess < secretNumber) {
    message.textContent = '📈Too low';
    initialScore--;
    scoreMessage.textContent = initialScore;
  }
});
