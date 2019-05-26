import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

const game = () => {
  const rules = 'What number is missing in the progression?';

  // Logics description BEGIN

  const logics = () => {
    const initVal = random(1, 100);
    const progStep = random(1, 10);

    const prog = [];
    const progLen = 10;
    const hiddenValInd = random(1, progLen) - 1;

    for (let i = 0; i <= progLen; i += 1) {
      prog[i] = initVal + i * progStep;
    }

    const rightAnswer = prog[hiddenValInd];
    prog[hiddenValInd] = '..';
    const question = prog.join(' ');

    return cons(question, String(rightAnswer));
  };

  // Logics description END

  return cons(rules, logics);
};

export default game();
