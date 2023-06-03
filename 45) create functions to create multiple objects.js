const user = {
  firstName: "abi",
  lastName: "gupta",
  email: "lfkjlk@gmail.com",
  age: 22,
  address: "MRP new delhi",
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

// if we have large amout of users then instead of hardcode we use a func
// that return an obj
function createUser(firstName, lastName, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser("naina", "gutpa", 2, "mrp new delhi");
console.log(user1.is18());
