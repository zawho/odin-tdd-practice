import {
	capitalize,
	reverseString,
	calculator,
	shiftCipher,
	analyzeArr,
} from '../index.js';

test('capitalizes "hello" as "Hello"', () => {
	expect(capitalize('hello')).toBe('Hello');
});

test('Reverse "flow" to "wolf"', () => {
	expect(reverseString('flow')).toBe('wolf');
});

test('Add 3 + 4 to equal 7', () => {
	expect(calculator.add(3, 4)).toBe(7);
});

test('Subtract 6 from 11 to equal 5', () => {
	expect(calculator.subtract(11, 6)).toBe(5);
});

test('Multiply 9 by 5 to equal 45', () => {
	expect(calculator.multiply(9, 5)).toBe(45);
});

test('Divide 24 by 6 to equal 4', () => {
	expect(calculator.divide(24, 6)).toBe(4);
});

test('Encrypt "hello" as "ifmmp" with a key of 1', () => {
	expect(shiftCipher('hello', 1)).toBe('ifmmp');
});

test('Encrypt "xyz" as "abc" with a key of 3', () => {
	expect(shiftCipher('xyz', 3)).toBe('abc');
});

test('Encrypt "Hello, world!" as "Gdkkn, vnqkc!" with a key of 25', () => {
	expect(shiftCipher('Hello, world!', 25)).toBe('Gdkkn, vnqkc!');
});

test('Find the average, min, max, and length of given array [1,8,3,4,2,6]', () => {
	expect(analyzeArr([1, 8, 3, 4, 2, 6])).toBe({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
