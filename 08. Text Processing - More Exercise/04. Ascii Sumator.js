function asciiSumator(arr) {

  let firstNum = Math.max(arr[0].charCodeAt(), arr[1].charCodeAt())
  let secondNum = Math.min(arr[0].charCodeAt(), arr[1].charCodeAt())

  const stringToSum = arr[2];
  let sum = 0;

  for (const char of stringToSum) {
    if (char.charCodeAt() < firstNum && char.charCodeAt() > secondNum) {
      sum += char.charCodeAt();
    }
  }
  console.log(sum);
}
asciiSumator([".", "@", "dsg12gr5653feee5"]);
