import readlineSync from 'readline-sync';

import random from 'lodash.random';

import { gameOver, wonTheGame } from '.';

export default (userName) => {
  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const cValue = random(1, 99);
    const answer = readlineSync.question(`Is ${cValue} an even number?\n`);
    const rightAnswer = cValue % 2 === 0 ? 'yes' : 'no';
    console.log(`Your answer is: ${answer}`);
    if (answer === rightAnswer) {
      console.log('Correct!\n');
      rightAnswers += 1;
    } else {
      gameOver(answer, rightAnswer, userName);
      return;
    }
  }
  wonTheGame(userName);
};
