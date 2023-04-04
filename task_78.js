function validParentheses(parens) {
    let count = 0
    
    for(bracket of parens){
      bracket === '(' ? count++ : count --
      if(count < 0) return false
    }
    
    return count === 0
  }
  