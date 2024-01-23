import { startGame, getRandomNumber } from "../index.js";

export function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

export function askQuestion() {
  const question = getRandomNumber() * 7;
  console.log(`Question: ${question}`);
  const answer = question;
  return { question, answer };
}

export function checkAnswer(question, userAnswer) {
  const correctAnswer = isPrime(question) ? "yes" : "no";
  if (userAnswer !== correctAnswer) {
    return correctAnswer;
  }
  return null;
}
function gameСonditions() {
  return console.log(
    'Answer "yes" if the number is even, otherwise answer "no".'
  );
}

function startEvenGame() {
  startGame(askQuestion, checkAnswer, gameСonditions);
}

export default startEvenGame;
