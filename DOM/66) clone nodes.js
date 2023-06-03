// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement('li');
li.textContent = "new todo";
// to prepend and append same node simultaneausly we make clone of that node
const li2 = li.cloneNode(true);     
/* here 'true' shows 'deep cloning' which means that text of childnode will
also get cloned and gives proper result */
ul.prepend(li2);
ul.append(li);