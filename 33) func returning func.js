// function returning function

function myFunc(){
    return hello = () => {     // instead of const directly use return
        console.log("hello world");
    }
    // return hello;
}

const ans = myFunc();   // now the ans contains hello and we can call hello();
ans();

// higher order function - when we either accept func() as parameter or return
// func() or doing both 