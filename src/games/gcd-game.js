function calculateGCD(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return calculateGCD(num2, num1 % num2);
}

const gameConditions = 'Find the greatest common divisor of given numbers.';

function gcdGame(getRandomNumber) {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGCD(num1, num2);

  return { question, correctAnswer };
}

export { gcdGame, gameConditions };
