import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

const game = () => {
  const rules = 'What is the result of the expression?';

  // Logics description BEGIN

  const logics = () => {
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

  // Logics description END

  return cons(rules, logics);
};

export default game();
