// 실행 소요 시간 측정하기
var result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000; i++) {
	result += i;
}

console.timeEnd('duration_sum');
console.log('result='+result);

console.log('__filename=' + __filename);
console.log('__dirname=' + __dirname);

console.log('process.argv.length=' + process.argv.length);

console.log('### process.argv');
console.dir(process.argv);

console.log('### process.env');
console.dir(process.env);
