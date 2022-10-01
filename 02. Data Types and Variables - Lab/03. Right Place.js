function rightPlace(str1, char, str2) {
  let str = str1.replace("_", char);
  let output = str == str2 ? "Matched" : "Not Matched";
  console.log(output);
}
