import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

const calculateExpression = (a, b, operand) => {
  switch (operand) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};
  // Game data generator description BEGIN


const generateGameData = () => {
  const a = random(1, 11);
  const b = random(1, 11);
  const operand = operands[random(0, 2)];

  const rightAnswer = calculateExpression(a, b, operand);

  return cons(`${a} ${operand} ${b}`, String(rightAnswer));
};

// Game data generator description BEGIN

export default createGame(description, generateGameData);
