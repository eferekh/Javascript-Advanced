function Car(name, year, color) {
  this.name = name;
  this.year = year;
  this.color = color;

  this.printInfo = function () {
    return "Car Name: " + this.name + ", Car Year: " + this.year + ", Car Color: " + this.color + ".";
  }
}


var myCar1 = new Car("Volvo", 1992, "Red");
var myCar2 = new Car("BMW", 1999, "Blue");


console.log(myCar1);
console.log(myCar2.printInfo());