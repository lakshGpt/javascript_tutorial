// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(url) - it return promise on which we can apply .then

// console.log(fetch(URL));    // Promise {<pending>}
/* in case of promise rejection in response we get OK:false */
// fetch(URL)
// .then(respone => {
//     // console.log(respone);   // it will give meta-data but not fetched data
//     if(respone.ok){
//         console.log("inside then");
//         return respone.json();    // json() will also give promise
//     }else{
//         throw new Error("something went wrong");
//     }
// })
// .then(data => {     // this promise resolve to give the fetched data
//     console.log(data);
// })
// .catch(error => { 
//     /* in case of fetch(url) catch will run only in cases of network 
//     fails and not in case of 404 */
//     console.log("inside catch");
//     console.log(error);
// })


// posting data
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({      // stringify() - convert json into string
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then(respone => {
    // console.log(respone);   // it will give meta-data but not fetched data
    if(respone.ok){
        console.log("inside then");
        return respone.json();    // json() will also give promise
    }else{
        throw new Error("something went wrong");
    }
})
.then(data => {     // this promise resolve to give the fetched data
    console.log(data);
})
.catch(error => { 
    /* in case of fetch(url) catch will run only in cases of network 
    fails and not in case of 404 */
    console.log("inside catch");
    console.log(error);
})