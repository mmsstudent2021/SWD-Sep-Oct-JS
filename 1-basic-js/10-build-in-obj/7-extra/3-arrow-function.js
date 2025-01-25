// function statement
function run(x) {
    return "this is run";
  }
  
  // function expression
  const run2 = function (x) {
    return "this is run 2";
  };
  
  // arrow function
  const run3 = () => {
    return "this is run 3";
  };
  
  // para 1 khu pl so yin () ma lo
  const run4 = x => {
    return "this is run 4 " + x;
  };
  
  // para ma pr yin () a ser _ pay lox ya
  const run5 = _ => {
    return "this is run 4 ";
  };
  
  // 1 line so yin return ma lo
  const run6 = (x) => "this is run 6 " + x;
  
  console.log(run());
  console.log(run2());
  console.log(run3());
  console.log(run4("hello"));
  console.log(run6("hello"));
  
  const obj = {
    a: "aa",
    b() {
      return this;
    },
    c: () => {
      return this;
    },
  };
  console.log(obj.b());
  console.log(obj.c());