import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

function generateProggresion() {
  const firstNumber = getRandomNumber();
  const stepOfNumber = getRandomNumber();
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

function askQuestion() {
  const progression = generateProggresion();
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  return { progression, answer };
}

function progressionGameFunction() {
  const progressionGameConditions = 'What number is missing in the progression?';
  console.log(progressionGameConditions);
  const PROGRESSIONGAME_ROUNDS = 3;
  for (let i = 0; i < PROGRESSIONGAME_ROUNDS; i += 1) {
    const { answer: correctAnswer } = askQuestion();
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== Number(userAnswer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      return false;
    }
    console.log('Correct!');
  }

  return true;
}

export default progressionGameFunction;
