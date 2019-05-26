import random from 'lodash.random';
import { cons } from 'hexlet-pairs';

const game = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  // Logics description BEGIN

  const logics = () => {
    const value = random(0, 500);
    const question = `Is ${value} a prime number?`;

    const isPrime = (number) => {
      if (number < 2) return false;
      const iteration = (val, div) => {
        if (div === 1) return true;
        if (val % div === 0) return false;
        return iteration(val, div - 1);
      };
      return iteration(number, Math.floor(number / 2));
    };

    const rightAnswer = isPrime(value) ? 'yes' : 'no';
    return cons(question, rightAnswer);
  };

  // Logics description END

  return cons(rules, logics);
};

export default game();
