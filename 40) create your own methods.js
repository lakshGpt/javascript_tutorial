// methods - func inside object
// this keyword gives undefined with arrow functions

// example 1
// const person = {
//     firstName : "mohit",
//     age : 8,
//     about: function() {
//         console.log(`person name is ${this.firstName} & age is ${this.age}`);
//     }
// };


// example 2
function personInfo() {
    console.log(`person name is ${this.firstName} & age is ${this.age}`);
}

const person1 = {
    firstName : "mohit",
    age : 8,
    about: personInfo
};
const person2 = {
    firstName : "abhi",
    age : 23,
    about: personInfo
};
const person3 = {
    firstName : "naina",
    age : 24,
    about: personInfo
};

person1.about();
person2.about();
person3.about();