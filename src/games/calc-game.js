const operations = [
  (num1, num2) => ({ question: `${num1} + ${num2}`, answer: num1 + num2 }),
  (num1, num2) => ({ question: `${num1} - ${num2}`, answer: num1 - num2 }),
  (num1, num2) => ({ question: `${num1} * ${num2}`, answer: num1 * num2 }),
];

const gameConditions = 'What is the result of the expression?';

function calcGame(getRandomNumber, countOfRounds, askUserAnswer) {
  for (let i = 0; i < countOfRounds; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operationIndex = Math.floor(Math.random() * operations.length);
    const { question, answer: correctAnswer } = operations[operationIndex](
      num1,
      num2,
    );
    console.log(`Question: ${question}`);
    const userAnswer = askUserAnswer();
    if (correctAnswer !== Number(userAnswer)) {
      return { isSuccess: false, userAnswer, correctAnswer };
    }
    console.log('Correct!');
  }

  return { isSuccess: true };
}

export { gameConditions, calcGame };
