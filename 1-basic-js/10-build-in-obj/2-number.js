// class A {
//     static a = "aa"
//     static b = "bb"
//     static c(){
//         return "c method"
//     }
//     d(){
//         return "d method"
//     }
// }

// console.dir(A);
// console.log(A.c());
// console.log(A.a);

// const a = new A()
// console.log(a.d());

console.dir(Number);
// static property 

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// NaN => not a number 
// console.log("a" / 2);

// static method 
// console.log(isNaN("a" - 2));
// console.log(isNaN(5 - 2));
// console.log("5" - 2)

// const weight = "100lb"
// console.log(Number.parseInt(weight));

// const weight2 = "100.55lb"
// console.log(Number.parseFloat(weight2));

// const num1 = 23.565

// // const num = new Number(num1)
// // // console.log(num1);
// // // console.log(num.toString());
// // console.log(num.toFixed());
// // // fixed return string type => number type 
// // console.log(Number.parseFloat(num.toFixed(2)));

// // console.log(num1.toString());

// toFixed() => a yar yout u / 22
// toFixed(2) => float ko a yar yout u / 21.35
const num1 = 21.645
console.log(num1.toFixed());
console.log(num1.toFixed(2));

// toPrecision() => original num a tine htote 
// toPrecision(2) => integer ka nay sa u tl 
// 0 ko sa ma twat buu 
let num = 5.123456;
console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;
console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'