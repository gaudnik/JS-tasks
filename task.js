function getFirstLetter(a) {
    let answer = ""    
    const words = a.split(' ');
    for(let i = 0; i < words.length; i++){
        console.log(words[i][0])
        answer += words[i][0]
    };
    return answer;
}


let a = "Java Script";

console.log(getFirstLetter(a) === "JS")

