// this keyword inside eventListener callback

const btn = document.querySelector(".btn-headline");

// in case of anonymous func , value of this = button itselt
// btn.addEventListener("click",function(){
//     console.log("u clicked me !!")
//     console.log("value of this", this);
// });

// but in case of arrow func, value of this = window
btn.addEventListener("click",() => {
    console.log("u clicked me !!")
    console.log("value of this", this);
});