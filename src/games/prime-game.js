import { startGame, getRandomNumber } from '../index.js';

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
  return question;
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
    'Answer \'yes\' if given number is prime. Otherwise answer \'no\'',
  );
}
export function print(userAnswer, correctAnswer, playerName) {
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
  Let's try again, ${playerName}`);
}
function startEvenGame() {
  startGame(askQuestion, checkAnswer, gameСonditions, print);
}

export default startEvenGame;
