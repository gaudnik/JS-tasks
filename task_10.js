var fibsFizzBuzz = function(n) {
    let result = [];
    [a,b]= [0,1];
    for(let i = 0; i < n; i++){
      [a,b] = [b, a + b];
      result.push(a % 15 == 0 ? "FizzBuzz":
                 a % 3 == 0 ? "Fizz":
                 a % 5 == 0 ? "Buzz": a)
    }
      return result;
  }