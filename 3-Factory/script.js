function Car(name, year, color) {
  var carObj = {};

  carObj.name = name;
  carObj.year = year;
  carObj.color = color;
  carObj.printInfo = function () {
    return "Car Name: " + this.name + ", Car Year: " + this.year + ", Car Color: " + this.color + ".";
  };

  return carObj;
}


var car1 = Car("Volvo", 1992, "Red");


console.log(car1);
console.log(car1.printInfo());