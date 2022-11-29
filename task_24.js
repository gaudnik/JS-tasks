function factory(x){
    return function(array){
    var myArray=[];
    for (var i=0; i<array.length; ++i)
      myArray.push(array[i]*x);
    return myArray} 
 }
