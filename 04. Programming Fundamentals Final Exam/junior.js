function junior(arr) {
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;
  let ind = 0;
  let n = arr.length;

  for (let index = 0; index < n; index++) {
    if (arr[index] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = arr[index];
    }
    if (arr[index] === max1) {
      continue;
    }
    if (arr[index] > max2) {
      max3 = max2;
      max2 = arr[index];
    }
    if (arr[index] === max2) {
      continue;
    }
    if (arr[index] > max3) {
      max3 = arr[index];
    }
  }

  console.log(max3);
  console.log(arr.indexOf(max3));
}
junior([
  94, 94, 95, 91, 2, 33, 51, 54, 39, 34, 61, 34, 92, 101, 101, 101, 105, 105,
  105, 106
]);
