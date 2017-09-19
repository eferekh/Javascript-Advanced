function getNumber(num) {
  var number = num;

  function addNumber(num) {
    return number + num;
  }

  return addNumber;
}


var fun1 = getNumber(5);
var fun2 = fun1(5);


console.dir(fun1);
console.log(fun2);