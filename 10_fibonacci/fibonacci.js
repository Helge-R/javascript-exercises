const fibonacci = function(num) {

  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  //num = +num;

  let fib1 = 0;
  let fib2 = 1;

  for (let i = 1; i < num; i++) {
    let temp = fib2;
    fib2 = fib1 + fib2;
    fib1 = temp;
  }
  return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
