import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

const game = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  // Logics description BEGIN

  const logics = () => {
    const a = random(2, 50);
    const b = random(50, 99);
    const question = `What is the GSD for ${a} and ${b}?`;

    const noMod = (div, x, y) => x % div === 0 && y % div === 0;
    const minNum = Math.min(a, b);

    for (let i = minNum; i > 1; i -= 1) {
      if (noMod(i, a, b)) return cons(question, String(i));
    }
    return cons(question, '1');
  };

  // Logics description END

  return cons(rules, logics);
};

export default game();
