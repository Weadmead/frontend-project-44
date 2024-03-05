const operations = [
  (num1, num2) => ({ question: `${num1} + ${num2}`, answer: num1 + num2 }),
  (num1, num2) => ({ question: `${num1} - ${num2}`, answer: num1 - num2 }),
  (num1, num2) => ({ question: `${num1} * ${num2}`, answer: num1 * num2 }),
];

const gameConditions = 'What is the result of the expression?';

function calcGame(getRandomNumber) {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operationIndex = Math.floor(Math.random() * operations.length);
  const { question, answer: correctAnswer } = operations[operationIndex](
    num1,
    num2,
  );

  return { question, correctAnswer };
}

export { gameConditions, calcGame };
