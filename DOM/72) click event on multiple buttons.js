// click event on multiple buttons

const allButtons = document.querySelectorAll("button");
// we use loop to apply event on all the buttons
allButtons.forEach((button) => {
    button.addEventListener("click", function(){
        // console.log(button.textContent);
        console.log(this.textContent);  
        // we can also show button textContent using this as this = button here
    });
});