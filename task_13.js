const differenceOfSquares = (n) =>{
    let sum = 0;
    let squareSum = 0;
    for (let i =1 ; i <= n; i++) {
      sum += i*i;
      squareSum += i;
    }
    return squareSum*squareSum - sum;
  }