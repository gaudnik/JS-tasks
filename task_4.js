function howManyDays(){
    

}

console.log(daysBetween("2022-01-01", "2022-01-01") === 0);
console.log(daysBetween("2022-01-01", "2022-01-02") === 1);
console.log(daysBetween("2022-01-02", "2022-01-01") === 1);
console.log(daysBetween("2022-01-01", "2022-12-30") === 363);
console.log(daysBetween("2020-01-19", "2022-11-15") === 1031);
console.log(daysBetween("1994-06-28", "2022-11-15") === 10367);
console.log(daysBetween("1981-06-23", "2022-11-15") === 15120);