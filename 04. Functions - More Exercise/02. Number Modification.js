function numberModification(number) {
  let sumDigit = 0;
  let str = String(number);
  let StrLength = String(number).length;

  for (let i = 0; i < StrLength; i++) {
    sumDigit += Number(str[i]);
  }

  let advSum = sumDigit / StrLength;

  while (advSum < 5) {
    str += 9;
    sumDigit += 9;
    StrLength++;
    advSum = sumDigit / StrLength;
  }
  console.log(str);
}
numberModification(5835);
