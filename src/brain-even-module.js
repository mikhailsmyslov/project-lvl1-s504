import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

export const rules = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const cValue = random(1, 99);
  const question = `Is ${cValue} an even number?`;
  const rightAnswer = cValue % 2 === 0 ? 'yes' : 'no';
  return cons(question, rightAnswer);
};
