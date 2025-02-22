const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (arr) {
	let total = 0;
	for (let num of arr) {
		total += num;
	}
	return total;
};

const multiply = function (arr) {
	let total = 1;
	for (let num of arr) {
		total *= num;
	}
	return total;
};

const power = function (num1, num2) {
	let total = num1;
	for (let i = 1; i < num2; i++) total *= num1;
	return total;
};

const factorial = function (num) {
	let total = 1;
	for (let i = 1; i <= num; i++) total *= i;
	return total;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
