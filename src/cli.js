import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name?: ');

function getUserAnswer() {
  return readlineSync.question('Your answer: ');
}

export { askName, getUserAnswer };
