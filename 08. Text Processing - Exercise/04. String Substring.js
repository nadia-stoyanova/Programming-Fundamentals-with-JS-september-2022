function stringSubstring(searchWord, text) {
  text = text.toLowerCase();
  let isFind = false;
  const arr = text.split(" ");
  arr.forEach((word) => {
    if (word === searchWord) {
      isFind = true;
      console.log(searchWord);
      return;
    }
  });
  if (!isFind) {
    console.log(searchWord + " not found!");
  }
}
stringSubstring("javasscript", "JavaScript is the best programming language");
