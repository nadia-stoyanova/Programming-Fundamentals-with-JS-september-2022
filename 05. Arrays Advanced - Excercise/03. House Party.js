function houseParty(array) {
  let guests = [];

  for (let i = 0; i < array.length; i++) {
    let curentArr = array[i].split(" ");
    if (curentArr.length === 3) {
      if (!guests.includes(curentArr[0])) {
        guests.push(curentArr[0]);
      } else {
        console.log(`${curentArr[0]} is already in the list!`);
      }
    } else {
      if (guests.includes(curentArr[0])) {
        for (let i = 0; i < guests.length; i++) {
          if (guests[i] === curentArr[0]) {
            guests.splice(i, 1);
          }
        }
      } else {
        console.log(`${curentArr[0]} is not in the list!`);
      }
    }
  }
  for (let el of guests) {
  console.log(el); }
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
