function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function playGame(checkCondition, randomNumber, countOfRounds, askUserAnswer) {
  for (let i = 0; i < countOfRounds; i += 1) {
    const question = randomNumber();
    console.log(`Question: ${question}`);
    const userAnswer = askUserAnswer();
    const correctAnswer = checkCondition(question) ? 'yes' : 'no';

    if (correctAnswer !== userAnswer) {
      return { isSuccess: false, userAnswer, correctAnswer };
    }
    console.log('Correct!');
  }

  return { isSuccess: true };
}

export { getRandomNumber, playGame };
