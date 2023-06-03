// useful string method

// string is immutable so whatever method we apply on it, method will produce 
// new string which we have to either store in new or old variable or directly
// print.

/* 1) trim() */
// let firstName = "     abhi        "; // original string
// console.log(firstName.length);
// firstName = firstName.trim();  // trimed string 
// console.log(firstName.length);

/* 2) toUpperCase() */
// let firstName = "lakshay";
// console.log(firstName);
// // firstName = firstName.toUpperCase();
// console.log(firstName.toUpperCase());


/* 3) toLowerCase() */
// let firstName = "LAKSHAY"
// console.log(firstName);
// // firstName = firstName.toLowerCase();
// console.log(firstName.toLowerCase());

/* 4) slice(start index,end index) - it will give string till end_index-1  */
// let firstName = "lakshay";
// // firstName = firstName.slice(0,5);  //op - laksh
// firstName = firstName.slice(2); // give str start from given idx till end
// // op - kshay
// console.log(firstName);