function addAndRemove(array) {
  let printArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === "add" && array[i + 1] !== "remove") {
      printArr.push(i + 1);
    }
  }
  if (array[array.length - 1] === "add") {
    printArr.push(array.length);
  }

  printArr.length === 0
    ? console.log("Empty")
    : console.log(printArr.join(" "));
}
