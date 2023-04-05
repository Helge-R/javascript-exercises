const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, num) => {
    return total += num;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => {
    return total *= num;
  }, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0) return 1;
  //if (num === 1) return 1;
  let factorial = 1;
  for (let i = 1; i < num + 1; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
