function isItANum(str) {
     
    let result = str.replace(/[^0-9]/g,"");
      
        if(result.length == 11 && result[0] == "0"){
            return result;
        } else {
          return "Not a phone number"
        }
      }
      