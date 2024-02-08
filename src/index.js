import readlineSync from 'readline-sync';

function startGame(askQuestion, checkAnswer, gameСonditions) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  gameСonditions();
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { answer: correctAnswer } = askQuestion();

    const userAnswer = readlineSync.question('Your answer: ');
    const result = checkAnswer(correctAnswer, userAnswer);

    if (result !== null) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'. \n Let's try again, ${userName}!`,
      );
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}

export default startGame;
