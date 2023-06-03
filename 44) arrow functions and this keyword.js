// arrow functions and this keyword
// arrow func's this is it's surrounding.
const user = {
    firstName : "abhi",
    age: 9,
    about: () => {
        console.log(this);  // here this refer to window and we can't change it
        console.log(this.firstName, this.age);
    },
};

user.about();

// short syntax in object
// instead of using k:v pair for a func we can directly write that func
const user1 = {
    firstName : "abhi",
    age: 9,
    about(){
        console.log(this.firstName, this.age);
    },
};
user1.about()