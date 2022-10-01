function equalSums(array) {
  let leftSum = 0;
  let rigthSum = 0;
  let flag = false;
  if (array.length === 1) {
    console.log(0);
  } else if (array.length === 2) {
    console.log("no");
  } else {
    for (let i = 1; i <= array.length; i++) {
      for (let j = 0; j < i; j++) {
        leftSum += array[j];
      }
      for (let y = i + 1; y < array.length; y++) {
        rigthSum += array[y];
      }
      if (leftSum === rigthSum) {
        console.log(i);
        flag = true;
      }
      leftSum = 0;
      rigthSum = 0;
    }
    if (!flag) {
      console.log("no");
    }
  }
}
