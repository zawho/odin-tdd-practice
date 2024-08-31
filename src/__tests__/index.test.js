import capitalize from "../index.js";

test("capitalizes 'hello' as 'Hello'", () => {
  expect(capitalize("hello")).toBe("Hello");
});
