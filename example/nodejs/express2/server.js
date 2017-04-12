var express = require('express');
var app = express();
var router = require('./router/main')(app);

// __dirname은 현재 파일 위치를 나타내는 Node.js 전역 변수
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

// 미들웨어 커스터마이징
app.use(function(request, response, next) {
    console.log('미들웨어 커스터마이징 처리!!');
    // 다음 미들웨어로 처리를 넘김
    next();
});

// static 미들웨어는 정적파일(html, css, js, image 등)들의 위치를 지정
app.use(express.static('public'));
