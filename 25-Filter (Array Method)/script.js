var arr1 = [2, 6, 12, 13, 98];
var arr2 = ["Elie", "Ferekh", "Fatima", "Atabeeva"];


var arr1x = arr1.filter(function (num) {
  return num <= 12;
});

var arr2x = arr2.filter(function (string) {
  if (string.length < 7) {
    return string;
  }
});


console.log(arr1x);
console.log(arr2x);