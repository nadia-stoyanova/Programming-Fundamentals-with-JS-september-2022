function calculator(number1, operator, number2) {
  let cal = 0;
  switch (operator) {
    case "+":
      cal = number1 + number2;
      break;
    case "-":
      cal = number1 - number2;
      break;
    case "*":
      cal = number1 * number2;
      break;
    case "/":
      cal = number1 / number2;
      break;
  }
  console.log(cal.toFixed(2));
}
