function Car(name, color) {
  this._name = name;
  this._color = color;
}

Car.prototype.printInfo = function () {
  return "Car Name: " + this._name + ", Car Color: " + this._color + ".";
}

function heroCar(name, color, hero) {
  Car.call(this, name, color);
  this._hero = hero;
}

heroCar.prototype = Object.create(Car.prototype);
heroCar.prototype.constructor = heroCar;


var heroCar1 = new heroCar("BMW", "Black", "Batman");


console.log(heroCar1 instanceof Car);
console.log(heroCar1 instanceof heroCar);
console.dir(heroCar1);
// console.log(heroCar1.printInfo());