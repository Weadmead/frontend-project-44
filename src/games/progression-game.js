function generateProggresion(firstNumber, stepOfNumber) {
  const maxProgressionLength = 10;
  const result = [];

  for (
    let i = firstNumber;
    result.length < maxProgressionLength;
    i += stepOfNumber
  ) {
    result.push(i);
  }
  return result;
}

const hiddenIndex = Math.floor(Math.random() * 10);
const gameConditions = 'What number is missing in the progression?';

function progressionGame(getRandomNumber) {
  const firstNumber = getRandomNumber();
  const stepOfNumber = getRandomNumber();
  const progression = generateProggresion(firstNumber, stepOfNumber);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
}

export { progressionGame, gameConditions };
