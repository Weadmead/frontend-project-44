// import { playGame } from '../utils.js';

function isEven(number) {
  return number % 2 === 0;
}
const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';

function evenGame(getRandomNumber) {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
}

export { evenGame, gameConditions };
