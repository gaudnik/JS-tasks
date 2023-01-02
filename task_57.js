const ballTest = (s, r) => {  
    let speed = s
        distance = 0
        cracks = 0;
    
    for (let step of [ ...r ]) {
      
      if (speed <= 0)
        return false;
      
      distance++;
      
      if (step === 'x') 
        cracks++;
  
      if (speed === distance) {
        speed -= cracks + 1;
        distance = 0;
        cracks = 0;
      } 
    }
    return true; 
  }
