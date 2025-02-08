// window => browser ta khu lone
// document => web page ta khu lone
// console => console htote kyi tae ta khu lone
console.log(window);
console.log(document);
console.log(console);

// 1 => clg
console.log("testing");
// clear nat console ko shin lox ya
console.clear();

// 2 + 3 => code nat pl yay khe ya
// const x = 2
// const y = 7
// const result = x + y
// console.log(result)

// 2 => window
// browser ka nay input htae pee twat
const x = window.prompt("input first number");
const y = window.prompt("input second number");
const result = parseFloat(x) + parseFloat(y);
console.log(result);
window.alert(`your result is ${result}`);

// birth year
const age = window.prompt("your age");
const birthYear = 2025 - parseInt(age);
console.log(birthYear);
window.alert(`your birth is ${birthYear}`);

// confirm => boolean pyan
const result2 = window.confirm("ser pp lar");
console.log(`${result2 ? "ser pp" : "ma ser ya ty buu"}`);

// DOM
console.log(document.body);
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("input"));
console.log(document.getElementsByTagName("button"));

// select an element
const heading = document.getElementById("heading");
const textInput = document.getElementById("textInput");
const btn = document.getElementById("btn");
const listGroup = document.getElementById("listGroup");

console.dir(heading);
console.log(textInput);
console.log(btn);
console.log(listGroup);

// get innerText
console.log(heading.innerText);
console.log(heading.innerHTML);

console.log(btn.innerText);
console.log(btn.innerHTML);

// get innerHTML
console.log(listGroup.innerText);
console.log(listGroup.innerHTML);

// input text => clg hmr san
console.dir(textInput.value);

// input number => string htwat lox valueAsNumber nat htote
console.dir(textInput.valueAsNumber);

// input date => string htwat lox valueAsDate nat htote => date obj ya
console.dir(textInput.valueAsDate);
console.dir(textInput.valueAsDate.getDay());

// input file => files ko u
console.dir(textInput.files);

// set text
const obj = {
  a: "aa",
  b: "bb",
};
obj.a = "cc"
console.log(obj.a)

heading.innerText = "haha";
textInput.value = "change value"

// get , set , clear
function changeTitle() {
  heading.innerText = textInput.value;
  textInput.value = "";
}

// event
// property
btn.onclick = function(){
    console.log("click")
};
btn.onclick = changeTitle;

// method
btn.addEventListener("click", changeTitle);

// html htl event htae ll ya
{
  /* <button id="btn" onclick="changeTitle()">click</button> */
}


console.log(window)
console.log(window.console)
console.dir(window.document)

console.log(document.getElementsByTagName('  '))