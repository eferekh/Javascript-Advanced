var myObj1 = {
  name: "Elie Ferekh",
  age: 25,
  profession: "Programmer"
};

var myObj2 = {
  skill1: "Javascript",
  skill2: "PHP",
  skill3: "Python"
};


var {
  name,
  profession
} = myObj1;
var {
  skill1,
  skill3
} = myObj2;


console.log(name);
console.log(profession);
console.log(skill1);
console.log(skill3);