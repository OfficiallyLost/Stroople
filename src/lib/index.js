'use-strict';

class Mathematics {
	/**
    * @param {?Number} dp the decimal place to round 'number' to, this is optional.
    * @param {Number} number a number to round to the nearest whole number
    */
	round = (number, dp) => {
		let dp = dp;
		if (!dp) dp = 0;
		else dp = dp;
		if (typeof number !== 'number')
			throw TypeError(`Typeof number must be a type of 'number', not '${typeof number}'`);
		else return number.toFixed(dp);
	};
	/**
    * 
    * @param  {...Number} number a list of numbers seperates by ',' to add
    */
	add = (...number) => {
		if (typeof number !== 'number')
			throw TypeError(`Typeof number must be a type of 'number', not '${typeof number}'`);
		else return number.reduce((a, b) => a + b);
	};
	/**
    * 
    * @param  {...Number} number a list of numbers seperates by ',' to subtract
    */
	subtract = (...number) => {
		if (typeof number !== 'number')
			throw TypeError(`Typeof number must be a type of 'number', not '${typeof number}'`);
		else return number.reduce((a, b) => a - b);
	};
	/**
    * 
    * @param  {...Number} number a list of numbers seperates by ',' to divide
    */
	divide = (...number) => {
		if (typeof number !== 'number')
			throw TypeError(`Typeof number must be a type of 'number', not '${typeof number}'`);
		else return number.reduce((a, b) => a / b);
	};
	/**
    * 
    * @param  {...Number} number a list of numbers seperates by ',' to multiply
    */
	multiply = (...number) => {
		if (typeof number !== 'number')
			throw TypeError(`Typeof number must be a type of 'number', not '${typeof number}'`);
		else return number.reduce((a, b) => a * b);
	};
	/**
    * 
    * @param {String} string a random string to calculate
    */
	calc = (string) => {
		switch (true) {
			case string.includes('*'):
				return string.split('*').reduce((a, b) => a * b);
			case string.includes('-'):
				return string.split('-').reduce((a, b) => a - b);
			case string.includes('+'):
				return string.split('+').reduce((a, b) => a + b);
			case string.includes('/'):
				return string.split('/').reduce((a, b) => a / b);
			case string.toLowerCase() === 'pi':
				return Math.PI;
			case string.toLowerCase() === 'e':
				return Math.E;
			case string.toLowerCase() === 'LN10':
				return Math.LN10;
			case string.toLowerCase() === 'LN2':
				return Math.LN2;
			case string.toLowerCase() === 'LOG10E':
				return Math.LOG10E;
			case string.toLowerCase() === 'SQRT1_2':
				return Math.SQRT1_2;
			case string.toLowerCase() === 'SQRT2':
				return Math.SQRT2;
		}
	};
}

module.exports = Mathematics;
