var myObj = {
  name: "Elie",
  "age": 25,
  greet() {
    console.log(this.name + " says Hello");
  },
  "SayHi": function () {
    console.log("Hi From " + this.name);
  }
}

// console.log(myObj.name);
// console.log(myObj["name"]);

// console.log(myObj.age);
// console.log(myObj["age"]);

// myObj.greet();
// myObj["greet"]();

myObj.SayHi();
myObj["SayHi"]();