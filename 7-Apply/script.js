var myObj = {
  name: "Volvo"
};

function getColor(color) {
  this.color = color;
  return this.name + " has color " + this.color;
}

var x = getColor.apply(myObj, ["Red"]);

console.log(x);