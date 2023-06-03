// static vs live list
/* querySelectorAll always gives static node list i.e the result shows on 
screen but not on console whereas 
getElementsBy{Something} always gives live list */


// const list = document.querySelectorAll(".todo-list li");
const list = document.getElementsByClassName("todo-list");
// const todo = document.querySelector('.todo-list');
const todo = document.querySelector('.todo-list');
const sixLi = document.createElement('li');
sixLi.textContent = "item 6";
todo.append(sixLi);
console.log(list);