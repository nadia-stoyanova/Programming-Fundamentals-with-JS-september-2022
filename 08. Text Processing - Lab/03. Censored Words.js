function censoredWords(text, word) {
  let arr = text.split(word);
  console.log(arr.join("*".repeat(word.length)));
}
censoredWords("A small sentence with A some words", "A");
