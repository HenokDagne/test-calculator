const { add, subtract, multiply, divide, modulus, average } = require("../src/calculator");

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

  test("calculates modulus of two numbers", () => {
    expect(modulus(10, 3)).toBe(1);
  });

  test("calculates average of multiple numbers", () => {
    expect(average(2, 4, 6)).toBe(4);
  });
});