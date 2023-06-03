const user1 = {
  firstName: "abhi",
  age: 20,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// const myfunc = user1.about; // we r passing refernce of about to myfunc
// but not binding it  so it gives undefined

const myfunc = user1.about.bind(user1);
myfunc();     
