function rotateArray(array) {
  let lenArr = array.length - 1;
  let amountOfRotation = Number(array[lenArr]);
  let newArr = [];
  for (let j = 0; j < lenArr; j++) {
    newArr[(j + amountOfRotation) % lenArr] = array[j];
  }
  console.log(newArr.join(" "));
}
