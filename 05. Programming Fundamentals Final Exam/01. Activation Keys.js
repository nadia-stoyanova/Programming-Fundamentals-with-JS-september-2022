function activationKeys(input) {
  let key = input.shift();

  while (input[0] !== "Generate") {
    let line = input.shift().split(">>>");
    let command = line[0];

    if (command === "Contains") {
      let subString = line[1];
      if (key.includes(subString)) {
        console.log(`${key} contains ${subString}`);
      } else {
        console.log("Substring not found!");
      }
    } else if (command === "Flip") {
      let caseInd = line[1];
      let startInd = line[2];
      let endInd = line[3];

      let subStr = key.substring(startInd, endInd);
      if (caseInd === "Upper") {
        let newSubStr = subStr.toUpperCase();
        key = key.replace(subStr, newSubStr);

        console.log(key);
      } else {
        let newSubStr = subStr.toLowerCase();
        key = key.replace(subStr, newSubStr);
        console.log(key);
      }
    } else if (command === "Slice") {
      let startInd = line[1];
      let endInd = line[2];
      let subStr = key.substring(startInd, endInd);
      key = key.replace(subStr, "");

      console.log(key);
    }
  }
  console.log(`Your activation key is: ${key}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
