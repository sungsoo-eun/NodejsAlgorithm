
// User 객체
function User() {
	return JSON.stringify({
		"userid":$("#userid").val(),
		"username":$("#username").val(),
		"phone":$("#phone").val()
	});
}

// 신규 사용자 추가
function addUser () {
	// http://api.jquery.com/jQuery.ajax/ 참고
	jQuery.ajax({
		type: "POST",
		url: "/addUser/"+$("#userid").val(),
		data: User(),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data, status, jqXHR) {
			// do something
			getUsers ();
		},
		error: function (jqXHR, status) {            
			// error handler
		}

	});
}

// 사용자 정보 변경
function updateUser () {
	jQuery.ajax({
		type: "PUT",
		url: "/mergeUser/"+$("#userid").val(),
		data: User(),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data, status, jqXHR) {
			// do something
			if(data.success) {
				alert('수정 성공!!');
				getUsers ();
			} else {
				alert(data.error);
			}
		},
		error: function (jqXHR, status) {
			// error handler
		}     
	});     
}

// 사용자 삭제
function deleteUser (userId) {
	jQuery.ajax({
		type: "DELETE",
		url: "/deleteUser/"+userid,
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		data: "userid="+userId,
		dataType: "json",
		success: function (data, status, jqXHR) {
			// do something
			alert('삭제 성공!!');
			getUsers ();
		},
		error: function (jqXHR, status) {
			// error handler
		}
	});
}

// 사용자 정보 조회
function getUser (userId) {
	jQuery.ajax({
		type: "GET",
		url: "/getUser/"+userid,
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		data: "userid="+userId,
		dataType: "json",
		success: function (data, status, jqXHR) {
			//alert(status+"/"+jqXHR.status+"/"+jqXHR.statusText);
			$("#userid").val(data["userid"]);
			$("#username").val(data["username"]);
			$("#phone").val(data["phone"]);
		},
		error: function (jqXHR, status) {
			// error handler
		}
	});
}

// 전체 사용자 정보 조회
function getUsers () {
	jQuery.ajax({
		type: "GET",
		url: "/list",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data, status, jqXHR) {
			$("div#myOutput").html(" ");
			returnData = "<table style='font-size:10pt;'><tr><th>전체 목록</th></tr>";
			returnData += "<tr><td>ID</td><td>이름</td><td>전화번호</td><td>기능</td></tr>";
			for (var i = 0; i < data.length; i++) {
				returnData += "<tr><td><a href='#' onClick='getUser("+data[i]["userid"]+")' >" 
						   + data[i]["userid"] + "</a></td><td>"
						   + data[i]["username"] + "</td><td align='right'>"
						   + data[i]["phone"] + "</td><td>"
						   + "<input type='button' value='삭제' onClick='deleteUser("+ data[i]["userid"] +")' />"
						   + "</td></tr>";
			}

			returnData = returnData + "</table>";
			$("div#myOutput").html(returnData);
		},
		error: function (jqXHR, status) {
		 // error handler
		}
	});
}