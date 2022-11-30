function theImitationGame(inputArray) {
  let text = inputArray.shift();
  let currentLine = inputArray.shift();

  while (currentLine !== "Decode") {
    let currentArray = currentLine.split("|");
    let instruction = currentArray[0];

    if (instruction === "Move") {
      let n = Number(currentArray[1]);
      let sub1 = text.substring(0, n);
      let sub2 = text.substring(n);
      text = sub2 + sub1;
    } else if (instruction === "Insert") {
      let index = Number(currentArray[1]);
      let value = currentArray[2];
      let sub1 = text.substring(0, index);
      let sub2 = text.substring(index);
      text = sub1 + value + sub2;
    } else if (instruction === "ChangeAll") {
      let substr = currentArray[1];
      let replacement = currentArray[2];
      text = text.split(substr).join(replacement);
    }
    currentLine = inputArray.shift();
  }
  console.log(`The decrypted message is: ${text}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
