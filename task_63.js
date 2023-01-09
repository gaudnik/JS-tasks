function findLowestInt(k) {
    let n = 1;
    const k2 = k + 1;
  
    const sortDigits = n => [...n.toString()].sort().join();
  
    while (sortDigits(n * k) !== sortDigits(n * k2)) {
       n++;
    }
  return n;
}
