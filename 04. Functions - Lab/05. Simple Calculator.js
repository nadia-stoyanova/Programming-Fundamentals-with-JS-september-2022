function orders(numOne, numTwo, operator) {
   
    let a = numOne
    let b = numTwo
     if (operator === "add") return add(numOne, numTwo)
     if (operator === "subtract") return subtract(numOne, numTwo)
     if (operator === "multiply") return multiply(numOne, numTwo)
     if (operator === "divide") return divide(numOne, numTwo)

    function add(a, b) {
        let adding = a + b
        return adding
    }

    function subtract(a, b) {
        let subtracting = a - b
        return subtracting
    }

    function multiply(a, b) {
        let multiplying = a * b
        return multiplying
    }

    function divide(a, b) {
        let divideing = a / b
        return divideing
    }


} 
let vv = orders(20, 5, "divide")
console.log(vv)