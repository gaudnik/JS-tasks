function counterEffect(hitCount) {
    return hitCount.match(/./g).map(x => [...Array(+x+1).keys()]);
   }
   