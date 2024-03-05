import { createGame, getRandomNumber } from '../utils.js';

function isEven(number) {
  return number % 2 === 0;
}
const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = createGame(() => {
  const question = getRandomNumber();
  return {
    question,
    correctAnswer: isEven(question) ? 'yes' : 'no',
  };
});

export { evenGame, gameConditions };
