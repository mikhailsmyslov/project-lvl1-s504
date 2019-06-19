import readLineSync from 'readline-sync';
import games from './games';


const makeLoop = (userNameParameter) => {
  console.clear();
  console.log('Wellcome to the Brain Games!');

  const userName = userNameParameter || readLineSync.question('May I have your name?\n> ');

  const gameName = games.names[
    readLineSync.keyInSelect(games.names, 'Please, choose a game: ')
  ];

  if (!gameName) return console.log('Bye-Bye!');

  games.select(gameName).launchAs(userName);

  readLineSync.keyInPause('Press any key to continue');
  return makeLoop(userName);
};

export default makeLoop;
