const solution = number => {
    let result = [0,0,0];
    for(n=1; n<number; n++){
        if(n%3 === 0 && n%5 === 0){
            result[2]++;
        }else if(n%3 === 0){
            result[0]++;
        }else if(n%5 === 0){
            result[1]++;
        }
    }
    return result;
  }
  