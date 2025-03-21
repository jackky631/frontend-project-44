import { getRandomInt } from '../../getrandom.js';
import { pattern } from '../../index.js';


const descriptionTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getExpressionAndAnswer = () => {
	const expression = getRandomInt(0, 100);
	const currentAnswer = isEven(expression) ? 'yes' : 'no';
	return [expression, currentAnswer];
}
export default () => {
	pattern(descriptionTask, getExpressionAndAnswer);
}