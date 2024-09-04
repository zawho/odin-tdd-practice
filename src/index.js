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

function merge(arr1, arr2) {
	const arr3 = [];
	let i = 0;
	let j = 0;
	let k = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			arr3[k] = arr1[i];
			i++;
		} else {
			arr3[k] = arr2[j];
			j++;
		}
		k++;
	}
	while (i < arr1.length) {
		arr3[k] = arr1[i];
		i++;
		k++;
	}
	while (j < arr2.length) {
		arr3[k] = arr2[j];
		j++;
		k++;
	}
	return arr3;
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const split = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, split));
	const right = mergeSort(arr.slice(split));
	return merge(left, right);
}

function analyzeArr(arr) {
	const sortedArr = mergeSort(arr);
	const obj = {
		average: arr[Math.floor(arr.length / 2)],
		min: sortedArr[0],
		max: sortedArr[sortedArr.length - 1],
		length: arr.length,
	};
	return obj;
}

export { capitalize, reverseString, calculator, shiftCipher, analyzeArr };
