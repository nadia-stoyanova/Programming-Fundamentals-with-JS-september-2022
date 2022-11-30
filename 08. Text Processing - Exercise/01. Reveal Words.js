function revealWords(searchWords, text) {
  let arrSrchWord = searchWords.split(", ");

  for (let index = 0; index < arrSrchWord.length; index++) {
    const elementLength = arrSrchWord[index].length;
    let len = "*".repeat(elementLength);
    text = text.replace(len, arrSrchWord[index]);
  }
  console.log(text);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
