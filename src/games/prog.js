import random from 'lodash.random';
import { cons } from 'hexlet-pairs';
import createGame from '..';

const description = 'What number is missing in the progression?';

// Game data generator description BEGIN

const generateGameData = () => {
  const initialValue = random(1, 100);
  const progressionStep = random(1, 10);

  const progression = [];
  const progressionLength = 10;
  const hiddenElementIndex = random(1, progressionLength) - 1;

  for (let i = 0; i <= progressionLength; i += 1) {
    progression[i] = initialValue + i * progressionStep;
  }

  const rightAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';

  return cons(progression.join(' '), String(rightAnswer));
};

// Game data generator description END

export default createGame(description, generateGameData);
