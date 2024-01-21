import { greetPlayer, getRandomNumber, getUserAnswer } from '../index.js';

const operations = [
  (num1, num2) => ({ question: `${num1} + ${num2}`, answer: num1 + num2 }),
  (num1, num2) => ({ question: `${num1} - ${num2}`, answer: num1 - num2 }),
  (num1, num2) => ({ question: `${num1} * ${num2}`, answer: num1 * num2 }),
];

function askQuestion() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operationIndex = Math.floor(Math.random() * operations.length);
  return operations[operationIndex](num1, num2);
}

function checkAnswer(correctAnswer, userAnswer) {
  return correctAnswer === Number(userAnswer);
}

function startGame() {
  const playerName = greetPlayer();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = askQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (checkAnswer(answer, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.
            Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}`);
}

export default startGame;