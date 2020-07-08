// Subtract numbers together

const Stroople = require('strooplejs');
const math = new Stroople();

math.subtract(1, 5); // Expected output: -4
math.subtract(1, 2, 3, 4); // Expected output: -13

// Have an array of strings which contain numbers? No problem!

const numbers = [ '1', '2', '3', '4' ];
const THE_NUMBERxD = numbers.map(Number); // Expected output: [ 1, 2, 3, 4, 5 ];
math.subtract(THE_NUMBERxD); // Expected output: -13
