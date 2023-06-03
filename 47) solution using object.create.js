// from 46
// prob - if we want to add more methods in userMethods then we also have
// to update it in createUser func which is complex work
// solution - we use object.create to create user object in createUser
// using userMethod so that no need to update any changes in createUser

const userMethods = {
  about() {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18() {
    return this.age >= 18;
  },
  song() {
    return "rehna hai tere dill me";
  },
};

function createUser(firstName, lastName, age, address) {
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.address = address;
  return user;
}

const user1 = createUser("naina", "gutpa", 20, "mrp new delhi");
console.log(user1.song());
console.log(user1.about());
console.log(user1.is18());

/* ------------------------------------------------------------------- */
// creat obj using object.create
// we want tha JS checkout of the key firstly in obj2 and if not found
// obj2 then check it in obj1 and this is done using object.create
const obj1 = {
  key1: "val1",
  key2: "val2",
};
// object.create return {}
const obj2 = Object.create(obj1);
obj2.key3 = "val3";
// console.log(obj2.key1);     //return val1
// console.log(obj2);
// console.log(obj2.__proto__);    //return an proto object

// working - obj2 has __proto__ / [[prototype]] which contain obj1
// so when js doesn't get any key in obj2 then it chek in obj1
// prototype and __proto__ / [[prototype]] are different
