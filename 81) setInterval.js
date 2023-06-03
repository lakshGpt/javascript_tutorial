// setInterval - it also gives an id

// console.log("script start");
// //  setInterval(()=>{
// //     console.log(Math.ceil(Math.random()*10));
// //  },1000)
// console.log("script end");


/* practical example */
const body = document.body;
const button = document.querySelector("button");
// console.log(body);
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = rgb;
    // console.log(rgb);
},1000)

// console.log(intervalId);
button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent = body.style.backgroundColor;
});