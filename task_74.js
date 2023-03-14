function toIndustrial(time) {
    if (typeof time === 'string') {
      const times = time.split(":")
      time = times[0]*1 * 60 + times[1]*1;
    }
    return +(time/60).toFixed(2);
  }
  
  function toNormal(time) {
    const minutes = Math.round(time * 60);
    const hours = Math.floor(minutes / 60);
    let minute = minutes % 60;
    
    if (minute < 10) minute = '0' + minute;
    return hours + ":" + minute;
  }
