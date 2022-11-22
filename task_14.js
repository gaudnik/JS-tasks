const isFibo = (a,b,f) => {
    while( a < f ){ 
      [a,b] = [b, a+b];
      }
    return a === f
  }

