const differenceOfSquares = (n) =>{
    let sum = 0;
    let sumSquare = 0;
    for (let i =1 ; i <= n; i++) {
        sumSquare = sumSquare + i*i;
        sum = sum + i;
    }
    return sum*sum - sumSquare;
  }