// keypress event 

const body = document.body;
// body.addEventListener("keypress", (e)=>{
//     console.log(e.key);
// })

// mouseover event
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover",(e)=>{
    // console.log(e);
    e.target.style.backgroundColor = "pink";
});

// mouseleave event
mainButton.addEventListener("mouseleave", (e)=>{
    e.target.style.backgroundColor = "white";
});
