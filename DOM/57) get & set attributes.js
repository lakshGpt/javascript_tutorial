// get & set attribute
/* all the properties of an element are it's attribute */
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1)); // getting attribute value
// link.setAttribute("href","https://www.google.co.in");      // setting attribute value
// console.log(link.getAttribute("href")); 

const getType = document.querySelector('.form-todo input');
console.log(getType.getAttribute("type"));