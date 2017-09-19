var myObj = {
  color: "Red"
};

function getColor(name) {
  this.name = name;
  console.log(this.color + " Is For Car: " + this.name);
}

getColor.call(myObj, "Volvo");