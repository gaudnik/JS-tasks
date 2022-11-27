const differenceOfSquares = (n) =>{
    let sum = 0;
    let sumSquare = 0;
    for (let i =1 ; i <= n; i++) {
        sum = sum + i;
        sumSquare = sumSquare + i*i;
    }
    return sum*sum - sumSquare;
  }
