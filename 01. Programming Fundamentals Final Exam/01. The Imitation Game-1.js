function theImitationGame(input) {
  let message = input.shift();

  while (input[0] !== "Decode") {
    let line = input.shift().split("|");
    let command = line[0];

    switch (command) {
      case "Move":
        let n = Number(line[1]);
        let subStr1 = message.substring(0, n);
        let subStr2 = message.substring(n);
        message = subStr2 + subStr1;
        break;
        
      case "Insert":
        let index = Number(line[1]);
        let value = line[2];
        let subStrInsert1 = message.substring(0, index);
        let subStrInsert2 = message.substring(index);
        message = subStrInsert1 + value + subStrInsert2;
        break;

      case "ChangeAll":
        let subString = line[1];
        let replacement = line[2];
        while (message.includes(subString)) {
          message = message.replace(subString, replacement);
        }
        break;
    }
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
