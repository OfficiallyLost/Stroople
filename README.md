Installation: `npm i strooplejs`
# What is Stroople?
Stroople is a maths library for JavaScript and TypeScript, it makes performing math commands a little bit easier for dynamic data!

# Examples
```js
// Add numbers together

const Stroople = require('stroopijs');
const math = new Stroople();

math.add(1, 5); // Expected output: 6
math.add(1, 2, 3, 4); // Expected output: 12

// Have an array of strings which contain numbers? No problem!

const numbers = [ '1', '2', '3', '4' ];
const THE_NUMBERxD = numbers.map(Number); // Expected output: [ 1, 2, 3, 4, 5 ];
math.add(THE_NUMBERxD); // Expected output: 15

// Note: To subract, multiply or divide, replace 'math.add' with 'math.<subtract | multiply | divide>'
// This library is still in development, more things coming soon!
```
```js
// Round numbers to the nearest whole number

const Stroople = require('stroopijs');
const math = new Stroople();

math.round(1.31245321) // Expected output: 1.3
```