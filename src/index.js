function capitalize(string) {
	const firstLetter = string.charAt(0).toUpperCase();
	return firstLetter + string.slice(1);
}

function reverseString(string) {
	const arr = [];
	let reverseArr;
	let reverseString = "";

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

export { capitalize, reverseString, calculator };
