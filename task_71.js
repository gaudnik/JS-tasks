function sumNoDuplicates(numList) {
    let arr = [];
    let sum = 0;
    numList.forEach(num => {
        if (numList.indexOf(num) === numList.lastIndexOf(num)) {
            arr.push(num);
            sum += num;
        }
    });
    return sum;
}
