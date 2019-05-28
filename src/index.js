import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

export const showGreeting = (userName, option) => {
  const getGreetingVariant = () => {
    switch (true) {
      case userName === undefined:
        return 'Wellcome to the Brain Games!';
      case option === 'main':
        return `Wellcome to the Brain Games, ${userName}!`;
      default:
        return `Wellcome to the GAME, ${userName}!`;
    }
  };
  console.clear();
  console.log(getGreetingVariant());
};

const isRightAnswer = (answer, rightAnswer) => {
  if (answer === rightAnswer) {
    console.log('Correct!\n');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n`);
  return false;
};

export default (description, generateGameData) => (userNameParameter) => {
  showGreeting(userNameParameter);
  let userName = userNameParameter;

  if (userNameParameter === undefined) {
    userName = readlineSync.question('May I have your name?\n> ');
    console.log(`\nHello, ${userName}!\n`);
  }

  console.log(`${description}\n`);

  const scoresForWin = 3;

  for (let scores = 0; scores < scoresForWin; scores += 1) {
    const gameData = generateGameData();

    const question = car(gameData);
    const rightAnswer = cdr(gameData);

    const answer = readlineSync.question(`Qestion: ${question}\nYour answer:\n> `);

    if (!isRightAnswer(answer, rightAnswer)) {
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};
