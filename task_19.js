function reject(array, predicate) {
    return array.filter(el => !predicate(el))
  }

  
console.log(reject([1,2,3,4,5], (n) => n % 2 === 0))