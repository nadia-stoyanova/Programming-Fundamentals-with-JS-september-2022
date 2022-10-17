function firstandLastKNumbers(array) {
  let k = array.shift();

  let firstToK = array.slice(0, k);
  let lastToK = array.slice(-k);
  console.log(firstToK.join(" "));
  console.log(lastToK.join(" "));
}
firstandLastKNumbers([3, 7, 8, 9]);
