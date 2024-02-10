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

function progressionGame(getRandomNumber, countOfRounds, askUserAnswer) {
  for (let i = 0; i < countOfRounds; i += 1) {
    const firstNumber = getRandomNumber();
    const stepOfNumber = getRandomNumber();
    const progression = generateProggresion(firstNumber, stepOfNumber);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = askUserAnswer();
    if (correctAnswer !== Number(userAnswer)) {
      return { isSuccess: false, userAnswer, correctAnswer };
    }
    console.log('Correct!');
  }

  return { isSuccess: true };
}

export { progressionGame, gameConditions };
