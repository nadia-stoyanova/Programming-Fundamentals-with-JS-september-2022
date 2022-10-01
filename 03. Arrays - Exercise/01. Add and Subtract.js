function addAndSubtract(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(Number(array[i] + i));
    } else {
      newArray.push(Number(array[i]) - i);
    }
  }
  console.log(newArray);
  let sumArr = 0;
  let sumNewArr = 0;
  for (let el of array) {
    sumArr += el;
  }
  console.log(sumArr);
  for (let el of newArray) {
    sumNewArr += el;
  }
  console.log(sumNewArr);
}
