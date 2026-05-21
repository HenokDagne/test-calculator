const { add, subtract, multiply, divide, modulus, addNegativeNumber, multiplyNegativeNumber, divideNegativeNumbers } = require("../src/calculator");

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(7, 2)).toBe(5);
  });

  test("multiplies two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("throws when adding two negative numbers", () => {
    expect(() => addNegativeNumber(-2, -3)).toThrow("Cannot add two negative numbers");
  });

  test("multiplies two negative numbers", () => {
    expect(multiplyNegativeNumber(-2, -3)).toBe(6);
  });

  test("divides two negative numbers", () => {
    expect(divideNegativeNumbers(-10, -2)).toBe(5);
  });

  test("calculates modulus of two numbers", () => {
    expect(modulus(10, 3)).toBe(1);
  });
});