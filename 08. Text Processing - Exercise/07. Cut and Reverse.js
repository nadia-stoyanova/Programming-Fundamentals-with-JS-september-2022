function cutAndReverse(text) {
  let half = text.length / 2;
  let text1 = text.substring(0, half).split("").reverse().join("");
  let text2 = text.substring(half).split("").reverse().join("");

  console.log(text1);
  console.log(text2);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
