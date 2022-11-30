function hardWord(text) {
  let text1 = text[0].split(" ");

  for (const word of text1) {
    if (word.startsWith("_") && word.endsWith("_")) {
      for (const el of text[1]) {
        if (el.length === word.length) {
          text1.splice(text1.indexOf(word), 1, el);
        }
      }
    } else if (word.startsWith("_") && word.endsWith(",")) {
      for (const el of text[1]) {
        if (el.length === word.length - 1) {
          text1.splice(text1.indexOf(word), 1, `${el},`);
        }
      }
    } else if (word.startsWith("_") && word.endsWith(".")) {
      for (const el of text[1]) {
        if (el.length === word.length - 1) {
          text1.splice(text1.indexOf(word), 1, `${el}.`);
        }
      }
    }
  }
  console.log(text1.join(" "));
}
hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
