const freqSeq = (str, sep) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += (str.split(str[i]).length - 1);
      result += sep;
    }
    return result.slice(0,-1);
  }
