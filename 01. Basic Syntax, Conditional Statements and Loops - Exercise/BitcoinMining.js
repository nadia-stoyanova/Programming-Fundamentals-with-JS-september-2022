function bitcoinMining(input) {
  let sum = 0;
  let bitcoin = 11949.16;
  let day = 0;
  let fbit = 0;
  for (let i = 0; i < input.length; i++) {
    (i + 1) % 3 === 0
      ? (sum += Number(input[i]) * 0.7 * 67.51)
      : (sum += Number(input[i]) * 67.51);
    if (sum < bitcoin && fbit === 0) day++;
    else if (sum >= bitcoin && fbit === 0) {
      day++;
      fbit = 1;
    }
  }
  console.log(`Bought bitcoins: ${parseInt(sum / bitcoin)}`);
  fbit != 0 ? console.log(`Day of the first purchased bitcoin: ${day}`) : "";
  console.log(
    `Left money: ${(sum - parseInt(sum / bitcoin) * bitcoin).toFixed(2)} lv.`
  );
}
