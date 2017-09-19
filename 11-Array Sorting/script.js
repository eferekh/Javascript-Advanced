var array1 = ["Elie", "Abdo", "Zorba", "Talar"];
var array2 = [32, 1324, 123, 432];
var array3 = [{
    name: "Talar",
    price: 432
  },
  {
    name: "Zorba",
    price: 123
  },
  {
    name: "Abdo",
    price: 1324
  },
  {
    name: "Elie",
    price: 32
  }
];


array1.sort();
array2.sort(function (num1, num2) {
  return num1 - num2;
});
array3.sort(function (obj1, obj2) {
  return obj1.price - obj2.price;
});
array3.sort(function (obj1, obj2) {
  if (obj1.name > obj2.name) {
    return 1;
  } else {
    return -1;
  }
});


// console.log(array1);
// console.log(array2);
console.log(array3);