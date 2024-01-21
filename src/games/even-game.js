import {
  greetPlayer,
  getRandomNumber,
  getUserAnswer,
  gameСonditions,
} from '../index.js';

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
  gameСonditions();

  for (let i = 0; i < 3; i += 1) {
    const question = askQuestion();
    const userAnswer = getUserAnswer();

    if (checkAnswer(question, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${
        isEven(question) ? 'yes' : 'no'
      }'.
            Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}`);
}

export default startGame;
