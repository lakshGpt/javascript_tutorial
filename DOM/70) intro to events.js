// intro to events
/* eg - jab user kisi button pr click kre to koi action perform ho */

/* 3 different ways to add events */

// method 1 - using event directly in html element. (not much in use)
// for e.g - adding onclick attribute inside "learn more" button


// method 2 - by selecting element using js (not recommendable becoz we cant assign click event more than 1 time)
const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("you clicked me !!!!!!!!");
// }


//  method 3 - by using addEventListner
function clickMe(){
    console.log(3);
}
// 2 parameters of addEventListener = event which we want perform on it, 
// function which will going to perform

// btn.addEventListener("click", clickMe);

// or we can write clickMe direclty in addeventlistener
// btn.addEventListener("click",function(){
//     console.log("make me happy !!!!! ");
// })

// using arraw function
btn.addEventListener("click",()=>{
    console.log("make me happy !!!!! ");
})