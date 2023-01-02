const spongeMeme = sentence => {
    let result = "";
     
    for (let count=0; count<sentence.length; count++)
    {
    if (count % 2 == 0)
    result += sentence.charAt(count).toUpperCase();
    else
    result += sentence.charAt(count).toLowerCase(); 
    }
          
    return result;
}
