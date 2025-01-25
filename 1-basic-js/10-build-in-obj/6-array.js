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

// console.dir(Array)

// isArray => return boolean 
console.log(Array.isArray([]))
console.log(Array.isArray(fruits))
console.log(Array.isArray("hello"))
console.log(Array.isArray(10))


// includes => return boolean 
console.log(fruits)
console.log(fruits.includes("apple"))
console.log(fruits.includes("Mango"))
console.log(fruits.includes("aa"))


// indexOf => return index / ma shi yin -1 
console.log(fruits.indexOf("apple"))
console.log(fruits.indexOf("Orange"))
console.log(fruits.indexOf("a"))

// slice => (indexStart, indexEnd)
// not effect original array 
console.log(fruits.slice(0,5))
console.log(fruits.slice(5,8))
console.log(fruits)

// splice => (indexStart, length)
// // original array change 
console.log(fruits.splice(0,5))
console.log(fruits.splice(5,2))
console.log(fruits)

// concat 
const arr1 = ["aa","bb","cc"]
const arr2 = [1,2,3,4]
const arr3 = [0,0,0]

// const finalArray = [arr1,arr2,arr3]
// const finalArray = arr1.concat(arr2).concat(arr3)
// console.log(finalArray)

// spread 
const finalArray = [...arr1,...arr2,...arr3]
console.log(finalArray)

const obj1 = {
  a:"aa",
  b:"bb",
  c:"cc"
}

const obj2 = {
  x:"xx",
  y:"yy",
  z:"zz"
}

const finalObj = {...obj1,...obj2}
console.log(finalObj)

// sort,reverse,push,pop,unshift,shift,splice => original array change 
// slice => not effect original array