import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (a !== 0 ? getGcd(b % a, a) : b);

const generateGameData = () => {
  const a = random(100);
  const b = random(100);
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b);
  return cons(question, String(rightAnswer));
};

export default createGame(description, generateGameData);
