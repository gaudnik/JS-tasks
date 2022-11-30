function orderFood(list) {
    let count = {};
    list.map(el => count[el.meal] = (count[el.meal] || 0)+1);
    return count;
   }
   