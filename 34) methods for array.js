// important methods for array

const num = [4,2,5,8]
// const myFunc = (number,ind) =>{
//     console.log(`index:${ind}, number:${number*2}`);
// };

/*--------------- forEach - it return undefined ------------------ */
// num.forEach(myFunc);

// num.forEach((number,ind)=>{  // using callback inside forEach 
//     console.log(`index:${ind}, number:${number*2}`);
// });

// printing firstname of every user
// const users = [
//     {firstName:"abhi",age:23},
//     {firstName:"naina",age:24},
//     {firstName:"lakshay",age:23},
//     {firstName:"yashu",age:24},
// ];

// users.forEach(({firstName})=>{
//     console.log(firstName);
// })

/*-------------- map - it return array of changed element ------------- */
// return square of every num of array
// num.map(number => console.log(number**2));
// console.log(num.map(number => number**2));

// storing all users name in array
// const users = [
//     {firstName:"abhi",age:23},
//     {firstName:"naina",age:24},
//     {firstName:"lakshay",age:23},
//     {firstName:"yashu",age:24},
// ];
// console.log(users.map(({firstName}) => firstName));

/*----- filter - it's callback func always return true or false ----- */
// filtering all even and odd numbers
// const filterOddNum = (num.filter(number => number%2!==0));
// // also gives modified array
// console.log(filterOddNum);


/*----------------------- reduce ----------------------------- */
// sum of all the values of array
// const sum = num.reduce((accumulator, currVal)=>{
//     return accumulator+currVal;
// },100); //----> we can also set initial val, thus initial accumulator val=100
// console.log(sum);
// working of reduce
// acc ,  curVal, return
// 4       2       6
// 6       5       11
// 11      8       19----> final val


// real life example of a cart of flipcart or amazon
// const userCart = [
//     {productId:1, productName:"mobile", price:12000},
//     {productId:2, productName:"laptop", price:22000},
//     {productId:3, productName:"tv", price:20000},
// ];
// // return the sum of price of all product
// const totalBill = userCart.reduce((accumulator,{price})=>{
//     return accumulator+price;
// },0);
// console.log(totalBill);


/*------------------- sort method -------------------- */
// const num2 = [5,9,1200,410,3000];
// num2.sort();     //[1200, 3000, 410, 5, 9]
// here sort() use array element by treating them as string and check the
// ASCII code of first char of that string
// if the array has both small and capital words then sorting is done first for capital letters 
// then with small letters
// we can also pass a callback function in sort method as an argument
// num2.sort((a,b)=>a-b);      // sorting in increasing order
// num2.sort((a,b)=>b-a);      // sorting in decreasing order

// working
// if a-b>0 then swap a and b
// if a-b<0 then no swap 

// console.log(num2);      

/*-----------------------find ------------------------ */
// find() will return that first string which matches condition inside callback
// the condition inside callback generates bool val and return value 
// const words = ["Hello","cat","dog","lion"];
// console.log(words.find(word => word.length<=3));

// real life example
// const users = [
//     {id:1, userName:"lakshay"},
//     {id:2, userName:"naina"},
//     {id:3, userName:"abhi"},
//     {id:4, userName:"yashu"},
//     {id:5, userName:"aman"},
// ];
// // we want username having id = 3
// console.log(users.find(({id}) => id===3));


/*------------------------ Every() ----------------------------*/
// callback gives T/F for every value and every() also gives t/f on basis of 
// all bool values of callback
// now we need to check whether all the elements in array are even or not
// console.log(num.every((number) => number%2===0));

// real life example
// const userCart = [
//     {productId:1, productName:"mobile", price:12000},
//     {productId:2, productName:"laptop", price:22000},
//     {productId:3, productName:"tv", price:40000},
// ];
// check whether all product price < 30000
// console.log(userCart.every(({price}) => price<30000));

/*------------------------- some() ---------------------------*/
// check if there is any even element
// console.log(num.some((number)=>number%2===0)); 

// check if any product have price >20000
// console.log(userCart.some(({price})=>price>20000));

/*----------------------- fill() -----------------------------*/
// it has 2 uses 
// 1) creating new array having same value
// const arr = new Array(10).fill(-1);
// console.log(arr);

// 2) to modify some elements of an existed array
// const arr2 = [1,2,3,4,5,6,7,8];
// arr2.fill(10,2,5);      // fill(value, startInd, endInd+1)
// console.log(arr2);


/*------------------------ splice() ---------------------------- */
// splice() will change the original array and return the deleted value

const myArr = ['it1','it2','it3'];

// delete - it2
// myArr.splice(1,1);      // startIndex, num of deleting items

// insering - it4 at ind 1;
// myArr.splice(2,0,'it4');    // startIndex, num of deleting items, inserting element

// delete from 1 and insert at 1
const deletedItem = myArr.splice(1,2,'it4','it5');
console.log(myArr);
console.log(deletedItem);

