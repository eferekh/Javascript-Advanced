function doMath(method, ...nums) {

  if (method == 1) {

    var total = 0;
    for (var i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    console.log(total);

  } else if (method == -1) {

    var total = 0;
    for (var i = 0; i < nums.length; i++) {
      total -= nums[i];
    }
    console.log(total);

  } else {
    console.log("Error");
  }
}

doMath(1, 1, 2, 3, 4, 5);
doMath(-1, 1, 2, 3, 4, 5);
doMath(0, 1, 2, 3, 4, 5);