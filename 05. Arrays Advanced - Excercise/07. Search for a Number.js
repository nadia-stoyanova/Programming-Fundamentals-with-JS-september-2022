function searchForANumber(array, actions) {
  let takeElements = actions[0];
  let deleteElements = actions[1];
  let searchNumber = actions[2];

  let result = array.slice(0, takeElements);

  result.splice(0, deleteElements);

  let counter = 0;
  for (let element of result) {
    if (element === searchNumber) {
      counter++;
    }
  }

  console.log(`Number ${searchNumber} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
