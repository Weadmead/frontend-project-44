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
  const { question, calcAnswer } = operations[operationIndex](num1, num2);

  console.log(`Question: ${question}`);
  return calcAnswer;
}

function checkAnswer(calcAnswer, userAnswer) {
  if (calcAnswer !== Number(userAnswer)) {
    return calcAnswer; // Возвращает правильный ответ, если пользователь ответил неверно
  }
  return null; // Возвращает null, если ответ верный
}

function gameСonditions() {
  return console.log('What is the result of the expression?');
}
function startEvenGame() {
  startGame(askQuestion, checkAnswer, gameСonditions);
}

export default startEvenGame;
