$(document).ready(function () {
    sendRequests();
});

// Display Data:
function display(title, data) {
    $(".container").append(`<h2>From ${title}</h2>`);
    $(".container").append(`<p>From GET Requests: ${data}</p>`);
}


// ---------------------------------------
// ---------------------------------------
// GET Requests:
function sendGetRequest() {
    // Brief: The GET Method Requests a Representation Of The Specified Resource.
    //        Requests Using GET Should Only Retrieve Data.

    return $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET"
    });
}
function sendAnotherGetRequest() {
    return $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "GET"
    });
}


// ---------------------------------------
// ---------------------------------------
// HEAD Requests:
function sendHeadRequest() {
    // Brief: The HEAD Method Asks For a Response Identical To That Of a GET Request.
    //        But Without The Response Body.

    return $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "HEAD"
    });
}


// ---------------------------------------
// ---------------------------------------
// POST Requests:
function sendPostRequest() {
    // Brief: The POST Method Is Used To Send User-Generated Data To The Web Server.
    // More Details: When a User Comments On a Forum Or If They Upload a New Profile Picture.

    return $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST"
    });
}


// ---------------------------------------
// ---------------------------------------
// PUT Requests:
function sendPutRequest() {
    // Brief: The PUT Method Completely Replaces Whatever Currently Exists At The Target URL With Something Else.
    // More Details: With This Method, We Can Create New Resource Or Overwrite An Existing One, Knowing The Exact REQUEST-URI.

    return $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PUT"
    });
}


// ---------------------------------------
// ---------------------------------------
// PATCH Requests:
function sendPatchRequest() {
    // Brief: The PATCH Method Is Used To Apply Partial Modifications To a Resource.

    return $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "PATCH"
    });
}


// ---------------------------------------
// ---------------------------------------
// DELETE Requests:
function sendDeleteRequest() {
    // Brief: The DELETE Method Deletes The Specified Resource.

    return $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "DELETE"
    });
}


// ----------------------------------------------------
// ----------------------------------------------------
// We can only use 'await' inside of 'async' functions:
async function sendRequests() {
    let firstGet = await sendGetRequest();
    let secondGet = await sendAnotherGetRequest();
    let firstPost = await sendPostRequest();
    let firstPut = await sendPutRequest();
    let firstPatch = await sendPatchRequest();
    let firstDelete = await sendDeleteRequest();

    for (let i = 0; i < firstGet.length; i++) {
        display("First GET", firstGet[i].id);
    }

    display("Second GET", secondGet.id);

    display("First POST", firstPost.id);

    display("First PUT", firstPut.id);

    display("First PATCH", firstPatch.id);

    display("First Delete", firstDelete);
}
