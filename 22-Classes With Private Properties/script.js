class Car {

  constructor(_name, _color) {
    var name = _name;
    var color = _color;

    this.getName = function () {
      return name;
    }

    this.setName = function (_name) {
      name = _name;
    }
  }

  printInfo() {
    console.log("This is a Car Object");
  }
}

var myCar1 = new Car("Volvo", "Red");


console.log(myCar1);

console.log(myCar1.getName());
myCar1.setName("BMW");
console.log(myCar1.getName());

myCar1.printInfo();