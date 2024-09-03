function capitalize(string) {
	const firstLetter = string.charAt(0).toUpperCase();
	return firstLetter + string.slice(1);
}

function reverseString(string) {
	const arr = [];
	let reverseArr;
	let reverseString = '';

	for (let i = 0; i < string.length; i++) {
		arr.push(string[i]);
	}

	reverseArr = arr.reverse();

	reverseArr.forEach((letter) => {
		reverseString += letter;
	});

	return reverseString;
}

const calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
	multiply: function (a, b) {
		return a * b;
	},
	divide: function (a, b) {
		return a / b;
	},
};

function stringToArr(string, arr) {
	for (let i = 0; i < string.length; i++) {
		arr.push(string[i]);
	}
}

function checkUpperCase(string, shift) {
	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[i].toUpperCase()) {
			shift[i] = shift[i].toUpperCase();
		}
	}
}

function arrToString(arr) {
	let string = '';
	arr.forEach((item) => {
		string += item;
	});
	return string;
}

function shiftCipher(string, key) {
	const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const stringArr = [];
	const shiftedArr = [];
	let shiftedString = '';

	stringToArr(string, stringArr);

	stringArr.forEach((item) => {
		for (let i = 0; i < alphabetArr.length; i++) {
			if (item.toLowerCase() === alphabetArr[i]) {
				if (i + key > alphabetArr.length - 1) {
					shiftedArr.push(alphabetArr[(i + key) % alphabetArr.length]);
				} else {
					shiftedArr.push(alphabetArr[i + key]);
				}
			}
		}
		if (!alphabetArr.includes(item.toLowerCase())) {
			shiftedArr.push(item);
		}
	});

	checkUpperCase(stringArr, shiftedArr);

	return arrToString(shiftedArr);
}

function analyzeArr(arr) {
	return arr;
}

export { capitalize, reverseString, calculator, shiftCipher, analyzeArr };
