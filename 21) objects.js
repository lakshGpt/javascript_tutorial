// objects - reference type
// to fullfill real world data purpose we need to use objects along with arrays
// objects store key-value pairs
// objects don't have index

/* creating an object */
// key is also called property of an object
// key is by default in string in js
// const person = {
//     name:"Abhi",
//     age:22,
//     hobbies:["guitar","sleeping","music"]
// };
// console.log(person);
// console.log(typeof person);


/* accessing the data from objects */
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
// for(let i=0;i<person.hobbies.length;i++)console.log(person.hobbies[i]);


/* adding k:v pair in object */
// person.gender = "male";
// console.log(person)

/* bracket notation to add and accessing the data */
// accessing the data
// console.log(person["name"]);
// console.log(person["age"]);

// // adding the data
// person["gender"] = "male";
// console.log(person)


/* difference between dot and bracket notation */
// if we want to add key which have multiple words and separated by commas
// then write that key into a String

// const key = "email" //situation: we need to add a k:v where key is this one
// const person = {
//     name:"Abhi",
//     age:22,
//     "person hobbies":["guitar","sleeping","music"],
// };

//  in this case for accessing the multiple words key then we use bracket notation
// console.log(person["person hobbies"])

// person[key] = "guptalakshay104@gmail.com";  
// if we use . notation in above situation then key is key so avoid this we use 
// [] notation without string
// console.log(person);


/* iterating objects */
//  1) for in loop - we can't use . notation for accessing value in for in loop
//  it gives undefined for . notation
// for (const key in person) {
//     // console.log(`${key}: ${person[key]}`);
//     console.log(key," : ",person[key]);
// }

//  2) object.keys - gives array of all keys 
// console.log(typeof Object.keys(person));   
// for(let val of Object.keys(person))console.log(person[val]);


/* computed properties */
//  create an object using computed values
// const key1 = "objk1";
// const key2 = "objk2";

// const val1 = "myval1";
// const val2 = "myval2";

// //  1)
// const obj = {
//     [key1]:val1,
//     [key2]:val2,
// };

// 2)
// const obj = {};
// obj[key1] = val1;
// obj[key2] = val2;

// console.log(obj);

/* spread operators in objects */
const person = {
    name:"Abhi",
    age:22,
    "person hobbies":["guitar","sleeping","music"],
};
const person2 = {
    name:"naina",
    age:23,
    "person hobbies":["piano","sleeping","music"],
};
// const person3 = {...person,...person2, key69:"val69"};   // adding new key while using spread operator
// values of person2 will overwrite values of person

// it will create k:v pair in which k=index and v=value at index
// const newObj = {..."abc"};      //{0: 'a', 1: 'b', 2: 'c'}
// const newObj = {...['it1','it2']};      //{0: 'it1', 1: 'it2'}
// console.log(newObj);


/* object destructuring */
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1986,
    lyricist: "lakshay gupta"
};

// first 2 values will allocated to first 2 variables and then remaining
// values will stored in new object called details
// const {bandName, famousSong, ...details} = band;
// console.log(bandName);
// console.log(famousSong);
// console.log(details);

// making another variables to store same values
// const {bandName:var1, famousSong:var2, ...details} = band;
// console.log(var1);
// console.log(var2);

