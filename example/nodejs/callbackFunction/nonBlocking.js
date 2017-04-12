// fs 모듈은 파일을 읽고/쓸때 사용
var fs = require("fs");

// 비동기식 파일 읽기
// Node.js는 비동기식이 기본이며 callback function을 호출한다.
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program has ended");
