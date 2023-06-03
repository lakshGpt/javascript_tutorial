/* nested destructuring */

const users = [
    {userId: 1,firstName: 'lakshay',gender: 'male'},
    {userId: 2,firstName: 'naina',gender: 'female'},
    {userId: 3,firstName: 'abhi',gender: 'male'},
]

/* 2 basic method of destructuring */
// const[user1,user2,user3] = users;
// const [{...user1},{...user2},{...user3}] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

// now we want userid of user1 , firstname of user2, gender of user3
const [{userId},{firstName},{gender}] = users
console.log(`${userId}, ${firstName}, ${gender}`);