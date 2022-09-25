function condenseArrayToNumber(arr) {
  let newArr = arr;
  let cons = [];
  while (newArr.length > 1) {
    for (let i = 0; i < newArr.length - 1; i++) {
      cons[i] = Number(newArr[i]) + Number(newArr[i + 1]);
    }
    newArr = cons;
    cons = [];
  }
  console.log(newArr.join());
}
condenseArrayToNumber([1]);
