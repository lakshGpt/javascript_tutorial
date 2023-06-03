// maps
// maps are iterable
// store data in ordered form 
// story K:V 
// duplicate keys are not allowed

// difference between maps and objects 
// objects can obly have string or symbols as key
// maps have key like array, number, string

const person = new Map();

// adding elements to map
person.set('firstName','abhi');
person.set('lastName','gupta');
person.set([1,2,3],'123');
person.set({1:'1',2:'2'},'obj');
person.set(1,'age');        // here key is stored as number
// console.log(person); 

// accessing elements of map
// console.log(person.get('firstName'));

// printing all the keys
// console.log(person.keys());

// for-of loop
// method1 - direct on map
for(let [k,v] of person)console.log(k,v);

// method 2 - using person.keys()
// for(let x of person.keys())console.log(person.get(x), typeof x);