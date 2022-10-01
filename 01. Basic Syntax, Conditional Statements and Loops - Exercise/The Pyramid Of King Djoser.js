function pyramidOfKingDjoser(base, increment) {
  let stones = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let step = 0;
  for (let i = base; i >= 1; i -= 2) {
    step += 1;
    if (i - 2 <= 0) {
      gold += i * i;
    } else {
      if (step % 5 === 0) {
        lapisLazuli += 4 * i - 4;
        stones += (i - 2) * (i - 2);
      } else {
        marble += 4 * i - 4;
        stones += (i - 2) * (i - 2);
      }
    }
  }
  console.log(`Stone required: ${Math.ceil(stones * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}
