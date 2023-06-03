//  lexical scope

// we declare myvar in 2 places and call it in myFun().
// first js check for nearest lexical environment which for variable if found 
// then simply set it's value to vla3, but if not found in it's nearest lexical
// environment then check in its higher lexical environment and so on.

function myApp(){
    const myVar = "value1";

    function myFunc(){
        // const myVar = "vla3";
        console.log("inside myfunc", myVar);
    }
    console.log(myVar);
    myFunc();
}

myApp();

