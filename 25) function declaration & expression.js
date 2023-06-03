/*-----------------functional declaration ---------------------- */

// function singHappyBirthday() {
//     console.log("happy bday to u .....");
// }
// singHappyBirthday();

/* 2+4 func */
// function twoPlusFour() {
//     return 2+4;
//     // console.log(`${2}+${4} = ${2+4}`);
// }

// console.log(twoPlusFour());


/* adding 2 numbers */
// function sum2Nums(var1,var2){
//     console.log(var1+var2);
// }

/* adding 3 num */
// function sum3Nums(var1,var2,var3){
//     console.log(var1+var2+var3);
// }
// sum3Nums(3,10,20);

/* odd or even */
// function trueOrFalse(var1) {
//     return var1%2===0;
// }
// console.log(trueOrFalse(10))

/* return first char of string */
// function fstChar(str) {
//     return str[0];
// }
// console.log(fstChar("lakshay"));

/* linear searching of a target */
// function searching(arr,target){
//     for(let i=0;i< arr.length;i++){
//         if(arr[i]===target)return i;
//     }
//     return -1;
// }
// console.log(searching([1,2,3,44],5));

/*----------------------- function expression ----------------------- */
/* add 2 nums */
// const add2Sum = function(var1,var2){
//     return var1+var2;
// }

/* add 3 nums */
// const add3Sum = function(var1,var2,var3){
//     return var1+var2+var3;
// }
// console.log(add3Sum(10,12,15));

/* linear search of a target */
const searching = function(arr,target){
    for(let i=0;i<arr.length;i++){
        if(target===arr[i])return i;
    }
    return -1;
}
console.log(searching([1,2,3,4,5],0));

