function needForSpeed(input) {
  let n = Number(input.shift());
  let cars = {};

  for (let index = 0; index < n; index++) {
    let [car, mileage, fuel] = input.shift().split("|");
    cars[car] = { mileage: Number(mileage), fuel: Number(fuel) };
  }
  while (input[0] !== "Stop") {
    let line = input.shift().split(" : ");
    let command = line[0];

    if (command === "Drive") {
      let car = line[1];
      let distance = Number(line[2]);
      let fuel = Number(line[3]);
      if (cars[car].fuel < fuel) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        cars[car].mileage += distance;
        cars[car].fuel -= fuel;
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      }
      if (cars[car].mileage >= 100000) {
        console.log(`Time to sell the ${car}!`);
        delete cars[car];
      }
    } else if (command === "Refuel") {
      let car = line[1];
      let fuel = Number(line[2]);
      if (cars[car].fuel + fuel > 75) {
        fuel = 75 - cars[car].fuel;
        cars[car].fuel = 75;
        console.log(`${car} refueled with ${fuel} liters`);
      } else {
        cars[car].fuel += fuel;
        console.log(`${car} refueled with ${fuel} liters`);
      }
    } else if (command === "Revert") {
      let car = line[1];
      let kilometers = Number(line[2]);

      if (cars[car].mileage - kilometers < 10000) {
        cars[car].mileage = 10000;
      } else {
        cars[car].mileage -= kilometers;
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
    }
  }

  for (const car in cars) {
    console.log(
      `${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`
    );
  }
}
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
