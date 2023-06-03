/* SETS */
// it is iterables
// sets also have its own methos
// no index-based access
// order is not gauranteed
// unique items only(no duplicates allowed)
// lenght property not used

//                           |------------------> only iterables allowed   
// const numbers = new Set([1,3,4,4]); 
// console.log(numbers);       //Set(3) {1, 3, 4} - all are unique elements
// console.log(numbers[2]);     // undefined - no index-based access

// adding element to a set
const num = new Set();
num.add(1);
num.add(2);
num.add(3);
num.add("abs");
num.add(['abhi','naian','muoo']);             
// if we use this line again then this array get add again 
// because in memory both the array has diff address
// but in case of single defined array , it will not add again 

// console.log(num);

//  has() - to check whether any element is present or not in the set
// num.has(1)?console.log("1 present"):console.log("1 not present");

// for-of loop 
// for(let x of num)console.log(x);

// length of a set
let count =0;
for(let x of num)count+=1;
console.log(count);