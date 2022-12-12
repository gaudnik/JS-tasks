function getLargerNumbers(a, b) {
    return a.map((value, i) => Math.max(value, b[i]));
}