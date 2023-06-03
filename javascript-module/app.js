import { firstName } from "./utils/fname.js";
import { age } from "./utils/age.js";
import {Person} from "./utils/person.js"

// console.log(firstName,age)

const person = new Person("abhi","gupta",24);
console.log(person);
(person.info())