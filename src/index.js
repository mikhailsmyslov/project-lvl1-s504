import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const scoresCount = 3;

export default (description, generateGameData, userNameParameter) => {
  console.clear();
  console.log('Wellcome to the Brain Games!');

  const userName = userNameParameter || readlineSync.question('May I have your name?\n> ');
  console.log(`\nHello, ${userName}!\n`);

  console.log(`${description}\n`);

  for (let i = 0; i < scoresCount; i += 1) {
    const gameData = generateGameData();
    const question = car(gameData);
    const rightAnswer = cdr(gameData);

    console.log(`Qestion: ${question}`);

    const answer = readlineSync.question('\nYour answer:\n> ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`\nLet's try again, ${userName}!\n`);
      return userName;
    }
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${userName}!\n`);
  return userName;
};
