function modernTimes(text) {
  let arrText = text.split(" ");

  arrText.forEach((word) => {
    let isValid = true;
    let str = "";
    if (word[0] == "#" && word.length > 1) {
      woldNew = word.toLowerCase();
      for (let index = 1; index < word.length; index++) {
        if (
          woldNew[index].charCodeAt() > 96 &&
          woldNew[index].charCodeAt() < 123
        ) {
          str += word[index];
        } else {
          isValid = false;
        }
      }
      if (isValid) {
        console.log(str);
      }
    }
  });
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
