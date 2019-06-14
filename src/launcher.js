import readLineSync from 'readline-sync';
import brainEven from './games/even';
import brainCalc from './games/calc';
import brainGSD from './games/gcd';
import brainProg from './games/progression';
import brainPrime from './games/prime';

const games = {
  'Is even?': brainEven,
  'Calculate expression': brainCalc,
  'Greater Common Divider': brainGSD,
  'Arithmetic progression': brainProg,
  'Prime numbers': brainPrime,
};

const gameNames = Object.keys(games);

const launchGame = (userName) => {
  if (userName !== undefined) readLineSync.keyInPause('Press any key to continue');

  console.clear();
  console.log('Wellcome to the Brain Games!');

  const choice = readLineSync.keyInSelect(gameNames, 'Please, choose a game to play: ');

  const chosenGame = games[gameNames[choice]];

  if (chosenGame === undefined) {
    console.log('Bye-Bye!');
    return false;
  }
  return launchGame(chosenGame(userName));
};

export default launchGame;
