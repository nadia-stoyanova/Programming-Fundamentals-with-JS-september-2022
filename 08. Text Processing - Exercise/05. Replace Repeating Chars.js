function replaceRepeatingChars(text) {
  let str = text[0];
  for (let index = 1; index < text.length; index++) {
    let prevCh = text[index - 1];
    let currentChar = text[index];
    if (prevCh !== currentChar) {
      str += currentChar;
    }
  }
  console.log(str);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
