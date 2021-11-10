class Calculator {
  constructor(x, y){
      this.x = x;
      this.y = y;
  }

  add(x, y){
    return x + y;
  }
  subtract(x, y){
    return x - y;
  }
  divide(x, y){
    return x / y;
  }
  multiply(x, y){
    return x * y;
  }
}

let calculator = new Calculator()

module.exports = calculator;