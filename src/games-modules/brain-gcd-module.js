import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

const game = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  // Logics description BEGIN

  const logics = () => {
    const a = random(2, 50);
    const b = random(50, 99);
    const question = `What is the GSD for ${a} and ${b}?`;

    let i = Math.min(a, b);

    for (i; i > 1; i -= 1) {
      if (a % i === 0 && b % i === 0) break;
    }
    return cons(question, String(i));
  };

  // Logics description END

  return cons(rules, logics);
};

export default game();
