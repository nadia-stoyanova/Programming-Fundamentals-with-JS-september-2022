function mergeArrays(arr1, arr2) {
  let mergeArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if ((i + 2) % 2 === 0) {
      mergeArr.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      mergeArr.push(String(arr1[i]) + String(arr2[i]));
    }
  }
  console.log(mergeArr.join(" - "));
}
