// synchronous vs asynchronous programming

/* synchronous prog - in this code is run line by line or on work at a time.
In this programming, if any work is taking longer time then it'll block the
further code */

// js is a synchronous programming and single threaded language.

// setTimeout
console.log("script start");
// function hello(){
//     console.log("Hello world!");
// }
// setTimeout is func that take a func and time(minimum time
//  delay in millisec) required after which that input func runs.
// setTimeout(hello, 1000);    

// the setTimeout() gives an id
const id = setTimeout(()=>{        // with arrow function
    console.log("inside setTimeout");
}, 0);

for(let i=1;i<100;i++)console.log("....");
console.log("settimeout id is", id);
console.log("clearing time out");
clearTimeout(id);       // this will terminate the execution of settimeout
console.log("script end");

/* setTimeout is api provided by browser so whenever setTimeout calls it 
will first go to browser so that browser will return that callback func
after t ms time. after t ms that callback func passes to a callback queue
and then it ask to event loop whether the GEC is empty or not for execution 
of callback in queue. if GEC is empty then event loop will pass the func
to GEC for execution else funct will held in queue.
In short the setTimeout will execute after all javascript code run. */

