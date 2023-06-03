// object inside array - very useful in real world application

const users = [
    {userId: 1,firstName: 'lakshay',gender: 'male'},
    {userId: 2,firstName: 'naina',gender: 'female'},
    {userId: 3,firstName: 'abhi',gender: 'male'},
]

console.log(users);
// showing user using for-of loop
for(let user of users)console.log(user);

// showing user details using object destructuring
for(let user of users){
    const {userId, firstName, gender} = user;
    console.log(userId, firstName, gender);
}
