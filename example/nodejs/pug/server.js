var express = require('express');
var path = require('path');
var app = express();
var route = require('./router/route.js');

// view engine 을 pug 로 사용
app.set('view engine', 'pug');
// pug 파일 폴더 지정
app.set('views', path.join(__dirname, 'views'));

app.use('/', route);

app.listen(3000, function () {
  console.log('Express App on port 3000!!');
});
