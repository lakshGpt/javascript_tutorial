// this keyword - it will give window object .
// this and window considered as same
// console.log(this);
// console.log(window);


function myfunc(){
    "use strict"
    console.log(this);     
}

// window.myfunc();    // it will give window obj
myfunc();    // it will give undefined after using use strict