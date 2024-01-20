import { greetPlayer, getRandomNumber, getUserAnswer } from '../index.js';

function isEven(number) {
  return number % 2 === 0;
}

function askQuestion() {
  const question = getRandomNumber();
  console.log(`Question: ${question}`);
  return question;
}

function checkAnswer(question, userAnswer) {
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return userAnswer === correctAnswer;
}

function startGame() {
  const playerName = greetPlayer();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = askQuestion();
    const userAnswer = getUserAnswer();

    if (checkAnswer(question, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
          Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}`);
}

export default startGame;
