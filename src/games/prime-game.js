import { playGame } from '../utils.js';

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function primeGame(getRandomNumber, countOfRounds, askUserAnswer) {
  const result = playGame(
    isPrime,
    getRandomNumber,
    countOfRounds,
    askUserAnswer,
  );
  return result;
}

export { primeGame, gameConditions };
