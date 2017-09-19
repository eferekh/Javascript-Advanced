class Car {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }

  printInfo() {
    console.log(`Car Name: ${this._name}, Car Color: ${this._color}.`);
  }
}

class heroCar extends Car {
  constructor(name, color, hero) {
    super(name, color);
    this._hero = hero;
  }

  getInfo() {
    return `Car Name: ${this._name}, Car Color: ${this._color}, Hero Name: ${this._hero}.`;
  }
}


var car1 = new Car("Volvo", "Red");
var herocar1 = new heroCar("BMW", "Black", "Batman");


console.dir(herocar1);
// car1.printInfo();
// console.log(herocar1.getInfo());
// herocar1.printInfo();