function distinctArray(array) {
  for (let i = Number(array.length - 1); i >= 1; i--) {
    let curentElement = Number(array[i]);
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] === array[j]) {
        array.splice(i, 1);
      }
    }
  }
  console.log(array.join(" "));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
