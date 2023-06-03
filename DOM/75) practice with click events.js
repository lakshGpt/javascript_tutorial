// click event practice

/* prac 1 - click on any button and it's background color change to yellow
and text color changes to grey */

const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.addEventListener("click",(e)=>{
        e.target.style.background = "yellow";
        e.target.style.color = "grey";
    })
    // button.style.background = "yellow";
    // button.style.color = "grey";
})