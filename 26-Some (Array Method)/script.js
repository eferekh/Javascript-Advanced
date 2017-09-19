var arr1 = [30, 16, 256, 4, 80];
var arr2 = ["Elie", "Alexandra", "Fatima", "Victoria"];


var arr1test = arr1.some(function (val) {
  return val < 2;
});


var arr2test = arr2.some(function (val) {
  return val.length > 4;
});


console.log(arr1test);
console.log(arr2test);
