function triangleOfNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + " " + i;
    }
    console.log(str);
  }
}
