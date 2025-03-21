import getRandomInt from '../../getrandom.js';
import pattern from '../../index.js';

const descriptionTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getQuestionionAndAnswer = () => {
  const question = getRandomInt(0, 100);
  const currentAnswer = isEven(question) ? 'yes' : 'no';
  return [question, currentAnswer];
};
export default () => {
  pattern(descriptionTask, getQuestionionAndAnswer);
};
