function sumDigits(num) {
  let str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  console.log(sum);
}
