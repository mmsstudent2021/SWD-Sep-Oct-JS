const heading = document.getElementById("heading")
const h3 = document.getElementsByTagName("h3")
const headingThree = document.getElementsByClassName("heading-three")
console.dir(heading);
console.dir(h3);
console.dir(headingThree);

// tag h3,#id,.class 
const heading3 = document.querySelectorAll(".heading-three")
const h1 = document.querySelectorAll("#heading")
console.dir(heading3);
console.dir(h1[0]);

const heading3query = document.querySelector(".heading-three")
const listALl = document.querySelectorAll(".list")
const list = document.querySelector(".list")
console.dir(list);


// id => element 1 khu pl select 


// tag , class => element a kone select / HTMLCollection nat pya / foreach pat ma ya 

// querySelectorAll (tag,#id,.class) => element a kone select / nodeList nat pya / foreach pat lox ya 
// querySelector (tag,#id,.class) => element 1 khu pl htote pya  