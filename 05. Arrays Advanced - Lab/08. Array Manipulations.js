function arrayManipulations(array) {
  let arrayOfNumbers = array.shift().split(" ");

  for (let i = 0; i < array.length; i++) {
    let newArr = [];
    newArr = array[i].split(" ");
    switch (newArr[0]) {
      case "Add":
        arrayOfNumbers.push(newArr[1]);
        break;
      case "Remove":
        let value = Number(newArr[1]);
        for (let i = 0; i < arrayOfNumbers.length; i++) {
          if (arrayOfNumbers[i] == value) {
            arrayOfNumbers.splice(i, 1);
          }
        }
        break;
      case "Remove":
      case "RemoveAt":
        let k = Number(newArr[1]);
        arrayOfNumbers.splice(k, 1);
        break;
      case "Insert":
        let number = newArr[1];
        let index = Number(newArr[2]);
        arrayOfNumbers.splice(index, 0, number);
        break;
    }
  }
  console.log(arrayOfNumbers.join(" "));
}
arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
