function mirrorWords(input) {
  let pattern = /([#@])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
  let count = 0;
  let exec = pattern.exec(input);
  let newArr = [];

  while (exec) {
    count++;
    let revString = exec.groups.word2.split("").reverse().join("");
    if (exec.groups.word1 === revString) {
      let str = exec.groups.word1 + " <=> " + exec.groups.word2;
      newArr.push(str);
    }
    exec = pattern.exec(input);
  }
  if (count === 0) {
    console.log(`No word pairs found!`);
    console.log("No mirror words!");
  } else {
    if (newArr.length !== 0) {
      console.log(`${count} word pairs found!`);
      console.log("The mirror words are:");
      console.log(newArr.join(", "));
    } else {
      console.log(`${count} word pairs found!`);
      console.log("No mirror words!");
    }
  }
}
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
