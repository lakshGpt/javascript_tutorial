// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// event bubbling
/* in bubbling, eventListener call from younger to elder or child to body */
/* now whenever we click on child then both event listener will call becoz 
js check when click on child takes place then any event listener is apply
on parent or not if yes then js will also call parent's event listeners */

// child.addEventListener("click", () => {
//   console.log("u clicked on child");
// });
// parent.addEventListener("click", () => {
//   console.log("u clicked on parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("u clicked on grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("u clicked on body");
// });


// event capture - these event are captured in which 3rd argument is true
/*in capture, eventListener call from elder to younger or body to child 
opposite to bubbling */

// child.addEventListener(
//   "click",
//   () => {
//     console.log("captured !!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("captured !!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("captured !!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("captured !!! body");
//   },
//   true
// );

// // not captured events - 3rd argument is false
// child.addEventListener("click", () => {
//   console.log("u clicked on child");
// });
// parent.addEventListener("click", () => {
//   console.log("u clicked on parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("u clicked on grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("u clicked on body");
// });


// event delegation 
/* here event listener is applied on grandparent but if we click on child
then that event will also call for child becoz of bubbling */
const grandparent = document.querySelector(".grandparent");
// grandparent.addEventListener("click",()=>{
//     console.log("u clicked something !!!");
// })

/* benefit of event delegation - we only need to add event listener on 
any one of element and we can still call that event for different child
 of it by using the target propert of event */
 grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent);      
    // this will give element and it's children text content
 })

