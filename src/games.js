import brainEven from './games/even';
import brainCalc from './games/calc';
import brainGsd from './games/gcd';
import brainProg from './games/progression';
import brainPrime from './games/prime';

const games = {
  'Is even?': brainEven,
  'Calculate expression': brainCalc,
  'Greater Common Divider': brainGsd,
  'Arithmetic progression': brainProg,
  'Prime numbers': brainPrime,
};

const gameNames = Object.keys(games);

class Games {
  constructor(game) {
    this.games = games;
    this.game = game;
    this.names = gameNames;
  }

  select(name) {
    return new Games(this.games[name]);
  }

  launchAs(userName) {
    return this.game(userName);
  }
}
export default new Games();
