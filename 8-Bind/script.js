var myObj = {
  color: "Red"
};

function Car(name) {
  this.name = name;
  return "Car Name " + this.name + " Has Color: " + this.color;
}


var fun1 = Car.bind(myObj);
var car = fun1("Volvo");

console.log(car);
