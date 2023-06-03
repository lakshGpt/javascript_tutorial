/* hasOwnProperty */
//  we want only those keys which are used in function not in its __proto__
// to do this we use hasOwnPropert

// function CreateUser(firstName, lastName, age, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.address = address;
// }

// CreateUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function () {
//   return this.age >= 18;
// };
// CreateUser.prototype.song = function () {
//   return "rehna hai tere dill me";
// };

// const user1 = new CreateUser("naina", "gutpa", 2, "mrp new delhi");

// for (let key in user1) {
//   // console.log(key);       // it will simply print all keys of func including its __proto__

//   if (user1.hasOwnProperty(key)) {
//     // this block will print only those keys that are only inside func
//     console.log(key);
//   }
// }

/* more about prototypes */

let num = [1,2,3];
// this num has lot of methods which is stored in it's prototype because 
// js internally creates array like num1
// let num1 = new Array(1,2,3);
// to check prototype of num is by using Object.getPrototypeOf() method
console.log(Object.getPrototypeOf(num));