/* task - whenever we click on any button its background color get change 
and the color will be anyone */

const mainButton = document.querySelector("button");
const body = document.body;
const changeColor = document.querySelector(".current-color");
// console.log(mainHeading);

/* to generate random number we use math.random() which will produce num from [0,1)
    to get integer value we use math.floor(math.randon())
    and as we know all 3 val of rgb lie from 0-255 
    so our formula becomes math.floor(math.random()*256) --- [0,256) */
const randomColorGenerator = () => {
    const red =  Math.floor(Math.random()*256);
    const green =  Math.floor(Math.random()*256);
    const blue =  Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor
}

mainButton.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor; 
    changeColor.textContent = randomColor;
    console.log(randomColor);
})