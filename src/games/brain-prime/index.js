import { getRandomInt } from '../../getrandom.js';
import { pattern } from '../../index.js';


const descriptionTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
	for (let i = 2; i < number; i++) {
		if (number % i === 0) return false;
	}
	return number !== 1;
}
const getExpressionAndAnswer = () => {
	const expression = getRandomInt(0, 100);
	const currentAnswer = isPrime(expression) ? 'yes' : 'no';
	return [expression, currentAnswer];
}

export default () => {
	pattern(descriptionTask, getExpressionAndAnswer);
}