const generate = (length) => {
    let a = ''
    for (let i = 0; i < length; i++) {
      a += Math.round(Math.random())
    }
    
    return a
  }
  