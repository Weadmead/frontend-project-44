import { startGame, getRandomNumber } from "../index.js";

function askQuestion() {
  const firstNumber = getRandomNumber();
  const stepOfNumber = getRandomNumber();
  const result = [];

  for (let i = firstNumber; result.length < 10; i += stepOfNumber) {
    result.push(i);
  }

  const randomIndex = Math.floor(Math.random() * 10);
  const answer = result[randomIndex];
  result[randomIndex] = "..";
  console.log(`Question: ${result}`);
  return { result, answer };
}

function checkAnswer(correctAnswer, userAnswer) {
  if (correctAnswer !== Number(userAnswer)) {
    return correctAnswer;
  }
  return null;
}

function gameСonditions() {
  return console.log("What number is missing in the progression?");
}
function startProgGame() {
  startGame(askQuestion, checkAnswer, gameСonditions);
}

export default startProgGame;
