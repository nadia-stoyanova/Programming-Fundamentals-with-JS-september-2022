function storeProvision(avelable, delivery) {
  const storedProducts = {};
  const avelableLen = avelable.length;
  const deliveryLen = delivery.length;

  for (let i = 0; i < avelableLen; i += 2) {
    const currentProduct = avelable[i];
    storedProducts[currentProduct] = Number(avelable[i + 1]);
  }

  for (let i = 0; i < deliveryLen; i += 2) {
    const currentProduct = delivery[i];
    if (!storedProducts.hasOwnProperty(currentProduct)) {
      storedProducts[currentProduct] = 0;
    }
    storedProducts[currentProduct] += Number(delivery[i + 1]);
  }

  for (const currentProduct in storedProducts) {
    console.log(`${currentProduct} -> ${storedProducts[currentProduct]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
