import readlineSync from 'readline-sync';

export const requestUserName = () => {
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`\nHello, ${userName}!\n`);
  return userName;
};

export const gameOver = (answer, rightAnswer, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.)`);
  console.log(`Let's try again, ${userName}!`);
};

export const wonTheGame = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
