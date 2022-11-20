function isPalindrome(word){
    console.log(word.split("").reverse().join("") === word);
}

isPalindrome("abc");
isPalindrome("aba");