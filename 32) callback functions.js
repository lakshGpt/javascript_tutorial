// callback function - those func2 which pass as a paramerter in func 
// and call inside func

function myFunc2(){
    console.log("inside myFunc 2");
}

// myfunc is a callback func
function myFunc(callback){
    // console.log(callback);
    callback();
}

myFunc(myFunc2)
