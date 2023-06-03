//  parameter destructuring

const person = {
    firstName : "abhi",
    gender : "male"
};

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// using param destructuring
const printDetails = ({firstName,gender}) => {
    console.log(firstName);
    console.log(gender);
}
printDetails(person);