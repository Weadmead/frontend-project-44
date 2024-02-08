import startGame from '../index.js';
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

function checkAnswer(correctAnswer, userAnswer) {
  if (correctAnswer !== Number(userAnswer)) {
    return correctAnswer;
  }
  return null;
}
function gameСonditions() {
  return console.log('Find the greatest common divisor of given numbers.');
}
function startGcdGame() {
  startGame(askQuestion, checkAnswer, gameСonditions);
}

export default startGcdGame;
