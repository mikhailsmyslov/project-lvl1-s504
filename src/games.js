import brainEven from './games/even';
import brainCalc from './games/calc';
import brainGsd from './games/gcd';
import brainProg from './games/progression';
import brainPrime from './games/prime';

const gameNames = [
  'Is even?',
  'Calculate expression',
  'Greater Common Divider',
  'Arithmetic progression',
  'Prime numbers',
];

class Games {
  constructor(gameName) {
    this.game = gameName;
    this.names = gameNames;
  }

  select(name) {
    switch (name) {
      case this.names[0]:
        return new Games(brainEven);
      case this.names[1]:
        return new Games(brainCalc);
      case this.names[2]:
        return new Games(brainGsd);
      case this.names[3]:
        return new Games(brainProg);
      case this.names[4]:
        return new Games(brainPrime);
      default:
        return new Games(() => console.log('No such game!'));
    }
  }

  launchAs(userName) {
    return this.game(userName);
  }
}
export default new Games();
