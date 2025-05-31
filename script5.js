let birthYear = prompt("What year were you born?");
const age = 2025 - birthYear;

if (age < 18) {
    console.log("You are a minor.");
} 
else if (age <= 36) {
    console.log("You are a youth.");
}
else {
    console.log("You are an elder.")
}