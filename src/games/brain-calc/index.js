import { pattern } from '../../index.js';
import { getRandomInt } from '../../getrandom.js';

const descriptionTask = 'What is the result of the expression?';
const isCalc = (symbol, intOne, intTwo) => {
	let result = 0;
	if (symbol === '+') {
		result = intOne + intTwo;
	} else if (symbol === '-') {
		result = intOne - intTwo;
	} else if (symbol === '*') {
		result = intOne * intTwo;
	}
	return result;
}
const getQuestionionAndAnswer = () => {
	const randomIntOne = getRandomInt(0, 100);
	const randomIntTwo = getRandomInt(0, 100);
	const arrSymbols = ['+', '-', '*'];
	const randomIndex = getRandomInt(0, arrSymbols.length);
	const randomSymbol = arrSymbols[randomIndex];
	const question = `${randomIntOne} ${randomSymbol} ${randomIntTwo}`;
	const currentAnswer = isCalc(randomSymbol, randomIntOne, randomIntTwo);
	return [question, String(currentAnswer)];
}

export default () => {
	pattern(descriptionTask, getQuestionionAndAnswer);
}