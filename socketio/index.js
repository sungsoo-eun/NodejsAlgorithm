var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


// 채팅 user 배열
var userList = [];

// 클라이언트가 최초 접속 할때 호출
io.on('connection', function(socket){
  var joinedUser = false;
  var nickname;

  // (Client->Server) 새로운 user가 접속
  socket.on('join', function(data){
    if (joinedUser) { // 이미 입장 했다면 중단
      return false;
    }

    nickname = data;
    // user 배열에 사용자 정보 담기
    userList.push(nickname);

    // (Server->Client) 자신을 제외한 모든 클라이언트에 새로운 user에 대한 입장 메시지 전송
    socket.broadcast.emit('join', {
      nickname : nickname
      ,userList : userList
    });

    // (Server->Client) 자신에게 환영 메시지 전송
    socket.emit('welcome', {
      nickname : nickname
      ,userList : userList
    });

    joinedUser = true;
  });


  // (Client->Server) 메시지 전달
  socket.on('msg', function(data){
    console.log('msg: ' + data);

    // (Server->Client) 자신을 포함한 모든 클라이언트에 입력된 메시지 전송
    io.emit('msg', {
      nickname : nickname
      ,msg : data
    });
  });


  // (Client->Server) 접속 종료
  socket.on('disconnect', function () {
    console.log('joinedUser='+joinedUser);
    // 입장하지 않았다면 중단
    if ( !joinedUser) {
      console.log('--- not joinedUser left');
      return false;
    }

    // 접속자목록에서 제거
    var i = userList.indexOf(nickname);
    userList.splice(i,1);

    // (Server->Client) 자신을 제외한 모든 클라이언트에 새로운 user에 대한 입장 메시지 전송
    socket.broadcast.emit('left', {
      nickname : nickname
      ,userList : userList
    });
  });
});

