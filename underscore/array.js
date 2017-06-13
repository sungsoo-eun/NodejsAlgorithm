var _ = require('underscore');

console.log('------first');
var result = _.first([5,4,3,2,1]);
console.log(result);

console.log('------initial');
var result = _.initial([5,4,3,2,1]);
console.log(result);

console.log('------last');
var result = _.last([5,4,3,2,1]);
console.log(result);

console.log('------rest');
var result = _.rest([5,4,3,2,1]);
console.log(result);

console.log('------compact');
var result = _.compact([0,4,false,2,'',null]);
console.log(result);

console.log('------flatten');
var result = _.flatten([1, [2], [3], [[4]]]);
console.log(result);

console.log('------without');
var result = _.without([1,2,1,0,3,4,2], 0,2);
console.log(result);

console.log('------union');
var result = _.union([1,2,3], [101,2,1,11], [2,1]);
console.log(result);

console.log('------intersection');
var result = _.intersection([1,2,3], [101,2,1,11], [2,1]);
console.log(result);

console.log('------uniq');
var result = _.uniq([1,2,3,1,2,4,5,3]);
console.log(result);

console.log('------zip');
var result = _.zip(['a','b','c'],[1,2,4],[true,false, true]);
console.log(result);

console.log('------object');
var result = _.object(['a','b','c'],[1,2,4],[true,false, true]);
console.log(result);

console.log('------indexOf');
var result = _.indexOf([1,2,3], 3);
console.log(result);

console.log('------lastIndexOf');
var result = _.lastIndexOf([1,2,3,1,2,3], 2);
console.log(result);

console.log('------sortedIndex');
var result = _.sortedIndex([1,2,3,4], 2.5);
console.log(result);

console.log('------range');
var result = _.range(4);
console.log(result);