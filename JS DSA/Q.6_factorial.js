// Code 7: Find factorial of user input number
let number = 6
function factorial(number){
if (number < 0) {
    console.log("Factorial of negative number does not exist")
} else if (number == 0) {
    console.log(`Factorial of ${number} is 1`)
} else {
    let fact = 1
    for (let i = 1; i <= number; i++) {
        fact *= i
    }
    console.log(`Factorial of ${number} is ${fact}.`)
}
}
// factorial(number)