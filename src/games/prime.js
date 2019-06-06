import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const isPrime = (number) => {
  if (number < 2) return false;
  const iteration = (val, div) => {
    if (div === 1) return true;
    if (val % div === 0) return false;
    return iteration(val, div - 1);
  };
  return iteration(number, Math.floor(number / 2));
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Game data generator description BEGIN

const generateGameData = () => {
  const question = random(500);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

// Game data generator description END

export default userName => createGame(description, generateGameData, userName);
