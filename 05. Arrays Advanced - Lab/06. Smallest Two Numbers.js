function smallestTwoNumbers(array) {
  let newArr = array.sort((a, b) => a - b).slice(0, 2);
  console.log(newArr.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
