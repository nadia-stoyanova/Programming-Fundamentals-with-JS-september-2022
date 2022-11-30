function valueString(arr) {
  let text = arr[0];
  let chCase = arr[1];
  let sum = 0;

  for (const char of text) {
    let charCode = char.charCodeAt();

    if (chCase === "LOWERCASE") {
      if (charCode > 96 && charCode < 123) {
        sum += charCode;
      }
    }
    if (chCase === "UPPERCASE") {
      if (charCode > 64 && charCode < 91) {
        sum += charCode;
      }
    }
  }
  console.log("The total sum is: " + sum);
}
valueString(["AC/DC", "UPPERCASE"]);
