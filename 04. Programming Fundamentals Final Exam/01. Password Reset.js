function passwordReset(input) {
  let string = input.shift();
  let newString = "";

  while (input[0] !== "Done") {
    let line = input.shift().split(" ");
    let command = line[0];

    if (command === "TakeOdd") {
      for (let index = 0; index < string.length; index++) {
        if (index % 2 !== 0) {
          newString += string[index];
        }
      }
      string = newString;
      console.log(string);
    } else if (command === "Cut") {
      let index = Number(line[1]);
      let length = Number(line[2]);
      let subString = string.substring(index, index + length);
      let newString = string.replace(subString, "");
      string = newString;
      console.log(string);
    } else if (command === "Substitute") {
      let subString = line[1];
      let substitute = line[2];

      if (string.includes(subString)) {
        let newString = string.split(subString).join(substitute);
        console.log(newString);
        string = newString;
      } else {
        console.log("Nothing to replace!");
      }
    }
  }

  console.log(`Your password is: ${string}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
