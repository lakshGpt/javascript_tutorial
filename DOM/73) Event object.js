// event objects

// we can use arraw functions with this in event listeners by accepting an
// object as parameter in function

const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {   
        // this event obj is provided by browser   
        // to main values of event obj are target & currentTarget
        // console.log(event.target);      
        console.log(event.currentTarget);      
    });
});