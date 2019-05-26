import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import isPrime from '../misc/isprime';

const game = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  // Logics description BEGIN

  const logics = () => {
    const value = random(0, 500);
    const question = `Is ${value} a prime number?`;
    const rightAnswer = isPrime(value) ? 'yes' : 'no';
    return cons(question, rightAnswer);
  };

  // Logics description END

  return cons(rules, logics);
};

export default game();
