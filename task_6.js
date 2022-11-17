// function count_letters_and_digits(str){
//     let sign = [];
//     let result = [];
//     sign.push(str.split(""));
//     for(let i=0; i<= sign.length; i++){
//     if(typeof sign[i] === 'number' && sign[i] === 'string'){
//         result.push();
//         console.log(result.length);
//     }
// }
//     return result;
// }
const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

function count_letters_and_digits(str){
    let counter = 0;
    for(i in str){
        if (isAlphaNumeric(str[i])){
            counter ++;
        }
    }

    return counter;
}

console.log(count_letters_and_digits('n!!ice!!123'));
console.log(count_letters_and_digits('de?=?=tttes!!t'));
console.log(count_letters_and_digits(''));
console.log(count_letters_and_digits('!@#$%^&`~.'));
console.log(count_letters_and_digits('u_n_d_e_r__S_C_O_R_E'));
