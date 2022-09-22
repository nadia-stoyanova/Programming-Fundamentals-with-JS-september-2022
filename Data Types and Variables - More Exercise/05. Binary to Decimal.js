function binaryToDecimal(binary) {
    let str = String(binary);
    let decimal = 0;
    //let decimal = parseInt(binary, 2)
    for (let i = 0; i <= str.length - 1; i++) {
      let currentNum =1
      let curBin = Number(str[i]);
      if (curBin === 0 && i === str.length-1) {
        currentNum = 0;
      } else if (curBin === 1 && i === str.length-1) {
        currentNum = 1;
      } else if (curBin === 0 && i != str.length-1) {
        currentNum = 0;
      } else {
        for (let j = 1; j < str.length - i; j++) {
          currentNum *= 2;
        }
      }
      decimal += currentNum;
    }
    console.log(decimal);
  }