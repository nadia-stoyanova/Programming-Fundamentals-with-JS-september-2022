function maxNumber(array) {
  let arrMaxNumber = [];
  for (let j = 0; j < array.length; j++) {
    let isTopInteger = true;
    for (let i = j + 1; i < array.length; i++) {
      if (array[j] > array[i]) {
        {
          isTopInteger = true;
        }
      } else {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      arrMaxNumber.push(array[j]);
    }
  }
  console.log(arrMaxNumber.join(" "));
}
