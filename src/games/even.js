import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'Answer "yes" if number is even otherwise answer "no".';

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

// Game data generator description BEGIN

const generateGameData = () => {
  const number = random(1, 99);
  const rightAnswer = isEven(number);
  return cons(number, rightAnswer);
};

// Game data generator description BEGIN

export default createGame(description, generateGameData);
