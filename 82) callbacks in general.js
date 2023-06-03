// understanding callback

function myFunc(callback) {
  console.log("function is doing task 1");
  callback();
}

function myFunc2() {
  console.log("function is doing task 2");
}

// we want that func2 call after func immediatly, so we use callback
// myFunc(myFunc2);

// we can use anonymous or arrow func directly
// myFunc(function(){
//     console.log("task 2");
// })

// myFunc(()=>{
//     console.log("task 2");
// })

// get 2 nums and add
// const get2numsAndAdd = (n1,n2,callback)=>{
//     console.log(n1,n2);
//     callback(n1,n2);
// }

const get2numsAndAdd = (n1, n2, onSuccess, onFailure) => {
  if (typeof n1 === "number" && typeof n2 === "number") {
    onSuccess(n1, n2);
  } else {
    onFailure();
  }
};

const add2Nums = (n1, n2) => {
  console.log(n1 + n2);
};

get2numsAndAdd(3, 4, add2Nums, () => {
  console.log("wrong data type");
  console.log("please pass number only");
});
