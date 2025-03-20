import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
	const random = Math.floor(Math.random() * (max - min) + min);
	return random;
}

const name = 'alex'
const parityCheck = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	for (let i = 0; i < 3;) {
		const random = getRandomInt(0, 100); // Поиск рандомного числа
		console.log(`Question: ${random}`);
		const answer = readlineSync.question('Your answer: '); //Ввод пользователем ответа
		let correctAnswer = ''; // Переменная корректного числа/проверка на четность
		if (random % 2 === 0) {
			correctAnswer = 'yes';
		} else if (random % 2 !== 0) {
			correctAnswer = 'no';
		}
		if (answer === correctAnswer || answer === correctAnswer) { // Результат проверки ввода пользователя и корректного числа
			console.log('Correct!');
			i = i + 1;
		} else { return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}`); }
	}
	return console.log(`Congratulations, ${name}!`);
}

export { parityCheck }