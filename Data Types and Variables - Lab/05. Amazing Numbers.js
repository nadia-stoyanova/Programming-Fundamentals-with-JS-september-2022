function amazingNumbers(num) {
  let str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  sum.toString().includes("9")
    ? console.log(`${num} Amazing? True`)
    : console.log(`${num} Amazing? False`);
}
