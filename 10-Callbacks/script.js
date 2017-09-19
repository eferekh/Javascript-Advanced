function doMath(num1, num2, callback) {
  return callback(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

var x = doMath(1, 2, add);
var y = doMath(2, 1, sub);

console.log(x);
console.log(y);
