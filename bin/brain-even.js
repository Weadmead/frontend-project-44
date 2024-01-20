// Оптимизированный код

import readlineSync from 'readline-sync';

function greetPlayer() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
}

function isEven(number) {
  return number % 2 === 0;
}

function askQuestion() {
  const question = Math.floor(Math.random() * 1000) + 1;
  console.log(`Question: ${question}`);
  return question;
}

function getUserAnswer() {
  return readlineSync.question('Your answer: ');
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
      console.log(`Let's try again, ${playerName}`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}`);
}

startGame();

// Мой вариант решения

// import readlineSync from "readline-sync";

// function getRandomNumber(max = 1000) {
//   return Math.floor(Math.random() * max) + 1;
// }

// function startGame() {
//   console.log("Welcome to the Brain Games!");

//   const name = readlineSync.question("May I have your name?: ");
//   console.log(`Hello, ${name}!`);

//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 0; i < 3; i += 1) {
//     const question = getRandomNumber();

//     console.log(`Question: ${question}`);

//     const userAnswer = readlineSync.question("Your answer: ");
//     const correctAnswer =
//       (question % 2 === 0 && userAnswer === "yes") ||
//       (question % 2 !== 0 && userAnswer === "no");

//     if (correctAnswer) {
//       console.log("Correct!");
//     } else {
//       console.log(`Let's try again, ${name}`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${name}`);
// }

// startGame();
