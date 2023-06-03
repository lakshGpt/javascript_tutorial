// // XHR - XML http request

// const URL = "https://jsonplaceholder.typicode.com/posts";

// /* create an object using XMLHttpRequest() */
// const xhr = new XMLHttpRequest();
// // console.log(xhr);

// // steps to configure xhr method
// /* step 1- use open(action (like get, post, delete etc), end url) */
// xhr.open("GET", URL); // it will work asynchronously

// // we can assign function to onreadystatechange
// // xhr.onreadystatechange = function() {
// //     // browser will call this function whenever it's ready state changes
// //     // console.log(xhr.readyState);
// //     if(xhr.readyState === 4){
// //         // console.log(typeof xhr.response)  // type of this response is String
// //         const response = xhr.response;
// //         const data = JSON.parse(response);
// //         // to convert this response string to json object we use JSON.parse(response)
// //         console.log(data);

// //     }
// // }

// /* onreadystatechange runs whenever the state changes so to avoid this
// we use onload which is like onreadystatechange. 
// but diff between both is onload runs only when the readystate val = 4 */
// xhr.onload = function () {
//   console.log(xhr.readyState); // 4
//   const response = xhr.response;
//   const data = JSON.parse(response);
//   console.log(data);
// };

// xhr.send();

// // we get response when the readyState's val = 4


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);

xhr.onload = ()=>{
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send()