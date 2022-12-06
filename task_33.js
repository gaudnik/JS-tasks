const gordon = word => {
    return word
     .toUpperCase()
     .replace(/\w+/g, '$&!!!!')
     .replace(/[AEIOU]/g, letter => letter == 'A' ? '@' : '*' );
 }
 