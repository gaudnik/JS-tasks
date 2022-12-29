function add() {
    let sum = 0;
    for (let i in arguments) {
      sum += arguments[i] * (+ i + 1);
    }
    return sum
  }
  