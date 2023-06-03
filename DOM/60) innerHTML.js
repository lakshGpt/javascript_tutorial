// innerHTML - it gives us inner html content of an element tag 

// example - html inside header tag is it's innerHTML

const headline = document.querySelector(".headline")
// console.log(headline.innerHTML)

// we can also change this innerHTML
headline.innerHTML = "<h1>Inner html changes</h1>"
headline.innerHTML += "<button class='btn'> Learn More</button>"
console.log(headline.innerHTML);