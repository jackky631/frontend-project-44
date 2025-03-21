import getRandomInt from '../../getrandom.js';
import pattern from '../../index.js';

const descriptionTask = 'Find the greatest common divisor of given numbers.';
const getGCD = (firstInt, secondInt) => {
  let result = 0;
  let x = firstInt;
  let y = secondInt;
  if (y > x) {
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    result = x;
  }
  if (y < x) {
    while (x !== 0) {
      const temp = x;
      x = y % x;
      y = temp;
    }
    result = y;
  }
  return result;
};
const getQuestionionAndAnswer = () => {
  const randomIntOne = getRandomInt(0, 100);
  const randomIntTwo = getRandomInt(0, 100);
  const question = `${randomIntOne} ${randomIntTwo}`;
  const currentAnswer = getGCD(randomIntOne, randomIntTwo);
  return [question, String(currentAnswer)];
};

export default () => {
  pattern(descriptionTask, getQuestionionAndAnswer);
};
