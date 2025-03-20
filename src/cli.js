import readlineSync from 'readline-sync';

const welcome = console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
const greeting = console.log(`Hello ${name}!`);

export default () => { welcome, name, greeting }






