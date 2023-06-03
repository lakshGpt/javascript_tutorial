
// creating element using createElement
// const newTodoItem = document.createElement('li');
// // const newTodoItemText = document.createTextNode('Teach Students');

// /* instead of creating new textNode we use textContent due to which there
// is no need to append any textNode into it's parent */

// newTodoItem.textContent = "teach students";
// const todoList = document.querySelector(".todo-list");
// // newTodoItem.append(newTodoItemText);
// // todoList.append(newTodoItem);       // it will add the child in last
// todoList.prepend(newTodoItem);       // it will add the child in starting
// console.log(newTodoItem);

/* removing an element */
// const todo1 = document.querySelector(".todo-list li");
// console.log(todo1.textContent);
// todo1.remove();                       

/* inserting an element  */
// before an element
const newTodoItem = document.createElement('li');
const todoList = document.querySelector(".todo-list");
newTodoItem.textContent = "teach students";
// todoList.before(newTodoItem);       // inserting before todo list

// after an element
// todoList.after(newTodoItem);        // inserting after todo list