function listOfProducts(array) {
  let newArr = array.sort();
  for (let i = 0; i < newArr.length; i++) {
    console.log(`${i + 1}.${newArr[i]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
