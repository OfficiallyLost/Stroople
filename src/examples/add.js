// Add numbers together

const Stroople = require('../lib/index');
const math = new Stroople();

math.add(1, 5); // Expected output: 6
math.add(1, 2, 3, 4); // Expected output: 12

// Have an array of strings which contain numbers? No problem!

const numbers = [ '1', '2', '3', '4' ];
const THE_NUMBERxD = numbers.map(Number); // Expected output: [ 1, 2, 3, 4, 5 ];
math.add(THE_NUMBERxD); // Expected output: 15
