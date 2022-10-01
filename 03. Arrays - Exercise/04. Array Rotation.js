function arrayRotation(array, number) {
  let rotationArr = [];
  for (let i = 0; i < number; i++) {
    for (let j = 1; j < array.length; j++) {
      rotationArr.push(array[j]);
    }
    rotationArr.push(array[0]);
    array = rotationArr;
    rotationArr = [];
  }
  console.log(array.join(" "));
}
