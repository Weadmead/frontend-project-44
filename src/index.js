import readlineSync from 'readline-sync';
import getRandomNumber from './utils.js';

const COUNT_OF_ROUNDS = 3;

function startGame(gameFunction, gameConditions) {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(gameConditions);
  let isCorrect = true;
  let message = '';
  for (let i = 0; i < COUNT_OF_ROUNDS; i += 1) {
    const { question, correctAnswer } = gameFunction(getRandomNumber);
    console.log(`Question: ${question}`);
    const askUserAnswer = () => readlineSync.question('Your answer: ');
    const userAnswer = askUserAnswer();
    if (correctAnswer === userAnswer || correctAnswer === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      isCorrect = false;
      break;
    }
  }
  if (isCorrect) {
    message += `Congratulations, ${userName}!`;
  } else {
    message += `Let's try again, ${userName}!`;
  }

  return console.log(message);
}

export default startGame;
