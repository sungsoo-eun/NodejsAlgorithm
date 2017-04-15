var add1 = require('./calc1.js');
var add2 = require('./calc2.js').add;
var substract = require('./calc2.js').substract;
var multiply = require('./calc2.js').multiply;
var divide = require('./calc2.js').divide;

console.log(add1(2, 2));
console.log(add2(1, 2));
console.log(substract(9, 4));
console.log(multiply(3, 4));
console.log(divide(30, 3));
