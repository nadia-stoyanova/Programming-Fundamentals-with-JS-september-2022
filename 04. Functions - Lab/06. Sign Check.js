function signCheck(numOne, numTwo, numThree) {

 let result = multiply(numThree, multiply(numOne, numTwo))

 result < 0 ? console.log("Negative") : console.log("Positive")

    function multiply(a, b) {
        let multiplying = a * b
        return multiplying
    }
} signCheck(-5, 1, 1)