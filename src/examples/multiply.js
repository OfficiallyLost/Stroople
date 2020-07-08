// Multiply numbers together

const Stroople = require('strooplejs');
const math = new Stroople();

math.multiply(1, 5); // Expected output: 5
math.multiply(1, 2, 3, 4); // Expected output: 24

// Have an array of strings which contain numbers? No problem!

const numbers = [ '1', '2', '3', '4' ];
const THE_NUMBERxD = numbers.map(Number); // Expected output: [ 1, 2, 3, 4, 5 ];
math.multiply(THE_NUMBERxD); // Expected output: 24
