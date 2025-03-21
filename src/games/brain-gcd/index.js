import { getRandomInt } from '../../getrandom.js';
import { pattern } from '../../index.js';

const descriptionTask = 'Find the greatest common divisor of given numbers.';
const getGCD = (x, y) => {
	if (y > x) {
		while (y !== 0) {
			let temp = y;
			y = x % y;
			x = temp;
		}
		return x;
	} else if (y < x) {
		while (x !== 0) {
			let temp = x;
			x = y % x;
			y = temp;
		}
		return y;
	}
}
const getQuestionionAndAnswer = () => {
	const randomIntOne = getRandomInt(0, 100);
	const randomIntTwo = getRandomInt(0, 100);
	const question = `${randomIntOne} ${randomIntTwo}`;
	const currentAnswer = getGCD(randomIntOne, randomIntTwo);
	return [question, String(currentAnswer)];
}

export default () => {
	pattern(descriptionTask, getQuestionionAndAnswer);
}
