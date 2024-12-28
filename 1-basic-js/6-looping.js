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

for(let i = 1; i <=10; i++){
    if(i == 8 || i == 2) continue;
    console.log(i);
    // if(i == 8) break;
}