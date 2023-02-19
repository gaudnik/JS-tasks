function replaceAll(seq, find, replace) {
    if (typeof seq === 'string') return seq.split('').map(x => x===find ? replace : x).join('');
    return seq.map(x => x===find ? replace : x);
   }
   