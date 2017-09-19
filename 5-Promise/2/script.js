var myPromise = new Promise(function(resolve, reject) {

  setTimeout(function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(xhr.responseText);
      } else {
        reject("Error Loading Data");
      }
    }

    xhr.send();
  }, 3000);
});

myPromise.then(function(resp) {
  document.getElementById("result").innerHTML = resp;
}).catch(function(error) {
  console.log(error);
});

// console.log(myPromise);
