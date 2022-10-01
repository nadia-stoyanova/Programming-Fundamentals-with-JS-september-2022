function spiceMustFlow(startingYield) {
  let day = 0;
  let stY = startingYield;
  while (stY >= 100) {
    day++;
    stY -= 10;
  }
  let workersConsume = day * 26 + 26;
  let add = startingYield;
  for (let i = 1; i < day; i++) add += startingYield - i * 10;
  console.log(day);
  if (day === 0 && startingYield > 52) {
    startingYield = startingYield;
  } else if (day === 0 && startingYield > 26) {
    startingYield = startingYield - 26;
  } else startingYield = 0;
  day != 0 ? console.log(add - workersConsume) : console.log(startingYield);
}
