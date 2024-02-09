import readlineSync from 'readline-sync';

function startGame(gameFunction) {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  const isWinner = gameFunction();

  let message = '';
  if (isWinner) {
    message += `Congratulations, ${userName}!`;
  } else {
    message += `Let's try again, ${userName}!`;
  }
  return console.log(message);
}
export default startGame;
