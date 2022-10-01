function equalArrays(arr1, arr2) {
  let isEqual = true;
  let differenceIndex;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
      differenceIndex = i; break;
    } else sum += Number(arr1[i]);
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${differenceIndex} index`
    );
  }
}
equalArrays(["10", "20", "31"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays([""], ["1"]);
