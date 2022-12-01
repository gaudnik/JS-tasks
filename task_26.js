function myParseInt(str) {
    for(let i = 0; i< str.length ; i++){
        let value = str.split("");
        if(isNaN(value[i])){
            return str = NaN;
        }
    }
    return Number(str);
  }