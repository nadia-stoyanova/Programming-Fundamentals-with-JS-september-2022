function loadingBar(number) {
  let persentRepeat = "%".repeat(number / 10);
  let pointRepeat = ".".repeat(10 - number / 10);
  if (number === 100) {console.log("100% Complete!"); console.log(`[${persentRepeat}]`)}
  else {
    console.log(`${number}% [${persentRepeat}${pointRepeat}]`);
    console.log(`Still loading...`);
  }
}
loadingBar(100);
