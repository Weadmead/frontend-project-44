import startGame from "../index.js";
import getRandomNumber from "../utils.js";

function generateProggresion() {
  const firstNumber = getRandomNumber();
  const stepOfNumber = getRandomNumber();
  const maxProgressionLength = 10;
  const result = [];

  for (
    let i = firstNumber;
    result.length < maxProgressionLength;
    i += stepOfNumber
  ) {
    result.push(i);
  }
  return result;
}

const hiddenIndex = Math.floor(Math.random() * 10);

function askQuestion() {
  const progression = generateProggresion();
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = "..";
  console.log(`Question: ${progression.join(" ")}`);
  return { progression, answer };
}

function checkAnswer(correctAnswer, userAnswer) {
  if (correctAnswer !== Number(userAnswer)) {
    return correctAnswer;
  }
  return null;
}

function gameСonditions() {
  const gameCondition = "What number is missing in the progression?";
  return console.log(gameCondition);
}
function startProgGame() {
  startGame(askQuestion, checkAnswer, gameСonditions);
}

export default startProgGame;
