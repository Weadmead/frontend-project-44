function calculateGCD(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return calculateGCD(num2, num1 % num2);
}

const gameConditions = 'Find the greatest common divisor of given numbers.';

function gcdGame(getRandomNumber, countOfRounds, askUserAnswer) {
  for (let i = 0; i < countOfRounds; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `${num1} ${num2}`;
    const correctAnswer = calculateGCD(num1, num2);
    console.log(`Question: ${question}`);
    const userAnswer = askUserAnswer();

    if (correctAnswer !== Number(userAnswer)) {
      return { isSuccess: false, userAnswer, correctAnswer };
    }
    console.log('Correct!');
  }

  return { isSuccess: true };
}

export { gcdGame, gameConditions };
