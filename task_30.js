function numberJoy(n) {
    let nr = (n.toString().split("").reduce((a , b) => a+ +b, 0));
    return n - (nr * nr.toString().split("").reverse().join("")) === 0;
}
