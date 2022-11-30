function countStringOccurrences(text, searchedWord) {
  let arr = text.split(" ");
  let counter = 0;
  for (const word of arr) {
    if (word === searchedWord) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
