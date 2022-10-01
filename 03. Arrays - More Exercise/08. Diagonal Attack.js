function diagonalAttack(arr) {
  let lengthArr = arr.length;
  let sum1 = 0;
  let sum2 = 0;
  let newArr = [];
  for (let i = 0; i < lengthArr; i++) {
    newArr[i] = arr[i].split(" ");

    for (let j = 0; j < lengthArr; j++) {
      if (i === j) {
        sum1 += Number(newArr[i][j]);
      }
      if (i + j === lengthArr - 1) {
        sum2 += Number(newArr[i][j]);
      }
    }
  }

  if (sum1 !== sum2) {
    for (let i = 0; i < lengthArr; i++) {
      str = "";
      for (let j = 0; j < lengthArr; j++) {
        str += newArr[i][j] + " ";
      }
      console.log(str);
    }
  } else {
    for (let i = 0; i < lengthArr; i++) {
      str = "";
      for (let j = 0; j < lengthArr; j++) {
        if (!(i === j || i + j === lengthArr - 1)) {
          newArr[i][j] = sum1;
        }
        str += newArr[i][j] + " ";
      }
      console.log(str);
    }
  }
}
diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
