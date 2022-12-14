const createDict = (keys, values) => {
    let object = {}
    for ( let i = 0; i < keys.length; i++){
        object[keys[i]] = i < values.length ?values[i] : null
    }
    return object
  } 
  