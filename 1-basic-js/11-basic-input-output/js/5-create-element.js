{/* <h1>Create element</h1> */}
const body = document.querySelector("body")
const heading = document.createElement("h1")
heading.innerText = "Create element"

body.append(heading)
console.log(heading);