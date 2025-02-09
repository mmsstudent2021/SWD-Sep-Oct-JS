// Dom Manipulate 
// html => js obj phit lr / thu htl ka attribute, id, class, style => js prperty phit lr 
const domElement = document.querySelector("#domObj")    
console.dir(domElement);
console.log(domElement.id);
console.log(domElement.className);
console.log(domElement.classList);
console.log(domElement.title);
console.log(domElement.style);
domElement.style.color = "blue"
domElement.style.fontSize = "50px"
console.log(domElement.style.color);

// CLassList 
console.dir(domElement.className);
console.dir(domElement);
domElement.classList.add("aa","bb","cc")
domElement.classList.remove("bb")
domElement.classList.replace("aa","zz")
domElement.classList.toggle("zz")
domElement.classList.toggle("zz")
console.log(domElement.classList);

// Pratical 
// const domElement = document.querySelector("#domObj")
const addBgColorBtn = document.querySelector("#addBgColorBtn") 

addBgColorBtn.onclick = () => {
    console.log("object");
    domElement.style.backgroundColor = "black"
}


const box = document.querySelector(".box")
const toggleBtn = document.querySelector("#toggleBtn")

toggleBtn.onclick = () => {
    box.classList.toggle("hidden")
}


const skills = document.querySelectorAll(".btn")
const count = document.querySelector("#count")
console.log(count);
skills.forEach((skill) => {
    // console.log(skill);
    skill.onclick = () => {
        skill.classList.toggle("gray")
        const skillCount = document.querySelectorAll(".btn.gray")
        console.log(skillCount);
        count.innerText = skillCount.length
    }
})
console.log(skills);

// Attribute 
const a = document.querySelector("a")
a.href = "https://youtube.com"
console.log(a.href);

// getAttributes
// setAttributes
// removeAttributes

console.log(a.getAttribute("href"));
a.removeAttribute("target")
a.setAttribute("target","_blank")
console.log(a.getAttribute("target"));

const img = document.querySelector("img")
console.log(img.src); 
console.log(img.getAttribute("src"));