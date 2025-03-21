import { pattern } from '../../index.js';
import { getRandomInt } from '../../getrandom.js';

const descriptionTask = 'What is the result of the expression?';


const getExpressionAndAnswer = () => {
	const randomIntOne = getRandomInt(0, 100);
	const randomIntTwo = getRandomInt(0, 100);
	const arrSymbols = ['+', '-', '*'];
	const randomIndex = Math.floor(Math.random() * arrSymbols.length);
	const randomSymbol = arrSymbols[randomIndex];
	const expression = `${randomIntOne} ${randomSymbol} ${randomIntTwo}`;
	let currentAnswer = 0;
	if (randomSymbol === '+') {
		currentAnswer = randomIntOne + randomIntTwo;
	} else if (randomSymbol === '-') {
		currentAnswer = randomIntOne - randomIntTwo;
	} else if (randomSymbol === '*') {
		currentAnswer = randomIntOne * randomIntTwo;
	}
	return [expression, String(currentAnswer)];
}

export default () => {
	pattern(descriptionTask, getExpressionAndAnswer);
}