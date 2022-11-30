function treasureFinder(array) {
  let key = array[0].split(" ").map(Number);

  let index = 1;
  let currentLine = array[index];
  while (currentLine !== "find") {
    let i = 0;
    let newline = "";
    for (const char of currentLine) {
      let newStr = String.fromCharCode(char.charCodeAt() - key[i]);
      i++;
      if (i >= key.length) {
        i = 0;
      }
      newline += newStr;
    }

    index++;
    currentLine = array[index];

    let element = newline.split("&");
    let elem = element[1];
    let coordinates = element[2].split("<")[1].split(">")[0];

    console.log(`Found ${elem} at ${coordinates}`);
  }
}
treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
