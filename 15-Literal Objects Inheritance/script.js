var myObj = {
  name: "Volvo",

  sayHello: function () {
    return `Hello From ${this.name}.`;
  },

  drive() {
    return `${this.name} Car Driving.`;
  },

  stop() {
    return `${this.name} Car Stopping.`;
  }
};

var myObj1 = {
  name: "BMW"
};


Object.setPrototypeOf(myObj1, myObj);


console.log(myObj1.drive());
console.log(myObj1.stop());
console.log(myObj1.sayHello());

console.log(myObj.drive());
console.log(myObj.stop());
console.log(myObj.sayHello());