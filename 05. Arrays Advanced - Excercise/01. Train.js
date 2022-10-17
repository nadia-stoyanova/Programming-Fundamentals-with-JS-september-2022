function train(array) {
  let wagons = array.shift().split(" ");
  let maxPasenjers = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    let newArr = [];
    newArr = array[i].split(" ");

    if (newArr[0] === "Add") {
      wagons.push(Number(newArr[1]));
    } else {
      for (let i = 0; i < wagons.length; i++) {
        let passegers = Number(newArr[0]);

        if (passegers + Number(wagons[i]) <= maxPasenjers && passegers > 0) {
          wagons[i] = Number(newArr[0]) + Number(wagons[i]);
          passegers = 0;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
