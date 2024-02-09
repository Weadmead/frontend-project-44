import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

function isEven(number) {
  return number % 2 === 0;
}

function askQuestion() {
  const question = getRandomNumber();
  console.log(`Question: ${question}`);
  const answer = question;
  return { question, answer };
}

function evenGameFunction() {
  const NUMBER_OF_ROUNDS = 3;
  const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(gameConditions);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const { answer: correctAnswer } = askQuestion();
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = isEven(correctAnswer) ? 'yes' : 'no';
    if (isCorrectAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${isCorrectAnswer}'.`,
      );
      return false;
    }
    console.log('Correct!');
  }

  return true;
}

export default evenGameFunction;
