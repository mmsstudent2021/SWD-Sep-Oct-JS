// {
//     let x = 10
//     console.log(x);
// }
// console.log(x);

// function test () {
//     let x = 10
//     console.log(x);
// }
// test()
// console.log(x);

// let x = 10

// if(true){
//     x = 20
//     console.log(x);
// }
// x= 50
// console.log(x);

// conditional statement 
// if(false){
//    console.log("this is true");
// }else{
//     console.log("this is false");
// }

// conditional expression 
// ternary operator 
// console.log(false ? "this is true" : "this is false");

// const run = function () {
//     if(false){
//         return " this is true"
//     }
//     return "this is false"
// }

// AND && operator
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// // OR || operator 
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(true && false && true);
// console.log(false && false && false);
// console.log(true || false || false);
// console.log(false || false || false);

// // NOT ! operator 
// console.log(!!!true);


// pratical lesson 

// const wakeUp = function (hour) {
//     if(hour <= 8){
//         return "a sin pyay pr tal"
//     }
//     return "a sin ma pyay pr"
// }
// console.log(wakeUp(7));
// console.log(wakeUp(10));
// console.log(wakeUp(8));

// const goToSchool = function (pocketMoney) {
//     // if(pocketMoney == 200 || pocketMoney > 200){
//     //     return "bus see lox ya tl"
//     // }

//     if(pocketMoney >= 200){
//         return "bus see ml"
//     }
//     return "walk ml"
// }
// console.log(goToSchool(200));
// console.log(goToSchool(500));
// console.log(goToSchool(100));

// let money = 1000
// const reqMoney = function (payMoney) {
//     if(payMoney > money){
//         return "sch twr ml"
//     }
//     return "sch ma twr buu"
// }

// console.log(reqMoney(500));
// console.log(reqMoney(1200));

// let wait = 10
// const teach = function (comeHour) {
//     if(comeHour >= wait){
//         return "sa tin ml"
//     }
//     return "wait ml"
// }
// console.log(teach(9));
// console.log(teach(11));

// const exam = function (mark) {
//     if(mark > 80){
//         return "gone htoo htwat tl"
//     }else if(mark >= 40) {
//         return "exam aung tl"
//     }else if(mark < 40) {
//         return "exam kya tl"
//     }
// }
// console.log(exam(20));
// console.log(exam(40));
// console.log(exam(90));

// const entrance = function(write,speak){
//     if(write > 60 && speak > 60){
//         return "sch win khwint ya tl"
//     }
//     return "sch win khwint ma ya buu"
// }
// console.log(entrance(70,80));
// console.log(entrance(80,50));

// const canVote = function (age,nationality) {
//     if(age >= 18 && nationality == "mm"){
//         return "vote lox ya tl"
//     }
//     return "vote pay lox ma ya buu"
// }
// console.log(canVote(18,"mm"));
// console.log(canVote(18,"jp"));
// console.log(canVote(10,"mm"));

// const goToSchool = function (busNo) {
//     if(busNo == 65 || busNo == 20){
//         return "mms ko yout p"
//     }
//     return "mms ko ma yout buu"
// }
// console.log(goToSchool(65));
// console.log(goToSchool(20));
// console.log(goToSchool(10));

// const eat = function (food){
//     if(food == "hotpot" || food == "malar"){
//         return "bite wa tl"
//     }
//     return "bite ma wa buu"
// }
// console.log(eat("hotpot"));