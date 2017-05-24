var add1 = require('./calc1.js');
var add2 = require('./calc2.js').add;
var substract2 = require('./calc2.js').substract;
var multiply2 = require('./calc2.js').multiply;
var divide2 = require('./calc2.js').divide;
var calc3 = require('./calc3.js');

console.log(add1(2, 2));

console.log(add2(1, 2));
console.log(substract2(9, 4));
console.log(multiply2(3, 4));
console.log(divide2(30, 3));

console.log(calc3.add(3, 2));
console.log(calc3.substract(10, 4));
console.log(calc3.multiply(4, 4));
console.log(calc3.divide(33, 3));
