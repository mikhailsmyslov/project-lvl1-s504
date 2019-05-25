import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

export const rules = 'What is the result of the expression?';

export default () => {
  const a = random(1, 11);
  const b = random(1, 11);
  const randomOpSelector = random(1, 3);
  let operation = '';
  let rightAnswer = 0;
  switch (randomOpSelector) {
    case 1:
      operation = '+';
      rightAnswer = a + b;
      break;
    case 2:
      operation = '-';
      rightAnswer = a - b;
      break;
    case 3:
      operation = '*';
      rightAnswer = a * b;
      break;
    default:
      break;
  }
  const question = `${a} ${operation} ${b}`;
  return cons(question, String(rightAnswer));
};
