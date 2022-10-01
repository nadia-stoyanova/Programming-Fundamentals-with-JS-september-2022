function sumEvenNumbers(array) {
  let sumEvenNum = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  for (let num of array) {
    if (num % 2 === 0) sumEvenNum += num;
  }
  console.log(sumEvenNum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
