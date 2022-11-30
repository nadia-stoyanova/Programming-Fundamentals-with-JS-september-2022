function pirates(input) {
  let cities = {};

  while (input[0] !== "Sail") {
    let line = input.shift().split("||");
    let citi = line[0];
    population = Number(line[1]);
    gold = Number(line[2]);
    if (cities.hasOwnProperty(citi)) {
      cities[citi].population += population;
      cities[citi].gold += gold;
    } else {
      cities[citi] = { population, gold };
    }
  }

  while (input[0] !== "End") {
    let line = input.shift().split("=>");
    let command = line[0];

    if (command === "Plunder") {
      let town = line[1];
      let people = Number(line[2]);
      let gold = Number(line[3]);

      cities[town].population -= people;
      cities[town].gold -= gold;
      if (cities[town].population === 0 || cities[town].gold === 0) {
        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
        console.log(`${town} has been wiped off the map!`);
        delete cities[town];
      } else {
        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
      }
    } else if (command === "Prosper") {
      let town = line[1];
      let gold = Number(line[2]);
      if (gold < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        cities[town].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`
        );
      }
    }
  }

  if (Object.keys(cities).length === 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(cities).length
      } wealthy settlements to go to:`
    );
    for (const citi in cities) {
      console.log(
        `${citi} -> Population: ${cities[citi].population} citizens, Gold: ${cities[citi].gold} kg`
      );
    }
  }
}
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
