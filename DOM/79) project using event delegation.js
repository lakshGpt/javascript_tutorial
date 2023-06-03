const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");  // ul
// todoForm.addEventListener("submit",(e)=>{
//     // console.log("submit");      // it refreshing the page on click submit or press enter
//     // to avoid this we use preventDefault
//     e.preventDefault();
//     console.log("submit");
// })

// using event delegation to use done n remove button
todoList.addEventListener("click",(e)=>{
    // check if user clicked on done button
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    }
})

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
    `
    newLi.innerHTML = newLiInnerHtml;
    todoList.appendChild(newLi);
    // console.log(newLi);
    todoInput.value = "";
})


/* --------- additional work ------------- */
const logoHeading = document.querySelector(".logo");
logoHeading.addEventListener("mouseover",(e)=>{
    e.target.style.color = "yellow";
});

logoHeading.addEventListener("mouseleave",(e)=>{
    e.target.style.color = "white";
});

