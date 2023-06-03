// xhr practice & error handling 

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET",URL);

xhr.onload = ()=>{
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        // console.log(data);
        
        // getting post of id = 4
        const id = data[3].id;
        console.log(id );
        const xhr2  = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2)
        xhr2.open("GET",URL2);
        xhr2.onload = ()=>{
            console.log(JSON.parse(xhr2.response));
        }
        xhr2.send();
    }else{
        console.log("something went wrong");
    }
}

// onerror runs whenever our website is having any internet problem
//  or is having any server connection problem
xhr.onerror = () => {
    console.log("network error")
}

xhr.send();