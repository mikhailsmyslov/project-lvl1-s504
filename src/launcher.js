import readLineSync from 'readline-sync';

import {
  engine, showGameResult,
} from '.';

import brainEven from './games-modules/brain-even-module';
import brainCalc from './games-modules/brain-calc-module';
import brainGSD from './games-modules/brain-gcd-module';
import brainProg from './games-modules/brain-progression-module';
import brainPrime from './games-modules/brain-prime-module';

export default (userName) => {
  const games = {
    'Is even?': brainEven,
    'Calculate expression': brainCalc,
    'Greater Common Divider': brainGSD,
    'Arithmetic progression': brainProg,
    'Prime numbers': brainPrime,
  };

  const availableGames = Object.keys(games);

  const choice = readLineSync.keyInSelect(availableGames, 'Please, choose a game to play: ');
  const chosenGame = availableGames[choice];

  if (chosenGame === undefined) {
    console.log(`Bye-Bye, ${userName}!`);
    return false;
  }
  console.clear();
  console.log(`Wellcome to the GAME, ${userName}!`);
  return showGameResult(engine(games[chosenGame]), userName);
};
