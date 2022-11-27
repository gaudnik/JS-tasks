const findAll = (array, n) => {
    let result = []; 
    array.forEach((value,index)=>{
        if(value===n){
          result.push(index);
    }});
    return result;
  }
