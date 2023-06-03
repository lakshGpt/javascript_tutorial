// getElementbyId - it will return an object which is present in DOM
// getElementbyId will only work for id
// console.log(document.getElementById('main-heading'));



// querySelector
// querySelector will work for id as well as classes
// console.log(document.querySelector('#main-heading'));
// console.log(document.querySelector('.header'));

/* if more than one element is having one class and if we use querySelector
then it will return first element have that class */
console.log(document.querySelector('.form-group'));



// querySelectorAll
/* it will return a node list of all the element having same class */
console.log(document.querySelectorAll('.form-group'));
console.log(document.querySelectorAll('.form-group').length);