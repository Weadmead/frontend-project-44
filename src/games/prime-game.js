import { greetPlayer, getRandomNumber, getUserAnswer } from '../index.js';

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
}

function askQuestion() {
  const question = getRandomNumber() * 7;
  console.log(`Question: ${question}`);
  return question;
}

function checkAnswer(question, userAnswer) {
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return userAnswer === correctAnswer;
}

function startGame() {
  const playerName = greetPlayer();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const question = askQuestion();
    const userAnswer = getUserAnswer();

    if (checkAnswer(question, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${
        isPrime(question) ? 'yes' : 'no'
      }'.
            Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}`);
}

export default startGame;
