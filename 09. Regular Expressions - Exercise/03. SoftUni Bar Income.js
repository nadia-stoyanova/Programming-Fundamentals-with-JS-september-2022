function softUniBarIncome(inputArray) {
  const pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>[\d]+)\|[^|$%\.0-9]*(?<price>[0-9]+[\.]?[\d]*)\$/gm;

  let totalPrice = 0;

  let currentLine = inputArray.shift();

  while (currentLine !== "end of shift") {
    let currentExec = pattern.exec(currentLine);

    while (currentExec !== null) {
      let name = currentExec.groups.name;
      let product = currentExec.groups.product;
      let count = Number(currentExec.groups.count);
      let price = Number(currentExec.groups.price);

      let currentProductPrice = count * price;
      totalPrice += currentProductPrice;

      console.log(`${name}: ${product} - ${currentProductPrice.toFixed(2)}`);
      currentExec = pattern.exec(currentLine);
    }

    currentLine = inputArray.shift();
  }

  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
