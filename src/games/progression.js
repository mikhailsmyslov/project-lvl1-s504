import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateGameData = () => {
  const initialValue = random(100);
  const progressionStep = random(1, 10);

  const progression = [];
  const hiddenElementIndex = random(1, progressionLength) - 1;

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = initialValue + i * progressionStep;
  }
  const rightAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return cons(question, String(rightAnswer));
};

export default userName => createGame(description, generateGameData, userName);
