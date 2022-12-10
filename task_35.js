function rgb(r, g, b){
    function toHex(x){
        if(x > 255) return "FF";
        else if (x < 0) return "00";
        else 
            return x.toString(16)
                    .padStart(2, "0")
                    .toUpperCase();
    }
    return toHex(r) + toHex(g) + toHex(b);
  }
  