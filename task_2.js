// function to check if a word is a palindrome
// 1.
function checkWordIsPalindrome(word){
 
let i, j;
 
for (i = 0, j = word.length-1; i < j; i++, j--){
    if (word[i] != word[j]){
        break;
    }
  }
    if (i < j){
        console.log("The word isn`t a palindrome");
    } else {
        console.log("The word is a palindrome");
    }
}


// 2
// function checkWordIsPalindrome(word)

checkWordIsPalindrome("jhhfgfd");
checkWordIsPalindrome("anna");

let test = "aba"
console.log(test.split("").reverse().join("") === test)