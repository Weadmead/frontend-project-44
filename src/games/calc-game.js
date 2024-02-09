import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const operations = [
  (num1, num2) => ({ question: `${num1} + ${num2}`, answer: num1 + num2 }),
  (num1, num2) => ({ question: `${num1} - ${num2}`, answer: num1 - num2 }),
  (num1, num2) => ({ question: `${num1} * ${num2}`, answer: num1 * num2 }),
];

function askQuestion() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operationIndex = Math.floor(Math.random() * operations.length);
  const { question, answer } = operations[operationIndex](num1, num2);

  console.log(`Question: ${question}`);
  return { question, answer };
}

function calcGameFunction() {
  const NUMBER_OF_ROUNDS = 3;
  const gameConditions = 'What is the result of the expression?';
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

export default calcGameFunction;
