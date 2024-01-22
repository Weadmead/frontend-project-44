import { getRandomNumber, startGame } from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

function askQuestion() {
  const question = getRandomNumber();
  console.log(`Question: ${question}`);
  return question;
}

function checkAnswer(question, userAnswer) {
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  if (userAnswer !== correctAnswer) {
    return correctAnswer;
  }
  return null;
}
function gameСonditions() {
  return console.log(
    'Answer \'yes\' if given number is even. Otherwise answer \'no\'.',
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
