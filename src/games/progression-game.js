import { greetPlayer, getRandomNumber, getUserAnswer } from '../index.js';

function askQuestion() {
  const firstNumber = getRandomNumber();
  const stepOfNumber = getRandomNumber();
  const result = [];

  for (let i = firstNumber; result.length < 10; i += stepOfNumber) {
    result.push(i);
  }

  const randomIndex = Math.floor(Math.random() * 10);
  const correctAnswer = result[randomIndex];
  result[randomIndex] = '..';

  return { correctAnswer, result };
}

function checkAnswer(correctAnswer, userAnswer) {
  return correctAnswer === Number(userAnswer);
}

function startGame() {
  const playerName = greetPlayer();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const { correctAnswer, result } = askQuestion();
    console.log(`Question: ${result.join(' ')}`);
    const userAnswer = getUserAnswer();

    if (checkAnswer(correctAnswer, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
              Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}`);
}

export default startGame;
