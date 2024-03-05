export function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function createGame(questionGenerator) {
  return () => {
    const { question, correctAnswer } = questionGenerator();
    return { question, correctAnswer };
  };
}
