/* js render the page according to html content but we can't se new line & spaces
because by default js set white-space propert as normal 
if we change normal to pre of white-space then we can se all NS & spaces*/


// const rootNode = document.getRootNode();
// console.log(rootNode);

// // all the childnodes will stored in NodeList
// console.log(rootNode.childNodes);   
// // console.log(htmlElementNode.childNodes);    //NodeList(3) [head, text, body]
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.parentNode); 

// // child nodes of html
// const headElementNode = htmlElementNode.childNodes[0]
// const textNode = htmlElementNode.childNodes[1]
// const bodyElementNode = htmlElementNode.childNodes[2]
// console.log(headElementNode)
// console.log(textNode)
// console.log(bodyElementNode)

// sibling relation
// console.log(headElementNode.nextSibling);   //text
// console.log(headElementNode.nextSibling.nextSibling);       //body

// next sibling element node and ignore ns 
// console.log(headElementNode.nextElementSibling);    


/* we need to change the color and bgcolor of parent of h1 heading */
// const heading = document.querySelector('h1');
// const parentHeading = heading.parentElement;
// parentHeading.style.backgroundColor = "yellow";
// parentHeading.style.color = "red";


/* selecting body directly */
// const body = document.body;
// console.log(body);

 /* children property: it gives all the child of selected element node 
 except new line and spaces */
 const head = document.querySelector("head");
 console.log(head.children);        // it gives html collections
