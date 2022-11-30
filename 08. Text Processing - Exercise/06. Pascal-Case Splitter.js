function pascalCaseSplitter(text) {
  let str = text[0];
  let arr = text.split("");

  for (let index = 1; index < arr.length; index++) {
    let ch = arr[index];
    if (ch === ch.toUpperCase()) {
      str += ", " + ch;
    } else {
      str += ch;
    }
  }
  console.log(str);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
