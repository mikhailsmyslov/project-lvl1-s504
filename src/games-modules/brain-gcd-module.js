import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

const game = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  // Logics description BEGIN

  const logics = () => {
    const a = random(1, 99);
    const b = random(1, 99);
    const question = `What is the GSD for ${a} and ${b}?`;

    const minNum = Math.min(a, b);
    const maxNum = Math.max(a, b);

    if (maxNum % minNum === 0) return cons(question, String(minNum));
    let rightAnswer = 1;
    for (let cGCD = Math.round(minNum / 2); cGCD > 1; cGCD -= 1) {
      if ((minNum % cGCD === 0) && (maxNum % cGCD === 0)) {
        rightAnswer = cGCD;
        break;
      }
    }
    return cons(question, String(rightAnswer));
  };

  // Logics description END

  return cons(rules, logics);
};

export default game();
