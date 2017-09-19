var arr1 = ["Elie", 1, "Fatima", true];
var arr2 = ["Elie", "Ferekh", "Fatima", "Atabeeva"];


var arr1x = arr1.map(function (string) {
  return typeof string;
});

var arr2x = arr2.map(function (string) {
  return string.length;
});


console.log(arr1x);
console.log(arr2x);