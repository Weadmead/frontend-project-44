import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

function calculateGCD(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return calculateGCD(num2, num1 % num2);
}

function askQuestion() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = calculateGCD(num1, num2);
  console.log(`Question: ${question}`);
  return { question, answer };
}

function gcdGameFunction() {
  const NUMBER_OF_ROUNDS = 3;
  const gameConditions = 'Find the greatest common divisor of given numbers.';
  console.log(gameConditions);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
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

export default gcdGameFunction;
