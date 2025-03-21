import { getRandomInt } from '../../getrandom.js';
import { pattern } from '../../index.js';


const descriptionTask = 'What number is missing in the progression?';

const getProgressionArray = (start, step) => {
	let count = 0;
	if (step === 3) {
		count = getRandomInt(15, 30);
	} else if (step === 2) {
		count = getRandomInt(10, 20);
	}
	const array = [];
	const end = start + count;
	for (let i = start; i <= end; i += step) {
		array.push(i);
	}
	return array;
}

const getQuestionionAndAnswer = () => {
	const randomInt = getRandomInt(0, 100);
	let step = 0;
	if (randomInt % 2 === 0) {
		step = 3;
	} else if (randomInt % 2 !== 0) {
		step = 2;
	}
	let arr = getProgressionArray(randomInt, step);
	const randomIndex = getRandomInt(0, arr.length);
	const rem = arr.splice(randomIndex, 1, "..");
	const question = arr.join(' ');
	const currentAnswer = rem;
	return [question, String(currentAnswer)];
}

export default () => {
	pattern(descriptionTask, getQuestionionAndAnswer);
}