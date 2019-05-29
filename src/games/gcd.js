import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (a !== 0 ? getGCD(b % a, a) : b);


// Game data generator description BEGIN

const generateGameData = () => {
  const a = random(2, 50);
  const b = random(50, 99);
  return cons(`${a} ${b}`, String(getGCD(a, b)));
};

// Game data generator description END

export default createGame(description, generateGameData);
