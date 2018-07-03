// Promises:
$.ajax({
	method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts/1"
}).then((data) => {
	$("#container1").html(data.title);
});

// Promises:
fetch("https://jsonplaceholder.typicode.com/posts/2")
	.then((response) => response.json())
  .then((data) => $("#container2").html(data.title));
  
 
 // Async / Await:
 async function getFromFetch() {
 	let response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  let data = await response.json();
  
  $("#container3").html(data.title);
 }
 
 getFromFetch();
 
 // Async / Await:
 async function getFromAjax() {
 	let data = await $.ajax({
  	url: "https://jsonplaceholder.typicode.com/posts/4",
    method: "GET"
  });
  
  $("#container4").html(data.title);
 }
 
 getFromAjax();
