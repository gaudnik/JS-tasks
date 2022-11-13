// function to check if a word is a palindrome
// 1.
// function checkWordIsPalindrome(word){
 
// let i, j;
 
// for (i = 0, j = word.length-1; i < j; i++, j--){
//     if (word[i] != word[j]){
//         break;
//     }
//   }
//     if (i < j){
//         console.log("The word isn`t a palindrome");
//     } else {
//         console.log("The word is a palindrome");
//     }
// }
// checkWordIsPalindrome("jhhfgfd");
// checkWordIsPalindrome("anna");

// 2

// let test = "aba"
// console.log(test.split("").reverse().join("") === test)

// 3
function isPalindrome(word){
    console.log(word.split("").reverse().join("") === word);
}

isPalindrome("abc");
isPalindrome("aba");