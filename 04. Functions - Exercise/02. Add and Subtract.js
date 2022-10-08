function addAndSubtract(firstNumber, secondNumber, lastNumber) {
  function add(a, b) {
    let sumOfTwoNumbers = a + b;
    return sumOfTwoNumbers;
  }

  function substract(a, b) {
    let subOfTwoNumbers = a - b;
    return subOfTwoNumbers;
  }

  let sum = add(firstNumber, secondNumber);
  let substracting = substract(sum, lastNumber);
  console.log(substracting);
}
addAndSubtract(2, 3, 4);
