// promise.resolve

/* promise.resolve() takes an input value let say 5 and return a promise
which will get resolved and gives value 5 */
 
// const myPromise = Promise.resolve(5);
// myPromise.then((val) => console.log(val));


/* then() method always returns a promise, it led to promise chaining */

// promise chaining
function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    });
};

myPromise().then((val)=>{
    console.log(val);
    val += "bar";
    return val;     // here the val returning is in the form of promise which is helpful for chaining 
    // it work like this
    // return Promise.resolve("bar");
    // if we not write return statement then js bydefault return "undefined"
    // return Promise.resolve(undefined);
}).then((val)=>{
    console.log(val);
    val+="baaz";
    return val;
}).then((val)=>{
    console.log(val);
})