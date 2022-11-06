'use strict';

const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const highScoreText = document.querySelector('.highscore');
let scoretext = document.querySelector('.score');
let numberText = document.querySelector('.number');
let message = document.querySelector('.message');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let initialScore = 20;
let highScore = 0;

const resetGame = function () {
  const inputGuess = document.querySelector('.guess');
  initialScore = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  inputGuess.value = '';
  document.body.style.backgroundColor = '#222';
  numberText.style.width = '15rem';
  numberText.textContent = '?';
  message.textContent = 'Start guessing...';
  scoretext.textContent = initialScore;
};

const wrongGuess = function (text) {
  if (initialScore > 1) {
    message.textContent = text;
    initialScore--;
    scoretext.textContent = initialScore;
  } else {
    message.textContent = '👎You lost the game';
    scoretext.textContent = 0;
  }
};

const correctGuess = function () {
  numberText.textContent = secretNumber;
  message.textContent = '🎉Correct Number';
  document.body.style.backgroundColor = '#60b347';
  numberText.style.width = '30rem';
  if (initialScore > highScore) {
    highScore = initialScore;
    highScoreText.textContent = highScore;
  }
};

checkButton.addEventListener('click', function () {
  const inputGuess = Number(document.querySelector('.guess').value);

  if (!inputGuess) {
    message.textContent = '⛔No Number!';
  } else if (inputGuess === secretNumber) {
    correctGuess();
  } else if (inputGuess > secretNumber) {
    wrongGuess('📉Too high');
  } else if (inputGuess < secretNumber) {
    wrongGuess('📈Too low');
  }
});

againButton.addEventListener('click', resetGame);
