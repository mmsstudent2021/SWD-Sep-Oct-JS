console.dir(Math);

console.log(Math.PI);

console.log(Math.pow(2,3));
console.log(Math.pow(4,3));

// floor => br phit phit short u (a yar yout)
const num1 = 32.553
console.log(Math.floor(num1));

// ceil => br phit phit toe u (a yar yout)
const num2 = 32.153
console.log(Math.ceil(num2));

// absolute => - + ma u buu 
const num3 = -200
console.log(Math.abs(num3));
console.log(Math.abs(200 - 500));

// min => a gyi sone 
// max => a ngal sone 
console.log(Math.min(2,3,5,6,4,0,-3));
console.log(Math.max(-1,-2,-3,-4));
console.log(Math.max(1,4,5,7,3,66,43));

// random => random n.o htote pay 
const ran = Math.random()
console.log(Math.random());
console.log(Math.random() * 10);

console.log(ran * 10);
console.log(Math.floor(ran * 10)); // 0-9

console.log(ran * 10);
console.log(Math.ceil(ran * 10)); // 1-10

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  console.log(getRndInteger(1,5));