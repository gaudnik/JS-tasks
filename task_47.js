const filterHomogenous = arrays => {
    return arrays.filter(newArr => newArr.length > 0 && newArr.every(value => typeof value === typeof newArr[0]));
   }
