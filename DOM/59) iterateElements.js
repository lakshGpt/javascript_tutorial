// iterate elements
// getElementsByTagName -> gives HTMLCollection


/* we can't use forEach method to iterate through HTMLCollection but
we can use simple for loop, for of loop */
// let navItems = document.getElementsByTagName("a");
// console.log(navItems);
// we want to change the color and bgcolor of all navitem's anchor tag
// simple for loop
// for(let i=0;i<navItems.length;i++){
//     navItems[i].style.color = "pink";
//     navItems[i].style.backgroundColor = "white";
//     navItems[i].style.fontWeight = "bold";
// }

// for of loop
// for(let item of navItems){
//     item.style.color = "green";
//     item.style.backgroundColor = "yellow";
//     item.style.fontWeight = "bold";
// }

// to use forEach method on html collection we need to convert it into an array
// navItems = Array.from(navItems);
// // forEach method
// navItems.forEach(item => {
//     item.style.color = "green";
//     item.style.backgroundColor = "yellow";
//     item.style.fontWeight = "bold";
// });

/* querySelector - we can use simple for loop, for of loop and forEach loop 
with it */

let navItems = document.querySelectorAll('a');
navItems.forEach(item => {
    item.style.backgroundColor = "white"
    item.style.color = "red"
})

// changing nodelist into array
navItems = Array.from(navItems)
// console.log(Array.isArray(navItems))