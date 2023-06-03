/* default parameters */

// const add2 = (a,b=0) => {
//     return a+b;
// }

// console.log(add2(1));



/*------------------- rest parameters ----------------------- */

// let a contain 2, b contain 34, and remaining all will contain in c
// to do this we use rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);       // c gives array now
// }
// myfunc(2,34,5,3,4,5,6,7,8)

// add all num passed as an argument in function
const addAll = (...a) => {
    let sum = 0;
    for(let x of a)sum+=x;
    return sum;
}
console.log(addAll(1,2,3,4));