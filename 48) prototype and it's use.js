// in JS func ==> func + obj
// i.e func is treated as func as well as obj

// function hello(){
//     console.log("hello world");
// }

// // treating like object
// // console.log(hello.name);            // name is property provided by JS to funcs

// // // we can also add our own properties
// // hello.myage = 18;
// // console.log(hello.myage);

// /* funcs gives us free space in form of obj which we called as prototype */
// // console.log(hello.prototype);       //it gives a constructor which uses as empty space

// /* only funcs provide prototype property */

// hello.prototype.abc = 21;
// hello.prototype.xhs = 25;
// hello.prototype.sing = function(){
//     return("tum hi ho");
// };
// console.log(hello.prototype);

/* use prototype and __proto__ */
// from 47
// we have prototype object of createUser which we want to use instead of
// creating separate object

// const userMethods = {
//   about() {
//     return `${this.firstName} is ${this.age} years old.`;
//   },
//   is18() {
//     return this.age >= 18;
//   },
//   song() {
//     return "rehna hai tere dill me";
//   },
// };

function createUser(firstName, lastName, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.address = address;
  return user;
}

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.song = function () {
  return "rehna hai tere dill me";
};
const user1 = createUser("naina", "gutpa", 2, "mrp new delhi");
console.log(user1.song());
console.log(user1.about());
console.log(user1.is18());
