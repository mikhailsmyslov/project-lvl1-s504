import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  const minNumber = Math.min(Math.abs(a), Math.abs(b));
  const maxNumber = Math.max(Math.abs(a), Math.abs(b));

  if (maxNumber % minNumber === 0) return minNumber;

  for (let divisor = Math.floor(minNumber); divisor > 1; divisor -= 1) {
    if (maxNumber % divisor === 0 && minNumber % divisor === 0) {
      return divisor;
    }
  }
  return 1;
};

// Game data generator description BEGIN

const generateGameData = () => {
  const a = random(2, 50);
  const b = random(50, 99);
  return cons(`${a} ${b}`, String(getGCD(a, b)));
};

// Game data generator description END

export default createGame(description, generateGameData);
