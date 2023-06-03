/* class keyword */

// from 50
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

// class automatically adds all it's method in the prototype
// constructor of a class can't be called without new keyword
// class createUser {
//   constructor(firstName, lastName, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.address = address;
//   }

//   about () {
//     return `${this.firstName} is ${this.age} years old.`;
//   };
//   is18 () {
//     return this.age >= 18;
//   };
//   song () {
//     return "rehna hai tere dill me";
//   };
// }

// const user1 = new createUser("naina", "gutpa", 2, "mrp new delhi");
// console.log(user1);

// animal class
// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age<=1;
//     }
// }

/* super */

// class Dog extends Animal {
//     constructor(name,age,speed){
//         super(name,age)     //it indicates parent class constructor i.e animal
//         this.speed = speed;
//     }

//     run(){
//         return `${this.name} speed is ${this.speed} km/hr`;
//     }

//     eat(){      // same method in base class
//         return `modifed eat: ${this.name} is eating`
//     }
// }

// const animal1 = new Animal("panda",10);
// console.log(animal1);
// const dog1 = new Dog("tommy",1,35);
// console.log(dog1);
// console.log(dog1.eat());

/* getter and setter */

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

//   static properties
  static desc = "static property";

//   static method
  static classInfo(){
    console.log("this is person's class");
  }

  //  now we want to treat fullName as a property not as function so we use
  // 'get' short form of getter
  get fullName() {
    return `person's fullname is ${this.firstName} ${this.lastName}`;
  }
  
  // setter
  set setFullName(fullName) {
    const [firstName, lastName] = fullName.split(" "); // split(" ") convert a string into [part1,part2]
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("abhi", "gutpa", 22);
// console.log(person1.fullName());
// console.log(person1.fullName);      // using fullname is a property
// person1.setFullName = "naina gupta";    // setter 
console.log(person1.fullName);
person1.desc;


/* static methods and properties */
// till now the methods we create all are related to instance of the class
// but now we want to make methods that are class dependent i.e call using class name
// thus we use static keyword for this
// person1.classInfo();        // can't call static method using instance
Person.classInfo();     // call using class name