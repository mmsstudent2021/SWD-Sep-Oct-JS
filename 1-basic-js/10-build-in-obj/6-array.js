const fruits = [
    "apple",
    "Banana",
    "Cherry",
    "Grape",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Peach",
    "Watermelon"
  ];

// console.dir(Array);
// console.log(fruits);
console.log(fruits.length);

// toString => array to string 
console.log(fruits.toString());

// join => array to string ("==>")
console.log(fruits.join("-"));
console.log(fruits.join("==>"));

// sort => A Z to a z
// original array change 
console.log(fruits);
console.log(fruits.sort());
console.log(fruits);

// reverse => lastIndex to firstIndex
// original array change 
const arr = ["one","two","three"]
console.log(arr);
console.log(arr.reverse());
console.log(arr);

// push , pop , unshift, shift
// original array change 
console.log(fruits);
fruits.push("aaa")
fruits.push("bbb")

fruits.pop()
fruits.pop()
fruits.pop()

fruits.unshift("aaa")
fruits.unshift("bbb")

fruits.shift()
fruits.shift()
fruits.shift()