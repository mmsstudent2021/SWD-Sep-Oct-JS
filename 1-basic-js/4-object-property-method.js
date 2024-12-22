// object => property method
const obj = {
    // properties 
    x: 5,
    y: 10,

    // method 
    run : function () {
        return this.x
    },

    // es6 
    run2 () {
        return this.run()
    }
}

console.log(obj.x);
console.log(obj.y);
console.log(obj.run());
console.log(obj.run2());
// console.log(this);