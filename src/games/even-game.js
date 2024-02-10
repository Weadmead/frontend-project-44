import { playGame } from '../utils.js';

function isEven(number) {
  return number % 2 === 0;
}
const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';

function evenGame(getRandomNumber, countOfRounds, askUserAnswer) {
  const result = playGame(
    isEven,
    getRandomNumber,
    countOfRounds,
    askUserAnswer,
  );
  return result;
}

export { evenGame, gameConditions };
