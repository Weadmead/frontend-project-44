import readlineSync from 'readline-sync';
import { getRandomNumber } from './utils.js';

const COUNT_OF_ROUNDS = 3;

function startGame(gameFunction, gameConditions) {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameConditions);
  const askUserAnswer = () => readlineSync.question('Your answer: ');
  const { isSuccess, correctAnswer, userAnswer } = gameFunction(
    getRandomNumber,
    COUNT_OF_ROUNDS,
    askUserAnswer,
  );
  let message = '';
  if (isSuccess) {
    message += `Congratulations, ${userName}!`;
  } else {
    message += `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return console.log(message);
}

export default startGame;
