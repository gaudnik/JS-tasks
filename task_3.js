function getChain(n){
    let arr =[1];
    for(let i = 1; i<= n-1; i++){
        arr.push(i * arr[arr.length-1]);
    }
    return arr;

}
