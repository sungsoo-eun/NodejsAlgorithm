function add(a, b) {
  console.log("## calc1.add Start.");
  return a + b;
}

// 다른파일에서 사용할 함수가 한개일때
module.exports = add;
