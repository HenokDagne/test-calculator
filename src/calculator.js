function add(a, b) {
  return a + b;
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

function addNegativeNumber(a, b) {
  if (a < 0 && b < 0) {
    throw new Error("Cannot add two negative numbers");
  }
  return a + b;
}

function multiplyNegativeNumber(a, b) {
  return (Math.abs(a) * Math.abs(b));
}

function divideNegativeNumbers(a, b) {
  // If both numbers are negative, return the positive quotient
  if (a < 0 && b < 0) {
    return Math.abs(a) / Math.abs(b);
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
console.log(a, b)
  return a / b;
}


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  addNegativeNumber,
  multiplyNegativeNumber,
  divideNegativeNumbers
};