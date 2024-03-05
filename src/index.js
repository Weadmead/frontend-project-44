import readlineSync from 'readline-sync';
import { getRandomNumber } from './utils.js';

const COUNT_OF_ROUNDS = 3;

function greetUser() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

function playRounds(gameFunction) {
  for (let i = 0; i < COUNT_OF_ROUNDS; i += 1) {
    const { question, correctAnswer } = gameFunction();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer || correctAnswer === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
    }
  }
  return true;
}

function startGame(gameFunction, gameConditions) {
  const userName = greetUser();
  console.log(gameConditions);
  const gameResult = playRounds(() => gameFunction(getRandomNumber));
  if (gameResult) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

export default startGame;
