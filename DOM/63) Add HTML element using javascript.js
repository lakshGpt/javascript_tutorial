// adding html element to the page

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
todoList.innerHTML += "<li>New Todo</li>";

/* we should not use innerHTML to add new elements because along with new
elements it render previous elements as well again & again, thus we should
use innerHTML if we want to change the innerHTML of any page */

