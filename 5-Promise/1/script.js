var myPromise = new Promise(function(resolve, reject) {
  var myBool = true;

  if (myBool) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

myPromise.then(function(resp) {
  console.log(resp);
}, function(error) {
  console.log(error);
});
