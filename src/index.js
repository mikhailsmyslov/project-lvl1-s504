import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

export const requestUserName = () => {
  const userName = readlineSync.question('May I have your name?\n> ');
  console.log(`\nHello, ${userName}!\n`);
  return userName;
};

export const greeting = (userName) => {
  const text = 'Welcome to the Brain Games';
  const result = userName === undefined ? `${text}!` : `${text}, ${userName}!\n`;
  console.clear();
  console.log(result);
};

export const showGameResult = (game, userName) => {
  if (game === true) {
    console.log(`Congratulations, ${userName}!\n`);
  } else {
    console.log(`Let's try again, ${userName}!\n`);
  }
};

export const engine = (game) => {
  const rules = car(game);
  console.log(`${rules}\n`);

  for (let scores = 0; scores < 3;) {
    const gameData = cdr(game)();

    const question = car(gameData);
    const rightAnswer = cdr(gameData);

    const answer = readlineSync.question(`Qestion: ${question}\nYour answer: `);

    if (answer === rightAnswer) {
      console.log('Correct!\n');
      scores += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n`);
      return false;
    }
  }
  return true;
};
