function fizzBuzz(string1, string2) {
 const combinedLength = string1.length + string2.length;

 if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
    return "FizzBuzz";  
 }
 else if (combinedLength % 3 === 0) {
    return "Fizz"; 
 }
 else if (combinedLength % 5 === 0) {
    return "Buzz";
 }
}

console.log(fizzBuzz("my", "name"))
console.log(fizzBuzz("Kiziri", "John"))
console.log(fizzBuzz("xynthosis", "length"))