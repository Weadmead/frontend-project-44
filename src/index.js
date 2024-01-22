import readlineSync from 'readline-sync';

function greetPlayer() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
function getUserAnswer() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

function startGame(askQuestion, checkAnswer, gameСonditions, print) {
  const playerName = greetPlayer();
  gameСonditions();
  for (let i = 0; i < 3; i += 1) {
    const question = askQuestion();
    const userAnswer = getUserAnswer();
    const correctAnswer = checkAnswer(question, userAnswer);

    if (correctAnswer !== null) {
      print(userAnswer, correctAnswer, playerName);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}`);
}

export {
  getRandomNumber, startGame, greetPlayer, getUserAnswer,
};
