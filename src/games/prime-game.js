import readlineSync from 'readline-sync';
import { NUMBER_OF_ROUNDS } from '../utils.js';

export function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

export function askQuestion() {
  const question = Math.floor(Math.random() * 49) + 2;
  console.log(`Question: ${question}`);
  const answer = question;
  return { question, answer };
}

function primeGameFunction() {
  const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(gameConditions);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const { answer: correctAnswer } = askQuestion();
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = isPrime(correctAnswer) ? 'yes' : 'no';
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

export default primeGameFunction;
