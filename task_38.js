const brightest = colors => {
      let arrIndex = 0;
      let max = 0;
  
      colors.forEach((item, index) => {
          for (let i = 1; i < item.length; i = i + 2) {
              let normalize = parseInt(item.slice(i, i + 2), 16);
              if (normalize > max) {
                  max = normalize;
                  arrIndex = index;
              }
          }
      });
  
      return colors[arrIndex];
  }
  