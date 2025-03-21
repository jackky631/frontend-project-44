import { getRandomInt } from '../../getrandom.js';
import { pattern } from '../../index.js';


const descriptionTask = 'What number is missing in the progression?';

const getExpressionAndAnswer = () => {
	const randomInt = getRandomInt(0, 100);
	let step = 0;
	if (randomInt % 2 === 0) {
		step = 3;
	} else if (randomInt % 2 !== 0) {
		step = 2;
	}
	const getArray = (start, step) => {
		const count = getRandomInt(10, 20);
		const array = [];
		const end = start + count;
		for (let i = start; i <= end; i += step) {
			array.push(i);
		}
		return array;
	}
	let arr = getArray(randomInt, step);
	const randomIndex = getRandomInt(0, arr.length);
	const rem = arr.splice(randomIndex, 1, "...");
	const expression = arr;
	const currentAnswer = rem;
	return [expression, String(currentAnswer)];
}

export default () => {
	pattern(descriptionTask, getExpressionAndAnswer);
}