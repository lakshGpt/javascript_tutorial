// function returning promise

function ricePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
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
}

ricePromise().then(
    (myfriedRice)=>{
        console.log("lets eat", myfriedRice);
    }
).catch((error)=>{
    console.log(error);
})