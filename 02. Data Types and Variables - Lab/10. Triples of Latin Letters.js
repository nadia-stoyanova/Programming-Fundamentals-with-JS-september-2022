function triplesOfLatinLetters(num) {
  for (let i = 0; i < num; i++) {
    let ch1 = String.fromCharCode(97 + i);
    for (let j = 0; j < num; j++) {
      let ch2 = String.fromCharCode(97 + j);
      for (let y = 0; y < num; y++) {
        let ch3 = String.fromCharCode(97 + y);
        console.log(ch1 + ch2 + ch3);
      }
    }
  }
}
