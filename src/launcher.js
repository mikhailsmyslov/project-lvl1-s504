import readLineSync from 'readline-sync';
import games from './games';


const makeLoop = (userName) => {
  if (userName) readLineSync.keyInPause('Press any key to continue');

  console.clear();
  console.log('Wellcome to the Brain Games!');

  const gameIndex = readLineSync.keyInSelect(games.names, 'Please, choose a game: ');
  const choosenGame = games.names[gameIndex];

  return !choosenGame
    ? console.log('Bye-Bye!')
    : makeLoop(games.select(choosenGame).launchAs(userName));
};

export default makeLoop;
