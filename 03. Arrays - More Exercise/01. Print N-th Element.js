function printNthElement(array) {
  let printArr = [];
  let number = Number(array[array.length - 1]);
  for (let i = 0; i < array.length - 1; i++) {
    if ((i + number) % number === 0) {
      printArr.push(array[i]);
    }
  }
  console.log(printArr.join(" "));
}
