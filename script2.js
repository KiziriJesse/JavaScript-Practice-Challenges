function countLetterA(Words) {
    let count = 0; 
    for (let letterPosition = 0; letterPosition < Words.length; letterPosition++) {
        if (Words[letterPosition].toLowerCase()  === 'a') {
            count = count + 1;
        }
    }
    return count;
}

console.log(countLetterA("banana"))
console.log(countLetterA("Javascript is amazing"))
console.log(countLetterA("aaaaaaa"))


let Words = "Javascript is amazing!";
let count = 0;
for (let letterPosition = 0; letterPosition < Words.length; letterPosition++) {
    if (Words[letterPosition].toLowerCase() === 'a') {
        count++;}
    }

console.log(`The letter "a" appears ${count} times in the string.`);