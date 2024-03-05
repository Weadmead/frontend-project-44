import { createGame, getRandomNumber } from '../utils.js';

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = createGame(() => {
  const question = getRandomNumber();
  return {
    question,
    correctAnswer: isPrime(question) ? 'yes' : 'no',
  };
});

export { primeGame, gameConditions };
