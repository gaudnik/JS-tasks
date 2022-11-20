const fibonacciSequence = n => {
    const result = [];
    [a,b] = [0,1];
    for(let i = 0; i < n; i++){
        [a,b] = [b, a + b];
        result.push(a);
    }
    return result;
}

console.log(fibonacciSequence(5));