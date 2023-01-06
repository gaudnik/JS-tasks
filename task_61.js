const sumFromString = str => {
    let numbers = [],
        num = [];
    for (let i  = 0; i < str.length; i ++){
      if (!isNaN(str[i]) && str[i] !== ' ')
        num.push(str[i])
      else
        if (num.length > 0) {
          numbers.push(+num.join(''));
          num = [];
        }
    }
    numbers.push(+num.join(''));
    return numbers.reduce((prev, curr) => prev + curr, 0);
  }
