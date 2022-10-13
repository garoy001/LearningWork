let printGreeting = (e) => {
	return `Hello There ${e}!`;
};

console.log(printGreeting('Slimer'));

let reverseWordOrder = (e) => {
	let newArray = [];
	e = e.split(' ');
	e.forEach((element) => newArray.unshift(element));
	let newString = newArray.join(' ');
	return newString;
};
console.log(reverseWordOrder('Ishmael me Call'));

let calculate = (num1, num2, operation) => {
	if (operation == 'add') {
		return num1 + num2;
	} else if (operation == 'sub') {
		return num1 - num2;
	} else if (operation == 'mult') {
		return num1 * num2;
	} else if (operation == 'div') {
		return num1 / num2;
	} else if (operation == 'exp') {
		return num1 ** num2;
	}
};
console.log(calculate(4, 3, 'sub'));
console.log(calculate(4, 3, 'exp'));

let printConsecutives = (e) => {
	let y = 0;
	let holderArray = [e[0]];
	let tokenCounter = 1;
	for (let i = 1; i < e.length; i++) {
		if (tokenCounter == 3) {
			console.log(holderArray);
			holderArray = [holderArray[1]];
			tokenCounter = 1;
			i--;
		} else if (e[i] - holderArray[y] == 1) {
			holderArray.push(e[i]);
			tokenCounter++;
			y++;
		} else {
			holderArray = [e[i]];
			tokenCounter = 1;
		}
	}
};
printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

let letterReverse = (e) => {
	let newArray = [];
	e = e.split(' ');
	e.forEach((element) => {
		let newElement = element.split('');

		let newWord = [];
		newElement.forEach((x) => newWord.unshift(x));
		let y = newWord.join('');
		newArray.push(y);
	});
	let newString = newArray.join(' ');
	return newString;
};
console.log(letterReverse('Luke I am your father'));
