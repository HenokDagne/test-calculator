function add(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function modulus(a, b) {
  if (b === 0) {
    throw new Error("Cannot calculate modulus with zero");
  }
  return a % b;
}

function average(...numbers) {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate average of zero numbers");
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return sum / numbers.length;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  average,
};