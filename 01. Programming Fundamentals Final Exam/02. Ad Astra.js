function adAstra(textArr) {
  const pattern = /([#|])[A-Za-z ]+\1\d{2}\/\d{2}\/\d{2}\1\d{1,5}\1/g;
  const text = textArr.shift();

  let matches = text.match(pattern);

  if (matches !== null){
  let sum = 0;
  for (const match of matches) {
    let chForSplit = match[0];
    let newArr = match.split(chForSplit);
    sum += Number(newArr[3]);
  }
  console.log(`You have food to last you for: ${Math.trunc(sum / 2000)} days!`);

  for (const match of matches) {
    let chForSplit = match[0];
    let newArr = match.split(chForSplit);
    console.log(
      `Item: ${newArr[1]}, Best before: ${newArr[2]}, Nutrition: ${newArr[3]}`
    );
  }
} else {console.log(`You have food to last you for: 0 days!`);}
}
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"])
