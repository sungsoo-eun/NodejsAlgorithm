// process.nextTick을 활용한 비동기 callback 함수
var async_function = function(val, callback){
    process.nextTick(function(){
        callback(val);
    });
};

async_function(42, function(val) {
  console.log(val)
});

console.log(43);
