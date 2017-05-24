var calc = {
    add : function(a, b) {
      console.log("## calc3.add Start.");
      return a + b;
    },
    substract : function(a, b) {
      console.log("## calc3.substract Start.");
      return a - b;
    },
    multiply : function(a, b) {
      console.log("## calc3.multiply Start.");
      return a * b;
    },
    divide : function(a, b) {
      console.log("## calc3.divide Start.");
      return a / b;
    }
}

// 객체를 할당
module.exports = calc;
