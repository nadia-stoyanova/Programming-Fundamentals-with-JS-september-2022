function sorting(array) {
  array.sort((a, b) => a - b);

  let newArr = [];

  while (array.length !== 0) {
    let maxNum = array.pop();
    newArr.push(maxNum);

    let mixNum = array.shift();
    newArr.push(mixNum);
  }

  console.log(newArr.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
