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

const num1 = 23.564

const num = new Number(num1)
// console.log(num1);
// console.log(num.toString());
console.log(num.toFixed());
// fixed return string type => number type 
console.log(Number.parseFloat(num.toFixed(2)));

console.log(num1.toString());
console.log(num1.toFixed());