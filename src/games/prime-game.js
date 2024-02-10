function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function primeGame(getRandomNumber, countOfRounds, askUserAnswer) {
  for (let i = 0; i < countOfRounds; i += 1) {
    const questionPrimeGame = getRandomNumber();
    console.log(`Question: ${questionPrimeGame}`);
    const userAnswer = askUserAnswer();
    const correctAnswer = isPrime(questionPrimeGame) ? 'yes' : 'no';
    if (correctAnswer !== userAnswer) {
      return { isSuccess: false, userAnswer, correctAnswer };
    }
    console.log('Correct!');
  }

  return { isSuccess: true };
}

export { primeGame, gameConditions };
