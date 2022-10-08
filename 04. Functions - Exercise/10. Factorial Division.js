function factorialDivision(firstNumber, secondNumber) {
let divisionTwoNumbers = 0
function factorial(number) {
    let factorial = 1
    for (let i = number; i >=2; i--) {
factorial *= i
    }
    return factorial
}

divisionTwoNumbers = (factorial(firstNumber) / factorial(secondNumber)).toFixed(2)
console.log(divisionTwoNumbers)

} factorialDivision(5, 2)