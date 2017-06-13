var _ = require('underscore');

console.log('--------keys');
var result = _.keys({one:1, two:2, three:3});
console.log(result);

console.log('--------values');
result = _.values({one:1, two:2, three:3});
console.log(result);

console.log('--------pairs');
result = _.pairs({one:1, two:2, three:3});
console.log(result);

console.log('--------invert');
result = _.invert({one:1, two:2, three:3});
console.log(result);

console.log('--------functions');
result = _.functions(_);
console.log(result);

console.log('--------extend');
result = _.extend({name:'dowon'}, {age:33});
console.log(result);

console.log('--------pick');
result = _.pick({name:'dowon', age:33}, 'age');
console.log(result);

console.log('--------omit');
result = _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
console.log(result);

result = _.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return _.isNumber(value);
});
console.log(result);

console.log('--------defaults');
iceCream = {flavor:'chocolate'};
result = _.defaults(iceCream, {flavor:'oye', orange: 'lots'});
console.log(result);

console.log('--------clone');
result = _.clone({name:'dowon', age:33});
console.log(result);

console.log('--------has');
result = _.has({name:'dowon', age:33}, 'age');
console.log(result);