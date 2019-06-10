import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'Answer "yes" if number is even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const generateGameData = () => {
  const question = random(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default userName => createGame(description, generateGameData, userName);
