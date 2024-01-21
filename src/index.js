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
function gameСonditions() {
  return console.log(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );
}
export {
  greetPlayer, getRandomNumber, getUserAnswer, gameСonditions,
};
