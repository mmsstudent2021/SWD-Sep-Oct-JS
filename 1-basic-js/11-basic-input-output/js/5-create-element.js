{/* <h1>Create element</h1> */}
const body = document.querySelector("body")
const heading = document.createElement("h1")
heading.innerText = "Create element"
body.append(heading)
// console.log(heading);

// body > div > img1,img2 
const div = document.createElement("div")
const img1 = document.createElement("img")
img1.setAttribute("src","./images/poe-mamhe-thar-3.jpeg")
img1.setAttribute("width",200)

// const img2 = document.createElement("img")
const img2 = new Image(200)
img2.setAttribute("src","./images/poe-mamhe-thar-3.jpeg")
// img2.setAttribute("width",200)

div.append(img1)
div.append(img2)
body.append(div)


// body > p 
const p = document.createElement("p")
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae nulla quisquam similique ipsam. Consequatur sed optio debitis dolorum perferendis ex, exercitationem ipsam, blanditiis ducimus corporis voluptates, fugiat dolores officia?"
// console.log(p);


// body > ul > li 
const ul = document.createElement("ul")
const createLi = (text) => {
    const li = document.createElement("li")
    li.innerText = text
    return li
}
ul.append(createLi("apple"))
ul.append(createLi("orange"))
ul.append(createLi("mango"))


// append => body out ka htae
// prepend => body a paw ka htae 
// body.prepend(ul)
// body.prepend(p)

// before => element yae a paw
// after => element yae out 
div.before(ul)
ul.after(p)

// remove => element delete
p.remove()

// list ta khu lone pyat 
// ul.remove()

// removeChild => child ta khu pl yway remove
// console.log(ul.children[1]);
ul.removeChild(ul.children[1])