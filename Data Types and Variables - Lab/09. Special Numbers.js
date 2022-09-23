function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let num = i;
    let str1 = num.toString();
    let sum = 0;
    for (let j = 0; j < str1.length; j++) {
      sum += Number(str1[j]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
