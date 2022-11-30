function plantDiscovery(input) {
  let n = Number(input.shift());
  let plants = {};

  for (let i = 0; i < n; i++) {
    let line = input.shift().split("<->");
    let plant = line[0];
    let rarity = Number(line[1]);
    if (plants.hasOwnProperty(plant)) {
      plants[plant].rarity = rarity;
    } else {
      plants[plant] = { rarity, rating: [] };
    }
  }

  while (input[0] !== "Exhibition") {
    let line = input.shift().split(": ");
    let command = line[0];

    if (command === "Rate") {
      let plant = line[1].split(" - ")[0];
      let rating = Number(line[1].split(" - ")[1]);

      if (plants.hasOwnProperty(plant)) {
        plants[plant].rating.push(rating);
      } else {
        console.log("error");
      }
    } else if (command === "Update") {
      let plant = line[1].split(" - ")[0];
      let newRarity = Number(line[1].split(" - ")[1]);
      if (plants.hasOwnProperty(plant)) {
        plants[plant].rarity = newRarity;
      } else {
        console.log("error");
      }
    } else if (command === "Reset") {
      let plant = line[1].split(" - ")[0];
      if (plants.hasOwnProperty(plant)) {
        plants[plant].rating = [];
      } else {
        console.log("error");
      }
    }
  }
  console.log(`Plants for the exhibition:`);

  for (const plant in plants) {
    let averRating = 0;
    let sum = 0;
    let count = 0;
    for (const el of plants[plant].rating) {
      sum += Number(el);
      count++;
    }

    if (sum === 0) {
      averRating = 0;
    } else {
      averRating = sum / count;
    }

    console.log(
      `- ${plant}; Rarity: ${
        plants[plant].rarity
      }; Rating: ${averRating.toFixed(2)}`
    );
  }
 }

plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
