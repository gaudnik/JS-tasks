const lastDigit = (n, d) => {
    const nums = n.toString().split('').map(i => +i);
    if(nums.length <= d) return nums;
    if(d <= 0) return [];
    return nums.slice(-d);
  }

console.log(lastDigit(12345, 3));