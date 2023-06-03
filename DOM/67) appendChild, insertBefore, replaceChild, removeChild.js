// some old methods to sipport poor Internet explorer
// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const li = document.createElement('li');
li.textContent = "new task";
// li.appendChild(ul);

// insertBefore - it takes reference to the node before which we have to insert
const refernce = document.querySelector('.todo-list li');
// ul.insertBefore(li,refernce);

// replaceChild - it replaces the child of same parent using reference of current child
// ul.replaceChild(li,refernce);


// removeChild - it will remove the referenced child
ul.removeChild(refernce);