// let myName = "su su"

// class MySelf

// my-name 

// my_name

// let a = 10
// let sum = a + 5

// let name = "mg mg"; 
// let age = 20;

// let sum                   =   5 +               9

// var let const 
// var , let different => scope,hoist,redeclare
// SCOPE 

// {
//     let x = 10
//     var x = 10
// }
// console.log(x);


// HOIST 

// let x = 10
// console.log(x);
// var x = 10

// var x = 10
// console.log(x);


// REDECLARE

// let x = 10
// let x = 5
// console.log(x);

// var x = 10
// var x = 15
// console.log(x);

// scope => let no | var yes
// hoist => let no | var yes undefined
// redeclare => let no | var yes

// let const different 
// declare | assign | reassign 

// let x
// x = 10
// x = 20
// console.log(x);

// const y = 15
// y = 20
// console.log(y);

// let myName = "aung aung"
// let MyName = "su su"

// console.log(myName);
// console.log(MyName);


// STRING 
// let myName1 = "su su"
// let myName2 = 'aung aung'
// // i'm su su 
// // let name = "i'm su su"

// // my laptop is 4"
// // let laptop = 'my laptop is 4"'
// let laptop = "my laptop is 4\""

// // template string 
// // my height is 5'4"
// let height = `my height is 5'4"`
let name = `i'm ${2 + 3}`
// console.log(name);


// ARRAY 
// const fruits = ["apple","orange","banana"]
// fruits[0] = "mango"
// console.log(fruits[0]);
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits = 20
// console.log(fruits);

// const fruits =[ ]
// fruits[0] = "apple"
// fruits[1] = "watermelon"
// fruits[2] = "orange"
// fruits[10] = "lemon"
// console.log(fruits);


// OBJECT 


// console.log(student.name);
// console.log(student["name"]);

// console.log(student.age);
// console.log(student["age"]);

// console.log(student.skills);
// console.log(student.skills[0]);
// console.log(student.skills[1]);
// console.log(student.skills[2]);

// console.log(student["skills"][0]);
// console.log(student["skills"][1]);
// console.log(student["skills"][2]);

// const obj = {}
// obj.aa = "aa"
// obj.bb = "bb"
// obj["cc"] = "cc"
// console.log(obj);

// declare | assign | overwrite
// let x = 10
// let x = 5
// x = 15

// student = 90

const student = {
    name: "mg mg",
    age: 22,
    skills: ["html","css","js"]
}

student.name = "mama"

console.log(student);

