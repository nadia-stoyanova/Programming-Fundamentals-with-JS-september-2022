function oddAndEvenSum(num) {
  let numberAsString = String(num)
  
  let evenSum = 0;
  let oddSum = 0;
  let stringLength = numberAsString.length;
  for (let index = 0; index < stringLength; index++) {
    let singleNum = Number(numberAsString[index]);
    if (singleNum % 2 === 0) {
      evenSum += singleNum;
    } else {
      oddSum += singleNum;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
