function a(){
    let a = 2;
    let b = 3;
    const add = () => {
        let pr = 4;
        const prod = p => {
            return a * b * p;
        }
        return prod(pr) + a + b;
    }
    return add(a, b)
}

console.log(a())
