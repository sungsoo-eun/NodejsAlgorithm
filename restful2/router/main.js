// module.exports 는 모듈을 생성하는 부분으로 다른 파일에서 require 할 수 있다.
module.exports = function(app, fs)
{

	app.get('/',function(req,res){
		res.render('index', {
			title: "사용자 관리",
			length: 5
		});
	});

    app.get('/list', function (req, res) {
		fs.readFile( __dirname + "/../data/db.json", 'utf8', function (err, data) {
			console.log( data );
			var data = JSON.parse(data);
			res.json(data.users);
		});
    });

    app.get('/getUser/:userid', function(req, res){
		// GET 방식은 req.query 를 사용하여 파라미터 정보 취득
        var userid = req.query.userid;
		
		fs.readFile( __dirname + "/../data/db.json", 'utf8', function (err, data) {
			var data = JSON.parse(data);
			for (var i = 0; i < data.users.length; i++) {
				if(userid == data.users[i]["userid"]){
					res.json(data.users[i]);
					return;
				}
			}
		});
    });

    app.post('/addUser/:userid', function(req, res){

        var result = {  };
        var userid = req.params.userid;

        // LOAD DATA & CHECK DUPLICATION
        fs.readFile( __dirname + "/../data/db.json", 'utf8',  function(err, data){
            var data = JSON.parse(data);
			for (var i = 0; i < data.users.length; i++) {
				if(userid == data.users[i]["userid"]){
					// DUPLICATION FOUND
					result["success"] = 0;
					result["error"] = "duplicate";
					res.json(result);
					return;
				}
			}

            // ADD TO DATA
			// POST 방식은 req.body 를 사용하여 파라미터 정보 취득
            data.users.push(req.body);

            // SAVE DATA
            fs.writeFile(__dirname + "/../data/db.json",
                         JSON.stringify(data, null, '\t'), "utf8", function(err, data){
                result = {"success": 1};
                res.json(result);
				return;
            })
        })
    });


    app.put('/mergeUser/:userid', function(req, res){

        var result = {  };
        var userid = req.body.userid;

        // LOAD DATA
        fs.readFile( __dirname + "/../data/db.json", 'utf8',  function(err, data){
            var data = JSON.parse(data);
            // ADD/MODIFY DATA
			var i = 0;
			for (i = 0; i < data.users.length; i++) {
				if(userid == data.users[i]["userid"]){
					// removed_items = arrayObject.splice(index, num_to_remove[, add1[, add2[, ...]]]);
					// i번째 index에서 1개의 entry를 삭제하고 req.body를 추가
					data.users.splice(i, 1, req.body);
					break;
				}
			}
			
			//console.log('3='+  data.users.length +"/"+ i);
            // IF NOT FOUND
            if(data.users.length == i){
                result["success"] = 0;
                result["error"] = "동일한 ID가 없습니다.";
                res.json(result);
                return;
			} else {

				// SAVE FILE
				fs.writeFile(__dirname + "/../data/db.json",
							 JSON.stringify(data, null, '\t'), "utf8", function(err, data){
					result["success"] = 1;
					res.json(result);
					return;
				});
			}
        })
    });


    app.delete('/deleteUser/:userid', function(req, res){
        var result = { };
        var userid = req.body.userid;
		
        //LOAD DATA
        fs.readFile(__dirname + "/../data/db.json", "utf8", function(err, data){
            var data = JSON.parse(data);

			var i = 0;
			for (i = 0; i < data.users.length; i++) {
				if(userid == data.users[i]["userid"]){
					console.log('2='+  i );
					// DELETE FROM DATA
					// removed_items = arrayObject.splice(index, num_to_remove[, add1[, add2[, ...]]]);
					// i번째 index에서 1개의 entry를 삭제
					data.users.splice(i, 1);
					break;
				}
			}
			
			//console.log('3='+  data.users.length +"/"+ i);
            // IF NOT FOUND
            if(data.users.length == i){
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
			} else {

				// SAVE FILE
				fs.writeFile(__dirname + "/../data/db.json",
							 JSON.stringify(data, null, '\t'), "utf8", function(err, data){
					result["success"] = 1;
					res.json(result);
					return;
				});
			}

        });

    });

}
