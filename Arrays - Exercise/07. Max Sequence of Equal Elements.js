function maxSequenceOfEqualElements(array) {
  let longArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    let currentArray = [];
    for (j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        currentArray.push(array[j]);
      } else break;
      if (currentArray.length > longArr.length) longArr = currentArray;
    }
  }
  console.log(longArr.join(" "));
}
