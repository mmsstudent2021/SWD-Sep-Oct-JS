// // function 
// // 2024 - 2002 = year 
function findAge (year) {
    let currentYear = 2024
    let age = currentYear - year
    return age
}

// // console.log(findAge(2002));
// // console.log(findAge(1997));
// // console.log(findAge(1990));
// // console.log(findAge(2005));

// // buyFruit => apple 5 * 100 = 500 
// let total = 0
// function buyFruit(fruitName,quantity,price){
//     let cost = quantity * price
//     total += cost
//     // apple => 5 * 100 = 500 
//     let result = fruitName + " => " + quantity +" * "+ price + " = " + cost
//     return result
// }
// // tax => 2500 * 5/100
// function findTax (total,percentage) {
//     let result = total * percentage/100
//     return result
// }

// console.log(buyFruit("apple",5,100));
// console.log(buyFruit("mango",10,200));

// console.log("total => " + total);

// let tax = findTax(total,5)
// console.log("tax => " + tax);

// let netTotal = total + tax
// console.log("netTotal => " + netTotal);

// conditional statement 
// if(...){

// }else{

// }

// is even or odd 
// number / 2 == 0
function isEvenOrOdd (number) {
    let remainder = number % 2
    // return remainder
    if(remainder == 0){
        return number + " it is even"
    }else{
        return number + " it is odd"
    }

}

// console.log(isEvenOrOdd(2));
// console.log(isEvenOrOdd(5));
// console.log(isEvenOrOdd(100));
// console.log(isEvenOrOdd(7));

function isFailPassExam (mark) {
    if(mark >= 40){
        return mark + " pass exam"
    }else{
        return mark + " fail exam"
    }
}

// console.log(isFailPassExam(60));
// console.log(isFailPassExam(90));
// console.log(isFailPassExam(84));
// console.log(isFailPassExam(66));
// console.log(isFailPassExam(20));
// console.log(isFailPassExam(35));

let markArr = [40,60,80,20,45,88]





// console.log(markArr.length);

// looping 
for(let i = 1; i<=6; i++){
    // console.log(i);
}

// 1 -> 100
// for(let i = 1; i<=100; i++){
//     console.log(i);
// }

// let i = 1
// i <= 100
// console.log(i);
// i++

// 100 -> 1 
// for(let i = 100; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 0; i < markArr.length; i++){
//     console.log(isFailPassExam(markArr[i]));
// }

// for of 
// for(x of markArr){
//     console.log(isFailPassExam(x));
// }

let markObj = {
    myanmar: 40,
    english:60,
    math:80,
    chemistry:90,
    physics: 45,
    biology: 88
}
// console.log(markObj["myanmar"]);
// console.log(markObj["english"]);

// console.log(markObj.myanmar);
// console.log(markObj.english);

// for in 
// for(x in markObj){
//     // console.log(x);
//     console.log(markObj[x]);
// }

let marks = [
    {id:1, sub: "myanmar", short: "mm", mark: 40},
    {id:2, sub: "english", short: "eng", mark: 60},
    {id:3, sub: "math", short: "math", mark: 80},
    {id:4, sub: "chemistry", short: "chem", mark: 90},
    {id:5, sub: "physics", short: "phy", mark: 45},
    {id:6, sub: "biology", short: "bio", mark: 88},
]
for(x of marks){
    // console.log(x.sub);
    console.log(x.mark, x.sub, isFailPassExam(x.mark));
}

// function 
// conditional statement 
// looping