function rounding(num, round) {
  if (round > 15) round = 15;
  console.log(`${parseFloat(num.toFixed(round))}`);
}
