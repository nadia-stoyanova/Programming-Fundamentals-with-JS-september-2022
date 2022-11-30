function piccolo(arrayCars) {
  let parking = {};

  for (const line of arrayCars) {
    let [direction, carNumber] = line.split(", ");

    if (direction === "IN") {
      parking[carNumber] = direction;
    } else {
      delete parking[carNumber];
    }
  }

  let sorted = Object.entries(parking).sort((a, b) => a[0].localeCompare(b[0]));

  if (sorted.length === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    for (const [carNumber, direction] of sorted) {
      console.log(carNumber);
    }
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
