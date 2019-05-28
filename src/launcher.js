import readLineSync from 'readline-sync';

import brainEven from './games/even';
import brainCalc from './games/calc';
import brainGSD from './games/gcd';
import brainProg from './games/prog';
import brainPrime from './games/prime';
import { showGreeting } from '.';

const launchGame = (userNameParameter) => {
  showGreeting(userNameParameter, 'main');

  /* The next block is completely copied and pasted from Index.js.
    Believe it's better to wrap it with function.
    BEGIN */
  let userName = userNameParameter;
  if (userNameParameter === undefined) {
    userName = readLineSync.question('May I have your name?\n> ');
    console.log(`\nHello, ${userName}!\n`);
  }
  // END

  const games = {
    'Is even?': brainEven,
    'Calculate expression': brainCalc,
    'Greater Common Divider': brainGSD,
    'Arithmetic progression': brainProg,
    'Prime numbers': brainPrime,
  };

  const gameNames = Object.keys(games);

  const choice = readLineSync.keyInSelect(gameNames, 'Please, choose a game to play: ');
  const chosenGame = gameNames[choice];

  if (chosenGame === undefined) {
    console.log(`Bye-Bye, ${userName}!`);
    return false;
  }

  games[chosenGame](userName);
  readLineSync.keyInPause('Press any key to continue');
  return launchGame(userName);
};

export default launchGame;
