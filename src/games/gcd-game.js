import { greetPlayer, getRandomNumber, getUserAnswer } from '../index.js';

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
  return { question, answer };
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

  console.log(`Congratulations, ${playerName}`); // Уведомление о победе
}

export default startGame;
