function secretChat(input) {
  let message = input.shift();
 
  while (input[0] !== "Reveal") {
    let line = input.shift().split(":|:");
  
    let command = line[0];

    if (command === "InsertSpace") {
      let index = Number(line[1]);
      let str1 = message.substring(0, index);
      let str2 = message.substring(index);
      message = str1 + " " + str2;
      console.log(message);
    } else if (command === "Reverse") {
      let subStr = line[1];
      if (message.includes(subStr)) {
        let newMessage = message.replace(subStr, "");
        let reverseSubStr = subStr.split("").reverse().join("");
        message = newMessage + reverseSubStr;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (command === "ChangeAll") {
      let subString = line[1];
      let replacement = line[2];
      let newMessage = message.split(subString).join(replacement);
      message = newMessage;
      console.log(message);
    }
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
