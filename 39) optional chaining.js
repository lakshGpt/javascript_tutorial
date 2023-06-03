// optional chaining - mainly used for nested objects
// The optional chaining (?.) operator accesses an object's property or
// calls a function. If the object accessed or function called using this
// operator is undefined or null, the expression short circuits and evaluates
// to undefined instead of throwing an error.


const user = {
    firstName: 'abhi',
    // address: {houseNumber: '1234'}
};

console.log(user.firstName);
console.log(user.address);      //undefined
// console.log(user.address.houseNumber);      //error- becoz houseNumber is property of undefined address

// prob - right now we dont have address's houseNumber, but may be we 
// get it in future, so instead of getting error we need to print undefined
// sol - instead of (.) we use (?.)
console.log(user.address?.houseNumber);     //undefined
// working of ?. - if address exist then access and print houseNumber else if address
// is either absent or undefined then print undefined