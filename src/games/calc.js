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

const generateGameData = () => {
  const a = random(10);
  const b = random(10);
  const operand = operands[random(operands.length - 1)];
  const question = `${a} ${operand} ${b}`;
  const rightAnswer = calculateExpression(a, b, operand);
  return cons(question, String(rightAnswer));
};

export default userName => createGame(description, generateGameData, userName);
