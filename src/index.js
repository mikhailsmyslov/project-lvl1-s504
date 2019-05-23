import readlineSync from 'readline-sync';

const requestUserName = () => {
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!`);
};

export default requestUserName;
