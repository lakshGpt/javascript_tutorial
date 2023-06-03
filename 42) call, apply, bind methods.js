/* call */

function about(hobby, musician) {
  console.log(this.firstName, this.age, hobby, musician);
}

const user1 = {
  firstName: "abhi",
  age: 20,
  //   about: function () {
  //     console.log(this.firstName, this.age);
  //   },
  //   about: function (hobby, musician) {
  //     console.log(this.firstName, this.age, hobby, musician);
  //   },
};

const user2 = {
  firstName: "naina",
  age: 22,
};

// prob - now user2 want to access the about method of user1
// sol - to do this we use call
// user1.about.call(user1);    // also call user1 about
// user1.about.call(user2);    // call user2
// user1.about.call();         // gives undefinded undefined
//inside call() we can specify the val of this, here it is user2

// user1.about.call(user2,"guitar","arijit singh")

// using call for global function
// about.call(user1,"singing","sonu nigam")

/* bind */
// in bind we pass argument separatly but bind return a function which we
// can call later
const func = about.bind(user2,"dance","md. raffi");
func();

/* apply */
// apply is same as call but istead of passing argument separatly we pass
// a list/array of those arguments
// about.apply(user2,["singing","kishore kumar"])
