// for , for of , for in 
// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// console.log("*");
// console.log("* *");
// console.log("* * *");

// for(let i = 1; i <=5; i++){
//     // console.log(i);
//     console.log("*");
//     console.log("* *");
//     console.log("* * *");
// }

// for(
//     let i = (function () {
//         console.log("first Statement => i = 1");
//         return 1
//     })(); 
//     (function () {
//         let condition = i <= 10
//         console.log("second statement => i <= 10", condition);
//         return condition
//     })(); 
//     (function(){
//         console.log("third statement => i++");
//         return i++
//     })()){
//     console.log(i , "code block");
// }

// break = stop 
// continue = skip 

// for(let i = 1; i <=10; i++){
//     if(i == 8 || i == 2) continue;
//     console.log(i);
//     // if(i == 8) break;
// }



// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[2]);
// console.log(fruits[2]);
// console.log(fruits[2]);
// console.log(fruits[2]);

// 1 < 10
// for | for of | for in 
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Kiwi",
    "Watermelon"
  ];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(fruit in fruits){
//     console.log(fruits[fruit]);
// }

const person = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    township: "Greenwood"
  };

// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

// console.log(person['name']);

// for(x in person){
//     console.log(person[x]);
// }

const people = [
    { id: 1, name: "John Doe", age: 30, gender: "Male", township: "Greenwood" },
    { id: 2, name: "Jane Smith", age: 25, gender: "Female", township: "Lakeview" },
    { id: 3, name: "Michael Brown", age: 40, gender: "Male", township: "Oakridge" },
    { id: 4, name: "Emily Davis", age: 35, gender: "Female", township: "Mapleton" },
    { id: 5, name: "Chris Wilson", age: 28, gender: "Non-binary", township: "Riverside" }
  ];

// for(obj of people){
//     // console.log(obj);
//     for(i in obj){
//         console.log(obj[i]);
//     }
//     console.log("===================");
// }

// // while 
// let count = 1
// while (count <= 5){
//   console.log(count);
//   count++
// }

// // do while 
// let count2 = 1
// do{
//   console.log(count2);
//   count2++
// }while(count2 <= 5)

// console.log(typeof "");
// console.log(typeof 99);
// console.log(typeof {});

console.log(undefined ? "true" : "false");