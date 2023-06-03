// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//     let firstName = "harshit";
//     console.log(firstName);
// }
// // console.log(firstName);   // gives error as firstName is define in above block
// // same error occured with const .

// {
//     let firstName = "abhi";
//     console.log(firstName);
// }

// let firstName = "naina";
// console.log(firstName);

// all firstname have different values and no one is giving any error because both
// firstname's is in different block 

//  var can be acces outside the block but not outside the function
// {
//     var firstName = "abhi";
// }
// console.log(firstName);

// {
//     console.log(firstName);
// }

function myApp(){
    var firstName = "anji";
    // console.log(firstName);
}
// console.log(firstName);         // giving error because no firstname is declare out the function