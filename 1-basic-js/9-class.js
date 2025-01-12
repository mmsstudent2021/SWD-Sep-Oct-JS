// OOP

// obj
// const myself = {
//   myName: "khine zin thin",
//   age: 22,
//   township: "north dagon",
//   canTeach() {
//     return ${this.name} can teach;
//   },
// };

// console.log(myself.myName)
// console.log(myself.age)
// console.log(myself.township)
// console.log(myself.canTeach())

// class
class MySelf {
    // myName = "khine zin thin";
    // age = 22 ;
    // township = "north dagon";
  
    // constructor(a,b){
    // return "i am constructor"
    //     console.log(a,b)
    // }
  
    constructor(inputName, inputAge, inputTownship) {
      this.myName = inputName;
      this.age = inputAge;
      this.township = inputTownship;
    }
    canTeach() {
      return `${this.name} can teach`
      // console.log("can teach");
    }
  }
  
  // class new keyword nat instant sount pee obj pyg
  // argu ka constructor yae para phit lr
  const myself = new MySelf("khine zin thin", 22, "north dagon");
  // const student1 = new MySelf("mg mg", 20, "dagon");
  // const student2 = new MySelf("aung aung", 16, "hlaing");
  
  console.log(myself);
  // console.log(student1);
  
  // access modifier
  // public | private 
  // static 
  class MySelf2 {
    static myName = "su su";
    #age = 16;
    run() {
      return `${this.myName} is ${this.#age} years old`
    }
  }
  const test = new MySelf2();
  // console.log(MySelf2.myName)
  // console.log(test.age)
  
  // call ma ya
  // console.log(test.#age)
  
  // console.log(test.run())
  
  
  
  // OOP concept
  // inheritance
  class A {
    a = "aa";
    b = "bb";
    c = "cc";
    d(){
      return "this is d"
    }
  }
  
  class B extends A{
    x = "xx";
    y = "yy";
    z = "zz";
  }
  
  const a = new A();
  const b = new B();
  console.log(a);
  console.log(b);
  
  
  class Person {
      constructor(name,age,skinColor){
          this.name = name;
          this.age = age;
          this.skinColor = skinColor
      }
  }
  
  
  // child hmr parent yae constructor ko use chin yin super() nat use 
  class Student extends Person{
      constructor(name,age,skinColor,school){
          super(name,age,skinColor)
          // this.name = name;
          // this.age = age;
          // this.skinColor = skinColor;
          this.school = school
  
      }
  }
  
  const person1 = new Person("mg mg",20,"brown")
  const person2 = new Person("su su",23,"brown")
  
  const student1 = new Student("su su",16,"brown","no3")  
  const student2 = new Student("zaw zaw",16,"brown","no4")  
  console.log(student1)
  
  
  class Free {
      repo = "unlimited";
      push(){}
      pull(){}
  }
  
  class Team extends Free{
      codeSpace = true;
      online(){}
  }
  
  class Enterprise extends Team{
      dataResidency = true
      defineRule(){}
  }
  
  const free = new Free()
  console.log(free)
  
  const team = new Team()
  console.log(team)
  
  const enterprise = new Enterprise()
  console.log(enterprise)
  
  
  
  // encapsulation
  class A {
    #x = 5;
  
    // getter , setter
    getter() {
      return this.#x;
    }
  
    setter(newValue) {
      return (this.#x = newValue);
    }
  }
  
  const aa = new A();
  // console.log(aa.#x)
  // console.log(aa.getter())
  // console.log(aa.setter(10))
  // console.log(aa)
  
  class Bank {
    #money = 0;
  
    // getter 
    checkMoney(){
      return this.#money
    }
  
    // setter
    deposit(amount){
      return this.#money += amount
    }
  
    transfer (whom,amount){
      if(amount < this.#money){
        this.#money -= amount
        return `transfer ${amount} to ${whom} successfully`
      }else{
        return "not enough money"
      }
    }
  
    withDraw (amount){
      if(amount < this.#money){
        this.#money -= amount
        return `withdraw money ${amount} successfully`
      }else{
        return "not enough money"
      }
    }
  }
  
  const person1Bank = new Bank()
  console.log(person1Bank.deposit(5000))
  // console.log(person1Bank.transfer('mg mg',6000))
  console.log(person1Bank.withDraw(3000))
  console.log(person1Bank.checkMoney())
  // person1Bank.money = 5000
  // console.log(person1Bank.money)