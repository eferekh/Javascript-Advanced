function Car(name, year, color) {
  this.name = name;
  this.year = year;
  this.color = color;
}

Car.prototype.printInfo = function () {
  return "Car Name: " + this.name + ", Car Year: " + this.year + ", Car Color: " + this.color + ".";
}

var car1 = new Car("Volvo", 1992, "Red");
var car2 = new Car("BMW", 1999, "Yellow");

console.log(car1);
console.log(car2.printInfo());