// setTimeout을 활용한 비동기 callback 함수
var async_function = function(val, callback){
  setTimeout ( function() {
    callback(val);
    console.log("step 3");
  }, 0);

};

async_function("step 2", function(val) {
  console.log(val)
});

console.log("step 1");
