// Round numbers to the nearest whole number

const Stroople = require('strooplejs');
const math = new Stroople();

math.round(1.5); // Expected output: 2
math.round(1.2); // Expected output: 1

// Want to round numbers to a different Decimal Place?
// NOTE: THIS IS OPTIONAL AS THE DEFAULT IS TO THE WHOLE NUMBER

const Stroople = require('strooplejs');
const math = new Stroople();

math.round(1.5222, 1); // Expected output: 1.5
math.round(333.3333, 2); // Expected output: 333.33
