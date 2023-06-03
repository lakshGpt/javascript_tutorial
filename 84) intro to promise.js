// promise - it is a future value which we don't know now but will know
// it in future
/* all the promise's function like then, catch etc adds into "Microtask 
queue", whereas settimeout's callback add into "callback Queue",
and microtask queue has high priority than callback queue, therefore
task in microtask queue will execute first then task in callback queue 
executes */

console.log("script start");

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

//  to use promise we first intialise it using new keyword
// the promise() take executer funcs resolve and reject
// produce of promise
const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("rice") &&
    bucket.includes("salt") &&
    bucket.includes("vegetables")
  ) {
    resolve("Fried Rice"); // in resolve we can pass either array, string, object
    // resolve({value:"Fried Rice"});
  } else {
    // in reject we can also pass anything like new error obj, array, string, etc
    reject("couldn't do it");
    // reject(new error("couldn't do it"));
  }
});

// consume of promise
/* with promise we use .then() which take two callback as an input in 
which one is for resolve and second one is for reject */
// friedRicePromise.then(
//     // when promise get resolve
//   (myfriedrice) => {
//     console.log("lets eat", myfriedrice);
//   },
// //   when promise get reject
//   (error) => {
//     console.log(error);
//   }
// );

/* variation in .then()
- when we only take care of resolve then only resolve callback is there
- when we take care of both resolve and reject then both callbacks are there
- when we only take care of reject then in place of resolve we use null and 
only reject callback is there */

// friedRicePromise.then(  // when only take care of reject
//   null,
// //   when promise get reject
//   (error) => {
//     console.log(error);
//   }
// );

// chaining - in this instead of reject callback we use .catch()
/* .catch() takes a callback to show the rejection error */
friedRicePromise
  .then((myfriedrice) => {
    console.log("lets eat", myfriedrice);
  })
  .catch((error) => {
    console.log(error);
  });

for(let i=0;i<100;i++){
    console.log(Math.random(),i);
}

setTimeout(()=>{
    console.log("setting time out");
},0);

console.log("script end");