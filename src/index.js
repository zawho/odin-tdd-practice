function capitalize(string) {
	const firstLetter = string.charAt(0).toUpperCase();
	return firstLetter + string.slice(1);
}

export default capitalize;
