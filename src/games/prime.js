import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  const iteration = (divisor) => {
    if (divisor > number / 2) return true;
    if (number % divisor === 0) return false;
    return iteration(divisor + 1);
  };
  return iteration(2);
};

const generateGameData = () => {
  const question = random(500);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default createGame(description, generateGameData);
