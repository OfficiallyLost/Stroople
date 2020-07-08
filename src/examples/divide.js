// Divide numbers

const Stroople = require('strooplejs');
const math = new Stroople();

math.divide(1, 5); // Expected output: 0.2
math.divide(1, 2, 3, 4); // Expected output: 0.041666666666666664 HINT: You can use .toFixed to not send a long list of numbers!

// Have an array of strings which contain numbers? No problem!

const numbers = [ '1', '2', '3', '4' ];
const THE_NUMBERxD = numbers.map(Number); // Expected output: [ 1, 2, 3, 4, 5 ];
math.divide(THE_NUMBERxD); // Expected output: 0.041666666666666664
