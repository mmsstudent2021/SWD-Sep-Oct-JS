// function statement | expression | IIFE | fn invoked another fn

// function run () {
//     console.log("*");
//     console.log("**");
//     console.log("***");
//     // console.log('run');
//     return 'i am run'

//     console.log("*");
// }

// console.log(run());

// function run () {
//     console.log('run');
//     let x = 10
//     return x
// }

// console.log(run());

// function area (width,breadth,...aa) {
//     console.log(width);
//     console.log(breadth);
//     console.log(aa);
//     // return width * breadth
// }

// // console.log(area(50,60));
// // console.log(area(20,30));
// // console.log(area(40,50));
// // console.log(area(50,60));

// console.log(area(50,60,99,50,30,2,6));

// function statement 
// console.log(run());
// function run () {
//     return 'run'
// }

// // function expression
// console.log(run2()); 
// const run2 = function () {
//     return 'run2'
// }

// console.log(run());
// console.log(run2());

// IIFE
// (function () {
//     // console.log('run');
// })()


// // function invoked another function 
// function x () {
//     return 'i am x'
// }

// function y () {
//     return x() + " i am y"
// }

// // console.log(x());
// // console.log(y());
// y()





// Scope 

// global scope 
// let x = 5
// console.log(x);

// {
//     console.log(x);
// }

// function test () {
//     console.log(x);
// }
// test()

// {
//     let x = 5
//     console.log(x);
// }
// console.log(x);

// function test () {
//     let x = 5
//     console.log(x);
// }
// test()
// console.log(x);




// pratical lesson 

// // {width: 50, breadth: 60, result: 3000}
// const results = []
// let index = 0
// // results[0] = {width: 50, breadth: 60, result: 3000}
// // results[1] = {width: 30, breadth: 50, result: 3000}

// const area = function (width=0,breadth=0) {
//     let cal = width * breadth
//     results[index++] = {width, breadth, result: cal}
//     return `${cal} sqft`
// }
// console.log(area(50,60));
// console.log(area(30,50));
// console.log(area(30,50));
// // console.log(area());
// console.log(results);
// console.table(results)

// [
//     {width: 30, breadth:60, result: 1800}
//     {width: 60, breadth:80, result: 2400}
// ]

// const results = []
// let index = 0
// // results[0] ={width: 30, breadth:60, result: 1800}
// // results[1] ={width: 60, breadth:80, result: 2400}
// // results[2] ={width: 60, breadth:80, result: 2400}
// // console.log(results);

// const area = function (width,breadth) {
//     let cal = width * breadth
//     results[index++] = {width, breadth, result: cal}
//     return `${cal} sqft`
// }

// console.log(area(30,60));
// console.log(area(60,80));
// console.log(area(20,50));
// console.log(results);
// console.table(results);


// exchange to mmk 
// $200 * 3000
// const rates = {
//     usd: 3000,
//     sgd: 2500
// }
// // console.log(rates.usd);
// // console.log(rates["usd"]);


// const exChangeToMmk = function (amount,currency) {
//     let result = amount * rates[currency]
//     return `${result} ${currency}` 
// }
// // console.log(exChangeToMmk(200,"usd"));
// // console.log(exChangeToMmk(500,"sgd"));

// const exchangeFromMmkToCurrency = function (amount,currency) {
//     let result = amount / rates[currency]
//     return `${result} ${currency}`
// }
// console.log(exchangeFromMmkToCurrency(500000,"usd"));

// let total = 0
// const buyFruit = function (fruitName,quantity,price) {
//     let cost = quantity * price
//     total += cost
//     return `${fruitName} ${quantity} * ${price} => ${cost}`
// }

// const findTax = function (totalAmount,percentage) {
//     let tax = totalAmount * (percentage/100)
//     return tax
// }

// console.log(buyFruit("apple",5,100));
// console.log(buyFruit("orange",20,50));

// console.log("total => " + total);

// let tax = findTax(total,5)
// console.log("tax => " + tax);


// let netTotal = total + tax
// console.log("netTotal => " + netTotal);