/*features of new keyword
1) it create an empty object which indicates to this i.e this = {}
2) it automatically set link between __proto__ and prototype
*/

// function createUser(firstName,age){
//     this.firstName = firstName;
//     this.age = age;
// };

// // setting link btween prototype & __proto__
// createUser.prototype.about = function(){
//     console.log(`my name is ${this.firstName} & age is ${this.age}`);
// }

// const user1 = new createUser("abhi",22);    // creating new object using new
// console.log(user1);
// user1.about();

// from 48
// these type of funcs are called constructor function
// and these funcs name starts from capital letter
function CreateUser(firstName, lastName, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.address = address;
}

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.song = function () {
  return "rehna hai tere dill me";
};


const user1 = new CreateUser("naina", "gutpa", 2, "mrp new delhi");
const user2 = new CreateUser("abhi", "gutpa", 25, "mrp new delhi");
const user3 = new CreateUser("lakshay", "gutpa", 26, "mrp new delhi");
console.log(user1);
console.log(user1.about());
console.log(user1.is18());
