import { startGame } from '../index.js';

export function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

export function askQuestion() {
  const question = Math.floor(Math.random() * 49) + 2;
  console.log(`Question: ${question}`);
  const answer = question;
  return { question, answer };
}

export function checkAnswer(question, userAnswer) {
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  if (userAnswer !== correctAnswer) {
    return correctAnswer;
  }
  return null;
}
function gameСonditions() {
  return console.log(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );
}

function startEvenGame() {
  startGame(askQuestion, checkAnswer, gameСonditions);
}

export default startEvenGame;
