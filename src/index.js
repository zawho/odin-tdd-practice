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

export { capitalize, reverseString };
