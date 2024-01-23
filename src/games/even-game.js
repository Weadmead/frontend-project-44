import { getRandomNumber, startGame } from "../index.js";

function isEven(number) {
  return number % 2 === 0;
}

function askQuestion() {
  const question = getRandomNumber();
  console.log(`Question: ${question}`);
  const answer = question;
  return { question, answer };
}

function checkAnswer(answer, userAnswer) {
  const correctAnswer = isEven(answer) ? "yes" : "no";
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
