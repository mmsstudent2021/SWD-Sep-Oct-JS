// class => object template 
const myself = {
    myName : "khine zin thin",
    age: 22,
    township: "north dagon",
    canTeach(){
        return `${this.myName} can teach`
    }
}
// console.log(myself);
// console.log(myself.myName);
// console.log(myself.age);
// console.log(myself.township);
// console.log(myself.canTeach());

class Myself {
    // myName = "khine zin thin";
    // age = 22;
    // township = "north dagon";
    constructor(inputName,inputAge,inputTownship){
        this.myName = inputName
        this.age = inputAge
        this.township = inputTownship
    }
    canTeach(){
        console.log('can teach');
        return `${this.myName} can teach`
    }
}

// class to object => new keyword nat instant soute pay ya tl
const myself1 = new Myself('khine zin thin',22,'north dagon')
const myself2 = new Myself('kyaw kyaw',20,'hlaing')
console.log(myself2);
// console.log(myself1.age);
// console.log(myself1.canTeach());

// 1 class => property , mehtod yay lox ya
// 2 class to object => new keyword nat instant soute
// 3 constructor => 
//      1 class instant soute tae chain a lote lote, 
//      2 class(para) passing pay lox ya