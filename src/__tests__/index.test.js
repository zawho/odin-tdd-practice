import { capitalize, reverseString } from "../index.js";

test('capitalizes "hello" as "Hello"', () => {
	expect(capitalize("hello")).toBe("Hello");
});

test('Reverse "flow" to "wolf"', () => {
	expect(reverseString("flow")).toBe("wolf");
});
