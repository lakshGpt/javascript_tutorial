// intro to arrays - ordered collection of items
// it is referenced type i,e it is type of object
// arrays are mutable


//  how to create arrays

// let fruits = ["apple","mango","banana"];
// let num = [1,2,3,44,5];
// let mixed = ["naian",24,"abhi",undefined,null,3.14];
// console.log(fruits);
// console.log(num);
// console.log(mixed);

// fruits[1] = "grapes";
// console.log(fruits);     //['apple', 'grapes', 'banana']
// console.log(typeof fruits); //object

// console.log(Array.isArray(fruits)); //to check whether given obj is array

// array indexing
// console.log(fruits[0]);

/* push, pop are faster than unshift, shift */
/* array push - add element in last */
// fruits.push("orange");
// console.log(fruits);

/* array pop - remove element from last */
// fruits.pop();
// we can also store the popped item
// let poppedItem = fruits.pop();
// console.log(fruits);
// console.log(poppedItem);

/* array unshift - add element in front */
// fruits.unshift("kiwi");
// console.log(fruits);

/* array shift - remove element from front */
// console.log(fruits.shift());
// console.log(fruits);



/* ---------------- primitive vs reference data types --------------- */
// primitive DT
// let num1 = 6;
// let num2 = num1;
// console.log("num1: ",num1);
// console.log("num2: ",num2);
// num1++;
// console.log("after incremeting")
// console.log("num1: ",num1);
// console.log("num2: ",num2);

// reference DT
// let a1 = [1,2,3,4];
// let a2 = a1;
// console.log("a1: ",a1);
// console.log("a2: ",a2);
// a1.push(6);
// a2.unshift(7);
// console.log("a1: ",a1);
// console.log("a2: ",a2);


/* ---------- clone, concat an array and spread operator -------- */
// cloning of array
// 1) assiging of one array to another
// let arr1 = ["it1","it2"];
// let arr2 = arr1;
// console.log(arr1===arr2); // true

// 2) assigning same values to diff array
// let arr2 = ["it1","it2"];
// console.log(arr1===arr2); //false

// 3) using slice method
// let arr2 = arr1.slice(0);
// console.log(arr2);

// 4) using concatination
// let arr2 = [].concat(arr1);
// console.log(arr2);

// 5) spread operator
// let newArr = ["it3","it4"]; // it help to make arr2 using arr1 & newArr  
// let arr2 = [...arr1,...newArr];
// console.log(arr1 === arr2);

// cloning array and adding some extra element to the new array simultaneously

// let arr2 = arr1.slice(0).concat(["it3"]);  // using slice method
// let arr2 = [].concat(arr1,["it3"]);  // using concat method
// let arr2 = [...arr1,"it3"];  // using spread operator
// console.log(arr2);

/* -------------------- looping in array ----------------------------- */

//  1) for loop
// let fruits = ["apple","mango","grapes","banana"];
// let arr2 = [];
// for(let i = 0;i<fruits.length;i++)arr2.push(fruits[i].toUpperCase());
// console.log(arr2);

// 2) while loop
// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

// 3) for of loop - auto increment for loop
// for(let fruit of fruits)console.log(fruit);

// 4) for in loop - modified for loop
// for(let index in fruits){
//     console.log(fruits[index]);
// }


/* --------------- use const for creating arrays -------------------- */
// const fruits = ["apple","mango","grapes","banana"];
// fruits.push("guava");
// console.log(fruits);
// reason for using const for array
// the orginal array is present in heap and its address is stored in stack 
// we're not changing its address thus we can still use all operation on array 


/* ------------------- array destructuring --------------------------- */
const arr1 = ["val1","val2","val3","val4"];
let [var1 , var2, ...var3] = arr1 // for storing all remaining in var3
console.log(var1,var2);
console.log(var3);