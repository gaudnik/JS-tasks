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
