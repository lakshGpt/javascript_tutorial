// callbacks, callback hell, pyramid of doom

/* we have to change the text and color of all the heading after every
1 second */

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// callback hell - becoz of this heavy nesting
// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// now we do above work using a function
const changeText = (element, text, color, time, onSuccess, onFailure) => {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if(onSuccess){
        onSuccess();
      }
    } else{
        if(onFailure){
            onFailure();
        }
    }
  }, time);
};


// pyramid of doom
changeText(heading1,"one","violet",1000, ()=>{
    changeText(heading2,"two","purple",1000,()=>{
        changeText(heading3,"three","red",1000,()=>{
            changeText(heading4,"four","green",1000,()=>{
                changeText(heading5,"five","blue",1000,()=>{
                    changeText(heading6,"six","pink",1000,()=>{
                        changeText(heading7,"seven","brown",1000,()=>{                    },()=>{console.log("heading7 not exist")})
                    },()=>{console.log("heading6 not exist")})
                },()=>{console.log("heading5 not exist")})
            },()=>{console.log("heading4 not exist")})
        },()=>{console.log("heading3 not exist")})
    },()=>{console.log("heading2 not exist")});
},()=>{console.log("heading1 not exist")});