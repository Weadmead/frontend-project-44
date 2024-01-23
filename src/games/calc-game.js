import { getRandomNumber, startGame } from '../index.js';

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

function checkAnswer(correctAnswer, userAnswer) {
  if (correctAnswer !== Number(userAnswer)) {
    return correctAnswer;
  }
  return null;
}

function gameСonditions() {
  return console.log('What is the result of the expression?');
}

function startCalcGame() {
  startGame(askQuestion, checkAnswer, gameСonditions);
}

export default startCalcGame;
