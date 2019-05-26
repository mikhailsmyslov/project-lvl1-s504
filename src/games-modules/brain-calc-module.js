import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

const game = () => {
  const rules = 'What is the result of the expression?';

  // Logics description BEGIN

  const logics = () => {
    const a = random(1, 11);
    const b = random(1, 11);
    const availOps = ['+', '-', '*'];
    const operation = availOps[random(0, 2)];

    const question = `${a} ${operation} ${b}`;

    // eslint-disable-next-line no-eval
    const rightAnswer = eval(question);

    return cons(question, String(rightAnswer));
  };

  // Logics description END

  return cons(rules, logics);
};

export default game();
