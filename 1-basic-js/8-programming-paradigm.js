// imperative 
// 1 procedural programming
// 2 object oriented programming (OOP)

// imperative => lo chin tae result ko a sint sint yay
const points = [34, 15, 2, 52, 19, 56, 30, 57];
let total = 0
for(let i = 1; i < points.length; i++){
    // console.log(points[i]);
    total += points[i]
}

// procedural => lo chin tae result ko a sint sint yay pee function htl thein
const arraySumFn = function(arr){
    let total = 0
    for(let i = 1; i< arr.length; i++){
        total += arr[i]
    }
    return total
}
// console.log(arraySumFn(points));

// OOP => lo chin tae result ko a sint sint yay pee object htl thein
const arraySumObj = {
    arr: [],
    sum(){
        let total = 0
        for(num of this.arr){
            total += num
        }
        return total
    }
}

arraySumObj.arr = [1,2,3]
console.log(arraySumObj.sum());

arraySumObj.arr = points
console.log(arraySumObj.sum());