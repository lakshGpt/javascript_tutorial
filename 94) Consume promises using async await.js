// consume promises using async await
/* using async await, we will remove all the .then() chaining */

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
// .then(response => response.json())
// .then(data => console.log(data))

// using async await

// because of async, the function now return a promise
async function getPost() {
  // await waits to either resolve or reject of the promise
  const reponse = await fetch(URL);
  if (!reponse.ok) {
    throw new Error("some thing went wrong");
  }
  const data = await reponse.json();
  // console.log(data);
  return data; // this will return a promise not data
}

// to get data from function we use .then()
getPost()
  .then((mydata) => {
    console.log(mydata);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });

// getPost();
