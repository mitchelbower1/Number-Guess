'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Start guessing!';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');

      score--;

      document.querySelector('.score').textContent = score;
      // when player looses
    } else {
      displayMessage('You lost...');

      document.querySelector('body').style.backgroundColor = 'red';

      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = 'blue';

  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing!');

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';
});
