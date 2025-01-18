console.dir(String);

const str = new String("      San Kyi tar par     ")
console.log(str);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str.length);

// case 
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// subString => (indexStart,indexEnd)
console.log(str.substring(0,3));
console.log(str.substring(4,7));
// slice => (indexStart,indexEnd)
console.log(str.slice(0,3));
console.log(str.slice(4,7));

// trim => mo lo tae space twy phyat htote 
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// padStart => (totalStringLength,fill)
const num = '123'
console.log(num.padStart(5,0));
console.log(num.padEnd(5,"Hi"));

const str2 = new String("san kyi tr par")
// search 
// shi tl so yin => index n.0 
// ma shi yin => -1
console.log(str2);
console.log(str2.search("par"));
console.log(str2.search("apple"));

// replace => (searchValue,replaceNewValue)
console.log(str2.replace("kyi","pya"));
console.log(str2.replaceAll("a","zz"));

// split => string to array
console.log(str2.split());
console.log(str2.split(" "));
console.log(str2.split("a"));