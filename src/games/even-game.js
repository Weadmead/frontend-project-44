function isEven(number) {
  return number % 2 === 0;
}
const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';

function evenGame(getRandomNumber, countOfRounds, askUserAnswer) {
  for (let i = 0; i < countOfRounds; i += 1) {
    const questionEvenGame = getRandomNumber();
    console.log(`Question: ${questionEvenGame}`);
    const userAnswer = askUserAnswer();
    const correctAnswer = isEven(questionEvenGame) ? 'yes' : 'no';
    if (correctAnswer !== userAnswer) {
      return { isSuccess: false, userAnswer, correctAnswer };
    }
    console.log('Correct!');
  }

  return { isSuccess: true };
}

export { evenGame, gameConditions };
