function printDNA(number) {
  let row = 0;
  let i = 0;
  let stringDNA = "ATCGTTAGGG";
  let dnaStringLength = stringDNA.length;

  while (row < number) {
    if (i === dnaStringLength) {
      i = 0;
    }
    if (row % 4 === 0) {
      {
        console.log(`**${stringDNA[i]}${stringDNA[i + 1]}**`);
      }
      row++;
      i += 2;
    } else {
      if (row % 4 === 1) {
        {
          console.log(`*${stringDNA[i]}--${stringDNA[i + 1]}*`);
        }
        row++;
        i += 2;
      } else {
        if (row % 4 === 2) {
          {
            console.log(`${stringDNA[i]}----${stringDNA[i + 1]}`);
          }
          row++;
          i += 2;
        } else {
          if (row % 4 === 3) {
            {
              console.log(`*${stringDNA[i]}--${stringDNA[i + 1]}*`);
            }
            row++;
            i += 2;
          }
        }
      }
    }
  }
}
printDNA(10);

// **AT**
//*C--G*
//T----T
//*A--G*
//**GG**
//*A--T*
//C----G
//*T--T*
//**AG**
//*G--G*
