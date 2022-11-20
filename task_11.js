const findAll = (array, n) => {
    let result = []; 
    array.forEach((value,index)=>{
        if(value===n){
          result.push(index);
    }});
    return result;
  }

  console.log(findAll([1,1,2,4,4], 4));