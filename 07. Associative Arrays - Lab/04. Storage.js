function storage(input) {
  let result = {};

  for (let line of input) {
    let [product, qty] = line.split(" ");
    qty = Number(qty);
    if (result.hasOwnProperty(product)) {
      let exsisting = result[product];
      result[product] = exsisting + qty;
    } else {
      result[product] = qty;
    }
  }

  for (let product in result) {
    console.log(product, "->", result[product]);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
