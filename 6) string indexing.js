// string indexing

let firstName = "lakshay"

// l a k s h a y
// 0 1 2 3 4 5 6

// length of string
console.log(firstName.length)

for (let index = 0; index < firstName.length; index++) {
    console.log(`${index} : ${firstName[index]}`);
}

// finding last index
console.log(firstName.length-1);