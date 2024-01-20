import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name?: ');

  return `Hello, ${name}`;
};
export default userName;
