function magicMatrices(array) {
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[i][j];
    }
    newArr.push(sum);
  }
  for (let i = 0; i < array.length; i++) {
    sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j][i];
    }
    newArr.push(sum);
  }
  let globalSum = 0;
  for (let i = 0; i < newArr.length; i++) {
    globalSum += Number(newArr[i]);
  }
  let flag = true;
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] !== newArr[0]) {
      flag = false;
      break;
    }
  }
  console.log(flag);
}
