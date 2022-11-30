function race(inputArr) {
  let racersArray = inputArr.shift().split(", ");
  let raceObject = {};
  const patternName = /[A-Za-z]+/g;
  const patternDistance = /[0-9]+/g;

  let currentLine = inputArr.shift();

  while (currentLine !== "end of race") {
    let racerName = currentLine.match(patternName).join("");
    let raserDistance = currentLine.match(patternDistance).join("");

    if (racersArray.includes(racerName)) {
      let distance = 0;

      for (const digit of raserDistance) {
        distance += Number(digit);
      }

      if (!raceObject.hasOwnProperty(racerName)) {
        raceObject[racerName] = distance;
      } else {
        raceObject[racerName] += distance;
      }
    }
    currentLine = inputArr.shift();
  }

  let sortedObj = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);

  let firstPlace = sortedObj[0][0];
  let secondPlace = sortedObj[1][0];
  let thirdPlace = sortedObj[2][0];

  console.log(`1st place: ${firstPlace}`);
  console.log(`2nd place: ${secondPlace}`);
  console.log(`3rd place: ${thirdPlace}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
