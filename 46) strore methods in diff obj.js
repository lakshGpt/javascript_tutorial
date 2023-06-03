// from 45

// prob - if we have 1mn users then these users also have 1mn funtions which will
// get stored in memory 
// solution - to solve this prob we put these repetitive funcs in an separate
// obj and store there references in main func

const userMethods = {
    about () {
        return `${this.firstName} is ${this.age} years old.`;
      },
      is18 () {
        return this.age >= 18;
      },
}

function createUser(firstName, lastName, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.address = address;
// storing refernces of above methods so that they will created only once
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
};

const user1 = createUser("naina", "gutpa", 20, "mrp new delhi");
console.log(user1.is18());