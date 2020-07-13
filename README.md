Installation: `npm i strooplejs`
# What is Stroople?
Stroople is a maths library for JavaScript and TypeScript, it makes performing math commands a little bit easier for dynamic data!

# Examples
### Add, divide, multiply or subract numbers
```js

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
### Round numbers
```js

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

```
### Calculate numbers 
```js

const Stroople = require('strooplejs');
const math = new Stroople();

math.calc('1 + 1'); // Expected output: 2
math.calc('10 / 2'); // Expected output: 5
math.calc('PI'); // Expected output: 3.141592653589793
```