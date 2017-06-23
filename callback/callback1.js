//전역변수
var logLevel = "Debug";
var allUserData = [];

// 콘솔에 결과를 찍는 함수
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(logLevel + " - " + userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(logLevel + " - " + item + ": " + userData[item]);
        }

    }

}

function getInput(options, callback) {
    allUserData.push(options);

    // callback 이 함수 인지를 확인합니다.
    if (typeof callback === "function") {
        // callback 이 함수인지를 확인 했으니까 함수호출합니다.
        callback(options);
    }
}

// getInput 함수를 호출할 때 , 우리는 logStuff 라는 함수의 이름을 인자로 넘긴다.
// 그래서 logStuff 은 콜백함수가 되어 getInput이라는 함수의 내부에서 동작을 할것이다.
getInput ("Callback Good!!", logStuff);
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);

console.log(allUserData);


