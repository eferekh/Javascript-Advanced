function doMath(number) {
  this.number = number;

  this.add = function (num) {
    this.number += num;
    return this;
  }

  this.sub = function (num) {
    this.number -= num;
    return this;
  }

  this.printInfo = function () {
    console.log(this.number);
  }
}

var num1 = new doMath(5);

num1.add(5).sub(1).printInfo();
