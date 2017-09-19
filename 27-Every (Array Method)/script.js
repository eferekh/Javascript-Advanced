var arr1 = [30, 23, 80, 256, 1, 20];
var arr2 = ["Elie", "Fatima", "Alexandra", "Anastasia"];


var arr1test = arr1.every(function (val) {
  return val > 0;
});

var arr2test = arr2.every(function (val) {
  return val.length > 4;
});


console.log(arr1test);
console.log(arr2test);
