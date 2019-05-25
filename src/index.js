import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

export default (rules, gameDataGen) => {
  console.log(`Welcome to the Brain Games!\n${rules}\n`);

  const userName = readlineSync.question('May I have your name?\n');
  console.log(`\nHello, ${userName}!\n`);

  const scoresToWin = 3;

  let scores = 0;
  while (scores < scoresToWin) {
    const gameData = gameDataGen();

    const question = car(gameData);
    const rightAnswer = cdr(gameData);

    const answer = readlineSync.question(`Qestion: ${question}\nYour answer: `);

    if (answer === rightAnswer) {
      console.log('Correct!\n');
      scores += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n`);
      break;
    }
  }

  if (scores === scoresToWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
