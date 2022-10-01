function nonDecreasingSubset(array) {
  let lenArr = array.length;
  let newArr = [];
  newArr.push(array[0]);
  let maxNumber = array[0];
  for (let j = 1; j < lenArr; j++) {
    if (array[j] >= maxNumber) {
      maxNumber = array[j];
      newArr.push(array[j]);
    }
  }
  console.log(newArr.join(" "));
}
