import readlineSync from "readline-sync";

function greetPlayer() {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${userName}!`);
  return userName;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function getUserAnswer() {
  const userAnswer = readlineSync.question("Your answer: ");
  return userAnswer;
}

function startGame(askQuestion, checkAnswer, gameСonditions) {
  const playerName = greetPlayer();
  gameСonditions();
  for (let i = 0; i < 3; i += 1) {
    const { answer: correctAnswer } = askQuestion();

    const userAnswer = getUserAnswer();
    const result = checkAnswer(correctAnswer, userAnswer);

    if (result !== null) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${playerName}!`
      );
      return;
    }
    console.log("Correct!");
  }

  console.log(`Congratulations, ${playerName}!`);
}

export { getRandomNumber, startGame, greetPlayer, getUserAnswer };
