const duplicates= arr => {
    return arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.indexOf(el, arr.indexOf(el) + 1))
    }
