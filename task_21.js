function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a','e','i','o','u'];
    for(let char of str){
      if(vowels.includes(char)){
        vowelsCount++;
      }
    }
    return vowelsCount;
  }
