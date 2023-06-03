// get multiple elements using getElementsbyClassName
// get multiple elements usng querySelectorAll

const allNavItem = document.querySelectorAll(".nav-item");  //NodeList
const allNavItem1 = document.getElementsByClassName("nav-item");    //HTMLCollection
console.log(allNavItem);
console.log(allNavItem1);

// htmlcollection is array like object i.e it has length and index 
