class Car {
  constructor(name, year, color) {
    this._name = name;
    this._year = year;
    this._color = color;
  }

  printInfo() {
    return `Car Name: ${this._name}, Was Built In: ${this._year}, Has Color: ${this._color}.`;
  }
}


var car1 = new Car("Volvo", 1992, "Red");


console.log(car1._name);
console.log(car1.printInfo());