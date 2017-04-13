// fs 모듈은 파일을 읽고/쓸때 사용
var fs = require("fs");

// 동기식 파일 읽기
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program has ended");
