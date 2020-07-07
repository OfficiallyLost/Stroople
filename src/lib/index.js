'use-strict';

class Mathematics {
	round = (number) => {
		if (typeof number !== 'number')
			throw TypeError(`Typeof number must be a type of 'number', not '${typeof number}'`);
		else return Math.round(number);
	};

	add = (...number) => {
		return number.reduce((a, b) => a + b);
	};

	subtract = (...number) => {
		return number.reduce((a, b) => a - b);
	};

	divide = (...number) => {
		return number.reduce((a, b) => a / b);
	};

	multiply = (...number) => {
		return number.reduce((a, b) => a * b);
	};
}

module.exports = Mathematics;
